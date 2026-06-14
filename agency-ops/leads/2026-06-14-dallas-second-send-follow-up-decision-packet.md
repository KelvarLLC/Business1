# Dallas Second-Send Follow-Up Decision Packet

Date: 2026-06-14
Status: Internal follow-up decision packet
Workspace: `agency-ops/`
Campaign: Lead Intake Command System / Follow-Up Engine
Batch: Southern Botanical, Prestonwood Landscape Services, Dane Roofing

## Purpose

Define what should happen if the second Dallas/Fort Worth outreach batch is reviewed, drafted, sent, replied to, or followed up later.

This packet keeps the second batch from becoming improvised work after the first batch produces learning. It sets the draft-review order, send gate, follow-up timing, reply handling, tracker updates, and learning capture for Southern Botanical, Prestonwood Landscape Services, and Dane Roofing.

This is an internal operating artifact only. It is not a mailbox draft, sent outreach, follow-up approval, price quote, proposal, calendar invite, client commitment, deployment action, public proof, provider selection, or auto-send approval.

## Current Status

- Second-batch prospects: Southern Botanical, Prestonwood Landscape Services, Dane Roofing.
- Second-batch outreach status: not sent.
- Mailbox draft status: not approved and not created.
- Recommended mailbox if approved later: Outlook / `Kelvarllc.com@outlook.com`.
- Recommended sequencing: use only after the first Dallas batch is reviewed, sent, or intentionally held.
- Recommended first gated action for this batch: create Outlook drafts for review only, if explicitly approved.
- Recommended send rule: do not send until a separate explicit send approval.
- Recommended follow-up timing after an approved send: 3 business days after the first email if no reply.

## Source Files

- `agency-ops/workflows/outreach-execution-control-sheet.md`
- `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts-batch-2.md`
- `agency-ops/leads/2026-06-14-dallas-second-batch-revenue-readiness.md`
- `agency-ops/leads/2026-06-14-dallas-second-batch-draft-review-checklist.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/leads/2026-06-14-dallas-reply-triage-board.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/proposals/2026-06-14-lead-intake-discovery-to-proposal-handoff-checklist.md`
- `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-wants-a-call-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-already-has-crm-objection-path.md`
- `agency-ops/ops/outreach-learning-log.md`

## Sequence Gate

Before this batch moves to mailbox drafts, confirm one of these is true:

- First batch was sent and early signal is ready to review.
- First batch was intentionally held and the user wants to review the second batch instead.
- The user explicitly approves creating second-batch drafts for review only.

If none of those is true, keep this batch in preparation mode and do not create mailbox drafts.

## Decision Tree

### If Second-Batch Draft Creation Is Approved

Allowed action:

- Create Outlook drafts for Southern Botanical, Prestonwood Landscape Services, and Dane Roofing for review only.

Required constraints:

- Do not send.
- Use the second-batch draft-review checklist before creating drafts.
- Keep the copy focused on quote, estimate, contact-intake visibility, and workflow mapping.
- Do not add final pricing, calendar invites, claims of missed revenue, or auto-send language.
- Report which drafts were created and which mailbox was used.
- Ask for the next decision: send, revise, hold, switch mailbox, or delete/ignore drafts.

### If Sending Is Approved Later

Allowed action:

- Send only the explicitly approved second-batch messages from the confirmed mailbox.

Before sending, confirm:

- Recipient address for each prospect.
- Final subject and body.
- Sender mailbox.
- Send date and timezone.
- Follow-up timing.
- Whether follow-ups are draft-only or send-approved.

After sending, update:

- Individual lead records.
- Six-lead follow-up tracker.
- Pipeline summary, if present.
- Outreach learning log.
- Current command brief if status changes materially.

### If No Reply After 3 Business Days

Default action:

- Prepare follow-up drafts only, unless follow-up sending was explicitly approved.

Follow-up positioning:

- Keep it short.
- Stay connected to quote, estimate, or contact-intake workflow visibility.
- Do not imply the business is missing requests.
- Do not quote pricing.
- Do not include a calendar invite unless approved.

Recommended follow-up structure:

```markdown
Subject: Re: [original subject]

Hi [Business] team,

Just following up on this. The quick win I usually look for is whether quote or estimate requests are being sorted manually between forms, phone calls, inboxes, calendars, or notes.

If that is happening, a small workflow can usually make the next step clearer without changing the whole way the business operates.

Worth a quick look?

Best,
Jameson
```

### If A Positive Reply Arrives

Default action:

- Do not jump to a proposal or price.
- Classify the reply with the Dallas reply-triage board.
- Update the lead record.
- Use the discovery-to-proposal handoff checklist.

Possible next stage:

- `qualification-in-progress`
- `discovery-needed`
- proposal-outline-ready only if enough facts are included

### If A Pricing Question Arrives

Default action:

- Use the Lead Intake pricing-request response path.
- Do not quote final pricing from the first reply.
- Route the conversation toward the smallest appropriate scope path.

Possible next stage:

- `qualification-in-progress`
- `discovery-needed`
- proposal-outline-ready only if scope is clear

### If A Call Request Arrives

Default action:

