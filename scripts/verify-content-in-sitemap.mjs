import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function walkMarkdown(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkMarkdown(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function parseFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const block = m[1];
  const lang = block.match(/^lang:\s*(\S+)/m)?.[1];
  const slugLine = block.match(/^slug:\s*(.+)$/m)?.[1]?.trim();
  let slug = slugLine;
  if (slug && /^['"].*['"]$/.test(slug)) slug = slug.slice(1, -1);
  if (!lang || !slug) return null;
  return { lang, slug };
}

function collectExpected(baseDir, pathSegment) {
  const set = new Set();
  const files = walkMarkdown(baseDir);
  for (const f of files) {
    const meta = parseFrontmatter(f);
    if (!meta) {
      console.warn('[verify-content-in-sitemap] skip (no lang/slug):', path.relative(root, f));
      continue;
    }
    set.add(`https://ascentcrane.com/${meta.lang}/${pathSegment}/${meta.slug}/`);
  }
  return { set, files: files.length };
}

const smPath = path.join(root, 'dist', 'sitemap-0.xml');
if (!fs.existsSync(smPath)) {
  console.error('[verify-content-in-sitemap] Missing dist/sitemap-0.xml — run: npm run build');
  process.exit(2);
}

const xml = fs.readFileSync(smPath, 'utf8');
const inSitemap = new Set();
for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) inSitemap.add(m[1]);

const blog = collectExpected(path.join(root, 'src', 'content', 'blog'), 'blog');
const solutions = collectExpected(path.join(root, 'src', 'content', 'solutions'), 'solutions');
const products = collectExpected(path.join(root, 'src', 'content', 'products'), 'products');

const allExpected = new Set([...blog.set, ...solutions.set, ...products.set]);
const missing = [...allExpected].filter((u) => !inSitemap.has(u));

console.log('Markdown files scanned — blog:', blog.files, 'solutions:', solutions.files, 'products:', products.files);
console.log('Expected content URLs:', allExpected.size);
console.log('Missing from sitemap:', missing.length);
if (missing.length) console.log(missing.join('\n'));

process.exit(missing.length ? 1 : 0);
