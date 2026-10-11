# SPEC.md — ASAS Architecture website

## What the site is
The website of ASAS Architecture, an architecture practice working between Miami and Jeddah. It designs a mix of work: custom homes and major renovations, commercial projects and civic work. ASAS is Muyasser Jalal's firm identity from ARC 452 (Model / Manual / Practice) at the University of Miami School of Architecture.

## Who it is for
Future clients who might hire the firm, in South Florida and in Jeddah / Western Saudi Arabia.

## Goal of the first ten seconds
A client understands that ASAS is serious and precise.

## Where the content comes from
All text comes from Jalal_Muyasser_Manual_Practice.pdf (ARC 452) and the design interview. The fees, client names and project address in the Mock Contract are never used. The advisory board is never shown, because it names real people.

## Pages

### login.html — Log in (the front door)
- Purpose: let visitors sign up or log in before they see the site.
- Content: the ASAS wordmark, "ARCHITECTURE", the line "Foundation · أساس", an email field, a password field, a "Log in" button, and the link "New here? Create an account" that switches the form to sign-up.

### index.html — Home
- Purpose: in ten seconds, show that the firm is serious and precise.
- Hero: the ASAS lockup with "Foundation · أساس". The headline is the short line "Architecture is only as strong as its foundation." Under it, the full mission statement in smaller text: "We believe architecture is only as strong as its foundation. ASAS designs from first principles — honest structure, real place, and the people who will live with the result." Then the line "Architecture between Miami and Jeddah."
- Index: three large links, each with one line:
  - About: "What ASAS means, and what the practice is built on."
  - Services: "What we design, and how a project moves from first sketch to final walkthrough."
  - Studio: "Two cities: Miami and Jeddah."
- Image: [ADD: image of a building detail, black and white].

### about.html — About
- Purpose: explain the name and what the firm believes.
- The name: "ASAS — أساس, the Arabic word for foundation — is the starting point of every building and the starting point of this practice. A foundation is unseen once construction is complete, but it is the element every later decision depends on. That is the role ASAS plays for its clients: the quiet, structural basis for work that outlasts trend and ownership."
- "The name is also personal: a way of carrying an Arabic word, and a discipline of starting from first principles, into a practice built between Miami and Jeddah."
- The mission statement (same quote as the home page).
- What the practice is built on, three lessons with their precedent named in a small label:
  - Ask who a project serves before asking what it looks like. (MASS Design Group)
  - Know exactly who you are building for. (IKEA)
  - Ground ambition in a real place. For ASAS, that is the Miami–Jeddah axis. (NEOM)
- How the firm works: "ASAS is an experience-based practice. It runs on the principal's design judgment and reputation, not on volume or a narrow specialty. It stays deliberately small, and brings on associates only as reputation and referrals justify it."
- Mentorship: "Every future team member gets a structured path to licensure: AXP hour tracking, exam fee reimbursement, and study time built into the work week."
- Image: [ADD: image of a foundation or structural detail, black and white].

### services.html — Services
- Purpose: show what ASAS designs and how a project runs.
- What we design: "Custom homes and major renovations, commercial projects and civic work, in South Florida and Jeddah."
- How a project runs, four numbered phases:
  1. Schematic Design: "We confirm your goals, room list and budget. We study the site, the zoning, the trees, the sun and the wind, then prepare two or three design options and refine the one you choose."
  2. Design Development: "We develop the approved design into a coordinated building: room sizes, structural and mechanical systems with the engineers, and exterior materials, windows and doors."
  3. Construction Documents: "We prepare the complete drawings and specifications a contractor needs to price and build, coordinate them with the engineers, and submit them for permit."
  4. Construction Administration: "We represent you during construction: regular site visits, review of shop drawings and submittals, answers to the contractor's questions, the punch list and the final walkthrough."
- Additional services:
  - Bidding and contractor selection: "We send the drawings to qualified general contractors, compare the bids and help you choose."
  - Interior design: "Finishes, cabinetry, lighting, fixtures and the furniture layout."
  - Landscape design: "Planting, paving, pool deck and site lighting, designed with a licensed landscape architect."
- Why ASAS, four strengths:
  - Direct access to the architect: "No hand-offs. You work with the founding architect on every decision."
  - Design from first principles: "Every material and spatial decision is justified by how you will actually live in the space, not by trend."
  - Cross-cultural fluency: "Practicing between the U.S. and Saudi Arabia, ASAS translates between the design languages and expectations of both."
  - Big-firm rigor, small-firm intimacy: "Every project is tested by an advisory network in legal, financial and design expertise, not by one person's judgment alone."
- Image: [ADD: image of drawings or a physical model, black and white].

### studio.html — Studio
- Purpose: show where ASAS works and who leads it.
- Intro: "ASAS works between two cities."
- Miami: "1200 Brickell Avenue, Miami, FL 33131". Image: [ADD: image of Miami, black and white].
- Jeddah: "Jeddah, Saudi Arabia". Image: [ADD: image of Jeddah, black and white].
- Contact: "305.555.0142 · studio@asas-architecture.com", shown as plain text, not as links, because the firm is fictional.
- Principal: "Muyasser Jalal, Founding Principal. Educated at the University of Miami School of Architecture, trained across studios in the U.S. and Saudi Arabia." Image: [ADD: portrait of Muyasser Jalal, black and white].

## Languages
- The whole site, including login.html, is in English and Arabic, with a language button on every page. English is the default.
- The Arabic says the same thing as the English. It adds no new facts.
- All Arabic text lives in js/i18n.js. Muyasser checks every Arabic line before it is committed.
- The choice is saved in the visitor's browser only. Nothing is stored about visitors.

## The log-in gate
- Visitors can sign up with email and password and log in, using Supabase.
- The log-in page is login.html and is never gated.
- index.html is the home page.
- Every page except login.html sends signed-out visitors to login.html.
- After log-in, go to index.html.
- Log out on every page.
- All links are relative.
- Supabase project URL: https://kumcrrcbjqiaohgafxow.supabase.co. The publishable key (sb_publishable_...) lives in js/supabase-config.js. It is safe to be public. A secret key (sb_secret_...) is never put in any file.
- "Confirm email" is switched off in Supabase, so a new account is logged in straight away.
- Messages on the log-in page, in plain words:
  - Wrong email or password: "That email and password do not match. Try again, or create an account."
  - Email already has an account: "An account with this email already exists. Log in instead."
  - Password too short: "Use a password of at least 6 characters."
  - Service unreachable: "The log-in service could not be reached. Check your connection and try again."

## Content rule
Never invent facts, dimensions, dates or names I have not given you. Ask me instead.

## How it is built
- Plain HTML, CSS and JavaScript files only. No frameworks, no npm, no build step.
- Load Supabase from its CDN script tag.
- index.html sits at the top of the folder.
- It must work on a phone.
- It is published from GitHub to Vercel.
- Live address: https://asas-lac.vercel.app (GitHub repository: muyasserjalal/ASAS).
- The share image uses the full live address: https://asas-lac.vercel.app/share.png

## Images
- My files go in a folder called images.
- Where I have none, use a plain grey box labelled [ADD: image of ...].

## Out of scope
Payments, storing anything about visitors beyond their log-in, any database tables.

## Done when
- [ ] Works on a phone.
- [ ] The menu reaches every page.
- [ ] Sign up, log in and log out work.
- [ ] Typing a page address (ending .html) while signed out sends me to log-in.
- [ ] Every image has alt text.
- [ ] The live link opens in a new tab or window.
- [ ] Every page has a title, a one-line description and a share image.
- [ ] DESIGN.md, SPEC.md and the site match.
