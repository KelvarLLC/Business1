# Website Preview Issue Log Template

## Purpose

Provide a structured issue log for website preview QA so layout, routing, CTA, intake, proof, and launch-readiness problems become fixable records instead of loose notes.

This log does not mark the website preview-ready, production-ready, or publicly launched. It supports `agency-ops/ops/website-route-qa-checklist.md`, `agency-ops/ops/website-launch-evidence-log.md`, and the launch decision record process.

## Current Website Truth

- Repository: `KelvarLLC/Business1`
- Workspace: `agency-ops/`
- Website source: `agency-ops/website/`
- Current launch status: not launched
- Current build status: not verified in this environment
- Current preview URL: not recorded
- Current production URL/domain: not recorded
- Current intake path: Stage 0 structured mailto at `/start`
- Stage 1 hosted intake: specified but not live

## Source Files

- `agency-ops/ops/website-route-qa-checklist.md`
- `agency-ops/ops/stage-0-intake-test-script.md`
- `agency-ops/ops/website-launch-blocker-dashboard.md`
- `agency-ops/ops/website-launch-evidence-log.md`
- `agency-ops/ops/website-launch-decision-record-template.md`
- `agency-ops/ops/website-deployment-readiness.md`

## Severity Levels

Use one of these levels for every issue.

| Severity | Meaning | Launch impact |
| --- | --- | --- |
| Blocker | Prevents build, route load, navigation, intake, or truthful launch evidence | Blocks preview-ready or production-ready status |
| Major | Core user path works poorly or business claim risk exists | Must fix or explicitly accept before status change |
| Minor | Polish issue that does not block core route, CTA, or intake use | Can be tracked after preview-ready if documented |
| Note | Observation or future improvement | No direct launch block |

## Issue Statuses

| Status | Meaning |
| --- | --- |
| open | Logged and not yet addressed |
| investigating | Cause is being inspected |
| fix-ready | Clear fix exists and can be implemented |
| fixed-pending-qa | Fix applied, needs retest |
| verified | Retested and resolved |
| accepted | Known issue intentionally accepted with rationale |
| deferred | Not blocking current launch path; revisit later |

## Issue Entry Template

```markdown
## Issue [ID] - [Short title]

- Date found:
- Found by:
- Environment: local / Vercel preview / production
- URL:
- Route:
- Viewport/device:
- Browser:
- Severity: blocker / major / minor / note
- Status: open / investigating / fix-ready / fixed-pending-qa / verified / accepted / deferred
- Category: build / route / layout / navigation / CTA / intake / accessibility / copy / proof / performance / deployment / other
- Description:
- Steps to reproduce:
- Expected behavior:
- Actual behavior:
- Evidence link or screenshot:
- Suspected cause:
- Recommended fix:
- Owner:
- Follow-up due:
- Retest notes:
- Decision impact: no status change / preview-ready blocked / production-ready blocked / public-launch blocked
```

## Issue Log

No preview issues have been logged yet because no preview URL or build evidence is recorded.

Add issue entries below this line when QA begins.

---

## QA Summary Table

| ID | Route | Category | Severity | Status | Owner | Decision impact |
| --- | --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## Route Coverage Checklist

Use this when preview QA starts.

| Route | Desktop checked | Mobile checked | CTA checked | Intake checked | Issues logged | Pass/hold |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | no | no | no | n/a | no | pending |
| `/services` | no | no | no | n/a | no | pending |
| `/lead-intake` | no | no | no | n/a | no | pending |
| `/about` | no | no | no | n/a | no | pending |
| `/contact` | no | no | no | fallback only | no | pending |
| `/start` | no | no | no | no | no | pending |

## Evidence Recording Rule

After QA, summarize issue status in `agency-ops/ops/website-launch-evidence-log.md` using this format:

```markdown
- Issue log used: `agency-ops/ops/website-preview-issue-log-template.md`
- Blocker issues:
- Major issues:
- Minor issues:
- Accepted issues:
- Route coverage:
- Decision impact:
```

## Launch Decision Rule

Do not mark preview-ready if any blocker issue remains open.

Do not mark production-ready if:

- Stage 0 intake is untested,
- a major route or CTA issue remains unresolved or unaccepted,
- business claim safety issues remain open,
- proof labeling is unclear,
- deployment root evidence is missing,
- no launch decision record exists.

## Current Status

Template ready. No issues logged yet.
