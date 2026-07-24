# Resume

- `index.html` — the whole resume. This is what goes on nadavc2c.github.io.
- `.env` — your phone number. **Never commit this.** `.gitignore` excludes it.
- `build-pdf.js` — builds the PDF from `index.html`, injecting the phone from `.env`.
- `Nadav Cohen - Resume.pdf` — what you send to people. Git-ignored (it contains the number).

## How the phone number stays off the site

`index.html` contains no phone number in any form. Not encoded, not hidden, not
present. The contact line just shows `wa.me/nadavc2c`. View-source on the published
page gives a scraper nothing, because there is nothing there.

The number lives in exactly one place — `.env` — which is git-ignored and never
reaches GitHub:

    PHONE_DISPLAY=+xxx-xx-xxx-xxxx
    PHONE_TEL=+xxxxxxxxxxxx

To change the number, edit `.env`.

## Regenerating the PDF after editing the HTML

    node build-pdf.js

(or double-click `make-pdf.bat` on Windows).

The build loads `index.html`, swaps the `wa.me` link for the number from `.env`,
and writes `Nadav Cohen - Resume.pdf` in A4 with the print stylesheet applied
(forces the two-column layout and light colours regardless of system theme).
Check it is still one page — the script prints a warning if it spills onto a second.

First time only, install the build dependency:

    npm install playwright
    npx playwright install chromium

If `.env` is missing (e.g. a fresh clone), the PDF is still built — it just shows
the `wa.me/nadavc2c` link instead of the number. Copy `.env` back in before
printing your real copy.

## Editing content

Edit `index.html` directly. Mobile-only rules live in the
`@media screen and (max-width: 760px)` block at the end of the stylesheet and do not
affect the PDF.
