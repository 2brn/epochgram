<h1 align="center"><img src="docs/icons/epochgram.svg" width="22" height="22" alt="Epochgram"> Epochgram for Obsidian</h1>

<h6 align="center">
A Time Map of Your Mind
</h2>

> [!CAUTION]
> **Pain**: Your vault fills up with quick capture notes. A week later, you've lost the thread. A month later, you can't reconstruct the story — and you don't see the themes, the slow stretches, or the bursts of activity.

> [!TIP]
> **Solution**: Epochgram turns your vault into a scalable timeline retrospective. Browse day by day to scan changes in order, spot bigger patterns across unsorted notes, and edit directly on the timeline — so you can focus on what really matters.

> [!IMPORTANT]
> Epochgram Pro adds even more overview:
> - On-device AI summarization (via Google Chrome)
> - Epochs: a zoomable time map, from day details to big-picture overview, with support for standalone HTML export
> - Similarity: find related notes via links, tags, titles, and semantic matching
> - Topic clusters with auto detection
> - Content change history with tracked edits
> - Recurring events

## Table of Contents

- [Get Started](#get-started)
- [Timeline](#timeline)
- [Filters & Search](#filters--search)
- [Actions](#actions)
- [Review State](#review-state)
- [Recurring (Pro)](#recurring-pro)
- [Similarity (Pro)](#similarity-pro)
- [AI Bridge (Pro, Desktop-only)](#ai-bridge-pro-desktop-only)
- [AI Summaries & Epochs (Pro, Desktop-only)](#ai-summaries--epochs-pro-desktop-only)
- [Custom Frontmatter](#custom-frontmatter)
- [Settings & Data](#settings--data)
- [FAQ](#faq)
- [Disclosures](#disclosures)

## Get Started

After enabling the plugin, the timeline opens automatically. If it is hidden, click the Epochgram ribbon icon or run **⌘ Epochgram: Open timeline** to open it in the right panel. On mobile, it opens as a slide-in panel from the right.

> [!TIP]
> **⛭ Open timeline on startup** → open timeline automatically on Obsidian launch.

> [!TIP]
> Cheat sheet (☞ touchscreen)
> - Click (tap) record → open file; click date → open daily note
> - Ctrl + click record → open file in a  new tab 
> - Right-click (long-tap) record/date → open context menu  
> - Right-click (long-tap) empty space → toggle Epochs view (Pro)
> - Double-click (double-tap) on empty space → scroll to Today
> - Double-click (double-tap) on date → create new Daily note
> - Wheel (pan) → scroll
> - Ctrl + wheel (pinch) → zoom
> - Alt + wheel or Alt + up/down (two-finger tap) → scroll to next record
> - Shift + wheel → zoom around the current record
> - Alt + hover cursor → show preview of the file

> [!IMPORTANT]
> Activating Pro

## Timeline

The timeline is a scrollable, zoomable surface that collects records from all files in the vault, excluding folders ignored in Obsidian settings. It detects dates and date ranges in different formats and renders *one record per file per day*, in the following priority order:

- Tracked edits (Pro) → per-block edit history (<img src="docs/icons/pen.svg" width="16" height="16" alt=""> added/modified, <img src="docs/icons/pen-line.svg" width="16" height="16" alt=""> removed); only when **⛭ Track changes** is On
- Content dates → a date (range) parsed from note content
- Filename dates → a date (range) parsed from the filename
- Frontmatter date → a date from YAML property `date`
- Created dates → file creation date

> [!TIP]
> Examples
> *my_note.md* → placed by its file creation date.  
> *01.01.2026.md* → January 1, 2026.  
> ```yaml
> ---
> date: 2026-02-02 # → override date
> ---
> ```
> *May 1, 2026* in content → adds another timeline record.  
> **Track changes (Pro)**  enabled → edits appear on the timeline day by day.

Each record appears as *note name ⸱ summary* (if **⛭ Show note name** is enabled), *summary*, or *image.jpg* for non-text files. The summary is either the first _N_ words (**⛭ Summary length** setting) or an AI summary (Pro). A custom summary can be set with YAML (`description: ...`) or from the context menu; manual summaries are never overwritten by AI, and clearing the field removes the override.

Timeline draws weekdays as <img src="docs/icons/circle.svg" width="18" height="18" alt=""> and weekends as <img src="docs/icons/circle-filled.svg" width="18" height="18" alt="">. Entries are shown stacked or side by side when space allows. Long entries are truncated with *...*, and if even that does not fit, the day collapses into a single interactive placeholder line <img src="docs/icons/minus.svg" width="18" height="18" alt="">, with extra hidden entries shown as `(+n)`. When zoomed out, records collapse into placeholder bars <img src="docs/icons/rectangle-horizontal.svg" width="18" height="18" alt="">, with height based on record count.

## Filters & Search

There are collapsible filters under <img src="docs/icons/settings.svg" width="18" height="18" alt=""> button.

- <img src="docs/icons/scan-eye.svg" width="18" height="18" alt=""> → drafts & reviewed; <img src="docs/icons/pencil-ruler.svg" width="18" height="18" alt=""> → drafts; <img src="docs/icons/eye.svg" width="18" height="18" alt=""> → drafts & reviewed & hidden

- <img src="docs/icons/history.svg" width="18" height="18" alt=""> → show tracked edits (Pro); only when **⛭ Track changes** is On

- <img src="docs/icons/calendar.svg" width="18" height="18" alt=""> → show content dates; <img src="docs/icons/square-code.svg" width="18" height="18" alt=""> → including YAML

- <img src="docs/icons/paperclip.svg" width="18" height="18" alt=""> → show non-text files

- <img src="docs/icons/hourglass.svg" width="18" height="18" alt=""> → toggle epochs view (Pro)

A search bar at the bottom lets you search timeline records. Click it or run **⌘ Epochgram: Search timeline**. Search covers file names, content, AI summaries, epochs, and more, with support for fuzzy search and `"exact text"` matching.
  
> [!TIP]
> Search shortcuts
> - Enter → open the matched file
> - Alt + Enter → filter timeline records by the current search
> - Marked → show only marked records

## Actions

Files in the vault are never modified unless you run an explicit file action. All attributes are stored in Epochgram data files, not in vault files.

Record context menu:

- <img src="docs/icons/file.svg" width="18" height="18" alt=""> MyNote.md → open the file

- <img src="docs/icons/square-pen.svg" width="18" height="18" alt=""> Edit summary → edit the record summary

- <img src="docs/icons/sparkles.svg" width="18" height="18" alt=""> Summarize AI → generate an on-device summary of the record using Google Chrome AI Bridge (Pro, desktop only)

- <img src="docs/icons/tag.svg" width="18" height="18" alt=""> Edit topic… → open the topics assignment popup; to remove topics, clear the input (Pro)

- <img src="docs/icons/pin.svg" width="18" height="18" alt=""> Pin / Unpin → pin the file at the *Today* position in addition to its date; also available via **⌘ Epochgram: Toggle pin for current file**

- <img src="docs/icons/highlighter.svg" width="18" height="18" alt=""> Mark → highlight a record or similar records with a palette color; also available via **⌘ Epochgram: Toggle mark for current file**

- <img src="docs/icons/pencil-ruler.svg" width="18" height="18" alt=""> Draft → <img src="docs/icons/eye.svg" width="18" height="18" alt=""> Reviewed → <img src="docs/icons/eye-off.svg" width="18" height="18" alt=""> Hidden → change the file review state

- <img src="docs/icons/pen-line.svg" width="18" height="18" alt=""> Rename… → rename the file in the vault

- <img src="docs/icons/folder-tree.svg" width="18" height="18" alt=""> Move to… → move the file to another folder

- <img src="docs/icons/trash2.svg" width="18" height="18" alt=""> Delete → move **the file** to trash or permanently delete it (depending on Obsidian settings)

> [!TIP]
> **⌘ Epochgram: Clear tracked changes for current file** → clear all file history at once.

## Review State

Epochgram is designed around the [C.O.D.E.](https://fortelabs.com/blog/basboverview/) process (capture → organize → distill → express). New or indexed files appear as *Draft*. After organizing the file and extracting the key points, the record can be marked as **Reviewed**. If the file changes later, the record returns to *Draft*, indicating it may need review again. The **Draft/Reviewed** actions applies to all records of the same file.

Not every record deserves space on the timeline. Some, such as minor tracked changes, can be marked **Hidden**. Hidden is applied per record, not per file. Hidden records disappear from the timeline or muted when the relevant filter is enabled.

> [!TIP]
> **⌘ Epochgram: Review all** → mark all records across the vault as reviewed.

## Recurring (Pro)

You can create recurring records, which will appear on the timeline. To add one, set the `recur` or `repeat` property in YAML. Supported formats (see [RRULE](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html)):

```
---
recur: every day
repeat: every N days
repeat: every week on mon,tue
repeat: every N weeks on mon,tue
repeat: every month on D
repeat: every year on MM-DD
repeat: FREQ=DAILY;COUNT=5 # RRULE
---
```
 
## Similarity (Pro)

Once you have a few solid notes, **Similarity** helps connect them to related records. It is used for record highlighting and mark inheritance.

Epochgram includes multiple intelligent similarity settings that work on all platforms, including iOS and Android:

- **⛭ Links** → treat notes as related through inbound and outbound links.

- **⛭ Tags** → treat notes as related when they share tags.

- **⛭ Title threshold** → use Jaro–Winkler matching to group notes with similar names or paths (higher values match more, 0 disables it).

- **⛭ Semantic threshold** → semantic similarity uses embedding [model](https://huggingface.co/TaylorAI/bge-micro-v2) to find notes with similar meaning across the vault. This is useful for notes that describe the same idea in different words.  
  
- **⛭ Topic threshold** → topics use a zero-shot [model](https://huggingface.co/MoritzLaurer/deberta-v3-xsmall-zeroshot-v1.1-all-33) for similarity grouping. When you assign a topic to a note, Epochgram finds related records across the vault. This is useful for broad themes like travel, projects, health, or astrophotography, where notes may share meaning without direct links or tags.

> [!TIP]
> Building semantic vectors and running zero-shot topic classification can take a long time on slower machines, with progress shown in the status bar, for example: *Topics... 1/100*; click the progress item to cancel the job.

When you open a record, all related records on the timeline are highlighted using the current theme color.

> [!TIP]
> **Alt + scroll** → move through related records.

**Similarity** also groups related records automatically: when you mark one record, related records inherit the same color. These records behave as one group, so changing or removing the color updates the whole group, and inherited marks are recalculated automatically if the relation later disappears.

> [!TIP]
> - **⌘ Epochgram: Toggle mark for current file** or the file context menu → assign the next unique color from the palette.
> - In addition to the standard red-to-violet palette, an extended palette is available in the submenu. This makes it easy to choose colors by activity. For example, I use <span style="color: rgb(158, 208, 203);">Glacier</span> for ski trip reports.

## AI Bridge (Pro, Desktop-only)

Epochgram Pro includes an **AI Bridge** that uses Google Chrome's on-device AI APIs for local summarization. When started, it runs a small local server on an available port at `http://127.0.0.1`. The bridge page can be opened from **Epochgram: Open AI bridge**, from the `⌀ AI` status bar button, or automatically on startup if **Open Bridge AI on startup** is enabled. This page processes summary jobs in Chrome and returns the results to the plugin. All summarization data stays **only on your device** and is not sent to external services.

On first use, Chrome may need a user gesture to download the built-in Gemini Nano model, and the drive with your Chrome profile [should have](https://developer.chrome.com/docs/ai/summarizer-api#hardware-requirements) at least **22 GB** of free space. The bridge page also serves as a control panel, showing connection and model status, queue progress, the current text preview, the latest result, and a chart with progress in yellow and processing speed in blue. Keep it open while summaries are running. You can also adjust API settings and prompt/context texts. For larger notes, Epochgram can split input into chunks, summarize them separately, then merge the results.

You can use context placeholders. File summaries support `{{filePath}}` (full file path), `{{fileName}}` (file name), and `{{related}}` (summaries of related records). Epoch summaries support `{{bucket}}` (`day`, `2days`, `4days`, `week`, `2weeks`, `month`, `3months`, `6months`, `year`) and `{{related}}`.

> [!TIP]
> Language tip
> Chrome's built-in Gemini Nano currently officially supports English, Spanish, and Japanese for input and output text. You can still try forcing another output language in the prompt context; for example, I used this context for Ukrainian:
>
> ```
> OUTPUT ONLY IN UKRAINIAN!
> ...
> ```

## AI Summaries & Epochs (Pro, Desktop-only)

**⛭ Auto summarize** → when enabled, Epochgram automatically summarizes a record through the AI Bridge each time the file changes. Even when disabled, you can still run summarization for a specific record from its context menu.

**⛭ Generate epochs** → when enabled, Epochgram creates a zoomable time map that groups many days into larger period summaries, helping you see the bigger picture and spot patterns without reading the timeline day by day. Epochs are generated hierarchically from day up to year, in essence, summaries of summaries. If highlighted records are present, epochs are colored by the most common highlight color in that range. You can also edit or regenerate epochs from the context menu.

> [!TIP]
> Commands
> **⌘ Epochgram: Summarize all** → generate all missing AI summaries and epochs.
> **⌘ Epochgram: Export epochs** → export as standalone HTML to your daily notes folder.

## Custom Frontmatter

Epochgram supports the following custom YAML properties:

```yaml
---
date: 2026-01-01 # override the anchor date
description: my summary # set a hard-coded summary
notracked: # don't use tracked edits for this file
noparsed: # don't parse dates from this file's content
nosimilar: # don't match this file by similarity
similar: [links, tags, title, semantics, topics] # match similarity only by these relations
recur: every day # create recurring records
---
```

## Settings & Data

All plugin data is stored in the vault config directory, usually `.obsidian/`:

- `epochgram-index.json` → timeline/index data
- `epochgram-search.json` → search cache
- `epochgram-summaries.json` → AI summaries and epochs
- `epochgram-semantics.json` → embeddings store
- `epochgram-topics.json` → topic similarity store
- `plugins/epochgram/data.json` → settings and view state

If Obsidian Sync is enabled, this data should sync between devices as long as **⛭ Sync → Vault configuration sync → Other file types** is turned on.

> [!TIP]
> **Double-click** a setting name/description → reset it to default.

Epochgram also provides **Rebuild** and **Reset** popups for rebuilding or clearing stored data:

- **⛭ Rebuild**
    - **⛭ All** → rebuild all data
    - **⛭ Index** → rebuild the index; useful if something is broken or after an update
    - **⛭ Search** → rebuild the [MiniSearch](https://github.com/lucaong/minisearch) cache
    - **⛭ Semantics** → rebuild embedding vectors
    - **⛭ Topics** → reclassify topics
    - **⛭ AI summaries** → queue all files for AI summary generation
    - **⛭ Epochs** → queue all epochs for regeneration
- **⛭ Reset**
    - **⛭ All** → reset all data and settings to defaults, keep license data, then rerun indexing
    - **⛭ Settings** → reset all settings to defaults
    - **⛭ Data files** → clear data files and schedule regeneration
    - **⛭ Search** → clear the search cache
    - **⛭ Pinned** → unpin all items
    - **⛭ Marks** → remove all marks
    - **⛭ Reviews** → set all records to draft
    - **⛭ Semantics** → remove all embedding vectors
    - **⛭ Topics** → remove all topics and classification data
    - **⛭ Tracked changes** → remove all tracked changes
    - **⛭ Manual summaries** → remove all manual summaries
    - **⛭ AI summaries** → remove all AI summaries and use default "first N words" summaries
    - **⛭ Epochs** → remove all epochs

## FAQ

> **How do I get support?**  
> Check the docs first. If you still cannot find relevant information, feel free to [open an issue on GitHub](https://github.com/2brn/Epochgram/issues) or [ask on the forum](FORUM_LINK). For private matters such as license or account issues, contact [contact@epochgram.com](mailto:contact@epochgram.com).

> **What should I do if Epochgram feels slow?**  
> On huge vaults or slower machines, performance may degrade. Try setting **⛭ Semantic threshold** and **⛭ Topic threshold** to `0`, and uncheck **⛭ Auto summarize** and **⛭ Generate epochs**. You can also uncheck **⛭ Enable animation** or reset plugin data.

> **What should I do if some dates are missing?**  
> Try rebuilding the index.

## Disclosures

- **Epochgram Pro**:
	- Requires an account, payment, and internet for license checks.
	- Registration and license checks may process your email address, license key, and basic server-side telemetry for license validation.
	- Is not affiliated with Obsidian Sync, Publish, or other Obsidian paid services.
	- **AI Bridge**: Epochgram starts a local server on `http://127.0.0.1` and opens a local bridge page in Google Chrome to use Chrome's on-device Summarizer API. The bridge communication stays on your device. Chrome [may download](https://developer.chrome.com/docs/ai/summarizer-api) its built-in model(s) (Gemini Nano) the first time you use these APIs. Epochgram may check common OS install paths to locate the Google Chrome executable and open the AI Bridge automatically.
	- **Similarity**: embeddings and the zero-shot topic model may be downloaded on first use via `@xenova/transformers`, including [TaylorAI/bge-micro-v2](https://huggingface.co/TaylorAI/bge-micro-v2), [MoritzLaurer/deberta-v3-xsmall-zeroshot-v1.1-all-33](https://huggingface.co/MoritzLaurer/deberta-v3-xsmall-zeroshot-v1.1-all-33), and ONNX Runtime Web WASM from [jsDelivr](https://cdn.jsdelivr.net/npm/onnxruntime-web@1.14.0/dist/).

- No ads and no client-side telemetry.
- All vault data is processed locally on your device and is NEVER sent over the internet.
- Source code is closed.
- License: MIT (see [LICENSE](LICENSE)).
