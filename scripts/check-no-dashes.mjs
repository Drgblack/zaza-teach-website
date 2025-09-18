import { promises as fs } from "node:fs";
import { globby } from "globby";

const badPatterns = [
  /(\u2013|\u2014|&ndash;|&mdash;|â€"|â€")/,
  /â€™/,
  /â€œ|â€/,
  /â†'/,
  /â‚¬/,
  /ðŸ•/,
  /ðŸŒ¿/,
  /âœï¸/,
  /ðŸ'™/
];

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
  for (const pattern of badPatterns) {
    if (pattern.test(s)) {
      bad.push(f);
      break;
    }
  }
}

if (bad.length) { 
  console.error("❌ Bad character encodings found:"); 
  bad.forEach(f => console.error(" -", f)); 
  process.exit(1); 
}

console.log("✅ No bad character encodings found.");