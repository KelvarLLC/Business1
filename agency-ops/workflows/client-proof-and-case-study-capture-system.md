# Client Proof And Case Study Capture System

## Purpose

Create a disciplined way to turn real delivery work into trustworthy proof for the website, proposals, outreach follow-up, and future offers.

This system exists so Kelvar can become more credible after each project without overstating results, fabricating outcomes, or exposing client information.

## Operating Principle

Proof should move through a ladder:

1. Internal demo proof.
2. Delivery artifact proof.
3. Client-approved process proof.
4. Client-approved result proof.
5. Public case study.

Do not skip levels. A demo is useful, but it is not a client result. A client result is useful, but it is not public proof until the client approves what can be shared.

## When To Use This

Use this workflow when any of these happen:

- A Lead Intake project is won.
- A workflow map is completed for a prospect or client.
- A delivery plan turns into a working automation.
- A client gives positive feedback.
- A measurable before/after signal becomes available.
- A proposal needs stronger evidence than general claims.
- The website needs real proof beyond the current demo workflow.

## Proof Types

### 1. Demo Proof

Use for internal or website-safe explanation before client outcomes exist.

Allowed language:

- "Demo workflow"
- "Example scenario"
- "Illustrative workflow"
- "A sample estimate request becomes a structured lead record"

Not allowed:

- Calling it a client result.
- Claiming revenue impact.
- Claiming time saved unless measured.
- Implying a real customer used it.

Current artifact:

- `agency-ops/website/content/lead-intake-demo-proof.md`

### 2. Delivery Artifact Proof

Use when Kelvar has created a real client-facing or internal delivery asset, but not yet measured outcomes.

Examples:

- Workflow map.
- Intake field inventory.
- Automation test checklist.
- Lead tracker schema.
- Follow-up timing matrix.
- Before/after workflow diagram.
- Delivery closeout notes.

Allowed language:

- "Built a lead intake workflow map for a home-services team."
- "Converted scattered intake details into a structured follow-up checklist."
- "Created a delivery-ready automation plan covering triggers, owners, and next actions."

Not allowed:

- Results claims without evidence.
- Client names without approval.
- Screenshots or data containing private client or customer information.

### 3. Client-Approved Process Proof

Use when a client approves a general description of the work but not detailed metrics or identity.

Allowed language:

- "For a service business, Kelvar mapped incoming estimate requests into a structured owner-and-follow-up workflow."
- "The workflow clarified who owns each new request, what happens next, and when follow-up should occur."

Approval needed:

- Client-approved anonymized description.
- Permission to describe business type.
- Permission to describe systems involved if any tools are named.

### 4. Client-Approved Result Proof

Use only when a result is measured or credibly confirmed.

Possible signals:

- Average response time before and after.
- Number of missed or stale leads found.
- Number of manual handoff steps removed.
- Number of weekly reminders handled.
- Number of records normalized.
- Number of follow-up tasks created.
- Client-reported admin hours reduced.

Allowed language:

- "Reduced manual lead triage from X steps to Y steps."
- "Created a daily queue that surfaced X previously untracked leads."
- "Helped the team see owner, next action, and follow-up timing in one place."

Not allowed:

- Revenue claims unless directly supported and client-approved.
- Percentage claims without the baseline, date range, and measurement method.
- Guarantees that future clients will get the same outcome.

### 5. Public Case Study

Use only after client approval.

Minimum sections:

1. Client type.
2. Starting problem.
3. Workflow before Kelvar.
4. System built.
5. Human approval points.
6. Measured or observed outcome.
7. What remains intentionally manual.
8. Reusable lesson for similar businesses.

Public case study rules:

- Use the client's name only with explicit approval.
- Use anonymized wording by default.
- Remove private customer data, screenshots, credentials, private messages, and internal names.
- Keep claims narrow and tied to the actual project.
- Add a note when proof is process-based rather than metric-based.

## Capture Checklist

Use this during delivery and closeout.

### Before Build

- Record the client type.
- Record the workflow pain in plain language.
- Record the current trigger, owner, tools, and handoff path.
- Record the first metric or observable signal that would show improvement.
- Confirm whether the client is open to anonymized proof later.

### During Build

- Save the approved workflow map or delivery notes.
- Record important scope decisions.
- Record what remains manual by design.
- Record test cases and edge cases.
- Avoid storing sensitive customer data in public or repo-visible artifacts.

### At Handoff

- Record what was delivered.
- Record what changed for the team.
- Record any measurable result available at handoff.
- Record any known limitation.
- Ask whether anonymized process proof may be used later.

### After 14 To 30 Days

- Ask whether the workflow is being used.
- Ask what changed in response time, follow-up visibility, or manual coordination.
- Ask whether any simple metric can be shared.
- Ask for a short testimonial only if the client is clearly satisfied.
- Ask what can be used publicly: nothing, anonymized process proof, anonymized result proof, named case study, or testimonial.

## Client Approval Menu

Use this language when asking for proof permission:

"Would you be comfortable with Kelvar using an anonymized version of this workflow as proof of the type of system we build? We can keep your company name, customer details, screenshots, and exact tools private. The public version would only describe the business type, the workflow problem, what changed, and any result you explicitly approve."

Permission options:

1. No public use.
2. Anonymized process description only.
3. Anonymized result description with approved metrics.
4. Named case study.
5. Short testimonial.

Default to option 1 unless the client approves otherwise.

## Repository Storage Rules

Save proof-related artifacts carefully:

- Internal delivery notes: `agency-ops/delivery/CLIENT-SLUG/`
- Public-safe case study drafts: `agency-ops/website/content/case-studies/`
- Proposal proof snippets: `agency-ops/proposals/proof-snippets/`
- Website-safe demo proof: `agency-ops/website/content/`

Do not store private client data, credentials, customer lists, regulated data, or raw client exports in the repository.

## Website Integration Rules

The website may use these proof levels:

- Current state: demo proof only.
- After first client delivery: anonymized process proof if approved.
- After measured results: anonymized result proof if approved.
- After strong permission: named case study or testimonial.

Update these files when public proof changes:

- `agency-ops/website/content/website-brief.md`
- `agency-ops/website/content/lead-intake-demo-proof.md`
- `agency-ops/website/app/lead-intake/page.tsx`
- `agency-ops/ops/brand-doctrine-and-public-voice.md`
- `agency-ops/ops/agency-roadmap.md`

## Proposal Integration Rules

Use proof in proposals only when it is accurate for the prospect's situation.

Good proposal proof language:

- "A current demo shows the intended pattern: a request becomes a structured lead record with owner, next action, and follow-up timing."
- "For similar service-business workflows, Kelvar focuses on making owner, next step, and follow-up timing visible before adding more complex automation."
- "Once a client-approved result exists, include the exact measured improvement and approval status."

Avoid:

- Implied guarantees.
- Anonymous results that cannot be traced internally.
- Over-broad AI transformation claims.

## Closeout Proof Note Template

Use this inside a client delivery closeout file.

```markdown
## Proof Capture Note

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
```

## Current Next Action

For now, keep the public website at the demo-proof level. After the first won project, use this system during delivery closeout before adding any real result to the website, outreach copy, or proposals.
