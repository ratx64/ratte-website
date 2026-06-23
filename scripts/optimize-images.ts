import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.join(__dirname, "..");
const publicAssets = path.join(root, "public", "assets");
const iconsDir = path.join(publicAssets, "icons");

const FONT_FILES = [
  { src: "inter-latin-400-normal.woff2", dest: "inter-400.woff2" },
  { src: "inter-latin-700-normal.woff2", dest: "inter-700.woff2" },
] as const;

const PARTNER_ICONS = [
  "wallhack.webp",
  "wlmouse.webp",
  "protonvpn.webp",
  "csfloat.webp",
  "skinport.webp",
] as const;

async function optimizeAvatar() {
  const source = path.join(root, "src", "assets", "pfp2.webp");
  const dest = path.join(publicAssets, "avatar.webp");

  await sharp(source)
    .resize(176, 176, { fit: "cover" })
    .webp({ quality: 82 })
    .toFile(dest);
}

async function optimizePartnerIcons() {
  for (const name of PARTNER_ICONS) {
    const source = path.join(root, "src", "assets", name);
    if (!fs.existsSync(source)) continue;

    const dest = path.join(iconsDir, name);
    await sharp(source)
      .resize(80, 80, { fit: "cover" })
      .webp({ quality: 80 })
      .toFile(dest);
  }
}

function copyFonts() {
  const fontsDir = path.join(root, "public", "fonts");
  const fontSourceDir = path.join(root, "node_modules", "@fontsource", "inter", "files");
  fs.mkdirSync(fontsDir, { recursive: true });

  for (const { src, dest } of FONT_FILES) {
    fs.copyFileSync(path.join(fontSourceDir, src), path.join(fontsDir, dest));
  }
}

async function main() {
  fs.mkdirSync(iconsDir, { recursive: true });
  copyFonts();
  await optimizeAvatar();
  await optimizePartnerIcons();
  console.log("Optimized static assets (fonts, avatar, partner icons)");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});