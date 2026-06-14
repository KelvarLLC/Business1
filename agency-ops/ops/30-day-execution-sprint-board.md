# 30-Day Execution Sprint Board

Last updated: 2026-06-14 02:53 CDT

## Purpose

Convert the 90-day agency growth flywheel into the next 30 days of practical execution.

This board is an internal operating artifact. It does not authorize outreach, mailbox drafts, pricing, paid provider selection, deployment changes, website launch, public proof, or auto-send behavior.

## Operating Boundary

- Repository: `KelvarLLC/Business1`
- Workspace: `agency-ops/`
- Primary operating map: `agency-ops/ops/90-day-agency-growth-flywheel.md`
- Quick state: `agency-ops/ops/current-command-brief.md`
- Current primary offer: Lead Intake Command System / Follow-Up Engine
- Current market wedge: Dallas/Fort Worth home-services lead intake and follow-up

## 30-Day Objective

Move the agency from prepared operating system to controlled market test readiness, while keeping the website, intake, delivery, proof, and learning systems ready for the first real external signal.

Success by day 30 means:

- The first outreach batch is either approved for draft creation, safely held, or revised into a stronger ready-to-approve packet.
- Website launch status remains honest and evidence-based.
- Stage 0 intake QA is ready for preview testing.
- Stage 1 intake decisioning is ready without selecting a paid provider.
- Delivery and closeout assets are ready for the first qualified opportunity.
- The weekly review system can show what moved and what is blocked.

## Current Starting State

Ready:

- Six Dallas lead records.
- Two Dallas no-send outreach batches.
- First-batch and second-batch readiness packets.
- Six-lead follow-up tracker.
- Discovery call script.
- Proposal-readiness snapshot.
- Simulated delivery package.
- Client handoff and closeout packet template.
- Website route QA checklist.
- Preview issue log template.
- Stage 0 intake test script.
- Stage 1 provider comparison record.
- Outreach learning log.
- KPI tracker spec.
- Weekly operator review template.
- 90-day growth flywheel.

Blocked or gated:

- Outlook draft creation requires explicit action-level approval.
- Sending requires separate explicit approval.
- Pricing and proposal sends are not approved.
- Website build verification is blocked in the current environment.
- Vercel preview, production URL, and domain evidence are not recorded.
- Stage 1 hosted intake is not live.
- Public proof is demo-only.

## Week 1: Control And Readiness

Theme:

Make the first external move easy to approve and safe to track.

Primary deliverables:

- First-batch outreach approval packet remains current.
- Six-lead tracker remains the source of truth.
- Current command brief remains updated after meaningful work.
- Stage 0 intake and website QA records are ready for first preview evidence.

Safe actions:

- Improve lead-specific objections and discovery prompts.
- Tighten no-send outreach copy inside repo.
- Update the six-lead tracker if any lead facts change.
- Add a first-batch review checklist if needed.
- Keep website blocker dashboard current.

Gated actions:

- Create Outlook drafts.
- Send emails.
- Quote pricing.

Definition of done:

- A user can approve, revise, or hold first-batch draft creation without needing the operator to explain the whole system again.

## Week 2: First Market Signal

Theme:

Run the smallest controlled revenue test if approval arrives; otherwise continue readiness without pretending external progress happened.

If draft approval is granted:

- Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only.
- Do not send without second explicit approval.
- Record draft creation in the follow-up tracker and command brief.
- Prepare reply-handling paths for interested, pricing, tool objection, no-interest, referral, and sensitive-data replies.

If draft approval is not granted:

- Create a stronger first-batch review sheet or simulated reply-handling drill.
- Improve website FAQ or offer language based on anticipated objections.
- Prepare a proposal-outline mockup clearly labeled as hypothetical.

Definition of done:

- Either the first controlled draft step is complete and recorded, or the approval packet is stronger and the next gated decision is clearer.

## Week 3: Conversion Readiness

Theme:

Make sure a positive reply can become a discovery call, scoped proposal, or delivery plan without scrambling.

Primary deliverables:

- Discovery notes template or scorecard path is ready.
- Proposal-readiness decision path is clear.
- Delivery plan and closeout packet are linked from the command brief.
- Proof capture rules are visible before delivery begins.

Safe actions:

- Create a simulated positive-reply conversion record.
- Build a hypothetical proposal outline for a DFW HVAC-style reply, clearly marked as simulated.
- Create a discovery-to-proposal handoff checklist.
- Refine delivery QA or proof capture language.

Gated actions:

- Send a proposal.
- Quote final price.
- Commit timeline to a real prospect.

