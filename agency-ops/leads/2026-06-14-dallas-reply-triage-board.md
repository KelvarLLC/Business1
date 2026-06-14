# Dallas Reply Triage Board

Date: 2026-06-14
Status: Internal reply triage board
Workspace: `agency-ops/`
Campaign: Lead Intake Command System / Follow-Up Engine
Leads: DFW HVAC, Cool Tech, Lone-Star Roof Systems, Southern Botanical, Prestonwood Landscape Services, Dane Roofing

## Purpose

Give the agency a fast, safe routing board for any reply that comes from the Dallas home-services outreach campaign.

This board maps reply types to the correct operating artifact, lead-stage update, next action, and approval gate. It is designed to prevent accidental overreach after a prospect responds.

This is an internal operating artifact only. It is not a sent response, mailbox draft, follow-up approval, proposal, price quote, calendar invite, deployment action, public proof, or auto-send approval.

## Current Status

- Outreach sent: no.
- Mailbox drafts created: no.
- Follow-ups sent: no.
- Reply monitoring active: not applicable until outreach is approved and sent.
- Recommended first gated action remains: create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only.

## Source Files

- `agency-ops/workflows/outreach-execution-control-sheet.md`
- `agency-ops/leads/2026-06-14-dallas-first-batch-draft-review-checklist.md`
- `agency-ops/leads/2026-06-14-dallas-first-send-follow-up-decision-packet.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/2026-06-14-lead-intake-discovery-to-proposal-handoff-checklist.md`
- `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-wants-a-call-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-already-has-crm-objection-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-proposal-draft-internal-qa-checklist.md`
- `agency-ops/ops/outreach-learning-log.md`

## Triage Rule

When a reply arrives:

1. Do not answer immediately from the mailbox unless a response has already been explicitly approved.
2. Classify the reply using this board.
3. Update the lead record and six-lead tracker.
4. Draft the safest next response internally, if needed.
5. Use the matching route artifact before creating any mailbox draft or sending anything.
6. Preserve the approval gate for sends, pricing, calendar invites, proposals, and provider/tool decisions.

## Reply Categories

| Reply Category | Signal | Stage Update | Route Artifact | Default Next Action | Approval Gate |
| --- | --- | --- | --- | --- | --- |
| Interested / curious | Prospect asks for more detail or says this may be useful | `qualification-in-progress` or `discovery-needed` | Discovery-to-proposal handoff checklist | Ask focused discovery questions or prep call agenda | Send response approval |
| Wants a call | Prospect asks to talk, meet, or schedule | `discovery-needed` | Wants-a-call response path | Prepare call agenda and scheduling response | Calendar/send approval |
| Pricing question | Prospect asks cost, package, or rate | `discovery-needed` unless scope is clear | Pricing-request response path | Ask scope questions; do not quote final price | Pricing/send approval |
| Already has CRM/tool | Prospect says they use CRM, dispatch, field-service software, or forms | `discovery-needed` or `nurture` | Already-has-CRM objection path | Position around current tool handoff and gaps | Send/tool recommendation approval |
| Not interested | Prospect says no, not now, remove, or stop | `closed-lost` or `nurture` | Reply response kit | Acknowledge only if useful and approved | Send approval if responding |
| Referral | Prospect forwards to another person or names the right contact | `qualification-in-progress` | Reply response kit and discovery handoff | Draft intro to referred contact | Send approval |
| Sensitive data / compliance | Prospect mentions regulated data, legal, insurance, customer privacy, or consent-heavy automation | `discovery-needed` with risk flag | Discovery handoff and proposal QA checklist | Ask clarifying questions; avoid advice | Human review/send approval |
| Vendor/tool request | Prospect asks what software to buy or whether to replace system | `discovery-needed` | CRM objection path and Stage 1 decision style gates | Avoid recommending paid provider prematurely | Tool/provider approval |
| Auto-send request | Prospect wants automatic texting/emailing leads | `discovery-needed` with safety flag | Reply kit and proposal QA checklist | Start with internal routing/reminders; separate auto-send review | Auto-send approval |
| Positive but vague | Prospect says yes but gives no details | `discovery-needed` | Discovery-to-proposal handoff checklist | Ask 3-5 focused questions | Send approval |
| Out-of-scope request | Prospect asks for ads, SEO, full CRM migration, legal/insurance handling, or broad IT work | `nurture` or `closed-lost` | Scope menu and proposal QA checklist | Decline, narrow, or refer internally | Send approval |

## First Response Drafting Rules

All reply drafts should:

