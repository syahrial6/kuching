/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const directories = [
  path.join(__dirname, "..", "public", "wisata"),
  path.join(__dirname, "..", "public", "images"),
];

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") return;

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  // Skip if WebP already exists and is newer than source
  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(filePath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs > srcStat.mtimeMs) {
      console.log(`  ⏭️  Skipped (already exists): ${path.basename(webpPath)}`);
      return;
    }
  }

  try {
    const quality = ext === ".png" ? 80 : 75;
    await sharp(filePath).webp({ quality, effort: 6 }).toFile(webpPath);
    console.log(
      `  ✅ Converted: ${path.basename(filePath)} → ${path.basename(webpPath)} (quality=${quality})`,
    );
  } catch (err) {
    console.error(
      `  ❌ Error converting ${path.basename(filePath)}:`,
      err.message,
    );
  }
}

async function main() {
  console.log("🔄 Converting images to WebP...\n");

  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`📁 Directory not found: ${dir}`);
      continue;
    }

    const files = fs.readdirSync(dir);
    const imageFiles = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

    if (imageFiles.length === 0) {
      console.log(`📁 ${path.basename(dir)}: No JPG/PNG images found.\n`);
      continue;
    }

    console.log(`📁 ${path.basename(dir)} (${imageFiles.length} images):`);
    for (const file of imageFiles) {
      await convertToWebP(path.join(dir, file));
    }
    console.log("");
  }

  console.log("✨ All conversions complete!");
}

main().catch(console.error);
