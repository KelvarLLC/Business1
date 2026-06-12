# Agency Operating System

## Purpose

This document is the baseline operating guide for Kelvar LLC's automation agency workspace inside this repository. It keeps agency work organized, repo-contained, and easy to resume across future agent runs.

## Repository Scope

- Assigned repository: `KelvarLLC/Business1`
- Business workspace: `agency-ops/`
- All durable business artifacts, operating notes, lead records, proposals, delivery plans, and workflow specs should stay inside `agency-ops/`.
- Do not modify unrelated repository areas or operate on any other repository unless the user explicitly changes the assignment.

## Workspace Structure

- `agency-ops/leads/` for lead and opportunity records.
- `agency-ops/offers/` for sellable service definitions.
- `agency-ops/proposals/` for proposal-ready artifacts.
- `agency-ops/clients/` for client-specific operating notes.
- `agency-ops/workflows/` for reusable workflow specifications.
- `agency-ops/delivery/` for delivery plans, implementation checklists, and handoff materials.
- `agency-ops/ops/` for internal operating documents and agency process notes.

## Pipeline Stages

- `lead-identified`
- `qualification-in-progress`
- `qualified`
- `discovery-needed`
- `proposal-drafted`
- `proposal-sent`
- `won`
- `delivery-in-progress`
- `delivery-complete`
- `follow-up-or-expansion`
- `closed-lost`

## Operating Rules

1. Prefer narrow, sellable automation services over broad generic offers.
2. Save reusable work as repository artifacts instead of leaving valuable material only in chat.
3. Move each lead or client task to the clearest current pipeline stage.
4. Keep proposals, delivery plans, SOPs, and workflow specs practical and bounded.
5. Log meaningful actions, blockers, and next steps so work can resume cleanly.
6. Ask for approval before irreversible, high-risk, legal, financial, compliance-sensitive, destructive, or out-of-scope actions.

## Default Next Actions

- Create one focused offer brief in `agency-ops/offers/` for lead intake and follow-up automation.
- Create reusable checklists in `agency-ops/ops/` for lead qualification, proposal drafting, and delivery handoff.
- Add lead records under `agency-ops/leads/` as soon as a prospect or opportunity is identified.
