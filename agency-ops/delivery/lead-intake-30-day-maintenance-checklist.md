# Lead Intake 30-Day Maintenance Checklist

Status: internal reusable delivery-readiness template
Last updated: 2026-06-14 18:02 CDT

## Purpose

Use this checklist to manage the first 30 days after a Lead Intake Command System / Follow-Up Engine handoff. It turns post-handoff care into a repeatable operating rhythm across usage checks, exception review, small corrections, proof boundaries, support routing, and phase-two opportunity capture.

This checklist is not a client-specific support agreement, managed-service contract, service-level agreement, final price quote, public proof approval, deployment record, paid-provider selection, auto-send approval, auto-write approval, or scope-expansion approval.

## When To Use This

Use this after a real or simulated Lead Intake engagement has:

- a defined source of intake,
- a tracker or record of truth,
- a routing or owner-assignment rule,
- a QA evidence record,
- a handoff and closeout packet,
- and a named review owner.

Use this before:

- promising ongoing maintenance,
- marking handoff as stable for client operations,
- asking for proof or case-study approval,
- recommending phase-two expansion,
- or treating a support request as included work.

## Guardrails

- Keep this record inside `agency-ops/`.
- Do not store credentials, secrets, raw customer exports, private customer messages, regulated data, or sensitive lead data.
- Use anonymized or aggregate examples unless the client approves named details.
- Do not change live behavior without a client-specific approval record.
- Do not enable auto-send, auto-reply, CRM writes, sheet writes, calendar writes, or repository writes from this checklist alone.
- Do not publish proof, testimonials, screenshots, metrics, or case-study claims from this checklist alone.
- Do not quote pricing or approve phase-two scope from this checklist alone.

## Maintenance Snapshot

- Client or simulated engagement:
- Business type:
- Workflow maintained:
- Handoff date:
- 30-day maintenance window:
- Client owner:
- Kelvar owner:
- Intake source:
- Tracker of record:
- Notification channel:
- Related QA evidence record:
- Related handoff packet:
- Related support-boundary guide:
- Related 14-30 day review record:
- Related phase-two routing log:

## Week 1 Stability Check

Goal: confirm the handoff is understood and the basic flow is not failing silently.

| Check | Status | Evidence Or Note | Owner | Follow-Up |
| --- | --- | --- | --- | --- |
| Client owner knows where new leads appear | not-started / pass / issue / blocked |  |  |  |
| Intake source still works as expected | not-started / pass / issue / blocked |  |  |  |
| Required fields are visible and understandable | not-started / pass / issue / blocked |  |  |  |
| Owner routing is understood | not-started / pass / issue / blocked |  |  |  |
| Follow-up due logic is understood | not-started / pass / issue / blocked |  |  |  |
| Manual override path is understood | not-started / pass / issue / blocked |  |  |  |
| No urgent support issue is open | not-started / pass / issue / blocked |  |  |  |

Week 1 disposition:

- Stable.
- Stable with small clarification.
- Support issue opened.
- Blocked by client input.
- Blocked by tool or deployment issue.

## Week 2 Usage Check

Goal: confirm the system is being used and that early confusion is captured before it becomes drift.

| Check | Status | Evidence Or Note | Owner | Follow-Up |
| --- | --- | --- | --- | --- |
| Tracker was reviewed by client owner | not-started / pass / issue / blocked |  |  |  |
| At least one lead or test record was reviewed | not-started / pass / issue / blocked |  |  |  |
| Lead statuses are being updated | not-started / pass / issue / blocked |  |  |  |
| Follow-up due items are being noticed | not-started / pass / issue / blocked |  |  |  |
| Exceptions are being logged | not-started / pass / issue / blocked |  |  |  |
| Handoff notes still match the workflow | not-started / pass / issue / blocked |  |  |  |

Week 2 disposition:

- Usage looks healthy.
- Training note needed.
- Minor correction needed.
- Exception review needed.
- Scope boundary review needed.

## Week 3 Exception And Support Check

Goal: classify problems as clarification, minor correction, exception review, new scope, or approval-gated change.

| Issue Or Request | Category | Impact | Recommended Route | Approval Needed |
| --- | --- | --- | --- | --- |
|  | included clarification / minor correction / exception review / new scope / approval-gated change |  |  |  |

