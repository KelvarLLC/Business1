# Hosted Form-To-Email Implementation Spec

## Purpose

Define the first permanent website intake upgrade for Kelvar LLC: replacing the `/start` page mailto behavior with a hosted form-to-email capture path while preserving human review, simple operations, and repository-backed lead records.

This is the Stage 1 implementation layer for `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`.

## Current Baseline

- Current website route: `/start`
- Current behavior: structured intake form opens a formatted email to `Kelvarllc.com@outlook.com`
- Current limitation: visitor must have an email client, no hosted submission queue exists, and no confirmation email is sent automatically
- Current lead system of record: manually created lead records under `agency-ops/leads/`

## Target Stage 1 Outcome

A visitor can submit the `/start` form directly from the website. The system sends a formatted internal notification email to `Kelvarllc.com@outlook.com`, shows a confirmation state to the visitor, and preserves manual review before any sales response or commitment.

Stage 1 does not create CRM records, auto-send sales replies, quote pricing, or create repository files automatically.

## Recommended Implementation Shape

Use the simplest hosted form endpoint available for the deployed website environment.

Recommended first choice:

- A server-backed route in the website app if the Vercel deployment can support it.
- The route receives structured form data and sends an internal notification email.

Acceptable fallback:

- A trusted hosted form vendor that forwards submissions to `Kelvarllc.com@outlook.com` and allows spam protection.

Avoid for Stage 1:

- Full CRM automation.
- Auto-sent sales replies.
- Multi-step nurture sequences.
- Client data uploads.
- Paid tools that require operational overhead before lead volume exists.

## Required Form Fields

Keep the existing `/start` fields:

- Name
- Business name
- Email
- Phone, optional
- Website, optional
- Workflow pain category
- Current tools involved
- What happens manually today
- What gets missed, delayed, or forgotten
- Best first win
- Timeline or urgency
- Consent to be contacted

Add operational fields server-side:

- Submitted timestamp
- Source route
- User agent, if needed for spam review
- Referrer, if available
- Initial pipeline stage: `lead-identified`
- Initial review status: `needs-human-review`

Do not ask the visitor for sensitive credentials, regulated data, private customer lists, or production system access in the public form.

## Server-Side Validation

Minimum validation:

- Name is required.
- Business name is required.
- Email is required and must look like an email address.
- Workflow pain category is required.
- Manual workflow description is required.
- Missed or delayed item description is required.
- Best first win is required.
- Consent checkbox must be true.

Recommended length limits:

- Name: 120 characters
- Business name: 160 characters
- Email: 180 characters
- Phone: 80 characters
- Website: 240 characters
- Workflow category: controlled option
- Current tools: 1,000 characters
- Manual workflow: 2,000 characters
- Missed or delayed: 2,000 characters
- Best first win: 1,500 characters
- Timeline: 500 characters

Reject or flag submissions that exceed limits instead of storing oversized text.

## Spam And Abuse Guardrails

Use lightweight protections before adding heavy tooling:

- Hidden honeypot field.
- Basic rate limit by IP or deployment platform support.
- Reject submissions without consent.
- Reject empty required fields.
- Optionally block obvious URL spam in long text fields.
- Avoid public auto-replies until spam volume and message safety are understood.

If a vendor is used, enable its built-in spam protection.

## Internal Notification Email

Send the internal notification to:

```text
Kelvarllc.com@outlook.com
```

Recommended subject:

```text
New Kelvar automation review request - [Business Name]
```

Recommended body:

```text
New automation review request

Submitted: [timestamp]
Source route: [/start or /lead-intake]
Initial stage: lead-identified
Review status: needs-human-review

Contact
Name: [name]
Business: [business]
Email: [email]
Phone: [phone]
Website: [website]

Workflow
Category: [workflow category]
Current tools: [current tools]
Manual process today: [manual workflow]
Missed, delayed, or forgotten: [missed/delayed]
Best first win: [first win]
Timeline or urgency: [timeline]
Consent to contact: [yes/no]

Recommended operator action
1. Review the inquiry.
2. Create a lead record under agency-ops/leads/ if this is a real prospect.
3. Assign preliminary fit and pipeline stage.
4. Use the relevant discovery outline, reply kit, scope menu, proposal scorecard, or closeout path.
```

Do not include hidden anti-spam fields in the notification unless needed for abuse review.

## Visitor Confirmation State

After successful submission, show a short confirmation message on the page.

Recommended copy:

```text
Request received. Kelvar will review the workflow details and follow up with the most useful next step. No automation changes or messages are sent without human review.
```

Avoid promising exact response times until the user approves a public SLA.

If submission fails:

```text
Something did not go through. Please email Kelvarllc.com@outlook.com with your workflow details, or try again in a moment.
```

Keep direct email available on the Contact page as fallback.

## Environment Variables

Exact variables depend on the chosen email provider or form vendor.

Recommended placeholders for a server-backed email route:

```text
CONTACT_FORM_TO_EMAIL=Kelvarllc.com@outlook.com
CONTACT_FORM_FROM_EMAIL=[verified sender]
CONTACT_FORM_PROVIDER_API_KEY=[secret]
CONTACT_FORM_PROVIDER_DOMAIN=[if required]
```

Rules:

- Do not commit secrets.
- Document required variables in `agency-ops/ops/website-deployment-readiness.md` after the provider is chosen.
- Use a verified sender address if the email provider requires one.
- Keep recipient changes approval-gated.

## Repository Lead Record Handoff

Stage 1 does not automatically create lead records. Human review still creates durable records.

For each real inquiry:

1. Create a lead record under `agency-ops/leads/` using the lead record template.
2. Set stage to `lead-identified`, `qualification-in-progress`, or `discovery-needed`.
3. Capture the source route and submitted timestamp.
4. Summarize workflow pain, tools, first win, urgency, missing inputs, and recommended next action.
5. Use `agency-ops/workflows/website-lead-intake-workflow.md` for qualification.
6. Use offer-specific assets when relevant:
   - `agency-ops/workflows/lead-intake-reply-response-kit.md`
   - `agency-ops/offers/lead-intake-scope-menu.md`
   - `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`
   - `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`

## QA Checklist

Before considering Stage 1 complete:

- Required fields block invalid submission.
- Consent must be checked.
- Optional fields can be blank.
- Long fields are limited or safely rejected.
- Successful submission sends one internal notification.
- Internal email formatting is readable.
- Confirmation state appears without layout shift.
- Failure state appears if the endpoint errors.
- Contact page still has direct email fallback.
- No public auto-reply is sent unless separately approved.
- No secrets are committed.
- Build succeeds after implementation.
- Deployment readiness checklist is updated with provider and environment variables.

## Rollback Plan

If the hosted endpoint fails after launch:

1. Restore the `/start` submit behavior to the previous mailto path.
2. Keep direct email visible on the Contact page.
3. Record the failure in `agency-ops/ops/website-deployment-readiness.md`.
4. Do not claim the hosted capture path is live until retested.

## Done Definition

Stage 1 is done when:

- `/start` no longer depends on the visitor's email client.
- Submissions reach `Kelvarllc.com@outlook.com` reliably.
- The visitor sees a clear success or failure state.
- Human review remains required before sales responses.
- Lead records are created manually for real inquiries.
- Deployment notes and workflow docs reflect the selected provider or route.

## Current Next Step

Use this spec after the website build/deployment path is available and a form handler or vendor is chosen. Until then, keep Stage 0 mailto as the live-safe fallback.
