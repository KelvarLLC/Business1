# Lead Intake Proposal Decision Scorecard

## Purpose

Decide whether a Lead Intake Command System / Follow-Up Engine opportunity is ready for a proposal, needs more discovery, should be nurtured, or should be closed.

Use this scorecard before assembling any client-specific proposal from `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`.

This is an internal qualification tool. It is not pricing guidance and should not be sent to prospects.

## Decision Outcomes

Use one of four outcomes:

- `proposal-draft-ready`: enough fit, urgency, and scope clarity to create a client-specific proposal draft.
- `proposal-outline-ready`: promising, but still missing one or two facts that affect scope.
- `discovery-needed`: not enough information to propose responsibly.
- `nurture-or-close`: weak fit, low urgency, unclear value, or unsafe scope.

Do not mark a lead `proposal-sent` unless a proposal was actually sent through an approved channel.

## Scorecard

Score each category from 0 to 3.

```text
0 = absent or unknown
1 = weak or vague
2 = usable but incomplete
3 = strong and specific
```

### 1. Pain Severity

How clearly does the prospect have a lead capture, response, follow-up, or owner visibility problem?

- 0: No clear pain.
- 1: General interest in automation, but no specific workflow pain.
- 2: Clear lead handling friction, but impact is still vague.
- 3: Clear missed-lead, slow-response, stale-follow-up, or owner-visibility pain.

### 2. Workflow Specificity

How clearly can the first workflow be named?

- 0: No workflow identified.
- 1: Multiple vague workflow ideas.
- 2: One likely workflow, but trigger or destination is unclear.
- 3: One primary intake source, destination, owner, and follow-up path are identifiable.

### 3. First-Win Clarity

Is there a small, valuable phase-one outcome?

- 0: No useful first win.
- 1: First win is broad or aspirational.
- 2: First win is useful but needs refinement.
- 3: First win is narrow, measurable, and tied to a real workflow.

Examples of strong first wins:

- New website requests become structured lead records.
- A stale-lead reminder appears after a defined time window.
- Owner can see lead status, next action, and follow-up due date in one place.
- Shared inbox requests are copied into a tracker with owner and stage.

### 4. Tool And Access Feasibility

Can the current systems support a lightweight first build?

- 0: Tools unknown or unavailable.
- 1: Tools are named but access or export ability is unclear.
- 2: Tools are usable with some access or integration questions.
- 3: Tools are named, accessible, and suitable for a simple phase-one build.

### 5. Human Approval And Safety Fit

Can the first version keep judgment visible and avoid risky automation?

- 0: Prospect expects unmanaged auto-send or unsafe production changes.
- 1: Safety expectations are unclear.
- 2: Drafts, reminders, or manual approval are acceptable.
- 3: Prospect clearly accepts human review, approval gates, and scoped automation.

### 6. Decision Urgency

Is there a reason to move soon?

- 0: No urgency.
- 1: Mild curiosity only.
- 2: Operational irritation or near-term improvement desire.
- 3: Active missed leads, overloaded owner/admin, seasonal pressure, or follow-up risk.

### 7. Buyer Fit

Is the contact likely to influence or approve the work?

- 0: Wrong contact or unknown role.
- 1: Possible influencer, unclear authority.
- 2: Operational stakeholder who can help scope the work.
- 3: Owner, manager, operator, or decision-maker with clear authority.

### 8. Scope Fit

Does the need fit one of the current package paths?

- 0: Does not fit the Lead Intake offer.
- 1: Fit is possible but likely too broad.
- 2: Fits one path with some scope constraints needed.
- 3: Clearly fits one of these paths: Intake Map And Quick-Win Blueprint, Single-Source Lead Intake System, or Follow-Up And Owner Visibility Upgrade.

## Scoring Decision

Total possible score: 24.

- 20-24: `proposal-draft-ready`
- 15-19: `proposal-outline-ready`
- 8-14: `discovery-needed`
- 0-7: `nurture-or-close`

Override rules:

- If workflow specificity is 0, outcome cannot exceed `discovery-needed`.
- If safety fit is 0, outcome is `nurture-or-close` unless the prospect accepts a safer scope.
- If scope fit is 0, outcome is `nurture-or-close` for this offer.
- If buyer fit is 0, outcome cannot exceed `proposal-outline-ready`.
- If pricing is requested before scope clarity, route through the scope menu before drafting or quoting.

## Recommended Next Action By Outcome

### proposal-draft-ready

Next action:

1. Use `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`.
2. Choose the package path from `agency-ops/offers/lead-intake-scope-menu.md`.
3. Draft a client-specific proposal under `agency-ops/proposals/`.
4. Update the lead record with proposal path, assumptions, dependencies, and approval needed.

### proposal-outline-ready

Next action:

1. Create a short proposal outline, not a final proposal.
2. List the remaining facts needed.
3. Ask targeted discovery questions.
4. Do not quote final price or timeline.

### discovery-needed

Next action:

1. Use `agency-ops/workflows/lead-intake-discovery-outline.md`.
2. Ask only the questions needed to clarify workflow, tools, owner, urgency, and first win.
3. Keep the lead in `qualification-in-progress` or `discovery-needed`.

### nurture-or-close

Next action:

1. Record why the lead is not ready.
2. If there is future value, mark as nurture and note a better trigger.
3. If poor fit, close the lead without spending more proposal time.

## Quick Intake Version

Use this shorter version when triaging a reply quickly:

```markdown
## Proposal Decision Scorecard

- Lead:
- Date:
- Current stage:
- Pain severity, 0-3:
- Workflow specificity, 0-3:
- First-win clarity, 0-3:
- Tool/access feasibility, 0-3:
- Human approval/safety fit, 0-3:
- Decision urgency, 0-3:
- Buyer fit, 0-3:
- Scope fit, 0-3:
- Total score:
- Recommended outcome:
- Override rule triggered, if any:
- Recommended next action:
- Missing facts:
```

## Dallas First-Batch Use

For DFW HVAC, Cool Tech, and Lone-Star Roof Systems:

- Do not use this scorecard until a reply or inquiry provides new information.
- A positive reply without workflow details should usually start as `discovery-needed`.
- A reply naming one lead source and one follow-up pain may become `proposal-outline-ready`.
- A reply naming the source, owner, current tracker, urgency, and first desired outcome may become `proposal-draft-ready`.

## Safety Notes

- This scorecard does not authorize outreach, sending, pricing, or deployment.
- Sending still requires explicit user approval.
- Pricing still requires user-approved pricing defaults or a client-specific approval.
- Public proof still requires the proof capture system and client approval.
