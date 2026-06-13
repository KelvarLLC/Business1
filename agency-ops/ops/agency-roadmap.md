# Agency Roadmap

## Purpose

This roadmap turns the standing master instruction set and the user's AI ecosystem ambition into concrete repo-scoped workstreams for the automation agency. It guides autonomous scheduled runs, manual follow-up, website work, pipeline activation, and future specialist agents working inside `KelvarLLC/Business1`.

## Current Baseline

- Assigned repository: `KelvarLLC/Business1`
- Business workspace: `agency-ops/`
- Active operating guide: `agency-ops/ops/agency-operating-system.md`
- Active 30-day launch plan: `agency-ops/ops/30-day-launch-command-plan.md`
- Active ecosystem strategy: `agency-ops/ops/ai-galactic-empire-ecosystem-strategy.md`
- Active website foundation: `agency-ops/website/`
- Active website brief: `agency-ops/website/content/website-brief.md`
- Active website deployment checklist: `agency-ops/ops/website-deployment-readiness.md`
- Active website intake workflow: `agency-ops/workflows/website-lead-intake-workflow.md`
- Active intake upgrade plan: `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- Active outbound workflow: `agency-ops/workflows/lead-intake-outbound-prospecting-kit.md`
- Active Lead Intake workflow spec: `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- Active Lead Intake discovery outline: `agency-ops/workflows/lead-intake-discovery-outline.md`
- Active Lead Intake reply response kit: `agency-ops/workflows/lead-intake-reply-response-kit.md`
- Active outreach review packet: `agency-ops/leads/2026-06-13-outreach-review-and-send-plan.md`
- Active outreach execution control sheet: `agency-ops/workflows/outreach-execution-control-sheet.md`
- Active prospect list: `agency-ops/leads/2026-06-13-dallas-home-services-prospect-list.md`

## Strategic North Star

Internal ambition: build an Armada of AI Galactic Empire ecosystems.

Operational translation: build a modular AI automation ecosystem where the website, offer library, lead pipeline, proposal assets, delivery plans, workflow specs, and operating docs reinforce each other instead of existing as scattered one-off materials.

Public translation: Kelvar builds practical AI automation ecosystems for service businesses that need faster follow-up, cleaner handoffs, fewer missed leads, and less manual admin work.

## Current Offer Library

- `agency-ops/offers/lead-intake-follow-up-automation.md`
- `agency-ops/offers/client-onboarding-handoff-automation.md`
- `agency-ops/offers/appointment-reminder-automation.md`
- `agency-ops/offers/lightweight-reporting-dashboard-automation.md`

## Current Lead And Outreach Assets

Dallas lead records:

- `agency-ops/leads/2026-06-13-dfw-hvac.md`
- `agency-ops/leads/2026-06-13-cool-tech.md`
- `agency-ops/leads/2026-06-13-lone-star-roof-systems.md`
- `agency-ops/leads/2026-06-13-southern-botanical.md`
- `agency-ops/leads/2026-06-13-prestonwood-landscape-services.md`
- `agency-ops/leads/2026-06-13-dane-roofing.md`

Draft-only outreach assets:

- `agency-ops/leads/h-med-spa-outreach-draft.md`
- `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts.md`
- `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts-batch-2.md`

Execution control:

- `agency-ops/workflows/outreach-execution-control-sheet.md`
- `agency-ops/ops/30-day-launch-command-plan.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`

No outreach has been sent. Sending still requires explicit approval.

## Roadmap Stages

### Stage 1: Foundation And Packaging

Goal: make the agency easy to understand, sell, and operate from the repository.

Status: core offer packaging complete; maintain and improve as evidence arrives.

Completed:

- Created a focused offer library with four narrow automation services.
- Created reusable proposal and delivery starter assets for all four current offers.
- Captured the AI ecosystem strategy and synchronized it with the website and offer library.
- Created reusable operating checklists for qualification, proposal readiness, delivery planning, and closeout.
- Created `agency-ops/ops/30-day-launch-command-plan.md` to tie website launch, outreach approval, pipeline handling, proposal readiness, and delivery packaging into one 30-day operating cadence.

Next actions:

- Use the 30-day launch command plan as the top-level execution cadence until the first qualified opportunity or won project changes priorities.
- Keep operating docs synchronized with new offers, templates, and delivery patterns.
- Update offer language based on actual lead objections, discovery calls, and delivery evidence.

### Stage 2: Website Flagship

Goal: turn the business website into the public command center for the automation ecosystem.

Status: website foundation and structured intake console exist; deployment/build verification and permanent hosted capture remain next.

Completed:

