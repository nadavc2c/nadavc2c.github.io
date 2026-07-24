/**
 * build-pdf.js
 * Regenerates "Nadav Cohen - Resume.pdf" from index.html.
 *
 * index.html is the web version (nadavc2c.github.io) and deliberately
 * contains NO phone number, so scrapers get nothing.
 * The number lives ONLY in .env (git-ignored) and is injected into the
 * PDF at build time. If .env is missing, the PDF is built with the
 * wa.me link instead of the number, so nothing ever crashes.
 *
 * Usage:  node build-pdf.js
 * Setup once:  npm install playwright && npx playwright install chromium
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, 'index.html');
const OUT = path.resolve(__dirname, 'Nadav Cohen - Resume.pdf');
const ENV = path.resolve(__dirname, '.env');

// ---- read the phone number from .env (the only place it lives) ----
function loadEnv(file) {
  const out = {};
  let raw;
  try {
    raw = fs.readFileSync(file, 'utf8');
  } catch (e) {
    return out; // no .env — caller handles the phone-free fallback
  }
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const env = loadEnv(ENV);
const PHONE_DISPLAY = env.PHONE_DISPLAY || '';
const PHONE_TEL = env.PHONE_TEL || '';
const HAS_PHONE = Boolean(PHONE_DISPLAY && PHONE_TEL);
// -------------------------------------------------------------------

(async () => {
  if (!HAS_PHONE) {
    console.warn('No PHONE_DISPLAY/PHONE_TEL found in .env.');
    console.warn('Building the PDF with the wa.me link (no phone number).');
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('file://' + SRC);

  // Swap the wa.me link for the real phone number, PDF only.
  let swapped = false;
  if (HAS_PHONE) {
    swapped = await page.evaluate(
      ({ display, tel }) => {
        const el = document.getElementById('contact-wa');
        if (!el) return false;
        el.textContent = display;
        el.setAttribute('href', 'tel:' + tel);
        return true;
      },
      { display: PHONE_DISPLAY, tel: PHONE_TEL }
    );

    if (!swapped) {
      console.error('WARNING: #contact-wa not found in index.html.');
      console.error('The PDF was built WITHOUT the phone number.');
    }
  }

  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  await browser.close();

  // Sanity check: warn if it spilled onto a second page.
  let pages = null;
  try {
    const buf = fs.readFileSync(OUT);
    const m = buf.toString('latin1').match(/\/Type\s*\/Page[^s]/g);
    pages = m ? m.length : null;
  } catch (e) {}

  console.log('Built: ' + OUT);
  if (swapped) console.log('Phone number injected: ' + PHONE_DISPLAY);
  if (pages !== null) {
    console.log('Pages: ' + pages + (pages > 1 ? '  <-- trim content, it no longer fits one page' : ''));
  }
})();
