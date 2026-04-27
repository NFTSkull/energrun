import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logo = path.join(root, "public/logo1.png");

const sizes = [16, 32, 48];
const buffers = await Promise.all(
  sizes.map((s) => sharp(logo).resize(s, s).png().toBuffer()),
);
const ico = await pngToIco(buffers);

fs.writeFileSync(path.join(root, "public/favicon.ico"), ico);
fs.writeFileSync(path.join(root, "src/app/favicon.ico"), ico);
console.log("favicon.ico generado desde public/logo1.png → public/ y src/app/");
