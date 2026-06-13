# Lead Intake And Follow-Up Automation Delivery Plan Starter

## Project

- Client: `[client name]`
- Project / workflow name: Lead Intake And Follow-Up Automation
- Stage: `delivery-planning` or `delivery-in-progress`
- Related offer: `agency-ops/offers/lead-intake-follow-up-automation.md`
- Related proposal: `agency-ops/proposals/lead-intake-follow-up-proposal-starter.md`

## Objective

### Target Outcome

Create a reliable workflow that captures new leads, records the right details, assigns a clear status, and prompts the next follow-up action so fewer leads are missed.

### Success Criteria

- New test leads appear in the agreed tracker with required fields populated.
- Each lead receives a clear stage or next-action status.
- Follow-up reminders or draft responses trigger according to the agreed timing.
- Owner/admin can see new, contacted, qualified, waiting, and closed leads in one place.
- Handoff documentation explains how to run, monitor, pause, and update the workflow.

## Workstreams

### Workstream 1: Discovery And Workflow Mapping

- Confirm all lead intake sources.
- Identify the primary source for phase one.
- Document current owner/admin follow-up behavior.
- Define required fields, status labels, qualification criteria, and escalation rules.

### Workstream 2: Build And Integration

- Configure intake capture from the primary source.
- Create or update the lead tracker structure.
- Add status mapping and required field handling.
- Add follow-up reminder or draft-response logic.
- Add simple reporting view for lead status and next actions.

### Workstream 3: Testing, Handoff, And Optimization

- Test happy-path lead intake.
- Test missing fields, duplicate-like submissions, unqualified leads, no-response follow-ups, and manual override behavior.
- Document operating steps and known limitations.
- Capture phase-two improvement ideas.

## Milestones

1. Discovery complete: lead sources, fields, rules, and responsible owner are confirmed.
2. Technical design approved: tracker, workflow trigger, follow-up timing, and reporting view are agreed.
3. Build complete: intake, tracker, status mapping, and follow-up prompt are configured.
4. Testing complete: sample leads and edge cases have been reviewed.
5. Delivery complete: handoff notes are delivered and the client knows how to operate the workflow.

## Inputs And Dependencies

### Required Systems

- Primary lead source, such as website form, email inbox, spreadsheet, scheduling tool, or CRM.
- Lead tracker destination.
- Email, notification, or task tool for follow-up prompts.
- Reporting view or dashboard location.

### Required Credentials Or Access

- Admin or integration access for the primary lead source.
- Edit access to the tracker destination.
- Permission to create reminders, draft messages, or notifications.
- Test data access or permission to create sample leads.

### Required Source Data

- Example leads from the current process.
- Current follow-up message examples.
- Qualification rules and disqualification reasons.
- Follow-up timing expectations.
- Owner/admin user list and responsibilities.

## Execution Notes

### Implementation Details

- Start with one primary intake source to reduce risk and keep delivery bounded.
- Use a lightweight stage model: new, contacted, qualified, waiting, closed-won, closed-lost, and nurture if needed.
- Prefer reminders or draft responses at launch unless the client explicitly approves auto-send behavior.
- Keep the reporting view operational: status, lead age, owner, next follow-up date, and latest note.

### Validation Steps

- Submit a sample lead and confirm it appears in the tracker.
- Confirm required fields are captured or flagged.
- Confirm stage mapping behaves as expected.
- Confirm the follow-up prompt triggers on the intended schedule.
- Confirm owner/admin can update status manually without breaking the workflow.
- Confirm reporting view reflects changed statuses and next actions.

### Handoff Notes

- Show where new leads appear.
- Explain how statuses should be updated.
- Explain how follow-up prompts are created and reviewed.
- Document how to pause the workflow.
- Document who to contact when a lead does not route correctly.
- List recommended phase-two improvements.

## Risks / Blockers

- Current blocker: client-specific systems and access are unknown until discovery.
- Required resolution: collect intake source, tracking destination, follow-up timing, qualification rules, and access before implementation.

- Risk: too many intake sources are added to phase one.
- Mitigation: choose the highest-volume or highest-value source first and queue the rest for phase two.

- Risk: follow-up message approval is delayed.
- Mitigation: launch with internal reminders first, then add draft or auto-send behavior after approval.

- Risk: tracker becomes too complex for owner/admin adoption.
- Mitigation: keep required fields lean and reporting focused on next action.

## Immediate Next Actions

- Next action: collect client intake examples, tool list, qualification rules, and preferred follow-up timing.
- Owner: agency operator until a client-side owner is named.
- Due / target date: before implementation kickoff.

## Closeout Checklist

- Workflow tested with realistic examples.
- Edge cases reviewed and documented.
- Client owner/admin can update lead status.
- Handoff notes saved with operating instructions.
- Known limitations and phase-two opportunities recorded.
- Pipeline stage updated to `delivery-complete` or `follow-up-or-expansion`.
