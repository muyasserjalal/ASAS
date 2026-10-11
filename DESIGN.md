# DESIGN.md — ASAS Architecture

## Concept
ASAS means foundation: the unseen part every building depends on. The site works the same way: a quiet black, white and gray structure of grid and white space, where a few precise elements carry a calm, confident, timeless firm.

## First ten seconds
A future client should feel that this firm is serious and precise: calm, confident, nothing extra.

## Mood
- Feels: calm, confident, timeless.
- Never feels: busy, flashy, loud.

## Chosen direction
Scheme C, "the statement and the index", was chosen from three home page schemes. A short line from the mission statement is the headline, and the pages are a large index list. The mashrabiya pattern was tried and removed: no patterns anywhere on the site.

## References (we borrow the system, never the identity)
- Swiss graphic design. Borrowed: generous white space and a strict grid where everything aligns. No posters, logos or typefaces copied.
- John Pawson. Borrowed: very few elements on each screen; every element must earn its place. No images, text or names used on the site.

## Colour palette (black, white and gray only)
- Ink #111111: headings, body text, the ASAS wordmark, primary buttons.
- Paper #FFFFFF: page background, text on Ink buttons.
- Graphite #5E5E5E: secondary text (labels, captions, footer, form hints). Passes contrast on Paper and Stone.
- Stone #F2F2F2: alternating section backgrounds, form field backgrounds.
- Line #D6D6D6: hairline rules, form field borders.
- Placeholder #CFCFCF: grey image placeholder boxes, with their label in Ink.
- Error and success messages use Ink, never red or green.

## Typefaces (free Google Fonts)
- Archivo is the only typeface family. Its width setting makes the headings wide, like the ASAS wordmark.
- Wordmark "ASAS": Archivo 700, expanded width (125), letter spacing 0.18em, uppercase. 56px on the log-in page, 18px in the menu.
- "ARCHITECTURE" under the wordmark: Archivo 400, 11px, uppercase, letter spacing 0.35em, Graphite.
- H1 (all pages except the home statement): Archivo 700, expanded width, 44px desktop and 30px phone, line height 1.15, letter spacing 0.04em.
- H2: Archivo 600, expanded width, 26px desktop and 21px phone, line height 1.25.
- Body: Archivo 300, normal width, 17px, line height 1.7, at most about 62 characters per line.
- Labels, menu and buttons: Archivo 500, 12 to 13px, uppercase, letter spacing 0.2em.
- Arabic text: IBM Plex Sans Arabic, 300 for body, 600 and 700 for headings. No letter spacing and no uppercase in Arabic.

## Languages (English and Arabic)
- Every page, including the log-in page, comes in English and Arabic. English is the default.
- A language button sits in the top bar, next to LOG OUT, and in the top corner of the log-in page. In English it reads "العربية"; in Arabic it reads "ENGLISH". It is a plain text button, no flag, no icon.
- Arabic mode reads right to left: the whole grid mirrors, so the label column moves to the right side and the menu reverses.
- In Arabic mode all text uses IBM Plex Sans Arabic, body line height 1.85, headings line height 1.35. Same sizes, same black, white and gray.
- The ASAS wordmark, street addresses, the phone number and the email stay in Latin letters, left to right, in both languages.
- The visitor's choice is remembered on their device.

## Layout and grid
- 12-column grid, max width 1240px, centred. Gutter 24px. Side margins 48px desktop, 20px phone.
- Each page scrolls down in sections. Airy, never dense.
- Spacing steps: 8, 16, 24, 40, 64, 120, 160px. Sections sit 160px apart on desktop, 96px on phone.
- Text never runs wider than 7 of the 12 columns. On a phone everything stacks in one column.
- Thin 1px Line rules separate sections. No boxes or cards around text.
- Two zones on every page: a narrow label column (columns 1 to 3) holds the section name in small uppercase Graphite, and the content sits in columns 4 to 12. On a phone the label sits above the content.
- Home hero: the ASAS lockup (ASAS 40px, "ARCHITECTURE") at the top of the label column, and a large أساس at the bottom of the label column, next to the headline: IBM Plex Sans Arabic 300, 96px desktop and 64px phone, Ink, with "Foundation" under it in Graphite, 13px. It makes the Jeddah side felt in the first ten seconds. In the content columns, a short headline, "Architecture is only as strong as its foundation.": Archivo 600, expanded width, 68px desktop and 34px phone, line height 1.12. Under it, the full mission statement as a quiet quote: Archivo 300, 22px desktop and 19px phone, at most about 34 em wide. Then "Architecture between Miami and Jeddah." in Graphite.
- Index list (home page): each page name in Archivo 700, expanded width, up to 60px, on its own row between 1px Ink rules, with a one-line description in Graphite on the right. On hover the name is underlined.

## Images
- Black and white only (photos are shown in grayscale).
- Placed inside the grid with white space around them. Not full-bleed.
- No rounded corners, no shadows, no frames other than white space.
- Small caption under each image in Graphite, 13px.
- Where there is no image yet: a plain Placeholder grey box labelled [ADD: image of ...].

## Movement (subtle)
- Sections fade in once as you scroll to them: from transparent to solid with a 12px rise, 700ms, ease-out.
- Links: a 1px underline draws in from left to right on hover, 250ms.
- Buttons: Ink and Paper swap on hover, 200ms.
- If a visitor's device asks for reduced motion, nothing moves.

## The log-in page (front door)
- Pure white page. Nothing else on it: no menu, no footer.
- Centred column 360px wide. The ASAS wordmark at 56px, "ARCHITECTURE" below it, then the line "Foundation · أساس" in Graphite.
- 64px of space, then an email field and a password field: Stone background, 1px Line border, square corners, 48px tall, labels above in small uppercase.
- One full-width Ink button: "Log in".
- Below it a quiet text link: "New here? Create an account". It switches the same form to sign-up mode, with the button "Create account", and back.
- Messages appear as one plain line of Ink text under the button.

## Menu and buttons
- Top bar on every page except log-in: white, 1px Line rule along the bottom.
- Left: small ASAS wordmark with "ARCHITECTURE" under it, linking to the home page.
- Right: HOME, ABOUT, SERVICES, STUDIO, then a LOG OUT button. The current page is underlined.
- On a phone the links sit in one row under the wordmark. No hidden menu, no overlay.
- Primary button: Ink fill, Paper text, square corners, padding 16px by 28px, uppercase label.
- Secondary button (used for LOG OUT): 1px Ink outline, transparent fill.

## Share image
- share.png, 1200 by 630: the ASAS wordmark spread across the full width, standing on a 3px Ink line, with "ARCHITECTURE" and "Architecture between Miami and Jeddah." under it. White background.

## Footer
- Small ASAS wordmark and "Miami · Jeddah" in Graphite, above a 1px Line rule.

## Tone of voice
- Calm, confident and plain. Short sentences.
- The firm speaks as "we".
- No exclamation marks, no superlatives (best, world-class), no buzzwords, no sales language.
- English and Arabic. The Arabic is Modern Standard Arabic: calm, formal and plain, in the same "we" voice. Arabic quotes use « ».

## Five "never" rules
1. Never use any colour outside black, white and the grays in this file.
2. Never use a second typeface family. Archivo only, plus IBM Plex Sans Arabic for Arabic.
3. Never use pop-ups, cookie banners, modals or auto-playing video or sound.
4. Never use rounded corners, drop shadows or gradients.
5. Never fill white space just because it is empty. One focal element per section.
