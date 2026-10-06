# Resume

- `index.html` — the whole resume. This is what goes on nadavc2c.github.io.
- `phone.local.js` — your phone number. **Never commit this.** `.gitignore` excludes it.
- `Nadav Cohen - Resume.pdf` — what you send to people. Git-ignored (it contains the number).

## Making the PDF

Open `index.html` from this folder in Chrome, Ctrl+P, Destination "Save as PDF", Save.

The resume has one single-column layout for the site and PDF. Chrome applies the
print stylesheet, which uses A4 and light colours regardless of your system theme.
Check that it prints on one page and that extracted text preserves section order.

The latest exported PDF is `Nadav Cohen - Resume 06.pdf` in your Downloads folder.

## How the phone number stays off the site

`index.html` contains no phone number in any form. Not encoded, not hidden, not
present. It only has this line:

    <script src="phone.local.js"></script>

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

Edit `index.html` directly. Resume text and separators are ordinary HTML; there is
no format switch or layout script. The screen-only mobile rules adjust spacing and
font sizes without affecting the PDF.
