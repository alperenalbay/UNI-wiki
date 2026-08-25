#!/usr/bin/env node
// scripts/generateRecentDocs.js
// Son 5 dokümanı git tarihine göre üretir -> src/data/recentDocs.json
// Çalıştır: node scripts/generateRecentDocs.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DOCS_ROOT = path.join(__dirname, '..', 'docs');
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'recentDocs.json');

// Kategori etiketleri (sidebars.js ile uyumlu)
const CATEGORY_LABELS = {
  'urunler-ve-paketler': 'Ürünler ve Paketler',
  'fiyatlandirma-ve-hesaplama': 'Fiyatlandırma ve Hesaplama',
  'indirmeler-ve-kurulum': 'İndirmeler ve Kurulum',
  'genel-muhasebe': 'Genel Muhasebe',
  'on-muhasebe': 'Ön Muhasebe',
  'insan-kaynaklari': 'İnsan Kaynakları',
  'rehberler-ve-kodlar': 'Rehberler ve Kodlar',
  'sss-ve-ipuclari': 'SSS ve İpuçları',
  'formlar': 'Formlar ve Belgeler',
  'araclar': 'Araçlar ve Yamalar',
};

function walk(dir, list = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, list);
    else if (e.isFile() && e.name.endsWith('.md')) list.push(full);
  }
  return list;
}

function parseDoc(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  let description = '';
  let title = '';

  // frontmatter description
  const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (fmMatch) {
    const fm = fmMatch[1];
    const descMatch = fm.match(/description:\s*["']?(.*?)["']?\s*$/m);
    if (descMatch) description = descMatch[1].trim();
  }

  // first H1
  const h1Match = raw.match(/^#\s+(.+)$/m);
  if (h1Match) title = h1Match[1].trim();
  if (!title) {
    // fallback filename
    title = path.basename(filePath, '.md').replace(/-/g, ' ');
  }
  if (!description) description = title;

  // truncate description
  if (description.length > 120) description = description.slice(0, 117) + '...';

  return { title, description };
}

function getGitTimestamp(filePath) {
  try {
    const rel = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');
    const out = execSync(`git log -1 --format=%ct -- "${rel}"`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    if (out) return parseInt(out, 10);
  } catch (_) {}
  // fallback mtime
  try {
    const stat = fs.statSync(filePath);
    return Math.floor(stat.mtimeMs / 1000);
  } catch (_) {
    return 0;
  }
}

function getGitDateShort(filePath) {
  try {
    const rel = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');
    const out = execSync(`git log -1 --format=%ad --date=short -- "${rel}"`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    if (out) return out;
  } catch (_) {}
  try {
    const stat = fs.statSync(filePath);
    return stat.mtime.toISOString().slice(0, 10);
  } catch (_) {
    return new Date().toISOString().slice(0, 10);
  }
}

function formatTR(dateStr) {
  // YYYY-MM-DD -> DD.MM.YYYY
  const [y, m, d] = dateStr.split('-');
  if (y && m && d) return `${d}.${m}.${y}`;
  return dateStr;
}

const files = walk(DOCS_ROOT);
const docs = files.map((full) => {
  const rel = path.relative(DOCS_ROOT, full).replace(/\\/g, '/').replace(/\.md$/, '');
  const url = `/docs/${rel}`;
  const { title, description } = parseDoc(full);
  const ts = getGitTimestamp(full);
  const dateShort = getGitDateShort(full);
  const categoryKey = rel.split('/')[0];
  const category = CATEGORY_LABELS[categoryKey] || categoryKey;
  return {
    title,
    description,
    url: url,
    category,
    categoryKey,
    date: formatTR(dateShort),
    isoDate: dateShort,
    timestamp: ts,
    file: `docs/${rel}.md`,
  };
});

docs.sort((a, b) => b.timestamp - a.timestamp || a.title.localeCompare(b.title, 'tr'));

const recent = docs.slice(0, 5).map(({ timestamp, ...rest }) => rest);

// ensure out dir
fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(recent, null, 2), 'utf8');

console.log(`[generateRecentDocs] ${files.length} dokuman tarandi, son ${recent.length} yazildi -> ${path.relative(process.cwd(), OUT_FILE)}`);
recent.forEach((r, i) => console.log(` ${i + 1}. ${r.date} ${r.title} -> ${r.url}`));
