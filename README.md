# Resume

- `index.html` — the main resume for applications and the default at nadavc2c.github.io.
- `cv-variants/security.html` — retained for a future pure CISO/security resume. Work on this version is currently on hold.
- `_config.yml` — excludes `cv-variants/` and repository guidance from GitHub Pages. Only the main resume is presented on the website; the security version remains in the public repository for future use.
- `phone.local.js` — your phone number. **Never commit this.** `.gitignore` excludes it.
- `Nadav Cohen - Resume.pdf` — what you send to people. Git-ignored (it contains the number).

## Making the PDF

Open `index.html` from this folder in Chrome, Ctrl+P, Destination "Save as PDF", Save.
Open `cv-variants/security.html` the same way if an export of the security version is needed.

Save local exports in `output/pdf/`, which is git-ignored because the
PDFs contain the local phone number:

- `Nadav Cohen - Resume - Prime.pdf`
- `Nadav Cohen - Resume - Security.pdf`

The resume has one single-column layout for the site and PDF. Chrome applies the
print stylesheet, which uses A4 and light colours regardless of your system theme.
Check that it prints on one page and that extracted text preserves section order.

The previous exported PDF is `Nadav Cohen - Resume 06.pdf` in your Downloads folder.

## How the phone number stays off the site

Both HTML files contain no phone number in any form. Not encoded, not hidden,
not present. The main resume has this line:

    <script src="phone.local.js"></script>

The security version uses `../phone.local.js` to load the same local file from its subfolder.

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

Edit each HTML file directly. The two versions are separate, self-contained documents
with the same layout. Resume text and separators are ordinary HTML; there is no
format switch or layout script. The screen-only mobile rules adjust spacing and
font sizes without affecting the PDF.

Focus current edits on the main resume. Leave the security version alone unless
explicitly requested. When work on it resumes, reconcile titles, dates, contact
details, Skills, and shared layout changes with the main resume. Their profiles
and experience descriptions can differ in emphasis; editing the main resume does
not update the security version automatically.
