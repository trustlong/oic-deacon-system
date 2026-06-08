---
title: "Routing & The Four Functions"
status: design
tags: ["design"]
---

# Routing & The Four Functions

This note covers how any request is navigated to a specific person: the four functions and their sub-lanes, the resource priority pass, how owners are selected, and how multi-function requests are handled.

For the full step-by-step intake flow, see [[deacon-playbook]].

---

## The Four Functions

Every request maps to one primary function (and sometimes a secondary one). The function determines which sub-lanes and which people the duty deacon draws from.

### Administration

**What it covers:** Member records, scheduling (meetings, room bookings, event logistics), correspondence on behalf of the diaconate.

**Sub-lanes:** Records, Scheduling, Correspondence

### Operations

**What it covers:** The physical, logistical, and technical work that keeps ministry running.

| Sub-lane | What it covers |
|---|---|
| **Welcome** | Greeting, hospitality, helping visitors and new members feel at home |
| **Kitchen** | Meal coordination, food preparation, kitchen logistics |
| **Coffee** | Sunday coffee service and hospitality refreshments |
| **IT** | Audio/visual, livestream, church tech support |
| **Security** | Parking, crowd safety, building access, emergency procedures |
| **Drivers** | Transportation — rides to services, appointments, the airport |
| **PEP** | Prayer, Encouragement, Pastoral support routing (see note below) |

> **PEP note:** PEP is the Communications sub-lane for requests that have a pastoral-care flavor but are not yet clearly spiritual. The duty deacon uses PEP routing when a member wants prayer, encouragement, or someone to check in on them — but the need has not crossed into the territory requiring an elder. If intake reveals it is spiritual (soul care, grief counseling, church discipline), redirect to [[escalation-to-elders]].

### Communication

**What it covers:** Member-facing announcements, PEP (see above), coordination of information flow between deacons and congregation.

**Sub-lanes:** PEP, Announcements, Internal coordination

### Finance

**What it covers:** Benevolence requests (financial assistance from the church fund), budget-tracked spending on behalf of a ministry.

**Sub-lanes:** Benevolence, Budget expenditure

> **Finance note:** Benevolence requests that would materially reduce the fund require elder concurrence before disbursement. Building-related spending over $12,500 also requires elder concurrence. See [[escalation-to-elders]] for the full policy thresholds.

---

## The Routing Flow

```
Request received by Duty Deacon
           │
           ▼
    ┌─────────────────────────────┐
    │  INTAKE: contact the member  │
    │  Collect: what, when, context│
    └────────────┬────────────────┘
                 │
                 ▼
         Tangible need?
          /           \
        YES             NO (spiritual)
         │               │
         │               ▼
         │     → Warm hand-off to a named Elder
         │       (deacon keeps any tangible parts)
         │       See [[escalation-to-elders]]
         │
         ▼
    Classify by function
    (+ sub-lane if clear)
         │
         ▼
    Set urgency tier
    [[sla-and-urgency]]
         │
         ▼
    Resource priority pass
    (see below — pick ONE named person)
         │
         ▼
    Person-to-person handoff
    Owner accepts verbally
         │
         ▼
    Log owner + handoff date
    Status → Assigned
         │
         ▼
    Duty Deacon is DONE
```

---

## The Resource Priority Pass

Given a classified request, the duty deacon contacts people in this order — always stopping at the **first person who can genuinely own it**. Every step targets a **specific named person**, never a team or group.

| Priority | Who to contact | Notes |
|---|---|---|
| **1** | A specific member tagged in the [[resource-tagging\|Helpers Directory]] with the matching skill or resource | Best fit — draws on known, volunteered capacity |
| **2** | A specific co-worker or ministry-team member in the relevant function's sub-lane | Colleague with domain context |
| **3** | The function's Associate Director | Supervisory fallback |
| **4** | The function's Director | Director-level fallback |
| **5** | The Deacon Chair | Backstop for anything that has exhausted the function chain |
| **6** | An Elder | **Only** when the need is spiritual, requires spiritual authority, or hits a policy threshold |

### How to use the pass

1. Identify the primary function and sub-lane from your triage.
2. Check the [[resource-tagging|Helpers Directory]] for anyone tagged with a matching skill. If there is a match, call that person first.
3. If no Helpers Directory match, identify a specific co-worker in the sub-lane.
4. Work down the list until someone accepts ownership.
5. Stop as soon as you have a named owner who has said yes. Do not contact the next level "just to keep them in the loop."

> **Hard rule:** Never contact a group, team, channel, or alias. If you find yourself thinking "I'll send this to the Kitchen team," stop. Identify a specific person in that team and call them.

---

## Selecting the Owner

The owner must be:

- A specific named individual
- Capable of working the need (has the skill, resource, or authority)
- Available to respond within the urgency tier's first-action window
- Willing — they have verbally accepted ownership on the call

The owner can be:

- A deacon
- A department chair or director
- A resourceful church member (via the Helpers Directory)

The owner is **not** a committee, a group text, or a department generically.

---

## Multi-Function Requests

Sometimes a request spans more than one function. For example: a member needs a ride to a medical appointment (Operations / Drivers) and also needs help paying for the prescription (Finance / Benevolence).

**Rule:** One primary owner. The primary owner is responsible for the request end to end, including coordinating with any collaborators in other functions.

How to determine the primary owner:

1. Identify which function carries the greater burden or urgency.
2. Route to that function's owner first.
3. The owner recruits any needed collaborators directly — person to person.
4. The duty deacon records both the primary owner and any known collaborators in the tracker.

The owner does not sub-assign ownership. They coordinate. If a collaborator's piece stalls, the owner surfaces it to the Deacon Chair — they do not reassign without chair awareness.

---

## Related Notes

- [[deacon-playbook]] — the full duty-deacon SOP including step-by-step intake
- [[request-taxonomy]] — the comprehensive type list and function mapping
- [[resource-tagging]] — how to find and use the Helpers Directory
- [[sla-and-urgency]] — urgency tiers and action windows
- [[escalation-to-elders]] — when and how spiritual referrals work
