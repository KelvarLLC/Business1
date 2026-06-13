# Lead Intake Discovery Outline

## Purpose

Use this outline when a prospect shows interest in the Lead Intake Command System / Follow-Up Engine offer. The goal is to qualify the opportunity, understand the current workflow, and decide whether the next step should be a scoped proposal, a nurture follow-up, or a polite no-fit close.

## Discovery Outcome

By the end of discovery, the agency should know:

- Whether the prospect has a real lead intake or follow-up pain.
- Which intake source should be automated first.
- What tool should hold the lead record.
- Who owns first response and follow-up.
- What stage model and follow-up timing are practical.
- Whether the work fits a bounded phase-one project.
- What proposal scope, dependencies, and risks should be documented.

## Pre-Call Prep

Before the call or async discovery review:

- Review the lead record in `agency-ops/leads/`.
- Review any outreach reply, website inquiry, or intake notes.
- Check whether the prospect appears to fit one of the current offers.
- Prepare the reusable workflow spec: `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`.
- Keep the delivery starter ready: `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`.

## Opening Frame

Use a practical frame:

"The goal here is not to redesign your whole sales system. I want to understand where new leads arrive, what happens next, and where follow-up breaks down. Then I can recommend the smallest useful automation to tighten that first path."

## Core Questions

### Current Lead Sources

1. Where do new leads come from today?
2. Which source creates the most valuable or urgent leads?
3. Which source gets missed most often?
4. Are leads coming through website forms, email, phone, social messages, ads, CRM, booking tools, or spreadsheets?

### First Response

1. Who sees a new lead first?
2. Who is responsible for responding?
3. How quickly should the first response happen?
4. What usually slows that response down?
5. Are there existing message templates that already work?

### Qualification

1. What makes a lead worth pursuing?
2. What makes a lead a poor fit?
3. What information is required before someone can quote, schedule, or route the lead?
4. What should happen when contact details are incomplete?
5. What should happen when the lead is outside the service area?

### Follow-Up

1. What happens if a lead does not respond?
2. When should the first follow-up happen?
3. How many follow-ups are appropriate?
4. Who should be alerted when follow-up is overdue?
5. Should the first version create reminders, draft messages, or auto-send messages?

Default recommendation:

- Start with reminders or draft messages.
- Use auto-send only after explicit client approval of exact message types, timing, exclusions, and pause process.

### Tracker And Reporting

1. Where should leads live after capture?
2. Does the team already use a CRM, spreadsheet, board, or shared inbox?
3. What view does the owner or manager actually check?
4. Which statuses are needed?
5. What report would make the workflow worth checking daily?

### Constraints And Risk

1. Are there regulated, sensitive, legal, financial, or medical details involved?
2. Are there message types that should never be automated?
3. Does the team need to preserve raw lead details or attachments?
4. Who can approve system access and message copy?
5. What would make this project fail internally?

## Fit Assessment

### Strong Fit

- One clear lead source can be prioritized.
- The prospect can define what gets missed or delayed.
- The owner wants visibility into lead status and next action.
- Follow-up timing is important and repeatable.
- The first version can avoid full CRM migration.

Recommended next stage: `proposal-drafted` after scope is confirmed.

### Needs Nurture

- The prospect has real pain but cannot identify one source, owner, or first win.
- The team is not ready to provide system access.
- The process is too broad for a phase-one build.

Recommended next stage: `qualification-in-progress` or nurture note in the lead record.

### Poor Fit

- The request is mostly paid ads, full custom software, or broad AI strategy.
- The prospect expects guaranteed revenue outcomes.
- The workflow requires high-risk automation without human review.
- The business cannot name an owner for the process.

Recommended next stage: `closed-lost` or nurture, depending on future potential.

## Scope Recommendation Template

Use this after discovery:

```text
Recommended phase-one scope:
- Primary lead source:
- Tracker destination:
- Required fields:
- Stage model:
- Owner/routing rule:
- Follow-up mechanism:
- Reporting view:
- Human review points:
- Exclusions:
- Risks or dependencies:
```

## Proposal Handoff Notes

If the prospect is qualified, create a client-specific proposal using:

- `agency-ops/proposals/lead-intake-follow-up-proposal-starter.md`
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`

Proposal should include:

- Current problem.
- Phase-one workflow.
- Included systems.
- What is not included.
- Required client inputs.
- Build phases.
- Testing and handoff.
- Risks and assumptions.
- Next decision.

## Lead Record Update

After discovery, update the lead record with:

- Current pipeline stage.
- Offer fit.
- Key pain.
- Primary source.
- Tools involved.
- Owner/contact.
- First-win definition.
- Proposal recommendation.
- Next action and due date.

## Current Reuse Path

- Use for any positive outreach reply.
- Use for any `/start` inquiry that fits lead intake or follow-up.
- Use before drafting a client-specific proposal.
- Use to keep the first project bounded and deliverable.
