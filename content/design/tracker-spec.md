---
title: "Tracker Spec — Google Sheet"
status: design
tags: ["design"]
---

# Tracker Spec — Google Sheet

The Google Sheet is the Phase 1 and Phase 2 system of record. It is a single workbook with four tabs. The field model is intentionally designed to migrate cleanly to the Phase 3 web app: every column maps to a database field with no renaming required.

---

## Workbook Structure

| Tab | Purpose |
|---|---|
| **Requests** | Every request, one row each, from receipt to closure |
| **Helpers Directory** | Opted-in members with skills, resources, and availability |
| **Duty Roster** | Weekly rotation: duty deacon and backup by week |
| **Reference** | Urgency definitions, function map, escalation triggers, wiki links |

---

## Tab 1 — Requests

One row per request. Rows are never deleted. Status moves forward; backward movement (Reopened) is always deliberate and logged.

### Column Definitions

| # | Column | Type | Values / Notes |
|---|---|---|---|
| 1 | **Request ID** | Auto | Sequential integer: 2024-001, 2024-002, … Year-prefixed for legibility |
| 2 | **Date Received** | Date | Date the request first came in, regardless of source |
| 3 | **Source** | Dropdown | Self / Elder / Shepherd / Cell leader / Other |
| 4 | **Requester Name** | Text | Full name of the member with the need |
| 5 | **Requester Contact** | Text | Primary phone or email for the member |
| 6 | **Need Summary** | Text | 1–3 sentence description in concrete terms; duty deacon writes this after intake |
| 7 | **Function(s)** | Dropdown (multi) | Administration / Operations / Communication / Finance |
| 8 | **Sub-lane** | Dropdown | Sub-lane within the function (see [[routing-and-functions]]) |
| 9 | **Urgency** | Dropdown | Emergency / Urgent / Routine |
| 10 | **Duty Deacon** | Text | Name of the deacon on duty the week the request came in |
| 11 | **Owner** | Text | Name of the specific person who accepted ownership (may be a deacon, director, or member) |
| 12 | **Owner Contact** | Text | Phone or email for the owner — for Chair visibility |
| 13 | **Status** | Dropdown | See state list below |
| 14 | **Next Action** | Text | One concrete sentence: what needs to happen next |
| 15 | **Next Action Due** | Date | Date by which Next Action must occur |
| 16 | **Last Updated** | Date | Date the row was last edited — update manually on each change |
| 17 | **Update Notes** | Text | Append-only running log of updates (newest at top, with date prefix) |
| 18 | **Resolution** | Text | What was done, what resources were used; filled when Status → Resolved or Closed |
| 19 | **Closed Date** | Date | Date Status moved to Closed or Redirected |
| 20 | **Reopen Root Cause** | Text | Required if Status = Reopened; one or two sentences explaining why it stalled |
| 21 | **Elder / External Referral** | Text | Name of elder or external party if Status = Awaiting Elder or Redirected |
| 22 | **Flags / Notes** | Text | Free text for anything not captured above; e.g., sensitivity notes, related request IDs |

### Status Values

These match the state machine in [[crack-detection]] exactly.

| Status | Meaning |
|---|---|
| **New** | Logged; duty deacon has not yet acknowledged the member |
| **Acknowledged** | Member contacted; receipt confirmed |
| **Assigned** | Named owner has accepted person-to-person handoff |
| **In Progress** | Owner is actively working the need |
| **Awaiting Member** | Owner is waiting on information or a response from the member |
| **Awaiting Elder** | Spiritual component handed off; deacon monitoring or holding the tangible side |
| **On Hold** | Paused due to an external block; must have a resume date or trigger in Next Action Due |
| **Resolved** | Member has confirmed the need is met; formal closure not yet recorded |
| **Closed** | Outcome logged; request complete — final state |
| **Redirected** | Fully handed to an elder or external party; deacons have no remaining action |
| **Reopened** | Re-activated after a stall; Reopen Root Cause must be filled |

---

## Tab 2 — Helpers Directory

One row per opted-in member. See [[resource-tagging]] for full schema rationale and collection process. The columns here are the authoritative field list.

