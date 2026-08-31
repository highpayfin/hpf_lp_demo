import fs from 'fs';
import path from 'path';

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (['node_modules', '.astro', 'dist', '.git', 'temp_backup_staging', 'scripts'].includes(file)) continue;
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
let totalReplaced = 0;

for (const f of allFiles) {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Exact domain and email replacements first
  content = content.replace(/https?:\/\/eng\.doverkapay\.com/gi, 'https://highpayfin.com');
  content = content.replace(/https?:\/\/doverkapay\.com/gi, 'https://highpayfin.com');
  content = content.replace(/info@doverkapay\.com/gi, 'info@highpayfin.com');
  content = content.replace(/t\.me\/doverkapay/gi, 't.me/highpayfin');
  content = content.replace(/doverka-pay-clone/gi, 'high-pay-fin-clone');
  content = content.replace(/doverka-pay-astro/gi, 'high-pay-fin-astro');
  content = content.replace(/doverka-pay/gi, 'high-pay-fin');

  // Brand Name replacements
  content = content.replace(/Doverka\s+Pay/g, 'High Pay Fin');
  content = content.replace(/DoverkaPay/g, 'HighPayFin');
  content = content.replace(/doverka\s+pay/g, 'high pay fin');
  content = content.replace(/doverkapay/g, 'highpayfin');
  content = content.replace(/DOVERKA\s+PAY/g, 'HIGH PAY FIN');
  content = content.replace(/DOVERKAPAY/g, 'HIGHPAYFIN');
  content = content.replace(/Doverka/g, 'High Pay Fin');
  content = content.replace(/doverka/g, 'highpayfin');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    totalReplaced++;
    console.log(`Rebranded: ${f}`);
  }
}

console.log(`Total files rebranded: ${totalReplaced}`);
