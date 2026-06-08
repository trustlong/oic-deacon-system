---
title: "Deacon Response System — Design Overview"
status: design
tags: ["design"]
---

# Deacon Response System — Design Overview

## Purpose

The OIC Deacon Response System operationalizes the Acts 6 model: deacons serve as first responders to the congregation's **tangible needs** so that elders remain free for prayer and the ministry of the Word. Every request that comes through the door gets logged, acknowledged, owned, worked, and closed — with no one falling through the cracks.

> "Select from among you seven men of good repute, full of the Spirit and of wisdom, whom we will appoint to this duty." — Acts 6:3

## Design Principles

1. **One front door.** Every request enters through the [[duty-roster|Duty Deacon]]. No ambiguity about who receives it first.
2. **Person-to-person, always.** Every handoff is one named person to one named person. Nothing is dropped into a group or channel to "see who picks it up."
3. **Owners resolve and close.** The duty deacon hands off and is done. The owner works the need, follows up, and confirms closure with the member.
4. **The chair sees everything.** The Deacon Chair has a real-time view of all open requests and is the single escalation point when something stalls.
5. **Elders for spiritual matters only.** Tangible needs stay with deacons. Spiritual needs, soul care, church discipline, and policy thresholds go to elders — with a warm hand-off, never a bounce.
6. **Stalled requests are never silently closed.** A stall is a crack. It gets detected, root-caused, and repaired — with an apology to the member.

## The Four Functions at a Glance

| Function | Sub-lanes |
|---|---|
| **Administration** | Records, scheduling, correspondence |
| **Operations** | Welcome, Kitchen, Coffee, IT, Security, Drivers |
| **Communication** | PEP (prayer/encouragement/pastoral support routing), announcements |
| **Finance** | Benevolence, budget-tracked spending |

See [[routing-and-functions]] for the full function map and routing logic.

## Design Notes Index

| Note | What it covers |
|---|---|
| [[deacon-playbook]] | **Start here.** The complete duty-deacon SOP, linear and self-teachable |
| [[request-taxonomy]] | How requests are categorized: type, function, sub-lane |
| [[routing-and-functions]] | The four functions, sub-lanes, resource priority pass, owner selection |
| [[sla-and-urgency]] | The three urgency tiers, acknowledgment and action targets |
| [[escalation-to-elders]] | When and how to involve an elder; split-mixed-request pattern |
| [[crack-detection]] | Request states, stall triggers, chair alerts, reopen-and-apologize rule |
| [[resource-tagging]] | The Helpers Directory and how skill/resource tags are maintained |
| [[tracker-spec]] | Data model, required fields, state machine, UI requirements |
| [[duty-roster]] | How the weekly duty rotation is set, published, and communicated |
| [[templates/index\|Communication templates]] | Acknowledgment, hand-off, closure, elder escalation, and more |

## How to Read These Notes

**New duty deacon?** Read [[deacon-playbook]] first — it is the complete, linear SOP. Then skim [[sla-and-urgency]] so the urgency tiers are clear in your mind.

**Function owner or director?** Read [[routing-and-functions]] and [[escalation-to-elders]].

**Deacon Chair?** Read everything, but pay particular attention to [[crack-detection]].

> **Internal working document.** This folder is excluded from the public site. Notes do not carry `publish: true`. Move finalized, congregation-appropriate content into `content/published/` when ready.
