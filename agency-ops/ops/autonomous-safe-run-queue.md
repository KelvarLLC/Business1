# Autonomous Safe Run Queue

Last updated: 2026-06-14 02:59 CDT

## Purpose

Define what the Automation Agency Operator should do when the user says "keep going," "continue," "automate the situation," or gives broad approval for tools without naming a specific gated action.

This queue keeps progress moving while preventing accidental outreach, pricing, deployment, launch, paid-provider, proof, auto-send, or cross-repository actions.

## Operating Boundary

- Repository: `KelvarLLC/Business1`
- Workspace: `agency-ops/`
- Quick state: `agency-ops/ops/current-command-brief.md`
- Long-range map: `agency-ops/ops/90-day-agency-growth-flywheel.md`
- Short-range board: `agency-ops/ops/30-day-execution-sprint-board.md`
- Automation loops: `agency-ops/ops/agency-automation-control-loop.md`
- Tool gate register: `agency-ops/ops/tool-access-and-approval-register.md`

Do not touch another repository unless the user explicitly changes the assigned repository.

## What Broad Tool Approval Means

When the user says tools/apps/GitHub/any/all/options are available, treat that as approval to use relevant tools for in-scope, non-destructive work.

It does not automatically approve:

- Creating mailbox drafts.
- Sending outreach or follow-ups.
- Quoting final prices or publishing package pricing.
- Sending proposals.
- Selecting paid tools, providers, vendors, or hosted form services.
- Changing deployment settings, DNS, production settings, or launch status.
- Marking preview-ready, production-ready, public-launch-approved, or launched.
- Publishing client proof, testimonials, screenshots, metrics, or case studies.
- Enabling auto-send, auto-reply, CRM write, sheet write, or repository auto-write behavior.
- Touching repositories outside `KelvarLLC/Business1`.

## Start-Of-Run Checklist

Always do this before choosing work:

1. Read `agency-ops/ops/current-command-brief.md`.
2. Confirm the work belongs inside `KelvarLLC/Business1` and `agency-ops/`.
3. Identify whether the user gave a specific action or only broad continuation approval.
4. If only broad continuation approval was given, choose from this safe-run queue.
5. If a chosen task creates a durable artifact, update the command brief and memory.

## Queue Selection Rules

Choose the highest-value safe task using this order:

1. Fix stale quick-state or continuity records.
2. Strengthen revenue readiness without sending or drafting in mailboxes.
3. Strengthen reply-handling and proposal-readiness simulations.
4. Strengthen delivery, handoff, proof-capture, or QA assets.
5. Strengthen website, launch, preview, or intake readiness without changing deployment status.
6. Strengthen measurement, learning, or weekly review systems.
7. Prepare second-niche or next-batch research only if the current Dallas path is blocked or saturated.

Do not create duplicate artifacts if the existing artifact already covers the same job. Improve or cross-link the existing artifact instead.

## Safe Run Queue

### Queue A: Revenue Readiness

Use when outreach remains gated but the agency should keep moving toward revenue.

Safe tasks:

- Create or improve no-send review packets.
- Improve lead-specific objection handling.
- Create simulation-only reply paths.
- Create discovery-to-proposal handoff checklists.
- Update proposal-readiness scoring rules.
- Create a next-batch lead criteria note without contacting anyone.

Ready artifacts:

- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/proposals/dallas-six-lead-proposal-readiness-snapshot.md`
- `agency-ops/proposals/2026-06-14-dfw-hvac-simulated-positive-reply-to-proposal-path.md`
- `agency-ops/proposals/2026-06-14-lead-intake-pricing-request-response-path.md`
- `agency-ops/proposals/2026-06-14-dfw-hvac-simulated-pricing-request-response-path.md`

Next safe candidates:

- Already-has-CRM objection response path.
- Wants-a-call response path.
- First-batch draft-review checklist.
- Discovery-to-proposal handoff checklist.

### Queue B: Delivery Readiness

Use when a simulated or real opportunity needs implementation structure.

Safe tasks:

- Improve delivery QA checklists.
- Create client handoff templates.
- Create phase-two opportunity logs.
- Create maintenance and support boundaries.
- Create proof-capture closeout notes.
- Create implementation blueprint variants that are tool-neutral.

Ready artifacts:

- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`

Next safe candidates:

