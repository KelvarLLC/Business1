# Lead Intake Proposal Assembly Kit

## Purpose

Turn a qualified Lead Intake Command System / Follow-Up Engine opportunity into a clean, bounded proposal without rebuilding the proposal from scratch.

Use this kit after a positive reply, website inquiry, or discovery call suggests the prospect has a real lead capture, follow-up, owner visibility, or stale-lead problem.

This is an internal assembly guide. It is not final pricing and should not be sent to a prospect as-is.

## Source Assets

Use these repo-backed assets together:

- `agency-ops/offers/lead-intake-follow-up-automation.md`: offer definition and sellable problem framing.
- `agency-ops/offers/lead-intake-scope-menu.md`: package routing for blueprint, single-source build, or follow-up visibility upgrade.
- `agency-ops/proposals/lead-intake-follow-up-proposal-starter.md`: base proposal structure.
- `agency-ops/workflows/lead-intake-discovery-outline.md`: discovery questions and qualification structure.
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`: implementation pattern, fields, stages, QA rules, and delivery logic.
- `agency-ops/workflows/lead-intake-reply-response-kit.md`: reply handling before proposal.
- `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`: delivery plan starter after a proposal is accepted.

## When To Assemble A Proposal

Assemble a proposal only when at least these facts are known:

- Prospect or client name.
- Primary lead source or the main source to inspect first.
- Current tracker destination, even if it is only email or a spreadsheet.
- Current follow-up owner.
- The main failure pattern: missed lead, slow first response, stale follow-up, poor visibility, unclear qualification, or manual copying.
- Whether the first useful outcome is a blueprint, a working intake workflow, or a follow-up visibility layer.

If these facts are not known, use the discovery outline or reply response kit before drafting a full proposal.

## Scope Routing

Use the scope menu to pick one of three proposal paths.

### Path 1: Intake Map And Quick-Win Blueprint

Use when the prospect is curious but unclear, has multiple possible sources, or does not yet know where the lead process breaks.

Proposal angle:

- Map one primary lead path.
- Identify where leads get missed or delayed.
- Define required fields, owner responsibility, stage model, and smallest useful automation.
- Deliver a concise blueprint that can become implementation scope.

Avoid promising a live build in this path.

### Path 2: Single-Source Lead Intake System

Use when the prospect has one obvious high-value intake source and needs a working phase-one system.

Proposal angle:

- Connect or simulate one primary source.
- Normalize lead details into a tracker or CRM-ready structure.
- Add owner, stage, next action, and follow-up due fields.
- Add reminders or draft-response prompts.
- Provide a simple owner/admin view and handoff notes.

This is the recommended first proposal path for a qualified Dallas home-services prospect that confirms one main estimate or service request source.

### Path 3: Follow-Up And Owner Visibility Upgrade

Use when the prospect already has a tracker or CRM but follow-up still goes stale.

Proposal angle:

- Keep the existing lead system.
- Add stale-lead conditions, reminders, draft prompts, owner/admin views, and manual override rules.
- Document how the team should review and update statuses.

Avoid positioning this as a CRM replacement.

## Proposal Assembly Steps

1. Copy the structure from `lead-intake-follow-up-proposal-starter.md`.
2. Replace generic client placeholders with the prospect's known facts.
3. Choose one scope path from the scope menu.
4. Keep phase one bounded to one primary source, one tracker, one follow-up mechanism, one owner group, and one simple stage model.
5. Pull field, stage, routing, reminder, and QA language from the workflow spec.
6. Add client-specific assumptions and dependencies.
7. Add explicit out-of-scope language for CRM migration, multi-source routing, auto-send behavior, paid ads, attribution reporting, and guaranteed revenue outcomes.
8. End with a concrete next step: discovery call, access checklist, blueprint approval, or implementation kickoff.

## Required Proposal Sections

Every client-specific proposal should include:

- Executive summary.
- Current problem.
- Recommended scope path.
- Phase-one workflow.
- Included work.
- Not included.
- Client inputs needed.
- Implementation plan.
- Risks and mitigations.
- Handoff and support notes.
- Decision needed.

Optional sections:

- Demo walkthrough, clearly labeled as demo proof only.
- Phase-two expansion options.
- Timeline, if the user has approved timeline defaults.
- Pricing, only after the user has approved pricing defaults or a client-specific quote.

## Reusable Proposal Language

### Problem Framing

New inquiries arrive through a lead source, but the first response and follow-up process depends too heavily on manual checking, copying, memory, or a busy owner. That creates a risk that qualified leads sit too long, receive inconsistent follow-up, or never become visible in one owner-facing view.

### Phase-One Framing

Phase one focuses on one intake path, one tracker, and one follow-up rhythm. The goal is not to rebuild the whole sales system. The goal is to make sure new inquiries are captured, visible, assigned, and followed up consistently enough that good leads are less likely to slip through the cracks.

### Safety Framing

External auto-send behavior should stay off by default. The first version should use internal reminders or draft responses unless the client explicitly approves exact message types, timing, exclusions, and pause rules.

### Existing Tool Framing

This can usually be built around the tools the client already uses. If the client has a CRM, the phase-one recommendation is to improve the intake and follow-up layer around that system before proposing a larger rebuild.

## Discovery-To-Proposal Checklist

Before marking a proposal as ready, confirm:

- Primary source is named.
- Tracker destination is named.
- Follow-up mechanism is chosen: reminder, draft response, or approved auto-send.
- Owner/admin role is named.
- Stage model is simple and understandable.
- Required fields are listed.
- Client inputs and access needs are listed.
- Out-of-scope items are explicit.
- Auto-send safety is addressed.
- Sensitive or regulated data concerns are flagged for human review.
- Proposal does not guarantee revenue outcomes.

## Default Implementation Shape

Use this as the baseline for a working phase-one proposal:

```text
Recommended package: Single-Source Lead Intake System
Primary lead source: [website form / shared inbox / CRM event / booking request]
Tracker destination: [Google Sheet / Airtable / CRM / lightweight database]
Follow-up mechanism: [internal reminder / draft response / approved auto-send]
Owner/admin role: [owner, office manager, dispatcher, sales admin]
Stage model: new, needs-review, contacted, qualified, waiting-on-lead, appointment-set, proposal-needed, closed-won, closed-lost, nurture
Included work: source review, field mapping, tracker setup, stage and owner logic, follow-up prompt, owner view, testing, handoff notes
Not included: full CRM migration, multiple intake sources, paid ads, advanced attribution, unapproved auto-send, guaranteed revenue outcomes
Client inputs needed: access, lead examples, qualification rules, response timing, message examples, owner roles
Risks and dependencies: tool access, unclear ownership, subjective qualification, adoption of tracker
Phase-two options: additional sources, CRM integration, scheduling workflow, owner summary, source reporting, estimate handoff automation
```

## Proposal Readiness Statuses

Use these internal statuses:

- `discovery-needed`: not enough facts for a proposal.
- `proposal-outline-ready`: enough facts to prepare a scoped outline, but still missing access, timing, or owner details.
- `proposal-draft-ready`: enough facts to draft a full client-specific proposal.
- `proposal-sent`: proposal has been sent by an approved mailbox action.
- `won-delivery-needed`: proposal accepted and delivery plan should be created or updated.

Do not mark a proposal as sent unless it was actually sent through an approved channel.

## First-Batch Use

For DFW HVAC, Cool Tech, and Lone-Star Roof Systems, use this kit only after a positive reply or discovery conversation. Until then, keep them at outreach or discovery stage and use the saved draft-only outreach and outreach execution control sheet.

Recommended first proposal direction if a Dallas home-services prospect responds positively:

- Start with the Single-Source Lead Intake System if they can name one main estimate or service request source.
- Start with the Intake Map And Quick-Win Blueprint if the workflow is unclear.
- Start with the Follow-Up And Owner Visibility Upgrade if they already have a CRM or tracker but admit follow-up still goes stale.

## Next Repository Action

When a client-specific proposal is drafted, save it under:

```text
agency-ops/proposals/[yyyy-mm-dd]-[client-slug]-lead-intake-proposal.md
```

Then update the related lead record with:

- Current pipeline stage.
- Proposal path selected.
- Open questions.
- Client-specific dependencies.
- Next approval or delivery action.
