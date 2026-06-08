---
title: "Tracking & Crack Detection"
status: draft
---

> **Goal:** track every request to closure, and define how we **react when a request is at risk of falling through the cracks** — the Acts 6 problem (someone overlooked) is exactly what this prevents.

## To design here

- The **request lifecycle / states** (e.g. New → Acknowledged → Assigned → In Progress → Follow-up → Closed; plus Redirected, On Hold, Reopened).
- What we **record** per request (who, what, urgency, owner, function, actions, dates, outcome) — and where (the future web app; this wiki only documents the process).
- **Crack triggers**: a request with no acknowledgement within its SLA, no owner, no action past its first-action deadline, or no follow-up after a set window ([[sla-and-urgency]]).
- The **escalation-on-stall** path: who gets alerted (owner → Associate Director → Director → Chairperson) and on what timeline.
- A **periodic sweep**: a standing review (e.g. at the monthly deacons meeting) of all open requests so nothing silently lingers.

## Draft principle

> A request is "tracked" only if someone is accountable *and* a deadline exists. Any open request that passes its deadline without action automatically surfaces to the next person up. The monthly deacons meeting reviews every open request as a backstop.

*TODO: define the exact stall thresholds, alert chain, and the open-request review format.*