- Use the wants-a-call response path.
- Do not send a calendar invite unless approved.
- Prepare a call agenda tied to the prospect's intake pattern.

Possible next stage:

- `discovery-needed`
- `qualification-in-progress`

### If A CRM/Tool Objection Arrives

Default action:

- Use the already-has-CRM objection path.
- Respect the current system.
- Position the work as improving routing, follow-up ownership, or visibility around what already exists.
- Do not recommend replacing the tool unless separately approved.

Possible next stage:

- `discovery-needed`
- `nurture`
- proposal-outline-ready only if a clear gap is confirmed

### If A Clear No Arrives

Default action:

- Do not argue.
- Mark the lead `closed-lost` or `nurture`, depending on tone and future relevance.
- Record the reason.
- Do not follow up unless the reply invites it.

## Prospect-Specific Follow-Up Notes

| Prospect | First email angle | Follow-up emphasis | Avoid |
| --- | --- | --- | --- |
| Southern Botanical | Rich quote form with property type, service interest, budget, contact preference, and consent signals | Routing clarity and quote-status visibility | Saying the form is too complex or that requests are being missed |
| Prestonwood Landscape Services | Commercial request-a-quote process with property type, service interest, budget, address, and best time to call | Best-time-to-call follow-up visibility and commercial opportunity tracking | Suggesting a CRM replacement or sales-team criticism |
| Dane Roofing | Residential, commercial, and storm-damage inquiry classification | Inspection or estimate follow-up visibility | Insurance advice, urgency claims, or storm-damage handling promises |

## Follow-Up Due-Date Logic

If a first email is sent, calculate follow-up due date as:

- 3 business days after send date.
- Skip weekends.
- If a reply arrives before follow-up due date, pause no-reply follow-up.
- If the reply asks a question, move to reply handling instead of no-reply follow-up.

Example:

| Send day | Default follow-up due |
| --- | --- |
| Monday | Thursday |
| Tuesday | Friday |
| Wednesday | Monday |
| Thursday | Tuesday |
| Friday | Wednesday |

## Lead Record Update Template

Use after a second-batch draft, send, follow-up, or reply decision:

```markdown
## Outreach Status Update

- Date:
- Prospect:
- Batch: Dallas second batch
- Action taken: draft created / sent / follow-up draft created / follow-up sent / held
- Mailbox:
- Sender:
- Recipient:
- Message version:
- Follow-up due:
- Reply status: no reply / positive / pricing / call request / CRM objection / not interested / referral
- Current stage:
- Next action:
- Approval gate still needed:
```

## Tracker Update Fields

Update the six-lead tracker with:

- Draft status.
- Send status.
- Date sent.
- Follow-up due date.
- Reply category.
- Current stage.
- Next action.
- Owner.
- Notes from first-batch learning, if any.

## Learning Log Entry Template

Use after draft review, send, reply, no-reply, or follow-up:

```markdown
## Outreach Learning Entry

- Date:
- Prospect:
- Batch: Dallas second batch
- Event type: draft review / sent / reply / no reply / follow-up / objection
- Message angle:
- What happened:
- Signal quality:
- Copy lesson:
- Offer lesson:
- Process lesson:
- Asset to update:
- Next action:
```

## Second-Batch Follow-Up Readiness Table

| Prospect | First email status | Follow-up status | Follow-up due logic | Reply route if response arrives |
| --- | --- | --- | --- | --- |
| Southern Botanical | Not sent | Not approved | 3 business days after approved send | Discovery, pricing, call, CRM objection, nurture, or close |
| Prestonwood Landscape Services | Not sent | Not approved | 3 business days after approved send | Discovery, pricing, call, CRM objection, nurture, or close |
| Dane Roofing | Not sent | Not approved | 3 business days after approved send | Discovery, pricing, call, CRM objection, nurture, or close |

## Approval Gates

Do not proceed without explicit action-level approval for:

- Creating mailbox drafts.
- Sending the first email.
- Sending a follow-up.
- Sending a pricing response.
- Sending a proposal.
- Scheduling a call or sending a calendar invite.
- Quoting final pricing.
- Selecting a paid tool, CRM, form provider, or automation vendor.
- Publishing proof, screenshots, testimonials, metrics, or case-study claims.
- Enabling auto-send behavior.
- Changing deployment, DNS, environment variables, or launch status.
- Touching any repository outside `KelvarLLC/Business1`.

## Recommended Next Prompt

When asking for the next gated action for this batch, use:

> Second-batch option: create Outlook drafts for Southern Botanical, Prestonwood Landscape Services, and Dane Roofing for review only. I will not send them. Follow-up sending will remain separate and unapproved unless you explicitly approve it later.

## Safe Continuation If Still Not Approved

If mailbox draft creation or sending remains unapproved, continue with:

1. Internal reply templates for Dallas reply categories.
2. Website/intake QA readiness.
3. Stage 1 intake handler comparison readiness.
4. Proposal/delivery packaging improvements.
5. Outreach learning-log structure improvements.

## Operator Rule

Broad permission to keep going means continue repo-scoped preparation, QA, documentation, and operating-system automation. It does not approve outbound messages, follow-ups, pricing, scheduling, deployment, provider selection, public proof, auto-send behavior, or cross-repository actions.
