# Agency Roadmap

## Purpose

This roadmap turns the standing master instruction set into concrete repo-scoped workstreams for the automation agency. It should guide autonomous scheduled runs, manual follow-up, and any future specialist agents working inside `KelvarLLC/Business1`.

## Current Baseline

- Assigned repository: `KelvarLLC/Business1`
- Business workspace: `agency-ops/`
- Active operating guide: `agency-ops/ops/agency-operating-system.md`
- Active checklists: `agency-ops/ops/qualification-proposal-delivery-checklists.md`
- Current offer library:
  - `agency-ops/offers/lead-intake-follow-up-automation.md`
  - `agency-ops/offers/client-onboarding-handoff-automation.md`
  - `agency-ops/offers/appointment-reminder-automation.md`
  - `agency-ops/offers/lightweight-reporting-dashboard-automation.md`

## Roadmap Stages

### Stage 1: Foundation And Packaging

Goal: make the agency easy to understand, sell, and operate from the repository.

Status: in progress

Next actions:

- Maintain a focused offer library with narrow, sellable automation services.
- Create one example lead record when a real or sample prospect is available.
- Create reusable proposal and delivery starter artifacts for the strongest current offer.
- Keep operating docs synchronized with new offers, templates, and delivery patterns.

### Stage 2: Pipeline Activation

Goal: turn prospects into qualified opportunities and proposal-ready work.

Status: pending first live lead

Next actions:

- Add lead records under `agency-ops/leads/` using the lead record template.
- Classify each opportunity into the clearest pipeline stage.
- Draft discovery questions and follow-up copy for qualified or nurture leads.
- Move proposal-ready leads into `agency-ops/proposals/` with bounded scopes and client inputs.

### Stage 3: Delivery System

Goal: make accepted work repeatable and easier to hand off.

Status: pending won or implementation-ready engagement

Next actions:

- Create delivery plans under `agency-ops/delivery/` for active engagements.
- Build workflow specs under `agency-ops/workflows/` for repeated automation patterns.
- Document trigger, inputs, outputs, failure paths, testing data, owner, and maintenance rules.
- Capture closeout notes and expansion opportunities after each delivery.

### Stage 4: Public Presence And Deployment

Goal: support lead generation with a simple, maintainable public web presence when approved.

Status: optional next build

Next actions:

- Create a Vercel-friendly website skeleton under `agency-ops/website/` if the user wants a public-facing site.
- Use the current offer library as the primary service content.
- Document deployment assumptions, environment variables, and rollback steps.
- Keep deployment work contained to this repository and its connected deployment services.

### Stage 5: QA, Security, And Optimization

Goal: keep business artifacts, workflows, and code safe, clear, and maintainable.

Status: ongoing

Next actions:

- Review new repo artifacts for scope creep, unclear promises, missing assumptions, and unsafe automation behavior.
- Add simple validation checks or review checklists when workflows become code-backed.
- Improve duplicated docs or templates only when the change makes future execution easier.
- Maintain a rolling opportunities list for concrete upgrades.

### Stage 6: Multi-Agent Coordination

Goal: keep parallel agent work aligned and strictly repo-contained.

Status: ready when additional agents join

Next actions:

- Use this roadmap as the coordination baseline.
- Assign each agent a clear repo-contained workstream.
- Track blockers, duplicated effort, unresolved handoffs, and open approvals in operating notes.
- Preserve a single source of truth for pipeline status and delivery state.

## Current Priority Queue

1. Create a proposal and delivery starter set for the lead intake/follow-up automation offer.
2. Add a public website skeleton only if a public web presence becomes the next chosen priority.
3. Add the first real lead record when a prospect is identified.
4. Expand workflow specs for repeatable automations after a qualified engagement exists.

## Operating Notes

- Keep all durable work inside `agency-ops/`.
- Prefer practical assets that support revenue, delivery, or continuity.
- Do not fabricate leads, client commitments, deployment status, or outreach results.
- Ask for approval before sending outreach, changing deployment settings, or making high-risk operational changes.
