# Agency Automation Control Loop

## Purpose

Turn the current Kelvar LLC agency operating system into a repeatable automation loop. This document defines what the operator should check, what it should update, what artifacts it should create, and where human approval is still required.

This is not a software automation that sends emails, changes deployments, quotes prices, or launches the website. It is the operating automation layer that makes those actions ready, traceable, and hard to confuse.

## Operating Boundary

- Repository: `KelvarLLC/Business1`
- Workspace: `agency-ops/`
- Quick-state source: `agency-ops/ops/current-command-brief.md`
- Tool posture: `agency-ops/ops/tool-access-and-approval-register.md`
- Command board: `agency-ops/ops/next-move-command-board.md`
- Memory continuity: memory folder action log, workflow state, and artifacts index

Never operate outside `KelvarLLC/Business1` unless the user explicitly changes the assigned repository.

## Automation Principles

1. Use GitHub as the system of record for durable agency work.
2. Convert loose work into reusable artifacts.
3. Keep the next action visible in the command brief.
4. Treat every lead, launch check, intake upgrade, proposal, and delivery item as a pipeline object with status.
5. Record evidence before changing status.
6. Preserve action-level gates for sensitive moves.
7. Prefer small, useful loops over broad plans.

## Loop 1: Current-State Refresh

Trigger:

- Start of any run.
- User asks to continue, keep going, automate, or resume.
- Any new repo artifact is created.

Inputs:

- `agency-ops/ops/current-command-brief.md`
- `agency-ops/ops/next-move-command-board.md`
- `agency-ops/ops/tool-access-and-approval-register.md`
- Memory workflow state and action log

Actions:

1. Confirm assigned repository is still `KelvarLLC/Business1`.
2. Confirm work stays under `agency-ops/`.
3. Read the current command brief.
4. Identify the next safe non-gated task and any gated decision.
5. Execute the safe task if it has future value.
6. Update the command brief after meaningful repo-backed work.
7. Update memory after meaningful repo-backed work.

Outputs:

- Refreshed command brief.
- Memory action log update.
- New or improved repo artifact if useful.

Do not:

- Access another repository.
- Send outreach.
- Create mailbox drafts without explicit approval.
- Change deployment or launch status.

## Loop 2: Revenue Pipeline Readiness

Trigger:

- New prospect list, lead, reply, or outreach direction.
- User asks to find, pursue, package, or qualify opportunities.
- Current command brief says outreach remains pending.

Inputs:

- Lead records under `agency-ops/leads/`
- `agency-ops/workflows/outreach-execution-control-sheet.md`
- `agency-ops/leads/2026-06-14-dallas-first-batch-revenue-readiness.md`
- `agency-ops/leads/2026-06-14-dallas-second-batch-revenue-readiness.md`
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`
- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/dallas-six-lead-proposal-readiness-snapshot.md`

Safe actions:

1. Create or update lead records.
2. Score lead readiness.
3. Create no-send outreach review packets.
4. Create follow-up trackers.
5. Create discovery scripts.
6. Create proposal-readiness snapshots.
7. Record objections, risks, and best first-win hypotheses.

Gated actions:

- Creating Gmail or Outlook drafts.
- Sending emails or follow-ups.
- Quoting prices.
- Sending proposals.

Outputs:

- Updated lead records.
- Updated tracker rows.
- Discovery notes or scripts.
- Proposal-readiness scorecards.
- Command brief update.

## Loop 3: Reply Handling

Trigger:

- A prospect replies.
- User pastes or references an email reply.
- Mailbox search finds a relevant reply for this business.

Inputs:

