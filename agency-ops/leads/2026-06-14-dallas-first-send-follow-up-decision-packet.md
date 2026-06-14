# Dallas First-Send Follow-Up Decision Packet

Date: 2026-06-14
Status: Internal follow-up decision packet
Workspace: `agency-ops/`
Campaign: Lead Intake Command System / Follow-Up Engine
Batch: DFW HVAC, Cool Tech, Lone-Star Roof Systems

## Purpose

Define what should happen after the first Dallas outreach batch is reviewed, drafted, or eventually sent.

This packet prevents the agency from improvising follow-ups after the first action. It sets the follow-up timing, reply handling, lead-record updates, learning capture, and approval gates before any external message is sent.

This is an internal operating artifact only. It is not a mailbox draft, sent outreach, follow-up approval, price quote, proposal, calendar invite, client commitment, deployment action, public proof, or auto-send approval.

## Current Status

- First-batch prospects: DFW HVAC, Cool Tech, Lone-Star Roof Systems.
- First-batch outreach status: not sent.
- Mailbox draft status: not approved and not created.
- Recommended mailbox if approved later: Outlook / `Kelvarllc.com@outlook.com`.
- Recommended first gated action: create Outlook drafts for review only.
- Recommended send rule: do not send until a second explicit approval.
- Recommended follow-up timing after an approved send: 3 business days after the first email if no reply.

## Source Files

- `agency-ops/workflows/outreach-execution-control-sheet.md`
- `agency-ops/leads/2026-06-13-dallas-home-services-outreach-drafts.md`
- `agency-ops/leads/2026-06-14-dallas-first-batch-revenue-readiness.md`
- `agency-ops/leads/2026-06-14-dallas-first-batch-draft-review-checklist.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/proposals/2026-06-14-lead-intake-discovery-to-proposal-handoff-checklist.md`
- `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-wants-a-call-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-already-has-crm-objection-path.md`
- `agency-ops/ops/outreach-learning-log.md`

## Decision Tree

### If Draft Creation Is Approved

Allowed action:

- Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only.

Required constraints:

- Do not send.
- Apply the small Cool Tech tone edit from the draft-review checklist.
- Keep DFW HVAC and Lone-Star Roof Systems essentially as-is unless the user requests deeper edits.
- Report which drafts were created and which mailbox was used.
- Ask for the next decision: send, revise, hold, switch mailbox, or delete/ignore drafts.

### If Sending Is Approved Later

Allowed action:

- Send only the explicitly approved first-batch messages from the confirmed mailbox.

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
- Stay connected to the original workflow-map question.
- Do not add pricing.
- Do not claim the prospect has a problem.
- Do not include a calendar invite unless approved.

Recommended follow-up structure:

```markdown
Subject: Re: [original subject]

Hi [Business] team,

Just following up on this. The quick win I usually look for is whether new estimate requests are being copied between forms, inboxes, calendars, spreadsheets, or notes by hand.

If that is happening, a small workflow can usually make the next step clearer without changing the whole way the business operates.

Worth a quick look?

Best,
Jameson
```

### If A Positive Reply Arrives

Default action:

- Do not jump to a proposal or price.
- Classify the reply.
- Update the lead record.
- Use the discovery-to-proposal handoff checklist.

Possible next stage:

- `qualification-in-progress`
- `discovery-needed`
- `proposal-outline-ready`, only if enough facts are included

### If A Pricing Question Arrives

Default action:

- Use the Lead Intake pricing-request response path.
- Do not quote final pricing.
- Ask scope-routing questions or suggest a quick workflow review.

Possible next stage:

- `discovery-needed`
- `proposal-outline-ready`, only if scope is clear

### If A Call Request Arrives

Default action:

- Use the wants-a-call response path.
- Do not send a calendar invite unless approved.
- Prepare call agenda and discovery facts.

Possible next stage:

- `discovery-needed`
- `qualification-in-progress`

### If A CRM/Tool Objection Arrives

Default action:

- Use the already-has-CRM objection path.
- Respect the current tool.
- Position the work as improving intake handoff, visibility, or follow-up around existing systems.
- Do not recommend a replacement CRM unless separately approved.

Possible next stage:

- `discovery-needed`
- `nurture`
- `proposal-outline-ready`, only if a clear gap is confirmed

### If A Clear No Arrives

Default action:

- Do not argue.
- Mark the lead `closed-lost` or `nurture`, depending on tone and future relevance.
- Record reason.
- Do not follow up unless the reply invites it.

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

Use after first send or follow-up decision:

```markdown
## Outreach Status Update

- Date:
- Prospect:
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
- Notes.

## Learning Log Entry Template

Use after draft review, send, reply, no-reply, or follow-up:

```markdown
## Outreach Learning Entry

- Date:
- Prospect:
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

## First-Batch Follow-Up Readiness Table

| Prospect | First email status | Follow-up status | Follow-up due logic | Reply route if response arrives |
| --- | --- | --- | --- | --- |
| DFW HVAC | Not sent | Not approved | 3 business days after approved send | Discovery, pricing, call, CRM objection, nurture, or close |
| Cool Tech | Not sent | Not approved | 3 business days after approved send | Discovery, pricing, call, CRM objection, nurture, or close |
| Lone-Star Roof Systems | Not sent | Not approved | 3 business days after approved send | Discovery, pricing, call, CRM objection, nurture, or close |

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

When asking for the next gated action, use:

> Recommended next move: create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only. I will not send them. Follow-up sending will remain separate and unapproved unless you explicitly approve it later.

## Safe Continuation If Still Not Approved

If mailbox draft creation or sending remains unapproved, continue with:

1. Dallas reply-triage board.
2. Second-batch draft-review checklist.
3. Website/intake QA readiness.
4. Proposal/delivery packaging improvements.
5. Outreach learning-log structure improvements.

## Operator Rule

Broad permission to keep going means continue repo-scoped preparation, QA, documentation, and operating-system automation. It does not approve outbound messages, follow-ups, pricing, scheduling, deployment, provider selection, public proof, auto-send behavior, or cross-repository actions.
