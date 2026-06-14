# Lead Intake Proposal Draft Internal QA Checklist

Date: 2026-06-14
Status: Internal QA checklist
Workspace: `agency-ops/`
Offer: Lead Intake Command System / Follow-Up Engine

## Purpose

Quality-check any Lead Intake proposal outline or client-specific proposal draft before it is treated as ready for user review, mailbox draft creation, sending, pricing approval, or delivery planning.

This checklist prevents common proposal risks:

- Drafting before discovery facts are known.
- Quoting price or timeline without approval.
- Overpromising revenue, response speed, proof, deployment, or auto-send behavior.
- Proposing a CRM replacement when the safer scope is workflow improvement.
- Leaving client inputs, exclusions, and delivery assumptions vague.
- Treating an internal draft as sent, approved, or accepted.

This is an internal QA artifact only. It is not a proposal, price quote, sent message, mailbox draft, calendar invite, client commitment, deployment action, public proof approval, or approval to start delivery.

## When To Use

Use this checklist for:

- Any proposal outline created from a positive reply.
- Any proposal draft created from a discovery call.
- Any proposal path created after a pricing question.
- Any proposal path created after a CRM/tool objection.
- Any website intake that reaches `proposal-outline-ready` or `proposal-draft-ready`.
- Any simulated proposal walkthrough that may become a reusable pattern.

Do not use this to bypass discovery. If core workflow facts are missing, return to the discovery-to-proposal handoff checklist.

## Required Source Files

Use these files together:

- `agency-ops/proposals/2026-06-14-lead-intake-discovery-to-proposal-handoff-checklist.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`

## QA Summary

Fill this section for every proposal draft or outline.

| Field | Value |
| --- | --- |
| Lead/client |  |
| Business type |  |
| Current pipeline stage |  |
| Proposal artifact path |  |
| Proposal type | outline / internal draft / approval-ready draft |
| Proposal-readiness score |  |
| Scope lane | blueprint / single-source build / follow-up visibility / compatibility upgrade / nurture |
| QA result | pass / revise / return to discovery / hold |
| Approval gates needed |  |
| Reviewer |  |
| Review date |  |

## Gate 1: Proposal-Readiness Check

| Check | Pass Criteria | Result | Notes |
| --- | --- | --- | --- |
| Handoff checklist completed | Discovery-to-proposal handoff exists or facts are recorded in proposal | pending |  |
| Scorecard completed | Decision scorecard outcome supports outline or draft | pending |  |
| Current stage is accurate | Lead is not mislabeled as proposal-sent or won | pending |  |
| Core facts known | Lead source, owner, current tracker/tool, pain, first win, and decision path are known or marked unknown | pending |  |
| Missing facts listed | Proposal clearly separates known facts from open questions | pending |  |

Fail rule:

- If no lead source, owner, current tool/tracker, or first win is known, mark `return to discovery`.

## Gate 2: Scope Safety Check

| Check | Pass Criteria | Result | Notes |
| --- | --- | --- | --- |
| One primary scope lane selected | Proposal does not combine too many package paths at once | pending |  |
| Phase one is bounded | One primary source, tracker, owner group, and follow-up rhythm are named | pending |  |
| Existing tools respected | Proposal improves current workflow before suggesting replacement | pending |  |
| Out-of-scope items explicit | CRM migration, multi-source routing, paid ads, attribution, auto-send, and guarantees are excluded unless approved | pending |  |
| Sensitive data flagged | Compliance-heavy or sensitive-data work is marked for human review | pending |  |

Fail rule:

- If the proposal implies a full CRM rebuild, unmanaged automation, or broad transformation without approval, mark `revise`.

## Gate 3: Business Claim Safety Check

| Check | Pass Criteria | Result | Notes |
| --- | --- | --- | --- |
| No guaranteed outcomes | No guaranteed revenue, lead volume, sales lift, or response-speed promise | pending |  |
| No unsupported proof | Demo proof is labeled as demo only; real proof is used only if approved | pending |  |
| No false launch/deployment claims | Proposal does not imply website, intake, or client system is live unless evidence exists | pending |  |
| No unverified prospect pain claims | Proposal avoids saying the client misses leads unless the client said so | pending |  |
| No compliance/legal promises | Proposal does not provide legal, insurance, compliance, or regulatory guarantees | pending |  |

Fail rule:

- If the proposal relies on unverified proof or guarantees, mark `revise` before user review.

## Gate 4: Pricing And Timeline Check

