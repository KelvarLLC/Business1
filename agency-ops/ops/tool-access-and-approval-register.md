# Tool Access And Approval Register

## Purpose

Record the current operating permission posture for the Automation Agency Operator so future runs can keep moving with the connected tools while preserving action-level gates for sensitive business moves.

## Current User Direction

Last updated: 2026-06-14 02:22 CDT

The user confirmed that GitHub and connected tools/apps may be used to continue useful work and follow through inside the designated repository.

Operational interpretation:

- Use GitHub as the primary system of record for durable agency artifacts.
- Continue using available tools and connected apps when they directly support `KelvarLLC/Business1` and the `agency-ops/` business workspace.
- Keep moving on non-destructive, repo-scoped improvements without unnecessary waiting.
- Do not touch another agent's repository.
- Do not operate outside the assigned repository or unrelated connected services.

## Confirmed Repository Boundary

- Assigned repository: `KelvarLLC/Business1`
- Default branch: `main`
- Business workspace: `agency-ops/`
- Repository containment rule: all durable business files, operating docs, lead records, proposals, delivery assets, website artifacts, workflow specs, launch records, and logs stay under `agency-ops/` unless the user explicitly changes the setup.

## Tools And Apps Approved For Use Within Scope

Use these when the action supports the assigned repository and business operations:

- GitHub connector for reading, creating, and updating repo-backed artifacts under `agency-ops/`.
- Local memory folder for durable continuity notes, action logs, artifact indexes, and workflow checkpoints.
- Gmail connector for directly relevant business outreach or reply drafting when the mailbox choice is appropriate and action-level gates are satisfied.
- Outlook Email connector for directly relevant business outreach or reply drafting when the mailbox choice is appropriate and action-level gates are satisfied.
- Local analysis, file inspection, and document-generation tools when they support the assigned repository's business operations.

## Actions That Can Continue Without Additional Approval

These are safe to keep doing when relevant:

- Read assigned-repository files through GitHub.
- Create or update non-destructive operating docs inside `agency-ops/`.
- Improve launch, deployment, intake, proposal, delivery, proof-capture, QA, and pipeline documentation.
- Create internal checklists, scorecards, evidence logs, workflow specs, and handoff notes.
- Update memory continuity files when meaningful work is completed.
- Prepare draft copy inside repository files for later review.
- Record blockers, assumptions, next steps, and current status.

## Actions That Still Need Clear Action-Level Approval

Tool access approval is not the same as approval to perform high-impact actions. Get clear approval before:

- Creating mailbox drafts in Gmail or Outlook.
- Sending outreach, replies, follow-ups, or forwarded emails.
- Quoting final prices or publishing package pricing.
- Selecting paid tools, providers, hosted form vendors, or committing spend.
- Changing deployment settings, DNS, production domains, or public launch status.
- Marking the website preview-ready, production-ready, publicly launched, or on launch hold.
- Publishing client proof, testimonials, screenshots, metrics, or case-study claims.
- Enabling auto-send behavior for prospects, clients, or website visitors.
- Connecting client production systems, CRMs, regulated data flows, or paid automation tools.
- Deleting repository files or making destructive changes.
- Touching any repository other than `KelvarLLC/Business1`.

## Current Recommended Action Path

1. Continue repo-backed improvements through GitHub inside `agency-ops/`.
2. Keep `agency-ops/ops/current-command-brief.md` as the quick-state dashboard.
3. Use `agency-ops/ops/website-launch-evidence-log.md` for launch/build/deployment evidence.
4. Use `agency-ops/workflows/outreach-execution-control-sheet.md` if the user gives clear approval for mailbox draft creation or sending.
5. Use memory files after meaningful work so future runs can resume cleanly.

## Notes For Future Runs

- If the user says to keep going without naming a gated action, continue safe non-destructive work.
- If the user explicitly approves a gated action, execute only the approved action, then log the result.
- If a later user instruction conflicts with this register, follow the newer instruction if it remains inside the assigned repository and does not violate safety or containment rules.