Definition of done:

- The agency can handle a real interested reply with a clear next step, not a scramble.

## Week 4: Review And Expansion Decision

Theme:

Use the weekly operator review system to decide whether to deepen Dallas home services, revise the offer, or prepare a second niche.

Primary deliverables:

- Weekly operator review created if meaningful activity occurred.
- KPI tracker updated or ready for actual values.
- Learning log reviewed.
- Next 30-day priorities selected.

Safe actions:

- Create the first dated weekly operator review when activity warrants it.
- Add lessons from any draft review, reply, QA, or delivery work.
- Prepare a next-batch prospect criteria note.
- Draft a second-niche exploration brief only if Dallas activity is held or saturated.

Gated actions:

- Start a new outbound batch with drafts or sends.
- Publish proof.
- Change website launch status.

Definition of done:

- The next month starts with a clearer market decision and fewer repeated blockers.

## Operating Kanban

### Ready

| Item | Type | Source | Gate |
| --- | --- | --- | --- |
| First-batch Outlook draft creation | Revenue | Dallas readiness chain | Explicit draft approval |
| Stage 0 intake preview QA | Website/intake | Stage 0 test script | Preview/build evidence needed |
| Stage 1 intake handler decision | Intake | Provider comparison + decision scorecard | No paid vendor without approval |
| Simulated reply-handling drill | Revenue readiness | Reply kit | Safe if simulation-only |
| Discovery-to-proposal handoff checklist | Proposal readiness | Discovery script + proposal scorecard | Safe |
| Dated weekly operator review | Operating system | Weekly review template | Safe when enough activity exists |

### In Progress

| Item | Current State | Next Action |
| --- | --- | --- |
| Dallas home-services first batch | Ready, no-send | Await approval or strengthen review packet |
| Website launch readiness | Docs ready, build unverified | Record evidence when environment allows |
| Stage 1 intake | Specified, not live | Use comparison record before decision |
| Delivery readiness | Simulation and handoff ready | Use when a lead qualifies |

### Blocked

| Blocker | Impact | Resolution Path |
| --- | --- | --- |
| No action-level approval for mailbox drafts | Outreach cannot enter mailbox draft stage | User explicitly approves draft creation for named leads |
| No send approval | No outreach can be sent | User separately approves send after draft review |
| Build environment registry/clone issues | Website cannot be build-verified locally | Use CI, preview environment, or accessible dependency install path |
| No Vercel preview evidence | Launch status cannot move | Record preview URL and route QA evidence |
| No Stage 1 provider decision | Hosted intake cannot go live | Complete provider/handler decision and setup QA |
| Demo proof only | Public proof must stay limited | Capture real proof only after delivery and client approval |

## Progress Metrics

Track weekly:

- New prospects added.
- Drafts created.
- Emails sent.
- Replies received.
- Positive replies.
- Discovery calls booked.
- Proposal-ready leads.
- Website QA issues opened/resolved.
- Stage 0 QA status.
- Stage 1 decision status.
- Delivery artifacts created.
- Proof permissions requested/granted.

Current baseline:

- Drafts created: 0.
- Emails sent: 0.
- Replies received: 0.
- Discovery calls booked: 0.
- Proposals sent: 0.
- Won engagements: 0.
- Website launch status: not launched.
- Stage 1 intake status: not live.
- Public proof: demo only.

## Decision Rules

Continue automatically when:

- The work stays inside `agency-ops/`.
- It is non-destructive.
- It improves readiness, tracking, QA, proposal conversion, delivery quality, proof capture, or operating continuity.

Wait for explicit action-level approval when:

- Creating mailbox drafts.
- Sending outreach or follow-ups.
- Quoting final pricing.
- Sending proposals.
- Selecting paid tools or vendors.
- Changing deployment or launch status.
- Publishing client proof.
- Enabling auto-send.
- Touching another repository.

## Next Recommended Move

Gated:

Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only. Do not send without a second explicit approval.

Safe if gated action remains held:

Create a simulated positive-reply conversion record that shows exactly how a prospect would move from interested reply to discovery notes, proposal readiness, delivery plan, and proof-capture guardrails.

## Related Files

- `agency-ops/ops/90-day-agency-growth-flywheel.md`
- `agency-ops/ops/current-command-brief.md`
- `agency-ops/ops/next-move-command-board.md`
- `agency-ops/ops/agency-automation-control-loop.md`
- `agency-ops/ops/weekly-operator-review-template.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/dallas-six-lead-proposal-readiness-snapshot.md`
- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
