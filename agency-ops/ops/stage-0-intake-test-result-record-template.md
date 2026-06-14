# Stage 0 Intake Test Result Record Template

Date created: 2026-06-14
Status: Evidence template
Workspace: `agency-ops/`
Website area: `agency-ops/website/`
Route: `/start`
Current intake stage: Stage 0 structured mailto console

## Purpose

Provide a fillable record for capturing Stage 0 `/start` intake QA results when a local, preview, or production website environment is available.

This template turns the Stage 0 intake test script into a durable evidence record. It does not mark the website as preview-ready, production-ready, publicly launched, or intake-verified by itself.

## Current Truth Before Testing

- Assigned repository: `KelvarLLC/Business1`
- Workspace boundary: `agency-ops/`
- Website source: `agency-ops/website/`
- Intake route: `/start`
- Intake destination: `Kelvarllc.com@outlook.com`
- Current intake mechanism: structured `mailto:` email generation
- Stage 1 hosted form-to-email: specified but not live
- Auto-reply: not enabled
- CRM/sheet/repository auto-write: not enabled
- Launch status before test: not launched
- Build verification in current environment: not verified

## Do-Not-Change Rules

Completing this record does not authorize:

- Website launch-status changes.
- Deployment changes.
- DNS changes.
- Environment variable changes.
- Stage 1 hosted intake implementation.
- Paid provider or hosted form vendor selection.
- Auto-reply, auto-send, CRM write, sheet write, or repository write behavior.
- Public proof, client-result claims, or case-study claims.

Use this record only to capture evidence.

## Test Run Summary

Fill this section after a test run.

| Field | Value |
| --- | --- |
| Test date/time |  |
| Operator |  |
| Repo | `KelvarLLC/Business1` |
| Branch or commit tested |  |
| Environment | local / preview / production |
| URL tested |  |
| Browser(s) |  |
| Device or viewport(s) |  |
| Test data type | QA test data only |
| Overall result | pass / partial / fail / blocked |
| Decision impact | no status change / preview-ready candidate / launch-hold candidate |
| Follow-up owner |  |
| Follow-up due date |  |

## Preconditions

Mark each item before testing.

| Check | Status | Evidence / notes |
| --- | --- | --- |
| Local, preview, or production URL is available | pending |  |
| `/start` route loads | pending |  |
| Tester can observe mail client or fallback behavior | pending |  |
| Test data is clearly marked as QA data | pending |  |
| Tester will not send a real inquiry unless intentionally approved | pending |  |
| Website status is understood as not launched before this test | pending |  |

## Test Data Used

Use or adapt the standard QA test data. Do not use real customer data.

```text
Name: Test Operator
Business: Kelvar QA Test Business
Email: test@example.com
Phone: 555-0100
Workflow pain: Lead intake and follow-up visibility
Current tools: Website form, email inbox, spreadsheet
Manual steps: Copy form submissions into a sheet and remind owner manually
Missed items: Follow-up due dates sometimes unclear
First win: Owner can see new requests, next action, and follow-up due date
Urgency: Testing only
Consent: checked, if required
```

Any changes to standard test data:

- 

## Desktop Result Record

| Check | Expected Result | Result | Evidence / notes |
| --- | --- | --- | --- |
| `/start` loads without runtime error | Page renders normally | pending |  |
| Header/navigation usable | Links visible and usable | pending |  |
| Intake console visible | Fields are readable | pending |  |
| Inputs accept test data | Fields can be completed | pending |  |
| Long workflow text remains contained | No overflow or clipping | pending |  |
| Consent behavior visible | Consent is present and works as designed | pending |  |
| CTA activates mailto or intended review action | Email client opens or fallback is clear | pending |  |
| Recipient is correct | `Kelvarllc.com@outlook.com` | pending |  |
| Subject is recognizable | Workflow review or automation review request | pending |  |
| Body includes structured fields | Submitted fields appear in body | pending |  |
| No unsupported claims appear | No auto-reply, hosted form, CRM write, or guarantee claim | pending |  |
| Fallback path exists if mailto fails | Direct email or contact path available | pending |  |

Desktop viewport(s) tested:

- 

Desktop screenshots or evidence links:

- 

## Mobile Result Record

Minimum recommended viewports:

- 360 x 740
- 430 x 932

