# Stage 1 Hosted Intake Implementation Ticket

## Purpose

Turn the hosted form-to-email implementation spec into an executable website work order for the first permanent `/start` intake capture upgrade.

This ticket is for a builder working inside `agency-ops/website/`. It should not be treated as approval to deploy, change environment settings, send emails, or remove the Stage 0 mailto fallback.

## Source References

Use these files as the operating context:

- `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/workflows/website-lead-intake-workflow.md`
- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/ops/30-day-launch-command-plan.md`

## Current State

- `/start` exists as a structured intake console.
- The current submit behavior opens a formatted email to `Kelvarllc.com@outlook.com`.
- No hosted handler, form vendor, email provider, environment variables, or deployed capture endpoint has been selected.
- Direct email fallback remains required.
- Human review remains required before any sales reply.

## Desired Result

A deployed visitor can submit the `/start` form without opening their email client. Kelvar receives one formatted internal notification email at `Kelvarllc.com@outlook.com`. The visitor sees a clear success or failure state. No public auto-reply, pricing, scheduling prompt, CRM write, or repository lead record is created automatically.

## Implementation Decision Needed

Before coding, choose one Stage 1 path:

1. Server-backed route inside the Next.js app.
2. Hosted form vendor that forwards to `Kelvarllc.com@outlook.com`.

Recommended default:

- Use a server-backed route if the deployment environment supports the chosen email provider cleanly.
- Use a hosted vendor only if it is faster, lower-risk, and easier to test.

Do not choose a paid service, change live deployment settings, or create provider credentials without user approval.

## Work Scope

### 1. Preserve Current Form UI

Keep the current `/start` structure and fields unless a small change is required for validation or submission state.

Required fields:

- Name
- Business name
- Email
- Workflow pain category
- What happens manually today
- What gets missed, delayed, or forgotten
- Best first win
- Consent to be contacted

Optional fields:

- Phone
- Website
- Current tools involved
- Timeline or urgency

### 2. Add Hosted Submission Path

If using a server-backed route:

- Create a form submission endpoint under the website app.
- Parse the posted form data.
- Validate required fields and field lengths.
- Add server-side operational fields: submitted timestamp, source route, initial stage, and review status.
- Send one internal notification email to `Kelvarllc.com@outlook.com`.
- Return a simple success or error response to the page.

If using a vendor:

- Configure the form to post to the vendor endpoint.
- Enable vendor spam protection if available.
- Confirm the vendor forwards readable submission emails to `Kelvarllc.com@outlook.com`.
- Document any dashboard setup needed in `agency-ops/ops/website-deployment-readiness.md`.

### 3. Add Submission States

The `/start` page should support:

- Idle state.
- Submitting state.
- Success state.
- Error state.

Success copy:

```text
Request received. Kelvar will review the workflow details and follow up with the most useful next step. No automation changes or messages are sent without human review.
```

Error copy:

```text
Something did not go through. Please email Kelvarllc.com@outlook.com with your workflow details, or try again in a moment.
```

### 4. Preserve Fallback

Keep direct email available from the Contact page.

If the hosted path fails during QA or after launch, restore the Stage 0 mailto behavior for `/start` until the issue is fixed.

### 5. Update Documentation

After implementation, update:

- `agency-ops/ops/website-deployment-readiness.md`
- `agency-ops/workflows/website-lead-intake-workflow.md`
- `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`
- `agency-ops/website/content/website-brief.md`

Only mark Stage 1 live after successful build, preview test, and notification delivery test.

## Validation Rules

Server-side or vendor-side validation should enforce:

- Required fields are present.
- Email looks valid enough for a contact form.
- Consent is true.
- Controlled workflow category is recognized.
- Text fields do not exceed documented limits.
- Honeypot or spam protection is active.

Do not accept credentials, private customer lists, regulated data, or raw client exports through the form.

## Internal Notification Format

Use the format from `agency-ops/workflows/hosted-form-to-email-implementation-spec.md`.

Minimum notification content:

- Submitted timestamp.
- Source route.
- Initial stage: `lead-identified`.
- Review status: `needs-human-review`.
- Contact details.
- Workflow category.
- Current tools.
- Manual process.
- Missed, delayed, or forgotten items.
- Best first win.
- Timeline or urgency.
- Consent status.
- Recommended operator action.

## Environment Variables

Possible variables if using a server-backed email provider:

```text
CONTACT_FORM_TO_EMAIL=Kelvarllc.com@outlook.com
CONTACT_FORM_FROM_EMAIL=[verified sender]
CONTACT_FORM_PROVIDER_API_KEY=[secret]
CONTACT_FORM_PROVIDER_DOMAIN=[if required]
```

Rules:

- Do not commit secrets.
- Do not change recipient without approval.
- Document provider-specific variables in deployment readiness notes.
- Keep Stage 0 fallback available until provider setup is confirmed.

## Acceptance Criteria

Stage 1 can be considered implemented only when:

- `/start` submits without opening an email client.
- Required field validation works.
- Consent is required.
- A spam guardrail or honeypot exists.
- Successful submission sends exactly one internal notification email.
- Visitor success state displays clearly.
- Visitor error state displays clearly if the handler fails.
- Direct email fallback remains available.
- Build passes.
- Deployment preview test passes.
- Documentation is updated.
- No public auto-reply, CRM write, pricing quote, scheduling prompt, or repository lead record is created automatically.

## Out Of Scope

Do not include these in Stage 1:

- Auto-sent sales replies.
- Public response-time SLA.
- CRM integration.
- Spreadsheet queue.
- Proposal generation.
- Automatic repository file creation.
- Paid scheduling workflow.
- Multi-step nurture automation.
- Client data uploads.
- Guaranteed response, revenue, or project outcome language.

## Rollback Criteria

Rollback to Stage 0 mailto if:

- Notification delivery is unreliable.
- Environment variables are missing or misconfigured.
- Spam submissions become unmanageable.
- The form blocks valid prospects.
- Build or deployment fails.
- The provider introduces unexpected cost, branding, privacy, or deliverability issues.

## Handoff Notes

After implementation, record:

- Handler or vendor selected.
- Provider account owner or dashboard location, if applicable.
- Environment variables required.
- Test submission timestamp.
- Notification recipient.
- Whether fallback remains active.
- Known limitations.
- Next recommended upgrade: stay Stage 1, move to sheet queue, or evaluate CRM.

## Current Status

Ticket ready. Implementation still requires a chosen handler or vendor, build access, deployment preview, and approval for any provider setup or environment changes.
