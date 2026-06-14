# Scheduled Run Intake Protocol

Last updated: 2026-06-14 06:02 CDT

## Purpose

This protocol defines how the Automation Agency Operator should handle scheduled runs where the user re-provides the master instruction set or gives broad continuation language without a new prospect, client, deployment, pricing, outreach, or repository-specific task.

Use it to keep scheduled execution useful, contained, and traceable without accidentally treating a continuity refresh as approval for sensitive actions.

## Scope

- Repository: `KelvarLLC/Business1`
- Workspace: `agency-ops/`
- Primary quick-state file: `agency-ops/ops/current-command-brief.md`
- Safe-run selector: `agency-ops/ops/autonomous-safe-run-queue.md`
- Approval posture: `agency-ops/ops/tool-access-and-approval-register.md`

This protocol is internal operating guidance only. It is not outreach approval, deployment approval, pricing approval, provider selection, public-proof approval, launch-status approval, or approval for irreversible changes.

## Start-Of-Scheduled-Run Sequence

1. Read the latest durable memory state and the current command brief.
2. Confirm the assigned repository remains `KelvarLLC/Business1` and the workspace remains `agency-ops/`.
3. Classify the user input as one of these:
   - instruction refresh only,
   - broad continuation or tool-use approval,
   - specific safe repo-backed task,
   - specific approval-gated task,
   - unclear or out-of-scope task.
4. If the input is an instruction refresh only, record the refresh in memory and avoid creating duplicate repo artifacts unless a concrete safe continuation is still valuable.
5. If the input is broad continuation, use the autonomous safe run queue to choose the highest-value non-gated task.
6. If the input names a specific gated action, verify the exact target, sender/recipient or deployment surface, scope, and approval wording before acting.
7. Stop and ask for approval if the next action would cross a gate listed below.

## Approval Gates That Remain Closed On Instruction Refreshes

Do not infer approval from a repeated master instruction set, scheduled invocation, or broad autonomy language for any of the following:

- Creating mailbox drafts.
- Sending outreach, replies, or follow-ups.
- Quoting final prices or publishing package pricing.
- Sending proposals or committing a delivery timeline to a real prospect.
- Scheduling calls or sending calendar invites.
- Selecting paid tools, providers, vendors, CRMs, or hosted form services.
- Changing deployment settings, DNS, environment variables, production configuration, or launch status.
- Marking the website preview-ready, production-ready, public-launch-approved, or publicly launched.
- Publishing client proof, testimonials, screenshots, metrics, or case-study claims.
- Enabling auto-send, auto-reply, CRM write, sheet write, or repository auto-write behavior.
- Accessing, reading, cloning, modifying, or pushing to any repository outside `KelvarLLC/Business1`.

## Safe Continuation Heuristic

When no gated action is approved, choose work that improves one of these systems without contacting anyone or changing public state:

- Revenue readiness: review packets, objection paths, reply simulations, lead scoring, discovery prep.
- Proposal readiness: scorecards, handoff checklists, internal QA, proposal assembly guardrails.
- Delivery readiness: QA evidence templates, handoff packets, support boundaries, tool-neutral build plans.
- Website and intake readiness: QA templates, blocker dashboards, preview evidence templates, Stage 0 or Stage 1 planning without launch changes.
- Operating continuity: current command brief updates, run summaries, action logs, KPI templates, decision records.

Prefer improving or cross-linking existing assets over creating duplicates.

## Scheduled Run Decision Record Template

Use this structure in memory or in a repo artifact when a scheduled run produces meaningful work:

- Invocation time:
- User input type:
- Repository boundary confirmed:
- Approval gates checked:
- Safe task selected:
- Artifact changed or created:
- Gated actions explicitly not performed:
- Blockers:
- Next recommended decision:

## Definition Of Done

A scheduled run is complete when:

- The latest user instruction is correctly classified.
- Any safe repo-backed work is saved under `agency-ops/`.
- The current command brief is refreshed if operating state changed.
- Memory records what happened and what remains next.
- The final summary clearly states whether any gated action was or was not performed.

## Current Default Recommendation

When the scheduled run is only an instruction refresh, the default gated recommendation remains:

> Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only. Do not send until a second explicit approval.

When that approval is not present, continue only with safe non-destructive readiness work from `agency-ops/ops/autonomous-safe-run-queue.md`.
