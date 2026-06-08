---
title: "Deacon Playbook — Duty Deacon SOP"
status: design
tags: ["design"]
---

# Deacon Playbook — Duty Deacon SOP

This note is the single source of truth for how a request moves through the system. Read it start to finish before your duty week. Everything here is self-contained; links go to deeper detail when you need it.

---

## The Big Picture

```
Member has a need
       │
       ▼
┌─────────────────────┐
│   DUTY DEACON       │  ← single front door; rotates weekly
│  (you, this week)   │
└────────┬────────────┘
         │  1. Log it
         │  2. Acknowledge the member
         │  3. Do intake (call/meet the member)
         │  4. Point to self-help if it fits
         │  5. Triage (tangible? which function? urgency?)
         │  6. Pick ONE named owner (resource priority pass)
         │  7. Hand off — person to person
         │  8. DONE ← you are finished
         ▼
┌─────────────────────┐
│      OWNER          │  ← one named person; works the need
│ (deacon, director,  │
│  or member)         │
└────────┬────────────┘
         │  A. Work the need
         │  B. Follow up with the member
         │  C. Confirm resolved; close the request
         ▼
┌─────────────────────┐
│   DEACON CHAIR      │  ← sees ALL open requests
│                     │  ← alerted when anything stalls
└─────────────────────┘
```

---

## Part 1 — The Duty Deacon's Role

The duty deacon is the **front door**. You receive, log, acknowledge, intake, and hand off. Once the hand-off is complete and confirmed, you are done. You do not follow up. You do not check on progress. That belongs to the owner.

Your duty week is **Sunday through Saturday**. Your name and your backup's name are published in [[duty-roster]].

### Step-by-Step Checklist

#### Step 1 — Log the Request

The moment a request arrives (in person, by phone, by text, by email, through a third party), open the tracker and create a new record. Fields to fill immediately:

- Date received
- Member name and contact info
- How the request came in (in person / phone / text / email / referral)
- Brief description in the member's own words
- Your name as receiving deacon
- Status: **New**

Do this before anything else. A request that isn't logged doesn't exist in the system.

See [[tracker-spec]] for the full field list.

#### Step 2 — Acknowledge the Member

Contact the member to confirm you received their request. Use the appropriate [[templates/index|acknowledgment template]]. Time to acknowledge depends on urgency — but you must always acknowledge, even before you have answers.

| Urgency | Acknowledge by |
|---|---|
| EMERGENCY | Same day |
| URGENT | Within 24 hours |
| ROUTINE | Within 2–3 days |

At this point you may not know the urgency yet. When in doubt, treat it as URGENT until intake clarifies it. Update the tracker: status → **Acknowledged**.

> You are NOT promising a solution here. You are promising that a real person heard them and is on it.

#### Step 3 — Intake

Do intake personally. This means a phone call or in-person conversation — not a text thread. Your goal is to understand the need fully enough to triage and hand it off.

Intake questions to cover:

1. What exactly is needed? (Be specific — "help with food" is not enough; "groceries for a family of four through the end of the month" is.)
2. Is there a deadline or a time constraint?
3. Has anything already been tried?
4. Is there anything else connected to this need?
5. Is there a spiritual dimension the member wants pastoral support for? (If yes, note it — see [[escalation-to-elders]].)

Update the tracker with everything you learned. Revise the urgency if the conversation changes your read.

#### Step 4 — Point to Self-Help (When It Fits)

Before routing the request to an owner, check whether the member can meet their need independently with a small nudge from you:

- Is there a church resource they may not know about (food pantry schedule, benevolence application form, member ride-share list)?
- Is there a community resource that fits (211, local food bank, utility assistance program)?

If a self-help path exists, share it clearly and ask whether they would like to try it first. **Do not use self-help as a deflection.** If the member is in distress, overwhelmed, or the need is time-sensitive, go straight to routing. Log what you offered.

#### Step 5 — Triage

Determine:

1. **Is this tangible?** If the core need is spiritual (grief counseling, doctrinal question, marriage counseling, soul care), it goes to an elder, not an owner. See [[escalation-to-elders]]. If it is mixed, split it: deacons keep the tangible part, only the spiritual part goes to an elder.
2. **Which function(s)?** See [[routing-and-functions]] for the full function and sub-lane map.
3. **What urgency tier?** See [[sla-and-urgency]].

Update the tracker with function, urgency, and any notes on your reasoning.

#### Step 6 — Pick One Named Owner

Using the **resource priority pass** (see [[routing-and-functions]] for full detail), identify the single best person to own this request:

1. A specific member in the [[resource-tagging|Helpers Directory]] tagged with the matching skill or resource
2. A specific co-worker or ministry-team member in the relevant function's sub-lane
3. The function's Associate Director
4. The function's Director
5. The Deacon Chair (backstop)
6. An Elder — **only** if spiritual, requires spiritual authority, or hits a policy threshold

Work the list top to bottom. Stop at the first person who can genuinely own it. Do not skip levels because a lower level is easier to reach.