- 30-day post-delivery maintenance checklist.
- Delivery QA evidence record template.
- Tool-neutral implementation blueprint for one-source/one-tracker builds.

### Queue C: Website And Intake Readiness

Use when the website or intake path needs progress but deployment/launch remains blocked.

Safe tasks:

- Improve QA templates.
- Improve blocker dashboards.
- Create preview evidence templates.
- Create launch decision draft templates.
- Compare Stage 1 intake options without selecting a paid provider.
- Prepare implementation tickets with placeholder-only environment variables.

Ready artifacts:

- `agency-ops/ops/website-route-qa-checklist.md`
- `agency-ops/ops/website-preview-issue-log-template.md`
- `agency-ops/ops/website-launch-blocker-dashboard.md`
- `agency-ops/ops/stage-0-intake-test-script.md`
- `agency-ops/ops/stage-1-intake-provider-comparison-record.md`

Next safe candidates:

- Stage 0 test-result record template.
- Stage 1 environment variable checklist with placeholders only.
- Preview QA evidence packet template.

### Queue D: Operating System And Metrics

Use when the agency needs better continuity, measurement, or review cadence.

Safe tasks:

- Update current command brief after meaningful work.
- Update memory action log, artifacts index, and workflow state.
- Create or update KPI tracker structures.
- Create review templates.
- Create sprint boards and next-move boards.
- Create decision records for future gated choices.

Ready artifacts:

- `agency-ops/ops/current-command-brief.md`
- `agency-ops/ops/90-day-agency-growth-flywheel.md`
- `agency-ops/ops/30-day-execution-sprint-board.md`
- `agency-ops/ops/weekly-operator-review-template.md`
- `agency-ops/ops/agency-kpi-tracker-spec.md`

Next safe candidates:

- Autonomous run summary template.
- Decision log for approval-gated actions.
- Monthly retrospective template.

## Trigger Matrix

| User Input | Default Interpretation | Safe Action |
| --- | --- | --- |
| "Keep going" | Continue non-gated work | Pick highest-value queue item |
| "Automate the situation" | Improve operating automation | Create or update queue/control-loop artifacts |
| "Use any tools" | Tools may be used in scope | Still preserve action-level gates |
| "Use GitHub" | Repo-backed artifacts are preferred | Work only in `KelvarLLC/Business1` and `agency-ops/` |
| "Show what you can do" | Demonstrate capability safely | Create simulation-only or readiness artifact |
| "Create drafts" | Potentially gated | Confirm exact mailbox, recipients, and review-only status if not already explicit |
| "Send it" | Gated and sensitive | Confirm exact message, recipients, sender, and approval before tool action |
| "Launch/deploy" | Gated and evidence-sensitive | Verify build/deployment evidence and ask before status change |
| "Quote price" | Gated | Use scope/pricing guardrails; do not final-quote without approval |

## Autonomous Task Definition Of Done

A safe autonomous task is complete when:

- The artifact is saved inside `agency-ops/`.
- The artifact states whether it is internal, simulated, draft-only, or approval-gated.
- The command brief is updated if the artifact changes operating state.
- Memory is updated if the work should persist across runs.
- The final response names what changed and confirms no gated action occurred.

## Stop Conditions

Stop and ask for explicit approval when the next best action would:

- create or send email,
- create mailbox drafts,
- quote final pricing,
- send a proposal,
- commit a timeline to a real prospect,
- select or pay for a vendor,
- change deployment or launch status,
- publish proof,
- enable auto-send or auto-write behavior,
- access another repository,
- or store sensitive client/customer data.

## Current Recommended Autonomous Next Tasks

If no specific gated action is approved, prioritize these next:

1. Create an already-has-CRM objection response path.
2. Create a wants-a-call response path.
3. Create a discovery-to-proposal handoff checklist.
4. Create a Stage 0 test-result record template.
5. Create a delivery QA evidence record template.

## Current Recommended Gated Action

Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only.

Do not send without a second explicit approval.

## Related Files

- `agency-ops/ops/current-command-brief.md`
- `agency-ops/ops/90-day-agency-growth-flywheel.md`
- `agency-ops/ops/30-day-execution-sprint-board.md`
- `agency-ops/ops/agency-automation-control-loop.md`
- `agency-ops/ops/tool-access-and-approval-register.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