- Created a Vercel-friendly Next.js website foundation under `agency-ops/website/`.
- Added home, services, lead-intake, about, contact, and start pages.
- Added a content brief for positioning, visual direction, CTA strategy, and next website improvements.
- Connected the public message to the current service packages.
- Routed primary website CTAs to `/start` and the Lead Intake service CTA to `/lead-intake`.
- Upgraded `/start` from a plain email CTA into a structured intake console that captures contact, workflow, tools, manual steps, missed items, first win, urgency, and consent before opening a formatted email.
- Documented the website lead intake workflow in `agency-ops/workflows/website-lead-intake-workflow.md`.
- Added `agency-ops/ops/website-deployment-readiness.md` to define Vercel setup, build verification, content QA, lead-capture QA, launch checks, and known blockers.
- Added `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md` to define the staged path from structured mailto to hosted form, sheet, or CRM capture.

Next actions:

- Run `npm install` and `npm run build` in an environment with npm registry access.
- Deploy from `agency-ops/website/` as the Vercel project root.
- Replace the structured mailto intake with a hosted form-to-email endpoint when the first permanent capture destination is chosen.
- Add proof, case study, or demo evidence once a real client result or internal demo exists.

### Stage 3: Pipeline Activation

Goal: turn prospects into qualified opportunities and proposal-ready work.

Status: six Dallas lead records, two outreach draft batches, and response handling assets exist; pending user approval before any sending.

Completed:

- Created `agency-ops/workflows/lead-intake-outbound-prospecting-kit.md` with target niches, qualification filters, prospect list structure, discovery trigger, outreach drafts, and lead-record creation rules.
- Created `agency-ops/workflows/website-lead-intake-workflow.md` to translate website inquiries into structured lead qualification and next actions.
- Created `agency-ops/leads/2026-06-13-dallas-home-services-prospect-list.md` with Dallas/Fort Worth home-service candidates, intake signals, likely pain, fit rating, and recommended next action.
- Created individual lead records for DFW HVAC, Cool Tech, Lone-Star Roof Systems, Southern Botanical, Prestonwood Landscape Services, and Dane Roofing.
- Created two draft-only outreach files for the six Dallas leads.
- Created `agency-ops/leads/2026-06-13-outreach-review-and-send-plan.md` recommending a controlled first draft batch.
- Created `agency-ops/workflows/outreach-execution-control-sheet.md` to define draft creation, send approval, reply handling, and follow-up rules.
- Created `agency-ops/workflows/lead-intake-reply-response-kit.md` to classify prospect replies and draft safe next-step responses.

Next actions:

- Review and approve, revise, or reject the six Dallas outreach drafts before any sending.
- Recommended first approval: create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems.
- Use `agency-ops/workflows/outreach-execution-control-sheet.md` as the operating checklist for draft creation, send approval, reply handling, and lead-record updates.
- Use `agency-ops/workflows/lead-intake-reply-response-kit.md` after any positive, negative, pricing, CRM/tool, referral, or sensitive-data reply.
- Use `agency-ops/ops/30-day-launch-command-plan.md` as the launch cadence for weekly priorities, daily checks, and decision gates.
- Use `agency-ops/workflows/lead-intake-discovery-outline.md` for any positive reply or website inquiry that fits the lead intake offer.
- Use `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md` to keep proposals and delivery scopes bounded.
- Confirm sender mailbox and outreach batch size if sending is approved.
- Track replies and move leads to `discovery-needed`, `qualified`, `nurture`, or `closed-lost` as evidence arrives.
- Add more lead records from the Dallas prospect list only after the first batch is reviewed.

### Stage 4: Delivery Factory

Goal: make accepted work repeatable and easier to hand off.

Status: first reusable Lead Intake implementation spec exists; pending won or implementation-ready engagement.

Completed:

- Created `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md` as the reusable implementation pattern for the strongest current offer.
- Created `agency-ops/workflows/lead-intake-discovery-outline.md` as the ready-to-use discovery structure for positive replies and website inquiries.
- Created `agency-ops/workflows/lead-intake-reply-response-kit.md` as the safe response bridge from reply to discovery or closeout.

Next actions:

- Create client-specific delivery plans under `agency-ops/delivery/` for active engagements.
- Use the Lead Intake workflow spec with the lead intake delivery starter when the first project is won.
- Build additional workflow specs only after a repeated delivery or sales pattern is clear.
- Document trigger, inputs, outputs, failure paths, testing data, owner, and maintenance rules.
- Capture closeout notes and expansion opportunities after each delivery.

### Stage 5: Intelligence And Compounding

Goal: turn repeated work into a smarter agency operating system.

