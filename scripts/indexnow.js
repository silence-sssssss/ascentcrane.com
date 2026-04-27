import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const site = 'https://ascentcrane.com';
const key = 'a1b2c3d4e5f6g7h8j9k0m1n2p3q4r5s6';
const keyLocation = `${site}/${key}.txt`;
const distDir = path.resolve('dist');
const sitemapFilePattern = /^sitemap(?:-\d+)?\.xml$/;
const sitemapIndexFileName = 'sitemap-index.xml';
const endpoints = [
  'https://yandex.com/indexnow',
  'https://api.indexnow.org/indexnow'
];

function extractLocValues(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim()).filter(Boolean);
}

async function getSitemapFiles() {
  const entries = await readdir(distDir, { withFileTypes: true });
  const xmlFiles = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => sitemapFilePattern.test(name));

  if (xmlFiles.length > 0) {
    return xmlFiles.sort((a, b) => a.localeCompare(b));
  }

  const hasIndex = entries.some((entry) => entry.isFile() && entry.name === sitemapIndexFileName);
  if (!hasIndex) {
    return [];
  }

  const indexXml = await readFile(path.join(distDir, sitemapIndexFileName), 'utf8');
  return extractLocValues(indexXml)
    .map((url) => {
      try {
        return path.basename(new URL(url).pathname);
      } catch {
        return '';
      }
    })
    .filter(Boolean);
}

async function getUrlList() {
  const sitemapFiles = await getSitemapFiles();
  const urls = new Set();

  for (const fileName of sitemapFiles) {
    const xml = await readFile(path.join(distDir, fileName), 'utf8');
    for (const loc of extractLocValues(xml)) {
      urls.add(loc);
    }
  }

  return [...urls];
}

async function submitIndexNow(urlList) {
  const payload = {
    host: new URL(site).host,
    key,
    keyLocation,
    urlList
  };

  const results = await Promise.allSettled(
    endpoints.map(async (endpoint) => {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}${text ? ` - ${text}` : ''}`);
      }

      return { endpoint, text };
    })
  );

  for (const result of results) {
    if (result.status === 'fulfilled') {
      console.log(`[indexnow] submitted successfully: ${result.value.endpoint}`);
      if (result.value.text) {
        console.log(result.value.text);
      }
    } else {
      console.warn(`[indexnow] submission failed: ${result.reason?.message ?? result.reason}`);
    }
  }
}

async function main() {
  try {
    const urlList = await getUrlList();

    if (urlList.length === 0) {
      console.warn('[indexnow] no URLs found in dist sitemap files; skipping submission');
      return;
    }

    console.log(`[indexnow] submitting ${urlList.length} URLs`);
    await submitIndexNow(urlList);
  } catch (error) {
    console.warn(`[indexnow] skipped due to error: ${error instanceof Error ? error.message : String(error)}`);
  }
}

await main();
