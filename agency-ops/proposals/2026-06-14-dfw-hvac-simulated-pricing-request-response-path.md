# DFW HVAC Simulated Pricing Request Response Path

Last updated: 2026-06-14 02:56 CDT

## Status And Guardrails

This is a simulation-only operating artifact for the Lead Intake Command System / Follow-Up Engine.

It models what the agency should do if a Dallas/Fort Worth home-services prospect asks, "How much does this cost?" before enough scope is known.

This is not:

- a real prospect reply,
- sent outreach,
- a mailbox draft,
- a proposal,
- a pricing quote,
- public package pricing,
- a client commitment,
- a payment request,
- public proof,
- or approval to send anything.

Do not quote final pricing from this artifact. Use it to qualify scope before price.

## Simulated Trigger

Fictional prospect: DFW HVAC-style home-services company.

Fictional reply:

```text
How much does something like this cost?
```

Reply category:

- Category 3: asks for pricing.

Pipeline interpretation:

- Pricing interest is a buying signal.
- The lead is not proposal-ready unless scope facts are known.
- Move or keep the lead at `qualification-in-progress`.
- Next move is scope clarification, not a final quote.

## Immediate Response Goal

The response should:

- acknowledge the pricing question directly,
- avoid dodging,
- explain why scope matters,
- offer the smallest useful project shape,
- ask for the minimum facts needed to produce a realistic scope,
- keep the conversation moving toward discovery or a scoped outline.

The response should not:

- quote a final price,
- publish package pricing,
- imply a guaranteed result,
- promise a timeline,
- offer auto-send as the default,
- or send a proposal before the workflow is understood.

## Draft-Only Response

Use only as internal draft copy until the user explicitly approves creating a mailbox draft or sending.

```text
Subject: Re: estimate follow-up

Hi [Name],

Good question. I would want to avoid guessing before I understand the workflow.

For this kind of project, cost depends mostly on whether the first step is just mapping the process, building one intake path into a tracker, or adding follow-up reminders around a system you already use.

The smallest useful version is usually one primary lead source, one tracker, and one follow-up rhythm. If you can tell me where requests come in today and what tool you use to track them, I can give you a more realistic scope.

A few quick questions would help:

1. Where do most new estimate or service requests come in now?
2. What tool, if any, tracks whether a lead has been contacted?
3. Who owns first response?
4. Are you looking for internal reminders, draft replies, or fully automated sends?

Best,
Jameson
Kelvar LLC
```

## Required Scope Facts Before Pricing

Minimum facts:

- Primary lead source.
- Current tracker of record.
- First-response owner.
- Current follow-up process.
- Desired follow-up behavior: internal reminders, draft replies, or auto-send.
- Any existing CRM or scheduling tool.
- Whether only one location/team is involved.
- Whether sensitive or regulated data is involved.

Recommended discovery questions:

1. Where do new requests arrive today?
2. Who checks them first?
3. What happens when the lead is not contacted quickly?
4. What tool do you already use to track the lead?
5. Are missed leads mostly a capture problem, a routing problem, or a follow-up problem?
6. What should stay human-reviewed?
7. What would make the first version useful within one week of launch?

## Scope Path Classifier

Use `agency-ops/offers/lead-intake-scope-menu.md` after collecting facts.

Likely paths:

### Path A: Workflow Map Only

Use when:

- Prospect is curious but not ready to build.
- Current tools are unclear.
- They need a diagnosis before deciding.

Output:

- Workflow map.
- Intake sources inventory.
- Bottleneck summary.
- Recommended phase-one build.

Pricing status:

- Do not quote final price in this simulation.

### Path B: Single-Source Lead Intake Build

Use when:

- One primary source is known.
- A tracker destination is available.
- First-response owner is clear.
- Follow-up rhythm can start with internal reminders.

Output:

- Intake capture from one source.
- Lead tracker structure.
- Status model.
- Owner and next-action fields.
- Follow-up due prompts.
- Handoff notes.

Pricing status:

- Requires user-approved pricing defaults or client-specific proposal approval before quoting.

### Path C: Follow-Up Visibility Upgrade Around Existing CRM

Use when:

- Prospect already uses a CRM or field-service platform.
- The issue is stale leads, owner visibility, or reminders around the existing tool.

Output:

- Gap map around current tool.
- Follow-up dashboard or review queue.
- Reminder/task rules.
- Manual override and pause process.

Pricing status:

- Requires confirmed tool, access, and scope before quoting.

### Path D: Not Ready / Nurture

Use when:

- Prospect asks for price only but will not share workflow facts.
- They are not experiencing the problem.
- They want a full CRM rebuild or unrelated work.

Output:

- Polite scope clarification.
- No proposal yet.
- Move to nurture or close-lost based on fit.

## Lead Record Update Shape

Add this to the relevant lead record if a real pricing reply arrives.

```markdown
## Reply Update - YYYY-MM-DD

- Reply category: asks for pricing
- Summary: Prospect asked how much the Lead Intake / Follow-Up Engine costs before scope was known.
- Current stage: qualification-in-progress
- Buying signal: direct pricing question
- Tool/system mentioned: unknown
- Pain confirmed: not yet confirmed beyond interest in cost
- Missing information: primary source, tracker, owner, follow-up process, desired automation level
- Recommended response: acknowledge pricing and ask scope questions before quoting
- Likely scope-menu path: unknown until discovery; likely Path A or B
- Next action: send approved clarification response or create approved mailbox draft
- Follow-up due: after user-approved response path
```

## Proposal Readiness Check

Do not create a client-specific proposal until at least four of these are known:

- Primary lead source.
- Tracker destination.
- First-response owner.
- Follow-up timing.
- Current tool or CRM.
- Desired message behavior.
- Service area or qualification rule.
- One clear first-win outcome.

Proposal-readiness classification:

- Fewer than four facts: discovery-needed.
- Four or more facts but no build boundaries: proposal-outline-ready.
- Facts plus source, tracker, owner, timing, and first-win: proposal-draft-ready.

## Internal Notes For Operator

Pricing-request replies can be high-intent, but they are also risky because the agency can accidentally create a bad anchor or overpromise.

Default move:

1. Acknowledge the question.
2. Explain scope drivers.
3. Ask minimum discovery questions.
4. Classify likely package path.
5. Draft proposal only after enough facts are known.
6. Quote price only after user approval.

## Tracker Update Shape

If this were real, update the six-lead tracker like this:

| Field | Value |
| --- | --- |
| Reply status | pricing-request |
| Pipeline stage | qualification-in-progress |
| Next action | approved pricing-clarification response or discovery ask |
| Proposal readiness | discovery-needed |
| Risk | premature pricing / insufficient scope |
| Follow-up due | after approved response |
| Guardrail | no final price quoted |

## Related Files

- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/proposals/2026-06-14-dfw-hvac-simulated-positive-reply-to-proposal-path.md`
- `agency-ops/ops/30-day-execution-sprint-board.md`
