# Dallas Internal Reply Templates

Date: 2026-06-14
Status: Internal reply-template kit
Workspace: `agency-ops/`
Campaign: Lead Intake Command System / Follow-Up Engine
Leads: DFW HVAC, Cool Tech, Lone-Star Roof Systems, Southern Botanical, Prestonwood Landscape Services, Dane Roofing

## Purpose

Prepare safe internal response templates for likely Dallas campaign replies before any outreach is sent.

These templates are designed for review and adaptation only. They help the operator respond consistently if a prospect is interested, asks for a call, asks for pricing, mentions an existing CRM/tool, declines, refers another contact, raises sensitive-data concerns, asks about auto-send behavior, or requests work outside the current offer.

This is not a mailbox draft, sent response, follow-up approval, price quote, proposal, calendar invite, provider recommendation, deployment action, public proof, client commitment, or auto-send approval.

## Operating Rules

- Use the Dallas reply-triage board before choosing a template.
- Update the relevant lead record and six-lead tracker before or immediately after drafting a reply.
- Treat every template as draft-only until the user approves the exact response.
- Keep each reply tied to the workflow-map offer.
- Do not quote final pricing.
- Do not send calendar links or invites unless approved.
- Do not recommend paid tools, CRMs, form handlers, or vendors unless approved.
- Do not promise auto-send behavior, guaranteed revenue, legal compliance, insurance handling, or customer-contact automation.

## Source Files

- `agency-ops/leads/2026-06-14-dallas-reply-triage-board.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/2026-06-14-lead-intake-discovery-to-proposal-handoff-checklist.md`
- `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-wants-a-call-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-already-has-crm-objection-path.md`
- `agency-ops/leads/2026-06-14-dallas-first-send-follow-up-decision-packet.md`
- `agency-ops/leads/2026-06-14-dallas-second-send-follow-up-decision-packet.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`

## Template Selection Table

| Reply category | Use this template | Stage direction | Required gate |
| --- | --- | --- | --- |
| Interested / curious | Template 1 | `qualification-in-progress` or `discovery-needed` | Send approval |
| Wants a call | Template 2 | `discovery-needed` | Send/calendar approval |
| Pricing question | Template 3 | `qualification-in-progress` or `discovery-needed` | Pricing/send approval |
| Already has CRM/tool | Template 4 | `qualification-in-progress`, `discovery-needed`, or `nurture` | Send/tool approval |
| Not interested | Template 5 | `closed-lost` or `nurture` | Send approval if responding |
| Referral / wrong contact | Template 6 | `lead-identified` or `qualification-in-progress` | Send approval |
| Sensitive data / compliance | Template 7 | `discovery-needed` with risk flag | Human review/send approval |
| Auto-send request | Template 8 | `discovery-needed` with safety flag | Auto-send/send approval |
| Out-of-scope request | Template 9 | `nurture` or `closed-lost` | Send approval |
| Positive but vague | Template 10 | `discovery-needed` | Send approval |

## Template 1: Interested / Curious

Use when the prospect asks what the workflow map would include or says the idea may be useful.

```text
Subject: Re: [original subject]

Hi [Name],

Absolutely. The first step I would suggest is a quick workflow map, not a big platform rebuild.

For a service business, I would usually look at where new requests come in, who sees them first, what details need to be captured, and what should happen if the lead has not been contacted or followed up with by the expected time.

A few useful questions:

1. Where do most new quote or estimate requests come in today?
2. Who is responsible for the first response?
3. What tool, if any, tracks whether a lead has been contacted?
4. When should a follow-up reminder happen if the lead does not respond?

If it helps, I can use those answers to outline the smallest useful version of the workflow.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Route through `agency-ops/proposals/2026-06-14-lead-intake-discovery-to-proposal-handoff-checklist.md`.
- Update the lead stage to `qualification-in-progress` or `discovery-needed`.

## Template 2: Wants A Call

Use when the prospect asks to talk, meet, or schedule.

```text
Subject: Re: [original subject]

Hi [Name],

Yes, happy to talk. A short call is enough for the first pass.

The main things I would want to understand are where new requests arrive, who handles first response, what gets copied or tracked manually, and what kind of follow-up timing matters most.

What are two or three times that work for you this week?

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Use `agency-ops/proposals/2026-06-14-lead-intake-wants-a-call-response-path.md`.
- Do not send a calendar invite or booking link unless explicitly approved.
- Prepare the home-services discovery call script before the call.

## Template 3: Pricing Question

Use when the prospect asks how much it costs or asks for pricing.

```text
Subject: Re: [original subject]

Hi [Name],

Good question. I would want to avoid guessing before I understand the workflow.

For this kind of project, price depends mostly on whether the right first step is mapping the process, building one intake path, or adding a follow-up layer around a tracker you already use.

The smallest useful version is usually one primary lead source, one tracker, and one follow-up rhythm. If you can tell me where requests come in today and what tool you use to track them, I can give you a more realistic scope.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Use `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`.
- Record pricing interest as a buying signal.
- Do not quote final pricing without approval and sufficient scope facts.

## Template 4: Already Has CRM / Tool

Use when the prospect says they already use a CRM, dispatch platform, field-service tool, form system, or internal tracker.

```text
Subject: Re: [original subject]

Hi [Name],

