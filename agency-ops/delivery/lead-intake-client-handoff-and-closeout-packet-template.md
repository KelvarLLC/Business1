# Lead Intake Client Handoff And Closeout Packet Template

Last updated: 2026-06-14 02:59 CDT

## Purpose

Use this packet at the end of a Lead Intake Command System / Follow-Up Engine delivery. It turns a working automation into a client-operable system with clear ownership, support boundaries, proof-capture rules, and post-launch follow-up.

This is a template. It is not a signed client commitment, public proof item, pricing quote, or claim that a real client result has occurred.

## Project Snapshot

- Client:
- Business type:
- Workflow delivered:
- Primary lead source:
- Tracker of record:
- Notification or reminder channel:
- Client owner:
- Kelvar owner:
- Delivery stage: `handoff-ready` / `handoff-complete` / `follow-up-or-expansion`
- Date handed off:
- Follow-up review date:

## What Was Delivered

Summarize the system in plain language.

Example:

Kelvar configured a phase-one lead intake workflow that captures new estimate requests from one primary source, normalizes the important details, assigns an owner and status, and prompts the next follow-up action so new and stale leads are easier to see.

Delivered components:

- Intake trigger:
- Lead tracker or destination:
- Required field handling:
- Status pipeline:
- Owner assignment rules:
- Follow-up reminder rules:
- Reporting or daily review view:
- Manual override path:
- Pause or emergency stop process:

## Client Operating Instructions

### Daily Review

Client owner should review once per business day:

- New leads.
- Leads not contacted.
- Follow-up due today.
- Qualified leads awaiting estimate or scheduling.
- Leads waiting longer than the agreed threshold.

Daily question:

What came in, what needs action, and what is stuck?

### Lead Status Updates

Default status meanings:

- `new`: captured but not yet reviewed.
- `needs-review`: missing, unclear, urgent, or unusual information.
- `contacted`: first human contact has happened.
- `qualified`: likely fit based on service, location, and next step.
- `appointment-set`: call, visit, estimate, or consultation is scheduled.
- `quoted`: estimate or proposal has been sent.
- `follow-up-due`: lead needs a follow-up action now.
- `waiting-on-lead`: the team is waiting for the lead to respond.
- `closed-won`: work was booked, sold, or accepted.
- `closed-lost`: lead is not moving forward.
- `nurture`: not ready now but worth keeping warm.

Client rule:

Update status when the human reality changes. The automation should support the team, not replace the team's judgment.

### Owner And Next Action

Every open lead should have:

- One owner.
- One next action.
- One follow-up due date when follow-up is needed.

If any of these are blank, the lead should be reviewed before the end of the business day.

## Human Review And Message Policy

Launch default:

- Internal reminders are allowed when configured and tested.
- External auto-send is off unless explicitly approved in writing.
- Draft messages, if added later, must be reviewed before sending unless the client separately approves exact auto-send rules.

Before enabling auto-send, confirm:

- Approved message copy.
- Approved timing.
- Exclusion rules.
- Pause process.
- Error-handling owner.
- Compliance or consent requirements.

## QA Completion Record

Record final test results before handoff.

| Test Case | Expected Result | Pass/Fail | Notes |
| --- | --- | --- | --- |
| Complete new lead | Lead appears with owner, status, and next action |  |  |
| Missing email | Lead is flagged for missing contact detail |  |  |
| Missing phone | Lead is flagged for missing contact detail |  |  |
| Unclear service request | Lead enters `needs-review` |  |  |
| Outside service area | Lead follows client policy |  |  |
| Urgent request | Lead is flagged for priority review |  |  |
| Duplicate-like lead | Duplicate handling is clear |  |  |
| Manual owner change | Owner can be changed without breaking workflow |  |  |
| Manual stage change | Status updates correctly in reporting view |  |  |
| Follow-up due | Reminder or due state appears as expected |  |  |
| Pause process | Client can pause or disable workflow safely |  |  |

## Known Limitations

List what the system intentionally does not do yet.

Examples:

- Only one primary source is included in phase one.
- Historical leads were not imported.
- Messages are not auto-sent.
- The workflow does not replace the client's CRM.
- Reporting shows operational status, not guaranteed revenue impact.
- Complex attribution is reserved for phase two.

## Support Boundaries

Included immediately after handoff:

- Clarify operating instructions.
- Fix handoff defects found in agreed QA tests.
- Adjust obvious field labels or status wording.
- Help the client run the first review cycle.

Not included unless separately approved:

- Adding new intake sources.
- Rebuilding the tracker or CRM structure.
- Enabling external auto-send.
- Building advanced dashboards.
- Migrating old lead records.
- Integrating paid tools or new vendors.
- Publishing proof, testimonials, or case studies.

## Phase-Two Opportunity Log

Capture useful expansion ideas without expanding the current scope by accident.

| Opportunity | Why It Matters | Dependency | Recommended Timing |
| --- | --- | --- | --- |
| Add second lead source | Captures more inquiry paths | Phase-one stability | After 2-4 weeks |
| Add draft reply library | Speeds response review | Approved message copy | After first usage review |
| Add CRM sync | Reduces duplicate entry | CRM access and mapping | After tracker is trusted |
| Add owner summary report | Improves weekly visibility | Clean status usage | After 2 weeks of data |
| Add approved proof capture | Supports future marketing | Client permission | After 14-30 days |

## Proof Capture Note

Use the proof ladder from `agency-ops/workflows/client-proof-and-case-study-capture-system.md`.

- Client approval status: none / anonymized process / anonymized result / named case study / testimonial
- Client type:
- Workflow problem:
- System delivered:
- Human approval points:
- What remained manual:
- Observable improvement:
- Measured result, if available:
- Measurement method:
- Public-safe summary:
- Private details removed:
- Follow-up date for 14-30 day proof check:

Default proof rule:

No public use unless the client explicitly approves the specific wording, identity level, screenshots, metrics, and testimonial language.

## 14-30 Day Follow-Up Review

Schedule a review after the system has been used in real operations.

Questions:

1. Is the team checking the lead view consistently?
2. Are new leads easier to see?
3. Are stale or waiting leads easier to identify?
4. Which reminders are useful?
5. Which reminders are noisy?
6. Which status values are confusing?
7. What should be added next?
8. Is there an observable improvement worth recording?
9. Is the client comfortable approving any anonymized proof?
10. Should the engagement move to expansion, maintenance, or closeout?

## Closeout Decision

Select one:

- `delivery-complete`: client can operate the workflow and no immediate expansion is needed.
- `follow-up-or-expansion`: client wants phase-two improvements or maintenance.
- `support-needed`: system works, but client needs more enablement.
- `blocked`: handoff cannot complete because access, testing, or client confirmation is missing.

Closeout notes:

- Final client owner:
- Final Kelvar owner:
- Remaining open issues:
- Next review date:
- Expansion recommendation:
- Proof permission status:

## Repository Storage Rules

Client-specific closeout packets should be saved under:

`agency-ops/delivery/CLIENT-SLUG/`

Do not store private client data, credentials, raw customer lists, regulated information, private screenshots, or confidential exports in the repository.

Public-safe proof drafts should only be created after explicit permission and should live under approved proof or website content paths.

## Related Files

- `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md`
- `agency-ops/delivery/simulated-home-services-lead-intake-delivery-package.md`
- `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`
- `agency-ops/workflows/client-proof-and-case-study-capture-system.md`
- `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`
