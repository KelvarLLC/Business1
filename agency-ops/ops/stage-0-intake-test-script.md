# Stage 0 Intake Test Script

## Purpose

Provide a repeatable QA script for testing the current `/start` structured mailto intake path before any website launch status changes.

This script does not mark Stage 0 as verified by itself. It defines the test steps and evidence to record when a preview or production environment is available.

## Current Intake Truth

- Route: `/start`
- Current intake stage: Stage 0 structured mailto console
- Intended recipient: `Kelvarllc.com@outlook.com`
- Submission behavior: opens a formatted email in the visitor's email client
- Stage 1 hosted form-to-email: specified but not live
- Auto-reply: not enabled
- CRM/sheet/repository auto-write: not enabled

## Source Files

- `agency-ops/ops/website-route-qa-checklist.md`
- `agency-ops/ops/website-launch-evidence-log.md`
- `agency-ops/ops/website-launch-status.md`
- `agency-ops/workflows/website-lead-intake-workflow.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`

## Test Preconditions

Before running this test, confirm:

- A local, preview, or production URL is available.
- The route `/start` loads without build/runtime errors.
- Browser pop-up or mail client behavior can be observed.
- The tester understands that the test should not send a real client inquiry unless intentionally performing an end-to-end inbox check.

## Test Data

Use clearly marked test data:

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

Do not use real customer data during QA.

## Desktop Test Steps

### Route Load

1. Open `/start` on desktop viewport.
2. Confirm page renders without error.
3. Confirm header/navigation are usable.
4. Confirm the intake console is visible.
5. Confirm direct or fallback contact path is available somewhere on the site.

Expected result:

- `/start` loads.
- Intake content is readable.
- No overlap, clipping, or broken layout is visible.

### Input Completion

1. Fill out every visible field using the test data above.
2. Confirm long text fields accept realistic workflow descriptions.
3. Confirm required fields are clear.
4. Confirm consent checkbox or consent language appears before submission.

Expected result:

- Inputs are usable.
- Labels and fields are understandable.
- Consent is visible and required where designed.

### Mailto Generation

1. Activate the review/submit CTA.
2. Observe whether the email client opens.
3. Confirm recipient is `Kelvarllc.com@outlook.com`.
4. Confirm subject clearly identifies a workflow review or automation review request.
5. Confirm body includes structured intake fields.
6. Confirm body does not include unsupported promises or auto-reply claims.

Expected result:

- Mail client opens with a structured email.
- The body is usable by the agency operator for lead qualification.

### Fallback Behavior

1. If the mail client does not open, confirm the user can still contact Kelvar through a visible fallback.
2. Check `/contact` for direct email fallback.
3. Confirm fallback does not claim a hosted form submission was received.

Expected result:

- User is not trapped if mailto fails.
- Stage 0 remains truthful.

## Mobile Test Steps

Use at least:

- 360 x 740
- 430 x 932

Steps:

1. Open `/start`.
2. Confirm content stacks cleanly.
3. Confirm fields are tappable.
4. Confirm keyboard does not hide critical fields permanently.
5. Confirm long labels wrap cleanly.
6. Fill out the test data.
7. Activate CTA.
8. Confirm mailto behavior or fallback path.

Expected result:

- Mobile intake is usable.
- No field or CTA is blocked by layout.
- Email generation remains structured.

## Negative Test Cases

### Missing Required Contact Detail

Action:

- Leave required contact detail blank and attempt to submit.

Expected result:

- User receives a clear validation prompt or cannot proceed as designed.

### Missing Consent

Action:

- Leave consent unchecked, if consent checkbox exists.

Expected result:

- User cannot proceed or consent requirement remains visible.

### Long Workflow Description

Action:

- Enter a long workflow description.

Expected result:

- Text remains contained.
- Email body remains readable.

### Special Characters

Action:

- Include punctuation, ampersands, slashes, and line breaks in fields.

Expected result:

- Mailto body remains encoded enough to read.
- No field breaks the email body structure.

## Evidence Record Template

Add this to `agency-ops/ops/website-launch-evidence-log.md` after testing:

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
- Test data used: marked QA data only
- Result: pass / partial / fail
- Recipient verified: yes / no
- Subject verified: yes / no
- Structured body verified: yes / no
- Consent behavior verified: yes / no
- Fallback verified: yes / no
- Known issues:
- Decision impact: no status change / preview-ready candidate / production-ready candidate / launch-hold
- Follow-up action:
```

## Pass Criteria

Stage 0 intake can be considered QA-passed only when:

- `/start` renders on desktop and mobile.
- Required fields are usable.
- Consent behavior is visible and works as designed.
- Mailto opens or fallback is clear.
- Recipient is `Kelvarllc.com@outlook.com`.
- Email subject is recognizable.
- Email body includes structured intake details.
- No Stage 1 hosted form, CRM write, auto-reply, or auto-send claim is shown.
- Evidence is recorded in the launch evidence log.

## Fail Conditions

Mark as fail or launch-hold candidate if:

- `/start` does not render.
- Critical fields are unusable on mobile.
- CTA does nothing and no fallback is visible.
- Recipient is wrong.
- Email body loses important field data.
- Consent is missing where required by the design.
- Page implies hosted submission success when only mailto exists.

## Current Status

Not tested in preview or production.

Use this script when a local build, Vercel preview, or production environment is available. Until then, Stage 0 remains specified but not QA-verified in a deployed environment.
