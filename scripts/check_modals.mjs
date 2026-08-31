import fs from 'fs';
import path from 'path';

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (['node_modules', '.astro', 'dist', '.git'].includes(file)) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileList);
    } else if (file.endsWith('.astro') || file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allFiles = walk('src');
for (const f of allFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const modalAttrs = content.match(/modal="[^"]+"/g) || [];
  const modalIds = content.match(/class="modal"[^>]*id="[^"]+"/g) || content.match(/id="[^"]+"[^>]*class="modal"/g) || [];
  if (modalAttrs.length || modalIds.length) {
    console.log(f, { modalAttrs, modalIds });
  }
}
