---
title: "Duty Roster — Rotation Process"
status: design
publish: true
tags: ["design"]
---

# Duty Roster — Rotation Process

The duty deacon is the single front door for all member requests. The role rotates on a fixed weekly cycle, Sunday to Saturday, so every deacon knows exactly when they are on duty and the congregation always has a named, reachable person to bring needs to.

---

## The Rotation Cycle

- **Duty week:** Sunday through Saturday (7 days).
- **Rotation:** Each deacon takes one week in turn. The sequence is fixed and published in advance on the [[tracker-spec|Duty Roster tab]].
- **Backup:** Every week has a named backup — a second deacon who steps in if the duty deacon becomes unavailable. The backup is a specific named person, not "whoever is available."

The sequence is set by the Deacon Chair at the start of each quarter (or year) and published to all deacons. The Chair fills the roster tab in the Google Sheet; deacons confirm their assigned weeks.

---

## What the Duty Deacon Is Responsible For

During their duty week, the duty deacon is responsible for:

1. **Receiving** all incoming requests — phone, text, email, in-person, or referral from a third party.
2. **Logging** every request in the tracker the moment it arrives.
3. **Acknowledging** the member within the urgency tier's window.
4. **Conducting intake** (personal call or in-person conversation).
5. **Triaging** — function, sub-lane, urgency.
6. **Selecting and handing off** to one named owner (resource priority pass).
7. **Logging the owner and handoff** in the tracker.

The duty deacon does **not** follow up on requests once ownership is transferred. That belongs to the owner. The duty deacon is the intake gate, not the owner of every request received during their week.

Full step-by-step procedure: [[deacon-playbook]].

---

## The Handoff Between Outgoing and Incoming Duty Deacons

The handoff is intentionally lightweight because open requests are already owned.

### What transfers

**Nothing automatically transfers.** Every open request logged during the outgoing duty deacon's week already has a named owner. That owner remains the owner when the week turns. The incoming duty deacon does not inherit open requests and does not need to review them — the Deacon Chair maintains visibility over all open requests regardless of when they were received.

### What the outgoing duty deacon does on Saturday

1. **Confirm all requests logged this week have an owner.** Open the Requests tab, filter to "Date Received = this week," and verify no row has a blank Owner column. Any request without an owner is an incomplete handoff — resolve it before the week ends.
2. **Update any stale entries.** If a request has been worked but the tracker is out of date, update the status and notes before handing off.
3. **Notify the incoming duty deacon.** Send a brief message (text or call) with:
   - Any request that is in an unusual state (e.g., Awaiting Elder, a complex situation the new duty deacon might be asked about by the member)
   - Any open request where the owner has flagged a likely near-term closure (so the incoming deacon is not caught off guard if a member follows up)
   - Nothing else is required — all detail is in the tracker.

### What the incoming duty deacon does on Sunday

1. **Know you are on duty.** Check the Duty Roster tab to confirm your week and your backup's name and contact.
2. **Review the Reference tab** if you are new to the rotation or returning after a long gap — refresh yourself on urgency definitions and the escalation triggers.
3. **Begin receiving requests.** You own intake for every new request that arrives during your week. You do not own anything that came in before Sunday.

> **Key principle:** The handoff is not a baton of requests — it is a baton of responsibility for new intake. Old requests stay with their owners.

---

## When the Duty Deacon Is Unavailable

### Planned unavailability

If the duty deacon knows in advance they will be unable to fulfill the role for part or all of their week (travel, medical, family event):

1. **Contact the Backup** — named on the Duty Roster for that week — as early as possible.
2. **Agree on coverage:** the backup covers the full absent period, or a partial coverage split is arranged.
3. **Notify the Deacon Chair** of the arrangement.
4. **Update the Duty Roster tab** with a note in the Notes column indicating the coverage arrangement.

### Unexpected unavailability (day-of)

If the duty deacon becomes unexpectedly unavailable mid-week:

1. **The Backup activates immediately.** The backup's phone number is in the Duty Roster tab — this is why a backup is named every week without exception.
2. **The Backup notifies the Chair** that they have activated.
3. **Any incoming requests are redirected** to the backup. The duty deacon (when able) updates the Duty Roster tab with a note.

### If both the duty deacon and backup are unavailable

Escalate to the **Deacon Chair** immediately. The Chair either covers intake directly or designates a specific deacon to step in. This situation should be rare; the Chair monitors the roster for coverage gaps.

### Permanent swap

If two deacons need to swap their assigned weeks:

1. Both deacons agree.
2. Both notify the Chair.
3. The Chair updates the Duty Roster tab.

Swaps are documented in the tracker so the Chair always has an accurate picture of who was actually on duty for any given week.

---

## Publishing the Roster

The Duty Roster is published in two places:

1. **Google Sheet — Duty Roster tab:** The authoritative record. Deacons are given view access to the workbook and can check their upcoming weeks at any time.
2. **Deacon communication channel:** At the start of each quarter, the Chair posts the full quarter's roster to the deacon group chat (or email list) so every deacon can see the rotation at a glance without opening the sheet. One post per quarter; the sheet is the live source of truth for changes.

The roster is not published to the general congregation. The congregation knows there is a duty deacon system; they do not need to know which individual is on duty each week. Contact information for reaching the duty deacon is maintained separately (e.g., a church office phone number or a generic deacon contact address that forwards to the duty deacon's phone).

---

## Roster Maintenance

- The Chair sets the quarterly roster at least two weeks before the quarter starts.
- Deacons confirm their weeks by the start of the quarter.
- Any changes (swaps, coverage gaps) are updated in the sheet by the Chair within 24 hours of the arrangement being agreed.
- If a deacon is added to or removed from the rotation mid-year, the Chair rebuilds the sequence from that point forward and re-publishes.

---

## Related Notes

- [[deacon-playbook]] — the full duty deacon SOP; what "being on duty" means step by step
- [[tracker-spec]] — the Duty Roster tab column definitions
- [[crack-detection]] — why open requests do not transfer at handoff (the Chair, not the next duty deacon, is the backstop for stalled requests)
- [[routing-and-functions]] — what the duty deacon does with a request once they receive it
