# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript, static build (no backend). Delegated: the user asked for a framework rebuild of the earlier no-build static app; React gives component structure for the many interactive views, Vite gives a static bundle deployable anywhere.

## Users

A learner driver in Saudi Arabia (Hind) and the family member coaching her (Kayan), sharing one account on one device or via export/import. They study theory at home, practise manoeuvres in the family Suzuki Fronx on private ground, take road lessons at a Moroor-approved school, and log every session together. More learners may be added later.

## Product Purpose

Walk a learner through the whole Saudi licence journey in order: get ready (Absher, medical, school), learn the theory, know the car, pass the theory test, practical lessons (each showing the theory it relies on), self-check every skill, book and sit the tests, then licence issuance and traffic law. Success: the learner always knows the next step and walks into each test ready.

## Positioning

The only study tool that puts the official Saudi Moroor trainee handbook and the UK DVSA material (Highway Code, Ready to Pass skills record) side by side, every point tagged by source, tied to the actual car the learner drives.

## Operating Context

Used on phone and laptop, in Arabic and English (RTL and LTR), at home before and after lessons and in the car park debriefing. Data lives in the browser; JSON export/import moves it between devices.

## Capabilities and Constraints

- Sources: Moroor Theoretical Driving Handbook (Trainee, Ver 1 Apr 2022, Arabic); The Highway Code (OGL v3.0); DVSA "Learning to drive" record (OGL v3.0); Suzuki Fronx owner's manual. Every point is tagged Moroor, DVSA/Highway Code, Fronx manual, or Darb (own coaching text).
- Saudi process is the primary path for booking tests; DVSA booking appears only as tagged reference.
- Fronx content covers both manual and automatic variants.
- Learners self-assess skills on the DVSA 5-level scale; anyone using the shared account logs lessons.
- Unofficial; not affiliated with Moroor. Keep the disclaimer.

## Brand Commitments

Name: Darb (درب, "path"). Moroor logo used only to label Moroor-sourced content.

## Evidence on Hand

Existing content in src/data (course, lessons, 39 skills, checklists, 74 questions, signs, handbook and Highway Code text, page images). No testimonials or pass-rate claims exist; do not invent them.

## Product Principles

- Always show the next step.
- Every fact names its source.
- Saudi rules lead; UK material supports.
- Bilingual is first-class, not a translation layer.
- The learner owns the self-assessment.

## Accessibility & Inclusion

Full Arabic RTL support; readable on phones in bright daylight; WCAG AA contrast.