| # | Column | Type | Notes |
|---|---|---|---|
| 1 | **Member Name** | Text | Full name, matching Membership Database |
| 2 | **Preferred Name** | Text | |
| 3 | **Phone** | Text | Primary contact number |
| 4 | **Email** | Text | |
| 5 | **Fellowship Group** | Text | Cross-reference |
| 6 | **Ministry / Department** | Text | Cross-reference |
| 7 | **Occupation / Job Title** | Text | Current or most recent |
| 8 | **Professional Domain** | Checkbox multi | Medical / Legal / Financial / Education / Trades / IT / Social Work / Counseling / Other |
| 9 | **Certifications / Licenses** | Text | RN, CPA, Attorney, CDL, Licensed Electrician, etc. |
| 10 | **Skill Tags** | Text (comma list) | From tag schema in [[resource-tagging]]: Plumbing, Nursing, First Aid, Legal counsel, Tax prep, IT support, etc. |
| 11 | **Languages** | Text | Languages spoken other than English |
| 12 | **Vehicle Type** | Checkbox multi | Pickup truck / Cargo van / Passenger van (7+) / Standard car |
| 13 | **Other Resources** | Text | Spare room, tools, storage, etc. |
| 14 | **Willingness Flags** | Checkbox multi | Transportation / Meals / Home repairs / Financial guidance / Caregiving / Housing / Professional advice / Prayer-Encouragement / Moving / Other |
| 15 | **General Availability** | Checkbox multi | Weekday mornings / afternoons / evenings / Weekend mornings / afternoons / Flexible |
| 16 | **Seasonal Constraints** | Text | Free text |
| 17 | **Response Window** | Dropdown | Same day / Within 24 h / Within a few days |
| 18 | **Frequency Willing to Help** | Dropdown | Occasionally / Regularly / As needed |
| 19 | **Capacity Notes** | Text | Any limits or preferences |
| 20 | **Opt-in Confirmed** | Dropdown | Yes / No |
| 21 | **Consent Date** | Date | |
| 22 | **Consent Method** | Dropdown | Survey / Direct request / Ministry leader referral |
| 23 | **Current Status** | Dropdown | Active / Temporarily unavailable / Retired from directory |

> **Access:** This tab is visible only to deacons (duty deacon, chair, directors). It is never shared with the general congregation.

---

## Tab 3 — Duty Roster

One row per week. The authoritative publication of who is on duty and who is backup.

| # | Column | Type | Notes |
|---|---|---|---|
| 1 | **Week Of** | Date | Sunday start date of the duty week |
| 2 | **Duty Deacon** | Text | Named deacon on duty for the week |
| 3 | **Backup** | Text | Named deacon who covers if the Duty Deacon is unavailable |
| 4 | **Duty Deacon Contact** | Text | Phone for that week — so incoming requests can be forwarded |
| 5 | **Backup Contact** | Text | Phone for backup |
| 6 | **Notes** | Text | Swap notes, special coverage arrangements, scheduling exceptions |

See [[duty-roster]] for how handoffs between outgoing and incoming duty deacons work, and how the roster is published.

---

## Tab 4 — Reference

A static reference panel. Not a data tab — no rows are added or removed during normal operations. Updated by the Deacon Chair when policy changes.

**Sections:**

1. **Urgency Definitions** — the full tier table from [[sla-and-urgency]] (acknowledge window, first-action window, stall thresholds). Pasted here so deacons have it without leaving the sheet.
2. **Function Map** — the four functions, their sub-lanes, and a brief description of what each covers. From [[routing-and-functions]].
3. **Escalation Triggers** — when to involve an elder; benevolence and building-spend thresholds. From [[escalation-to-elders]].
4. **State Machine** — the status values and their meanings, matching the Status dropdown in the Requests tab.
5. **Wiki Links** — direct links to the key design notes in this wiki.

---

## Conditional Formatting Rules — Crack Detection

These formatting rules make at-risk rows visible at a glance without running a separate report. They implement the stall thresholds defined in [[crack-detection]] and [[sla-and-urgency]].

### Color Logic

