# Simulated Home Services Lead Intake Delivery Package

Last updated: 2026-06-14 02:41 CDT

## Status And Guardrails

This is a simulated first-client delivery package for the Lead Intake Command System / Follow-Up Engine. It is not a client commitment, signed scope, sent proposal, public proof item, or claim of delivered client results.

Use it to show how an interested Dallas/Fort Worth home-services lead would move from discovery into a practical implementation plan.

Guardrails:

- No external outreach is sent from this package.
- No mailbox draft is created by this package.
- No final pricing is quoted here.
- No paid vendor is selected here.
- No deployment or production launch status is changed here.
- No external messages are auto-sent by default.
- Any client-specific implementation requires discovery confirmation before build.

## Simulated Client Scenario

Simulated client type: Dallas/Fort Worth HVAC, roofing, landscaping, or related home-services business.

Likely operating pain:

- Leads arrive through a website form, phone notes, inbox messages, and occasional manual referrals.
- A busy owner, dispatcher, or office manager handles first response while also managing daily operations.
- Some inquiries do not receive fast follow-up, especially after hours or during peak job volume.
- The business lacks one simple daily view of new leads, stale leads, follow-up due, and estimate-ready opportunities.

Package goal:

Build a narrow phase-one system that captures one primary lead source, normalizes the lead details, assigns an owner, creates a visible next action, and prompts follow-up before the lead goes cold.

## Phase-One Offer Shape

Recommended phase-one package: Single-Source Lead Intake Visibility Upgrade.

Scope:

- One primary lead source.
- One tracker of record.
- One status pipeline.
- One owner or small owner group.
- Internal reminders or draft-ready message prompts.
- Simple owner view for leads needing attention.

Out of scope for phase one:

- Full CRM migration.
- Multi-location dispatch routing.
- Paid-ad attribution rebuild.
- Automated external sending without explicit approval.
- Complex revenue forecasting.
- Regulated or sensitive-data workflows.

## Discovery Facts To Confirm

Before building, confirm:

1. Highest-volume or highest-value lead source.
2. Who owns first response today.
3. Current tracker of record, if any.
4. Required fields for a usable lead.
5. What qualifies or disqualifies a lead.
6. Service area rules.
7. Urgency rules for same-day response.
8. Current follow-up timing.
9. Existing response language that already works.
10. What view the owner will check daily.

Decision gate:

If these facts are not confirmed, produce a discovery summary and revised scope before implementation.

## Workflow Map

### 1. Capture

Trigger from the selected source:

- Website form submission.
- Shared inbox lead email.
- CRM new lead event.
- Scheduling or estimate request.
- Manual staff entry.

Minimum captured fields:

- Lead name.
- Email.
- Phone.
- Service requested.
- Location or service area.
- Message or notes.
- Source.
- Submitted timestamp.
- Consent/contact permission when available.

### 2. Normalize

Create a consistent record with these fields:

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

Default handling:

- Missing email or phone: set next action to `complete missing contact detail`.
- Unclear service request: set stage to `needs-review`.
- Outside service area: set stage to `nurture` or `closed-lost` based on client policy.
- Urgent language: flag for same-day review.

### 3. Route

Default routing options:

- Owner reviews all new leads.
- Office manager handles standard estimate requests.
- Dispatcher handles urgent service calls.
- Admin handles missing-information follow-up.

Default next actions:

- Call lead.
- Reply with discovery question.
- Send scheduling link after human review.
- Prepare estimate.
- Mark unqualified.
- Add to nurture follow-up.

### 4. Track

Status pipeline:

- `new`
- `needs-review`
- `contacted`
- `qualified`
- `appointment-set`
- `quoted`
- `follow-up-due`
- `waiting-on-lead`
- `closed-won`
- `closed-lost`
- `nurture`

Daily owner view:

- New leads today.
- Leads not contacted.
- Follow-up due now.
- Qualified leads awaiting estimate.
- Quotes or estimates waiting longer than three business days.
- Closed-won and closed-lost for the week.

### 5. Follow Up

Default internal reminder rhythm:

- New lead not contacted within one business hour: internal alert.
- Contacted lead with no reply after one business day: follow-up prompt.
- Qualified lead waiting longer than three business days: owner review prompt.
- Estimate or quote sent with no response after three business days: follow-up prompt.

External message rule:

Do not auto-send external messages in phase one. Start with internal reminders, reviewable message prompts, or mailbox drafts only after explicit approval.

## Tool-Neutral Implementation Options

Lightweight stack:

