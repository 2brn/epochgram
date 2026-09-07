import { describe, expect, it } from "vitest";
import { findSearchTextRange, highlightSearchText } from "../src/ui/search-highlight";

describe("search highlighting", () => {
	it("finds an exact phrase from the search query", () => {
		const content = "First line\nThe Important phrase is here.";

		expect(findSearchTextRange(content, '"important phrase"')).toEqual({ start: 15, end: 31 });
	});

	it("prefers a match near the selected record and ignores query operators", () => {
		const content = "needle\nother text\nNeedle appears here";

		expect(findSearchTextRange(content, "needle -excluded $marked", 2)).toEqual({ start: 18, end: 24 });
	});

	it("does nothing when the query only contains operators", () => {
		expect(findSearchTextRange("Some content", "$marked !current")).toBeNull();
	});

	it("does not use editor selection for the highlight", () => {
		const editor = {
			getValue: () => "Some content",
			scrollIntoView: () => {}
		};

		expect(highlightSearchText(editor, "content")).toBe(false);
	});
});
