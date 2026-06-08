---
title: "Helpers Directory — Resource & Skill Tagging"
status: design
tags: ["design"]
---

# Helpers Directory — Resource & Skill Tagging

The Helpers Directory is the church's internal record of which members have volunteered skills, resources, and availability that the diaconate can draw on when routing a request. It powers Step 1 of the [[routing-and-functions|resource priority pass]]: when a need comes in, the duty deacon checks the directory first and — if a match exists — contacts that specific person before going to any other rung in the priority chain.

---

## The Gap in Current Data

The existing Membership Database has no fields for skills, profession, equipment, or availability. It captures:

- **Office** — Pastor / Elder / Deacon / Staff
- **Fellowship Group** — life-stage grouping
- **Ministry Group** — Word, Worship, Mission, Children, Youth, Nursery, Livestream
- **Deacon Department** — Administration, Operations, Communication, Finance (sub-lanes: Welcome, Kitchen, Coffee, IT, PEP)

The Service Sign-Up roster (~81 servers across 20 areas) assigns people to *roles*, not to *skills or personal resources*.

Neither source tells the duty deacon: "Who in the congregation owns a pickup truck?" or "Who is a licensed nurse?" or "Who speaks Vietnamese?"

The Helpers Directory fills that gap.

---

## Tag Schema

Each record in the Helpers Directory describes one member's volunteered capacity. The schema below maps directly to the **Helpers Directory** tab in the [[tracker-spec|Google Sheet tracker]].

### Identity & Contact

| Field | Description |
|---|---|
| **Member Name** | Full name, matching the Membership Database |
| **Preferred Name** | How they prefer to be addressed |
| **Phone** | Primary contact number |
| **Email** | Preferred email |
| **Fellowship Group** | Cross-reference to membership |
| **Ministry / Department** | Cross-reference to existing role |

### Profession & Occupation

| Field | Description |
|---|---|
| **Occupation / Job Title** | Current or most recent occupation |
| **Professional Domain** | Select all that apply: Medical / Legal / Financial / Education / Trades / IT / Social Work / Counseling / Other |
| **Certifications / Licenses** | Free text: RN, CPA, Attorney, Licensed Electrician, CDL, etc. |

These fields surface members whose day-to-day expertise maps to a need — for example, a nurse who can advise on a home-care situation, or an accountant who can review a benevolence application.

### Skills

Free-text plus tag checkboxes. A member may have professional skills (above) and practical skills that are distinct from their occupation.

**Skill tags (check all that apply):**

| Category | Tags |
|---|---|
| **Trades** | Plumbing, Electrical, HVAC, Carpentry, Painting, General home repair |
| **Medical / Caregiving** | Nursing / CNA, First Aid / CPR, Elder care, Child care, Disability support |
| **Legal / Financial** | Legal counsel, Tax prep, Financial counseling, Benefits navigation |
| **Counseling / Support** | Grief support, Addiction recovery support, Family crisis support |
| **Education / Tutoring** | Literacy, ESL instruction, Academic tutoring, Vocational coaching |
| **Technology** | IT support, Device setup, Audio/visual, Web/software |
| **Logistics / Coordination** | Event logistics, Meal coordination, Moving/hauling assistance |
| **Languages** | (free text) Languages spoken other than English |
| **Other** | Free text |

### Resources & Equipment

Physical assets the member is willing to share or loan for ministry use.

| Field | Description |
|---|---|
| **Vehicle type** | Pickup truck, Cargo van, Passenger van (7+ seats), Standard car |
| **Spare room / space** | Short-term housing (nights), Storage space, Meeting space |
| **Tools / Equipment** | Power tools, Hand tools, Lawn/yard equipment, Moving equipment |
| **Other resources** | Free text: generator, pressure washer, sewing machine, etc. |

### Availability

| Field | Description |
|---|---|
| **General availability** | Weekday mornings / Weekday afternoons / Weekday evenings / Weekend mornings / Weekend afternoons / Flexible |
| **Seasonal constraints** | Free text: "Not available June–August," "Available weekends only during school year," etc. |
| **Response window** | How quickly they can typically respond to a request: Same day / Within 24 h / Within a few days |

### Willingness Flags

These are the broad *request type* categories the member has pre-authorized the diaconate to call on them for. A member may have plumbing skills but not want to be called for plumbing jobs — the willingness flag makes the distinction.

| Flag | Description |
|---|---|
| **Transportation / rides** | Willing to drive members to appointments, hospital, airport, etc. |
| **Meals / food** | Willing to prepare or deliver meals |
| **Home repairs** | Willing to assist with repairs at a member's home |
| **Financial guidance** | Willing to provide informal advice on financial matters |
| **Caregiving support** | Willing to provide short-term elder care, childcare, or disability support |
| **Housing support** | Willing to provide a spare room short-term |
| **Professional advice** | Willing to provide informal professional counsel (medical, legal, financial) |
| **Prayer / Encouragement** | Willing to call, visit, or pray with a member in need |
| **Moving assistance** | Willing to help with moving, hauling, or heavy lifting |
| **Other** | Free text |

