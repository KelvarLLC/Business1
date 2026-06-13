# Lead Intake And Follow-Up Workflow Spec

## Purpose

Define the reusable implementation pattern for the Lead Intake Command System / Follow-Up Engine offer. This spec turns the offer promise into a delivery-ready workflow that can be adapted for prospects, proposals, demos, and won client work.

## Best-Fit Use Case

Use this workflow when a service business receives estimate requests, contact form submissions, booking inquiries, phone notes, or email leads and needs a clearer way to capture, qualify, route, and follow up before the lead goes cold.

Best-fit signals:

- New inquiries arrive in email, website forms, spreadsheets, CRM, booking tools, or phone notes.
- The first response depends on a busy owner, office manager, dispatcher, or admin remembering to act.
- Lead quality is hard to see at a glance.
- Follow-up timing is inconsistent.
- The owner lacks a simple view of new, contacted, waiting, qualified, and closed leads.

## Bounded Phase-One Scope

Phase one should stay narrow:

- One primary lead source.
- One tracker destination.
- One follow-up mechanism.
- One owner or small owner group.
- One simple status model.
- Human review before auto-sending external messages.

Avoid bundling full CRM migrations, multi-location routing, paid ad optimization, complex attribution, or regulated-data workflows into the first version.

## Default Workflow

### 1. Capture

Trigger from the primary source:

- Website form submission.
- Shared inbox email.
- CRM new lead event.
- Scheduling or estimate request event.
- Manual intake row added by staff.

Minimum captured fields:

- Lead name.
- Business or property name, when relevant.
- Email.
- Phone.
- Service requested.
- Source.
- Location or service area.
- Message or notes.
- Submitted timestamp.
- Consent or contact permission when available.

Optional captured fields:

- Urgency.
- Budget range.
- Preferred appointment time.
- Existing customer flag.
- Source campaign.
- Attachments or photos.

### 2. Normalize

Transform raw intake into a consistent lead record.

Default normalized fields:

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

Normalization rules:

- If email or phone is missing, mark `next_action` as `complete missing contact detail`.
- If service requested is unclear, mark `stage` as `needs review`.
- If the lead is outside service area, mark `stage` as `nurture` or `closed-lost` based on client policy.
- If the lead includes urgent language, flag for same-day review.

### 3. Qualify

Use a lightweight qualification model.

Default stages:

- `new`
- `needs-review`
- `contacted`
- `qualified`
- `waiting-on-lead`
- `appointment-set`
- `proposal-needed`
- `closed-won`
- `closed-lost`
- `nurture`

Default qualification checks:

- Is the requested service offered?
- Is the location inside the service area?
- Is contact information usable?
- Is urgency clear?
- Is the next step obvious?
- Does an owner need to review before response?

### 4. Route

Assign ownership and next action.

Default routing options:

- Owner or office manager reviews all new leads.
- Dispatcher receives urgent service requests.
- Sales owner receives estimate-ready leads.
- Admin receives missing-information leads.

Default next actions:

- Reply with discovery question.
- Call lead.
- Send scheduling link.
- Prepare estimate.
- Mark unqualified.
- Add to nurture follow-up.

### 5. Follow Up

Launch with reminders or draft messages unless auto-send is explicitly approved.

Default reminder timing:

- New lead not contacted within 1 business hour: internal alert.
- Contacted lead with no reply after 1 business day: follow-up prompt.
- Qualified lead waiting longer than 3 business days: owner review prompt.
- Proposal/estimate sent with no response after 3 business days: follow-up prompt.

Draft message types:

- First response.
- Missing information request.
- Scheduling prompt.
- Estimate follow-up.
- Nurture check-in.

Auto-send rule:

- Do not enable auto-send for external messages unless the client explicitly approves the exact message types, timing, exclusions, and pause process.

### 6. Report

Create a simple operational view.

Minimum dashboard or tracker views:

- New leads today or this week.
- Leads not contacted.
- Leads waiting on follow-up.
- Qualified leads.
- Closed-won / closed-lost.
- Lead age by stage.
- Owner and next action.

The reporting view should help the owner answer: what came in, what needs action, and what is stuck?

## Implementation Options

### Lightweight Stack

