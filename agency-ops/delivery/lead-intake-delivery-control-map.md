# Lead Intake Delivery Control Map

Status: internal delivery-readiness operating map
Last updated: 2026-06-14 23:02 CDT

## Purpose

Use this map to choose the right Lead Intake Command System delivery artifact at the right moment.

The delivery library now has many useful pieces: kickoff inputs, client-specific delivery planning, implementation architecture, QA evidence, handoff, support boundaries, support request records, maintenance, exception handling, post-delivery review, phase-two routing, and proof capture. This map turns those pieces into one use order so a future operator can move from interest to delivery without skipping gates or making accidental client commitments.

This is not a statement of work, final price quote, support agreement, vendor decision, credential request, deployment approval, public proof approval, auto-send approval, auto-write approval, production launch record, or client commitment.

## Default Use Order

| Step | Use This Artifact | Purpose | Exit Condition | Gate |
| ---: | --- | --- | --- | --- |
| 1 | `agency-ops/workflows/lead-intake-discovery-outline.md` | Learn the source, current process, owner, urgency, and desired outcome | Discovery notes identify source, tracker, owner, and phase-one boundary | No sending, scheduling, or proposal without approval |
| 2 | `agency-ops/delivery/lead-intake-kickoff-inputs-checklist.md` | Confirm implementation inputs before planning | Business inputs and sample-record needs are clear enough to scope | No credentials or sensitive data without approval |
| 3 | `agency-ops/delivery/lead-intake-client-specific-delivery-plan-record-template.md` | Convert discovery and kickoff inputs into one scoped delivery plan | Build phases, field map, QA path, handoff, support, maintenance, and proof boundaries are defined | Not a signed SOW or quote |
| 4 | `agency-ops/delivery/lead-intake-tool-neutral-implementation-blueprint.md` | Pick a practical implementation pattern without locking into a paid tool | Source, tracker, routing, review, reporting, and manual fallback are mapped | No paid provider, production write, or auto-send approval implied |
| 5 | `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md` | Record test evidence before handoff | Required source, field, owner, status, follow-up, exception, and rollback checks are captured | No launch or live status change without evidence and approval |
| 6 | `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md` | Package operating instructions and closeout decisions | Client owner knows how to use, pause, review, and escalate | No support commitment beyond approved scope |
| 7 | `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md` | Set the support categories and maintenance boundaries | Support rules, excluded work, and approval gates are clear | Not a support agreement or managed-service promise |
| 8 | `agency-ops/delivery/lead-intake-support-request-record-template.md` | Capture and classify a specific post-handoff question, issue, exception, or expansion request | Request category, evidence, owner, next action, and approval need are recorded | No correction, scope expansion, proof, or live-behavior change without the right gate |
| 9 | `agency-ops/delivery/lead-intake-30-day-maintenance-checklist.md` | Keep the workflow stable after handoff | Weekly checks cover usage, exceptions, owner review, and proof readiness | No public proof or phase-two proposal without approval |
| 10 | `agency-ops/delivery/lead-intake-exception-response-playbook.md` | Classify and respond to delivery exceptions | Severity, containment, owner, evidence, and next action are recorded | Do not hide high-risk failures or make client-facing claims without review |
| 11 | `agency-ops/delivery/lead-intake-14-30-day-review-record-template.md` | Review adoption and early outcomes | Usage, blockers, proof eligibility, and phase-two signals are summarized | No testimonials, metrics, or case-study claims without approval |
| 12 | `agency-ops/delivery/lead-intake-phase-two-opportunity-routing-log.md` | Route expansion ideas after phase one | Expansion signal is classified as defer, nurture, proposal path, or closeout | No scope expansion, quote, or proposal send without approval |
| 13 | `agency-ops/workflows/client-proof-and-case-study-capture-system.md` | Decide whether delivery evidence can become proof | Proof level and permission status are clear | Public proof requires explicit approval for exact claim/assets |

## Fast Path By Situation

| Situation | Start Here | Then Use | Stop Before |
| --- | --- | --- | --- |
| Positive outreach reply asks what this would look like | Discovery outline | Kickoff inputs checklist, proposal decision scorecard | Scheduling, quote, or proposal send |
| Prospect asks for price before scope | Pricing request response path | Discovery outline, proposal decision scorecard | Final price quote |
| Simulated delivery demonstration | Client-specific delivery plan record template | Tool-neutral blueprint, QA evidence template, handoff packet | Claiming a real client result |
| Accepted small phase-one build | Kickoff inputs checklist | Delivery plan, blueprint, QA evidence, handoff packet | Credentials, production writes, or launch without approval |
| Client reports a post-handoff question or issue | Support request record template | Support boundary guide, exception playbook, maintenance checklist | Unapproved support promise, correction, or scope expansion |
| Client reports a workflow failure after handoff | Exception response playbook | Support request record, QA evidence record, support boundary guide | Hiding high-risk failures or making client-facing claims without review |
| Client sees new use cases after phase one | Phase-two routing log | Support request record, 14-30 day review, proposal assembly kit | Proposal send or pricing without approval |
| Delivery evidence looks useful for marketing | Proof capture system | 14-30 day review, closeout packet | Public proof without exact approval |

## Minimum Evidence Before Calling Delivery Ready

A Lead Intake engagement should not be treated as delivery-ready until these are true:

- A source is defined.
- A tracker of record is defined.
- A workflow owner is defined.
- Required fields and fallbacks are defined.
- Phase-one scope and exclusions are written down.
- Manual fallback and pause path are written down.
- QA evidence record exists or is scheduled as a required pre-handoff step.
- Handoff instructions and support boundary are planned.
- Support request capture path is available for post-handoff questions, issues, exceptions, and expansion signals.
- Proof and phase-two routing are explicitly internal-only until later approval.

## Approval Gates To Preserve

Do not use any delivery artifact as approval for:

- collecting or storing credentials, secrets, exports, or sensitive client/customer data;
- selecting a paid provider, CRM, form tool, automation platform, or vendor;
- enabling mailbox, CRM, sheet, calendar, repository, or production auto-write behavior;
- enabling external auto-send or auto-reply behavior;
- changing deployment settings or launch status;
- quoting final pricing or sending a proposal;
- making a support commitment;
- publishing screenshots, metrics, testimonials, case studies, or proof claims;
- touching any repository outside `KelvarLLC/Business1`.

## Operator Rule

When in doubt, choose the earliest artifact in the use order that still answers the current business question. Earlier artifacts clarify scope; later artifacts should only be used when the prior evidence exists or the work is explicitly labeled simulation-only.
