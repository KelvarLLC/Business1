# DFW HVAC Simulated Positive Reply To Proposal Path

Date: 2026-06-14
Status: simulation-only operating artifact
Repository scope: `KelvarLLC/Business1`
Workspace scope: `agency-ops/`
Related lead: `agency-ops/leads/2026-06-13-dfw-hvac.md`

## Purpose

Show the full next-step operating path if DFW HVAC replied positively to the Lead Intake Command System / Follow-Up Engine outreach.

This artifact demonstrates how the agency should classify the reply, preserve safety gates, gather discovery facts, score proposal readiness, select a scope path, and prepare a proposal outline without pretending that a real reply, proposal, client commitment, email draft, price quote, or sent message exists.

## Guardrails

- This is fictional simulation content for internal readiness only.
- No outreach was sent.
- No prospect reply was received.
- No mailbox draft was created.
- No proposal was sent.
- No price was quoted.
- No client commitment exists.
- No deployment, production launch, paid-provider selection, public proof, testimonial, or auto-send approval is implied.

## Known Lead Context

DFW HVAC has a public estimate path that asks for customer contact details, service address, number of HVAC systems, and a description of the service issue. The lead record notes that the public page promises contact within 2 business hours to schedule a free estimate.

Current pre-reply stage from the lead record: `lead-identified`

Current useful hook:

> Their public 2-business-hour response promise creates a natural reason to offer a lightweight intake and follow-up workflow review.

## Simulated Positive Reply

Fictional prospect reply:

```text
Hi Jameson,

This is interesting. We do get a lot of estimate requests through the website, and I want to make sure they are followed up quickly. What would the first version of something like this look like?

Thanks,
DFW HVAC team
```

## Reply Classification

Using `agency-ops/workflows/lead-intake-reply-response-kit.md`:

- Reply category: Category 1, Interested / Curious
- Secondary signal: asks what the first version would look like
- Pipeline move if this were real: move from `lead-identified` to `qualification-in-progress`
- If they agree to answer workflow questions or take a short call: move to `discovery-needed`
- Buying signal: moderate; they confirm website estimate requests matter, but do not yet confirm missed leads, tracker gaps, owner responsibility, tool stack, or urgency
- Safety posture: draft-first only; no auto-send, no price quote, no final proposal

## Lead Record Update That Would Be Added If Real

```text
## Reply Update - 2026-06-14

- Reply category: Interested / Curious
- Summary: Prospect expressed interest in improving follow-up for website estimate requests and asked what the first version would look like.
- Current stage: qualification-in-progress
- Buying signal: Positive curiosity tied to website estimate requests.
- Tool/system mentioned: Website estimate form only; tracker or CRM unknown.
- Pain confirmed: Website estimate requests matter; missed or delayed follow-up not yet confirmed.
- Missing information: Current receiver, tracker destination, first-response owner, follow-up timing, volume, current reminders, CRM/tool stack, approval process.
- Recommended response: Send a short discovery reply with targeted questions and a bounded phase-one frame.
- Likely scope-menu path: Package 1 until tracker and owner are known; Package 2 if website form is confirmed as the first build source.
- Next action: Ask targeted discovery questions; do not quote price.
- Follow-up due: 1 business day after reply, if the reply were real and approved for response.
```

## Recommended Draft Response For Review Only

This is internal draft language only. It should not be sent unless the user approves the exact message and target mailbox action.

```text
Subject: Re: estimate follow-up

Hi [Name],

Absolutely. I would start with a small workflow map, not a full system rebuild.

For DFW HVAC, the first version would likely focus on the website estimate path: when a new request comes in, where it lands, who sees it first, what details need to be tracked, and what should happen before the 2-business-hour response window is missed.

A few useful questions:

1. Where do website estimate requests land today?
2. Who is responsible for first response?
3. Do those requests get tracked in a CRM, spreadsheet, inbox, or dispatch tool?
4. What should happen if a lead has not been contacted or followed up with by the expected time?
5. Should the first version create internal reminders, draft messages, or both?

With those answers, I can outline the smallest useful version: one lead source, one tracker, one follow-up rhythm, and a simple owner view.

Best,
Jameson
Kelvar LLC
```

## Discovery Prep

If the simulated reply were real and the user approved a response, prepare discovery with `agency-ops/workflows/lead-intake-discovery-outline.md`.

- Prospect: DFW HVAC
- Current stage: discovery-needed after they accept questions or a call
- Primary suspected workflow: website estimate request intake and follow-up
- Known intake source: website estimate form
- Known tracker/tool: unknown
- First response owner: unknown
- Follow-up timing mentioned: 2 business hours for initial contact, from public site context
- Best first win: make new estimate requests visible, assigned, and follow-up due before the promised response window is missed
- Likely scope-menu path: Package 1 if workflow remains unclear; Package 2 if website form, tracker, owner, and reminder path are confirmed
- Open questions: tracker destination, CRM/tool stack, request volume, owner/admin view, follow-up rules, message approval, access constraints
- Proposal likely: unknown until discovery answers are received

## Proposal Decision Scorecard Draft

Using `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`:

