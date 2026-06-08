---
title: "Phase 3 — Intake Front Door (Web App)"
status: design
tags: ["design", "phase-3"]
---

# Phase 3 (MVP) — Intake Front Door

A public request form that turns "email or ask a deacon" into a real front door. It writes each submission straight into the [[tracker-spec|tracker]] as a **New** request and emails the deacons. The duty deacon still does triage (function, urgency, owner) in the sheet — this MVP automates **intake + notification**, not triage.

## Decisions

- **Scope:** member intake front door only. Dashboard stays in the Sheet (a later Phase 3b grows on the same platform).
- **Tech:** Google Apps Script web app **bound to the tracker** (`Code.gs` + `Index` HTML). The Sheet is the database; `MailApp` sends notifications. No new infra, church-owned, free.
- **Access:** deployed **Execute as: Me / Who has access: Anyone** — public link, no login. The form runs as the owner and writes to the private tracker; submitters never see the Sheet or any data.
- **Both paths:** a member can submit for themselves, or an elder/shepherd/leader can relay on someone's behalf (sets the `Source` field).

## Files

- `Code.gs` — `doGet` serves the form; `processIntake(form)` validates, generates the Request ID, appends the row, finds the week's duty deacon from `Duty Roster`, and emails the deacons. Helpers map "how soon" → tentative urgency and the relay role → `Source`.
- `Index.html` — the member-facing form (mobile-friendly, warm language, honeypot anti-spam, confirmation screen).

## Field mapping (form → Requests tab)

| Form input | Tracker column | Notes |
|---|---|---|
| (auto) | Request ID | `YYYY-NNN`, computed from existing rows |
| (auto) | Date Received, Last Updated | today |
| For me / someone else; relay role | Source | Self / Elder / Shepherd / Cell leader / Other |
| Name (or beneficiary) | Requester Name | the person with the need |
| Contact (or beneficiary contact) | Requester Contact | |
| What's going on | Need Summary | |
| How soon | Urgency | **tentative** — duty deacon confirms the tier at triage |
| (set) | Status | New |
| best time / already-tried / relay info | Update Notes | date-stamped intake note |

Function(s), Sub-lane, Owner, and the confirmed Urgency are filled by the duty deacon during triage — see [[deacon-playbook]].

## Configuration (`CONFIG` in Code.gs)

- `NOTIFY_EMAILS` — who gets the "new request" email (a deacons group, or the duty deacons/chair). If the `Duty Roster` "Contact" column holds an email, that person is notified too.
- `EMERGENCY_PHONE` — shown to members for things that can't wait (blank → "call 911").

## Deploy

1. Tracker → Extensions → Apps Script.
2. Add `Code.gs` and an HTML file named exactly **`Index`** (paste `Index.html`).
3. Set `CONFIG`.
4. Deploy → New deployment → **Web app**, Execute as **Me**, Access **Anyone**.
5. Put the Web app URL on [[need-help|Need Help?]] and share it.

## Security & PII

The form is public, but the tracker stays private — the app runs as the owner, and nothing is read back to the submitter. Honeypot + a confirmation checkbox keep spam down at this scale. No member data is ever exposed to the public.

## Grows into (later, not now)

- **Phase 3b:** a responder dashboard on the same Apps Script platform (or a migration to a modern stack if the church later wants one) — see the migration path in [[tracker-spec]].
- A member status lookup, SMS notifications, and Helpers Directory matching are deliberately out of this MVP.

## Related

- [[tracker-spec]] · [[deacon-playbook]] · [[crack-detection]] · [[duty-roster]] · [[need-help]]