| Check | Expected Result | Result | Evidence / notes |
| --- | --- | --- | --- |
| `/start` loads on mobile | Page renders normally | pending |  |
| Content stacks cleanly | No overlap or clipped text | pending |  |
| Fields are tappable | Inputs can be selected and completed | pending |  |
| Keyboard does not permanently hide critical fields | User can complete form | pending |  |
| Long labels wrap cleanly | Text remains readable | pending |  |
| CTA remains reachable | User can activate review action | pending |  |
| Mailto or fallback works | Email client opens or fallback is clear | pending |  |
| Recipient remains correct | `Kelvarllc.com@outlook.com` | pending |  |
| Structured body remains readable | Field labels and values survive mobile flow | pending |  |

Mobile viewport(s) tested:

- 

Mobile screenshots or evidence links:

- 

## Negative Test Result Record

| Test | Expected Result | Result | Evidence / notes |
| --- | --- | --- | --- |
| Required contact detail missing | User cannot proceed or sees clear validation | pending |  |
| Consent unchecked, if present | User cannot proceed or consent remains visible | pending |  |
| Long workflow description | Text remains contained and email body readable | pending |  |
| Special characters and line breaks | Mailto body remains readable | pending |  |
| No local mail client available | Fallback path is visible and truthful | pending |  |

## CTA And Route Cross-Check

| Source | Expected target | Result | Evidence / notes |
| --- | --- | --- | --- |
| Home primary CTA | `/start` | pending |  |
| Services Lead Intake link | `/lead-intake` | pending |  |
| Lead Intake CTA | `/start` | pending |  |
| Contact CTA or fallback | `/start` or direct email | pending |  |
| Footer contact path | Direct email or `/contact` | pending |  |

## Issues Found

Record every issue, even if minor.

| ID | Severity | Route | Viewport | Description | Recommended fix | Blocks launch? |
| --- | --- | --- | --- | --- | --- | --- |
|  | blocker / major / minor |  |  |  |  | yes / no |

Severity definitions:

- Blocker: prevents intake completion, breaks route rendering, sends to wrong recipient, loses critical data, or misrepresents launch/intake status.
- Major: significant usability or trust issue but intake can still be completed.
- Minor: polish issue, small copy concern, or non-blocking layout defect.

## Evidence Summary For Launch Evidence Log

After completing the test, copy a concise version into `agency-ops/ops/website-launch-evidence-log.md`:

```markdown
## Evidence Entry

- Date and time:
- Operator:
- Repo: `KelvarLLC/Business1`
- Commit or branch checked:
- Work area: `agency-ops/website/`
- Action type: Stage 0 intake QA
- Environment: local / preview / production
- URL tested:
- Viewports tested:
- Test data used: QA data only
- Result: pass / partial / fail / blocked
- Recipient verified: yes / no
- Subject verified: yes / no
- Structured body verified: yes / no
- Consent behavior verified: yes / no
- Fallback verified: yes / no
- Known issues:
- Decision impact: no status change / preview-ready candidate / launch-hold candidate
- Follow-up action:
```

## Result Interpretation

### Pass

Use only if:

- `/start` renders on tested desktop and mobile viewports.
- Required fields are usable.
- Consent behavior is visible and works as designed.
- Mailto opens or fallback is clear.
- Recipient is `Kelvarllc.com@outlook.com`.
- Subject is recognizable.
- Body includes structured intake details.
- No Stage 1 hosted form, CRM write, auto-reply, or auto-send claim appears.
- Evidence is ready to copy into the launch evidence log.

### Partial

Use if the main flow works but there are non-blocking usability, copy, or layout issues.

### Fail

Use if intake cannot be completed, the route breaks, recipient is wrong, critical data is lost, fallback is missing, or page copy misrepresents Stage 0/Stage 1 truth.

### Blocked

Use if no runnable environment, preview URL, or observable mailto behavior is available.

## Status Change Rule

Do not change `agency-ops/ops/website-launch-status.md` from this record alone. A status change also requires build/deployment evidence, route QA evidence, known issue review, launch decision record completion, and explicit approval where the status change is public-facing or deployment-related.

## Next Action After Completion

Choose one:

- Record evidence only; no status change.
- Create issue log entries for blockers or major defects.
- Re-test after fixes.
- Prepare preview-ready decision record if all required evidence exists.
- Keep website status as not launched and continue readiness work.
