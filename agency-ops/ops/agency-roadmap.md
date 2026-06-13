# Agency Roadmap

## Purpose

This roadmap turns the standing master instruction set and the user's AI ecosystem ambition into concrete repo-scoped workstreams for the automation agency. It should guide autonomous scheduled runs, manual follow-up, website work, and any future specialist agents working inside `KelvarLLC/Business1`.

## Current Baseline

- Assigned repository: `KelvarLLC/Business1`
- Business workspace: `agency-ops/`
- Active operating guide: `agency-ops/ops/agency-operating-system.md`
- Active ecosystem strategy: `agency-ops/ops/ai-galactic-empire-ecosystem-strategy.md`
- Active website foundation: `agency-ops/website/`
- Active website brief: `agency-ops/website/content/website-brief.md`
- Active checklists: `agency-ops/ops/qualification-proposal-delivery-checklists.md`
- Current offer library:
  - `agency-ops/offers/lead-intake-follow-up-automation.md`
  - `agency-ops/offers/client-onboarding-handoff-automation.md`
  - `agency-ops/offers/appointment-reminder-automation.md`
  - `agency-ops/offers/lightweight-reporting-dashboard-automation.md`
- Current starter assets:
  - `agency-ops/proposals/lead-intake-follow-up-proposal-starter.md`
  - `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`
  - `agency-ops/proposals/client-onboarding-handoff-proposal-starter.md`
  - `agency-ops/delivery/client-onboarding-handoff-delivery-plan-starter.md`

## Strategic North Star

Internal ambition: build an Armada of AI Galactic Empire ecosystems.

Operational translation: build a modular AI automation ecosystem where the website, offer library, lead pipeline, proposal assets, delivery plans, workflow specs, and operating docs reinforce each other instead of existing as scattered one-off materials.

Public translation: Kelvar builds practical AI automation ecosystems for service businesses that need faster follow-up, cleaner handoffs, and less manual admin work.

## Roadmap Stages

### Stage 1: Foundation And Packaging

Goal: make the agency easy to understand, sell, and operate from the repository.

Status: in progress

Next actions:

- Maintain a focused offer library with narrow, sellable automation services.
- Keep the AI ecosystem strategy synchronized with the offer library and website direction.
- Create one example lead record when a real or sample prospect is available.
- Create reusable proposal and delivery starter artifacts for the remaining strong offers.
- Keep operating docs synchronized with new offers, templates, and delivery patterns.

### Stage 2: Website Flagship

Goal: turn the business website into the public command center for the automation ecosystem.

Status: foundation built; deployment and conversion plumbing next

Completed:

- Created a Vercel-friendly Next.js website foundation under `agency-ops/website/`.
- Added home, services, about, and contact pages.
- Added a content brief for positioning, visual direction, CTA strategy, and next website improvements.
- Connected the public message to the four current service packages.

Next actions:

- Run `npm install` and `npm run build` in an environment with npm registry access.
- Deploy from `agency-ops/website/` as the Vercel project root.
- Replace the email-only CTA with the chosen scheduling or lead capture path.
- Add proof, case study, or demo evidence once a real client result or internal demo exists.
- Create an offer-specific landing page for the strongest converting package.

### Stage 3: Pipeline Activation

Goal: turn prospects into qualified opportunities and proposal-ready work.

Status: pending first live lead

Next actions:

- Add lead records under `agency-ops/leads/` using the lead record template.
- Classify each opportunity into the clearest pipeline stage.
- Draft discovery questions and follow-up copy for qualified or nurture leads.
- Move proposal-ready leads into `agency-ops/proposals/` with bounded scopes and client inputs.

### Stage 4: Delivery Factory

Goal: make accepted work repeatable and easier to hand off.

Status: pending won or implementation-ready engagement

Next actions:

- Create delivery plans under `agency-ops/delivery/` for active engagements.
- Build workflow specs under `agency-ops/workflows/` for repeated automation patterns.
- Document trigger, inputs, outputs, failure paths, testing data, owner, and maintenance rules.
- Capture closeout notes and expansion opportunities after each delivery.

### Stage 5: Intelligence And Compounding

Goal: turn repeated work into a smarter agency operating system.

Status: emerging

Next actions:

- Track common client pains, requested automations, and delivery blockers.
- Identify which offers convert, deliver cleanly, and create expansion opportunities.
- Build reusable scripts, templates, and internal workflows only when patterns repeat.
- Update the website and offer library based on actual pipeline evidence.

### Stage 6: QA, Security, And Optimization

Goal: keep business artifacts, workflows, and code safe, clear, and maintainable.

Status: ongoing

Next actions:

- Review new repo artifacts for scope creep, unclear promises, missing assumptions, and unsafe automation behavior.
- Add simple validation checks or review checklists when workflows become code-backed.
- Improve duplicated docs or templates only when the change makes future execution easier.
- Maintain a rolling opportunities list for concrete upgrades.

### Stage 7: Multi-Agent Coordination

Goal: keep parallel agent work aligned and strictly repo-contained.

Status: ready when additional agents join

Next actions:

- Use this roadmap as the coordination baseline.
- Assign each agent a clear repo-contained workstream.
- Track blockers, duplicated effort, unresolved handoffs, and open approvals in operating notes.
- Preserve a single source of truth for pipeline status and delivery state.

## Current Priority Queue

1. Deploy the website from `agency-ops/website/` once npm build access and Vercel setup are available.
2. Replace the email-only contact CTA with the chosen scheduling or lead capture workflow.
3. Create proposal and delivery starter sets for the appointment reminder automation offer.
4. Create proposal and delivery starter sets for the lightweight reporting dashboard automation offer.
5. Add the first real lead record when a prospect is identified.
6. Expand workflow specs for repeatable lead intake and follow-up automation patterns.

## Recently Completed

- Built the first Vercel-friendly website foundation under `agency-ops/website/`.
- Added the website content brief in `agency-ops/website/content/website-brief.md`.
- Captured the AI Galactic Empire ecosystem strategy in `agency-ops/ops/ai-galactic-empire-ecosystem-strategy.md`.
- Added the original website positioning brief in `agency-ops/website/README.md`.
- Created the agency roadmap.
- Created proposal and delivery starter files for the lead intake/follow-up automation offer.
- Created proposal and delivery starter files for the client onboarding handoff automation offer.

## Operating Notes

- Keep all durable work inside `agency-ops/`.
- Prefer practical assets that support revenue, delivery, or continuity.
- Use the empire language internally as a strategic metaphor; keep public-facing copy professional and outcome-focused unless the user explicitly wants a more thematic brand.
- Do not fabricate leads, client commitments, deployment status, or outreach results.
- Ask for approval before sending outreach, changing deployment settings, or making high-risk operational changes.
