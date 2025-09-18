import { promises as fs } from "node:fs";
import { globby } from "globby";

const RE = /(\u2013|\u2014|&ndash;|&mdash;|â€"|â€")/g;
const OK = " - ";

const files = await globby([
  "app/**/*.{tsx,ts,jsx,js,md,mdx,html,txt,json}",
  "components/**/*.{tsx,ts,jsx,js,md,mdx}",
  "content/**/*.{md,mdx,json}",
  "public/**/*.{html,txt}",
  "!node_modules/**", "!.next/**"
]);

let changed = 0;

for (const f of files) {
  const s = (await fs.readFile(f)).toString("utf8").replace(/^\uFEFF/, "");
  const s2 = s.replace(RE, OK);
  if (s2 !== s) { 
    await fs.writeFile(f, s2, "utf8"); 
    changed++; 
    console.log("fixed:", f); 
  }
}

console.log(`Done. Files changed: ${changed}`);