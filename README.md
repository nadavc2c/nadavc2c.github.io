# Resume

- `index.html` — the whole resume. This is what goes on nadavc2c.github.io.
- `phone.local.js` — your phone number. **Never commit this.** `.gitignore` excludes it.
- `Nadav Cohen - Resume.pdf` — what you send to people. Git-ignored (it contains the number).

## Making the PDF

Open `index.html` from this folder in Chrome, Ctrl+P, Destination "Save as PDF", Save.

Chrome applies the print stylesheet, which forces the A4 two-column layout and light
colours no matter what your system theme is. Check it is still one page.

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

Edit `index.html` directly. Mobile-only rules live in the
`@media screen and (max-width: 760px)` block at the end of the stylesheet and do not
affect the PDF.