- Thank the prospect briefly.
- Reflect the specific thing they asked.
- Ask for the minimum next facts needed.
- Keep the next step small.
- Avoid pricing unless pricing is explicitly approved.
- Avoid calendar links unless scheduling is explicitly approved.
- Avoid claiming the prospect has missed leads unless they said so.
- Avoid tool replacement promises.
- Avoid auto-send promises.
- Avoid legal, insurance, compliance, or revenue guarantees.

## Classification Examples

### Interested / Curious

Example reply:

> This sounds useful. What would the workflow map include?

Classification:

- Category: Interested / curious
- Stage: `discovery-needed`
- Next action: ask which lead source matters most, where it lands today, who responds first, and what follow-up currently looks like
- Route: discovery-to-proposal handoff checklist

### Wants A Call

Example reply:

> Sure, can we jump on a call next week?

Classification:

- Category: Wants a call
- Stage: `discovery-needed`
- Next action: prepare call objective and scheduling response draft
- Route: wants-a-call response path
- Gate: no calendar invite without approval

### Pricing Question

Example reply:

> How much does something like this cost?

Classification:

- Category: Pricing question
- Stage: `discovery-needed`
- Next action: respond that it depends on whether the first step is blueprint, single-source build, or follow-up visibility; ask scope questions
- Route: pricing-request response path
- Gate: no final quote without approval

### Already Has CRM

Example reply:

> We already use ServiceTitan / Jobber / HubSpot / a CRM.

Classification:

- Category: Already has CRM/tool
- Stage: `discovery-needed` or `nurture`
- Next action: respect existing system and ask where handoff/follow-up visibility still gets messy
- Route: already-has-CRM objection path
- Gate: no CRM replacement recommendation without approval

### Not Interested

Example reply:

> Not interested.

Classification:

- Category: Not interested
- Stage: `closed-lost`
- Next action: record reason and stop active pursuit unless a polite acknowledgement is approved
- Route: reply response kit

## Lead Record Update Template

```markdown
## Reply Triage Update

- Date:
- Prospect:
- Reply category:
- Reply summary:
- Current stage before reply:
- Updated stage:
- Route artifact:
- Recommended next action:
- Missing facts:
- Approval gate needed:
- Follow-up due date:
- Tracker updated: yes / no
- Learning log updated: yes / no
```

## Tracker Update Fields

For every reply, update:

- Reply received date.
- Reply category.
- Updated stage.
- Next action.
- Owner.
- Approval gate.
- Follow-up due date or hold status.
- Notes.

## Learning Log Signals

Record useful signals in the outreach learning log:

- Which hook drew the reply.
- Whether the prospect understood the workflow-map offer.
- Objection type.
- Pricing sensitivity.
- Existing-tool pattern.
- Call interest.
- Industry-specific language that should improve future copy.
- Whether the current offer is too broad, too narrow, or correctly framed.

## Proposal Routing After Reply

Only move toward proposal if the reply or discovery call reveals:

- Primary lead source.
- Current destination/tool.
- First response owner.
- Follow-up pain or visibility gap.
- Desired first win.
- Decision-maker path.

Use proposal statuses carefully:

- `discovery-needed`: not enough facts.
- `proposal-outline-ready`: enough facts for outline, missing some scope details.
- `proposal-draft-ready`: enough facts for internal draft.
- `proposal-sent`: only after an approved send actually happens.

Before any client-specific proposal is treated as ready, run:

- `agency-ops/proposals/2026-06-14-lead-intake-proposal-draft-internal-qa-checklist.md`

## Approval Gates

Do not proceed without explicit action-level approval for:

- Creating mailbox reply drafts.
- Sending replies.
- Sending follow-ups.
- Quoting final pricing.
- Sending proposals.
- Scheduling calls or sending calendar invites.
- Recommending paid tools, CRMs, form handlers, or providers.
- Deploying or changing website launch status.
- Publishing proof, testimonials, screenshots, metrics, or case-study claims.
- Enabling auto-send behavior.
- Touching any repository outside `KelvarLLC/Business1`.

## Safe Continuation If No Replies Exist Yet

If outreach remains unsent or no replies exist, use this board to:

1. Pre-check first-batch reply routes.
2. Improve second-batch draft review.
3. Improve discovery questions by industry type.
4. Build reply templates internally.
5. Update lead records only when a real signal exists.

## Operator Rule

Broad permission to keep going means continue repo-scoped preparation, QA, documentation, and operating automation. It does not approve outbound messages, reply sends, follow-ups, pricing, scheduling, proposal sending, provider selection, deployment changes, public proof, auto-send behavior, or cross-repository actions.
