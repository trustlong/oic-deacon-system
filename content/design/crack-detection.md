---
title: "Tracking & Crack Detection"
status: design
tags: ["design"]
---

# Tracking & Crack Detection

A request is only tracked if someone is accountable *and* a deadline exists. This note defines the request state machine, the stall triggers that surface at-risk requests, how the Deacon Chair responds, and the rule that stalled requests are never silently closed.

---

## Request States

Every request in the tracker is always in exactly one state. States move forward through the lifecycle; backward movement (Reopened) is always deliberate and logged.

```
                        ┌──────────────────────────────────┐
                        │         AWAITING MEMBER          │
                        │  (waiting on info from member)   │
                        └──────────────┬───────────────────┘
                                       │ member responds
                                       │
  ┌─────┐    ┌──────────────┐    ┌─────▼──────┐    ┌─────────────┐
  │ NEW │───▶│ ACKNOWLEDGED │───▶│  ASSIGNED  │───▶│ IN PROGRESS │
  └─────┘    └──────────────┘    └────────────┘    └──────┬──────┘
                                                          │
                              ┌───────────────────────────┤
                              │                           │
                    ┌─────────▼────────┐       ┌─────────▼────────┐
                    │  AWAITING ELDER  │       │    ON HOLD       │
                    │ (elder loop open)│       │ (external block) │
                    └─────────┬────────┘       └─────────┬────────┘
                              │ elder done                │ block clears
                              │                           │
                              └───────────┬───────────────┘
                                          │
                                   ┌──────▼──────┐
                                   │  RESOLVED   │
                                   │(member conf)│
                                   └──────┬──────┘
                                          │
                    ┌─────────────────────┤
                    │                     │
             ┌──────▼──────┐      ┌───────▼──────┐
             │   CLOSED    │      │  REDIRECTED  │
             │ (final)     │      │(elder/extern)│
             └─────────────┘      └──────────────┘

  Any state except CLOSED/REDIRECTED can become:
             ┌─────────────┐
             │  REOPENED   │◀── stall detected; owner root-causes; member re-engaged
             └──────┬──────┘
                    │
             (back into ASSIGNED or IN PROGRESS)
```

### State Definitions

| State | Meaning |
|---|---|
| **New** | Request received and logged; duty deacon has not yet contacted the member |
| **Acknowledged** | Duty deacon has contacted the member and confirmed receipt |
| **Assigned** | Owner identified and has accepted person-to-person handoff |
| **In Progress** | Owner is actively working the need |
| **Awaiting Member** | Owner is waiting on information or a response from the member before proceeding |
| **Awaiting Elder** | Spiritual component handed off; deacon is holding or monitoring the tangible side |
| **On Hold** | Work is paused due to an external factor (waiting for a third-party resource, a scheduled date, etc.) — must have a specific "resume date" or trigger logged |
| **Resolved** | Member has confirmed the need is met; formal closure not yet recorded |
| **Closed** | Outcome logged, request complete — final state |
| **Redirected** | Request fully handed to an elder or external party; deacons have no remaining action |
| **Reopened** | A stalled or prematurely closed request has been re-activated; root cause logged |

---

## Stall Triggers

A stall trigger fires when a clock expires without the expected action. All stall alerts go directly to the **Deacon Chair** — not to the owner, not to a rung-by-rung ladder.

### Per-Tier Stall Clocks

| Tier | Stall: no acknowledgment | Stall: no first action | Stall: no update while In Progress |
|---|---|---|---|
| EMERGENCY | > same day | > same day | > 2 days |
| URGENT | > 24 hours | > 3 days | > 5 days |
| ROUTINE | > 3 days | > 14 days | > 14 days |

### Additional Stall Triggers

- **No Resolved→Closed transition** within 7 days of Resolved (owner may have forgotten to follow up and close).
- **On Hold with no resume date** — any On Hold request without a logged resume date or trigger stalls after 7 days.
- **Awaiting Member with no re-contact attempt** — if the member has not responded for the urgency tier's first-action window, the owner should re-contact. If the tracker shows no re-contact attempt, it stalls.

---

## The Chair's Stall Response

When a stall alert fires, the **Deacon Chair** receives the notification. The chair reviews the request and takes one of two actions — directly, person to person:

1. **Redirect to an Elder** — if the chair determines the need has turned out to be spiritual or hits a policy threshold. The chair makes the warm hand-off (see [[escalation-to-elders]]).
2. **Reassign to a resourceful member** — if the original owner is unavailable or the approach needs to change. The chair identifies a specific named person, calls them, and assigns ownership directly.

The chair does not send stall alerts back to the original owner to handle. If the owner could have handled it, they would have.

---

## The Never-Silently-Closed Rule

> A stalled request is **never silently closed**. It is Reopened, root-caused, and the member is contacted with an apology.

### The Reopen Process

1. **Set status to Reopened** in the tracker.
2. **Log the root cause** — one or two sentences. Why did it stall? (Owner became unavailable; handoff was unclear; member could not be reached; resource fell through; etc.) This is not blame — it is learning.
3. **Contact the member** to apologize and re-engage. Use the [[templates/index|reopen apology template]]. Acknowledge the delay. Ask whether the need is still open and what the current situation is.
4. **Reassign** via a fresh person-to-person handoff. The new owner picks up from where the request left off.

### Why This Rule Exists

Silent closure is how members lose faith in the church's care. A member who submitted a request and heard nothing has been failed twice: once by the stall, and once by the silence. Re-engaging with honesty — "we dropped the ball, we are sorry, we want to make this right" — recovers the relationship in a way that pretending it never happened cannot.

---

## The Monthly Sweep

The monthly sweep is the backstop for anything the stall-trigger system misses.

At the monthly deacons meeting, the Deacon Chair pulls every open request (New, Acknowledged, Assigned, In Progress, Awaiting Member, Awaiting Elder, On Hold, Reopened) and reviews each one:

1. What is the current status?
2. Who is the owner?
3. Is there a clear next action and a timeline?
4. Has the member been contacted recently?

Any request that cannot answer all four questions cleanly gets attention immediately — either a direct owner call from the chair, or a reassignment.

The sweep is not a formality. It is the guarantee that the system's automated alerts are not the only safety net.

---

## Related Notes

- [[deacon-playbook]] — the duty deacon's role and the owner's follow-up/closure responsibilities
- [[sla-and-urgency]] — the urgency tiers that set the stall clock values
- [[escalation-to-elders]] — when a chair redirect goes to an elder
- [[tracker-spec]] — the data model behind the state machine; required fields per state
- [[templates/index]] — the reopen apology template and closure template
