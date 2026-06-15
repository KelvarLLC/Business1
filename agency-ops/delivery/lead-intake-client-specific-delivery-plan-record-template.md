# Lead Intake Client-Specific Delivery Plan Record Template

Status: internal reusable delivery-readiness template
Last updated: 2026-06-14 21:02 CDT

## Purpose

Use this record when a Lead Intake Command System / Follow-Up Engine opportunity is ready to move from general delivery readiness into a scoped client-specific implementation plan.

This template connects kickoff inputs, tool-neutral architecture, QA evidence, handoff, support boundaries, maintenance, proof capture, post-delivery review, and phase-two routing into one controlled delivery record.

This is not a signed statement of work, final price quote, support agreement, vendor decision, credential request, deployment approval, public proof approval, auto-send approval, auto-write approval, production launch record, or client commitment until the relevant client-specific approvals and evidence exist.

## When To Use This

Use this after one of these conditions is true:

- Discovery has identified the first source, tracker, owner, and workflow boundary.
- A proposal or scope option has been accepted in principle.
- A simulated engagement needs a realistic delivery plan without pretending a real client exists.
- Kickoff inputs are complete enough to define build, QA, handoff, and support boundaries.

Do not use this to skip discovery, quote final pricing, request credentials, select a paid provider, enable auto-send, enable production writes, or mark a workflow live.

## Guardrails

- Keep this record inside `agency-ops/`.
- Use sample or anonymized data unless real client data has been explicitly approved for internal implementation use.
- Do not store passwords, API keys, private exports, regulated data, raw customer messages, or unnecessary personal data.
- Treat credentials, provider selection, environment variables, deployment settings, production writes, and external messages as approval-gated.
- Treat scope drift as a routing decision: defer, phase two, proposal update, or explicit change approval.
- Treat proof, screenshots, metrics, testimonials, and case-study language as internal-only until the client separately approves public use.

## Project Snapshot

- Client or simulated engagement:
- Business type:
- Current pipeline stage:
- Approved offer or scope option:
- Primary workflow name:
- Planned implementation window:
- Client owner:
- Kelvar owner:
- Related lead record:
- Related discovery notes:
- Related proposal or scope record:
- Related kickoff inputs checklist:
- Related implementation blueprint:
- Related QA evidence record:
- Related handoff and closeout packet:
- Related support or maintenance record:

## Delivery Objective

- Business problem being solved:
- Target operating outcome:
- Workflow users or roles affected:
- Current manual process summary:
- Desired phase-one behavior:
- Out-of-scope items for phase one:
- Success criteria:

## Approved Phase-One Scope

| Scope Area | Included? | Decision | Notes |
| --- | --- | --- | --- |
| Primary lead source | yes / no |  |  |
| Tracker of record | yes / no |  |  |
| Lead normalization fields | yes / no |  |  |
| Owner assignment | yes / no |  |  |
| Status pipeline | yes / no |  |  |
| Follow-up due logic | yes / no |  |  |
| Internal notification or reminder | yes / no |  |  |
| Daily or weekly owner view | yes / no |  |  |
| Manual review queue | yes / no |  |  |
| Reporting snapshot | yes / no |  |  |
| Handoff instructions | yes / no |  |  |
| Maintenance review plan | yes / no |  |  |

## Explicitly Excluded Unless Separately Approved

| Item | Default Status | Approval Needed |
| --- | --- | --- |
| External auto-send or auto-reply | excluded | Exact message behavior, recipient rules, pause path, and send approval |
| CRM, sheet, calendar, mailbox, or repository auto-write | excluded | Exact write behavior, rollback path, and owner approval |
| Paid provider or vendor selection | excluded | Provider comparison, cost review, and user/client approval |
| Credential or secret collection | excluded | Minimum required access, secure collection path, and approval |
| Public proof or case-study claim | excluded | Client approval for exact screenshot, metric, quote, or claim |
| Final pricing or support commitment | excluded | Approved proposal, change order, or support agreement |
| Deployment or production launch status change | excluded | Build/QA/deployment evidence and explicit launch decision |

## Source And Tracker Decisions

| Decision | Selected Option | Owner | Evidence / Notes | Open Question |
| --- | --- | --- | --- | --- |
| Primary lead source |  |  |  |  |
| Tracker of record |  |  |  |  |
| Required fields |  |  |  |  |
| Required statuses |  |  |  |  |
| Lead owner rule |  |  |  |  |
| Reminder or due-date rule |  |  |  |  |
| Daily review view |  |  |  |  |
| Fallback process |  |  |  |  |

## Minimum Field Map

