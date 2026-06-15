# Lead Intake Support Request Record Template

Status: internal reusable delivery-readiness template
Last updated: 2026-06-14 23:02 CDT

## Purpose

Use this record to capture, classify, and route a Lead Intake support request after handoff without accidentally expanding scope, making support promises, publishing proof, changing live behavior, or enabling approval-gated automation.

This template is not a client-specific support agreement, service-level agreement, quote, paid-provider decision, credential request, production change approval, public proof approval, auto-send approval, auto-write approval, or client commitment.

## When To Use This

Use this template when a real or simulated Lead Intake engagement has a question, issue, exception, clarification request, maintenance signal, or phase-two idea after QA or handoff.

Use it before:

- answering a post-handoff workflow question,
- correcting a delivered label or note,
- investigating an intake/routing issue,
- deciding whether something is included support or new scope,
- proposing phase-two work,
- requesting proof permission,
- or changing any live workflow behavior.

## Request Header

- Client or simulated engagement:
- Request title:
- Request date:
- Request source:
- Request owner:
- Internal operator:
- Related delivery plan:
- Related implementation blueprint:
- Related QA evidence record:
- Related handoff packet:
- Related maintenance checklist:
- Related 14-30 day review record:
- Current lifecycle stage: handoff / maintenance / exception review / post-delivery review / phase-two routing / closeout

## Request Summary

- What was reported or requested:
- Requested outcome:
- Business impact if unresolved:
- Affected lead source:
- Affected tracker or record location:
- Affected owner or team:
- Systems involved:
- Example record or scenario available: yes / no / not needed
- Sensitive data involved: yes / no / unknown
- Live behavior affected: yes / no / unknown

## Boundary Check

| Question | Answer | Notes |
| --- | --- | --- |
| Does this fit the delivered phase-one workflow? | yes / no / unclear |  |
| Does this require a new lead source, field, owner, rule, or dashboard? | yes / no / unclear |  |
| Does this require credentials, secrets, exports, or sensitive customer data? | yes / no / unclear |  |
| Does this require a paid provider, CRM, form handler, mailbox, calendar, or deployment change? | yes / no / unclear |  |
| Does this enable auto-send, auto-reply, CRM writes, sheet writes, calendar writes, or other live writes? | yes / no / unclear |  |
| Does this affect public proof, screenshots, testimonials, metrics, or case-study claims? | yes / no / unclear |  |
| Does this change pricing, proposal scope, or support commitments? | yes / no / unclear |  |

## Classification

Choose one initial category.

| Category | Use When | Default Path |
| --- | --- | --- |
| Included clarification | The workflow works, but the client needs help understanding it | Answer, then update handoff notes if recurring |
| Minor correction | A small delivered note, label, or instruction is wrong without changing the promise | Correct, log, and refresh affected evidence |
| Exception review | A lead, source, route, owner, or tracker behavior did not match the expected flow | Use the exception response playbook and QA evidence record |
| Maintenance signal | The workflow needs scheduled review, health check, or adoption follow-up | Use the 30-day maintenance checklist and 14-30 day review record |
| New scope | The request expands the delivered workflow | Route through discovery, scope menu, proposal scorecard, and proposal assembly kit |
| Approval-gated change | The request touches sensitive, irreversible, paid, public, or live behavior | Stop for explicit action-level approval |

Initial classification:

Reason for classification:

Confidence: high / medium / low

## Evidence Captured

- Example lead, message, or scenario reviewed:
- Expected behavior:
- Actual behavior:
- First observed date:
- Frequency: one-time / repeated / unknown
- Known workaround:
- Evidence location:
- Evidence limitations:

## Recommended Next Action

- Recommended action:
- Owner:
- Due date or review window:
- Required client input:
- Required internal artifact:
- Approval needed before action: yes / no
- If approval is needed, exact approval to request:
- If no approval is needed, why this remains within existing support boundary:

## Action Log

| Date | Action | Owner | Result | Artifact Updated |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Closeout Decision

Closeout status: resolved / routed to exception review / routed to maintenance / routed to new scope / approval-gated hold / no action

Closeout summary:

- What changed:
- What did not change:
- Client-facing note needed: yes / no
- Handoff notes updated: yes / no / not needed
- QA evidence updated: yes / no / not needed
- Maintenance checklist updated: yes / no / not needed
- Phase-two routing log updated: yes / no / not needed
- Proof or case-study path affected: yes / no

## Required Guardrail Statement

Use this internal closeout wording before marking the record complete:

> Support request reviewed as `[category]`. The delivered Lead Intake workflow is `[unchanged / corrected / exception logged / maintenance routed / new scope routed / approval-gated]`. No pricing, provider selection, credential request, deployment change, public proof, auto-send, auto-write, support agreement, or client commitment was made unless separately recorded and approved.

## Related Artifacts

- `agency-ops/delivery/lead-intake-delivery-control-map.md`
- `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md`
- `agency-ops/delivery/lead-intake-exception-response-playbook.md`
- `agency-ops/delivery/lead-intake-30-day-maintenance-checklist.md`
- `agency-ops/delivery/lead-intake-14-30-day-review-record-template.md`
- `agency-ops/delivery/lead-intake-phase-two-opportunity-routing-log.md`
- `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
