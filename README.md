# Resume

- `index.html` — the prime resume. This is the default at nadavc2c.github.io.
- `cv-variants/security.html` — the security-oriented experiment, emphasizing security leadership and detection engineering.
- `cv-variants/developer.html` — the developer-oriented experiment, emphasizing platform development and automation.
- `_config.yml` — excludes `cv-variants/` and repository guidance from GitHub Pages. Only prime is presented on the website; the flavors remain in the public repository for future use.
- `phone.local.js` — your phone number. **Never commit this.** `.gitignore` excludes it.
- `Nadav Cohen - Resume.pdf` — what you send to people. Git-ignored (it contains the number).

## Making the PDF

Open `index.html` from this folder in Chrome, Ctrl+P, Destination "Save as PDF", Save.
Open `cv-variants/security.html` or `cv-variants/developer.html` the same way to export either experiment.

The three verified exports are in `output/pdf/`, which is git-ignored because the
PDFs contain the local phone number:

- `Nadav Cohen - Resume - Prime.pdf`
- `Nadav Cohen - Resume - Security.pdf`
- `Nadav Cohen - Resume - Developer.pdf`

The resume has one single-column layout for the site and PDF. Chrome applies the
print stylesheet, which uses A4 and light colours regardless of your system theme.
Check that it prints on one page and that extracted text preserves section order.

The previous exported PDF is `Nadav Cohen - Resume 06.pdf` in your Downloads folder.

## How the phone number stays off the site

The three HTML files contain no phone number in any form. Not encoded, not hidden,
not present. Prime has this line:

    <script src="phone.local.js"></script>

The flavors use `../phone.local.js` to load the same local file from their subfolder.

That file lives in this folder but is git-ignored, so it never reaches GitHub. On the
live site the script simply 404s and the contact line keeps showing `wa.me/nadavc2c`.
No error, nothing visible to a visitor. View-source on the published page gives a
scraper nothing, because there is nothing there.

Locally the file loads, swaps in your number, and that is what Ctrl+P captures.

To change the number, edit the one line in `phone.local.js`.

## If you ever clone the repo fresh

`phone.local.js` will be missing, so the PDF you print would show the WhatsApp link
instead of your number. Copy the file back in before printing.

## Editing content

Edit each HTML file directly. The variants are separate, self-contained documents
with the same layout. Resume text and separators are ordinary HTML; there is no
format switch or layout script. The screen-only mobile rules adjust spacing and
font sizes without affecting the PDF.

Keep titles, dates, contact details, and Skills consistent across the three files.
Their profiles and experience descriptions differ in emphasis. Apply factual
corrections and shared layout changes to all three; editing prime does not update
the experiments automatically.
