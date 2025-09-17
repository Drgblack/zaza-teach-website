// Fail if any U+2013/U+2014 (or mojibake) remain
import { promises as fs } from "node:fs";
import { globSync } from "glob";

const RE = /(\u2013|\u2014|&ndash;|&mdash;|â€"|â€")/;

const files = globSync([
  "app/**/*.{tsx,ts,jsx,js,md,mdx,html,txt,json}",
  "components/**/*.{tsx,ts,jsx,js,md,mdx}",
  "content/**/*.{md,mdx,json}",
  "public/**/*.{html,txt}",
  "!node_modules/**",
  "!.next/**"
]);

let bad = [];
for (const f of files) {
  const s = (await fs.readFile(f)).toString("utf8").replace(/^\uFEFF/, "");
  if (RE.test(s)) bad.push(f);
}

if (bad.length) {
  console.error("❌ Typographic dashes found in files:");
  for (const f of bad) console.error(" -", f);
  process.exit(1);
} else {
  console.log("✅ No typographic dashes found.");
}