- Source: existing form, inbox, or manual entry.
- Tracker: Google Sheet, Airtable, Notion database, or existing CRM table.
- Automation layer: Zapier, Make, n8n, native CRM automation, or custom script.
- Notifications: email, Slack, Teams, or task tool.
- Reporting: filtered tracker views or dashboard tab.

CRM-centered stack:

- Source: current form or CRM lead event.
- Tracker: CRM lead object or pipeline.
- Notifications: CRM tasks, email alerts, or team channel.
- Follow-up: CRM task prompts or reviewable sequences.
- Reporting: CRM dashboard plus owner summary.

No paid provider is selected until the client confirms current tools, budget sensitivity, data needs, and preferred operating model.

## Build Plan

### Phase 0: Discovery And Design

Outputs:

- Confirmed lead source.
- Confirmed tracker destination.
- Confirmed required fields.
- Confirmed stage model.
- Confirmed owner/routing rules.
- Confirmed follow-up timing.
- Confirmed message review policy.

Exit criteria:

- Client agrees to one-source, one-tracker phase-one scope.
- No auto-send behavior is included unless separately approved.

### Phase 1: Tracker And Normalization

Outputs:

- Lead tracker structure.
- Required fields.
- Normalized status values.
- Missing-data handling.
- Basic owner/next-action fields.

Exit criteria:

- Test leads can be added and reviewed without losing raw information.
- Owner can see what needs action.

### Phase 2: Routing And Reminder Logic

Outputs:

- Owner assignment rules.
- Next-action assignment.
- Follow-up due timestamps.
- Internal reminder prompts.
- Manual override path.

Exit criteria:

- New, urgent, missing-information, and stale leads route correctly in tests.
- Staff can override status and owner without breaking the workflow.

### Phase 3: Reporting And Handoff

Outputs:

- Daily owner view.
- Follow-up due view.
- Qualified lead view.
- Handoff guide.
- Known limitations and phase-two recommendations.

Exit criteria:

- Owner can answer: what came in, what needs action, and what is stuck?
- Staff understand how to pause, review, and update the workflow.

## QA Checklist

Test cases:

- Complete new lead.
- Missing email.
- Missing phone.
- Unclear service request.
- Outside service area.
- Urgent request.
- Duplicate-like submission.
- Manual owner change.
- Manual stage change.
- Follow-up due reminder.
- Closed-won update.
- Closed-lost update.

Safety checks:

- Raw lead details are preserved.
- Manual notes are not overwritten.
- AI summaries, if used later, are review-only and source-backed.
- External messages do not auto-send.
- Pause process is documented.
- Known limitations are visible in handoff notes.

## Failure Modes To Prevent

- Leads captured but not assigned.
- Owner assigned but no next action exists.
- Reminder timing creates noise instead of useful prompts.
- Staff cannot tell which record is current.
- Client assumes draft prompts are being sent automatically.
- Tool choice is made before confirming existing client systems.
- The first phase grows into a full CRM rebuild.

## Client Handoff Package

Handoff materials to prepare after build:

- One-page workflow overview.
- Field dictionary.
- Status definitions.
- Daily review checklist.
- How to update lead stage.
- How to change owner.
- How to pause reminders.
- Troubleshooting notes.
- Phase-two improvement list.

## Draft Timeline

This timeline is a planning model, not a delivery commitment.

- Day 0: discovery and source/tracker confirmation.
- Day 1: tracker model and workflow design.
- Day 2: intake normalization and routing build.
- Day 3: reminder logic, reporting views, and QA.
- Day 4: handoff, staff review, and revisions.
- Day 5: closeout notes and phase-two recommendations.

Actual timeline depends on client responsiveness, source access, existing systems, and whether the client requests changes beyond phase-one scope.

## Proof Capture Plan

Use only after real delivery and client approval.

Internal proof candidates:

- Before/after workflow diagram.
- Sample anonymized tracker view.
- Time-to-first-review improvement.
- Number of stale leads visible after launch.
- Client-approved quote or testimonial.

Public proof requires explicit approval and must avoid private customer data, private lead details, unsupported performance claims, or inflated revenue promises.

## Closeout Criteria

The simulated delivery is ready to become a real delivery plan when:

- A lead completes discovery.
- The selected source and tracker are known.
- The client approves the phase-one scope.
- Message behavior is approved as reminder-only, draft-only, or auto-send with explicit rules.
- The implementation stack is selected based on confirmed systems.
- QA and handoff responsibilities are assigned.

## Reuse Path

Use this package for:

- Discovery calls with Dallas home-services prospects.
- Proposal scope refinement.
- Internal implementation planning.
- Delivery readiness reviews.
- Demo walkthroughs, clearly labeled as simulated.

Related files:

- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/dallas-six-lead-proposal-readiness-snapshot.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`
