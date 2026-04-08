import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const blogDir = path.join(rootDir, 'src', 'content', 'blog');
const supportedLangs = ['en', 'zh', 'ru', 'de', 'fr', 'es'];

const productHrefByLang = {
  en: '/en/products/mobile-warehouse-gantry-crane',
  zh: '/zh/products/mobile-warehouse-gantry-crane',
  ru: '/ru/products/mobile-warehouse-gantry-crane',
  de: '/de/products/mobile-warehouse-gantry-crane',
  fr: '/fr/products/mobile-warehouse-gantry-crane',
  es: '/es/products/mobile-warehouse-gantry-crane'
};

const keywordPatterns = [
  /\bGantry Crane\b/gi,
  /\bMicro Gantry Crane\b/gi,
  /\bPortable Gantry Crane\b/gi,
  /\bMobile Gantry Crane\b/gi
];

function replaceFirstEligibleKeyword(content, href) {
  if (content.includes(href)) {
    return { content, changed: false };
  }

  const lines = content.split('\n');
  let changed = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line.trim() || line.startsWith('---') || line.startsWith('title:') || line.startsWith('description:') || line.startsWith('#') || line.includes('](') || line.includes('http')) {
      continue;
    }

    for (const pattern of keywordPatterns) {
      const match = line.match(pattern);
      if (!match) continue;

      const keyword = match[0];
      lines[index] = line.replace(pattern, `[${keyword}](${href})`);
      changed = true;
      return { content: lines.join('\n'), changed };
    }
  }

  return { content, changed };
}

async function getMarkdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return getMarkdownFiles(fullPath);
      }
      return entry.name.endsWith('.md') ? [fullPath] : [];
    })
  );

  return files.flat();
}

async function main() {
  const markdownFiles = await getMarkdownFiles(blogDir);
  let updatedCount = 0;

  for (const filePath of markdownFiles) {
    const relativePath = path.relative(blogDir, filePath);
    const [lang] = relativePath.split(path.sep);

    if (!supportedLangs.includes(lang)) {
      continue;
    }

    const source = await fs.readFile(filePath, 'utf8');
    const { content, changed } = replaceFirstEligibleKeyword(source, productHrefByLang[lang]);

    if (!changed) {
      continue;
    }

    await fs.writeFile(filePath, content, 'utf8');
    updatedCount += 1;
    console.log(`Linked keyword in ${relativePath}`);
  }

  console.log(`Done. Updated ${updatedCount} blog files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
