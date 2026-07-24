# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Nadav Cohen's personal resume: one self-contained `index.html` (inline `<style>`, no external
assets, no dependencies). Pushing to `main` publishes it to GitHub Pages at
nadavc2c.github.io (`origin` is `nadavc2c/nadavc2c.github.io`).

There is no build, no package manager, no tests, no lint. To preview, open `index.html`
in a browser.

## The PDF is the other deliverable

The same file serves two targets: the live site and the PDF that gets sent to people.
Produce the PDF by opening `index.html` in Chrome → Ctrl+P → "Save as PDF".

Two hard constraints when editing:

- **It must stay one page.** Print via Chrome and check after any content change.
- **The `@media print` block overrides the dark-mode variables back to light**, so the PDF
  is light regardless of system theme. `@page { size: A4; margin: 0 }` plus
  `print-color-adjust: exact` keep the layout and colours intact. Don't remove these.

The stylesheet has three layers on top of the `:root` light defaults:
`@media (prefers-color-scheme: dark)`, `@media print` (light again, A4), and
`@media screen and (max-width: 760px)` (single-column mobile — screen only, so it never
affects the PDF).

## Phone number: intentionally absent from the repo

`index.html` contains no phone number in any form — not encoded, not hidden. The contact
link ships as `wa.me/nadavc2c`. `phone.local.js` (git-ignored) lives only on the local
disk; it swaps the real number into `#contact-wa` at load time, which is what Ctrl+P
captures. On the published site that script 404s silently and the WhatsApp link stands.

Do not put the number into `index.html`, and do not commit `phone.local.js` or
`Nadav Cohen - Resume.pdf` (both git-ignored — the PDF embeds the number). A fresh clone
lacks `phone.local.js`, so a PDF printed from it shows the WhatsApp link instead.

## Copywriting rules

For resume text:

- **No em dashes.** Use a comma, a period, or a rewrite instead.
- **Don't disclose too much AI.** A bit of AI is unavoidable.
- **No resume-mill filler.** Phrases like "24/7" and "50% improvement in detection" read
  as cheap outside the Indian market, which is not this resume's audience (Nadav is not
  from India, though he holds OCI).
