# Website Launch Governance Note

## Purpose

Connect the website roadmap, deployment handoff ticket, deployment readiness checklist, and launch decision record into one operating rule:

> Deployment work creates evidence. A completed launch decision record changes launch status.

This prevents the Kelvar LLC website from being treated as preview-ready, production-ready, or publicly launched just because a build passed, a Vercel preview exists, or a deployment URL was created.

## Active Launch Documents

Use these together:

- `agency-ops/ops/website-deployment-readiness.md`: readiness checklist and known blockers.
- `agency-ops/ops/website-vercel-deployment-handoff-ticket.md`: deployment work order for an operator with npm registry and Vercel access.
- `agency-ops/ops/website-launch-decision-record-template.md`: required record for preview-ready, production-ready, public-launch-approved, or launch-hold status.
- `agency-ops/ops/30-day-launch-command-plan.md`: operating cadence and decision gates.
- `agency-ops/ops/agency-roadmap.md`: top-level coordination baseline.

## Launch Status Rules

### Not Launched

Default status until proven otherwise.

Use this status when:

- Build has not been run successfully.
- Vercel preview has not been reviewed.
- Intake QA has not passed.
- Public launch approval has not been recorded.
- A deployment URL exists but no launch decision record exists.

### Preview Ready

Use only after a launch decision record confirms:

- Dependencies install.
- Build passes.
- Preview URL exists.
- Core routes render.
- Primary CTAs route correctly.
- Intake behavior is testable.
- Known issues are recorded.

Preview ready does not mean publicly launched.

### Production Ready

Use only after a launch decision record confirms:

- Build passed.
- Preview QA passed.
- Intake QA passed.
- Deployment root is `agency-ops/website/`.
- Rollback path is understood.
- Public copy and proof level are reviewed.

Production ready does not mean publicly launched unless public approval is also recorded.

### Public Launch Approved

Use only after a launch decision record confirms:

- Production URL or domain is known.
- Build, preview QA, and intake QA passed.
- Public proof status is reviewed.
- User approval to mark the website launched is recorded.
- Roadmap, website brief, deployment readiness, and memory are updated after launch.

### Launch Hold

Use when any critical evidence is missing, failed, unknown, or approval-gated.

Common launch-hold reasons:

- npm registry access fails.
- `npm run build` fails.
- Vercel project root is incorrect.
- Preview URL is missing.
- Core route fails to render.
- Mobile layout has major issues.
- `/start` intake does not work.
- Direct email fallback is broken.
- Stage 1 hosted capture is claimed before handler/vendor QA passes.
- Public copy overstates proof, launch status, or automation behavior.
- Public launch approval is missing.

## Operating Procedure

When build or deployment evidence changes:

1. Complete a new record from `agency-ops/ops/website-launch-decision-record-template.md`.
2. Choose exactly one status: preview ready, production ready, public launch approved, or launch hold.
3. Record the reason and known issues.
4. Update `agency-ops/ops/website-deployment-readiness.md` if the evidence changes the deployment state.
5. Update `agency-ops/ops/agency-roadmap.md` only after the status is confirmed.
6. Update memory with the decision, commit, launch status, blockers, and next action.

## Approval Gates

The launch decision record does not approve:

- Public launch without user approval.
- DNS changes.
- Paid provider setup.
- Hosted intake provider selection.
- Environment variable changes.
- Auto-replies.
- CRM writes.
- Outreach sending.
- Public proof or testimonial publishing.

Each of those still requires its own approval or completed prerequisite.

## Current Status

Current website launch status remains not launched.

Known current blockers:

- Local npm registry access has previously failed for `@types/node`.
- Direct repository clone from the current environment has previously failed with a 403 CONNECT tunnel response.
- Full build verification has not completed in the current environment.
- Vercel project setup has not been confirmed.
- No launch decision record has been completed with live deployment evidence.
- No public launch approval has been recorded.

## Next Action

When npm registry and Vercel access are available, run the deployment handoff ticket, then complete the launch decision record before changing website launch status.