# Lead Intake Pricing Request Response Path

Date: 2026-06-14
Status: internal operating artifact
Repository scope: `KelvarLLC/Business1`
Workspace scope: `agency-ops/`
Related offer: Lead Intake Command System / Follow-Up Engine

## Purpose

Give the agency a safe, repeatable way to handle a prospect asking, "How much does this cost?" before the workflow is scoped.

This artifact protects the business from premature quotes while still moving the opportunity forward. It routes pricing interest into discovery, scope selection, proposal-readiness scoring, and a bounded proposal outline.

## Guardrails

- This is not public pricing.
- This is not a final quote.
- This is not a client-specific proposal.
- This does not approve sending an email or creating a mailbox draft.
- This does not approve package pricing, paid tools, provider selection, deployment, launch status, public proof, or auto-send behavior.
- Use this only as an internal response path until the user approves exact pricing defaults or a client-specific quote.

## Trigger

Use this path when a prospect replies with pricing interest before the workflow is fully scoped.

Example signals:

```text
How much would this cost?
What do you charge?
Can you send pricing?
What is the price for setting this up?
```

## Reply Classification

Using `agency-ops/workflows/lead-intake-reply-response-kit.md`:

- Reply category: Category 3, Asks For Pricing
- Pipeline move: keep at `qualification-in-progress` unless scope facts are already known
- Buying signal: positive, but incomplete
- Required posture: answer the pricing question without guessing, then ask the minimum discovery questions needed to route scope
- Forbidden posture: quoting final pricing before primary source, tracker, follow-up mechanism, owner, and scope boundaries are known

## Safe Response Pattern

Use this pattern for internal drafting only. Do not send without action-level approval.

```text
Subject: Re: lead intake follow-up

Hi [Name],

Good question. I would want to avoid guessing before I understand the workflow.

For this kind of project, cost depends mostly on whether we are mapping the process, building one intake path, or adding a follow-up layer around a tracker you already use.

The smallest useful version is usually one primary lead source, one tracker, and one follow-up rhythm. If you can tell me where requests come in today, where they are tracked, and who owns follow-up, I can give you a much more realistic scope.

A few quick questions:

1. What is the main lead source you want to tighten first?
2. Where do those leads land today?
3. Do you already use a CRM, spreadsheet, shared inbox, or dispatch tool?
4. Who is responsible for first response and follow-up?
5. Should the first version create reminders, draft responses, or both?

Best,
Jameson
Kelvar LLC
```

## Minimum Facts Before A Quote

Do not quote final pricing until these facts are known or the user explicitly approves a pricing default with assumptions.

| Fact | Why It Matters |
| --- | --- |
| Primary lead source | Determines whether the build is one-source or multi-source. |
| Tracker destination | Determines setup complexity and integration risk. |
| Current tool stack | Determines whether this is a new tracker, existing CRM layer, or manual workflow. |
| First-response owner | Determines routing and notification logic. |
| Follow-up mechanism | Determines whether the work is reminder-only, draft-response, or a separately approved auto-send path. |
| Lead volume | Helps assess value and testing needs. |
| First useful outcome | Determines whether the right path is blueprint, working build, or visibility upgrade. |
| Approval/safety expectations | Prevents accidental auto-send or risky production behavior. |

## Scope Routing

Use `agency-ops/offers/lead-intake-scope-menu.md` after the prospect answers the minimum facts.

### Route A: Intake Map And Quick-Win Blueprint

Use when:

- The prospect wants pricing but cannot name one clear lead source.
- The workflow is broad or unclear.
- They need a smaller first step before implementation.

Pricing posture:

- Do not quote final package pricing unless user-approved package pricing exists.
- Position this as the lowest-risk first step because it clarifies what should be built.

### Route B: Single-Source Lead Intake System

Use when:

- One primary lead source is named.
- The destination or tracker can be named.
- The owner and follow-up rhythm can be defined.
- The prospect wants a working phase-one system.

Pricing posture:

- Proposal-outline-ready if source, tracker, owner, and follow-up mechanism are mostly known.
- Proposal-draft-ready only after scorecard supports it.

### Route C: Follow-Up And Owner Visibility Upgrade

Use when:

- The prospect already has a CRM, sheet, inbox, or dispatch tool.
- The pain is stale follow-up or owner visibility, not lead capture itself.

Pricing posture:

- Keep the existing system in place.
- Scope the follow-up layer around reminders, draft prompts, stale-lead views, and manual override rules.

## Proposal Decision Scorecard Shortcut

Before drafting a client-specific proposal, use `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`.

Quick interpretation for pricing replies:

- Price question only, no workflow facts: likely `discovery-needed`.
- Price question plus one source and rough pain: likely `proposal-outline-ready`.
- Price question plus source, tracker, owner, follow-up rule, urgency, and buyer authority: potentially `proposal-draft-ready`.
- Price question plus demand for unmanaged auto-send or guaranteed results: `nurture-or-close` unless safer scope is accepted.

## Lead Record Update Template

Use this after a real pricing reply.

```text
## Reply Update - [YYYY-MM-DD]

- Reply category: Asks For Pricing
- Summary:
- Current stage: qualification-in-progress
- Buying signal: Pricing interest
- Tool/system mentioned:
- Pain confirmed:
- Missing information:
- Recommended response:
- Likely scope-menu path:
- Proposal-readiness outcome:
- Pricing status: no quote yet / quote approved / pricing defaults approved
- Next action:
- Follow-up due:
```

## Internal Decision Tree

1. Did the prospect ask only for price?
   - Yes: send the safe response pattern after approval and ask minimum scope questions.
   - No: continue below.
2. Did they name one primary lead source?
   - No: route toward Package 1 or discovery.
   - Yes: continue below.
3. Did they name a tracker or CRM?
   - No: ask tracker destination question; do not quote yet.
   - Yes: continue below.
4. Did they name the first-response owner and follow-up rhythm?
   - No: ask owner/timing question; do not quote yet.
   - Yes: continue below.
5. Does the scope fit one package path and pass the scorecard?
   - Yes: prepare proposal outline or draft depending on score.
   - No: keep in discovery, nurture, or close.

## Example Internal Handling For DFW HVAC

If DFW HVAC asked, "How much would this cost?" before discovery:

- Classification: Asks For Pricing
- Stage: `qualification-in-progress`
- Known source: website estimate form
- Known tracker: unknown
- Known owner: unknown
- Known urgency: public 2-business-hour response promise, but internal urgency unknown
- Scorecard outcome: likely `discovery-needed`
- Safe next step: answer without quote and ask where estimate requests land, who owns first response, whether a CRM/tracker exists, and whether reminders or draft prompts are preferred
- Likely package: Package 1 until tracker/owner are known; Package 2 if website form, tracker, owner, and follow-up rhythm are confirmed

## What Not To Say

Avoid these responses:

```text
This will cost [amount].
I can guarantee more booked jobs.
We can automate all follow-up immediately.
This replaces your CRM.
I can set this live right away without reviewing access and message rules.
```

## What This Adds To The Agency System

This path lets the operator:

- Treat pricing interest as a buying signal without rushing.
- Keep the first project scoped and sellable.
- Protect against underquoting vague work.
- Preserve trust by refusing to guess.
- Move the prospect toward a concrete proposal only after the right facts are known.

## Recommended Next Safe Move

Create two more reply-path assets if outreach remains unapproved:

1. Already-has-CRM response path.
2. Wants-a-call scheduling and discovery-prep path.

The highest-value approval-gated move remains creating review-only Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems, with no sending until a second explicit approval.
