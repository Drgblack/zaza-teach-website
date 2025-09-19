import fs from 'fs';
import path from 'path';

const ROOTS = ['content', 'app', 'components'];

const map: Record<string, string> = {
  '—': '-',
  '–': '-',
  '−': '-',
  ' ': ' ',
  '"': '"',
  '"': '"',
  "'": "'",
  "'": "'",
  '…': '...',
};

function normalize(s: string): string {
  return s.replace(/[—–− ""''…]/g, (m) => map[m] ?? '-');
}

function walk(dir: string) {
  if (!fs.existsSync(dir)) return;
  
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    
    if (st.isDirectory()) {
      walk(p);
    } else if (/\.(mdx?|tsx?|json|css|txt)$/.test(f)) {
      const src = fs.readFileSync(p, 'utf8');
      const out = normalize(src);
      if (out !== src) {
        fs.writeFileSync(p, out);
        console.log(`✓ Normalized ${p}`);
      }
    }
  }
}

for (const r of ROOTS) {
  if (fs.existsSync(r)) {
    walk(r);
  }
}

console.log('✓ Normalized punctuation complete');