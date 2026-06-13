# Lead Intake Reply Response Kit

## Purpose

Use this kit when a prospect replies to lead intake / follow-up outreach or submits the `/start` intake form. It turns replies into safe, consistent next actions without overpromising, rushing to proposal, or losing the pipeline thread.

This kit supports the Lead Intake Command System / Follow-Up Engine offer and should be used with:

- `agency-ops/workflows/outreach-execution-control-sheet.md`
- `agency-ops/workflows/lead-intake-discovery-outline.md`
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/proposals/lead-intake-follow-up-proposal-starter.md`

## Operating Rule

Do not send replies automatically unless the user explicitly approves the exact message. Draft-first is the default.

Every meaningful reply should become a lead-record update before or immediately after the response is drafted.

## Reply Categories

### Category 1: Interested / Curious

Signal examples:

- "Sure, what would that look like?"
- "We might need something like this."
- "Can you send more info?"
- "Yes, leads do get missed sometimes."

Pipeline move:

- Move lead to `qualification-in-progress`.
- If they ask for a call or provide workflow details, move to `discovery-needed`.

Draft response:

```text
Subject: Re: estimate follow-up

Hi [Name],

Absolutely. The first step I would suggest is a quick workflow map, not a big platform rebuild.

I would look at where new requests come in, who sees them first, what details need to be captured, and what should happen if the lead has not been contacted or followed up with by the expected time.

A few useful questions:

1. Where do most new estimate or service requests come in today?
2. Who is responsible for first response?
3. What tool, if any, tracks whether a lead has been contacted?
4. When should a follow-up reminder happen if the lead does not respond?

If it helps, I can use those answers to outline the smallest useful version of the workflow.

Best,
Jameson
Kelvar LLC
```

Next internal action:

- Update the lead record with the reply summary.
- Use `agency-ops/workflows/lead-intake-discovery-outline.md` for the next discovery step.

### Category 2: Wants A Call

Signal examples:

- "Can we talk?"
- "Call me."
- "Let's set up a time."

Pipeline move:

- Move lead to `discovery-needed`.

Draft response:

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

Next internal action:

- Add proposed times or scheduling notes to the lead record.
- Prepare the discovery outline before the call.

### Category 3: Asks For Pricing

Signal examples:

- "How much does this cost?"
- "What do you charge?"
- "Send pricing."

Pipeline move:

- Keep lead at `qualification-in-progress` unless enough scope is known.

Draft response:

```text
Subject: Re: estimate follow-up

Hi [Name],

Good question. I would want to avoid guessing before I understand the workflow.

For this kind of project, price depends mostly on the number of intake sources, where the lead tracker should live, and whether follow-up starts as internal reminders, draft messages, or approved automated messages.

The smallest useful version is usually one primary lead source, one tracker, and one follow-up rhythm. If you can tell me where requests come in today and what tool you use to track them, I can give you a more realistic scope.

Best,
Jameson
Kelvar LLC
```

Next internal action:

- Capture pricing interest as a buying signal.
- Ask for missing scope inputs before drafting a proposal.

### Category 4: Already Has CRM / Tool

Signal examples:

- "We already use ServiceTitan / Jobber / HubSpot / Housecall Pro / a CRM."
- "Our system already handles this."

Pipeline move:

- Keep lead at `qualification-in-progress` if they mention gaps.
- Move to nurture or `closed-lost` if they are clearly satisfied.

Draft response:

```text
Subject: Re: estimate follow-up

Hi [Name],

That makes sense. If the CRM is already handling capture, routing, and follow-up cleanly, there may not be much to fix.

Where I can sometimes help is around the edges: missed form submissions, stale leads, reminders that are not being checked, or owner visibility into what is waiting on follow-up.

If any of those are still a pain, I can map the gap around the system you already use. If not, no worries at all.

Best,
Jameson
Kelvar LLC
```

Next internal action:

- Record the named tool.
- Note whether the lead is a nurture candidate or poor fit.

### Category 5: Not Interested

Signal examples:

- "No thanks."
- "Not interested."
- "We are all set."

Pipeline move:

- Move lead to `closed-lost` unless there is a clear nurture reason.

Draft response:

```text
Subject: Re: estimate follow-up

Hi [Name],

Understood. Thanks for taking a look, and I will not keep following up on this.

Best,
Jameson
Kelvar LLC
```

Next internal action:

- Update the lead record with closed-lost reason: not interested.
- Do not send further follow-ups.

### Category 6: Bad Fit / Wrong Contact

Signal examples:

- "I am not the right person."
- "Please contact someone else."
- "We do not handle that here."

Pipeline move:

- Keep lead at `lead-identified` if a referral is offered.
- Move to `closed-lost` if no path remains.

Draft response:

```text
Subject: Re: estimate follow-up

Hi [Name],

Thanks for letting me know. Is there someone better to contact about lead intake or estimate follow-up workflows?

If not, no problem, and I will close the loop here.

Best,
Jameson
Kelvar LLC
```

Next internal action:

- Update contact channel if a new contact is provided.
- Do not contact a new person until the outreach path is reviewed and approved.

### Category 7: Compliance / Sensitive Data Concern

Signal examples:

- Mentions medical, patient, legal, insurance, financial, or other sensitive data.
- Asks whether the automation can handle regulated information.

Pipeline move:

- Keep lead in `qualification-in-progress` only if a safe, human-reviewed internal workflow is possible.
- Otherwise mark as nurture or poor fit.

Draft response:

```text
Subject: Re: workflow follow-up

Hi [Name],

That is an important point. I would not want to automate anything involving sensitive or regulated information without a careful review of what data is involved, who should see it, and what should remain human-reviewed.

If we looked at this, I would start with a conservative internal workflow: tracking status, owner, and next action without auto-sending sensitive messages or making compliance assumptions.

Best,
Jameson
Kelvar LLC
```

Next internal action:

- Flag sensitive-data concern in the lead record.
- Do not promise compliance advice.
- Keep any proposal conservative and human-reviewed.

## Lead Record Update Template

Use this after any meaningful reply:

```text
## Reply Update - [YYYY-MM-DD]

- Reply category:
- Summary:
- Current stage:
- Buying signal:
- Tool/system mentioned:
- Pain confirmed:
- Missing information:
- Recommended response:
- Next action:
- Follow-up due:
```

## Discovery Handoff Template

Use this when the lead moves to discovery:

```text
## Discovery Prep

- Prospect:
- Current stage: discovery-needed
- Primary suspected workflow:
- Known intake source:
- Known tracker/tool:
- First response owner:
- Follow-up timing mentioned:
- Best first win:
- Open questions:
- Proposal likely: yes/no/unknown
```

## Safety Rules

- Do not imply the prospect has a problem beyond what they confirmed or what was visible on a public page.
- Do not quote a price before understanding primary source, tracker, follow-up mechanism, and scope boundaries.
- Do not offer auto-send behavior as the default.
- Do not claim guaranteed revenue improvement.
- Do not continue follow-up after a clear no.
- Do not contact a referred person without reviewing the new outreach path.

## Current Reuse Path

- Use after any reply to the Dallas home-services outreach batch.
- Use after any `/start` submission that asks about lead intake or follow-up.
- Use before moving a lead to discovery or proposal.
- Use with the discovery outline and workflow spec to keep the first project bounded.