Best for the first project or smaller client.

- Source: website form, inbox, or existing lead form.
- Tracker: Google Sheet, Airtable, Notion database, or existing CRM table.
- Notifications: email, Slack, Teams, or task tool.
- Follow-up: reminders or draft messages.
- Reporting: filtered tracker views or simple dashboard tab.

### CRM-Centered Stack

Best when the client already uses a CRM.

- Source: existing form or lead source.
- Tracker: CRM lead object or pipeline.
- Notifications: CRM tasks, email alerts, or team channel.
- Follow-up: CRM tasks, sequences, or draft messages.
- Reporting: CRM dashboard plus a simple owner summary.

### Inbox-Centered Stack

Best when leads mostly arrive by email.

- Source: shared inbox or labeled email.
- Tracker: sheet or CRM record created from matching email.
- Notifications: owner/admin alert for new or stale leads.
- Follow-up: draft replies and follow-up reminders.
- Reporting: tracker view of inbox-derived leads.

## Discovery Inputs Needed

Ask these before implementation:

1. What is the highest-volume or highest-value lead source?
2. Who owns first response today?
3. What tool should be the tracker of record?
4. What makes a lead qualified?
5. What makes a lead unqualified?
6. What follow-up timing feels appropriate?
7. What response messages already work?
8. What leads should never receive an automated message?
9. What should happen when key contact details are missing?
10. What view does the owner actually check daily?

## Build Checklist

### Design

- Confirm primary source.
- Confirm tracker destination.
- Confirm required fields.
- Confirm stage model.
- Confirm owner assignment rules.
- Confirm follow-up timing.
- Confirm message draft language.
- Confirm reporting view.

### Build

- Connect or simulate the intake trigger.
- Create normalized lead record structure.
- Add required field handling.
- Add stage assignment.
- Add owner and next-action assignment.
- Add reminder or draft-response workflow.
- Add reporting view.
- Add manual override path.

### Test

- Happy-path lead with complete information.
- Missing email.
- Missing phone.
- Unclear service request.
- Outside service area.
- Duplicate-like submission.
- Urgent lead.
- Lead that needs owner review.
- Follow-up due alert.
- Manual stage update.

### Handoff

- Show where new leads appear.
- Explain how stages should be updated.
- Explain what reminders mean.
- Explain how draft messages should be reviewed.
- Explain how to pause the workflow.
- Document known limitations.
- List phase-two improvements.

## QA And Safety Rules

- Do not drop raw lead details during normalization.
- Do not overwrite manual notes without preserving history.
- Do not auto-send external messages without explicit approval.
- Do not treat AI-generated summaries as final truth without showing source details.
- Do not route regulated, sensitive, legal, financial, or medical workflows without human review.
- Do not claim guaranteed revenue outcomes.

## Demo Scenario

Use this scenario for internal demos or proposal walkthroughs. Label it clearly as a demo, not a client result.

Scenario:

- A roofing company receives a website estimate request after hours.
- The request includes name, phone, email, ZIP code, roof issue, and urgency.
- The workflow creates a lead record, flags it as `new`, assigns the office manager, and sets next action to `call or reply next business morning`.
- If the lead is not marked contacted by the next morning, the workflow prompts the owner.
- If the lead is contacted but does not reply within 3 business days, the workflow prompts a follow-up.
- The owner dashboard shows new leads, stale leads, and qualified estimate requests.

Demo takeaway:

The business does not need a full CRM rebuild to stop estimate requests from getting lost. The first win is a clear lead record, visible next action, and reliable follow-up prompt.

## Proposal Language

Use this wording when adapting the workflow for a prospect:

"Phase one focuses on one intake path, one tracker, and one follow-up rhythm. The goal is not to rebuild your whole sales system. The goal is to make sure new inquiries are captured, visible, assigned, and followed up consistently enough that good leads are less likely to slip through the cracks."

## Current Reuse Path

- Outreach: use this spec to explain the first automation in practical terms.
- Discovery: use the discovery inputs to qualify the lead.
- Proposal: adapt the phase-one scope into a client-specific proposal.
- Delivery: use the build checklist and QA rules with `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`.
- Website proof: use the demo scenario only as an internal/demo example until a real client case study exists.
