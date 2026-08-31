import fs from 'fs';

const languages = [
  { code: 'en', label: '🇬🇧 Tiếng Anh (English)' },
  { code: 'vi', label: '🇻🇳 Tiếng Việt (Vietnamese)' },
  { code: 'zh', label: '🇨🇳 Tiếng Trung (Chinese)' },
  { code: 'ko', label: '🇰🇷 Tiếng Hàn (Korean)' }
];

let yaml = `backend:
  name: github
  repo: highpayfin/hpf_lp_demo
  branch: main

local_backend: true

media_folder: "public/assets/uploads"
public_folder: "/assets/uploads"

collections:
`;

for (const lang of languages) {
  yaml += `  - name: "lang_${lang.code}"
    label: "${lang.label}"
    files:
      - label: "⚙️ 1. Thông tin Chung & Header (${lang.code.toUpperCase()})"
        name: "general"
        file: "src/data/${lang.code}/site-config.json"
        fields:
          - { label: "Tên Website", name: "site_name", widget: "string" }
          - { label: "Tiêu đề trang (SEO Title)", name: "meta_title", widget: "string" }
          - { label: "Mô tả SEO (Meta Description)", name: "meta_description", widget: "text" }
          - { label: "Số điện thoại Hotline", name: "phone", widget: "string" }
          - { label: "Link Tel Hotline", name: "phone_link", widget: "string" }
          - { label: "Email liên hệ", name: "email", widget: "string" }
          - { label: "Telegram hỗ trợ", name: "telegram_url", widget: "string" }
          - { label: "Chữ nút CTA trên Header", name: "header_cta_text", widget: "string" }
          - label: "Menu điều hướng Header"
            name: "menu_items"
            widget: "list"
            fields:
              - { label: "Tên mục menu", name: "title", widget: "string" }
              - { label: "Đường dẫn link (#hash hoặc /url)", name: "url", widget: "string" }

      - label: "🏠 2. Hero Section - Đầu trang (${lang.code.toUpperCase()})"
        name: "hero"
        file: "src/data/${lang.code}/home-hero.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - label: "Danh sách tiêu đề chạy (Ticker Titles)"
            name: "ticker_titles"
            widget: "list"
            fields:
              - { label: "Tiêu đề", name: "title", widget: "string" }
          - { label: "Hậu tố thương hiệu (Brand Suffix)", name: "brand_suffix", widget: "string" }
          - { label: "Đoạn văn mô tả", name: "description", widget: "text" }
          - { label: "Nút CTA", name: "cta_text", widget: "string" }
          - { label: "Huy hiệu thông tin (Badge)", name: "info_badge", widget: "string" }

      - label: "🤝 3. Section Đối tác (Partners)"
        name: "partners"
        file: "src/data/${lang.code}/partners.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Logo Ngân hàng", name: "national_bank_logo", widget: "image" }
          - { label: "Dòng ghi chú ngân hàng", name: "national_bank_text", widget: "text" }
          - label: "Danh sách Logo đối tác"
            name: "partner_logos"
            widget: "list"
            fields:
              - { label: "Tên đối tác", name: "name", widget: "string" }
              - { label: "Hình ảnh Logo", name: "image", widget: "image" }
              - { label: "Liên kết URL", name: "url", widget: "string", required: false }

      - label: "⚠️ 4. Section Vấn đề & Giải pháp (Dont Pay)"
        name: "dont_pay"
        file: "src/data/${lang.code}/dont-pay.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề khối bên phải", name: "title", widget: "string" }
          - { label: "Mô tả bên phải", name: "description", widget: "text" }
          - { label: "Chữ nút CTA", name: "cta_text", widget: "string" }
          - label: "Danh sách thẻ cảnh báo / giải pháp"
            name: "cards"
            widget: "list"
            fields:
              - { label: "Loại thẻ (red/green)", name: "type", widget: "select", options: ["red", "green"] }
              - { label: "Icon SVG", name: "icon", widget: "image" }
              - { label: "Tiêu đề thẻ", name: "title", widget: "string" }
              - { label: "Nội dung chi tiết", name: "text", widget: "text" }

      - label: "💳 5. Section Hạ tầng Thanh toán (Product)"
        name: "product"
        file: "src/data/${lang.code}/product.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề chính", name: "title", widget: "string" }
          - label: "Các khối phương thức khách hàng"
            name: "client_cards"
            widget: "list"
            fields:
              - { label: "Tiêu đề", name: "title", widget: "string" }
          - { label: "Tên Provider trung tâm", name: "provider_title", widget: "string" }
          - { label: "Tags dịch vụ provider", name: "provider_tags", widget: "string" }
          - { label: "Tiêu đề Doanh nghiệp", name: "business_title", widget: "string" }
          - { label: "Tiêu đề Quyết toán", name: "settlement_title", widget: "string" }

      - label: "👥 6. Section Giới thiệu (Who We Are)"
        name: "who_are_we"
        file: "src/data/${lang.code}/who-are-we.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề", name: "title", widget: "string" }
          - { label: "Mô tả", name: "subtitle", widget: "text" }
          - label: "3 Thẻ thông tin"
            name: "cards"
            widget: "list"
            fields:
              - { label: "Tiêu đề", name: "title", widget: "string" }
              - { label: "Nội dung", name: "text", widget: "text" }
              - { label: "Icon SVG", name: "icon", widget: "image" }

      - label: "⚡ 7. Section Cách thức Hoạt động (How It Works)"
        name: "how_it_works"
        file: "src/data/${lang.code}/how-it-works.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề", name: "title", widget: "string" }
          - { label: "Mô tả phụ", name: "subtitle", widget: "text" }
          - label: "3 Bước hoạt động"
            name: "steps"
            widget: "list"
            fields:
              - { label: "Nhãn bước", name: "step_label", widget: "string" }
              - { label: "Tiêu đề bước", name: "title", widget: "string" }
              - { label: "Mô tả chi tiết bước", name: "description", widget: "text" }
              - { label: "Hình minh họa Desktop", name: "image_desktop", widget: "image" }
              - { label: "Hình minh họa Mobile", name: "image_mobile", widget: "image" }
          - { label: "Khung thông báo Desktop (Notice)", name: "notice_desktop", widget: "text" }
          - { label: "Khung thông báo Mobile (Notice)", name: "notice_mobile", widget: "text" }

      - label: "🌟 8. Section Lợi thế Cạnh tranh (Advantages)"
        name: "advantages"
        file: "src/data/${lang.code}/advantages.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiền tố tiêu đề (Trước cụm cờ)", name: "title_prefix", widget: "string" }
          - { label: "Từ nối giữa (Sau cụm cờ - ví dụ: becomes / trở thành)", name: "title_middle", widget: "string", required: false }
          - { label: "Từ bổ nghĩa (Ví dụ: your / đòn bẩy)", name: "title_suffix", widget: "string", required: false }
          - { label: "Từ khóa nổi bật (màu xanh lá)", name: "highlight_text", widget: "string" }
          - { label: "Mô tả phụ", name: "subtitle", widget: "text" }
          - label: "Danh sách 8 ngành nghề"
            name: "industries"
            widget: "list"
            fields:
              - { label: "Tên ngành nghề", name: "title", widget: "string" }
              - { label: "Mô tả giải pháp", name: "text", widget: "text" }
              - { label: "Icon SVG", name: "icon", widget: "image" }

      - label: "💡 9. Section Tính Tiện lợi (Practicals)"
        name: "practicals"
        file: "src/data/${lang.code}/practicals.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề", name: "title", widget: "string" }
          - label: "Danh sách ưu điểm"
            name: "items"
            widget: "list"
            fields:
              - { label: "Tiêu đề ưu điểm", name: "title", widget: "string" }
              - { label: "Icon", name: "icon", widget: "image" }
              - { label: "Các điểm chi tiết (Bullets)", name: "points", widget: "list" }

      - label: "🎯 10. Section Đối tượng Khách hàng (Who It's For)"
        name: "who_its_for"
        file: "src/data/${lang.code}/who-its-for.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - label: "Danh sách các Tabs"
            name: "tabs"
            widget: "list"
            fields:
              - { label: "ID Tab", name: "id", widget: "string" }
              - { label: "Tên nhãn Tab", name: "tab_label", widget: "string" }
              - { label: "Tiêu đề nội dung", name: "title", widget: "string" }
              - { label: "Hình ảnh Desktop", name: "image_desktop", widget: "image" }
              - { label: "Hình ảnh Mobile", name: "image_mobile", widget: "image" }
              - label: "Các tính năng"
                name: "features"
                widget: "list"
                fields:
                  - { label: "Tiêu đề tính năng", name: "title", widget: "string" }
                  - { label: "Mô tả chi tiết", name: "text", widget: "text" }

      - label: "🚀 11. Section Các bước Kết nối (Connect Steps)"
        name: "connect_steps"
        file: "src/data/${lang.code}/connect-steps.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề", name: "title", widget: "string" }
          - { label: "Mô tả phụ", name: "subtitle", widget: "text" }
          - label: "3 Bước kết nối"
            name: "steps"
            widget: "list"
            fields:
              - { label: "Màu thẻ (violet/green)", name: "color", widget: "select", options: ["violet", "green"] }
              - { label: "Icon SVG", name: "icon", widget: "image" }
              - { label: "Tiêu đề bước", name: "title", widget: "string" }

      - label: "🛡️ 12. Section Độ Tin cậy (Trust)"
        name: "trust"
        file: "src/data/${lang.code}/trust.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề phụ", name: "title", widget: "string" }
          - { label: "Tiêu đề lớn", name: "heading", widget: "string" }
          - { label: "Các đoạn văn bản", name: "paragraphs", widget: "list" }
          - { label: "Tiêu đề Thẻ 1", name: "card1_title", widget: "string" }
          - { label: "Nội dung Thẻ 1", name: "card1_text", widget: "string" }
          - { label: "Tiêu đề Thẻ 2", name: "card2_title", widget: "string" }
          - { label: "Nội dung Thẻ 2", name: "card2_text", widget: "string" }

      - label: "❓ 13. Section Câu hỏi Thường gặp (FAQ)"
        name: "faq"
        file: "src/data/${lang.code}/faq.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề", name: "title", widget: "string" }
          - label: "Danh sách câu hỏi & trả lời"
            name: "questions"
            widget: "list"
            fields:
              - { label: "Câu hỏi", name: "question", widget: "string" }
              - { label: "Câu trả lời", name: "answer", widget: "text" }

      - label: "✉️ 14. Section Form Liên hệ (Contact Form)"
        name: "contact"
        file: "src/data/${lang.code}/contact.json"
        fields:
          - { label: "👁️ Bật / Tắt hiển thị Section này", name: "enabled", widget: "boolean", default: true }
          - { label: "Tiêu đề Form", name: "form_title", widget: "string" }
          - { label: "Mô tả phụ Form", name: "form_subtitle", widget: "text" }
          - { label: "Chữ nút Submit", name: "button_text", widget: "string" }
          - { label: "Ghi chú bảo mật", name: "privacy_note", widget: "string" }

      - label: "🎨 15. Thêm Section Tùy Biến (Custom Sections)"
        name: "custom_sections"
        file: "src/data/${lang.code}/custom-sections.json"
        fields:
          - label: "Danh sách các Section tự tạo thêm"
            name: "sections"
            widget: "list"
            fields:
              - { label: "Bật hiển thị", name: "enabled", widget: "boolean", default: true }
              - { label: "Huy hiệu đầu (Badge)", name: "badge", widget: "string", required: false }
              - { label: "Tiêu đề Section", name: "title", widget: "string" }
              - { label: "Mô tả phụ", name: "subtitle", widget: "text", required: false }
              - { label: "Nội dung chi tiết (HTML hoặc Markdown)", name: "content_html", widget: "markdown", required: false }
              - { label: "Chữ nút bấm (Button text)", name: "button_text", widget: "string", required: false }
              - { label: "Link nút bấm", name: "button_link", widget: "string", required: false }

      - label: "🦶 16. Chân trang (Footer)"
        name: "footer"
        file: "src/data/${lang.code}/footer.json"
        fields:
          - { label: "Tên Pháp Nhân Công Ty", name: "org_name", widget: "string" }
          - { label: "Nhãn mạng lưới thanh toán", name: "network_label", widget: "string" }
          - { label: "Dòng bản quyền (Copyright)", name: "copyright", widget: "string" }
          - { label: "Số điện thoại Footer", name: "phone", widget: "string" }
          - { label: "Link Tel Footer", name: "phone_link", widget: "string" }
          - { label: "Email Footer", name: "email", widget: "string" }
          - { label: "Tiêu đề Cột 1 (Mặc định: Navigation / Điều hướng)", name: "nav_label", widget: "string", default: "Navigation" }
          - label: "Danh sách liên kết Navigation (Cột 1)"
            name: "nav_links"
            widget: "list"
            fields:
              - { label: "Tên liên kết", name: "title", widget: "string" }
              - { label: "Đường dẫn URL", name: "url", widget: "string" }
          - { label: "Tiêu đề Cột 2 (Mặc định: Documents / Tài liệu - Chỉ hiển thị khi có link bên dưới)", name: "doc_label", widget: "string", default: "Documents", required: false }
          - label: "Danh sách liên kết Documents (Cột 2 - Để trống sẽ tự ẩn cột này)"
            name: "doc_links"
            widget: "list"
            required: false
            fields:
              - { label: "Tên tài liệu", name: "title", widget: "string" }
              - { label: "Đường dẫn URL", name: "url", widget: "string" }
`;
}

yaml += `  - name: "system_settings"
    label: "🤖 Cài Đặt Hệ Thống & Telegram"
    files:
      - label: "🔔 Cấu hình Nhận Thông Báo Form qua Telegram"
        name: "telegram_config"
        file: "src/data/telegram.json"
        fields:
          - { label: "Bật gửi thông báo về Telegram", name: "enable_telegram", widget: "boolean", default: true }
          - { label: "Telegram Bot Token (từ @BotFather)", name: "telegram_bot_token", widget: "string", hint: "Ví dụ: 123456789:ABCdefGHIjkl..." }
          - { label: "Telegram Chat ID / Group ID (người hoặc nhóm nhận tin)", name: "telegram_chat_id", widget: "string", hint: "ID cá nhân hoặc ID nhóm (bắt đầu bằng dấu - nếu là nhóm)" }
          - { label: "Nội dung thông báo thành công", name: "success_message", widget: "string" }
          - { label: "Nội dung thông báo lỗi", name: "error_message", widget: "string" }
`;

fs.writeFileSync('public/admin/config.yml', yaml, 'utf8');
console.log('Successfully generated public/admin/config.yml for all languages!');