Use `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md` for categorization.

Default routing:

- Included clarification: answer and update handoff notes if the confusion is likely to recur.
- Minor correction: log the correction and update the related QA or handoff record.
- Exception review: capture evidence, classify root cause, and assign an owner.
- New scope: route through discovery, scope menu, proposal-readiness scorecard, and proposal assembly.
- Approval-gated change: pause for explicit approval before acting.

## Week 4 Review And Closeout

Goal: decide whether the workflow is stable, needs support follow-up, is ready for a formal 14-30 day review, or should route an expansion idea.

| Closeout Check | Status | Evidence Or Note | Owner | Follow-Up |
| --- | --- | --- | --- | --- |
| Open support items reviewed | not-started / pass / issue / blocked |  |  |  |
| Known exceptions have disposition | not-started / pass / issue / blocked |  |  |  |
| Handoff packet remains accurate | not-started / pass / issue / blocked |  |  |  |
| QA evidence remains accurate | not-started / pass / issue / blocked |  |  |  |
| 14-30 day review is ready or scheduled | not-started / pass / issue / blocked |  |  |  |
| Proof eligibility was checked | not-started / pass / issue / blocked |  |  |  |
| Phase-two ideas were routed | not-started / pass / issue / blocked |  |  |  |
| Approval-gated items are clearly marked | not-started / pass / issue / blocked |  |  |  |

Closeout disposition:

- Stable; no immediate support needed.
- Stable; handoff notes need a small update.
- Support follow-up needed.
- 14-30 day review should proceed.
- Phase-two discovery should be proposed after approval.
- Hold; blocker must be resolved first.

## Maintenance Log

| Date | Signal | Category | Action Taken Or Recommended | Owner | Status |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

## Proof And Learning Capture

Use with `agency-ops/workflows/client-proof-and-case-study-capture-system.md`.

Capture only internal learning unless client approval exists.

| Learning Or Proof Signal | Internal Use | Public Use Approved? | Evidence Location | Next Step |
| --- | --- | --- | --- | --- |
|  | yes / no | yes / no / not requested |  |  |

Safe internal learning examples:

- Most confusing handoff field.
- Most useful tracker view.
- Most common missing intake detail.
- Most common owner-routing exception.
- Strongest candidate for phase-two automation.

## Phase-Two Routing

Use `agency-ops/delivery/lead-intake-phase-two-opportunity-routing-log.md` before recommending expansion.

Potential phase-two signals:

- More than one repeated exception.
- Client asks for another lead source.
- Owner routing needs more than one rule.
- Manual follow-up is still slipping.
- Reporting is requested by role, source, service type, or outcome.
- CRM or field-service tool sync becomes necessary.
- Client asks to publish results or proof.

Recommended route:

- Monitor only.
- Support clarification.
- Discovery needed.
- Proposal-readiness scoring needed.
- Proof-capture approval needed.
- Hold until blocker is resolved.

## Approval Boundary Checklist

Before any action leaves internal maintenance tracking, confirm:

- No mailbox draft is being created without approval.
- No outreach, reply, or follow-up is being sent without approval.
- No final price or public package pricing is being quoted without approval.
- No proposal is being sent without approval.
- No paid provider, CRM, form handler, or tool is being selected without approval.
- No deployment, DNS, environment variable, or production setting is being changed without approval.
- No public proof, screenshot, metric, testimonial, or case-study claim is being published without approval.
- No auto-send, auto-reply, auto-write, CRM write, sheet write, calendar write, or repository write behavior is being enabled without approval.

## Related Assets

- `agency-ops/delivery/lead-intake-tool-neutral-implementation-blueprint.md`
- `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md`
- `agency-ops/delivery/lead-intake-14-30-day-review-record-template.md`
- `agency-ops/delivery/lead-intake-phase-two-opportunity-routing-log.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`

## Done Criteria

The 30-day maintenance window is ready to close when:

- Week 1 through Week 4 checks have dispositions.
- Support items are categorized.
- Exceptions have owners or closeout notes.
- Handoff and QA records are updated if needed.
- Proof signals are internal-only unless separately approved.
- Phase-two opportunities are routed without being silently performed.
- Approval-gated actions remain clearly separated from maintenance work.
