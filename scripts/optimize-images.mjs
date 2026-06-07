import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, stat } from "node:fs/promises";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const webpImages = [
  {
    input: "public/images/wallpaper.png",
    output: "public/images/wallpaper.webp",
    width: 1920,
    quality: 78,
  },
  {
    input: "public/images/DriveTeamPic.png",
    output: "public/images/DriveTeamPic.webp",
    width: 1280,
    quality: 78,
  },
  {
    input: "public/images/prodecorSS.png",
    output: "public/images/prodecorSS.webp",
    width: 1280,
    quality: 78,
  },
  {
    input: "public/images/pejovicInvestSS.png",
    output: "public/images/pejovicInvestSS.webp",
    width: 1280,
    quality: 78,
  },
  {
    input: "public/images/project-1.png",
    output: "public/images/project-1.webp",
    width: 1280,
    quality: 78,
  },
  {
    input: "public/images/project-2.png",
    output: "public/images/project-2.webp",
    width: 1280,
    quality: 78,
  },
  {
    input: "public/images/project-3.png",
    output: "public/images/project-3.webp",
    width: 1280,
    quality: 78,
  },
  {
    input: "public/images/me.png",
    output: "public/images/me.webp",
    width: 640,
    quality: 80,
  },
  {
    input: "public/images/me-with-the-team.png",
    output: "public/images/me-with-the-team.webp",
    width: 960,
    quality: 80,
  },
];

const toAbsolute = (filePath) => path.join(rootDir, filePath);

const formatBytes = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const image of webpImages) {
  const input = toAbsolute(image.input);
  const output = toAbsolute(image.output);
  await mkdir(path.dirname(output), { recursive: true });

  await sharp(input)
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: image.quality, effort: 6 })
    .toFile(output);

  const [before, after] = await Promise.all([stat(input), stat(output)]);
  console.log(
    `${image.output}: ${formatBytes(before.size)} -> ${formatBytes(after.size)}`,
  );
}

const ogInput = toAbsolute("public/images/me-with-the-team.png");
const ogOutput = toAbsolute("public/images/og-image.jpg");

await sharp(ogInput)
  .resize(1200, 630, { fit: "cover", position: "center" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(ogOutput);

const ogStats = await stat(ogOutput);
console.log(`public/images/og-image.jpg: ${formatBytes(ogStats.size)}`);
