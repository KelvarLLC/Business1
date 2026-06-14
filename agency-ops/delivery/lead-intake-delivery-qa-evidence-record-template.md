# Lead Intake Delivery QA Evidence Record Template

Last updated: 2026-06-14 11:02 CDT

## Purpose

Use this record before handing off any Lead Intake Command System / Follow-Up Engine delivery. It captures the evidence that the workflow was actually tested, that the client can operate it, and that any proof or expansion claims stay grounded in what was verified.

This is a reusable internal template. It is not a signed scope, client commitment, final QA result, public proof item, pricing quote, deployment action, vendor decision, or approval to enable auto-send.

## Guardrails

- Keep this record inside the assigned repository workspace: `agency-ops/`.
- Do not store credentials, private customer lists, raw client exports, regulated data, or sensitive customer messages in this record.
- Use anonymized examples unless the client explicitly approves named details.
- Do not mark delivery complete until required tests pass or open exceptions are accepted by the client.
- Do not publish proof, screenshots, metrics, testimonials, or case-study language from this record without specific client approval.
- Do not enable external auto-send, CRM writes, sheet writes, or production automations unless the client has approved the exact behavior and rollback path.

## Project Snapshot

- Client:
- Business type:
- Workflow delivered:
- Primary lead source:
- Tracker of record:
- Notification or reminder channel:
- Automation layer, if any:
- Client owner:
- Kelvar owner:
- QA date:
- QA environment: local / staging / preview / production / client sandbox
- Current delivery stage: discovery / build / QA / handoff-ready / handoff-complete / follow-up-or-expansion / blocked

## Evidence Summary

| Evidence Area | Status | Evidence Link Or Note | Owner | Follow-Up Needed |
| --- | --- | --- | --- | --- |
| Source trigger tested | not-started / pass / fail / blocked |  |  |  |
| Required fields captured | not-started / pass / fail / blocked |  |  |  |
| Missing-data handling tested | not-started / pass / fail / blocked |  |  |  |
| Lead normalization tested | not-started / pass / fail / blocked |  |  |  |
| Owner assignment tested | not-started / pass / fail / blocked |  |  |  |
| Status pipeline tested | not-started / pass / fail / blocked |  |  |  |
| Follow-up due logic tested | not-started / pass / fail / blocked |  |  |  |
| Notification/reminder tested | not-started / pass / fail / blocked |  |  |  |
| Daily owner view tested | not-started / pass / fail / blocked |  |  |  |
| Manual override tested | not-started / pass / fail / blocked |  |  |  |
| Pause/rollback path tested | not-started / pass / fail / blocked |  |  |  |
| Handoff instructions reviewed | not-started / pass / fail / blocked |  |  |  |
| Proof-capture boundary reviewed | not-started / pass / fail / blocked |  |  |  |

## Test Inputs

Record synthetic or approved test inputs only.

| Test Input | Source | Expected Result | Actual Result | Pass/Fail | Notes |
| --- | --- | --- | --- | --- | --- |
| Complete new lead |  | Lead appears with owner, status, source, timestamp, and next action |  |  |  |
| Missing email |  | Lead is flagged for missing contact detail |  |  |  |
| Missing phone |  | Lead is flagged for missing contact detail |  |  |  |
| Unclear service request |  | Lead enters `needs-review` |  |  |  |
| Outside service area |  | Lead follows client policy |  |  |  |
| Urgent request |  | Lead is flagged for priority review |  |  |  |
| Duplicate-like lead |  | Duplicate handling is visible and safe |  |  |  |
| Manual owner change |  | Owner can be changed without breaking reporting |  |  |  |
| Manual status change |  | Reporting view reflects the updated status |  |  |  |
| Follow-up due |  | Reminder, due state, or task appears as expected |  |  |  |
| Pause or emergency stop |  | Client can pause or disable workflow safely |  |  |  |

## Field Verification

Minimum Lead Intake fields to verify:

- `lead_id`
- `created_at`
- `source`
- `lead_name`
- `email`
- `phone`
- `service_requested`
- `location`
- `message_summary`
- `stage`
- `owner`
- `next_action`
- `next_follow_up_at`
- `last_contacted_at`
- `qualification_notes`
- `closed_reason`

Exceptions or client-approved omissions:

| Field | Exception | Approved By | Date |
| --- | --- | --- | --- |
|  |  |  |  |

## Failure Mode Checks

| Failure Mode | Expected Safe Behavior | Result | Follow-Up |
| --- | --- | --- | --- |
| Source form sends incomplete payload | Record is created or safely flagged for review |  |  |
| Automation provider is unavailable | Lead is not silently lost; owner has fallback process |  |  |
| Notification fails | Tracker still shows the lead and due state |  |  |
| Duplicate lead arrives | Duplicate is visible or merged according to client policy |  |  |
| Wrong owner assigned | Owner can be corrected manually |  |  |
| External message is attempted unintentionally | Auto-send remains off unless explicitly approved |  |  |
| Client needs to pause workflow | Pause/rollback path works and is documented |  |  |

## Client Review Notes

Confirm with client owner:

1. Can the team find new leads?
2. Can the team see who owns each lead?
3. Can the team tell what needs follow-up today?
4. Are the status labels understandable?
5. Are reminders useful rather than noisy?
6. Is anything missing before handoff?
7. What remains intentionally manual?
8. What should be considered for phase two?

Notes:

-

## Handoff Decision

Select one:

- `handoff-ready`: required QA passed and client can operate the workflow.
- `handoff-ready-with-exceptions`: required QA passed except documented non-critical exceptions accepted by the client.
- `more-fixes-needed`: workflow is useful but not ready for handoff.
- `blocked`: QA cannot complete because access, source data, client confirmation, environment, provider, or approval is missing.

Decision rationale:

-

Open exceptions:

| Exception | Impact | Owner | Target Resolution | Client Accepted? |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Proof And Case Study Boundary

Proof status:

- none
- internal delivery artifact only
- client-approved anonymized process proof
- client-approved anonymized result proof
- named case study approved
- testimonial approved

Do not move beyond `internal delivery artifact only` without explicit client permission.

Potential proof signals to collect after 14-30 days:

- New leads captured.
- Leads surfaced that would otherwise have gone stale.
- Follow-up tasks created.
- Response-time change, if measured.
- Manual handoff steps reduced, if measured.
- Client-reported admin time saved, if measured.

Approved public-safe wording, if any:

-

## Related Operating Files

- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/offers/lead-intake-scope-menu.md`

## Completion Checklist

- Required tests recorded.
- Failures and exceptions documented.
- Client owner reviewed operating instructions.
- Pause/rollback path documented.
- Auto-send status confirmed off unless explicitly approved.
- Proof boundary recorded.
- Follow-up review date selected.
- Handoff packet updated.
- Any phase-two ideas moved to the handoff or closeout packet without expanding current scope by accident.
