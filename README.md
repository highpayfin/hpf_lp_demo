# High Pay Fin - Clone Website (Astro + Decap CMS)

Bản clone hoàn chỉnh 100% giao diện, hiệu ứng animations (GSAP, Ticker, Accordion FAQ, Tabs, Modal Form) của [High Pay Fin](https://highpayfin.com/), xây dựng trên nền tảng **Astro v5** và tích hợp **Decap CMS** quản trị nội dung trực quan toàn diện.

---

## 🚀 Tính Năng Nổi Bật

- **Astro v5 (Static Site Generation)**: Tốc độ load trang cực nhanh, tối ưu SEO điểm 100/100, chuẩn Responsive Mobile & Desktop.
- **Tách biệt Data Layer (`src/data/*.json`)**: Toàn bộ 13 sections trên trang chủ, cài đặt SEO, hotline, form liên hệ và FAQ đều được quản lý bằng các tệp JSON dễ dàng chỉnh sửa.
- **Decap CMS (`/admin/`)**: Giao diện admin CMS trực quan tích hợp sẵn. Chỉnh sửa văn bản, thay đổi hình ảnh và xuất bản trực tiếp lên GitHub.
- **Chi phí vận hành**: **0đ / tháng** trọn đời với Cloudflare Pages hoặc Vercel Free Tier (bao gồm SSL tự động, băng thông lớn, CDN toàn cầu và CI/CD tự động build khi push code).

---

## 📁 Cấu Trúc Dự Án

```
Anti_HPF_WP/
├── public/
│   ├── admin/
│   │   ├── config.yml       # Cấu hình tất cả Collection & Field của Decap CMS
│   │   └── index.html       # Giao diện Admin CMS
│   └── assets/              # Hình ảnh, CSS, Fonts, GSAP Scripts, Fancybox
├── src/
│   ├── components/          # Toàn bộ các Astro Component của từng section
│   │   ├── Advantages.astro
│   │   ├── ConnectSteps.astro
│   │   ├── ContactForm.astro
│   │   ├── ContactModal.astro
│   │   ├── CookieBanner.astro
│   │   ├── DontPay.astro
│   │   ├── Faq.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── HowItWorks.astro
│   │   ├── MobileMenu.astro
│   │   ├── Partners.astro
│   │   ├── Practicals.astro
│   │   ├── Product.astro
│   │   ├── Trust.astro
│   │   ├── WhoAreWe.astro
│   │   └── WhoItsFor.astro
│   ├── data/                # Data JSON cho từng khối
│   │   ├── advantages.json
│   │   ├── connect-steps.json
│   │   ├── contact.json
│   │   ├── dont-pay.json
│   │   ├── faq.json
│   │   ├── footer.json
│   │   ├── home-hero.json
│   │   ├── how-it-works.json
│   │   ├── partners.json
│   │   ├── practicals.json
│   │   ├── product.json
│   │   ├── site-config.json
│   │   ├── trust.json
│   │   ├── who-are-we.json
│   │   └── who-its-for.json
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout khung chuẩn SEO, Meta, Scripts
│   └── pages/
│       ├── index.astro
│       ├── privacy-policy.astro
│       └── thank-you.astro
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 💻 Hướng Dẫn Chạy Cục Bộ (Local Development)

1. Cài đặt dependencies:
   ```bash
   npm install
   ```

2. Khởi động server phát triển:
   ```bash
   npm run dev
   ```
   Truy cập website tại: `http://localhost:4321`

3. Truy cập giao diện CMS quản trị:
   Truy cập: `http://localhost:4321/admin/`

4. Build bản Production:
   ```bash
   npm run build
   ```
   Kết quả tĩnh sẽ xuất ra thư mục `dist/`.

---

## 🌐 Hướng Dẫn Triển Khai Miễn Phí 0đ/tháng

### Cách 1: Triển khai lên Cloudflare Pages (Khuyên dùng)
1. Đẩy mã nguồn lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial High Pay Fin Astro Clone with Decap CMS"
   git branch -M main
   git remote add origin https://github.com/your-username/high-pay-fin-clone.git
   git push -u origin main
   ```
2. Đăng nhập [Cloudflare Dashboard](https://dash.cloudflare.com/) > Chọn **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Chọn repo `high-pay-fin-clone`.
4. Thiết lập Build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Nhấn **Save and Deploy**. Cloudflare sẽ tự động build và cấp tên miền miễn phí dạng `*.pages.dev` kèm SSL HTTPS miễn phí.

### Cách 2: Triển khai lên Vercel
1. Đăng nhập [Vercel](https://vercel.com/) bằng tài khoản GitHub.
2. Chọn **Add New...** > **Project** > Import repo `high-pay-fin-clone`.
3. Vercel tự động nhận diện Astro, nhấn **Deploy**.

---

## ⚙️ Cấu Hình Decap CMS Cho Production

1. Mở file [public/admin/config.yml](file:///c:/AI%20Era/Anti_HPF_WP/public/admin/config.yml).
2. Thay đổi dòng `repo: your-username/high-pay-fin-clone` thành repository GitHub thực tế của bạn:
   ```yaml
   backend:
     name: github
     repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME
     branch: main
   ```
3. Cấu hình GitHub OAuth Client qua Netlify Identity hoặc dịch vụ OAuth Gatekeeper miễn phí (như Cloudflare Worker OAuth Gatekeeper) để đăng nhập vào `/admin/`.