| Field | Source Field | Tracker Field | Required? | Default / Fallback | Notes |
| --- | --- | --- | --- | --- | --- |
| lead_id |  |  | yes | generated |  |
| created_at |  |  | yes | source timestamp |  |
| source |  |  | yes | selected source |  |
| lead_name |  |  | yes / no | needs-review |  |
| email |  |  | yes / no | missing-contact |  |
| phone |  |  | yes / no | missing-contact |  |
| service_requested |  |  | yes | needs-review |  |
| message_summary |  |  | yes / no | blank allowed |  |
| priority |  |  | yes / no | normal |  |
| owner |  |  | yes | default owner |  |
| status |  |  | yes | new |  |
| follow_up_due |  |  | yes / no | calculated or manual |  |
| last_touch |  |  | yes / no | blank until updated |  |
| next_action |  |  | yes / no | review lead |  |

## Build Plan

| Phase | Work | Owner | Inputs Needed | Exit Criteria | Status |
| --- | --- | --- | --- | --- | --- |
| 1. Confirm scope | Review kickoff inputs and phase-one boundaries |  |  | Scope record complete | not-started |
| 2. Confirm data map | Map source fields to tracker fields |  |  | Field map approved | not-started |
| 3. Configure tracker | Prepare statuses, views, owners, and due fields |  |  | Tracker ready for test data | not-started |
| 4. Configure source path | Connect or manually stage the source path |  |  | Test source can create sample lead | not-started |
| 5. Normalize lead record | Standardize required fields and fallbacks |  |  | Sample leads normalize correctly | not-started |
| 6. Add routing and reminders | Apply owner and follow-up rules |  |  | Rules pass sample tests | not-started |
| 7. Create owner view | Create daily review or queue view |  |  | Owner can find next actions | not-started |
| 8. QA and exception testing | Use QA evidence record |  |  | Required tests pass or exceptions accepted | not-started |
| 9. Handoff preparation | Prepare instructions, pause path, and support boundary |  |  | Handoff packet ready | not-started |
| 10. Review and closeout | Confirm adoption, proof boundaries, and next review |  |  | Client-specific closeout decision made | not-started |

## QA Evidence Requirements

Before handoff, create or update the related QA evidence record and verify at minimum:

- Source trigger or manual intake path tested.
- Required fields captured or safely flagged.
- Missing-data handling tested.
- Lead normalization tested.
- Owner assignment tested.
- Status pipeline tested.
- Follow-up due logic tested.
- Notification, reminder, or owner view tested.
- Manual override tested.
- Pause or rollback path tested.
- Handoff instructions reviewed.
- Proof-capture boundary reviewed.

## Handoff Requirements

Before calling delivery handoff-ready, confirm:

| Requirement | Status | Notes |
| --- | --- | --- |
| Client owner knows where to review new leads | not-started / done / blocked |  |
| Client owner knows how to update status | not-started / done / blocked |  |
| Client owner knows how follow-up due logic works | not-started / done / blocked |  |
| Manual override path is documented | not-started / done / blocked |  |
| Pause or emergency stop path is documented | not-started / done / blocked |  |
| Support boundary is clear | not-started / done / blocked |  |
| Maintenance review rhythm is scheduled or noted | not-started / done / blocked |  |
| Proof/case-study permission remains separate | not-started / done / blocked |  |

## Exception And Scope Drift Routing

| Signal | Route | Default Decision |
| --- | --- | --- |
| More than one source is needed | Phase-two opportunity log | Defer unless approved |
| Multiple trackers or CRMs are involved | Scope review | Defer or create separate phase |
| Client requests auto-send | Approval gate | Do not enable by default |
| Client requests CRM/sheet/calendar writes | Approval gate | Define exact write and rollback path |
| Sensitive data is required | Access/data review | Minimize and use secure path |
| Workflow fails QA | Exception response playbook | Fix, accept exception, or hold launch |
| Client asks for public proof | Proof-capture system | Require exact approval |
| Support need exceeds included scope | Support boundary guide | Route to support agreement or phase two |

## Delivery Timeline Draft

- Discovery complete target:
- Kickoff inputs complete target:
- Build start target:
- QA target:
- Handoff target:
- 14-30 day review target:
- 30-day maintenance review target:

## Open Decisions

| Decision | Owner | Needed By | Options | Current Recommendation |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Blockers

| Blocker | Type | Owner | Impact | Resolution Path |
| --- | --- | --- | --- | --- |
|  | access / scope / data / tool / approval / QA / client / other |  |  |  |

## Immediate Next Actions

| Action | Owner | Due / Target | Gate? | Notes |
| --- | --- | --- | --- | --- |
| Complete kickoff inputs checklist |  |  | no, unless requesting sensitive access |  |
| Confirm source and tracker decisions |  |  | possibly |  |
| Create or update implementation blueprint variant |  |  | no, if tool-neutral |  |
| Prepare QA evidence record |  |  | no |  |
| Prepare handoff packet |  |  | no |  |

## Completion Rule

This record is delivery-plan-ready when:

- Phase-one scope is defined.
- Source, tracker, owner, and fallback path are known.
- Field map is complete enough to build safely.
- Gated items are either excluded, approved, or explicitly blocked.
- QA evidence requirements are listed.
- Handoff, support boundary, maintenance, proof capture, and review paths are linked.

It is not delivery-complete until the client-specific QA evidence, handoff, and closeout records support that status.