- `agency-ops/workflows/lead-intake-reply-response-kit.md`
- `agency-ops/workflows/home-services-lead-intake-discovery-call-script.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- Relevant lead record
- `agency-ops/leads/2026-06-14-dallas-six-lead-follow-up-tracker.md`

Actions:

1. Classify reply: interested, call request, pricing, CRM/tool objection, not interested, referral, sensitive data, or other.
2. Update lead record with reply summary and category.
3. Update tracker with reply status and next action.
4. Use discovery script if a call or workflow review is appropriate.
5. Use proposal decision scorecard before proposal drafting.
6. Draft response copy only inside repo unless mailbox draft creation is explicitly approved.

Outputs:

- Updated lead record.
- Updated tracker.
- Draft response text in repository or chat.
- Discovery notes or proposal-readiness scorecard.

Do not:

- Reply or send without approval.
- Quote final pricing without approved pricing context.
- Promise delivery dates without approval.

## Loop 4: Website Launch Readiness

Trigger:

- Website source changes.
- Build/deployment access becomes available.
- User asks to launch, deploy, QA, or check website.
- Current command brief says website status must stay current.

Inputs:

- `agency-ops/ops/website-launch-status.md`
- `agency-ops/ops/website-launch-evidence-log.md`
- `agency-ops/ops/website-route-qa-checklist.md`
- `agency-ops/ops/website-launch-blocker-dashboard.md`
- `agency-ops/ops/website-vercel-deployment-handoff-ticket.md`
- `agency-ops/ops/website-launch-decision-record-template.md`
- `agency-ops/ops/website-deployment-readiness.md`

Safe actions:

1. Update QA checklists and blocker dashboards.
2. Record build or preview evidence when available.
3. Prepare issue logs and launch decision drafts.
4. Keep launch status honest.
5. Create route-specific QA scripts.

Gated actions:

- Changing DNS or production settings.
- Marking preview-ready, production-ready, or public-launch-approved.
- Selecting paid hosting/provider changes.

Outputs:

- Evidence log entries.
- QA issue records.
- Launch decision record drafts.
- Updated launch status only when evidence and approval support it.

## Loop 5: Stage 0 And Stage 1 Intake

Trigger:

- `/start` changes.
- Preview environment becomes available.
- User asks to improve intake capture.
- User chooses or asks about a form handler/provider.

Inputs:

- `agency-ops/workflows/website-lead-intake-workflow.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/workflows/stage-1-intake-handler-decision-scorecard.md`
- `agency-ops/workflows/stage-1-hosted-intake-implementation-ticket.md`
- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`
- `agency-ops/ops/website-route-qa-checklist.md`

Safe actions:

1. Create Stage 0 test scripts.
2. Improve form field and notification specifications.
3. Compare handler/provider options without selecting a paid vendor.
4. Prepare implementation handoff tickets.
5. Record required environment variables as placeholders only.

Gated actions:

- Selecting a paid provider.
- Configuring secrets.
- Enabling production intake.
- Enabling auto-reply, CRM write, sheet write, repository auto-write, or auto-send.

Outputs:

- Stage 0 intake QA records.
- Stage 1 decision records.
- Implementation tickets.
- Evidence log entries when tested.

## Loop 6: Proposal And Delivery Conversion

Trigger:

- Lead becomes discovery-needed, proposal-outline-ready, or proposal-draft-ready.
- Discovery notes identify a workflow, owner, tools, urgency, and first win.
- User asks for proposal, scope, SOW, or delivery plan.

Inputs:

- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`

Safe actions:

1. Score proposal readiness.
2. Create proposal outlines when facts support it.
3. Create client-specific delivery plans after a win or strong scope signal.
4. Define assumptions, dependencies, risks, QA, and handoff.
5. Keep proof capture ready but unpublished.

Gated actions:

- Sending proposals.
- Quoting final prices.
- Committing timeline.
- Touching client production systems.
- Publishing proof or case studies.

Outputs:

- Proposal scorecards.
- Proposal outlines or drafts.
- Delivery plans.
- Proof-capture records.

## Loop 7: Learning And Optimization

Trigger:

- Outreach is sent.
- Replies arrive.
- Discovery calls happen.
- QA finds issues.
- Delivery produces evidence.

Inputs:

- Lead records.
- Follow-up tracker.
- Website issue logs.
- Proposal scorecards.
- Delivery notes.
- Proof capture system.

Actions:

1. Record objections and questions.
2. Update FAQ and outreach copy when patterns emerge.
3. Update offer scope when repeated needs appear.
4. Update QA and blocker dashboards.
5. Update command brief and roadmap when priorities change.

Outputs:

- Outreach learning log.
- Updated FAQ or website brief.
- Updated offer or scope menu.
- Updated roadmap and command brief.

## Current Automated Situation

The agency currently has enough operating assets to handle the first controlled revenue test and the first website launch readiness pass, but two external execution areas remain blocked:

- Outreach execution: waiting for action-level approval to create mailbox drafts or send.
- Website launch execution: waiting for dependency/build and Vercel preview evidence.

Until one of those opens, the best autonomous work is to improve the loops around:

1. Stage 0 intake QA.
2. Outreach learning and KPI tracking.
3. Provider decision records that do not select paid vendors.
4. Delivery simulation and handoff readiness.
5. Website issue logging and launch evidence capture.

## Next Safe Automations To Create

1. `agency-ops/ops/stage-0-intake-test-script.md`
2. `agency-ops/ops/outreach-learning-log.md`
3. `agency-ops/ops/agency-kpi-tracker-spec.md`
4. `agency-ops/ops/website-preview-issue-log-template.md`
5. `agency-ops/delivery/simulated-roofing-lead-intake-delivery-plan.md`

## Current Gated Action Still Recommended

Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems for review only.

Do not send without a second explicit approval.
