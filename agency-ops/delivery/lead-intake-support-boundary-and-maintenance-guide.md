# Lead Intake Support Boundary And Maintenance Guide

Status: internal reusable delivery-readiness guide
Last updated: 2026-06-14 15:02 CDT

## Purpose

Define the maintenance, support, exception-handling, and handoff boundaries for a Lead Intake Command System engagement after QA and client handoff.

This guide helps keep support practical and client-safe. It is not a client-specific support agreement, managed-service contract, service-level agreement, price quote, public proof approval, deployment record, provider selection, auto-send approval, or scope-expansion approval.

## When To Use This

Use this guide after the core Lead Intake delivery package, QA evidence record, and handoff/closeout packet exist for a real or simulated engagement.

Use it before:

- treating a delivery as ready for ongoing support,
- agreeing to maintain a client workflow,
- deciding whether a request is included support or new scope,
- asking for proof or case-study permission,
- recommending phase-two automation,
- or preparing a 14-30 day review.

## Support Boundary Principles

1. The delivered system should have one clear owner on the client side.
2. Maintenance should protect the workflow already delivered, not silently expand it.
3. Exceptions should be logged before they are fixed or turned into new scope.
4. Any client-facing automation that sends, writes, updates records, or changes production behavior remains approval-gated.
5. Proof, testimonials, screenshots, metrics, and case-study claims require explicit client approval.
6. Vendor, CRM, mailbox, calendar, form-handler, or deployment changes require a separate decision record when they affect live behavior.

## Default Included Support Window

Use this as a planning default only. Replace it with a client-specific agreement before promising it externally.

- Review period: 14-30 days after handoff.
- Included focus: questions about using the delivered intake flow, minor copy clarifications, routing-rule clarification, tracker interpretation, and basic exception review.
- Excluded by default: new intake sources, new departments, new automations, CRM rebuilds, auto-send activation, outbound campaigns, paid-provider setup, custom dashboards, public proof publishing, and production deployment changes.

## Maintenance Categories

### Category 1: Included Clarification

Use when the delivered workflow is functioning, but the client needs help understanding it.

Examples:

- How to read the tracker fields.
- Which lead status means owner review is needed.
- Where the formatted intake email goes.
- What to do when a lead is missing a field.

Default action: answer with operating guidance and update the handoff notes if the confusion is likely to recur.

### Category 2: Minor Correction

Use when a small delivered detail needs correction and does not change the workflow promise.

Examples:

- Fix a typo in an internal label.
- Clarify one notification line.
- Adjust a non-sensitive owner label.
- Correct a documented routing note to match the approved build.

Default action: log the correction, update the relevant handoff or QA record, and confirm whether the correction changes any evidence.

### Category 3: Exception Review

Use when the workflow behaved unexpectedly or a lead did not route cleanly.

Examples:

- Duplicate intake came in.
- Required field was missing.
- The wrong owner was selected.
- The lead source was not recognized.
- A client-side tool changed behavior.

Default action: capture the exception using the QA evidence record or review record, classify root cause, and decide whether it is a support correction, training note, or new-scope request.

### Category 4: New Scope

Use when the request would expand the delivered system.

Examples:

- Add a new lead source.
- Add SMS or email follow-up automation.
- Connect a CRM or field-service tool.
- Add reporting dashboards.
- Route leads by territory, revenue, service type, or urgency.
- Enable auto-send, auto-reply, CRM writes, sheet writes, or calendar updates.

Default action: route through discovery, scope menu, proposal-readiness scorecard, and proposal assembly kit before promising work.

### Category 5: Approval-Gated Change

Use when the request touches sensitive or irreversible behavior.

Examples:

- Change production deployment settings.
- Add or rotate secrets or environment variables.
- Select or pay for a vendor.
- Send messages automatically.
- Write to CRM, sheet, mailbox, calendar, or repository records automatically.
- Publish proof, testimonials, screenshots, or metrics.

Default action: stop and request explicit action-level approval with a clear recommended option.

## Support Request Intake Fields

Capture these fields before making a support decision:

- Client or simulated engagement:
- Request date:
- Request owner:
- Original delivered workflow:
- Related handoff packet:
- Related QA evidence record:
- Related 14-30 day review record:
- Request summary:
- Requested outcome:
- Systems involved:
- Is live behavior affected? yes/no/unknown
- Is client/customer data involved? yes/no/unknown
- Is auto-send or auto-write involved? yes/no/unknown
- Does this change public proof or claims? yes/no/unknown
- Proposed category: included clarification / minor correction / exception review / new scope / approval-gated change
- Recommended next action:
- Approval needed before action:

## Triage Decision Table

| Signal | Category | Next Step |
| --- | --- | --- |
| Client asks how to use an existing field | Included clarification | Answer and update handoff notes if needed |
| Delivered label or note is wrong | Minor correction | Correct, log, and refresh evidence if affected |
| Lead failed to route as expected | Exception review | Capture example, classify cause, decide support vs new scope |
| Client wants another source or tool connected | New scope | Route through discovery and proposal-readiness scoring |
| Client wants automated sending or record writes | Approval-gated change | Stop for explicit approval and risk review |
| Client wants proof or results published | Approval-gated change | Use proof-capture system and require written approval |

## Maintenance Review Checklist

Before closing a support item, confirm:

- The request was categorized.
- The related delivery, QA, handoff, or review artifact was identified.
- Any correction was logged.
- Any exception has an owner and disposition.
- No new scope was performed without proposal routing.
- No auto-send, auto-write, provider, deployment, pricing, or public-proof action was taken without approval.
- The next client-facing or internal action is clear.

## Phase-Two Opportunity Routing

If a support item reveals repeat demand, route it as a phase-two opportunity instead of absorbing it silently.

Common phase-two opportunities:

- More intake sources.
- Follow-up automation.
- Owner-response visibility.
- Reporting dashboard.
- CRM or field-service integration.
- Scheduling or appointment reminder layer.
- Client onboarding handoff layer.

Route phase-two opportunities through:

1. `agency-ops/offers/lead-intake-scope-menu.md`
2. `agency-ops/workflows/lead-intake-discovery-outline.md`
3. `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
4. `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
5. `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md`

## Closeout Note Template

Use this wording internally after resolving a support item:

> Support item reviewed as `[category]`. The delivered Lead Intake workflow remains `[unchanged / corrected / exception logged / new scope routed / approval-gated]`. No pricing, provider selection, deployment change, public proof, auto-send, auto-write, or client commitment was made unless separately recorded and approved.

## Related Artifacts

- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
- `agency-ops/delivery/lead-intake-client-handoff-and-closeout-packet-template.md`
- `agency-ops/delivery/lead-intake-delivery-qa-evidence-record-template.md`
- `agency-ops/delivery/lead-intake-14-30-day-review-record-template.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`
- `agency-ops/offers/lead-intake-scope-menu.md`
- `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
