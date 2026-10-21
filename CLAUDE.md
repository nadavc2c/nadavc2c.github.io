# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Nadav Cohen's personal resume: a prime `index.html` and two experimental flavors,
`cv-variants/security.html` and `cv-variants/developer.html`. Each is self-contained
(inline `<style>`, no external assets, no dependencies). Pushing to `main` publishes
prime to GitHub Pages at nadavc2c.github.io (`origin` is `nadavc2c/nadavc2c.github.io`).
The flavors are kept in the public repository for future use and must not be
presented on the website. `_config.yml` excludes `cv-variants/` and repository
guidance from the Jekyll site build. Do not add website links to the flavors.

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

All three flavors use the same single-column layout for the site and PDF, with
ordinary HTML text and separators. They are separate static documents with tailored
profiles and experience descriptions. Do not add query-parameter switches or layout scripts.
Keep titles, dates, contact details, and Skills consistent across the three files.
Dark mode changes screen colours; the screen-only mobile rules adjust spacing and
font sizes. The print rules restore light colours and set A4 dimensions.
Verify PDF text extraction keeps Profile, Experience, Skills, Education, and Projects
in order. The current exports are in git-ignored `output/pdf/`, one per flavor.

## Phone number: intentionally absent from the repo

The three HTML files contain no phone number in any form — not encoded, not hidden. The contact
link ships as `wa.me/nadavc2c`. `phone.local.js` (git-ignored) lives only on the local
disk; prime loads it as `phone.local.js` and the flavors as `../phone.local.js`.
It swaps the real number into `#contact-wa` at load time, which is what Ctrl+P
captures. On the published site that script 404s silently and the WhatsApp link stands.

Do not put the number into `index.html`, and do not commit `phone.local.js` or
`Nadav Cohen - Resume.pdf` or `output/pdf/` (all git-ignored — PDFs embed the number). A fresh clone
lacks `phone.local.js`, so a PDF printed from it shows the WhatsApp link instead.

## Copywriting rules

For resume text:

- **Preferred style reference:** [Dickinson College's 2014 Alumni Resume and Reference Guide](https://www.dickinson.edu/download/downloads/id/3572/2014alumniresumereferenceguide).
  Nadav endorses this source for classic CV language. Use it to guide future
  wording and profile structure, subject to the specific preferences below.
- **Mention years of experience in the profile.** Include "10+ years" explicitly.
- **Avoid awkward word combinations and repetition.** Do not repeat words or word
  roots unnecessarily within a sentence or across adjacent sentences, such as
  "experience. Experienced". Read each paragraph as a whole before accepting edits.
- **Use "skilled" for crafts, not experience or management.** For professional
  responsibilities, describe the work and roles directly.
  Reserve "strong background" for fields such as software engineering, not
  responsibilities such as team management. Avoid "proven track record" and
  "demonstrated ability" in the profile.
- **Use classic CV language.** Prefer established professional wording such as
  "strong background" and "analytical and strategic thinking".
  Avoid casual phrasing such as "from scratch", "hardest cases", "pushed", or "ran".
  Do not use "combining" in the profile.
- **The profile has three sentences.** Cover professional identity and experience
  first, a short summary of work second, and professional qualities third.
  This sentence count is separate from the rule on rhetorical groups below.
- **Personal qualities should reflect curiosity and enjoyment of solving problems.**
  Use direct descriptive fragments for this sentence. Avoid "results-oriented"
  wording and boilerplate introductions such as "Strengths include".
- **Do not use "building production" phrasing.** This includes "building production systems".
- **Use groups of two or four, never three.** Apply this to rhetorical lists and parallel phrases.
- **No em dashes.** Use a comma, a period, or a rewrite instead.
- **Use either an acronym or its full name, never both together.** Prefer the shorter
  recognizable form, such as AWS, GCP, CI/CD, or AppSec. Do not write a full name
  followed by its acronym in parentheses, or the reverse.
- **Never use "detail-oriented".** This ban also applies when drawing wording from
  reference guides or suggesting alternatives.
- **Don't disclose too much AI.** A bit of AI is unavoidable.
- **No resume-mill filler.** Phrases like "24/7" and "50% improvement in detection" read
  as cheap outside the Indian market, which is not this resume's audience (Nadav is not
  from India, though he holds OCI).
- **Don't stack "from X to Y" spans.** One is fine; two in the same section reads as
  resume-mill.
- **Standard resume wording is fine** ("strong background", "clear communicator"). What to
  avoid is wording that sounds AI-written.
- **Position security first, software engineering second, data third, and quant last.**
  This applies to prime. The security and developer experiments foreground their
  respective fields while keeping the same factual history and Skills section.
  Make software engineering explicit and substantiate it through
  systems and platforms developed. Keep quantitative work understated.
- **Attribute responsibilities to the correct roles.** The current CISO & Lead
  Developer role covers information security and platform development. It does
  not include team management; that belongs to earlier SOC roles. Distinguish
  current responsibilities from previous roles in the career summary, and keep
  software engineering visible as current work.
- **Technical leadership does not imply people management.** At Teads (Outbrain),
  Nadav was the technical lead and owner of the organization's Splunk platform.
  He did not manage people and had a separate people manager. Describe platform
  ownership and technical responsibilities for that role.
  Describe him as the organization's Splunk technical authority, including how
  searches were written and what they detected. Prefer explicit search standards
  and detection logic over "oversaw".
- **Preserve the scope and seniority of job titles when restyling them.** The Teads
  title is "Security Monitoring Tech Lead"; expand "Tech" to "Technical" for formal
  wording. Do not narrow it to "Splunk Technical Lead". Put Splunk ownership in
  the role description.
- **Preserve the Skills section unless explicitly asked to change it.** Keep its
  tool list and ordering, including Claude Code and Codex.
  Retain the italic "among others" at the end of Tools & Platforms when expanding the list.
- **The profile names no employers.** That's what Experience is for.
