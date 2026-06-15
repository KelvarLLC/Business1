# Lead Intake Exception Response Playbook

Last updated: 2026-06-14 19:02 CDT

## Purpose

This internal playbook defines how the agency should classify, triage, resolve, and document exceptions in a Lead Intake Command System after implementation or handoff.

It is a reusable delivery-readiness artifact only. It does not create a client-specific support agreement, guarantee response times, approve scope expansion, authorize paid tools, enable auto-send or auto-write behavior, publish proof, change deployment status, or commit to any client-facing promise without separate approval and client-specific scope.

## When To Use This Playbook

Use this playbook when a Lead Intake workflow shows one of these signals:

- A lead was captured but did not reach the expected tracker or owner.
- A reminder, status update, or review prompt did not fire as expected.
- A lead appears duplicated, malformed, incomplete, or routed to the wrong place.
- A source form, mailbox, spreadsheet, CRM, or notification channel changed behavior.
- A user reports confusion, missing context, or an unclear next step.
- A workflow appears technically healthy but the business process is not being followed.
- A post-delivery review reveals repeated exceptions or recurring manual work.

## Exception Categories

| Category | Definition | Typical First Check | Default Handling |
| --- | --- | --- | --- |
| Capture gap | A submitted lead did not enter the expected system of record | Source submission record and tracker row | Reconcile the missing record, then identify why capture failed |
| Routing gap | A lead reached the tracker but not the right owner or queue | Routing field, owner rule, notification record | Correct the owner/status and review the rule condition |
| Reminder gap | Follow-up prompt did not trigger or was not noticed | Reminder schedule, status field, notification destination | Update the record and verify trigger assumptions |
| Data-quality issue | The lead record is incomplete, duplicated, malformed, or hard to act on | Required fields, normalization rules, duplicate checks | Clean the record and mark the source of bad data |
| Process-adoption issue | The system worked, but users did not update or use it consistently | Recent statuses, owner notes, skipped review cadence | Coach the operating step or simplify the workflow path |
| Tool-change issue | A connected system changed settings, permissions, fields, forms, or behavior | Recent tool/account changes and integration logs | Restore expected configuration or move to a handler decision path |
| Scope-pressure issue | The exception is actually a request for new capability | Original scope, support boundary, phase-two routing log | Route to phase-two opportunity review before committing |
| Proof-risk issue | The exception affects whether results can be claimed publicly | QA evidence, proof-capture rules, review records | Hold any proof claim until evidence is clean and approved |

## Triage Severity

| Severity | Use When | Internal Target | Escalation Path |
| --- | --- | --- | --- |
| Monitor | One-off issue with no lost lead and no repeated pattern | Record in review notes | Recheck during next maintenance or 14-30 day review |
| Standard | A single lead, reminder, or field needs correction | Reconcile and document the fix | Update maintenance checklist and QA evidence record if relevant |
| High | Multiple records, missed follow-ups, or owner confusion affect operations | Stop the affected path and repair before relying on it | Use delivery QA evidence record and support-boundary guide |
| Critical | Client-facing trust, data integrity, public proof, or launch status could be affected | Hold claims and client-facing changes until reviewed | Require explicit approval before external communication or status change |

These internal targets are planning guides, not client-facing SLA commitments.

## Response Workflow

1. Capture the exception.
   Record date, reporter, affected source, affected lead or record, visible symptom, and whether any client-facing promise is implicated.

2. Classify the category and severity.
   Use the tables above. If unsure, choose the more cautious severity until evidence lowers the risk.

3. Freeze risky downstream action.
   Pause public proof claims, launch-status changes, automated sends, or expansion promises if the exception touches evidence, delivery quality, or client-facing trust.

4. Reconstruct the path.
   Trace the lead from source to tracker to owner to reminder to review record. Identify the first place reality diverged from the expected workflow.

5. Apply the smallest safe correction.
   Correct the affected record, rule, field, label, owner, or reminder without changing unrelated workflow behavior.

6. Verify with evidence.
   Use the delivery QA evidence record template when the correction affects workflow reliability. Use the 30-day maintenance checklist or 14-30 day review record when the correction affects post-handoff operations.

7. Decide whether the issue is support, maintenance, or phase two.
   If it fits existing maintenance, record and close it. If it asks for new routing, reporting, automation, integrations, or user roles, move it to the phase-two opportunity routing log.

8. Update continuity records.
   Note the exception, fix, remaining risk, and next check in the relevant maintenance, QA, support-boundary, review, or phase-two artifact.

## Required Exception Record Fields

Use these fields in a client-specific record, maintenance note, or delivery QA evidence entry:

| Field | Notes |
| --- | --- |
| Exception ID | Short ID such as `LI-EX-001` |
| Date found | Date and timezone |
| Found by | Operator, client user, QA review, maintenance check, or automation alert |
| Affected source | Form, mailbox, CRM, spreadsheet, call intake, ad lead source, or other system |
| Affected record | Lead ID, row, ticket, email subject, or safe non-sensitive reference |
| Category | Capture, routing, reminder, data quality, adoption, tool change, scope pressure, or proof risk |
| Severity | Monitor, Standard, High, or Critical |
| Symptom | What was observed |
| Expected behavior | What should have happened |
| First divergence point | Where the path first broke or became unclear |
| Correction made | Smallest safe fix applied |
| Evidence checked | QA record, test result, tracker check, screenshot reference, or review note |
| Client-facing impact | None, internal only, potential delay, missed follow-up, proof risk, launch risk, or requires approval |
| Follow-up owner | Person or role responsible for recheck |
| Recheck date | Date for maintenance or review follow-up |
| Closeout decision | Closed, monitor, add to maintenance, route to phase two, or approval needed |

Do not store sensitive customer personal data in repository records. Use safe references and keep private details in the client-approved system of record.

## Client Communication Guardrails

Before drafting or sending any client-facing exception message, confirm:

- The exception facts are known and not speculative.
- The proposed language does not admit unverified fault or make unsupported guarantees.
- The fix, next check, and responsibility are clear.
- The message does not quote pricing, change scope, promise a new SLA, or approve expansion.
- The user has explicitly approved mailbox draft creation or sending if using email tools.

Safe internal summary structure:

> We found an exception in [workflow layer]. The immediate impact appears to be [impact level]. The current correction is [fix]. The next check is [date or review point]. This remains [maintenance / support / phase-two / approval-needed].

## Links To Related Delivery Assets

- `agency-ops/delivery/lead-intake-tool-neutral-implementation-blueprint.md`
- `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md`
- `agency-ops/delivery/lead-intake-30-day-maintenance-checklist.md`
- `agency-ops/delivery/lead-intake-14-30-day-review-record-template.md`
- `agency-ops/delivery/lead-intake-phase-two-opportunity-routing-log.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`

## Definition Of Done

An exception is complete only when:

- The affected record or workflow path is corrected or explicitly marked unresolved.
- Evidence has been checked and linked or summarized safely.
- Follow-up ownership and recheck timing are recorded.
- Any support, maintenance, phase-two, proof, launch, or approval implication is classified.
- No client-facing claim, proof, pricing, scope change, or automation behavior is changed without approval.
