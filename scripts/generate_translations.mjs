import fs from 'fs';
import path from 'path';

const languages = ['vi', 'zh', 'ko'];

const translations = {
  vi: {
    'site-config.json': {
      site_name: "High Pay Fin",
      meta_title: "High Pay Fin - Hạ Tầng Thanh Toán Đa Tiền Tệ Toàn Cầu",
      meta_description: "Giải pháp thanh toán đa tiền tệ toàn cầu cho doanh nghiệp quốc tế. Chấp nhận hơn 50 loại tiền tệ và tài sản số, quyết toán tức thì, phí thấp và tuân thủ pháp lý.",
      phone: "+375 (44) 7788879",
      phone_link: "tel:+375447788879",
      email: "info@highpayfin.com",
      telegram_url: "https://t.me/highpayfin",
      header_cta_text: "Nhận Tư Vấn",
      menu_items: [
        { title: "Sản phẩm", url: "/vi/#product" },
        { title: "Cách hoạt động", url: "/vi/#whats-work" },
        { title: "Ưu điểm", url: "/vi/#advantages" },
        { title: "Khách hàng", url: "/vi/#for-whom" },
        { title: "Hỏi đáp", url: "/vi/#faq" }
      ]
    },
    'home-hero.json': {
      ticker_titles: [
        { title: "Chấp nhận đa tiền tệ từ khách hàng toàn cầu" },
        { title: "Mở rộng giao thương quốc tế không giới hạn" },
        { title: "Thanh toán xuyên biên giới hợp pháp và minh bạch" }
      ],
      brand_suffix: "cùng High Pay Fin",
      description: "Chúng tôi giúp các doanh nghiệp quốc tế chấp nhận thanh toán đa tiền tệ từ khách hàng toàn cầu và nhận quyết toán bằng đồng nội tệ hoặc stablecoin – hoàn toàn hợp pháp và minh bạch.",
      cta_text: "Kết nối High Pay Fin",
      info_badge: "Miễn phí tích hợp • 50+ Loại tiền tệ • Cho doanh nghiệp toàn cầu"
    },
    'partners.json': {
      national_bank_logo: "/assets/uploads/2026/02/national_bank.svg",
      national_bank_text: "Tuân thủ đầy đủ chuẩn mực quốc tế & mạng lưới ngân hàng toàn cầu",
      partner_logos: [
        { name: "Partner 1", image: "/assets/uploads/2026/02/partner-1.svg", url: "" },
        { name: "Partner 2", image: "/assets/uploads/2026/02/partner-2.svg", url: "" },
        { name: "Partner 3", image: "/assets/uploads/2026/02/partner-3.svg", url: "" },
        { name: "Partner 4", image: "/assets/uploads/2026/02/partner-4.svg", url: "" },
        { name: "Partner 5", image: "/assets/uploads/2026/02/partner-5.svg", url: "" }
      ]
    },
    'dont-pay.json': {
      title: "Tại sao khách hàng toàn cầu gặp khó khăn khi thanh toán?",
      description: "Thanh toán quốc tế truyền thống thường chậm trễ, chi phí chuyển đổi cao và bị từ chối thẻ. High Pay Fin giải quyết triệt để rào cản này bằng hạ tầng thanh toán nội địa hóa.",
      cta_text: "Bắt đầu chấp nhận thanh toán",
      cards: [
        {
          type: "red",
          icon: "/assets/uploads/2026/02/cross.svg",
          title: "Rào cản thanh toán quốc tế",
          text: "Khách hàng bị từ chối thẻ thanh toán quốc tế, phí FX đắt đỏ, thủ tục chuyển tiền SWIFT phức tạp mất nhiều ngày."
        },
        {
          type: "green",
          icon: "/assets/uploads/2026/02/check.svg",
          title: "Giải pháp High Pay Fin",
          text: "Khách hàng thanh toán bằng phương thức nội địa quen thuộc, bạn nhận dòng tiền tức thì vào tài khoản doanh nghiệp."
        }
      ]
    },
    'product.json': {
      title: "Hạ tầng thanh toán toàn diện",
      client_cards: [
        { title: "Thẻ ngân hàng (Visa, Mastercard, JCB)" },
        { title: "Ví điện tử & Cổng thanh toán nội địa" },
        { title: "Chuyển khoản QR & Ngân hàng tức thì" },
        { title: "Tài sản số & Stablecoin (USDT/USDC)" }
      ],
      provider_title: "High Pay Fin Core",
      provider_tags: "Định tuyến tự động • Bảo mật PCI-DSS • Chống gian lận AI",
      business_title: "Doanh nghiệp của bạn",
      settlement_title: "Quyết toán đa tiền tệ tức thì"
    },
    'who-are-we.json': {
      title: "Chúng tôi là ai?",
      subtitle: "High Pay Fin là nhà cung cấp hạ tầng công nghệ tài chính chuyên biệt cho các giao dịch xuyên biên giới khối lượng lớn.",
      cards: [
        {
          title: "50+ Tiền tệ toàn cầu",
          text: "Hỗ trợ thu hộ và chi hộ trên 50 loại tiền tệ pháp định (USD, EUR, GBP, SGD, THB, VND...) và các loại tiền kỹ thuật số phổ biến.",
          icon: "/assets/uploads/2026/02/icon-1.svg"
        },
        {
          title: "Quyết toán linh hoạt T+0 / T+1",
          text: "Nhận tiền thanh toán về tài khoản doanh nghiệp nhanh chóng bằng nội tệ mong muốn hoặc stablecoin với tỷ giá cạnh tranh nhất.",
          icon: "/assets/uploads/2026/02/icon-2.svg"
        },
        {
          title: "Bảo mật & Pháp lý chặt chẽ",
          text: "Hệ thống đáp ứng tiêu chuẩn bảo mật ngân hàng cao nhất, kiểm tra AML/KYC tự động, minh bạch hóa đơn chứng từ.",
          icon: "/assets/uploads/2026/02/icon-3.svg"
        }
      ]
    },
    'how-it-works.json': {
      title: "Quy trình hoạt động",
      subtitle: "Chỉ với 3 bước đơn giản để bắt đầu nhận thanh toán từ khách hàng khắp thế giới",
      steps: [
        {
          step_label: "Bước 1",
          title: "Tạo link hoặc tích hợp API thanh toán",
          description: "Gửi hóa đơn, link thanh toán trực tiếp cho khách hàng hoặc tích hợp widget thanh toán vào website của bạn qua API/SDK.",
          image_desktop: "/assets/uploads/2026/02/macbook-1.webp",
          image_mobile: "/assets/uploads/2026/02/macbook-1_mobile.webp"
        },
        {
          step_label: "Bước 2",
          title: "Khách hàng thanh toán bằng nội tệ",
          description: "Khách hàng thanh toán nhanh chóng bằng thẻ tín dụng, chuyển khoản nội địa hoặc ví điện tử tại quốc gia của họ.",
          image_desktop: "/assets/uploads/2026/02/macbook-2.webp",
          image_mobile: "/assets/uploads/2026/02/macbook-2_mobile.webp"
        },
        {
          step_label: "Bước 3",
          title: "Quyết toán vào tài khoản doanh nghiệp",
          description: "Dòng tiền được quy đổi tự động và chuyển về tài khoản ngân hàng hoặc ví kỹ thuật số của bạn một cách an toàn.",
          image_desktop: "/assets/uploads/2026/02/iphone-1.webp",
          image_mobile: "/assets/uploads/2026/02/iphone-1_mobile.webp"
        }
      ],
      notice_desktop: "Thời gian xử lý giao dịch trung bình chỉ dưới 30 giây",
      notice_mobile: "Thời gian xử lý trung bình dưới 30 giây"
    },
    'advantages.json': {
      title_prefix: "Nơi High Pay Fin",
      highlight_text: "thúc đẩy tăng trưởng toàn cầu",
      subtitle: "Khi khách hàng quốc tế thanh toán bằng đồng tiền bản địa, và bạn nhận quyết toán bằng loại tài sản mong muốn",
      flags: [
        { name: "South Africa", image: "/assets/img/SouthAfrica.webp" },
        { name: "South Korea", image: "/assets/img/SouthKorea.webp" },
        { name: "Thailand", image: "/assets/img/Thailand.webp" },
        { name: "Vietnam", image: "/assets/img/Vietnam.webp" }
      ],
      industries: [
        {
          title: "Thương mại điện tử & Sàn giao dịch",
          text: "Chấp nhận thẻ, ví nội địa và phương thức thanh toán thay thế toàn cầu với tỷ lệ chuyển đổi tối đa.",
          icon: "/assets/uploads/2026/05/advantage-3.svg"
        },
        {
          title: "Bất động sản & Chủ đầu tư",
          text: "Thanh toán mua bất động sản xuyên biên giới, đặt cọc, thanh toán theo tiến độ và chi trả hoa hồng đại lý.",
          icon: "/assets/uploads/2026/05/advantage-2.svg"
        },
        {
          title: "SaaS & Dịch vụ số",
          text: "Thu phí thuê bao định kỳ trên 50+ loại tiền tệ với cơ chế tự động định tuyến ngoại hối thông minh.",
          icon: "/assets/uploads/2026/05/advantage-5.svg"
        },
        {
          title: "Khách sạn, Du lịch & Nghỉ dưỡng",
          text: "Đặt phòng khách sạn, tour du lịch, dịch vụ hỗ trợ đặc biệt và thuê chuyến bay bằng mọi loại tiền tệ.",
          icon: "/assets/uploads/2026/05/advantage-6.svg"
        },
        {
          title: "Xuất nhập khẩu & Thương mại B2B",
          text: "Hợp đồng thiết bị, hàng điện tử và bán buôn giá trị cao với cơ chế xác minh giao dịch tức thì.",
          icon: "/assets/uploads/2026/05/advantage-4.svg"
        },
        {
          title: "Giáo dục & Tư vấn trực tuyến",
          text: "Học phí đại học, khóa đào tạo quốc tế, tư vấn IT và dịch vụ pháp lý trên toàn cầu.",
          icon: "/assets/uploads/2026/05/advantage-7.svg"
        },
        {
          title: "Y tế & Du lịch chăm sóc sức khỏe",
          text: "Thanh toán điều trị y tế quốc tế, chẩn đoán, thẩm mỹ và các gói chăm sóc sức khỏe cao cấp.",
          icon: "/assets/uploads/2026/05/advantage-1.svg"
        },
        {
          title: "Fintech & Dịch vụ cao cấp",
          text: "Tự động hóa chi trả đa tiền tệ, thuê xe sang, dịch vụ độc quyền với lịch sử giao dịch minh bạch.",
          icon: "/assets/uploads/2026/05/advantage-8.svg"
        }
      ]
    },
    'practicals.json': {
      title: "Ưu điểm thực tiễn",
      items: [
        {
          title: "Tối ưu hóa dòng tiền",
          icon: "/assets/uploads/2026/02/icon-card-1.svg",
          points: [
            "Tỷ lệ duyệt giao dịch thành công cao trên 98%",
            "Không phát sinh chi phí ẩn hay biến động tỷ giá bất ngờ",
            "Báo cáo giao dịch theo thời gian thực"
          ]
        },
        {
          title: "Tuân thủ & An toàn",
          icon: "/assets/uploads/2026/02/icon-card-2.svg",
          points: [
            "Đầy đủ hợp đồng và hóa đơn thanh toán hợp lệ",
            "Đáp ứng chuẩn kiểm toán quốc tế",
            "Bảo vệ người bán khỏi rủi ro bồi hoàn vô căn cứ"
          ]
        }
      ]
    },
    'who-its-for.json': {
      tabs: [
        {
          id: "tab-1",
          tab_label: "Doanh nghiệp trực tuyến",
          title: "Giải pháp cho thương mại điện tử & Dịch vụ số",
          image_desktop: "/assets/img/block-title-image/card-1-big.webp",
          image_mobile: "/assets/img/block-title-image/card-1-small.webp",
          features: [
            { title: "Tích hợp 1 lần", text: "Kết nối nhanh chóng qua REST API hoặc cổng thanh toán nhúng sẵn." },
            { title: "Tăng trưởng doanh thu", text: "Cho phép khách hàng thanh toán bằng phương thức ưa thích tại địa phương." }
          ]
        },
        {
          id: "tab-2",
          tab_label: "Bất động sản & B2B",
          title: "Giải pháp cho giao dịch giá trị lớn",
          image_desktop: "/assets/img/block-title-image/card-2-big.webp",
          image_mobile: "/assets/img/block-title-image/card-2-small.webp",
          features: [
            { title: "Hạn mức linh hoạt", text: "Hỗ trợ thanh toán các đơn hàng giá trị cao không giới hạn." },
            { title: "Quyết toán nhanh", text: "Nhận tiền trực tiếp vào tài khoản công ty trong ngày." }
          ]
        }
      ]
    },
    'connect-steps.json': {
      title: "3 Bước kết nối nhanh chóng",
      subtitle: "Bắt đầu nhận thanh toán quốc tế chỉ trong 24 giờ",
      steps: [
        { color: "violet", icon: "/assets/uploads/2026/02/icon-1.svg", title: "1. Gửi yêu cầu tư vấn" },
        { color: "green", icon: "/assets/uploads/2026/02/icon-2.svg", title: "2. Ký hợp đồng & Tích hợp" },
        { color: "violet", icon: "/assets/uploads/2026/02/icon-3.svg", title: "3. Nhận thanh toán toàn cầu" }
      ]
    },
    'trust.json': {
      title: "Độ tin cậy & An toàn",
      heading: "Hạ tầng tài chính vững chắc cho doanh nghiệp",
      paragraphs: [
        "High Pay Fin cam kết mang lại giải pháp thanh toán an toàn, minh bạch và tuân thủ tuyệt đối quy định tài chính quốc tế.",
        "Mọi giao dịch đều được mã hóa đa lớp và bảo vệ bởi hệ thống giám sát thời gian thực."
      ],
      card1_title: "100% Tuân thủ pháp lý",
      card1_text: "Hợp đồng rõ ràng, chứng từ pháp lý đầy đủ phục vụ quyết toán thuế.",
      card2_title: "Bảo mật cấp ngân hàng",
      card2_text: "Chuẩn mã hóa PCI-DSS Level 1 cao nhất thế giới."
    },
    'faq.json': {
      title: "Câu hỏi thường gặp",
      questions: [
        {
          question: "High Pay Fin hỗ trợ những loại tiền tệ nào?",
          answer: "Chúng tôi hỗ trợ hơn 50 loại tiền tệ pháp định (USD, EUR, GBP, SGD, THB, VND, JPY...) cùng các đồng stablecoin hàng đầu như USDT, USDC."
        },
        {
          question: "Thời gian quyết toán tiền về tài khoản là bao lâu?",
          answer: "Tùy thuộc vào phương thức lựa chọn, tiền sẽ về tài khoản doanh nghiệp của bạn tức thì (T+0) hoặc trong vòng 24 giờ làm việc (T+1)."
        },
        {
          question: "Phí tích hợp và duy trì hệ thống là bao nhiêu?",
          answer: "High Pay Fin miễn phí 100% phí thiết lập ban đầu và phí duy trì hàng tháng. Bạn chỉ trả phí giao dịch cạnh tranh khi có dòng tiền phát sinh."
        },
        {
          question: "Làm thế nào để bắt đầu sử dụng dịch vụ?",
          answer: "Bạn chỉ cần để lại thông tin tại form liên hệ hoặc click nút 'Nhận tư vấn', chuyên viên High Pay Fin sẽ hỗ trợ kích hoạt tài khoản trong vòng 24 giờ."
        }
      ]
    },
    'contact.json': {
      form_title: "Bắt đầu chấp nhận\nthanh toán toàn cầu",
      form_subtitle: "Kích hoạt trong 24 giờ —\nmở rộng doanh thu xuyên biên giới",
      button_text: "Gửi yêu cầu kết nối",
      privacy_note: "Thông tin của bạn được bảo mật tuyệt đối theo chính sách quyền riêng tư."
    },
    'footer.json': {
      org_name: "High Pay Fin LLC",
      network_label: "MẠNG LƯỚI QUYẾT TOÁN XUYÊN BIÊN GIỚI TOÀN CẦU",
      copyright: "© 2026. Bảo lưu mọi quyền",
      phone: "+375 (44) 7788879",
      phone_link: "tel:+375447788879",
      email: "info@highpayfin.com",
      telegram_url: "https://t.me/highpayfin",
      nav_links: [
        { title: "Sản phẩm", url: "/vi/#product" },
        { title: "Cách hoạt động", url: "/vi/#whats-work" },
        { title: "Ưu điểm", url: "/vi/#advantages" },
        { title: "Khách hàng", url: "/vi/#for-whom" },
        { title: "Hỏi đáp", url: "/vi/#faq" }
      ],
      doc_links: [
        { title: "Chính sách xử lý dữ liệu cá nhân", url: "/privacy-policy" },
        { title: "Điều khoản dịch vụ thanh toán", url: "/privacy-policy" },
        { title: "Thông tin pháp nhân", url: "/privacy-policy" }
      ]
    }
  },

  zh: {
    'site-config.json': {
      site_name: "High Pay Fin",
      meta_title: "High Pay Fin - 全球多币种跨境支付基础设施",
      meta_description: "为国际企业提供全球多币种支付解决方案。支持50多种法定货币与数字资产，即时结算，超低费率，完全合规。",
      phone: "+375 (44) 7788879",
      phone_link: "tel:+375447788879",
      email: "info@highpayfin.com",
      telegram_url: "https://t.me/highpayfin",
      header_cta_text: "获取咨询",
      menu_items: [
        { title: "产品介绍", url: "/zh/#product" },
        { title: "运作方式", url: "/zh/#whats-work" },
        { title: "核心优势", url: "/zh/#advantages" },
        { title: "适用群体", url: "/zh/#for-whom" },
        { title: "常见问题", url: "/zh/#faq" }
      ]
    },
    'home-hero.json': {
      ticker_titles: [
        { title: "轻松接收全球客户的多币种付款" },
        { title: "无缝拓展全球跨境贸易与数字业务" },
        { title: "合规、透明、高效的跨境资金结算" }
      ],
      brand_suffix: "携手 High Pay Fin",
      description: "我们协助跨国企业接收来自全球客户的本地货币付款，并以您指定的本地法定货币或稳定币结算至企业账户——完全合法合规、透明无忧。",
      cta_text: "接入 High Pay Fin",
      info_badge: "免费接入 • 支持50+币种 • 专为全球业务设计"
    },
    'partners.json': {
      national_bank_logo: "/assets/uploads/2026/02/national_bank.svg",
      national_bank_text: "完全符合国际金融规范与全球银行清算网络标准",
      partner_logos: [
        { name: "Partner 1", image: "/assets/uploads/2026/02/partner-1.svg", url: "" },
        { name: "Partner 2", image: "/assets/uploads/2026/02/partner-2.svg", url: "" },
        { name: "Partner 3", image: "/assets/uploads/2026/02/partner-3.svg", url: "" },
        { name: "Partner 4", image: "/assets/uploads/2026/02/partner-4.svg", url: "" },
        { name: "Partner 5", image: "/assets/uploads/2026/02/partner-5.svg", url: "" }
      ]
    },
    'dont-pay.json': {
      title: "为什么全球客户经常遇到支付阻碍？",
      description: "传统国际跨境电汇存在耗时长、汇率磨损高以及国际信用卡拒付率高等难题。High Pay Fin 通过本地化支付通道彻底消除这些障碍。",
      cta_text: "立即开启全球收单",
      cards: [
        {
          type: "red",
          icon: "/assets/uploads/2026/02/cross.svg",
          title: "传统跨境支付痛点",
          text: "跨国支付常被银行拦截，外汇转换成本高昂，SWIFT电汇需要数个工作日才能到账。"
        },
        {
          type: "green",
          icon: "/assets/uploads/2026/02/check.svg",
          title: "High Pay Fin 解决方案",
          text: "买家使用熟悉的本地支付方式快速付款，卖家资金即时结算到账，安全高效。"
        }
      ]
    },
    'product.json': {
      title: "全方位跨境支付基础设施",
      client_cards: [
        { title: "国际银行卡 (Visa, Mastercard, JCB)" },
        { title: "本地电子钱包与聚合支付通道" },
        { title: "本地二维码与即时银行转账" },
        { title: "主流加密资产与稳定币 (USDT/USDC)" }
      ],
      provider_title: "High Pay Fin 核心枢纽",
      provider_tags: "智能外汇路由 • PCI-DSS 国际安全认证 • AI 反欺诈防护",
      business_title: "您的企业商户",
      settlement_title: "即时多币种资金清算"
    },
    'who-are-we.json': {
      title: "关于我们",
      subtitle: "High Pay Fin 是一家专注于大额跨境交易与多币种收付清算的金融科技基础设施服务商。",
      cards: [
        {
          title: "支持 50+ 全球币种",
          text: "支持美元、欧元、英镑、新币、泰铢、越南盾等主流法定货币及主流稳定币收付款。",
          icon: "/assets/uploads/2026/02/icon-1.svg"
        },
        {
          title: "T+0 / T+1 极速结算",
          text: "资金快速结算至企业银行账户或指定数字资产钱包，提供业内最具竞争力的实时汇率。",
          icon: "/assets/uploads/2026/02/icon-2.svg"
        },
        {
          title: "金融级安全与合规",
          text: "采用最高等级银行安全协议，全自动 AML/KYC 筛查，完整合法发票与交易凭证。",
          icon: "/assets/uploads/2026/02/icon-3.svg"
        }
      ]
    },
    'how-it-works.json': {
      title: "运作流程",
      subtitle: "仅需 3 个简单步骤，即可开始接收全球客户付款",
      steps: [
        {
          step_label: "第一步",
          title: "生成支付链接或集成 API",
          description: "直接向客户发送账单/支付链接，或通过我们成熟的 API/SDK 嵌入您的商城网站。",
          image_desktop: "/assets/uploads/2026/02/macbook-1.webp",
          image_mobile: "/assets/uploads/2026/02/macbook-1_mobile.webp"
        },
        {
          step_label: "第二步",
          title: "客户以本币便捷付款",
          description: "客户使用其所在国家的信用卡、本地银行转账或数字钱包轻松完成结算。",
          image_desktop: "/assets/uploads/2026/02/macbook-2.webp",
          image_mobile: "/assets/uploads/2026/02/macbook-2_mobile.webp"
        },
        {
          step_label: "第三步",
          title: "自动结算至您的账户",
          description: "资金自动完成换汇并即时转入您的公司银行账户或指定数字钱包。",
          image_desktop: "/assets/uploads/2026/02/iphone-1.webp",
          image_mobile: "/assets/uploads/2026/02/iphone-1_mobile.webp"
        }
      ],
      notice_desktop: "平均单笔交易处理时间低于 30 秒",
      notice_mobile: "平均单笔交易处理时间低于 30 秒"
    },
    'advantages.json': {
      title_prefix: "选择 High Pay Fin",
      highlight_text: "赋能企业全球业务增长",
      subtitle: "海外客户以当地币种轻松付款，您以理想的资产形式安全收款",
      flags: [
        { name: "South Africa", image: "/assets/img/SouthAfrica.webp" },
        { name: "South Korea", image: "/assets/img/SouthKorea.webp" },
        { name: "Thailand", image: "/assets/img/Thailand.webp" },
        { name: "Vietnam", image: "/assets/img/Vietnam.webp" }
      ],
      industries: [
        {
          title: "跨境电商与出海独立站",
          text: "接入全球主流信用卡与本地支付方式，最大化提升海外结账转化率。",
          icon: "/assets/uploads/2026/05/advantage-3.svg"
        },
        {
          title: "海外地产与开发商",
          text: "支持跨国房产大额购房款、定金支付、分期款项及经纪人佣金结算。",
          icon: "/assets/uploads/2026/05/advantage-2.svg"
        },
        {
          title: "SaaS 软件与数字订阅",
          text: "跨 50+ 币种的周期性订阅收费，内置智能多币种外汇自动结算。",
          icon: "/assets/uploads/2026/05/advantage-5.svg"
        },
        {
          title: "酒店旅游与高端出行",
          text: "支持全球游客使用母国货币预订酒店客房、度假行程与私人包机。",
          icon: "/assets/uploads/2026/05/advantage-6.svg"
        },
        {
          title: "大宗进出口与 B2B 贸易",
          text: "大型机械设备、消费电子与大宗批发合同支付，支持即时清算核验。",
          icon: "/assets/uploads/2026/05/advantage-4.svg"
        },
        {
          title: "国际教育与在线咨询",
          text: "全球留学生学费收取、国际培训课程、IT 咨询与跨国法律服务费。",
          icon: "/assets/uploads/2026/05/advantage-7.svg"
        },
        {
          title: "医疗旅游与跨境大健康",
          text: "跨国就医诊疗、医疗美容与海外高端康养套餐便捷支付。",
          icon: "/assets/uploads/2026/05/advantage-1.svg"
        },
        {
          title: "金融科技与奢华礼宾服务",
          text: "自动化多币种分发、豪车游艇租赁、透明可查的资金流水日志。",
          icon: "/assets/uploads/2026/05/advantage-8.svg"
        }
      ]
    },
    'practicals.json': {
      title: "实用业务优势",
      items: [
        {
          title: "优化现金流",
          icon: "/assets/uploads/2026/02/icon-card-1.svg",
          points: [
            "全球交易成功率高达 98% 以上",
            "零隐藏费用，透明汇率无意外波动",
            "实时可视化财务看板与数据报表"
          ]
        },
        {
          title: "合规与风控",
          icon: "/assets/uploads/2026/02/icon-card-2.svg",
          points: [
            "提供完整合法的交易凭证与对账单",
            "完全符合国际独立审计要求",
            "全面保障商户免受恶意拒付侵害"
          ]
        }
      ]
    },
    'who-its-for.json': {
      tabs: [
        {
          id: "tab-1",
          tab_label: "线上数字企业",
          title: "专为跨境电商与数字服务打造",
          image_desktop: "/assets/img/block-title-image/card-1-big.webp",
          image_mobile: "/assets/img/block-title-image/card-1-small.webp",
          features: [
            { title: "一次集成", text: "通过 REST API 或预置插件即刻上线收单。" },
            { title: "提升转化", text: "让海外买家使用他们最熟悉的本地支付工具。" }
          ]
        },
        {
          id: "tab-2",
          tab_label: "海外房产与大宗贸易",
          title: "专为大额高客单价交易定制",
          image_desktop: "/assets/img/block-title-image/card-2-big.webp",
          image_mobile: "/assets/img/block-title-image/card-2-small.webp",
          features: [
            { title: "大额不限额", text: "支持超大额度跨境资金合规收单与清算。" },
            { title: "当日清算", text: "资金当天清算到账，加速企业资金周转。" }
          ]
        }
      ]
    },
    'connect-steps.json': {
      title: "3 步快捷开通",
      subtitle: "24 小时内开启全球多币种收单",
      steps: [
        { color: "violet", icon: "/assets/uploads/2026/02/icon-1.svg", title: "1. 提交合作申请" },
        { color: "green", icon: "/assets/uploads/2026/02/icon-2.svg", title: "2. 签约与系统对接" },
        { color: "violet", icon: "/assets/uploads/2026/02/icon-3.svg", title: "3. 开启全球收单" }
      ]
    },
    'trust.json': {
      title: "安全与信赖",
      heading: "为企业出海筑牢金融基础设施防线",
      paragraphs: [
        "High Pay Fin 致力于提供最安全、透明且严格合规的国际清结算解决方案。",
        "所有资金流转均采用多重加密与全天候实时风控系统保护。"
      ],
      card1_title: "100% 严格合规",
      card1_text: "规范合同体系与完整完税凭证，助力企业财税合规。",
      card2_title: "银行级安全架构",
      card2_text: "全球最高标准的 PCI-DSS Level 1 认证体系。"
    },
    'faq.json': {
      title: "常见问题解答",
      questions: [
        {
          question: "High Pay Fin 支持哪些币种？",
          answer: "我们支持超过 50 种法定货币（如美元、欧元、英镑、新加坡元、泰铢、越南盾、日元等）以及主流稳定币（如 USDT、USDC）。"
        },
        {
          question: "资金结算到账周期是多久？",
          answer: "根据商户选择的模式，资金支持实时即刻结算（T+0）或在 1 个工作日内结算至商户账户（T+1）。"
        },
        {
          question: "接入费用和月租费是多少？",
          answer: "High Pay Fin 实行 0 元开户与 0 元月租政策，仅在产生成功交易时收取极具竞争力的交易手续费。"
        },
        {
          question: "如何快速开始使用？",
          answer: "您只需在页面底部表单留言或点击'获取咨询'，我们的客户专家将在 24 小时内协助完成账户配置与测试上线。"
        }
      ]
    },
    'contact.json': {
      form_title: "开启全球\n多币种支付",
      form_subtitle: "24 小时内完成开通 —\n全面拓宽跨境业务营收",
      button_text: "提交申请",
      privacy_note: "您的信息受到严格隐私保护。"
    },
    'footer.json': {
      org_name: "High Pay Fin LLC",
      network_label: "全球多币种跨境资金结算网络",
      copyright: "© 2026. 版权所有",
      phone: "+375 (44) 7788879",
      phone_link: "tel:+375447788879",
      email: "info@highpayfin.com",
      telegram_url: "https://t.me/highpayfin",
      nav_links: [
        { title: "产品介绍", url: "/zh/#product" },
        { title: "运作方式", url: "/zh/#whats-work" },
        { title: "核心优势", url: "/zh/#advantages" },
        { title: "适用群体", url: "/zh/#for-whom" },
        { title: "常见问题", url: "/zh/#faq" }
      ],
      doc_links: [
        { title: "个人数据处理政策", url: "/privacy-policy" },
        { title: "支付服务条款", url: "/privacy-policy" },
        { title: "公司法定信息", url: "/privacy-policy" }
      ]
    }
  },

  ko: {
    'site-config.json': {
      site_name: "High Pay Fin",
      meta_title: "High Pay Fin - 글로벌 다중 통화 결제 인프라",
      meta_description: "국제 비즈니스를 위한 글로벌 다중 통화 결제 솔루션. 50개 이상의 법정 통화 및 디지털 자산 지원, 즉시 정산, 최저 수수료, 완전한 규정 준수.",
      phone: "+375 (44) 7788879",
      phone_link: "tel:+375447788879",
      email: "info@highpayfin.com",
      telegram_url: "https://t.me/highpayfin",
      header_cta_text: "상담 신청",
      menu_items: [
        { title: "제품 소개", url: "/ko/#product" },
        { title: "작동 방식", url: "/ko/#whats-work" },
        { title: "핵심 장점", url: "/ko/#advantages" },
        { title: "적용 분야", url: "/ko/#for-whom" },
        { title: "자주 묻는 질문", url: "/ko/#faq" }
      ]
    },
    'home-hero.json': {
      ticker_titles: [
        { title: "전 세계 고객의 다중 통화 결제를 안전하게 수납" },
        { title: "글로벌 비즈니스의 국경 없는 거래 확장" },
        { title: "합법적이고 투명한 글로벌 정산 인프라" }
      ],
      brand_suffix: "High Pay Fin과 함께",
      description: "글로벌 기업이 전 세계 고객의 현지 통화 결제를 수납하고, 원하는 현지 통화나 스테이블코인으로 기업 계좌에 정산받을 수 있도록 지원합니다.",
      cta_text: "High Pay Fin 시작하기",
      info_badge: "무료 연동 • 50+ 통화 지원 • 글로벌 기업 전용"
    },
    'partners.json': {
      national_bank_logo: "/assets/uploads/2026/02/national_bank.svg",
      national_bank_text: "국제 금융 규제 및 글로벌 은행 결제 네트워크 완벽 준수",
      partner_logos: [
        { name: "Partner 1", image: "/assets/uploads/2026/02/partner-1.svg", url: "" },
        { name: "Partner 2", image: "/assets/uploads/2026/02/partner-2.svg", url: "" },
        { name: "Partner 3", image: "/assets/uploads/2026/02/partner-3.svg", url: "" },
        { name: "Partner 4", image: "/assets/uploads/2026/02/partner-4.svg", url: "" },
        { name: "Partner 5", image: "/assets/uploads/2026/02/partner-5.svg", url: "" }
      ]
    },
    'dont-pay.json': {
      title: "왜 글로벌 고객 결제는 실패할까요?",
      description: "기존의 국제 송금은 처리 속도가 느리고 높은 환전 수수료와 잦은 카드 거부 문제가 발생합니다. High Pay Fin의 현지화된 인프라로 결제 장벽을 완전히 해소하세요.",
      cta_text: "글로벌 결제 시작하기",
      cards: [
        {
          type: "red",
          icon: "/assets/uploads/2026/02/cross.svg",
          title: "기존 국제 결제의 한계",
          text: "해외 카드 결제 거부, 비싼 환전 수수료, 수일이 소요되는 복잡한 SWIFT 해외 송금."
        },
        {
          type: "green",
          icon: "/assets/uploads/2026/02/check.svg",
          title: "High Pay Fin 솔루션",
          text: "고객은 익숙한 현지 결제 수단으로 결제하고, 기업은 안전하게 즉시 정산받습니다."
        }
      ]
    },
    'product.json': {
      title: "올인원 결제 인프라",
      client_cards: [
        { title: "신용/체크카드 (Visa, Mastercard, JCB)" },
        { title: "현지 전자지갑 및 간편결제" },
        { title: "실시간 계좌이체 & QR 결제" },
        { title: "주요 디지털 자산 및 스테이블코인 (USDT/USDC)" }
      ],
      provider_title: "High Pay Fin Core",
      provider_tags: "스마트 환율 라우팅 • PCI-DSS 보안 인증 • AI 부정거래 방지",
      business_title: "귀사의 비즈니스",
      settlement_title: "즉시 다중 통화 정산 완료"
    },
    'who-are-we.json': {
      title: "회사 소개",
      subtitle: "High Pay Fin은 대규모 크로스보더 거래 및 다중 통화 정산을 전문으로 하는 핀테크 인프라 기업입니다.",
      cards: [
        {
          title: "50+ 글로벌 통화 지원",
          text: "USD, EUR, GBP, SGD, THB, VND, KRW 등 50개 이상의 법정 통화와 주요 스테이블코인을 지원합니다.",
          icon: "/assets/uploads/2026/02/icon-1.svg"
        },
        {
          title: "T+0 / T+1 빠른 정산",
          text: "기업 계좌 또는 디지털 지갑으로 가장 유리한 실시간 환율을 적용하여 신속하게 정산됩니다.",
          icon: "/assets/uploads/2026/02/icon-2.svg"
        },
        {
          title: "금융권 최고 수준 보안",
          text: "자동화된 AML/KYC 검증 시스템과 투명한 정산 내역 및 합법적인 증빙을 제공합니다.",
          icon: "/assets/uploads/2026/02/icon-3.svg"
        }
      ]
    },
    'how-it-works.json': {
      title: "이용 절차",
      subtitle: "단 3단계만으로 전 세계 고객의 결제를 시작하세요",
      steps: [
        {
          step_label: "1단계",
          title: "결제 링크 생성 또는 API 연동",
          description: "고객에게 청구서/결제 링크를 전달하거나 웹사이트에 API/SDK를 간편하게 연동합니다.",
          image_desktop: "/assets/uploads/2026/02/macbook-1.webp",
          image_mobile: "/assets/uploads/2026/02/macbook-1_mobile.webp"
        },
        {
          step_label: "2단계",
          title: "고객의 자국 통화 결제",
          description: "고객은 거주 국가의 카드, 계좌이체 또는 전자지갑을 사용하여 편리하게 결제합니다.",
          image_desktop: "/assets/uploads/2026/02/macbook-2.webp",
          image_mobile: "/assets/uploads/2026/02/macbook-2_mobile.webp"
        },
        {
          step_label: "3단계",
          title: "기업 계좌로 정산 수령",
          description: "결제된 자금이 자동으로 환전되어 귀사의 기업 계좌나 디지털 지갑으로 안전하게 입금됩니다.",
          image_desktop: "/assets/uploads/2026/02/iphone-1.webp",
          image_mobile: "/assets/uploads/2026/02/iphone-1_mobile.webp"
        }
      ],
      notice_desktop: "평균 결제 처리 시간 30초 이내",
      notice_mobile: "평균 결제 처리 시간 30초 이내"
    },
    'advantages.json': {
      title_prefix: "High Pay Fin과 함께",
      highlight_text: "글로벌 비즈니스 성장을 가속화하세요",
      subtitle: "해외 고객은 자국 통화로 결제하고, 귀사는 원하는 자산 형태로 안전하게 정산받습니다",
      flags: [
        { name: "South Africa", image: "/assets/img/SouthAfrica.webp" },
        { name: "South Korea", image: "/assets/img/SouthKorea.webp" },
        { name: "Thailand", image: "/assets/img/Thailand.webp" },
        { name: "Vietnam", image: "/assets/img/Vietnam.webp" }
      ],
      industries: [
        {
          title: "글로벌 이커머스 & 오픈마켓",
          text: "전 세계 주요 카드와 현지 대체 결제 수단을 연동하여 체크아웃 전환율을 극대화합니다.",
          icon: "/assets/uploads/2026/05/advantage-3.svg"
        },
        {
          title: "해외 부동산 & 개발사",
          text: "해외 부동산 대금 결제, 예약 보증금, 분할 납부 및 에이전트 수수료 정산을 지원합니다.",
          icon: "/assets/uploads/2026/05/advantage-2.svg"
        },
        {
          title: "SaaS & 디지털 구독 서비스",
          text: "50개 이상의 통화로 정기 구독 결제를 자동화하고 지능형 통화 라우팅을 제공합니다.",
          icon: "/assets/uploads/2026/05/advantage-5.svg"
        },
        {
          title: "호텔, 관광 & 프리미엄 여행",
          text: "해외 고객의 자국 통화로 호텔 객실 예약, 투어 패키지 및 전세기 결제를 처리합니다.",
          icon: "/assets/uploads/2026/05/advantage-6.svg"
        },
        {
          title: "B2B 무역 & 수출입 유통",
          text: "고부가가치 산업 장비, 전자기기 및 대량 도매 계약의 실시간 검증 결제를 지원합니다.",
          icon: "/assets/uploads/2026/05/advantage-4.svg"
        },
        {
          title: "국제 교육 & 온라인 컨설팅",
          text: "대학교 학비 수납, 글로벌 교육 강좌, IT 컨설팅 및 법률 자문료 정산을 처리합니다.",
          icon: "/assets/uploads/2026/05/advantage-7.svg"
        },
        {
          title: "의료 관광 & 헬스케어",
          text: "해외 환자 진료비, 정밀 검진, 메디컬 에스테틱 및 웰니스 패키지 결제 솔루션.",
          icon: "/assets/uploads/2026/05/advantage-1.svg"
        },
        {
          title: "핀테크 & 럭셔리 컨시어지",
          text: "다중 통화 자동 지급, 고급 렌탈, 투명한 트랜잭션 로그를 제공합니다.",
          icon: "/assets/uploads/2026/05/advantage-8.svg"
        }
      ]
    },
    'practicals.json': {
      title: "실질적 비즈니스 이점",
      items: [
        {
          title: "현금 흐름 최적화",
          icon: "/assets/uploads/2026/02/icon-card-1.svg",
          points: [
            "98% 이상의 높은 글로벌 결제 승인율",
            "숨겨진 수수료 없는 투명한 실시간 환율",
            "실시간 거래 모니터링 및 대시보드"
          ]
        },
        {
          title: "보안 및 규정 준수",
          icon: "/assets/uploads/2026/02/icon-card-2.svg",
          points: [
            "공식 세무 증빙 및 정산 명세서 완비",
            "글로벌 회계 감사 기준 완벽 부합",
            "부당한 차지백(환불) 위험으로부터 가맹점 보호"
          ]
        }
      ]
    },
    'who-its-for.json': {
      tabs: [
        {
          id: "tab-1",
          tab_label: "온라인 디지털 기업",
          title: "이커머스 & 디지털 서비스를 위한 최적의 솔루션",
          image_desktop: "/assets/img/block-title-image/card-1-big.webp",
          image_mobile: "/assets/img/block-title-image/card-1-small.webp",
          features: [
            { title: "간편한 1회 연동", text: "REST API 또는 플러그인으로 즉시 오픈." },
            { title: "매출 증대", text: "고객에게 가장 편한 현지 결제 수단을 제공합니다." }
          ]
        },
        {
          id: "tab-2",
          tab_label: "부동산 & B2B 무역",
          title: "고액 거래를 위한 맞춤형 인프라",
          image_desktop: "/assets/img/block-title-image/card-2-big.webp",
          image_mobile: "/assets/img/block-title-image/card-2-small.webp",
          features: [
            { title: "한도 없는 결제", text: "고액 크로스보더 결제를 규정 준수 하에 지원합니다." },
            { title: "당일 정산", text: "당일 기업 계좌로 직접 정산되어 자금 회전을 가속화합니다." }
          ]
        }
      ]
    },
    'connect-steps.json': {
      title: "빠른 3단계 연동",
      subtitle: "24시간 이내에 글로벌 다중 통화 결제를 시작하세요",
      steps: [
        { color: "violet", icon: "/assets/uploads/2026/02/icon-1.svg", title: "1. 상담 신청서 접수" },
        { color: "green", icon: "/assets/uploads/2026/02/icon-2.svg", title: "2. 계약 및 시스템 연동" },
        { color: "violet", icon: "/assets/uploads/2026/02/icon-3.svg", title: "3. 글로벌 결제 시작" }
      ]
    },
    'trust.json': {
      title: "안전과 신뢰",
      heading: "글로벌 비즈니스를 위한 든든한 금융 인프라",
      paragraphs: [
        "High Pay Fin은 가장 안전하고 투명하며 국제 금융 규정을 철저히 준수하는 결제 솔루션을 제공합니다.",
        "모든 거래는 다중 암호화 기술과 24시간 실시간 모니터링 시스템으로 완벽히 보호됩니다."
      ],
      card1_title: "100% 규정 준수",
      card1_text: "명확한 계약과 세무 증빙으로 기업의 법적 리스크를 완벽 예방합니다.",
      card2_title: "은행권 최고 보안",
      card2_text: "글로벌 표준 PCI-DSS Level 1 인증 인프라."
    },
    'faq.json': {
      title: "자주 묻는 질문",
      questions: [
        {
          question: "High Pay Fin은 어떤 통화를 지원하나요?",
          answer: "USD, EUR, GBP, SGD, THB, VND, JPY 등 50개 이상의 법정 통화와 USDT, USDC 등 주요 스테이블코인을 지원합니다."
        },
        {
          question: "정산 주기는 어떻게 되나요?",
          answer: "선택하신 정산 방식에 따라 즉시 정산(T+0) 또는 영업일 기준 1일 이내(T+1)에 기업 계좌로 정산됩니다."
        },
        {
          question: "연동 비용 및 월 유지비는 얼마인가요?",
          answer: "High Pay Fin은 초기 설정비와 월 기본료가 0원(무료)입니다. 성공한 거래 건에 대해서만 경쟁력 있는 수수료가 적용됩니다."
        },
        {
          question: "어떻게 신청할 수 있나요?",
          answer: "하단 신청 폼을 작성하시거나 '상담 신청' 버튼을 클릭하시면 24시간 이내에 전담 매니저가 계정 개설을 도와드립니다."
        }
      ]
    },
    'contact.json': {
      form_title: "글로벌 다중 통화\n결제 수납 시작하기",
      form_subtitle: "24시간 이내 승인 —\n국경 없는 비즈니스 매출을 확장하세요",
      button_text: "신청서 제출하기",
      privacy_note: "귀하의 정보는 개인정보처리방침에 따라 철저히 보호됩니다."
    },
    'footer.json': {
      org_name: "High Pay Fin LLC",
      network_label: "글로벌 크로스보더 정산 네트워크",
      copyright: "© 2026. All rights reserved",
      phone: "+375 (44) 7788879",
      phone_link: "tel:+375447788879",
      email: "info@highpayfin.com",
      telegram_url: "https://t.me/highpayfin",
      nav_links: [
        { title: "제품 소개", url: "/ko/#product" },
        { title: "작동 방식", url: "/ko/#whats-work" },
        { title: "핵심 장점", url: "/ko/#advantages" },
        { title: "적용 분야", url: "/ko/#for-whom" },
        { title: "자주 묻는 질문", url: "/ko/#faq" }
      ],
      doc_links: [
        { title: "개인정보 처리방침", url: "/privacy-policy" },
        { title: "결제 서비스 이용약관", url: "/privacy-policy" },
        { title: "기업 법인 정보", url: "/privacy-policy" }
      ]
    }
  }
};

for (const lang of languages) {
  const dir = path.join('src/data', lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const files = translations[lang];
  for (const [filename, data] of Object.entries(files)) {
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Wrote ${filePath}`);
  }
}

console.log('Generated all translations successfully!');
