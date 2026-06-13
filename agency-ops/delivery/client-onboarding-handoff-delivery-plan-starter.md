# Client Onboarding Handoff Automation Delivery Plan Starter

## Project

- Client: `[client name]`
- Project / workflow name: Client Onboarding Handoff Automation
- Stage: `delivery-planning` or `delivery-in-progress`
- Related offer: `agency-ops/offers/client-onboarding-handoff-automation.md`
- Related proposal: `agency-ops/proposals/client-onboarding-handoff-proposal-starter.md`

## Objective

### Target Outcome

Create a reliable post-sale workflow that captures required client details, produces a clear internal handoff, starts the first delivery tasks, and flags missing information before onboarding stalls.

### Success Criteria

- A test won-client record creates or updates the agreed onboarding tracker.
- Required onboarding fields are captured, copied, or clearly flagged as missing.
- Internal owner/admin receives a clear handoff summary and next action.
- Delivery-start tasks or checklist items are created in the agreed destination.
- Client next-step message is drafted or sent only according to the approved launch mode.
- Handoff documentation explains how to run, monitor, pause, and update the workflow.

## Workstreams

### Workstream 1: Discovery And Workflow Mapping

- Confirm the standard post-sale trigger.
- Document required client inputs, setup steps, and internal owners.
- Identify common blockers and missing-information points.
- Confirm which steps require human review before automation.

### Workstream 2: Build And Integration

- Create or update the onboarding tracker structure.
- Configure intake capture or structured handoff input.
- Generate the internal handoff summary.
- Create delivery-start task or checklist records.
- Configure missing-information reminders.
- Add client next-step draft or approved confirmation workflow.

### Workstream 3: Testing, Handoff, And Optimization

- Test ready-to-start onboarding.
- Test missing information, delayed client response, manual review, duplicate-like records, and cancellation/hold scenarios.
- Document operating steps, owner responsibilities, and known limitations.
- Capture phase-two expansion ideas.

## Milestones

1. Discovery complete: trigger, required inputs, systems, owners, and review points are confirmed.
2. Technical design approved: tracker fields, task/checklist destination, reminders, and launch mode are agreed.
3. Build complete: intake, handoff summary, tracker, tasks, reminders, and client communication path are configured.
4. Testing complete: realistic onboarding scenarios and edge cases have been reviewed.
5. Delivery complete: handoff notes are delivered and client owner/admin can operate the workflow.

## Inputs And Dependencies

### Required Systems

- Post-sale trigger source, such as email, form, CRM stage, signed proposal, or manual owner action.
- Onboarding tracker destination.
- Task manager, project board, spreadsheet, CRM, or checklist tool.
- Email or notification tool for reminders and client next steps.
- Document or folder location for client setup materials, if used.

### Required Credentials Or Access

- Admin or integration access for the trigger source.
- Edit access to tracker and task/checklist destination.
- Permission to create reminders, notifications, drafts, or approved messages.
- Test data access or permission to create sample onboarding records.

### Required Source Data

- Current onboarding checklist or step list.
- Example client handoff notes and intake responses.
- Required fields before delivery can start.
- Client next-step message examples and tone guidance.
- Internal owner/admin list and escalation rules.
- Review requirements for contract, payment, or compliance-related checkpoints.

## Execution Notes

### Implementation Details

- Start with the most common onboarding path to keep delivery bounded.
- Use a lightweight status model: new, waiting-on-client, waiting-on-internal, ready-to-start, in-progress, on-hold, complete.
- Prefer draft-first client messages at launch unless the client explicitly approves auto-send behavior.
- Keep the tracker operational: status, owner, missing input, next action, due date, and latest note.
- Treat contract, payment, legal, and compliance-related items as human review checkpoints unless separately approved.

### Validation Steps

- Create a sample won-client record and confirm the tracker updates correctly.
- Confirm required fields are captured or flagged.
- Confirm the handoff summary is readable and includes owner, next action, and blockers.
- Confirm task/checklist creation works in the agreed destination.
- Confirm missing-information reminders trigger on the intended timing.
- Confirm client-facing message behavior matches the approved draft-first or auto-send mode.
- Confirm owner/admin can manually update status without breaking the workflow.

### Handoff Notes

- Show where new onboarding records appear.
- Explain how statuses and missing inputs should be updated.
- Explain how tasks/checklists are created and reviewed.
- Document how to pause reminders or client-facing messages.
- Document who owns exceptions and blocked records.
- List recommended phase-two improvements.

## Risks / Blockers

- Current blocker: client-specific systems, access, and onboarding checklist are unknown until discovery.
- Required resolution: collect current onboarding materials, tool list, owner roles, required inputs, and approval rules before implementation.

- Risk: onboarding paths vary by service line.
- Mitigation: launch with the highest-volume or highest-value path first and queue variations for phase two.

- Risk: automated client-facing communication conflicts with contract or payment status.
- Mitigation: use human review checkpoints and draft-first messages until approval is explicit.

- Risk: tracker fields become too heavy for daily use.
- Mitigation: keep fields limited to status, owner, blocker, next action, due date, and latest note.

## Immediate Next Actions

- Next action: collect sample post-sale handoff notes, onboarding checklist, tool list, and client next-step copy.
- Owner: agency operator until a client-side owner is named.
- Due / target date: before implementation kickoff.

## Closeout Checklist

- Workflow tested with realistic onboarding examples.
- Edge cases reviewed and documented.
- Client owner/admin can update onboarding status.
- Client-facing message launch mode confirmed.
- Handoff notes saved with operating instructions.
- Known limitations and phase-two opportunities recorded.
- Pipeline stage updated to `delivery-complete` or `follow-up-or-expansion`.
