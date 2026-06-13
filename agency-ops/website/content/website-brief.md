# Kelvar LLC Website Brief

## Purpose

Create the first public-facing website for Kelvar LLC's automation agency offer. The site should position the business as a practical automation partner for small service businesses with recurring intake, follow-up, onboarding, reminder, and reporting friction.

## Visual Thesis

Quietly premium operations workspace: grounded dark hero, clean neutral surface, and one green operational accent that signals workflow clarity.

## Content Plan

- Home: brand, promise, core automation offers, business outcomes, delivery process, and intake CTA.
- Services: four narrow service packages with problem, included scope, best fit, expected outcome, and scope-this-workflow CTA.
- About: operating philosophy and agency focus.
- Contact: discovery prompt, guided intake CTA, and direct email fallback.
- Start: guided intake path that helps a prospect identify the workflow type, answer discovery questions, and send a cleaner review request.

## Interaction Thesis

- Hero content enters with a restrained lift animation.
- Links and CTAs use small hover lift transitions to keep the interface tactile.
- Long service rows and process steps create a scannable editorial rhythm instead of dashboard-card clutter.

## Primary CTA

Start an automation review through `/start`, using a guided prefilled email intake until a permanent form, scheduler, or CRM capture path is selected.

## Current Lead Capture Path

- Public CTAs now route to `/start`.
- `/start` groups prospects into lead follow-up, client handoff, appointment reminder, or reporting workflow needs.
- The page asks for the workflow type, current tools, manual steps, missed/delayed work, best first win, and urgency.
- The supporting workflow spec lives at `agency-ops/workflows/website-lead-intake-workflow.md`.

## Next Website Improvements

1. Add a real scheduling or form link once the agency chooses its booking or capture tool.
2. Add proof once the first case study or internal demo result exists.
3. Add an offer-specific landing page for the strongest converting service.
4. Connect deployment to Vercel from `agency-ops/website/`.
