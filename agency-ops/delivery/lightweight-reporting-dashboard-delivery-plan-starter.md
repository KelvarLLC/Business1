# Lightweight Reporting Dashboard Automation Delivery Plan Starter

## Project

- Client: `[client name]`
- Project / workflow name: Lightweight Reporting Dashboard Automation
- Stage: `delivery-planning` or `delivery-in-progress`
- Related offer: `agency-ops/offers/lightweight-reporting-dashboard-automation.md`
- Related proposal: `agency-ops/proposals/lightweight-reporting-dashboard-proposal-starter.md`

## Objective

### Target Outcome

Create a lightweight reporting workflow that refreshes the agreed dashboard or tracker, highlights exceptions, and sends a recurring summary so owners can see the next operational decisions without manually rebuilding reports.

### Success Criteria

- Initial source data refreshes or imports into the dashboard through the agreed workflow.
- Metrics and status fields match the approved definitions.
- Exception flags identify stale, missing, overdue, failed, unpaid, or upcoming-deadline items as scoped.
- Recurring summary reaches the approved recipients with clear next-action signals.
- Handoff documentation explains how to refresh, monitor, troubleshoot, and expand the workflow.

## Workstreams

### Workstream 1: Discovery And Metric Design

- Confirm dashboard decisions, metrics, source systems, and reporting rhythm.
- Define required fields, status values, formulas, and exception rules.
- Confirm privacy, compliance, and access-control constraints.
- Identify source data quality issues and manual fallback needs.

### Workstream 2: Build And Integration

- Create or update the dashboard/tracker structure.
- Connect, import, or normalize source data from one or two initial systems.
- Add metric calculations and status views.
- Add exception flags and owner/team summary workflow.
- Add refresh and failure-handling notes where direct automation is not available.

### Workstream 3: Testing, Handoff, And Optimization

- Test sample records and known edge cases.
- Verify metric definitions, filters, summary delivery, and access rules.
- Document operating steps, refresh rhythm, troubleshooting, and limitations.
- Capture phase-two improvements such as extra data sources, role-based views, or deeper reporting.

## Milestones

1. Discovery complete: decisions, metrics, source data, recipients, and reporting rhythm are confirmed.
2. Technical design approved: dashboard structure, data flow, exception logic, and summary format are agreed.
3. Build complete: dashboard, refresh workflow, exception flags, and recurring summary are configured.
4. Testing complete: sample records and metric checks have been reviewed and accepted.
5. Delivery complete: handoff notes are delivered and the client knows how to operate the reporting workflow.

## Inputs And Dependencies

### Required Systems

- Initial source systems, such as spreadsheet, CRM, form, inbox label, calendar, payment tool, or task board.
- Dashboard/tracker destination.
- Email, notification, or task tool for recurring summaries.
- Access-control mechanism if different users need different visibility.

### Required Credentials Or Access

- Read or export access for the initial source systems.
- Edit access to the dashboard/tracker destination.
- Permission to create recurring summaries or notifications.
- Permission to test sample records.
- Access to any existing reports used for comparison.

### Required Source Data

- Sample source records.
- Current reports, dashboards, spreadsheets, or manual reporting examples.
- Metric definitions and status meanings.
- Exception thresholds and escalation preferences.
- Summary recipients and reporting schedule.
- Privacy, compliance, and role-visibility requirements.

## Execution Notes

### Implementation Details

- Keep phase one narrow: one dashboard, one reporting rhythm, and one or two source systems.
- Prefer owner-action metrics over decorative charts.
- Include exception views so the report identifies what needs attention, not just what happened.
- Document any source data limitations directly in the handoff notes.
- Use a manual import path if direct integration is not stable or available yet.

### Validation Steps

- Compare dashboard values against sample source records.
- Confirm formulas and filters match metric definitions.
- Confirm missing or stale data is flagged.
- Confirm exception thresholds behave as expected.
- Confirm recurring summary arrives for approved recipients.
- Confirm access rules prevent unnecessary exposure of sensitive data.

### Handoff Notes

- Show where the dashboard lives and how to read it.
- Explain the refresh workflow and reporting rhythm.
- Explain how exception flags should be handled.
- Document how to pause or adjust the summary workflow.
- List known source data limitations and recommended phase-two improvements.

## Risks / Blockers

- Current blocker: client-specific data sources, access, metric definitions, and reporting owner are unknown until discovery.
- Required resolution: collect source examples, dashboard destination, metric definitions, refresh rhythm, and access rules before implementation.

- Risk: source data is not clean enough for reliable automation.
- Mitigation: use field validation, exception flags, and a narrower first dashboard before expanding sources.

- Risk: dashboard metrics are unclear or disputed.
- Mitigation: define each metric plainly and validate against sample records before rollout.

- Risk: sensitive data is exposed in summaries.
- Mitigation: limit fields, confirm recipients, and require approval for sensitive or regulated data.

## Immediate Next Actions

- Next action: collect sample source records, current manual reports, metric definitions, dashboard destination, and summary recipient list.
- Owner: agency operator until a client-side owner is named.
- Due / target date: before implementation kickoff.

## Closeout Checklist

- Dashboard tested against realistic source records.
- Metric definitions reviewed and accepted.
- Exception flags tested and documented.
- Recurring summary delivered to approved recipients.
- Access and sensitive-data handling reviewed.
- Handoff notes saved with operating instructions.
- Known limitations and phase-two opportunities recorded.
- Pipeline stage updated to `delivery-complete` or `follow-up-or-expansion`.
