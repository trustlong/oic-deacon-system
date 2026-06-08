---
title: "Urgency Tiers & Response Timelines"
status: design
tags: ["design"]
---

# Urgency Tiers & Response Timelines

Every request carries an urgency tier. The tier sets the clock: how quickly the duty deacon must acknowledge, and how quickly the owner must take a first action. Tiers also determine the stall thresholds that trigger [[crack-detection|chair alerts]] when a request goes quiet.

---

## The Three Tiers

| Tier | Acknowledge by | First action by | Definition |
|---|---|---|---|
| **EMERGENCY** | Same day | Same day | A crisis that cannot wait. Safety is at risk, or there is a hard deadline today (utility shutoff, eviction notice, medical emergency, acute food need with no food in the house). |
| **URGENT** | Within 24 hours | Within 2–3 days | A real and pressing need with a near-term deadline. Waiting a week would cause meaningful harm. |
| **ROUTINE** | Within 2–3 days | Within 1–2 weeks | A genuine need with no imminent deadline. Can be worked into the normal rhythm of deacon activity. |

### Definitions in Plain Language

**EMERGENCY** means the member is in crisis *right now*. Time matters in hours, not days. When in doubt between EMERGENCY and URGENT, choose EMERGENCY.

**URGENT** means the member has a real problem that will worsen if nothing happens within a few days. It is not a same-day crisis, but it is not something that can sit for two weeks either.

**ROUTINE** means the need is genuine and deserves a response, but there is no ticking clock. Most requests fall here.

---

## Examples by Tier

### EMERGENCY

- Utility shutoff notice effective today
- Eviction or lockout in progress
- Member discharged from hospital with no ride, no food, no one at home
- Child welfare situation
- Domestic crisis requiring immediate support

### URGENT

- Groceries needed before end of the week; pantry is nearly empty
- Transportation to a medical appointment in the next 2–3 days
- Prescription cost assistance; medication running out
- Short-term housing gap (has a week of coverage, needs more)
- Member in acute grief; pastoral check-in needed soon

### ROUTINE

- Benevolence application for utility help (bill not yet due)
- Ride coordination for a recurring appointment next month
- Information about church resources (food pantry schedule, assistance programs)
- Non-urgent financial assistance request
- Kitchen or hospitality coordination for an upcoming event

---

## Who Sets the Urgency

The **duty deacon** sets the urgency tier during intake (Step 5 of the [[deacon-playbook|duty deacon checklist]]). Urgency is based on what the member tells you, not on the type of request alone. A meal request can be EMERGENCY if the member has nothing and is alone; the same type of request is ROUTINE if they have food for a week and are asking for ongoing support.

### When to Revise Urgency

- The owner may revise urgency upward if they learn new information during their work.
- The Deacon Chair may revise urgency at any time.
- Revisions must be logged in the tracker with a brief note explaining the change.

When in doubt, **set it one tier higher** and revise down when intake gives you confidence. The cost of treating a ROUTINE as URGENT is a faster response. The cost of treating an URGENT as ROUTINE is a member in real need waiting too long.

---

## Stall Thresholds (How Tiers Feed Into Crack Detection)

Each tier has stall thresholds — if a clock expires without the required action, [[crack-detection|the system alerts the Deacon Chair]].

| Tier | No acknowledgment stall | No first action stall | In Progress stall (no update) |
|---|---|---|---|
| EMERGENCY | After same-day window passes | After same-day window passes | After 2 days without an update |
| URGENT | After 24 hours | After 3 days | After 5 days without an update |
| ROUTINE | After 3 days | After 14 days | After 14 days without an update |

A stall alert goes directly to the **Deacon Chair**, not to the owner or a rung-by-rung escalation. The chair decides whether to redirect or reassign.

See [[crack-detection]] for the full stall reaction process and the never-silently-closed rule.