### Capacity & Notes

| Field | Description |
|---|---|
| **Frequency willing to help** | Occasionally (a few times a year) / Regularly (monthly) / As needed |
| **Capacity notes** | Free text: "Can do one ride per week," "Prefer requests under 2 hours," "Retired — very flexible," etc. |
| **Current status** | Active / Temporarily unavailable / Retired from directory |

### Consent

| Field | Description |
|---|---|
| **Opt-in confirmed** | Yes / No. **Only "Yes" records are shown to duty deacons.** |
| **Consent date** | Date the member confirmed opt-in |
| **Consent method** | Survey / Direct request / Ministry leader referral |

> **Hard rule:** A member's record is never used for routing unless Opt-in confirmed = Yes. Deacons do not contact members based on known skills without explicit consent.

---

## Seeding the Directory

The directory starts empty. It is built in two waves.

### Wave 1 — Known Sources (Low-Lift)

The Deacon Chair and leadership can seed obvious entries from existing data without a survey:

1. **Current deacons and directors** — their skills and resources are largely known; ask each person directly to review and confirm their entry.
2. **Ministry Group leaders** — e.g., the IT sub-lane members are already a known pool for tech support; the Kitchen sub-lane members are a known pool for meals.
3. **Members who have previously volunteered** — if a member drove someone to the hospital last year, confirm with them whether they want to be in the directory for future ride requests.

Wave 1 entries require each person to explicitly confirm consent before their record is marked Active.

### Wave 2 — Member Skills Survey (Broader)

A short opt-in survey distributed to the congregation captures the broader pool. The survey should be:

- **Short**: 10–15 questions maximum, completable in under 5 minutes.
- **Voluntary**: framed as an invitation to serve, not a census.
- **Specific**: ask about willingness flags and availability — not just skills — so the directory is immediately actionable.

**Survey distribution channels:**
- Sunday bulletin insert (one time, with follow-up reminder the next week)
- Church app / communication platform push notification
- Ministry leaders forwarding to their groups

**Suggested survey questions:**

1. Name and best contact number/email
2. Do you want to be in our Helpers Directory? (opt-in)
3. What is your occupation or professional background?
4. Any relevant professional skills or certifications? (free text)
5. Practical skills you are willing to use to help members: (checkbox list from the Skills tags above)
6. Resources you are willing to share: (checkbox list from Resources)
7. What kinds of requests can we call on you for? (Willingness flags checkboxes)
8. General availability: (checkbox)
9. How often are you willing to help? (Occasionally / Regularly / As needed)
10. Any notes or limits we should know? (free text)

Survey responses go directly into the Helpers Directory tab. Leadership reviews for completeness, then marks Opt-in confirmed = Yes.

---

## Privacy

The Helpers Directory is **internal only**. It is never published to the church website, bulletin, or any public channel.

- Only deacons (Duty Deacon, Chair, Directors) have access to the directory tab in the tracker.
- The Phase 3 web app will enforce role-based access at the data layer.
- Member contact information in the directory is used solely for diaconate routing — never shared with other members or third parties without explicit consent.
- Any member can withdraw from the directory at any time; their record is set to "Retired from directory" (not deleted, to preserve audit history).

---

## How the Directory Powers Routing

When the duty deacon reaches Step 6 of the intake process ([[deacon-playbook]]) and is working the resource priority pass ([[routing-and-functions]]):

1. **Identify the need's key tags** — e.g., a member needs a ride to a medical appointment → relevant tags: Transportation/rides, Vehicle (any), Availability matches appointment time.
2. **Filter the Helpers Directory** for members with those tags AND Opt-in confirmed = Yes AND Current status = Active.
3. **Review availability and capacity notes** to find the best fit (someone available that day, within their stated frequency limit).
4. **Contact that specific person** — person to person — and ask if they can take this request.
5. **If they can**: log their name as Owner, complete the handoff. If they cannot: contact the next match from the filtered list, then fall through to Priority 2 (function co-worker) if the directory yields no available match.

The directory does not replace the duty deacon's judgment. It surfaces candidates. The duty deacon selects a specific person, calls them, and secures a verbal yes.

---

## Related Notes

- [[routing-and-functions]] — the resource priority pass and full routing flow
- [[tracker-spec]] — the Helpers Directory tab columns in the Google Sheet
- [[deacon-playbook]] — how the duty deacon uses the directory during Step 6
- [[request-taxonomy]] — request types and their function mapping (informs which tags to filter for)
