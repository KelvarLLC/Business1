# Lead Intake Kickoff Inputs Checklist

Status: internal reusable delivery-readiness template
Last updated: 2026-06-14 20:02 CDT

## Purpose

Use this checklist after a Lead Intake Command System / Follow-Up Engine opportunity is won or approved for a scoped implementation, but before building the workflow. It defines the minimum safe inputs needed to start delivery without collecting unnecessary sensitive data, choosing tools prematurely, expanding scope silently, or promising production behavior before QA evidence exists.

This checklist is not a client-specific statement of work, support agreement, service-level agreement, price quote, vendor selection, deployment approval, public proof approval, auto-send approval, auto-write approval, or production launch record.

## When To Use This

Use this when a real or simulated Lead Intake engagement has reached one of these states:

- discovery completed and scope is ready to confirm,
- proposal accepted in principle,
- internal delivery simulation needs realistic kickoff structure,
- or a client-specific delivery plan is about to be drafted.

Use this before:

- building source-to-tracker automations,
- configuring forms, CRMs, spreadsheets, reminders, or notifications,
- requesting credentials or system access,
- creating client-specific support commitments,
- enabling auto-send, auto-reply, CRM writes, sheet writes, calendar writes, or repository writes,
- or treating any workflow as production-ready.

## Guardrails

- Keep this record inside `agency-ops/`.
- Ask for the smallest useful business inputs first; do not request credentials until the implementation path truly requires them.
- Do not store passwords, API keys, private exports, regulated data, raw customer messages, or unnecessary personal data in this checklist.
- Use sample or anonymized records for mapping whenever possible.
- Treat access, provider selection, environment variables, deployment changes, and production writes as approval-gated.
- Treat scope changes discovered during kickoff as routing decisions, not automatic included work.
- Treat proof signals as internal-only until the client separately approves public use.

## Kickoff Snapshot

- Client or simulated engagement:
- Business type:
- Pipeline stage:
- Approved offer or scope option:
- Kickoff date:
- Client owner:
- Kelvar owner:
- Expected implementation window:
- Related discovery notes:
- Related proposal or scope record:
- Related delivery plan:
- Related QA evidence record:
- Related handoff packet:

## Minimum Business Inputs

| Input | Needed? | Source / Owner | Status | Notes |
| --- | --- | --- | --- | --- |
| Primary lead source to improve first | yes / no |  | not-started / received / blocked |  |
| Current lead intake destination | yes / no |  | not-started / received / blocked |  |
| Current follow-up owner or role | yes / no |  | not-started / received / blocked |  |
| Current response-time expectation | yes / no |  | not-started / received / blocked |  |
| Services or request types to classify | yes / no |  | not-started / received / blocked |  |
| Required contact fields | yes / no |  | not-started / received / blocked |  |
| Disqualifying or low-fit request signals | yes / no |  | not-started / received / blocked |  |
| Escalation rules for urgent leads | yes / no |  | not-started / received / blocked |  |
| Existing tracker or CRM constraints | yes / no |  | not-started / received / blocked |  |
| Reporting or owner-visibility need | yes / no |  | not-started / received / blocked |  |

## Sample Record Mapping

Use sample or anonymized examples unless real records are explicitly approved for internal implementation use.

| Example Type | Provided? | Sensitive Data Removed? | Mapping Decision | Open Question |
| --- | --- | --- | --- | --- |
| Good-fit lead | yes / no | yes / no / n/a |  |  |
| Poor-fit lead | yes / no | yes / no / n/a |  |  |
| Urgent lead | yes / no | yes / no / n/a |  |  |
| Referral or wrong-contact lead | yes / no | yes / no / n/a |  |  |
| Existing customer request | yes / no | yes / no / n/a |  |  |
| Spam or duplicate record | yes / no | yes / no / n/a |  |  |

## Workflow Boundary Confirmation

| Boundary | Current Decision | Approval Needed? | Notes |
| --- | --- | --- | --- |
| Source captured | one source only / multiple sources / undecided | yes / no |  |
| Tracker of record | spreadsheet / CRM / inbox / other / undecided | yes / no |  |
| Notification path | email / Slack / Teams / SMS / other / undecided | yes / no |  |
| Reminder behavior | manual / scheduled reminder / auto-task / undecided | yes / no |  |
| Auto-reply behavior | disabled / drafted only / enabled later / undecided | yes |  |
| CRM or sheet writes | disabled / staged / enabled later / undecided | yes |  |
| Reporting cadence | none / weekly / monthly / on request / undecided | yes / no |  |
| Support window | not included / limited clarification / maintenance option / undecided | yes |  |

