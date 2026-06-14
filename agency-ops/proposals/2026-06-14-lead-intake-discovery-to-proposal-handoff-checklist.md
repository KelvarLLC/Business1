# Lead Intake Discovery-To-Proposal Handoff Checklist

Date: 2026-06-14
Status: Internal operating checklist
Workspace: `agency-ops/`
Offer: Lead Intake Command System / Follow-Up Engine

## Purpose

This checklist turns an interested reply, pricing question, CRM objection, call request, or website intake into a clear proposal-readiness decision. It prevents the agency from jumping too early to pricing or proposal language before the right discovery facts, scope lane, delivery assumptions, and approval gates are confirmed.

This is an internal handoff artifact only. It is not a proposal, price quote, sent message, mailbox draft, calendar invite, client commitment, tool recommendation, deployment action, or approval to publish proof.

## When To Use

Use this checklist after any of these inbound or simulated events:

- A prospect says they are interested.
- A prospect asks for pricing or package options.
- A prospect asks for a call.
- A prospect says they already have a CRM, booking system, or intake tool.
- A prospect submits the website `/start` intake path.
- A discovery call has happened and the notes need to become a proposal decision.
- A lead record needs to move from `qualified` or `discovery needed` toward `proposal outline ready`, `proposal draft ready`, `nurture`, or `closed-lost`.

## Required Inputs Before Handoff

Do not classify a lead as proposal-ready until these facts are captured or explicitly marked unknown:

- Lead or client name.
- Business type and service area.
- Current pipeline stage.
- Reply category or intake source.
- Primary intake source: phone, website form, email, social, ads, chat, referral, or other.
- Current tool stack: CRM, inbox, calendar, booking system, spreadsheet, field-service software, or manual process.
- Where new leads are currently recorded.
- Who owns first response.
- Current follow-up rhythm and where it breaks.
- Missed-lead, slow-response, duplicate-entry, or visibility pain.
- Desired first win.
- Sensitive data or compliance constraints.
- Decision maker and approval path.
- Timeline pressure.
- Budget or purchasing sensitivity, if volunteered.
- Proof, demo, or case-study expectations.
- Any stated objection or concern.

## Handoff Stages

### 1. Classify The Reply Or Intake

Choose the strongest current category:

- Interested and ready for discovery.
- Wants a call.
- Wants pricing.
- Already has CRM or intake tools.
- Website intake with enough detail.
- Website intake missing critical facts.
- Not interested now.
- Referral or wrong contact.
- Sensitive-data or compliance-heavy inquiry.

Handoff rule: classification should determine the next information request, not a final proposal or quote by itself.

### 2. Update The Lead Record And Tracker

Before any proposal work, update the lead operating record with:

- Current stage.
- Latest signal.
- Reply category.
- Next owner.
- Next action.
- Due date or follow-up window.
- Missing facts.
- Approval gate needed, if any.

Use `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md` as the current tracker pattern for the Dallas batch, and the lead record template for new prospects.

### 3. Capture Discovery Facts

Minimum discovery facts for proposal-readiness:

- What counts as a lead.
- How a lead arrives.
- Who sees it first.
- What happens within the first 15 minutes.
- What happens if the first person misses it.
- Where follow-up is recorded.
- Which tools must remain in place.
- Which manual steps are tolerated and which are causing revenue leakage.
- What result would make the first implementation worthwhile.

If these are not known, the lead is discovery-needed, not proposal-ready.

### 4. Route To Scope Menu

Map the need to one primary lane:

- Blueprint lane: current process map, missed-lead audit, response checklist, and improvement plan.
- Single-source build lane: one lead source routed into a response tracker, owner notification, and follow-up workflow.
- Follow-up visibility lane: dashboard or tracker that shows open leads, aging, owner, and next action.
- Compatibility lane: improve the existing CRM/tool workflow instead of replacing tools.
- Nurture lane: prospect has interest but insufficient urgency, fit, or information.

Do not combine lanes unless the prospect has enough urgency, scope clarity, and decision-maker involvement to support a phased proposal.

### 5. Score Proposal Readiness

Use this rubric before drafting:

| Score | Stage | Meaning | Next Action |
| --- | --- | --- | --- |
| 0 | Closed-lost or no action | Not a fit, not interested, or no useful business pain | Record reason and stop active pursuit |
| 1 | Nurture | Some relevance but no urgency, no owner, or no current problem | Save follow-up note and nurture angle |
| 2 | Discovery needed | Pain is plausible but core workflow facts are missing | Ask focused discovery questions or request a call |
| 3 | Proposal outline ready | Pain, lead source, owner, and first-win target are clear | Build internal proposal outline only |
| 4 | Proposal draft ready | Scope lane, current tools, decision-maker path, timeline, and success criteria are clear | Draft proposal for internal review |
| 5 | Approval-ready draft | Proposal has scope, assumptions, exclusions, pricing placeholder, and delivery preview approved internally | Ask user before sending or creating mailbox draft |