Status: emerging.

Next actions:

- Track common client pains, requested automations, and delivery blockers.
- Identify which offers convert, deliver cleanly, and create expansion opportunities.
- Build reusable scripts, templates, and internal workflows only when patterns repeat.
- Update the website and offer library based on actual pipeline evidence.

### Stage 6: QA, Security, And Optimization

Goal: keep business artifacts, workflows, and code safe, clear, and maintainable.

Status: ongoing.

Next actions:

- Review new repo artifacts for scope creep, unclear promises, missing assumptions, and unsafe automation behavior.
- Add simple validation checks or review checklists when workflows become code-backed.
- Improve duplicated docs or templates only when the change makes future execution easier.
- Maintain a rolling opportunities list for concrete upgrades.

### Stage 7: Multi-Agent Coordination

Goal: keep parallel agent work aligned and strictly repo-contained.

Status: ready when additional agents join.

Next actions:

- Use this roadmap and the 30-day launch command plan as the coordination baseline.
- Assign each agent a clear repo-contained workstream.
- Track blockers, duplicated effort, unresolved handoffs, and open approvals in operating notes.
- Preserve a single source of truth for pipeline status and delivery state.

## Current Priority Queue

1. Use `agency-ops/ops/30-day-launch-command-plan.md` as the top-level launch cadence.
2. Choose the first outreach path using `agency-ops/workflows/outreach-execution-control-sheet.md`.
3. Recommended first approval: create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems.
4. Review the six Dallas outreach drafts and approve, revise, or reject before sending.
5. Use the Lead Intake reply response kit, discovery outline, and workflow spec for any positive reply or inbound inquiry.
6. Confirm sender mailbox and outreach batch size if outreach is approved.
7. Run the website build check in an environment with npm registry access.
8. Deploy the website from `agency-ops/website/` with that folder as the Vercel project root.
9. Replace the structured mailto intake with a hosted form-to-email endpoint once a capture vendor or handler is chosen.
10. Add proof, case study, or internal demo evidence to strengthen the public site.

## Recently Completed

- Added `agency-ops/workflows/lead-intake-reply-response-kit.md` as the response handling layer for interested, call-request, pricing, CRM/tool, not-interested, referral, and sensitive-data replies.
- Added `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md` as the reusable implementation pattern for capture, normalization, qualification, routing, follow-up, reporting, QA, and demo explanation.
- Added `agency-ops/workflows/lead-intake-discovery-outline.md` as the qualification and discovery structure for positive replies and website inquiries.
- Added `agency-ops/ops/30-day-launch-command-plan.md` to define the 30-day launch thesis, success targets, execution priorities, weekly cadence, daily operating checklist, decision gates, and metrics.
- Upgraded `agency-ops/website/app/start/page.tsx` into a structured intake console that formats review requests before opening email.
- Updated `agency-ops/website/app/armada.css` with intake-console styling, workflow choices, responsive form layout, and submission status styles.
- Updated the website brief, website lead intake workflow, deployment readiness checklist, and inbound capture upgrade plan to reflect the structured mailto console.
- Added `agency-ops/workflows/outreach-execution-control-sheet.md` as the first-batch control sheet for draft creation, send approval, reply handling, follow-up timing, and lead-record updates.
- Added `agency-ops/ops/website-deployment-readiness.md` as the deployment, build verification, Vercel setup, QA, and launch checklist.
- Added `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md` as the staged plan for moving from prefilled email to form, sheet, or CRM capture.
- Created `agency-ops/leads/2026-06-13-outreach-review-and-send-plan.md` with approval choices and the recommended first controlled outreach batch.
- Created individual lead records for Southern Botanical, Prestonwood Landscape Services, and Dane Roofing.
- Created `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts-batch-2.md` with draft outreach for those three leads.
- Created individual lead records for DFW HVAC, Cool Tech, and Lone-Star Roof Systems.
- Created `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts.md` with draft outreach for the first three leads.
- Created `agency-ops/leads/2026-06-13-dallas-home-services-prospect-list.md` as the first real prospect list for Dallas/Fort Worth home-service businesses.
- Added `agency-ops/website/app/lead-intake/page.tsx` as the first offer-specific landing page.

## Operating Notes

- Keep all durable work inside `agency-ops/`.
- Prefer practical assets that support revenue, delivery, or continuity.
- Use the empire language internally as a strategic metaphor; keep public-facing copy professional and outcome-focused unless the user explicitly wants a more thematic brand.
- Do not fabricate leads, client commitments, deployment status, or outreach results.
- Ask for approval before sending outreach, changing deployment settings, or making high-risk operational changes.
