# Lead Intake Tool-Neutral Implementation Blueprint

Status: internal reusable delivery-readiness blueprint
Last updated: 2026-06-14 16:02 CDT

## Purpose

Turn the Lead Intake Command System / Follow-Up Engine into a practical phase-one build pattern that can be implemented with the client's existing tools before selecting any paid provider, CRM, hosted form vendor, deployment path, or auto-send behavior.

This blueprint is for one-source / one-tracker implementations. It is not a client-specific scope, signed delivery plan, price quote, provider decision, deployment action, public proof item, auto-send approval, auto-write approval, or commitment to a timeline.

## Best-Fit Build

Use this blueprint when a service business needs a narrow first workflow:

- One primary lead source.
- One tracker of record.
- One status pipeline.
- One owner or small owner group.
- One daily operating view.
- Internal reminders, reviewable prompts, or manually approved draft messages.

Best-fit examples:

- Website estimate form to tracker.
- Shared inbox inquiry to tracker.
- Manual phone-note intake row to tracker.
- Existing CRM lead event to owner follow-up view.
- Booking or quote request to review queue.

## Guardrails

- Keep the first build narrow until discovery confirms source, tracker, routing, and owner behavior.
- Do not enable external auto-send by default.
- Do not write into CRM, sheets, calendars, mailboxes, or repository records automatically unless the exact behavior and rollback path are approved.
- Do not choose a paid provider or vendor from this blueprint alone.
- Do not store credentials, raw customer exports, regulated data, or sensitive messages in repo artifacts.
- Do not claim public proof, delivery completion, or launch readiness from this blueprint without QA evidence and approval.

## Phase-One Architecture

### 1. Source Layer

The source layer is the single place leads enter the phase-one workflow.

Acceptable phase-one sources:

- Existing website form notification email.
- Existing contact or quote form webhook.
- Shared inbox label or rule.
- Manual intake row created by staff.
- Existing CRM or booking-tool new lead event.

Discovery questions:

1. Which source produces the most valuable or most urgent leads?
2. Does the source already capture email, phone, service requested, and message details?
3. Who can access the source and confirm test submissions?
4. What happens today when a lead arrives after hours or during peak volume?
5. Is there a fallback if the source or automation layer is unavailable?

Exit criteria:

- One source selected.
- Source owner confirmed.
- Test lead path available.
- Required fields known.
- Fallback capture method documented.

### 2. Normalization Layer

The normalization layer turns messy intake into a consistent lead record.

Minimum normalized fields:

- `lead_id`
- `created_at`
- `source`
- `lead_name`
- `company_or_property`
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

Default rules:

- Missing email or phone: set `stage` to `needs-review` and `next_action` to `complete missing contact detail`.
- Unclear service request: set `stage` to `needs-review` and assign the intake owner.
- Outside service area: follow client policy for `nurture` or `closed-lost`.
- Urgent language: flag same-day review.
- Duplicate-like submission: keep visible until client confirms merge or closeout policy.

Exit criteria:

- Required fields mapped.
- Missing-data handling documented.
- Urgency and service-area handling documented.
- Duplicate visibility rule documented.

### 3. Tracker Layer

The tracker is the single operating view for phase one.

Tool-neutral tracker choices:

- Google Sheet.
- Airtable base.
- Notion database.
- Existing CRM table or pipeline.
- Existing field-service tool lead object.
- Lightweight internal dashboard backed by approved data storage.

Default tracker views:

- New leads today.
- Leads not contacted.
- Follow-up due now.
- Qualified leads awaiting estimate or scheduling.
- Waiting on lead.
- Closed won / closed lost this week.
- Exceptions needing owner review.

Exit criteria:

- Tracker of record selected.
- Client owner can access it.
- Status labels are understandable.
- Manual edit path is safe.
- Daily view answers: what came in, what needs action, and what is stuck?

### 4. Routing Layer

The routing layer assigns owner and next action.

Default owner model:

- Owner or office manager reviews all new leads.
- Dispatcher handles urgent service calls.
- Sales owner handles estimate-ready leads.
- Admin handles missing-information follow-up.

Default next actions:

- Call lead.
- Reply with discovery question.
- Prepare estimate.
- Send scheduling link after human review.
- Mark unqualified.
- Add to nurture follow-up.

Exit criteria:

- Owner assignment rules confirmed.
- Manual override documented.
- Escalation path documented.
- No external message sends automatically unless separately approved.

### 5. Reminder Layer

The reminder layer keeps leads from going stale without over-automating the client-facing response.

Default internal reminder rhythm:

- New lead not contacted within one business hour: internal alert or due-state flag.
- Contacted lead with no reply after one business day: follow-up prompt.
- Qualified lead waiting longer than three business days: owner review prompt.
- Estimate or quote sent with no response after three business days: follow-up prompt.

