---
title: "Writing Style — Three Registers"
status: design
tags: ["design", "style"]
---

# Writing Style

No formal style guide existed before this note. This is derived from the voice already present across the system as of mid-2026, written down so it stays consistent as the system grows. There are **three distinct registers** in use. Don't blend them — which register to use depends on who the page is for, not on which folder it happens to live in.

## 1. Member-facing pages

Where: `need-help.md`, `what-happens-to-your-request.md`, `index.md`, `self-help/*`.

Who it's for: a church member or attender who has a need, is anxious about asking, and does not know how the church works internally.

Traits:
- **Second person, warm, plain language.** No church-insider jargon (don't say "Office of Deacons" — say "our deacons"). Talk to "you," not "members" or "the congregant."
- **Reassurance before instruction.** Lead with what removes hesitation to ask, then explain the mechanics. E.g. "You do not need to know who to ask or how the church works," "You will never be judged for asking," "Please do not wait until things are desperate."
- **A Scripture anchor, used sparingly.** A short blockquote with citation near the top of a page sets the theological grounding (Acts 6 on `need-help.md`). Not every page needs one — use it where it does real work, not as decoration.
- **Organize by the reader's situation, not internal category.** `need-help.md` groups by "immigrants," "college students," "seniors," etc. — not by department or function.
- **Cross-links:** `[[page|Display text]]` inline, plus a `See also:` line at section end and a closing footer line like `*Back to [[self-help/index|Self-Help Resources]] · Need personal help? [[need-help|Ask a deacon]]*`.
- **Honest placeholders, not filler.** Where local detail isn't filled in yet, say so directly in a blockquote addressed to the maintainers: `> Local resources (deacons: add Lynchburg DSS contact information here)`. Never invent specifics to fill a gap.
- Frontmatter: quoted `title`, `publish: true`, a short `tags` array.

## 2. Handbook / internal-role pages

Where: `handbook/*`, `bylaws/*` interpretive pages.

Who it's for: a deacon or leader who needs to know what a role or department does.

Traits:
- **Third person, dry, duty-list style.** No exhortation, no reassurance, no persuasion — just what the role covers.
- Sourced near-verbatim from the official Deacons Handbook / Bylaws, organized into per-function pages.
- Cross-references other departments as plain factual sentences, e.g. "Budget oversight for facility-related expenses falls under [[handbook-finance|Finance]]." — not a pitch, just a pointer.
- Frontmatter: quoted `title`, `publish: true`, `tags: ["handbook"]`.

## 3. Reference mirrors

Where: `content/reference/*`.

Who it's for: anyone needing the authoritative text of an official church document (Bylaws, Benevolence Policy, Building Fund Policy, Deacons Handbook, and — as of this note — Facility Rental Policy, Facility and Equipment Request Form, Transportation Service Waiver and Policy).

Traits:
- **Verbatim.** Copied faithfully from the source PDF/docx, not rewritten, not summarized, not lightly edited for tone. Legalese stays legalese.
- These are not `publish: true` member-facing pages — they exist so the deacon system has its own durable copy instead of depending on a live link to the church website, which can move or go stale.
- When mirroring a new or updated document, note the source version/date at the top of the file (e.g. the date shown on the church's `/documents` page) so drift is checkable later.

## Design notes (`content/design/*`) are a fourth, unwritten register

Not covered above because they predate this note and already have an established shape: audience is deacons/builders, tone is planning-document, uses tables and numbered lists freely, frontmatter is `status: design` rather than `publish: true`. See `00-overview.md` for the pattern.
