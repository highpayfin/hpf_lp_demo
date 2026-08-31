import fs from 'fs';
import path from 'path';

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (['node_modules', '.astro', 'dist', '.git', 'temp_backup_staging'].includes(file)) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileList);
    } else if (/\.(astro|json|html|yml|yaml|md|mjs|js|ts)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allFiles = walk('.');
const matches = [];

for (const f of allFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const count = (content.match(/doverka/gi) || []).length;
  if (count > 0) {
    matches.push({ file: f, count });
  }
}

console.log('Files with Doverka references:');
matches.forEach(m => console.log(`- ${m.file} (${m.count} occurrences)`));
