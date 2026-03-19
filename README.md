---
notracked:
noparsed:
description: Epochgram Docs
---
<h2 align="center">Epochgram Essentials</h2>

> **Pain**: Your vault fills up with quick capture notes. A week later, youâ€™ve lost the thread. A month later, you canâ€™t reconstruct the story â€” and you donâ€™t see the themes, the slow stretches, or the bursts of activity.

> **Solution**: Epochgram turns your vault into a scalable timeline retrospective. Browse day by day to scan changes in order, spot bigger patterns across unsorted notes, and edit directly on the timeline â€” so you can focus on what really matters.

> [!tip] Epochgram Pro adds even more overview:
> - On-device AI summarization (via Google Chrome)
> - Epochs: a zoomable time map, from day details to big-picture overview, with support for standalone HTML export
> - Similarity: find related notes via links, tags, titles, and semantic matching
> - Topic clusters with auto detection
> - Content change history with tracked edits
> - Recurring events

---

## Table of Contents

- [[#Get Started]]
- [[#Timeline]]
- [[#Filters & Search]]
- [[#Actions]]
- [[#Review State]]
- [[#Recurring (Pro)]]
- [[#Similarity (Pro)]]
- [[#AI Bridge (Pro, Desktop-only)]]
- [[#AI Summaries & Epochs (Pro, Desktop-only)]]
- [[#Custom Frontmatter]]
- [[#Settings & Data]]
- [[#FAQ]]
- [[#Disclosures]]

---

## Get Started

After enabling the plugin, the timeline opens automatically. If it is hidden, click the Epochgram ribbon icon <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.4418 13.9406C4.5189 10.8368 5.9231 7.4146 8.9147 5.9097C11.9063 4.4049 15.4914 5.3184 17.4326 7.9104C18.362 7.5622 19.2119 7.2705 19.9675 7.0295C17.4276 2.9362 12.1364 1.3873 7.7501 3.5935C3.3637 5.7997 1.452 10.9707 3.224 15.4505C3.8682 14.9872 4.6086 14.4791 5.4425 13.9406H5.4418Z" fill="currentColor"/><path d="M20.7304 8.5495C22.8657 7.015 23.9544 5.9756 23.9544 5.9756C23.9544 5.9756 18.8275 9.1416 12.2131 12.4683C5.5981 15.795 0 18.0237 0 18.0237C0 18.0237 1.4831 17.7696 3.9883 16.9705C6.5282 21.0637 11.8194 22.6127 16.2058 20.4064C20.5922 18.2003 22.5038 13.0293 20.7318 8.5495H20.7304ZM15.0404 18.0903C12.0488 19.5951 8.4637 18.6816 6.5224 16.0896C8.3074 15.4208 10.3884 14.5392 12.6757 13.3883C14.9637 12.2374 16.9115 11.0923 18.5126 10.0587C19.4355 13.1624 18.0312 16.5847 15.0397 18.0895L15.0404 18.0903Z" fill="currentColor"/></svg> or run **âŒ˜ Epochgram: Open timeline** to open it in the right panel. On mobile, it opens as a slide-in panel from the right.

> [!info] **â›­ Open timeline on startup** â†’ open timeline automatically on Obsidian launch.

> [!info] Cheat sheet (â˜ž touchscreen)
> - Click (tap) record â†’ open file; click date â†’ open daily note
> - Ctrl + click record â†’ open file in a  new tab 
> - Right-click (long-tap) record/date â†’ open context menu  
> - Right-click (long-tap) empty space â†’ toggle Epochs view (Pro)
> - Double-click (double-tap) on empty space â†’ scroll to Today
> - Double-click (double-tap) on date â†’ create new Daily note
> - Wheel (pan) â†’ scroll
> - Ctrl + wheel (pinch) â†’ zoom
> - Alt + wheel or Alt + up/down (two-finger tap) â†’ scroll to next record
> - Shift + wheel â†’ zoom around the current record
> - Alt + hover cursor â†’ show preview of the file

> [!tip] Activating Pro
> 

---

## Timeline

The timeline is a scrollable, zoomable surface that collects records from all files in the vault, excluding folders ignored in Obsidian settings. It detects dates and date ranges in different formats and renders *one record per file per day*, in the following priority order:

- Tracked edits (Pro) â†’ per-block edit history (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-icon lucide-pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg> added/modified, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line-icon lucide-pen-line"><path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg> removed); only when **â›­ Track changes** is On
- Content dates â†’ a date (range) parsed from note content
- Filename dates â†’ a date (range) parsed from the filename
- Frontmatter date â†’ a date from YAML property `date`
- Created dates â†’ file creation date

> [!info] Examples
> *my_note.md* â†’ placed by its file creation date.  
> *01.01.2026.md* â†’ January 1, 2026.  
> ```yaml
> date: 2026-02-02 # â†’ override date
> ```
*May 1, 2026* in content â†’ adds another timeline record.  
> **Track changes (Pro)**  enabled â†’ edits appear on the timeline day by day.

Each record appears as *note name â¸± summary* (if **â›­ Show note name** is enabled), *summary*, or *image.jpg* for non-text files. The summary is either the first _N_ words (**â›­ Summary length** setting) or an AI summary (Pro). A custom summary can be set with YAML (`description: ...`) or from the context menu; manual summaries are never overwritten by AI, and clearing the field removes the override.

Timeline draws weekdays as <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg> and weekends as <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>. Entries are shown stacked or side by side when space allows. Long entries are truncated with *...*, and if even that does not fit, the day collapses into a single interactive placeholder line <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>, with extra hidden entries shown as `(+n)`. When zoomed out, records collapse into placeholder bars <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rectangle-horizontal-icon lucide-rectangle-horizontal"><rect width="20" height="10" x="2" y="6" rx="2"/></svg>, with height based on record count.

---

## Filters & Search

There are collapsible filters under <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg> button.

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-eye-icon lucide-scan-eye"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/></svg> â†’ drafts & reviewed; <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg> â†’ drafts; <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg> â†’ drafts & reviewed & hidden

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history-icon lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg> â†’ show tracked edits (Pro); only when **â›­ Track changes** is On

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg> â†’ show content dates; <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-code-icon lucide-square-code"><path d="m10 9-3 3 3 3"/><path d="m14 15 3-3-3-3"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg> â†’ including YAML

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg> â†’ show non-text files

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hourglass-icon lucide-hourglass"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg> â†’ toggle epochs view (Pro)

A search bar at the bottom lets you search timeline records. Click it or run **âŒ˜ Epochgram: Search timeline**. Search covers file names, content, AI summaries, epochs, and more, with support for fuzzy search and `"exact text"` matching.
  
> [!info] Search shortcuts  
> - Enter â†’ open the matched file
> - Alt + Enter â†’ filter timeline records by the current search
> - Marked â†’ show only marked records

---

## Actions

Files in the vault are never modified unless you run an explicit file action. All attributes are stored in Epochgram data files, not in vault files.

Record context menu:

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg> MyNote.md â†’ open the file

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg> Edit summary â†’ edit the record summary

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg> Summarize AI â†’ generate an on-device summary of the record using Google Chrome AI Bridge (Pro, desktop only)

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag-icon lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg> Edit topicâ€¦ â†’ open the topics assignment popup; to remove topics, clear the input (Pro)

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pin-icon lucide-pin"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg> Pin / Unpin â†’ pin the file at the *Today* position in addition to its date; also available via **âŒ˜ Epochgram: Toggle pin for current file**

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-highlighter-icon lucide-highlighter"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg> Mark â†’ highlight a record or similar records with a palette color; also available via **âŒ˜ Epochgram: Toggle mark for current file**

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg> Draft â†’ <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg> Reviewed â†’ <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg> Hidden â†’ change the file review state

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line-icon lucide-pen-line"><path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg> Renameâ€¦ â†’ rename the file in the vault

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-tree-icon lucide-folder-tree"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/></svg> Move toâ€¦ â†’ move the file to another folder

- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> Delete â†’ move **the file** to trash or permanently delete it (depending on Obsidian settings)

> [!info] **âŒ˜ Epochgram: Clear tracked changes for current file** â†’ clear all file history at once.

---

## Review State

Epochgram is designed around the [C.O.D.E.](https://fortelabs.com/blog/basboverview/) process (capture â†’ organize â†’ distill â†’ express). New or indexed files appear as *Draft*. After organizing the file and extracting the key points, the record can be marked as **Reviewed**. If the file changes later, the record returns to *Draft*, indicating it may need review again. The **Draft/Reviewed** actions applies to all records of the same file.

Not every record deserves space on the timeline. Some, such as minor tracked changes, can be marked **Hidden**. Hidden is applied per record, not per file. Hidden records disappear from the timeline or muted when the relevant filter is enabled.

> [!info] **âŒ˜ Epochgram: Review all** â†’ mark all records across the vault as reviewed.

---

## Recurring (Pro)

You can create recurring records, which will appear on the timeline. To add one, set the `recur` or `repeat` property in YAML. Supported formats (see [RRULE](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html)):`

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
 
---

## Similarity (Pro)

Once you have a few solid notes, **Similarity** helps connect them to related records. It is used for record highlighting and mark inheritance.

Epochgram includes multiple intelligent similarity settings that work on all platforms, including iOS and Android:

- **â›­ Links** â†’ treat notes as related through inbound and outbound links.

- **â›­ Tags** â†’ treat notes as related when they share tags.

- **â›­ Title threshold** â†’ use Jaroâ€“Winkler matching to group notes with similar names or paths (higher values match more, 0 disables it).

- **â›­ Semantic threshold** â†’ semantic similarity uses embedding [model](https://huggingface.co/TaylorAI/bge-micro-v2) to find notes with similar meaning across the vault. This is useful for notes that describe the same idea in different words.  
  
- **â›­ Topic threshold** â†’ topics use a zero-shot [model](https://huggingface.co/MoritzLaurer/deberta-v3-xsmall-zeroshot-v1.1-all-33) for similarity grouping. When you assign a topic to a note, Epochgram finds related records across the vault. This is useful for broad themes like travel, projects, health, or astrophotography, where notes may share meaning without direct links or tags.

> [!info] Building semantic vectors and running zero-shot topic classification can take a long time on slower machines, with progress shown in the status bar, for example: *Topics... 1/100*; click the progress item to cancel the job.

When you open a record, all related records on the timeline are highlighted using the current theme color.

> [!info] **Alt + scroll** â†’ move through related records.

**Similarity** also groups related records automatically: when you mark one record, related records inherit the same color. These records behave as one group, so changing or removing the color updates the whole group, and inherited marks are recalculated automatically if the relation later disappears.

> [!info] Tips
> - **âŒ˜ Epochgram: Toggle mark for current file** or the file context menu â†’ assign the next unique color from the palette.
> - In addition to the standard red-to-violet palette, an extended palette is available in the submenu. This makes it easy to choose colors by activity. For example, I use <span style="color: rgb(158, 208, 203);">Glacier</span> for ski trip reports.

---

## AI Bridge (Pro, Desktop-only)

Epochgram Pro includes an **AI Bridge** that uses Google Chromeâ€™s on-device AI APIs for local summarization. When started, it runs a small local server on an available port at `http://127.0.0.1`. The bridge page can be opened from **Epochgram: Open AI bridge**, from the `âŒ€ AI` status bar button, or automatically on startup if **Open Bridge AI on startup** is enabled. This page processes summary jobs in Chrome and returns the results to the plugin. All summarization data stays **only on your device** and is not sent to external services.

On first use, Chrome may need a user gesture to download the built-in Gemini Nano model, and the drive with your Chrome profile [should have](https://developer.chrome.com/docs/ai/summarizer-api#hardware-requirements) at least **22 GB** of free space. The bridge page also serves as a control panel, showing connection and model status, queue progress, the current text preview, the latest result, and a chart with progress in yellow and processing speed in blue. Keep it open while summaries are running. You can also adjust API settings and prompt/context texts. For larger notes, Epochgram can split input into chunks, summarize them separately, then merge the results.

You can use context placeholders. File summaries support `{{filePath}}` (full file path), `{{fileName}}` (file name), and `{{related}}` (summaries of related records). Epoch summaries support `{{bucket}}` (`day`, `2days`, `4days`, `week`, `2weeks`, `month`, `3months`, `6months`, `year`) and `{{related}}`.

> [!info] Language tip
> Chromeâ€™s built-in Gemini Nano currently officially supports English, Spanish, and Japanese for input and output text. You can still try forcing another output language in the prompt context; for example, I used this context for Ukrainian:
>
> ```text
> OUTPUT ONLY IN UKRAINIAN!
> ...
> ```

---

## AI Summaries & Epochs (Pro, Desktop-only)

**â›­ Auto summarize** â†’ when enabled, Epochgram automatically summarizes a record through the AI Bridge each time the file changes. Even when disabled, you can still run summarization for a specific record from its context menu.

**â›­ Generate epochs** â†’ when enabled, Epochgram creates a zoomable time map that groups many days into larger period summaries, helping you see the bigger picture and spot patterns without reading the timeline day by day. Epochs are generated hierarchically from day up to year, in essence, summaries of summaries. If highlighted records are present, epochs are colored by the most common highlight color in that range. You can also edit or regenerate epochs from the context menu.

> [!info] Commands
> **âŒ˜ Epochgram: Summarize all** â†’ generate all missing AI summaries and epochs. 
> **âŒ˜ Epochgram: Export epochs** â†’ export as standalone HTML to your daily notes folder.

---

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

---

## Settings & Data

All plugin data is stored in the vault config directory, usually `.obsidian/`:

- `epochgram-index.json` â†’ timeline/index data
- `epochgram-search.json` â†’ search cache
- `epochgram-summaries.json` â†’ AI summaries and epochs
- `epochgram-semantics.json` â†’ embeddings store
- `epochgram-topics.json` â†’ topic similarity store
- `plugins/epochgram/data.json` â†’ settings and view state

If Obsidian Sync is enabled, this data should sync between devices as long as **â›­ Sync â†’ Vault configuration sync â†’ Other file types** is turned on.

> [!info] **Double-click** a setting name/description â†’ reset it to default.

Epochgram also provides **Rebuild** and **Reset** popups for rebuilding or clearing stored data.

- **â›­ Rebuild**
    - **â›­ All** â†’ rebuild all data
    - **â›­ Index** â†’ rebuild the index; useful if something is broken or after an update
    - **â›­ Search** â†’ rebuild the [MiniSearch](https://github.com/lucaong/minisearch) cache
    - **â›­ Semantics** â†’ rebuild embedding vectors
    - **â›­ Topics** â†’ reclassify topics
    - **â›­ AI summaries** â†’ queue all files for AI summary generation
    - **â›­ Epochs** â†’ queue all epochs for regeneration
- **â›­ Reset**
    - **â›­ All** â†’ reset all data and settings to defaults, keep license data, then rerun indexing
    - **â›­ Settings** â†’ reset all settings to defaults
    - **â›­ Data files** â†’ clear data files and schedule regeneration
    - **â›­ Search** â†’ clear the search cache
    - **â›­ Pinned** â†’ unpin all items
    - **â›­ Marks** â†’ remove all marks
    - **â›­ Reviews** â†’ set all records to draft
    - **â›­ Semantics** â†’ remove all embedding vectors
    - **â›­ Topics** â†’ remove all topics and classification data
    - **â›­ Tracked changes** â†’ remove all tracked changes
    - **â›­ Manual summaries** â†’ remove all manual summaries
    - **â›­ AI summaries** â†’ remove all AI summaries and use default "first N words" summaries
    - **â›­ Epochs** â†’ remove all epochs

## FAQ

> **How do I get support?**  
> Check the docs first. If you still cannot find relevant information, feel free to [open an issue on GitHub](https://github.com/2brn/epochgram/issues) or [ask on the forum](FORUM_LINK). For private matters such as license or account issues, contact [contact@epochgram.com](mailto:contact@epochgram.com).

> **What should I do if Epochgram feels slow?**  
> On huge vaults or slower machines, performance may degrade. Try setting **â›­ Semantic threshold** and **â›­ Topic threshold** to `0`, and uncheck **â›­ Auto summarize** and **â›­ Generate epochs**. You can also uncheck **â›­ Enable animation** or reset plugin data.

> **What should I do if some dates are missing?**  
> Try rebuilding the index.

---

## Disclosures

- **Epochgram Pro**:
	- Requires an account, payment, and internet for license checks.
	- Registration and license checks may process your email address, license key, and basic server-side telemetry for license validation.
	- Is not affiliated with Obsidian Sync, Publish, or other Obsidian paid services.
	- **AI Bridge**: Epochgram starts a local server on `http://127.0.0.1` and opens a local bridge page in Google Chrome to use Chromeâ€™s on-device Summarizer API. The bridge communication stays on your device. Chrome [may download](https://developer.chrome.com/docs/ai/summarizer-api) its built-in model(s) (Gemini Nano) the first time you use these APIs. Epochgram may check common OS install paths to locate the Google Chrome executable and open the AI Bridge automatically.
	- **Similarity**: embeddings and the zero-shot topic model may be downloaded on first use via `@xenova/transformers`, including [TaylorAI/bge-micro-v2](https://huggingface.co/TaylorAI/bge-micro-v2), [MoritzLaurer/deberta-v3-xsmall-zeroshot-v1.1-all-33](https://huggingface.co/MoritzLaurer/deberta-v3-xsmall-zeroshot-v1.1-all-33), and ONNX Runtime Web WASM from [jsDelivr](https://cdn.jsdelivr.net/npm/onnxruntime-web@1.14.0/dist/).

- No ads and no client-side telemetry.
- All vault data is processed locally on your device and is NEVER sent over the internet.
- Source code is closed.
- [Privacy policy]().