# 30-Day Launch Command Plan

## Purpose

Turn Kelvar LLC's current agency foundation into a focused 30-day launch sprint. This plan connects the website, inbound intake, first outbound batch, pipeline handling, proposal readiness, delivery packaging, proof capture, and delivery learning into one execution sequence.

The goal is simple: create real discovery conversations for the Lead Intake Command System / Follow-Up Engine offer while keeping the business organized enough to deliver the first qualified project cleanly.

## Current Launch Position

- Website exists under `agency-ops/website/` with home, services, lead-intake, about, contact, and start routes.
- `/start` now functions as a structured intake console that opens a formatted email request.
- Website deployment readiness is documented in `agency-ops/ops/website-deployment-readiness.md`.
- Inbound capture upgrade path is documented in `agency-ops/workflows/inbound-lead-capture-upgrade-plan.md`.
- Lead Intake / Follow-Up offer is packaged in `agency-ops/offers/lead-intake-follow-up-automation.md`.
- Lead Intake scope menu is documented in `agency-ops/offers/lead-intake-scope-menu.md`.
- Lead Intake reusable implementation spec is documented in `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md`.
- Lead Intake discovery outline is documented in `agency-ops/workflows/lead-intake-discovery-outline.md`.
- Lead Intake reply response kit is documented in `agency-ops/workflows/lead-intake-reply-response-kit.md`.
- Lead Intake proposal decision scorecard is documented in `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md`.
- Lead Intake proposal assembly kit is documented in `agency-ops/proposals/lead-intake-proposal-assembly-kit.md`.
- Client proof and case-study capture is documented in `agency-ops/workflows/client-proof-and-case-study-capture-system.md`.
- Proposal and delivery starter files exist for the lead intake offer.
- Dallas/Fort Worth home-services prospects and draft-only outreach batches exist.
- Outreach execution is controlled by `agency-ops/workflows/outreach-execution-control-sheet.md`.
- No outbound email has been sent. Sending remains approval-gated.

## Launch Thesis

The first sale should not come from a broad AI transformation pitch. It should come from a narrow operational pain:

> New estimate or service requests arrive, someone has to notice them quickly, route them correctly, and follow up before the lead goes cold.

The first offer should stay framed as a simple workflow map and lightweight build, not a full CRM rebuild.

## 30-Day Success Targets

These targets are operational, not guaranteed business outcomes.

- Website build verified and deployment path ready.
- First outbound batch approved, drafted, and sent if the user gives explicit approval.
- Every sent outreach item logged against a lead record with follow-up due date.
- Any reply converted into a structured lead update within one business day.
- Any reply handled through the reply response kit before discovery or closeout.
- Pricing or scope questions routed through the Lead Intake scope menu instead of improvised numbers.
- At least one discovery-ready opportunity has a discovery outline prepared.
- Lead Intake proposal decision scorecard is ready to decide whether a lead is proposal-draft-ready, proposal-outline-ready, discovery-needed, or nurture/close.
- Lead Intake proposal assembly kit is ready to customize a scoped proposal quickly after a qualified reply.
- Delivery plan starter is ready to convert into a client-specific implementation plan once work is won.
- Reusable workflow spec is available to keep phase-one scope bounded.
- Proof capture system is ready to turn first delivery evidence into approved process proof, result proof, or a future case study.

## Execution Priorities

### Priority 1: Revenue Activation

Primary move: get the first controlled outreach batch ready for approval.

Recommended approval option:

1. Create Outlook drafts for DFW HVAC, Cool Tech, and Lone-Star Roof Systems.
2. Review the drafts in the mailbox.
3. Send only after explicit send approval.
4. Follow up after 3 business days if no reply and follow-up sending is also approved.

Why this matters:

- These three leads have clear public intake signals.
- Home-services intake follow-up is easier to discuss than regulated or sensitive workflows.
- A three-prospect batch is small enough to learn from without overwhelming follow-up handling.

### Priority 2: Website Launch Readiness

Primary move: verify and deploy the current site when environment access allows.

Required check:

```bash
cd agency-ops/website
npm install
npm run build
```

Deployment root:

```text
agency-ops/website
```

Website launch is valuable, but it should not block the first controlled outbound test. Outbound can point to the lead-intake offer concept first and the site second.

### Priority 3: Inbound Capture Upgrade

Primary move: keep `/start` as the structured intake console until a hosted form endpoint is selected.

Recommended next upgrade after deployment:

- Stage 1: hosted form-to-email.
- Destination: `Kelvarllc.com@outlook.com`.
- Human review remains required before any sales reply.
- Repository lead records remain the system of record for qualified or meaningful inquiries.

### Priority 4: Reply, Discovery, And Proposal Readiness

Primary move: prepare the first qualified reply to move fast without improvising.

When a prospect responds:

1. Classify the reply using `agency-ops/workflows/lead-intake-reply-response-kit.md`.
2. Update the lead record with the reply category, summary, buying signal, missing information, and next action.
3. Draft a response from the kit and seek approval before sending unless the user has already approved that exact response path.
4. If interested, move to `qualification-in-progress` or `discovery-needed`.
5. Use `agency-ops/workflows/lead-intake-discovery-outline.md` to guide the discovery call or async review.
6. Capture the current tools, intake source, follow-up timing, owner, and first win.
7. Use `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md` to keep implementation scope bounded.
8. Use `agency-ops/offers/lead-intake-scope-menu.md` to choose the right package path: blueprint, single-source build, or follow-up visibility upgrade.
9. Use `agency-ops/proposals/lead-intake-proposal-decision-scorecard.md` to decide whether the lead is ready for a proposal draft, proposal outline, more discovery, or nurture/close.
10. Use `agency-ops/proposals/lead-intake-proposal-assembly-kit.md` to assemble a scoped proposal only when the scorecard supports it.
11. Use `agency-ops/proposals/lead-intake-follow-up-proposal-starter.md` as the proposal base.
12. Keep scope to one primary intake path unless discovery proves a broader need.

