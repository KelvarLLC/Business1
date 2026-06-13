# Kelvar LLC Website Brief

## Purpose

Create the first public-facing website for Kelvar LLC's automation agency offer. The site positions the business as a practical automation partner for small service businesses with recurring intake, follow-up, onboarding, reminder, reporting, and delivery friction.

## Visual Thesis

Command-center galactic armada: a dark full-bleed systems-map hero, grounded neutral content sections, restrained motion, and one green operational accent that keeps the cosmic direction tied to practical workflow clarity.

## Content Plan

- Home: brand, ecosystem promise, service fleet, command-layer model, business outcomes, delivery process, and discovery CTA.
- Services: five narrow automation modules with problem, included scope, best fit, and expected outcome.
- Start: structured intake console for routing a prospect's first workflow pain into an automation review request.
- Lead Intake landing page: focused conversion path for the first strongest offer, including best-fit signals, build scope, launch outcomes, and CTA.
- About: operating philosophy and translation of the armada idea into practical modular systems.
- Contact: discovery prompt and direct email fallback.

## Interaction Thesis

- Hero content enters with a restrained lift animation while the background system map drifts slowly.
- Orbit, route, fleet-node, offer-node, and intake-console visuals create the sense of a living AI ecosystem without distracting from the offer.
- CTAs, service rows, workflow choices, and form states use small hover and layout transitions to make the site feel responsive and tactile.

## Primary CTA

Map the first workflow through the structured `/start` automation review console.

## Current Intake Path

- Route: `/start`
- Current behavior: structured form UI that formats the prospect's answers into a prefilled email to `Kelvarllc.com@outlook.com`.
- Purpose: collect enough contact, workflow, tool, pain, first-win, and urgency detail to qualify the lead manually.
- Limitation: still mailto-based; no hosted form endpoint, CRM, sheet queue, or auto-response is connected yet.

## Current Offer-Specific Landing Page

- Route: `/lead-intake`
- Offer: Lead Intake Command System
- Purpose: convert service-business visitors who recognize missed lead, slow follow-up, scattered intake, or unclear owner/status pain.
- Connected from: Services page primary CTA and first service module CTA.

## Current Demo Proof

- Artifact: `agency-ops/website/content/lead-intake-demo-proof.md`
- Demo: Roofing estimate request becomes a structured lead record with owner, next action, follow-up timing, and owner visibility.
- Use: internal demo, proposal explanation, and website-safe proof copy.
- Limitation: this is not a client case study and must not be described as a real customer result.

Website-safe summary:

"Demo workflow: a roofing estimate request becomes a structured lead record with an owner, next action, and follow-up reminder so the team can see what needs attention before the lead goes cold."

## Next Website Improvements

1. Run a full build check in an environment with npm registry access.
2. Connect deployment to Vercel from `agency-ops/website/`.
3. Replace the mailto-based structured intake with a hosted form, sheet queue, or CRM capture path.
4. Add the Lead Intake demo proof to the public site as a clearly labeled demo, not a client case study.
5. Add a real scheduling link once the agency chooses its booking tool.
6. Add true case-study proof once the first client result exists.
