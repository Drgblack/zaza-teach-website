import { promises as fs } from "node:fs";
import { globby } from "globby";

// Multiple replacement patterns for different character issues
const replacements = [
  { pattern: /(\u2013|\u2014|&ndash;|&mdash;|â€"|â€")/g, replacement: " - " },
  { pattern: /â€™/g, replacement: "'" },
  { pattern: /â€œ|â€/g, replacement: '"' },
  { pattern: /â†'/g, replacement: "→" },
  { pattern: /â‚¬/g, replacement: "€" },
  { pattern: /ðŸ•/g, replacement: "🕐" },
  { pattern: /ðŸŒ¿/g, replacement: "🌿" },
  { pattern: /âœï¸/g, replacement: "✏️" },
  { pattern: /ðŸ'™/g, replacement: "💙" }
];

const files = await globby([
  "app/**/*.{tsx,ts,jsx,js,md,mdx,html,txt,json}",
  "components/**/*.{tsx,ts,jsx,js,md,mdx}",
  "content/**/*.{md,mdx,json}",
  "public/**/*.{html,txt}",
  "!node_modules/**", "!.next/**"
]);

let changed = 0;

for (const f of files) {
  let s = (await fs.readFile(f)).toString("utf8").replace(/^\uFEFF/, "");
  let modified = false;
  
  for (const { pattern, replacement } of replacements) {
    const newS = s.replace(pattern, replacement);
    if (newS !== s) {
      s = newS;
      modified = true;
    }
  }
  
  if (modified) {
    await fs.writeFile(f, s, "utf8");
    changed++;
    console.log("fixed:", f);
  }
}

console.log(`Done. Files changed: ${changed}`);