### Priority 5: Delivery Readiness And Proof Capture

Primary move: keep the first build bounded and turn delivery learning into trustworthy future proof.

When a project is won:

1. Create a client-specific delivery plan under `agency-ops/delivery/`.
2. Use `agency-ops/delivery/lead-intake-follow-up-delivery-plan-starter.md` as the base.
3. Use `agency-ops/workflows/lead-intake-follow-up-workflow-spec.md` as the implementation pattern.
4. Use `agency-ops/offers/lead-intake-scope-menu.md` to verify that the delivery plan matches the sold package.
5. Start with one intake source, one tracker destination, and one follow-up mechanism.
6. Launch with reminders or draft responses unless auto-send is explicitly approved.
7. Use `agency-ops/workflows/client-proof-and-case-study-capture-system.md` during closeout before turning any result into website, proposal, or outreach proof.
8. Ask for proof permission only after a useful delivery outcome exists.

## Weekly Cadence

### Week 1: Activate

- Confirm first outreach path.
- Create approved mailbox drafts if authorized.
- Run website build check when possible.
- Use the reply response kit, discovery outline, workflow spec, scope menu, proposal scorecard, and proposal assembly kit as the ready kit for any response.
- Do not expand prospecting until first-batch readiness is complete.

### Week 2: Send And Learn

- Send the first batch only if explicitly approved.
- Track send dates and follow-up due dates in lead records.
- Review any replies within one business day.
- Classify replies before drafting a response.
- Route pricing or scope questions through the scope menu.
- Adjust outreach language only from actual signal, not guessing.

### Week 3: Convert

- Move interested leads to discovery.
- Use the scope menu to choose blueprint, single-source build, or follow-up visibility upgrade.
- Use the proposal decision scorecard before drafting proposal materials.
- Use the proposal assembly kit to draft client-specific proposal outlines for qualified replies.
- Prepare one scoped implementation path per qualified prospect.
- Upgrade website intake only if deployment is ready or inbound volume justifies it.

### Week 4: Close And Compound

- Follow up on open leads.
- Mark clear no-fit leads as closed-lost or nurture.
- Convert any won work into a delivery plan.
- Record objections, questions, and delivery assumptions back into offer language.
- Use the proof capture system for any completed delivery before adding claims to public assets.
- Decide whether to run the second Dallas batch.

## Daily Operating Checklist

Use this during active launch periods.

1. Check whether any approval-gated action is pending.
2. Check whether any lead reply or website inquiry needs a record update.
3. Check whether any follow-up date is due.
4. Move each active lead to the clearest pipeline stage.
5. Score proposal readiness before drafting proposal materials.
6. Capture one useful learning in the relevant lead, offer, or workflow file.
7. Avoid creating new assets unless they reduce friction in outreach, discovery, proposal, delivery, or proof capture.

## Decision Gates

### Outreach Gate

Requires explicit user approval before:

- Creating mailbox drafts.
- Sending first emails.
- Sending follow-ups.
- Changing sender mailbox.

### Reply Gate

Requires explicit user approval before:

- Sending any prospect reply drafted from the response kit.
- Quoting pricing.
- Offering a call time on behalf of the user.
- Contacting a referred person.

### Scope Gate

Requires user review before:

- Publishing package pricing.
- Quoting a final price.
- Expanding beyond one intake source in phase one.
- Offering auto-send as part of the initial package.
- Selling a full CRM migration.

### Proof Gate

Requires explicit client approval before:

- Naming a client publicly.
- Publishing a testimonial.
- Sharing screenshots, metrics, or case-study details.
- Describing a client result beyond internal delivery notes.

### Deployment Gate

Requires build verification or an accepted deployment environment before:

- Marking the website launched.
- Treating Vercel deployment as complete.
- Claiming public availability.

### Automation Gate

Requires client approval before:

- Auto-sending messages to leads or customers.
- Changing production client systems.
- Connecting paid tools, CRMs, or regulated data flows.

## Metrics To Track

Track these manually until a dashboard exists:

- Prospects researched.
- Lead records created.
- Drafts created.
- Emails sent after approval.
- Replies received.
- Reply categories.
- Scope-menu path selected.
- Proposal scorecard outcome.
- Leads moved to discovery.
- Proposals drafted.
- Projects won.
- Delivery plans created.
- Proof permission status.
- Case-study candidates.
- Common objections or blockers.

## Current Command Decision

The most relevant next decision is still outreach approval, because the website and operating system now exist but the pipeline has not yet contacted the best first prospects.

Recommended choice:

> Approve Outlook draft creation for DFW HVAC, Cool Tech, and Lone-Star Roof Systems. Drafts should be created for review only, not sent until a second explicit approval.

If outreach remains unapproved, continue only with non-destructive work: website build/deployment readiness, intake capture preparation, proposal readiness, proof capture, and delivery packaging.
