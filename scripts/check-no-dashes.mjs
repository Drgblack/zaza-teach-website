import { promises as fs } from "node:fs";
import { globby } from "globby";

const RE = /(\u2013|\u2014|&ndash;|&mdash;|â€"|â€")/;

const files = await globby([
  "app/**/*.{tsx,ts,jsx,js,md,mdx,html,txt,json}",
  "components/**/*.{tsx,ts,jsx,js,md,mdx}",
  "content/**/*.{md,mdx,json}",
  "public/**/*.{html,txt}",
  "!node_modules/**", "!.next/**"
]);

const bad = [];

for (const f of files) {
  const s = (await fs.readFile(f)).toString("utf8").replace(/^\uFEFF/, "");
  if (RE.test(s)) bad.push(f);
}

if (bad.length) { 
  console.error("❌ Typographic dashes found:"); 
  bad.forEach(f => console.error(" -", f)); 
  process.exit(1); 
}

console.log("✅ No typographic dashes found.");