| Check | Pass Criteria | Result | Notes |
| --- | --- | --- | --- |
| Pricing status clear | No final price appears unless user-approved pricing exists | pending |  |
| Pricing placeholders safe | Placeholder language says pricing requires approval or scope confirmation | pending |  |
| Timeline status clear | No delivery timeline is promised unless approved | pending |  |
| Dependencies affect timeline | Access, client inputs, tool availability, and QA are listed as timeline dependencies | pending |  |
| No public package pricing implied | Draft does not publish package pricing by accident | pending |  |

Fail rule:

- If final price or final timeline appears without explicit approval, mark `hold` until approval is obtained.

## Gate 5: Delivery Feasibility Check

| Check | Pass Criteria | Result | Notes |
| --- | --- | --- | --- |
| Client inputs listed | Access, examples, current process, owner rules, messages, and tool permissions are named | pending |  |
| Implementation phases clear | Blueprint, build, QA, handoff, and review steps are separated | pending |  |
| QA included | Proposal includes testing, review, and correction steps | pending |  |
| Handoff included | Operating notes, support boundaries, and closeout review are included | pending |  |
| Proof capture separated | Proof/testimonial/case-study work requires later approval | pending |  |

Fail rule:

- If the proposal cannot be delivered from the stated scope and inputs, mark `revise`.

## Gate 6: Communication And Send-Gate Check

| Check | Pass Criteria | Result | Notes |
| --- | --- | --- | --- |
| Internal draft labeled | Draft is clearly internal until user approves external use | pending |  |
| Mailbox draft gate preserved | No mailbox draft creation is implied without approval | pending |  |
| Send gate preserved | No proposal is marked sent unless actually sent | pending |  |
| Next action is clear | Draft ends with user review, discovery question, or approval request | pending |  |
| Reply path prepared | If sent later, replies route to discovery, pricing, call, CRM objection, nurture, or closeout paths | pending |  |

Fail rule:

- If the proposal text reads as send-ready but approval has not been granted, mark `revise` and add internal-only label.

## Required Proposal Sections

A proposal outline must include at least:

- Situation.
- Business risk or workflow friction.
- Recommended first build or blueprint.
- Scope lane.
- Included work.
- Not included.
- Client inputs needed.
- Open questions.
- Approval needed before external use.

A full internal proposal draft must also include:

- Implementation phases.
- QA plan.
- Handoff plan.
- Assumptions.
- Risks and mitigations.
- Proof capture boundaries.
- Support boundary or closeout note.

## QA Outcomes

### Pass

Use only when:

- Proposal-readiness facts are sufficient.
- Scope is bounded.
- Safety claims are clean.
- No unauthorized price, timeline, send, proof, or deployment language appears.
- Delivery assumptions are realistic.
- Next approval gate is clear.

Next action:

- Mark as internal review-ready.
- Ask user whether to revise, hold, create mailbox draft, or prepare send approval packet.

### Revise

Use when the draft is directionally useful but needs copy, scope, safety, pricing-placeholder, delivery, or proof-boundary cleanup.

Next action:

- Revise inside the proposal artifact.
- Re-run this QA checklist.

### Return To Discovery

Use when the proposal cannot be responsibly scoped.

Next action:

- Use discovery-to-proposal handoff checklist.
- Ask the minimum necessary discovery questions.
- Keep the lead in `discovery-needed` or `qualification-in-progress`.

### Hold

Use when the draft depends on a gated decision.

Common hold reasons:

- Final pricing needed.
- Timeline approval needed.
- Tool/provider choice needed.
- Deployment or launch decision needed.
- Public proof approval needed.
- Mailbox draft or send approval needed.

## Proposal QA Record Template

Copy this block into the proposal artifact or lead record after QA:

```markdown
## Internal Proposal QA Record

- Date:
- Reviewer:
- Proposal path:
- Proposal-readiness score:
- Scope lane:
- QA outcome: pass / revise / return to discovery / hold
- Required revisions:
- Missing discovery facts:
- Approval gates before external use:
- Pricing status:
- Timeline status:
- Proof status:
- Send status:
- Next action:
```

## Approval Prompt Template

Use this only after QA passes and the proposal is ready for user review:

> The internal proposal draft has passed QA for scope, claim safety, delivery assumptions, and approval gates. Recommended next move: review the draft in-repo, then choose whether to revise, hold, create a mailbox draft for review, or approve sending later as a separate step.

## Operator Rule

If the user says to keep going, continue with internal QA, lead-record updates, delivery-readiness checks, reply-triage boards, and evidence templates. Do not treat broad tool/app approval as permission to send proposals, create mailbox drafts, quote final pricing, schedule calls, select paid tools, change deployment status, publish proof, or touch another repository.
