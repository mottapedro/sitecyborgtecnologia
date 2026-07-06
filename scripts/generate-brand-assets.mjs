// Regenerates favicon.ico, PWA icons and the OG image from the approved brand
// assets in design_handoff_home_revisao/assets/. Run with: node scripts/generate-brand-assets.mjs
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const ICON_SOURCE = path.join(root, "design_handoff_home_revisao/assets/logo-icon.png");
const LOCKUP_SOURCE = path.join(root, "design_handoff_home_revisao/assets/logo-lockup-horizontal.png");

const BG = "#0b0b0b";

async function squareIcon(size, padRatio = 0.62) {
  const inner = Math.round(size * padRatio);
  const logo = await sharp(ICON_SOURCE)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

function buildIco(pngBuffers) {
  const entryCount = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const offsets = [];
  let offset = headerSize + dirEntrySize * entryCount;
  for (const buf of pngBuffers) {
    offsets.push(offset);
    offset += buf.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entryCount, 4);

  const parts = [header];
  pngBuffers.forEach((buf, i) => {
    const entry = Buffer.alloc(dirEntrySize);
    const dim = ICON_SIZES[i];
    entry.writeUInt8(dim === 256 ? 0 : dim, 0); // width (0 = 256)
    entry.writeUInt8(dim === 256 ? 0 : dim, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size of image data
    entry.writeUInt32LE(offsets[i], 12); // offset of image data
    parts.push(entry);
  });
  pngBuffers.forEach((buf) => parts.push(buf));

  return Buffer.concat(parts);
}

const ICON_SIZES = [16, 32, 48];

async function main() {
  // Favicon (multi-size PNG-in-ICO)
  const faviconPngs = await Promise.all(ICON_SIZES.map((size) => squareIcon(size)));
  const ico = buildIco(faviconPngs);
  await writeFile(path.join(root, "src/app/favicon.ico"), ico);
  console.log("Wrote src/app/favicon.ico");

  // PWA icons
  await mkdir(path.join(root, "public"), { recursive: true });
  for (const size of [192, 512]) {
    const png = await squareIcon(size);
    await writeFile(path.join(root, `public/icon-${size}.png`), png);
    console.log(`Wrote public/icon-${size}.png`);
  }

  // OG image (1200x630)
  const ogWidth = 1200;
  const ogHeight = 630;
  const lockup = await sharp(LOCKUP_SOURCE)
    .resize(700, undefined, { fit: "inside" })
    .toBuffer();

  const og = await sharp({
    create: {
      width: ogWidth,
      height: ogHeight,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: lockup, gravity: "center" }])
    .png()
    .toBuffer();

  await writeFile(path.join(root, "public/og-image.png"), og);
  console.log("Wrote public/og-image.png");

  // Source PNGs used directly in the UI (Header/Footer logo)
  await mkdir(path.join(root, "public/brand"), { recursive: true });
  const iconPng = await sharp(ICON_SOURCE).png().toBuffer();
  await writeFile(path.join(root, "public/brand/logo-icon.png"), iconPng);
  console.log("Wrote public/brand/logo-icon.png");

  const lockupPng = await sharp(LOCKUP_SOURCE).png().toBuffer();
  await writeFile(path.join(root, "public/brand/logo-lockup-horizontal.png"), lockupPng);
  console.log("Wrote public/brand/logo-lockup-horizontal.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