Default rule: if the lead asks for pricing but the intake source, response owner, and desired first win are unclear, score it `2 - discovery needed`, not proposal-ready.

### 6. Decide The Proposal Action

Choose one action:

- Discovery follow-up: ask 3 to 5 focused questions.
- Call prep: prepare agenda, required facts, and call outcome classifications.
- Internal proposal outline: structure the offer without pricing or send-ready language.
- Internal proposal draft: create a reviewable draft with placeholders and assumptions.
- Nurture note: save why the lead should not be pushed now.
- Closeout note: save why the lead should be closed or deprioritized.

Do not send or draft in a mailbox until the user gives explicit action-level approval.

### 7. Preview Delivery Without Overcommitting

Every proposal-ready handoff should include a light delivery preview:

- Likely first implementation lane.
- Systems involved.
- Client inputs needed.
- Build assumptions.
- QA steps.
- Handoff requirements.
- Proof capture opportunities.
- Open risks.

Keep delivery language practical. Do not promise revenue outcomes, replacement of existing tools, same-day launch, public proof, or auto-send behavior.

## Do-Not-Proceed Gates

Stop and request explicit approval before any of these actions:

- Creating a mailbox draft.
- Sending outreach, follow-up, proposal, or pricing response.
- Quoting a final price or publishing package pricing.
- Scheduling a call or sending a calendar invite.
- Selecting or recommending a paid tool, CRM, hosted form vendor, or provider.
- Changing deployment, DNS, environment variables, or production launch status.
- Publishing client proof, screenshots, testimonial language, metrics, or case-study claims.
- Enabling auto-send, auto-write, or client-facing automations.
- Touching any repository outside `KelvarLLC/Business1`.

## Handoff Summary Template

Use this summary when moving a lead from discovery into proposal work:

```markdown
## Discovery-To-Proposal Handoff

Lead:
Business type:
Current stage:
Reply/intake category:
Proposal-readiness score:
Recommended action:

### Known Facts
- Intake source:
- Current tools:
- First response owner:
- Follow-up process:
- Main pain:
- Desired first win:
- Timeline:
- Decision maker:

### Scope Lane
Recommended lane:
Reason:
Out of scope:

### Missing Facts
- 

### Delivery Preview
- Systems involved:
- Client inputs needed:
- QA needs:
- Proof capture possibility:

### Approval Gates
- Mailbox draft needed? No / Yes, approval required
- Send needed? No / Yes, approval required
- Pricing needed? No / Yes, approval required
- Provider/tool decision needed? No / Yes, approval required
- Deployment or launch action needed? No / Yes, approval required
```

## Proposal Outline Skeleton

Use this only after the score is at least `3 - proposal outline ready`:

```markdown
# [Lead Name] Lead Intake Command System Proposal Outline

## Situation
[What is happening in the lead intake or follow-up process.]

## Business Risk
[What slow response, missed ownership, duplicate entry, or poor visibility may be costing.]

## Recommended First Build
[Blueprint, single-source build, follow-up visibility, compatibility upgrade, or phased option.]

## Scope
- Included:
- Not included:
- Client inputs needed:

## Delivery Preview
- Phase 1:
- Phase 2:
- QA:
- Handoff:

## Assumptions
- 

## Open Questions
- 

## Approval Needed Before External Use
- User approval to create/send any draft.
- User approval for any final pricing.
- User approval for any tool/provider/deployment choice.
```

## Missing Facts List

Use this list when the lead is not proposal-ready:

- Which lead source matters most right now?
- Where does that lead go today?
- Who is supposed to respond first?
- What breaks most often: speed, ownership, follow-up, visibility, duplicate entry, or reporting?
- Which current tools must stay?
- What would a useful first win look like in the first 2 to 4 weeks?
- Who approves the work?
- Is the goal a process blueprint, a live workflow, or visibility into follow-up?

## Related Operating Files

- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/proposals/dallas-six-lead-proposal-readiness-snapshot.md`
- `agency-ops/proposals/2026-06-14-dfw-hvac-simulated-positive-reply-to-proposal-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`
- `agency-ops/proposals/2026-06-14-dfw-hvac-simulated-pricing-request-response-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-already-has-crm-objection-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-wants-a-call-response-path.md`
- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/ops/autonomous-safe-run-queue.md`

## Operator Rule

If the user says to keep going, continue with internal proposal, delivery, QA, documentation, and operating-system improvements that stay within `KelvarLLC/Business1` and `agency-ops/`. Treat broad tool/app approval as permission to use relevant tools for safe repo-scoped work, not as approval to perform gated outbound, pricing, deployment, provider, public-proof, or irreversible actions.