| Category | Score | Rationale |
| --- | ---: | --- |
| Pain severity | 2 | Website estimate requests matter; direct missed-lead pain is not yet confirmed. |
| Workflow specificity | 2 | One likely workflow is visible, but destination, owner, and follow-up path are unknown. |
| First-win clarity | 2 | A 2-business-hour response visibility layer is useful, but exact success criteria need discovery. |
| Tool/access feasibility | 0 | Current tools, CRM, inbox, and access path are unknown. |
| Human approval/safety fit | 2 | Draft/reminder-first path is safe, but the prospect has not confirmed approval preferences. |
| Decision urgency | 1 | Public response promise suggests urgency, but business pain and volume are unknown. |
| Buyer fit | 0 | Contact role and authority are unknown. |
| Scope fit | 2 | Fits the Lead Intake offer if bounded to the website estimate path. |
| Total | 11 | Outcome: `discovery-needed`. |

Override status:

- Buyer fit is 0, so outcome cannot exceed `proposal-outline-ready`.
- Tool/access feasibility is 0, so a full proposal draft would be premature.
- The correct result is `discovery-needed`, with a possible short outline only after targeted answers.

## Scope Path Recommendation

Primary recommendation right now:

- Start with Package 1: Intake Map And Quick-Win Blueprint if they only express curiosity.

Conditional recommendation after discovery:

- Move to Package 2: Single-Source Lead Intake System if they confirm the website estimate form is the first source, identify where submissions land, name a first-response owner, and agree on reminders or draft-response prompts.
- Move to Package 3: Follow-Up And Owner Visibility Upgrade if they already have a CRM or dispatch tool, but stale follow-up and owner visibility remain the real gap.

## Proposal Outline Skeleton

This is an outline only, not a final client proposal.

### Executive Summary

DFW HVAC appears to have a valuable website estimate path with a public expectation of fast follow-up. Phase one would focus on making each website estimate request visible, assigned, and easier to follow up before the response window is missed.

### Current Problem

Estimate requests may arrive through the website, but without discovery it is unknown whether they are reliably tracked, assigned, followed up, and visible to the owner or office team.

### Recommended Phase-One Scope

Recommended package after minimum discovery: likely Single-Source Lead Intake System if the website form is confirmed as the first source.

- Primary lead source: website estimate form
- Tracker destination: to be confirmed
- Follow-up mechanism: internal reminders or draft-response prompts, not auto-send by default
- Owner/admin role: to be confirmed
- Stage model: new, needs-review, contacted, waiting-on-lead, appointment-set, closed-won, closed-lost, nurture

### Included Work

- Review one website estimate request path.
- Map required lead fields.
- Define owner, stage, next action, and follow-up due fields.
- Create or specify a simple lead tracker structure.
- Add reminder or draft-response prompt logic.
- Define owner/admin view.
- Test happy path and selected edge cases.
- Prepare handoff notes.

### Not Included

- Full CRM migration.
- Multiple intake sources.
- Advanced dispatch automation.
- Paid ads or attribution reporting.
- External auto-send without separate approval.
- Guaranteed revenue outcomes.
- Public proof, testimonial, or case-study claims without client approval.

### Client Inputs Needed

- Where website estimate requests land now.
- Who responds first.
- Current CRM, inbox, sheet, form tool, or dispatch system.
- Typical estimate-request volume.
- Follow-up timing rules.
- Approved response copy or message examples.
- Access and testing pathway.
- Who signs off on workflow behavior.

### Implementation Plan Preview

1. Discovery and workflow map.
2. Field and tracker design.
3. Reminder or draft-response logic.
4. Owner/admin view setup.
5. Test run with sample estimate requests.
6. Handoff notes and first-week review checklist.

### Decision Needed

Before a real proposal can be drafted, DFW HVAC would need to answer the core discovery questions and confirm whether the first useful outcome is a blueprint, a working single-source intake system, or a follow-up visibility layer around an existing tool.

## Delivery Preview If Won

A real accepted project would move into `agency-ops/delivery/` and should use the delivery plan starter.

Likely delivery phases:

1. Confirm source, tracker, owner, fields, timing, and safety gates.
2. Build or configure the phase-one tracker/view.
3. Add reminder or draft-response workflow.
4. Test complete lead lifecycle with sample records.
5. Document daily operating process.
6. Review first-week usage and queue phase-two improvements.

QA checks:

- New lead captured with required fields.
- Owner and next action assigned.
- Follow-up due time created correctly.
- Stale lead appears in the right view.
- No unapproved external messages are sent.
- Manual override and pause rules are documented.

## Internal Tracker Updates If Real

If this were a real reply, update these records:

- `agency-ops/leads/2026-06-13-dfw-hvac.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/proposals/dallas-six-lead-proposal-readiness-snapshot.md`
- `agency-ops/ops/outreach-learning-log.md`
- `agency-ops/ops/current-command-brief.md`

Potential new artifact after real discovery:

- `agency-ops/proposals/2026-06-14-dfw-hvac-lead-intake-proposal-outline.md`

Do not create a client-specific final proposal until the scorecard supports `proposal-draft-ready` and the user approves moving from outline to proposal preparation.

## What This Demonstrates

This simulation shows the agency system can:

- Recognize a positive reply without overstating readiness.
- Convert vague interest into a discovery path.
- Protect against premature pricing, sending, and proposal claims.
- Route the lead through the scope menu.
- Create a proposal outline only when facts support it.
- Preserve continuity across lead records, trackers, proposals, delivery planning, and command-state files.

## Recommended Next Safe Move

Without outreach approval, the next safe in-repository move is to create one more simulation path for a different reply category, such as:

1. DFW HVAC asks for pricing.
2. Cool Tech says they already use a CRM.
3. Lone-Star Roof Systems asks for a call.

The highest-value real-world approval remains creating Outlook drafts for the first three Dallas leads for review only, with no sending until a second explicit approval.