**One owner. Not a team. Not a group chat. One person.**

#### Step 7 — Hand Off (Person to Person)

Call or meet your chosen owner directly. Do not send a text to a group. Do not post in a channel. This is a **person-to-person handoff**.

Tell the owner:

- Who the member is and how to reach them
- What the need is (use your intake notes)
- The urgency tier and what that means for timing (see [[sla-and-urgency]])
- Any context that will help them (what the member already tried, any sensitivities)
- That they are the owner: they work the need, follow up, and close the request

Confirm verbally that they accept ownership. If they cannot take it, go back to step 6 and pick the next person.

Update the tracker: owner name, date of handoff, status → **Assigned**.

Use the [[templates/index|handoff template]] for a written record if you are handing off by message.

#### Step 8 — You Are Done

Your job is complete. The owner now carries the request. You do not check in on it. You do not ask for updates. You do not follow up with the member.

The [[crack-detection]] system will alert the Deacon Chair if the request stalls. The chair handles it from there.

---

## Part 2 — The Owner's Role

The owner is the person who received a person-to-person handoff from the duty deacon (or from the Deacon Chair after a reassignment). The owner is accountable for the request from handoff to closure.

### Owner Responsibilities

**A. Work the Need**

Contact the member promptly (within the urgency tier's first-action window). Understand what is needed. Take action: coordinate a meal, arrange a ride, process a benevolence application, connect a resource, whatever the need calls for. Log your actions in the tracker as you go. Update status → **In Progress**.

If you need a collaborator from another function, you recruit them directly — person to person. You remain the owner; they are a collaborator.

**B. Follow Up with the Member**

After taking the first action, follow up with the member to confirm it helped and check whether anything remains open. Do not assume the need is met until you hear it from the member. Update the tracker with the outcome of your follow-up. Status → **Resolved** (member confirms the need is met, but you have not yet formally closed the record).

**C. Close the Request**

Once the member confirms the need is met and you have logged the outcome, close the request in the tracker. Status → **Closed**. Record the resolution: what was done, what resources were used, what remains for any follow-on need.

If the member cannot be reached for follow-up after reasonable attempts, note the attempts in the tracker, mark **Resolved**, and flag for the Deacon Chair. Do not silently close without a follow-up attempt.

---

## Part 3 — The Deacon Chair's Role

The Deacon Chair does not receive requests — the duty deacon does. The chair's role is **oversight and backstop**.

### What the Chair Does

1. **Maintains a live view of all open requests.** The tracker is the chair's dashboard. Any request that is New, Acknowledged, Assigned, In Progress, Awaiting Member, On Hold, or Reopened is visible to the chair.

2. **Responds to stall alerts.** When the [[crack-detection]] system flags a stalled request, the alert goes to the chair (not to a rung-by-rung escalation ladder). The chair either:
   - **Redirects** to an Elder (if the need turns out to be spiritual or hits a policy threshold), or
   - **Reassigns** to a resourceful member directly — person to person.

3. **Runs the monthly sweep.** At the monthly deacons meeting, the chair reviews every open request as a backstop. Any request open past its expected resolution window is reviewed: what is the status, what is blocking it, and what is the next action?

4. **Never silently closes a stalled request.** A stalled request is Reopened. The chair root-causes why it stalled (one or two sentences in the tracker), contacts the member to apologize and re-engage, and assigns a new owner.

---

## The Person-to-Person Hard Rule

> **Every handoff is ONE named person → ONE named person, directly.**

This rule is not a suggestion. It is the structural guarantee that requests do not fall through the cracks.

**What this means:**

- The duty deacon calls the owner, names them, and gets a verbal "yes, I have it."
- The chair reassigns to a specific member, not to "the Operations team."
- An elder referral goes to a specific elder by name, with a one-paragraph summary — not to "please connect with an elder."

**What this prohibits:**

- Posting a need in a group chat to "see who's available"
- Emailing a department alias
- Saying "the Kitchen team will handle it"
- Marking a request Assigned without a named owner accepting

---

## Quick Reference — Urgency Tiers

| Tier | Acknowledge | First Action | Example |
|---|---|---|---|
| EMERGENCY | Same day | Same day | Utility shutoff today, eviction notice, medical crisis |
| URGENT | Within 24 h | Within 2–3 days | Groceries needed this week, acute transportation gap |
| ROUTINE | Within 2–3 days | Within 1–2 weeks | General assistance request, scheduling, non-urgent benevolence |

Full definitions and stall thresholds: [[sla-and-urgency]]

---

## Quick Reference — When to Involve an Elder

Involve an elder **only** when the need is:

- Spiritual in nature (soul care, grief counseling, doctrinal question)
- Requires spiritual authority (church discipline, restoration)
- A policy threshold (benevolence that materially reduces the fund; building spend over $12,500)

For **mixed requests** (tangible + spiritual): deacons keep and work the tangible parts. Only the spiritual part goes to an elder. Make the warm hand-off with a one-paragraph summary. Never tell the member to go find an elder themselves.

Full detail: [[escalation-to-elders]]
