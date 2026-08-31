import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const sourceDir = 'C:\\AI Era\\Anti_HPF_WP';
const tempDir = 'C:\\AI Era\\temp_backup_staging';
const zipPath = 'C:\\AI Era\\High_Pay_Fin_Backup.zip';

if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

fs.mkdirSync(tempDir, { recursive: true });

const items = [
  'src',
  'public',
  'package.json',
  'package-lock.json',
  'astro.config.mjs',
  '.gitignore',
  'README.md',
  'raw_index.html',
  'privacy-policy.html',
  'thank-you.html'
];

for (const item of items) {
  const srcPath = path.join(sourceDir, item);
  const destPath = path.join(tempDir, item);
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
    console.log(`Copied: ${item}`);
  }
}

// Add simple instruction file for other machines
const guideContent = `# HƯỚNG DẪN SỬ DỤNG TRÊN MÁY TÍNH MỚI

Dự án: High Pay Fin - Global Multi-Currency Payment Infrastructure (Astro v5 + Decap CMS + Fintech Green)

## Yêu cầu máy tính mới:
- Đã cài đặt **Node.js** (Khuyên dùng bản LTS v18, v20 hoặc v22). Tải tại: https://nodejs.org/

---

## 3 Bước chạy dự án trên máy mới:

### Bước 1: Mở thư mục dự án
Giải nén file ZIP này vào một thư mục bất kỳ trên máy tính (ví dụ: \`D:\\Projects\\High_Pay_Fin\`).
Mở Command Prompt (cmd) hoặc PowerShell hoặc Terminal của VS Code tại thư mục đó.

### Bước 2: Cài đặt thư viện
Chạy lệnh duy nhất sau để cài toàn bộ thư viện cần thiết:
\`\`\`bash
npm install
\`\`\`

### Bước 3: Khởi động Website & Admin CMS
Chạy lệnh:
\`\`\`bash
npm run dev
\`\`\`

Lệnh này sẽ tự động khởi động cùng lúc:
1. **Website Astro**: \`http://localhost:4321\`
2. **Decap CMS Proxy Server**: \`http://localhost:8081\`
3. **Trang Quản trị CMS**: \`http://localhost:4321/admin/\`

---

## Các lệnh hữu ích khác:
- \`npm run build\` : Đóng gói website thành thư mục \`dist/\` tĩnh để đưa lên Cloudflare Pages / Vercel / GitHub Pages / Hosting (Chi phí 0đ/tháng).
- \`npm run preview\` : Xem thử bản build trước khi đẩy lên mạng.
`;

fs.writeFileSync(path.join(tempDir, 'HUONG_DAN_CAI_DAT_MAY_MOI.md'), guideContent, 'utf8');

// Compress tempDir to zipPath using PowerShell Compress-Archive
console.log('Compressing to ZIP archive...');
execSync(`powershell -Command "Compress-Archive -Path '${tempDir}\\*' -DestinationPath '${zipPath}' -Force"`);

fs.rmSync(tempDir, { recursive: true, force: true });

const stats = fs.statSync(zipPath);
console.log(`SUCCESS! Backup ZIP created at: ${zipPath} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
