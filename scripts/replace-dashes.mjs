// Replace U+2013 (en), U+2014 (em), & common HTML entities with " - "
// and also fix common mojibake ("â€"", "â€"") that appears when UTF-8 bytes are mis-decoded.
import { promises as fs } from "node:fs";
import { globSync } from "glob";

const RE = /(\u2013|\u2014|&ndash;|&mdash;|â€"|â€"|â€™|â€œ|â€\u009d)/g; // en/em + mojibake
const OK = " - ";

const files = globSync([
  "app/**/*.{tsx,ts,jsx,js,md,mdx,html,txt,json}",
  "components/**/*.{tsx,ts,jsx,js,md,mdx}",
  "content/**/*.{md,mdx,json}",
  "public/**/*.{html,txt}",
  "!node_modules/**",
  "!.next/**"
]);

let changed = 0;
for (const f of files) {
  const buf = await fs.readFile(f);
  // Force-interpret as UTF-8 text and normalize BOM away
  let s = buf.toString("utf8").replace(/^\uFEFF/, "");
  const s2 = s.replace(RE, OK);
  if (s2 !== s) {
    await fs.writeFile(f, s2, "utf8");
    changed++;
    console.log("fixed:", f);
  }
}
console.log(`Done. Files changed: ${changed}`);