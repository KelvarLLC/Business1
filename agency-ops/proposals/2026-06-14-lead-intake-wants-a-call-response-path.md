# Lead Intake Wants-A-Call Response Path

Last updated: 2026-06-14 03:05 CDT

## Status And Guardrails

This is an internal, simulation-ready operating artifact for the Lead Intake Command System / Follow-Up Engine.

Use it when a prospect replies with a call request such as "Can we talk?", "Call me," or "Let's set up a time."

This is not:

- a real prospect reply,
- a sent response,
- a mailbox draft,
- a calendar invite,
- a proposal,
- a pricing quote,
- a delivery commitment,
- or approval to contact anyone.

Do not schedule, send, call, or create a mailbox draft from this artifact without explicit action-level approval.

## Simulated Trigger

Possible replies:

```text
Can we talk about this?
```

```text
Call me next week.
```

```text
Let's set up a time.
```

Reply category:

- Category 2: Wants A Call.

Pipeline interpretation:

- A call request is a strong buying or curiosity signal.
- Move the lead to `discovery-needed` once the request is real.
- The next step is scheduling and discovery prep, not pricing or proposal.

## Immediate Response Goal

The response should:

- accept the call request,
- keep the call short and diagnostic,
- clarify the purpose of the call,
- ask for two or three available times,
- avoid quoting price or promising scope,
- avoid suggesting a full CRM rebuild.

The response should not:

- send a calendar invite without approval,
- commit to a delivery timeline,
- quote pricing,
- promise technical compatibility,
- offer auto-send behavior as the default,
- or ask for sensitive customer data.

## Draft-Only Response

Use only as internal draft copy until the user explicitly approves mailbox draft creation or sending.

```text
Subject: Re: estimate follow-up

Hi [Name],

Yes, happy to talk. A short call is enough for the first pass.

The main things I would want to understand are where new requests arrive, who handles first response, what gets copied or tracked manually, and what kind of follow-up timing matters most.

What are two or three times that work for you this week?

Best,
Jameson
Kelvar LLC
```

## Scheduling Intake Fields

If a real call request arrives, capture:

- Prospect name.
- Business name.
- Reply date.
- Requested call timing.
- Time zone if not obvious.
- Preferred contact method.
- Phone number if provided.
- Whether another stakeholder should attend.
- Whether the call should focus on one intake path or several.

Do not store private customer data or credentials.

## Discovery Prep Checklist

Before the call, review:

- Lead record.
- Original outreach draft.
- Public website signals, if already recorded.
- Lead readiness packet.
- Six-lead follow-up tracker.
- Home-services discovery call script.
- Scope menu.
- Proposal decision scorecard.
- Relevant objection paths: pricing, CRM/tool, sensitive data.

Prepare a short call objective:

> Identify whether the prospect has a lead intake, routing, or follow-up visibility gap worth solving with a narrow first phase.

## Minimum Questions For The Call

Use `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md` as the full call guide.

Minimum first-pass questions:

1. Where do most new estimate or service requests come in today?
2. Who sees a new request first?
3. What tool tracks whether a lead has been contacted?
4. What happens when the lead does not respond?
5. Where do leads most often get stuck?
6. What would make the first small version useful without disrupting the team?

## Lead Record Update Shape

Add this to the relevant lead record if a real wants-a-call reply arrives.

```markdown
## Reply Update - YYYY-MM-DD

- Reply category: wants a call
- Summary: Prospect asked to discuss the Lead Intake / Follow-Up Engine by call.
- Current stage: discovery-needed
- Buying signal: call request
- Tool/system mentioned: unknown / [tool]
- Pain confirmed: not yet / [known pain]
- Missing information: intake source, tracker, owner, follow-up timing, first-win scope
- Recommended response: ask for two or three available times and keep call diagnostic
- Likely scope-menu path: unknown until discovery
- Next action: approved scheduling response or approved mailbox draft
- Follow-up due: after approved response path
```

## Tracker Update Shape

If this were real, update the six-lead tracker like this:

| Field | Value |
| --- | --- |
| Reply status | wants-a-call |
| Pipeline stage | discovery-needed |
| Next action | approved scheduling response |
| Discovery prep | required |
| Proposal readiness | discovery-needed |
| Guardrail | no price, proposal, or timeline committed |

## Call Outcome Classifier

After the call, classify the lead:

### Outcome A: No Clear Pain

Use when:

- Prospect is curious but no intake/follow-up gap is confirmed.
- Existing system works well.
- No owner, urgency, or first-win path exists.

Pipeline move:

- `nurture` or `closed-lost`.

### Outcome B: Discovery Still Needed

Use when:

- Pain seems real but current tools, owner, source, or follow-up rhythm remain unclear.

Pipeline move:

- `discovery-needed`.

Next action:

- Ask for missing facts or examples.

### Outcome C: Proposal Outline Ready

Use when:

- Primary source is known.
- Tracker/tool is known.
- Owner is known.
- First-win direction is clear.
- Some details remain open.

Pipeline move:

- `proposal-outline-ready`.

Next action:

- Create a bounded proposal outline, not a final proposal.

### Outcome D: Proposal Draft Ready

Use when:

- Source, tracker, owner, follow-up timing, desired message behavior, scope boundaries, and first win are clear.

Pipeline move:

- `proposal-draft-ready`.

Next action:

- Use proposal assembly kit after pricing and send guardrails are confirmed.

## Post-Call Summary Template

Use this after a real discovery call.

```markdown
## Discovery Call Summary - YYYY-MM-DD

- Prospect:
- Attendees:
- Current intake sources:
- Primary source to focus on:
- Current tracker/tool:
- First response owner:
- Current follow-up rhythm:
- Confirmed pain:
- First-win candidate:
- Scope-menu path:
- Proposal-readiness classification:
- Missing information:
- Recommended next action:
- Guardrails:
```

## Safe Follow-Up Structure

Use only as repo draft or mailbox draft after action-level approval.

```text
Subject: Workflow notes from our call

Hi [Name],

Thanks for walking me through how requests move today.

The simple version of what I heard is:

- Main intake source: [source]
- Current tracking tool: [tool]
- First response owner: [owner]
- Main follow-up gap: [gap]
- Best first win: [first win]

My recommendation would be to keep the first phase narrow around [specific path]. I would not start with a full CRM rebuild or automatic customer messages.

The next useful step would be [next action].

Best,
Jameson
Kelvar LLC
```

## Failure Modes To Avoid

- Treating a call request as proposal-ready before discovery.
- Sending a calendar invite without approval.
- Quoting price on the call without approved pricing context.
- Promising delivery timing without scope and approval.
- Letting the call turn into a full CRM rebuild conversation.
- Requesting private customer data or credentials.
- Forgetting to update the lead record and tracker after the call.

## Related Files

- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/workflows/lead-intake-discovery-outline.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/proposals/2026-06-14-lead-intake-already-has-crm-objection-path.md`
- `agency-ops/ops/autonomous-safe-run-queue.md`