Allowed phase-one reminder forms:

- Tracker due-state.
- Internal email alert.
- Slack or Teams notification.
- CRM task.
- Manually reviewed message prompt.
- Mailbox draft only after explicit action-level approval.

Exit criteria:

- Reminder timing confirmed.
- Reminder destination confirmed.
- Noise tolerance checked.
- Pause process documented.

### 6. Review And Reporting Layer

The review layer makes the workflow useful after launch.

Minimum review questions:

1. How many new leads entered the workflow?
2. How many were not contacted quickly?
3. How many are waiting on follow-up?
4. How many became qualified opportunities?
5. Which exceptions happened repeatedly?
6. Which phase-two automation would remove the most friction?

Default reporting cadence:

- Daily owner view during the first week.
- 14-30 day review after handoff.
- Phase-two opportunity review after enough real usage exists.

Exit criteria:

- Client knows what to check daily.
- Review window selected.
- Metrics are internal unless proof is explicitly approved.

## Implementation Options By Client Tool State

| Client Tool State | Recommended First Build | Avoid In Phase One |
| --- | --- | --- |
| Mostly email and forms | Inbox/form to tracker with internal reminders | Full CRM migration |
| Already has CRM | CRM lead object plus owner task/reporting view | Rebuilding CRM structure before pain is proven |
| Uses spreadsheets | Form/inbox/manual intake to structured tracker | Complex dashboards before fields are stable |
| Uses booking or field-service tool | New lead event to review queue and follow-up due view | Auto-writing appointments without approval |
| No reliable tracker | Simple tracker first, then automation after adoption | Multi-tool stack with unclear owner |

## Build Sequence

### Step 1: Discovery Confirmation

Inputs required:

- Primary source.
- Tracker destination.
- Owner model.
- Required fields.
- Stage labels.
- Follow-up timing.
- Message review policy.
- Fallback process.

Output:

- Confirmed one-source / one-tracker implementation note.

### Step 2: Field Mapping

Inputs required:

- Example source payload or approved sample.
- Tracker field list.
- Required vs optional fields.
- Missing-data rules.

Output:

- Field map and exception rules.

### Step 3: Workflow Assembly

Inputs required:

- Approved automation layer or manual operating path.
- Tracker permissions.
- Notification destination.
- Test input examples.

Output:

- Working internal workflow in sandbox, preview, or controlled production context.

### Step 4: QA Evidence

Use `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md`.

Required checks:

- Complete lead capture.
- Missing email.
- Missing phone.
- Unclear service request.
- Outside service area.
- Urgent request.
- Duplicate-like lead.
- Owner change.
- Stage change.
- Follow-up due.
- Pause or fallback process.

Output:

- QA evidence record with pass/fail/blocker status.

### Step 5: Handoff

Use `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`.

Handoff must cover:

- What the client checks daily.
- How owners update statuses.
- What reminders mean.
- How exceptions are handled.
- What remains manual.
- How to pause or escalate.
- What is phase-two, not included support.

Output:

- Handoff-ready or blocked decision.

### Step 6: Review And Phase Two

Use:

- `agency-ops/delivery/lead-intake-14-30-day-review-record-template.md`
- `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`

Output:

- Adoption review, support classification, proof boundary, and phase-two opportunity list.

## Approval Gates

Stop for explicit approval before:

- Creating mailbox drafts.
- Sending external messages.
- Publishing pricing or final quotes.
- Selecting paid providers or vendors.
- Adding production secrets or environment variables.
- Changing deployment, DNS, or launch status.
- Enabling auto-send, auto-reply, CRM writes, sheet writes, calendar writes, or repository auto-writes.
- Publishing client proof, screenshots, metrics, testimonials, or case-study claims.

## Related Operating Files

- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/workflows/lead-intake-discovery-outline.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
- `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/delivery/lead-intake-support-boundary-and-maintenance-guide.md`
- `agency-ops/delivery/lead-intake-14-30-day-review-record-template.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`

## Definition Of Ready For A Client-Specific Build

A Lead Intake implementation is ready to become client-specific only when:

- A real or simulated engagement has a named client or scenario.
- One source is selected.
- One tracker is selected.
- Required fields are confirmed.
- Owner and routing rules are confirmed.
- Follow-up timing is confirmed.
- Message review and auto-send policy are confirmed.
- QA environment is known.
- Approval gates are respected.

## Definition Of Done For Phase One

A phase-one build is done only when:

- Source trigger is tested.
- Lead fields are captured and normalized.
- Tracker views work for the client owner.
- Owner assignment and manual override work.
- Follow-up due state or reminder works.
- Pause or fallback process is documented.
- Handoff instructions are reviewed.
- QA evidence is recorded.
- No public proof or completion claim is made beyond verified evidence.