| Color | Condition | Meaning |
|---|---|---|
| **Red** | Row is past the urgency tier's acknowledge or first-action deadline | Overdue — needs immediate Chair attention |
| **Amber** | Row has not been updated within the tier's in-progress stall window | Stale — may be slipping |
| **White / Default** | Row is within all windows | No alert |
| **Gray** | Status = Closed or Redirected | Resolved; excluded from active monitoring |

### Rules by Tier

**EMERGENCY rows (Urgency = Emergency)**

| Condition | Color |
|---|---|
| Status = New AND Date Received < today (i.e., not acknowledged same day) | Red |
| Status = Acknowledged AND Date Received < today (first action window expired) | Red |
| Status = In Progress / Assigned AND Last Updated < today − 2 days | Amber |

**URGENT rows (Urgency = Urgent)**

| Condition | Color |
|---|---|
| Status = New AND Date Received < today − 1 day | Red |
| Status = Acknowledged AND Date Received < today − 3 days | Red |
| Status = In Progress / Assigned AND Last Updated < today − 5 days | Amber |

**ROUTINE rows (Urgency = Routine)**

| Condition | Color |
|---|---|
| Status = New AND Date Received < today − 3 days | Red |
| Status = Acknowledged AND Date Received < today − 14 days | Red |
| Status = In Progress / Assigned AND Last Updated < today − 14 days | Amber |

**Universal rules (all tiers)**

| Condition | Color |
|---|---|
| Status = Resolved AND Closed Date is blank AND Last Updated < today − 7 days | Amber — Resolved but not formally closed |
| Status = On Hold AND Next Action Due is blank | Amber — On Hold without a resume date |
| Status = On Hold AND Next Action Due < today | Red — On Hold past the stated resume date |

### Implementation Notes

- Apply conditional formatting via **Format → Conditional formatting** on the Requests tab, using custom formula rules that reference columns by letter.
- Rules are applied to the entire row (select full row range) so the entire row changes color, not just one cell.
- Gray out Closed/Redirected rows last (lowest priority rule) so they visually recede from active rows.
- All date comparisons use `TODAY()` so the sheet self-updates daily without manual intervention.

---

## Chair's Full-Visibility View

The Deacon Chair needs to see all open requests at a glance, sorted by risk.

**Setup:**

1. Apply a **filter view** (Data → Filter views → Create new filter view) named "Chair — All Open."
2. Filter: Status is not Closed, not Redirected.
3. Sort: first by color (Red rows first — requires a helper "Priority" column, or manual sort on urgency + date), then by Urgency (Emergency → Urgent → Routine), then by Date Received (oldest first).
4. The Chair saves this filter view and uses it as their default view of the Requests tab.

**Stall alerts reaching the Chair:**

Phase 1 (Google Sheet): The conditional formatting makes red rows visible, but does not push a notification. The Chair's workflow is to open the sheet daily and scan for red/amber rows. At minimum, the Chair checks the sheet at the start of each day.

Phase 2 enhancement: Add a Google Apps Script trigger that runs daily, checks for red-condition rows, and sends the Chair an email digest listing every overdue request (Request ID, member name, urgency, status, owner name, days since last update). This removes the dependency on the Chair proactively opening the sheet.

Phase 3 (web app): Real-time push notifications to the Chair when any stall clock expires.

---

## Phase 3 Migration Path

The field model is designed for a clean transition to a relational database.

| Sheet tab | Phase 3 equivalent |
|---|---|
| Requests | `requests` table |
| Helpers Directory | `members` table with a `helper_profile` join |
| Duty Roster | `duty_roster` table |
| Reference | Application config / admin panel |

Column names in the sheet use snake_case-compatible labels (no spaces in the internal name, even if the header displays with spaces) so they map directly to database column names. Status values match the enum list in the Phase 3 data model. No data transformation is required at migration time — the sheet is exported to CSV and imported row-for-row.

---

## Related Notes

- [[crack-detection]] — the state machine and stall trigger definitions behind the formatting rules
- [[sla-and-urgency]] — urgency tier definitions and the exact window values
- [[resource-tagging]] — the Helpers Directory schema rationale and collection process
- [[routing-and-functions]] — function map used in the Function(s) and Sub-lane dropdowns
- [[duty-roster]] — how the Duty Roster tab is populated and maintained
- [[deacon-playbook]] — the duty deacon's step-by-step process that drives tracker entries
