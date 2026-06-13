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
- Active website intake workflow: `agency-ops/workflows/website-lead-intake-workflow.md`
- Active outbound workflow: `agency-ops/workflows/lead-intake-outbound-prospecting-kit.md`
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
  - `agency-ops/proposals/appointment-reminder-proposal-starter.md`
  - `agency-ops/delivery/appointment-reminder-delivery-plan-starter.md`
  - `agency-ops/proposals/lightweight-reporting-dashboard-proposal-starter.md`
  - `agency-ops/delivery/lightweight-reporting-dashboard-delivery-plan-starter.md`

## Strategic North Star

Internal ambition: build an Armada of AI Galactic Empire ecosystems.

Operational translation: build a modular AI automation ecosystem where the website, offer library, lead pipeline, proposal assets, delivery plans, workflow specs, and operating docs reinforce each other instead of existing as scattered one-off materials.

Public translation: Kelvar builds practical AI automation ecosystems for service businesses that need faster follow-up, cleaner handoffs, and less manual admin work.

## Roadmap Stages

### Stage 1: Foundation And Packaging

Goal: make the agency easy to understand, sell, and operate from the repository.

Status: core offer packaging complete; maintain and improve as evidence arrives

Completed:

- Created a focused offer library with four narrow automation services.
- Created reusable proposal and delivery starter assets for all four current offers.
- Captured the AI ecosystem strategy and synchronized it with the website and offer library.
- Created reusable operating checklists for qualification, proposal readiness, delivery planning, and closeout.

Next actions:

- Create one example lead record when a real or sample prospect is available.
- Keep operating docs synchronized with new offers, templates, and delivery patterns.
- Update offer language based on actual lead objections, discovery calls, and delivery evidence.

### Stage 2: Website Flagship

Goal: turn the business website into the public command center for the automation ecosystem.

Status: intake path added; deployment and permanent capture plumbing next

Completed:

- Created a Vercel-friendly Next.js website foundation under `agency-ops/website/`.
- Added home, services, about, contact, and start pages.
- Added a content brief for positioning, visual direction, CTA strategy, and next website improvements.
- Connected the public message to the four current service packages.
- Routed primary website CTAs to `/start`.
- Documented the website lead intake workflow in `agency-ops/workflows/website-lead-intake-workflow.md`.

Next actions:

- Run `npm install` and `npm run build` in an environment with npm registry access.
- Deploy from `agency-ops/website/` as the Vercel project root.
- Replace the prefilled email CTA with the chosen scheduling, form, or CRM capture path.
- Add proof, case study, or demo evidence once a real client result or internal demo exists.
- Create an offer-specific landing page for the strongest converting package.

### Stage 3: Pipeline Activation

Goal: turn prospects into qualified opportunities and proposal-ready work.

Status: inbound intake path and outbound prospecting workflow created; pending first live lead

Completed:

- Created `agency-ops/workflows/lead-intake-outbound-prospecting-kit.md` with target niches, qualification filters, prospect list structure, discovery trigger, outreach drafts, and lead-record creation rules.
- Created `agency-ops/workflows/website-lead-intake-workflow.md` to translate website inquiries into structured lead qualification and next actions.

Next actions:

- Use the outbound prospecting kit to identify a real first prospect list.
- Add lead records under `agency-ops/leads/` using the lead record template only for real or explicitly sample prospects.
- Classify each opportunity into the clearest pipeline stage.
- Draft discovery questions and follow-up copy for qualified or nurture leads.
- Move proposal-ready leads into `agency-ops/proposals/` with bounded scopes and client inputs.

### Stage 4: Delivery Factory

Goal: make accepted work repeatable and easier to hand off.

Status: starter delivery plans created; pending won or implementation-ready engagement

Next actions:

- Create client-specific delivery plans under `agency-ops/delivery/` for active engagements.
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
2. Replace the prefilled email intake with the chosen scheduling, form, or CRM capture workflow.
3. Build the first real prospect list from the lead intake outbound prospecting kit.
4. Add the first real lead record when a prospect is identified.
5. Add an offer-specific landing page for the strongest converting package.
6. Expand workflow specs for repeatable lead intake and follow-up automation patterns.

## Recently Completed

- Added `agency-ops/website/app/start/page.tsx` as the guided website intake path.
- Routed primary website CTAs to `/start` from the header, homepage, services page, contact page, and footer.
- Created `agency-ops/workflows/website-lead-intake-workflow.md` as the inbound website lead qualification workflow.
- Updated `agency-ops/website/content/website-brief.md` with the new intake route and capture strategy.
- Created `agency-ops/workflows/lead-intake-outbound-prospecting-kit.md` as the first reusable outbound workflow for the lead intake and follow-up automation offer.
- Created proposal and delivery starter files for the appointment reminder automation offer.
- Created proposal and delivery starter files for the lightweight reporting dashboard automation offer.
- Built the first Vercel-friendly website foundation under `agency-ops/website/`.
- Captured the AI Galactic Empire ecosystem strategy in `agency-ops/ops/ai-galactic-empire-ecosystem-strategy.md`.
- Created proposal and delivery starter files for the lead intake/follow-up automation offer.
- Created proposal and delivery starter files for the client onboarding handoff automation offer.

## Operating Notes

- Keep all durable work inside `agency-ops/`.
- Prefer practical assets that support revenue, delivery, or continuity.
- Use the empire language internally as a strategic metaphor; keep public-facing copy professional and outcome-focused unless the user explicitly wants a more thematic brand.
- Do not fabricate leads, client commitments, deployment status, or outreach results.
- Ask for approval before sending outreach, changing deployment settings, or making high-risk operational changes.
