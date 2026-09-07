import type { Editor } from "obsidian";
import { StateEffect, StateField } from "@codemirror/state";
import { Decoration, type DecorationSet, EditorView } from "@codemirror/view";
import { buildMiniSearchQueryParts } from "./entry-helpers/search-parts";
import { parseTimelineQuery } from "./timeline-search";

type EditorPosition = { line: number; ch: number };
type SearchTextRange = { start: number; end: number };
type SearchEditor = Pick<Editor, "getValue" | "scrollIntoView"> & { cm?: EditorView };

const setSearchHighlight = StateEffect.define<DecorationSet>();
const clearSearchHighlight = StateEffect.define<null>();
const searchHighlightField = StateField.define<DecorationSet>({
	create: () => Decoration.none,
	update(value, transaction) {
		let next = value.map(transaction.changes);
		for (const effect of transaction.effects) {
			if (effect.is(setSearchHighlight)) next = effect.value;
			if (effect.is(clearSearchHighlight)) next = Decoration.none;
		}
		return next;
	},
	provide: (field) => EditorView.decorations.from(field)
});

const clearTimers = new WeakMap<EditorView, number>();

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getHighlightCandidates(query: string): string[] {
	const parsed = parseTimelineQuery(query);
	const candidates: string[] = [];
	const seen = new Set<string>();
	const add = (value: string): void => {
		const text = String(value || "").trim();
		if (!text) return;
		const key = text.toLocaleLowerCase();
		if (seen.has(key)) return;
		seen.add(key);
		candidates.push(text);
	};

	for (const phrase of parsed.exactPhrases) add(phrase);
	const parts = buildMiniSearchQueryParts(parsed);
	for (const token of parts.includeText.split(/\s+/g)) add(token);
	return candidates;
}

function findCandidateIndex(content: string, candidate: string, from: number): SearchTextRange | null {
	const words = candidate.split(/\s+/g).filter(Boolean).map(escapeRegExp);
	if (words.length === 0) return null;
	const pattern = new RegExp(words.join("\\s+"), "giu");
	pattern.lastIndex = Math.max(0, from);
	const match = pattern.exec(content);
	if (!match || typeof match.index !== "number") return null;
	return { start: match.index, end: match.index + match[0].length };
}

function positionAt(content: string, offset: number): EditorPosition {
	const safeOffset = Math.max(0, Math.min(content.length, offset));
	const before = content.slice(0, safeOffset);
	const lastNewline = before.lastIndexOf("\n");
	return {
		line: (before.match(/\n/g) ?? []).length,
		ch: lastNewline >= 0 ? safeOffset - lastNewline - 1 : safeOffset
	};
}

function getPreferredOffset(content: string, preferredLine: number): number {
	const line = Math.max(0, Math.floor(Number(preferredLine) || 0));
	const lines = content.split("\n");
	let preferredOffset = 0;
	for (let i = 0; i < Math.min(line, lines.length - 1); i++) preferredOffset += lines[i].length + 1;
	return preferredOffset;
}

function findCandidateRanges(content: string, query: string, preferredLine: number): SearchTextRange[] {
	const candidates = getHighlightCandidates(query);
	if (candidates.length === 0) return [];
	const preferredOffset = getPreferredOffset(content, preferredLine);
	const ranges: SearchTextRange[] = [];

	for (const candidate of candidates) {
		const match = findCandidateIndex(content, candidate, preferredOffset);
		if (match) {
			ranges.push(match);
			continue;
		}
		if (preferredOffset > 0) {
			const fallback = findCandidateIndex(content, candidate, 0);
			if (fallback) ranges.push(fallback);
		}
	}

	// Exact phrases and their individual terms can overlap. CodeMirror expects
	// decoration ranges to be non-overlapping, so coalesce those ranges.
	ranges.sort((a, b) => a.start - b.start || a.end - b.end);
	const merged: SearchTextRange[] = [];
	for (const range of ranges) {
		const previous = merged[merged.length - 1];
		if (previous && range.start <= previous.end) {
			previous.end = Math.max(previous.end, range.end);
		} else {
			merged.push({ ...range });
		}
	}
	return merged;
}

export function findSearchTextRanges(content: string, query: string, preferredLine: number = 0): SearchTextRange[] {
	const text = String(content || "");
	if (!text) return [];
	return findCandidateRanges(text, query, preferredLine);
}

export function findSearchTextRange(content: string, query: string, preferredLine: number = 0): SearchTextRange | null {
	const text = String(content || "");
	if (!text) return null;
	const candidates = getHighlightCandidates(query);
	if (candidates.length === 0) return null;
	const preferredOffset = getPreferredOffset(text, preferredLine);

	for (const candidate of candidates) {
		const match = findCandidateIndex(text, candidate, preferredOffset);
		if (match) return match;
		if (preferredOffset > 0) {
			const fallback = findCandidateIndex(text, candidate, 0);
			if (fallback) return fallback;
		}
	}
	return null;
}

function ensureSearchHighlightField(editorView: EditorView): boolean {
	try {
		if (editorView.state.field(searchHighlightField, false)) return true;
		editorView.dispatch({ effects: StateEffect.appendConfig.of(searchHighlightField) });
		return !!editorView.state.field(searchHighlightField, false);
	} catch {
		return false;
	}
}

export function highlightSearchText(editor: SearchEditor, query: string, preferredLine: number = 0): boolean {
	try {
		const editorView = editor.cm;
		if (!editorView || !ensureSearchHighlightField(editorView)) return false;
		const content = String(editor.getValue() || "");
		const range = findSearchTextRange(content, query, preferredLine);
		const ranges = findSearchTextRanges(content, query, preferredLine);
		if (!range || ranges.length === 0) return false;

		const mark = Decoration.mark({ class: "epochgram-search-highlight" });
		const decorations = ranges.map((match) => mark.range(match.start, match.end));
		editorView.dispatch({ effects: setSearchHighlight.of(Decoration.set(decorations)) });
		const previousTimer = clearTimers.get(editorView);
		if (previousTimer != null) window.clearTimeout(previousTimer);
		const timer = window.setTimeout(() => {
			try {
				editorView.dispatch({ effects: clearSearchHighlight.of(null) });
			} catch {
				// The editor may have been detached before the timer fired.
			}
			clearTimers.delete(editorView);
		}, 5000);
		clearTimers.set(editorView, timer);

		const from = positionAt(content, range.start);
		const to = positionAt(content, range.end);
		editor.scrollIntoView({ from, to }, true);
		return true;
	} catch {
		return false;
	}
}