That makes sense. If the current system is already handling capture, routing, and follow-up cleanly, there may not be much to fix.

Where I can sometimes help is around the edges: missed form submissions, stale leads, reminders that are not being checked, or owner/admin visibility into what is waiting on follow-up.

If any of those are still a pain, I can map the gap around the system you already use. If not, no worries at all.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Use `agency-ops/proposals/2026-06-14-lead-intake-already-has-crm-objection-path.md`.
- Record the named tool.
- Do not recommend replacing the tool unless separately approved.

## Template 5: Not Interested

Use when the prospect clearly declines.

```text
Subject: Re: [original subject]

Hi [Name],

Understood. Thanks for taking a look, and I will not keep following up on this.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Mark the lead `closed-lost` unless there is a clear nurture reason.
- Record the reason as `not interested` or the specific reason given.
- Do not send any further follow-up unless the prospect invites it.

## Template 6: Referral / Wrong Contact

Use when the prospect says someone else is the right person or forwards the thread.

```text
Subject: Re: [original subject]

Hi [Name],

Thanks for letting me know. Is there someone better to contact about lead intake or estimate follow-up workflows?

If not, no problem, and I will close the loop here.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Update the contact channel if a new contact is provided.
- Draft any new-contact message internally first.
- Do not contact the referred person until the outreach path is reviewed and approved.

## Template 7: Sensitive Data / Compliance Concern

Use when the prospect mentions regulated data, insurance, legal, medical, financial, customer privacy, consent, or compliance-heavy messaging.

```text
Subject: Re: [original subject]

Hi [Name],

That is an important point. I would not want to automate anything involving sensitive or regulated information without a careful review of what data is involved, who should see it, and what should remain human-reviewed.

If we looked at this, I would start conservatively with an internal workflow: tracking status, owner, and next action without auto-sending sensitive messages or making compliance assumptions.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Add a risk flag to the lead record.
- Keep any proposal conservative and human-reviewed.
- Do not provide legal, insurance, privacy, or compliance advice.

## Template 8: Auto-Send Request

Use when the prospect asks if the system can automatically text, email, or follow up with customers.

```text
Subject: Re: [original subject]

Hi [Name],

It can be designed that way later, but I would not start there by default.

The safer first version is usually internal routing and reminders: making sure the right person sees the request, knows the next step, and has visibility into anything waiting on follow-up.

Customer-facing auto-send behavior should be reviewed separately so the business stays in control of tone, timing, consent, and edge cases.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Mark the reply with an auto-send safety flag.
- Do not enable, promise, or scope auto-send behavior without explicit approval.
- Route through proposal QA before any proposal language mentions auto-send.

## Template 9: Out-Of-Scope Request

Use when the prospect asks for ads, SEO, broad IT support, full CRM migration, legal/insurance handling, or work outside the Lead Intake offer.

```text
Subject: Re: [original subject]

Hi [Name],

That is probably outside the first workflow I was suggesting.

The narrow piece I can help assess is lead intake and follow-up visibility: where requests arrive, who owns the next step, and what gets tracked manually.

If that smaller workflow is still useful, I can map it. If the main need is broader than that, it may be better to start with a different specialist or a larger systems review.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Decide whether to narrow to the Lead Intake scope or mark the lead nurture/closed-lost.
- Do not expand scope into unrelated services without a separate business decision.

## Template 10: Positive But Vague

Use when the prospect says yes, sure, or interested but provides no details.

```text
Subject: Re: [original subject]

Hi [Name],

Great. To keep it useful and not overbuild it, I would start with a few basics.

1. What is the main source of new quote or estimate requests today?
2. Where do those requests land first?
3. Who is responsible for the first response?
4. What follow-up step is easiest to lose track of?
5. Is there already a tracker, CRM, inbox label, or spreadsheet involved?

With those answers, I can sketch the smallest workflow map that would actually be worth considering.

Best,
Jameson
Kelvar LLC
```

Internal next action:

- Move to `discovery-needed`.
- Use the discovery-to-proposal handoff checklist.
- Do not move to proposal until the minimum discovery facts are known.

## Industry-Specific Insert Options

Use one insert only when it matches the prospect and keeps the reply shorter, not longer.

### HVAC / Refrigeration

```text
For HVAC or refrigeration requests, I would mostly want to understand whether service type, urgency, location, and first-response ownership are visible in one place.
```

### Roofing

```text
For roofing requests, I would mostly want to understand whether residential, commercial, storm-damage, inspection, and estimate follow-up are routed differently today.
```

### Landscaping

```text
For landscaping requests, I would mostly want to understand whether property type, service interest, budget range, and best time to call are used to route or prioritize follow-up.
```

## Lead Record Update Block

Use this after selecting any template:

```markdown
## Reply Template Prep - [YYYY-MM-DD]

- Reply category:
- Selected template:
- Prospect-specific insert used:
- Current stage before reply:
- Recommended stage after reply:
- Missing facts requested:
- Approval needed before send:
- Related route artifact:
- Tracker update needed:
- Learning-log update needed:
```

## Guardrail

These templates are internal operating assets only. They do not authorize mailbox draft creation, sending, follow-up sending, pricing, proposal sending, calendar scheduling, provider/tool selection, deployment work, public proof, auto-send behavior, or cross-repository action.