## Access And Data Request Gate

Do not request credentials or live system access until this section shows a specific need.

| System Or Tool | Why Access Is Needed | Access Type | Safe Alternative Available? | Approval Status |
| --- | --- | --- | --- | --- |
|  |  | view / edit / admin / API / environment variable | yes / no | not-requested / requested / approved / denied |

Safe alternatives before access:

- Screenshare walkthrough.
- Redacted screenshots.
- Sample CSV with private data removed.
- Manual description of fields and statuses.
- Temporary test workspace owned by the client.
- Implementation using placeholder field names until access is approved.

## Build Readiness Gate

Mark each item before implementation begins.

| Gate | Status | Evidence Or Note | Owner |
| --- | --- | --- | --- |
| Scope option confirmed | not-started / pass / issue / blocked |  |  |
| Primary source selected | not-started / pass / issue / blocked |  |  |
| Tracker or record of truth selected | not-started / pass / issue / blocked |  |  |
| Owner-routing rule defined | not-started / pass / issue / blocked |  |  |
| Required fields defined | not-started / pass / issue / blocked |  |  |
| Sample records mapped | not-started / pass / issue / blocked |  |  |
| Sensitive-data handling understood | not-started / pass / issue / blocked |  |  |
| Access need justified or deferred | not-started / pass / issue / blocked |  |  |
| Approval-gated actions separated | not-started / pass / issue / blocked |  |  |
| QA evidence template selected | not-started / pass / issue / blocked |  |  |
| Handoff packet selected | not-started / pass / issue / blocked |  |  |

Build readiness disposition:

- Ready for tool-neutral implementation blueprint.
- Ready after small clarification.
- Blocked by missing client input.
- Blocked by access approval.
- Blocked by provider or deployment decision.
- Scope needs proposal revision before build.

## Kickoff Questions

Use these as a concise client-facing discovery/kickoff set. Keep wording practical and avoid tool jargon unless the client already uses it.

1. Where do new leads currently arrive first?
2. Who is responsible for checking that source each business day?
3. What information must be present before the lead is useful?
4. What makes a lead urgent?
5. What makes a lead low-fit or not worth pursuing?
6. What follow-up usually gets missed?
7. Where should the clean lead list live for the first version?
8. Who should see new leads or overdue follow-ups?
9. What should stay manual even after the workflow is live?
10. What would make the first version feel successful after 14 to 30 days?

## Scope Drift Watchlist

Route these signals through the scope menu, proposal scorecard, or phase-two routing log before acting:

- Additional lead sources beyond the first source.
- CRM migration or cleanup.
- Two-way CRM sync.
- SMS follow-up or auto-replies.
- AI-written outbound messages.
- Calendar scheduling automation.
- Paid advertising attribution.
- Multi-location routing.
- Role-based reporting dashboards.
- Public proof, testimonials, screenshots, or case-study metrics.

## Handoff To Implementation

When the checklist is complete, route to:

- `agency-ops/delivery/lead-intake-tool-neutral-implementation-blueprint.md` for build architecture.
- `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md` for test evidence.
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md` for handoff.
- `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md` for support categorization.
- `agency-ops/delivery/lead-intake-30-day-maintenance-checklist.md` for post-handoff rhythm.
- `agency-ops/delivery/lead-intake-exception-response-playbook.md` for issues after implementation.
- `agency-ops/delivery/lead-intake-phase-two-opportunity-routing-log.md` for expansion ideas.

## Approval Boundary Checklist

Before moving beyond kickoff, confirm:

- No mailbox draft is being created without approval.
- No outreach, reply, follow-up, or proposal is being sent without approval.
- No final price or public package pricing is being quoted without approval.
- No paid provider, CRM, form handler, or tool is being selected without approval.
- No credentials, secrets, or environment variables are being requested or stored without a justified access need and approval.
- No deployment, DNS, production setting, or launch status is being changed without approval.
- No public proof, screenshot, metric, testimonial, or case-study claim is being published without approval.
- No auto-send, auto-reply, auto-write, CRM write, sheet write, calendar write, or repository write behavior is being enabled without approval.

## Done Criteria

Kickoff is ready to move into implementation when:

- The first source, tracker, owner, required fields, and routing rule are defined.
- Sample records or anonymized examples are mapped.
- Sensitive-data boundaries are clear.
- Access needs are justified, deferred, or approved.
- Scope drift signals are separated from included work.
- QA, handoff, support, maintenance, exception, and phase-two routing assets are selected.
- Approval-gated actions remain explicitly separated from delivery work.
