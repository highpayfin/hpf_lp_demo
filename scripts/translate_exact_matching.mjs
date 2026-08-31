import fs from 'fs';
import path from 'path';

// 1. VIETNAMESE (vi) 100% 1:1 match with en
const viData = {
  'site-config.json': {
    menu_items: [
      { title: "Sản phẩm", url: "/vi/#product" },
      { title: "Cách hoạt động", url: "/vi/#whats-work" },
      { title: "Ưu điểm", url: "/vi/#advantages" },
      { title: "Khách hàng", url: "/vi/#for-whom" },
      { title: "FAQ", url: "/vi/#faq" }
    ],
    meta_description: "Giải pháp thanh toán đa tiền tệ toàn cầu cho doanh nghiệp quốc tế. Chấp nhận hơn 50 loại tiền tệ và tài sản số, quyết toán tức thì, phí thấp và tuân thủ pháp lý.",
    site_name: "High Pay Fin",
    phone_link: " ",
    phone: " ",
    header_cta_text: "Nhận Tư Vấn",
    telegram_url: "https://t.me/highpayfin",
    email: "info@highpayfin.com",
    meta_title: "High Pay Fin - Hạ Tầng Thanh Toán Đa Tiền Tệ Toàn Cầu"
  },
  'home-hero.json': {
    ticker_titles: [
      { title: "Chấp nhận đa tiền tệ từ khách hàng toàn cầu" },
      { title: "Mở rộng giao thương quốc tế\nkhông giới hạn tiền tệ" },
      { title: "Thanh toán quốc tế\nhợp pháp và minh bạch" }
    ],
    brand_suffix: "cùng HighPayFin",
    description: "Chúng tôi giúp các doanh nghiệp quốc tế chấp nhận thanh toán đa tiền tệ từ khách hàng toàn cầu và nhận quyết toán bằng đồng nội tệ hoặc stablecoin mong muốn – hoàn toàn hợp pháp và minh bạch.",
    cta_text: "Kết nối HighPayFin",
    info_badge: "Miễn phí tích hợp • Đa tiền tệ • Cho doanh nghiệp toàn cầu"
  },
  'partners.json': {
    national_bank_logo: "/assets/uploads/2026/02/bank-rb-full.png",
    national_bank_text: "Tổ chức thanh toán đa tiền tệ được cấp phép và quản lý, kết nối trực tiếp với mạng lưới ngân hàng Tier-1 tại Châu Á & Toàn cầu.",
    partner_logos: [
      { name: "Vietcombank", image: "/assets/uploads/2026/02/bank-rb_second.svg", url: "#" },
      { name: "NAPAS", image: "/assets/uploads/2026/02/nspk.svg", url: "#" },
      { name: "Shinhan Bank", image: "/assets/uploads/2026/02/statusbank.svg", url: "#" },
      { name: "VietQR", image: "/assets/uploads/2026/02/mir.svg", url: "#" },
      { name: "KB Kookmin Bank", image: "/assets/uploads/2026/02/severgazbank.svg", url: "#" },
      { name: "Techcombank", image: "/assets/uploads/2026/02/messenger-pigeon.svg", url: "#" },
      { name: "Hana Bank", image: "/assets/uploads/2026/02/sbp.svg", url: "#" }
    ]
  },
  'dont-pay.json': {
    title: "Bạn đang gặp khó khăn với thanh toán quốc tế?",
    description: "Khách hàng toàn cầu luôn có nhu cầu mua sắm và giao thương quốc tế, nhưng đa số doanh nghiệp thiếu cổng thanh toán đa tiền tệ tự động, chi phí thấp và tuân thủ pháp lý.",
    cta_text: "Gửi yêu cầu",
    cards: [
      {
        type: "red",
        icon: "/assets/uploads/2026/05/dont-pay-red.svg",
        title: "Phí chuyển đổi ngoại tệ cao & thất thoát doanh thu",
        text: "Các loại phí chuyển tiền xuyên biên giới và chênh lệch tỷ giá ngân hàng có thể làm hao hụt từ 5-8% giá trị đơn hàng trước khi tiền về đến tài khoản doanh nghiệp."
      },
      {
        type: "red",
        icon: "/assets/uploads/2026/05/dont-pay-red.svg",
        title: "Chuyển tiền SWIFT chậm trễ & rủi ro bồi hoàn",
        text: "Các giao dịch chuyển tiền truyền thống qua nhiều ngân hàng trung gian thường mất nhiều ngày, dễ bị giữ tiền không rõ nguyên nhân và tăng tỷ lệ khách bỏ đơn."
      },
      {
        type: "green",
        icon: "/assets/uploads/2026/05/dont-pay-green.svg",
        title: "High Pay Fin —\ngiải pháp hợp nhất toàn cầu",
        text: "Chấp nhận hơn 50 loại tiền tệ pháp định và tài sản số với cơ chế tự động quy đổi tức thì và quyết toán nhanh chóng về đồng tiền bạn chọn."
      }
    ]
  },
  'product.json': {
    title: "Hạ tầng thanh toán đa tiền tệ hợp nhất cho doanh nghiệp toàn cầu",
    client_cards: [
      { title: "Khách hàng Toàn cầu", subtitle: "" },
      { title: "Đa Tiền tệ (VND/KRW/USD/...)", subtitle: "" },
      { title: "Thẻ & Chuyển khoản Ngân hàng", subtitle: "" },
      { title: "QR Tức thì & Cổng Nội địa", subtitle: "" }
    ],
    provider_title: "HighPayFin - Cổng Thanh Toán",
    provider_tags: "Thu Hộ Toàn Cầu • Ngoại Hối Đa Tiền Tệ • Tuân Thủ & AML • Quyết Toán Tức Thì",
    business_title: "Doanh nghiệp Quốc tế",
    settlement_title: "Quyết toán Thành công"
  },
  'who-are-we.json': {
    title: "Chúng tôi là ai",
    subtitle: "HighPayFin là cổng thanh toán toàn cầu được cấp phép chuyên xử lý các giao dịch xuyên biên giới đa tiền tệ cho các doanh nghiệp quốc tế.\n\nChúng tôi xây dựng hạ tầng tài chính giúp các doanh nghiệp và sàn thương mại điện tử khắp thế giới chấp nhận thanh toán an toàn, minh bạch và hợp pháp trên hơn 50 loại tiền tệ pháp định và tài sản số.",
    cards: [
      {
        title: "Đơn vị Vận hành\nThanh toán Được Cấp phép",
        text: "Chúng tôi hoạt động chặt chẽ trong khuôn khổ pháp lý quốc tế, sở hữu giấy phép thanh toán và duy trì tuân thủ nghiêm ngặt các tiêu chuẩn ngân hàng toàn cầu.",
        icon: "/assets/uploads/2026/05/who-are-we-1_white.svg"
      },
      {
        title: "Cổng Kết nối\nĐa Mạng lưới Trực tiếp",
        text: "Kết nối trực tiếp tới các hệ thống thanh toán nội địa, mạng lưới thẻ tức thì, mã QR và kênh ngân hàng quốc tế – loại bỏ các bên trung gian không cần thiết.",
        icon: "/assets/uploads/2026/05/who-are-we-2_white.svg"
      },
      {
        title: "Thanh khoản Ngoại hối\nCấp Định chế",
        text: "Chúng tôi chuyên sâu về thanh khoản xuyên biên giới và quản trị dòng tiền tự động, mang lại tỷ giá cạnh tranh nhất và cam kết khóa tỷ giá cố định.",
        icon: "/assets/uploads/2026/05/who-are-we-3_white.svg"
      }
    ]
  },
  'how-it-works.json': {
    title: "Cách thức hoạt động",
    subtitle: "Từ tạo hóa đơn đa tiền tệ đến quyết toán nội địa – chỉ trong vài phút",
    steps: [
      {
        step_label: "Bước 1",
        image_desktop: "/assets/uploads/2026/07/step-1_white.png",
        image_mobile: "/assets/uploads/2026/07/step-1_white_mobile.png",
        title: "Doanh nghiệp tạo hóa đơn đa tiền tệ",
        description: "Trên bảng điều khiển, bạn nhập số tiền mong muốn nhận – bằng VND, KRW, THB, AED hoặc các loại tiền tệ khác. Hệ thống sẽ tự động tạo ngay link thanh toán động và mã QR."
      },
      {
        step_label: "Bước 2",
        image_desktop: "/assets/uploads/2026/07/step-2_white.png",
        image_mobile: "/assets/uploads/2026/07/step-2_white_mobile.png",
        title: "Khách hàng thanh toán bằng nội tệ",
        description: "Khách hàng thanh toán dễ dàng bằng đồng tiền bản địa của họ qua ứng dụng ngân hàng, thẻ, mã QR hoặc chuyển khoản nội địa mà không gặp bất kỳ rào cản nào."
      },
      {
        step_label: "Bước 3",
        image_desktop: "/assets/uploads/2026/07/step-3_white.png",
        image_mobile: "/assets/uploads/2026/07/step-3_white_mobile.png",
        title: "Bạn nhận quyết toán tức thì",
        description: "Tiền được ghi có vào tài khoản của bạn ngay sau khi thanh toán thành công và quyết toán sang loại tiền bạn mong muốn (VND, KRW, USDT...) theo quy tắc quản trị của bạn."
      }
    ],
    notice_desktop: "Tỷ giá được khóa cố định trong 30 phút: khách hàng thanh toán chính xác số tiền hiển thị trên màn hình với rủi ro biến động tỷ giá bằng 0",
    notice_mobile: "Tỷ giá được khóa cố định trong 30 phút. Giúp bảo vệ giao dịch của bạn khỏi biến động thị trường"
  },
  'advantages.json': {
    title_prefix: "Nơi HighPayFin",
    title_middle: "trở thành",
    title_suffix: "đòn bẩy",
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
        text: "Chấp nhận thẻ, ví nội địa và phương thức thanh toán thay thế toàn cầu với tỷ lệ chuyển đổi đơn hàng tối đa.",
        icon: "/assets/uploads/2026/05/advantage-3.svg"
      },
      {
        title: "Bất động sản & Chủ đầu tư",
        text: "Thanh toán mua bất động sản xuyên biên giới, đặt cọc giữ chỗ, thanh toán theo tiến độ và chi trả hoa hồng đại lý.",
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
    title: "Vì sao lựa chọn HighPayFin lại vô cùng tiện lợi",
    items: [
      {
        title: "Hoàn toàn Kỹ thuật số, 0 Cần Phần cứng",
        icon: "/assets/uploads/2026/05/practical-1.svg",
        points: [
          "Link thanh toán và mã QR được tạo ngay lập tức trên trang quản trị",
          "Không cần thiết bị POS vật lý hay cài đặt phức tạp tại địa điểm",
          "Hoạt động mượt mà trên hơn 150 quốc gia qua bất kỳ thiết bị web hay di động nào"
        ]
      },
      {
        title: "Tỷ giá Minh bạch & Được Khóa Cố định",
        icon: "/assets/uploads/2026/05/practical-2.svg",
        points: [
          "Toàn bộ chi phí ngoại hối được thể hiện minh bạch trong tỷ giá thanh toán",
          "Khách hàng thấy chính xác số tiền cần thanh toán bằng nội tệ trước khi trả",
          "Doanh nghiệp của bạn nhận đủ 100% số tiền quyết toán mà không bị trừ phí ẩn"
        ]
      },
      {
        title: "Bảng điều khiển Đa Tiền tệ",
        icon: "/assets/uploads/2026/05/practical-3.svg",
        points: [
          "Theo dõi số dư hợp nhất, lịch sử giao dịch và phân tích trực tiếp theo thời gian thực",
          "Xuất báo cáo tài chính tức thì sang định dạng XLS, CSV và phần mềm kế toán",
          "Phân quyền người dùng chi tiết cho chủ doanh nghiệp và kế toán trưởng"
        ]
      },
      {
        title: "Quyết toán Nhanh Trong Ngày",
        icon: "/assets/uploads/2026/05/practical-4.svg",
        points: [
          "Tiền được ghi có vào tài khoản doanh nghiệp chỉ vài phút sau khi khách thanh toán",
          "Thanh toán trực tiếp qua ngân hàng nội địa, không bị giữ tiền nhiều ngày như SWIFT"
        ]
      },
      {
        title: "Lựa chọn Chi trả Linh hoạt",
        icon: "/assets/uploads/2026/05/practical-5.svg",
        points: [
          "Tùy chọn nhận tiền bằng USD, EUR, GBP, SGD, AED, VND, THB hoặc USDT",
          "Thu doanh thu bằng nhiều loại tiền tệ và quyết toán về tài sản mong muốn"
        ]
      },
      {
        title: "Chính sách Ưu đãi Cho Doanh nghiệp Lớn",
        icon: "/assets/uploads/2026/05/practical-6.svg",
        points: [
          "Mức phí xử lý ưu đãi theo doanh số lớn và kênh quản lý thanh khoản chuyên biệt"
        ]
      }
    ]
  },
  'who-its-for.json': {
    tabs: [
      {
        id: "owners",
        tab_label: "Dành cho chủ doanh nghiệp",
        title: "Kiểm soát toàn diện hoạt động kinh doanh quốc tế",
        image_desktop: "/assets/uploads/2026/02/macbook-1.webp",
        image_mobile: "/assets/uploads/2026/02/macbook-1_mobile.webp",
        features: [
          {
            title: "Sổ cái đa tiền tệ hợp nhất",
            text: "Tất cả các giao dịch, link thanh toán và khoản phải thu toàn cầu hiển thị trên một màn hình duy nhất"
          },
          {
            title: "Phân tích doanh thu & ngoại hối toàn cầu",
            text: "Bộ lọc thời gian thực theo quốc gia, cặp tiền tệ, phương thức thanh toán và chuyên viên phụ trách"
          },
          {
            title: "Quản lý quyết toán tự động",
            text: "Cài đặt chuyển tiền tự động linh hoạt về tài khoản ngân hàng doanh nghiệp hoặc ví đa tiền tệ"
          },
          {
            title: "Xuất báo cáo chuẩn kiểm toán",
            text: "Xuất bảng kê XLS và CSV tức thì phục vụ báo cáo tài chính, kế toán và kiểm toán quốc tế"
          },
          {
            title: "Phân quyền chi tiết cho nhân viên",
            text: "Ủy quyền an toàn cho đội ngũ kinh doanh tạo hóa đơn trong khi vẫn bảo vệ quyền quản trị dòng tiền"
          },
          {
            title: "Xác minh người thanh toán đầy đủ",
            text: "Lưu trữ đầy đủ thông tin danh tính và dữ liệu tuân thủ cho từng giao dịch hoàn tất"
          }
        ]
      },
      {
        id: "managers",
        tab_label: "Dành cho nhân viên kinh doanh",
        title: "Hóa đơn chốt đơn nhanh hơn",
        image_desktop: "/assets/uploads/2026/02/macbook-2.webp",
        image_mobile: "/assets/uploads/2026/02/macbook-2_mobile.webp",
        features: [
          {
            title: "Tạo link thanh toán & mã QR trong 10 giây",
            text: "Tạo hóa đơn bằng nội tệ của khách hàng chỉ trong chớp mắt – không cần thiết bị phần cứng"
          },
          {
            title: "Theo dõi trạng thái đơn hàng thời gian thực",
            text: "Trạng thái giao dịch trực tiếp: chờ xử lý / đã thanh toán / hết hạn – không bao giờ bỏ lỡ khách hàng"
          },
          {
            title: "Thông báo quyết toán ngay lập tức",
            text: "Nhân viên bán hàng nhận thông báo tức thì ngay khi khách hoàn tất quá trình thanh toán"
          },
          {
            title: "Phù hợp cho lượng khách giao dịch lớn",
            text: "Lý tưởng cho bán lẻ, khách sạn du lịch, tư vấn, đại lý, thuê xe sang và dịch vụ cao cấp"
          }
        ]
      },
      {
        id: "clients",
        tab_label: "Dành cho khách hàng",
        title: "Trải nghiệm thanh toán nội địa dễ dàng",
        image_desktop: "/assets/uploads/2026/02/iphone-1.webp",
        image_mobile: "/assets/uploads/2026/02/iphone-1_mobile.webp",
        features: [
          {
            title: "Thanh toán bằng đồng tiền quen thuộc",
            text: "Khách hàng thanh toán bằng nội tệ thông qua ứng dụng ngân hàng hàng ngày hoặc thẻ ghi nợ/tín dụng."
          },
          {
            title: "Không phụ phí hay chi phí ẩn",
            text: "Minh bạch tuyệt đối với tỷ giá cố định – không bị trừ thêm các khoản phí bất ngờ trên sao kê."
          },
          {
            title: "Hoàn tất thanh toán chỉ trong vài giây",
            text: "Quét mã QR hoặc click link → xác thực sinh trắc học/ngân hàng → hoàn tất."
          },
          {
            title: "Biên lai điện tử tức thì",
            text: "Màn hình thông báo 'Đã thanh toán thành công' và hóa đơn điện tử xuất hiện ngay lập tức."
          }
        ]
      }
    ]
  },
  'connect-steps.json': {
    title: "Kết nối — chỉ với 3 bước đơn giản",
    subtitle: "Kích hoạt trực tuyến cho các doanh nghiệp quốc tế toàn cầu",
    steps: [
      {
        color: "violet",
        icon: "/assets/uploads/2026/05/connect-1.svg",
        title: "Gửi thông tin doanh nghiệp & Ký hợp đồng"
      },
      {
        color: "green",
        icon: "/assets/uploads/2026/05/connect-2.svg",
        title: "Nhận quyền truy cập Bảng điều khiển Đa tiền tệ"
      },
      {
        color: "violet",
        icon: "/assets/uploads/2026/05/connect-3.svg",
        title: "Bắt đầu nhận thanh toán từ khách hàng toàn cầu"
      }
    ]
  },
  'trust.json': {
    title: "Vì sao đối tác tin tưởng chúng tôi",
    heading: "HighPayFin được phát triển bởi đội ngũ với hơn 15 năm kinh nghiệm trong lĩnh vực thanh toán quốc tế",
    paragraphs: [
      "Đằng sau HighPayFin là đội ngũ công nghệ tài chính quốc tế với hạ tầng thanh toán độc quyền",
      "mạng lưới đối tác ngân hàng toàn cầu",
      "và hơn 15 năm kinh nghiệm chuyên sâu trong lĩnh vực thanh toán xuyên biên giới.",
      "Chúng tôi vận hành nghiêm ngặt trong khuôn khổ pháp lý quốc tế",
      "xây dựng hệ thống thanh toán minh bạch tuyệt đối",
      "và thấu hiểu mọi yêu cầu từ các ngân hàng trung ương",
      "cơ quan quản lý tài chính",
      "cũng như các doanh nghiệp tăng trưởng nhanh tại nhiều quốc gia.",
      "Quan trọng nhất — chúng tôi nói cùng ngôn ngữ với doanh nghiệp hiện đại.",
      "Chúng tôi luôn coi trọng các giải pháp thanh toán mượt mà",
      "thời gian hoạt động hệ thống tối đa",
      "và nguồn thanh khoản tin cậy — chính xác như bạn mong đợi."
    ],
    card1_title: "Tuân thủ & An toàn",
    card1_text: "✓ Được Cấp phép & Quản lý Toàn diện",
    card2_title: "Dòng tiền Thanh toán",
    card2_text: "Khách hàng ⭢ Ngân hàng Tier-1 ⭢ Doanh nghiệp"
  },
  'faq.json': {
    title: "Câu hỏi thường gặp",
    questions: [
      {
        question: "Thời gian thiết lập tài khoản doanh nghiệp mất bao lâu?",
        answer: "Thông thường quá trình thiết lập và xác minh KYC mất không quá 24 giờ sau khi cung cấp đầy đủ giấy tờ doanh nghiệp.\nChúng tôi tối ưu quy trình nhanh chóng và minh bạch — ký hợp đồng trực tuyến, thiết lập quy tắc quyết toán và bắt đầu nhận thanh toán quốc tế ngay ngày hôm sau."
      },
      {
        question: "Khách hàng quốc tế thực hiện thanh toán như thế nào?",
        answer: "Khách hàng thanh toán bằng đồng tiền bản địa của họ qua các phương thức quen thuộc bao gồm chuyển khoản ngân hàng nội địa, quét mã QR tức thì, thẻ ghi nợ/tín dụng hoặc ví điện tử. Không cần cài đặt ứng dụng mới hay thực hiện đăng ký phức tạp."
      },
      {
        question: "Tôi có thể nhận quyết toán bằng những loại tiền tệ nào?",
        answer: "Bạn có thể nhận tiền bằng KRW, AED, VND, THB hoặc USDT — tùy chỉnh linh hoạt trực tiếp theo tài khoản doanh nghiệp của bạn. Khách hàng của bạn có thể thanh toán bằng nhiều loại tiền tệ địa phương trên khắp thế giới."
      },
      {
        question: "Có bất kỳ khoản phí ẩn hay phụ phí giao dịch quốc tế nào không?",
        answer: "Không. Toàn bộ chi phí chuyển đổi ngoại hối được thể hiện minh bạch trong tỷ giá thanh toán. Khách hàng thấy chính xác số tiền cuối cùng trước khi trả, và doanh nghiệp của bạn nhận đủ 100% số tiền hóa đơn mà không bị trừ các khoản phí bất ngờ."
      },
      {
        question: "Chi phí tích hợp và cài đặt ban đầu là bao nhiêu?",
        answer: "Quá trình tích hợp hoàn toàn miễn phí — 0 phí cài đặt, 0 phí duy trì hàng tháng và không yêu cầu cam kết doanh số tối thiểu. Bạn chỉ trả mức phí cạnh tranh dựa trên khối lượng giao dịch thực tế."
      },
      {
        question: "Hạ tầng thanh toán có an toàn và tuân thủ pháp lý không?",
        answer: "Có. Mọi giao dịch đều được định tuyến qua các tổ chức tài chính được cấp phép với mã hóa đầu cuối, chứng chỉ bảo mật PCI-DSS Level 1 cao nhất và hệ thống chống gian lận/AML tự động.\n\nHigh Pay Fin hoạt động nghiêm ngặt trong các khuôn khổ tài chính được cấp phép và tuân thủ các quy định quốc tế."
      },
      {
        question: "Cần những giấy tờ gì để bắt đầu kích hoạt tài khoản?",
        answer: "Bạn cần cung cấp giấy phép đăng ký kinh doanh, giấy tờ tùy thân của người đại diện pháp luật, chứng từ xác minh địa chỉ trụ sở và thông tin tài khoản ngân hàng để nhận quyết toán. Chuyên viên của chúng tôi sẽ hướng dẫn bạn qua cổng xác thực kỹ thuật số."
      },
      {
        question: "Tôi có thể theo dõi giao dịch thời gian thực và xuất báo cáo tài chính không?",
        answer: "Có. Bảng điều khiển doanh nghiệp cung cấp dữ liệu giao dịch trực tiếp theo thời gian thực, bộ lọc trạng thái, số dư đa tiền tệ và tính năng xuất dữ liệu sang CSV hoặc Excel chỉ bằng một cú nhấp chuột cho bộ phận kế toán và thuế."
      },
      {
        question: "High Pay Fin phù hợp với những ngành nghề kinh doanh nào?",
        answer: "Giải pháp của chúng tôi được thiết kế tối ưu cho mọi doanh nghiệp có khách hàng quốc tế: thương mại điện tử, phần mềm SaaS, du lịch khách sạn, bất động sản, bán buôn xuất nhập khẩu B2B, dịch vụ cao cấp và các đại lý kỹ thuật số."
      },
      {
        question: "Tỷ giá ngoại hối (FX) được xác định như thế nào?",
        answer: "Chúng tôi áp dụng tỷ giá liên ngân hàng theo thời gian thực từ các nhà cung cấp thanh khoản toàn cầu. Tỷ giá được khóa cố định trong suốt phiên thanh toán, giúp bảo vệ bạn và khách hàng khỏi biến động thị trường."
      }
    ]
  },
  'contact.json': {
    form_title: "Bắt đầu chấp nhận\nthanh toán toàn cầu",
    form_subtitle: "Kích hoạt trong 24 giờ —\nmở rộng doanh thu xuyên biên giới",
    button_text: "Gửi yêu cầu",
    privacy_note: "Bằng việc gửi biểu mẫu này, bạn đồng ý với Chính sách bảo mật của chúng tôi."
  },
  'footer.json': {
    network_label: "MẠNG LƯỚI QUYẾT TOÁN XUYÊN BIÊN GIỚI TOÀN CẦU",
    org_name: "High Pay Fin LLC",
    copyright: "© 2026. Bảo lưu mọi quyền",
    phone_link: "tel:+375447788879",
    phone: "+375 (44) 7788879",
    telegram_url: "https://t.me/highpayfin",
    doc_links: [],
    email: "info@highpayfin.com",
    nav_links: [
      { title: "Sản phẩm", url: "/vi/#product" },
      { title: "Cách hoạt động", url: "/vi/#whats-work" },
      { title: "Ưu điểm", url: "/vi/#advantages" },
      { title: "Khách hàng", url: "/vi/#for-whom" },
      { title: "FAQ", url: "/vi/#faq" }
    ]
  }
};

// 2. CHINESE (zh) 100% 1:1 match with en
const zhData = {
  'site-config.json': {
    menu_items: [
      { title: "产品介绍", url: "/zh/#product" },
      { title: "运作方式", url: "/zh/#whats-work" },
      { title: "核心优势", url: "/zh/#advantages" },
      { title: "适用群体", url: "/zh/#for-whom" },
      { title: "常见问题", url: "/zh/#faq" }
    ],
    meta_description: "为跨国出海企业打造的全球多币种支付解决方案。支持50+种法定货币与数字资产，即时结算，超低费率，完全合规。",
    site_name: "High Pay Fin",
    phone_link: " ",
    phone: " ",
    header_cta_text: "获取咨询",
    telegram_url: "https://t.me/highpayfin",
    email: "info@highpayfin.com",
    meta_title: "High Pay Fin - 全球多币种跨境支付基础设施"
  },
  'home-hero.json': {
    ticker_titles: [
      { title: "轻松接收全球客户的多币种付款" },
      { title: "无缝拓展全球跨境贸易与数字业务" },
      { title: "合规、透明、高效的跨境资金结算" }
    ],
    brand_suffix: "携手 HighPayFin",
    description: "我们协助跨国企业接收来自全球客户的本地货币付款，并以您指定的本地法定货币或稳定币结算至企业账户——完全合法合规、透明无忧。",
    cta_text: "接入 HighPayFin",
    info_badge: "免费接入 • 支持多币种 • 专为全球业务设计"
  },
  'partners.json': {
    national_bank_logo: "/assets/uploads/2026/02/bank-rb-full.png",
    national_bank_text: "受合规监管的多币种支付机构，直连亚洲及全球一级（Tier-1）银行清算网络。",
    partner_logos: [
      { name: "Vietcombank", image: "/assets/uploads/2026/02/bank-rb_second.svg", url: "#" },
      { name: "NAPAS", image: "/assets/uploads/2026/02/nspk.svg", url: "#" },
      { name: "Shinhan Bank", image: "/assets/uploads/2026/02/statusbank.svg", url: "#" },
      { name: "VietQR", image: "/assets/uploads/2026/02/mir.svg", url: "#" },
      { name: "KB Kookmin Bank", image: "/assets/uploads/2026/02/severgazbank.svg", url: "#" },
      { name: "Techcombank", image: "/assets/uploads/2026/02/messenger-pigeon.svg", url: "#" },
      { name: "Hana Bank", image: "/assets/uploads/2026/02/sbp.svg", url: "#" }
    ]
  },
  'dont-pay.json': {
    title: "跨国跨境收付款是否让您倍感困扰？",
    description: "海外客户有着强烈的消费和采购需求，但多数出海企业因缺乏合规、自动化且低成本的多币种本地化结账方案而错失商机。",
    cta_text: "提交申请",
    cards: [
      {
        type: "red",
        icon: "/assets/uploads/2026/05/dont-pay-red.svg",
        title: "外汇磨损高昂 & 利润严重侵蚀",
        text: "传统跨境银行电汇手续费和高额换汇点差，在资金到账前就吞噬了高达 5-8% 的交易货款。"
      },
      {
        type: "red",
        icon: "/assets/uploads/2026/05/dont-pay-red.svg",
        title: "SWIFT 流程繁琐 & 掉单拒付频发",
        text: "传统中间行清算耗时长达数天，极易引发资金不明冻结与客户弃单，阻碍业务规模扩张。"
      },
      {
        type: "green",
        icon: "/assets/uploads/2026/05/dont-pay-green.svg",
        title: "High Pay Fin —\n一站式全球合规解决方案",
        text: "支持 50+ 全球主流法币与加密资产收单，内置智能汇率换算与本币即时清算。"
      }
    ]
  },
  'product.json': {
    title: "面向全球企业的统一多币种跨境支付基础设施",
    client_cards: [
      { title: "全球客户", subtitle: "" },
      { title: "多币种收单 (VND/KRW/USD/...)", subtitle: "" },
      { title: "信用卡与本地银行转账", subtitle: "" },
      { title: "动态扫码与本地支付", subtitle: "" }
    ],
    provider_title: "HighPayFin - 支付通道核心",
    provider_tags: "全球收单 • 多币种外汇清算 • 严格合规与反洗钱 • 即时结算",
    business_title: "您的跨国企业",
    settlement_title: "资金成功结算"
  },
  'who-are-we.json': {
    title: "关于我们",
    subtitle: "HighPayFin 是一家持牌的全球支付机构，专注于为跨国商户提供多币种跨境收付清算服务。\n\n我们打造稳健的金融科技基础设施，赋能全球出海企业与平台合法、安全、高效地接收超过 50 种法定货币及主流数字资产。",
    cards: [
      {
        title: "持牌合规\n支付运营商",
        text: "在严格的国际金融监管框架下规范运营，持有相关支付业务资质，严格对接全球一级银行合规标准。",
        icon: "/assets/uploads/2026/05/who-are-we-1_white.svg"
      },
      {
        title: "直连多通道\n清算网络",
        text: "直连各国本地清算网络、即时银行卡通道、本地扫码网络及全球银行渠道，全面剔除多余中间行抽成。",
        icon: "/assets/uploads/2026/05/who-are-we-2_white.svg"
      },
      {
        title: "机构级外汇\n清算深度",
        text: "专注于机构级跨境流动性调度与自动化外汇财资管理，提供极具竞争力的实时汇率与锁定汇率保障。",
        icon: "/assets/uploads/2026/05/who-are-we-3_white.svg"
      }
    ]
  },
  'how-it-works.json': {
    title: "运作流程",
    subtitle: "从多币种账单生成到本币即时结算——只需短短数分钟",
    steps: [
      {
        step_label: "第一步",
        image_desktop: "/assets/uploads/2026/07/step-1_white.png",
        image_mobile: "/assets/uploads/2026/07/step-1_white_mobile.png",
        title: "商户创建多币种账单",
        description: "在商户管理后台输入您期望收到的金额（VND、KRW、THB、AED 等任意币种），系统秒级自动生成专属动态支付链接与二维码。"
      },
      {
        step_label: "第二步",
        image_desktop: "/assets/uploads/2026/07/step-2_white.png",
        image_mobile: "/assets/uploads/2026/07/step-2_white_mobile.png",
        title: "客户使用本币便捷付款",
        description: "海外客户通过其熟悉的本地手机银行 App、信用卡、本地二维码或网银快速付款，结账体验毫无阻碍。"
      },
      {
        step_label: "第三步",
        image_desktop: "/assets/uploads/2026/07/step-3_white.png",
        image_mobile: "/assets/uploads/2026/07/step-3_white_mobile.png",
        title: "商户即时获取资金结算",
        description: "客户完成付款后资金立即入账，并根据您的资金管理规则自动结算为您指定的币种（VND、KRW、USDT 等）。"
      }
    ],
    notice_desktop: "汇率锁定 30 分钟：客户按屏幕显示金额准确付款，商户完全免受外汇波动风险",
    notice_mobile: "汇率锁定 30 分钟，有效保护您的跨境交易免受市场大幅波动影响"
  },
  'advantages.json': {
    title_prefix: "选择 HighPayFin",
    title_middle: "成为",
    title_suffix: "您的",
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
    title: "为什么选择 HighPayFin 是最便捷的方案",
    items: [
      {
        title: "纯数字化，零硬件依赖",
        icon: "/assets/uploads/2026/05/practical-1.svg",
        points: [
          "在商户后台即可秒级生成多币种付款链接与专属二维码",
          "无需任何实体 POS 机、物理硬件或繁复的现场技术调试",
          "支持在 150 多个国家和地区通过任意电脑或手机设备无缝运行"
        ]
      },
      {
        title: "汇率透明，锁定无滑点",
        icon: "/assets/uploads/2026/05/practical-2.svg",
        points: [
          "所有换汇成本公开透明，结账汇率一目了然",
          "客户在付款前清楚看到其实际支付的本币准确数额",
          "商户全额接收 100% 应收结算款项，没有任何隐性扣费"
        ]
      },
      {
        title: "全功能多币种商户后台",
        icon: "/assets/uploads/2026/05/practical-3.svg",
        points: [
          "实时掌握多币种资金余额、交易流水和深度数据分析看板",
          "一键导出标准 XLS、CSV 财务对账明细，方便对接财务软件",
          "支持针对企业主、财务总监与业务员设立多级权限管控"
        ]
      },
      {
        title: "当天快速清算入账",
        icon: "/assets/uploads/2026/05/practical-4.svg",
        points: [
          "客户付款成功后数分钟内即可记账至商户账户",
          "直连本地银行通道，彻底摆脱 SWIFT 多日滞后的资金周转困扰"
        ]
      },
      {
        title: "灵活多样的提现币种",
        icon: "/assets/uploads/2026/05/practical-5.svg",
        points: [
          "支持结算为 USD、EUR、GBP、SGD、AED、VND、THB 或 USDT",
          "灵活接收多国币种并随时提现为企业指定的理想资产"
        ]
      },
      {
        title: "大客户专属定制化服务",
        icon: "/assets/uploads/2026/05/practical-6.svg",
        points: [
          "根据大宗交易体量定制阶梯式优惠费率与专属资金清算通道"
        ]
      }
    ]
  },
  'who-its-for.json': {
    tabs: [
      {
        id: "owners",
        tab_label: "面向企业主",
        title: "全面掌控全球商业资金版图",
        image_desktop: "/assets/uploads/2026/02/macbook-1.webp",
        image_mobile: "/assets/uploads/2026/02/macbook-1_mobile.webp",
        features: [
          {
            title: "统一多币种资金总账",
            text: "全盘汇总全球所有交易、支付链接与应收账款，清晰掌握全局资金"
          },
          {
            title: "全球营收与外汇数据分析",
            text: "支持按国家、货币对、支付渠道与业务员进行实时深度多维筛选"
          },
          {
            title: "自动化资金划拨与结算",
            text: "灵活配置自动划拨规则，按需结算至公司银行账户或多币种钱包"
          },
          {
            title: "一键导出审计级财务报表",
            text: "即时生成符合国际会计审计标准的 XLS/CSV 明细报表"
          },
          {
            title: "精细化团队权限分配",
            text: "安全授权销售人员开具账单，同时牢牢把控企业核心财资安全"
          },
          {
            title: "完备的付款人合规追溯",
            text: "每笔交易均完整保留付款人身份信息与反洗钱合规元数据"
          }
        ]
      },
      {
        id: "managers",
        tab_label: "面向业务主管",
        title: "助力业务更快成单的账单工具",
        image_desktop: "/assets/uploads/2026/02/macbook-2.webp",
        image_mobile: "/assets/uploads/2026/02/macbook-2_mobile.webp",
        features: [
          {
            title: "10 秒生成专属账单与二维码",
            text: "秒级开具客户本币计价的付款账单，无需任何硬件设备"
          },
          {
            title: "实时跟踪每笔交易状态",
            text: "待付款 / 已支付 / 已过期状态清晰可见，绝不错失任何一位高意向买家"
          },
          {
            title: "即时到账提醒与确认",
            text: "客户完成付款的瞬间，业务端即刻收到绿灯成功通知"
          },
          {
            title: "完美适配高频大客流业务",
            text: "非常适合跨境零售、酒店旅游、专业咨询、租车出行及高端定制服务"
          }
        ]
      },
      {
        id: "clients",
        tab_label: "面向终端客户",
        title: "顺畅无阻的本地化付款体验",
        image_desktop: "/assets/uploads/2026/02/iphone-1.webp",
        image_mobile: "/assets/uploads/2026/02/iphone-1_mobile.webp",
        features: [
          {
            title: "使用熟悉的本地货币支付",
            text: "客户直接使用常用的手机银行 App、信用卡或本地网银以本币轻松结账。"
          },
          {
            title: "零额外扣费，无隐藏陷阱",
            text: "锁定汇率，公开透明——账单所见即所得，银行账单绝无意外扣款。"
          },
          {
            title: "数秒内即可完成确认",
            text: "扫码或点击链接 → 指纹/人脸生物识别或银行验证 → 迅速完成。"
          },
          {
            title: "即时获取电子交易凭单",
            text: "支付成功后屏幕立即显示官方认证凭据与电子收据。"
          }
        ]
      }
    ]
  },
  'connect-steps.json': {
    title: "快速接入 — 仅需 3 步",
    subtitle: "为全球出海跨国企业打造的无纸化接入流程",
    steps: [
      {
        color: "violet",
        icon: "/assets/uploads/2026/05/connect-1.svg",
        title: "提交企业资质 & 线上签署合作协议"
      },
      {
        color: "green",
        icon: "/assets/uploads/2026/05/connect-2.svg",
        title: "即刻开通多币种商户后台权限"
      },
      {
        color: "violet",
        icon: "/assets/uploads/2026/05/connect-3.svg",
        title: "全面开启全球客户多币种收单"
      }
    ]
  },
  'trust.json': {
    title: "为什么企业信赖我们",
    heading: "HighPayFin 由拥有 15 年以上全球支付深厚经验的国际专家团队倾力打造",
    paragraphs: [
      "HighPayFin 的背后是一支拥有自主知识产权底层架构的国际金融科技团队",
      "深耕全球一级银行战略合作网络",
      "并拥有超过 15 年的跨境支付清算实战经验。",
      "我们在严格的国际监管合规框架内规范运作",
      "构建完全透明合规的清算路径",
      "深刻理解各国央行、金融监管机构",
      "以及快速扩张的跨国企业在不同司法管辖区下的合规诉求。",
      "最重要的是——我们与现代出海企业拥有相同的商业共识。",
      "我们和您一样，始终追求丝滑顺畅的结算体验",
      "系统全天候极致稳定运行",
      "以及高可靠、充裕的资金流动性。"
    ],
    card1_title: "合规与安全保障",
    card1_text: "✓ 拥有合规资质 & 全面监管",
    card2_title: "合规资金流向",
    card2_text: "客户 ⭢ Tier-1 顶级银行 ⭢ 商户"
  },
  'faq.json': {
    title: "常见问题解答",
    questions: [
      {
        question: "开通商户账户需要多长时间？",
        answer: "通常在提交完整的企业资质文件后，账户配置与合规 KYC 审核在 24 小时内即可完成。\n我们致力于提供极速、透明的开通体验——在线签署协议、配置结算规则，次日即可开始全球收单。"
      },
      {
        question: "国际客户如何进行付款？",
        answer: "海外客户使用其母国货币通过熟悉的本地支付方式轻松结账，包括本地银行即时转账、动态二维码、信用卡/借记卡或电子钱包，无需下载额外 App 或进行繁琐注册。"
      },
      {
        question: "商户可以接收哪些币种的资金结算？",
        answer: "您可以直接结算为您企业账户偏好的 KRW、AED、VND、THB 或 USDT——支持按企业实际财资规则灵活配置。全球客户可使用多国本地货币进行付款。"
      },
      {
        question: "是否存在任何隐性收费或跨境附加费？",
        answer: "没有。所有换汇成本均透明包含在结账汇率中。客户在付款前清楚看到最终确切数额，您的企业将足额收到 100% 的账单结算款，没有任何意外扣款。"
      },
      {
        question: "系统接入费用是多少？",
        answer: "接入流程完全免费——零开户费、零月租费、无强制最低交易额限制。仅在产生成功交易时收取极具竞争力的交易手续费。"
      },
      {
        question: "支付基础设施是否安全合规？",
        answer: "是的。所有交易均通过受监管的金融机构处理，配备端到端加密、国际最高的 PCI-DSS Level 1 安全认证以及全自动实时反欺诈/反洗钱（AML）监控。\n\nHigh Pay Fin 严格在持牌合规金融框架内开展业务，全面遵守国际金融合规准则。"
      },
      {
        question: "开户需要准备哪些资料？",
        answer: "您只需提供标准的企业营业执照、法人身份证明文件、企业经营地址证明以及用于结算的银行账户信息。我们的客户成功团队将协助您完成数字化开户流程。"
      },
      {
        question: "是否支持实时查看交易流水并导出财务对账单？",
        answer: "支持。商户后台提供实时的交易数据流、状态筛选、多币种实时余额以及一键导出 CSV 或 Excel 财务报表功能，方便对接企业财务及税务系统。"
      },
      {
        question: "High Pay Fin 适用于哪些行业？",
        answer: "我们的解决方案广泛适用于所有具有跨境客户的行业领域：跨境电商与独立站、SaaS 软件服务、国际旅游与酒店住宿、海外地产、B2B 大宗贸易、奢华礼宾及出海数字营销机构等。"
      },
      {
        question: "外汇（FX）兑换汇率是如何确定的？",
        answer: "我们直连全球顶级流动性提供商获取机构级实时银行中间价汇率。汇率在结账会话期间锁定不变，全面保护您和您的客户免受外汇市场波动造成的损失。"
      }
    ]
  },
  'contact.json': {
    form_title: "开启全球\n多币种收单",
    form_subtitle: "24 小时内完成开通 —\n全面拓宽跨境业务营收",
    button_text: "提交申请",
    privacy_note: "提交本表单即代表您同意我们的隐私政策。"
  },
  'footer.json': {
    network_label: "全球多币种跨境资金结算网络",
    org_name: "High Pay Fin LLC",
    copyright: "© 2026. 版权所有",
    phone_link: "tel:+375447788879",
    phone: "+375 (44) 7788879",
    telegram_url: "https://t.me/highpayfin",
    doc_links: [],
    email: "info@highpayfin.com",
    nav_links: [
      { title: "产品介绍", url: "/zh/#product" },
      { title: "运作方式", url: "/zh/#whats-work" },
      { title: "核心优势", url: "/zh/#advantages" },
      { title: "适用群体", url: "/zh/#for-whom" },
      { title: "常见问题", url: "/zh/#faq" }
    ]
  }
};

// 3. KOREAN (ko) 100% 1:1 match with en
const koData = {
  'site-config.json': {
    menu_items: [
      { title: "제품 소개", url: "/ko/#product" },
      { title: "작동 방식", url: "/ko/#whats-work" },
      { title: "핵심 장점", url: "/ko/#advantages" },
      { title: "적용 분야", url: "/ko/#for-whom" },
      { title: "FAQ", url: "/ko/#faq" }
    ],
    meta_description: "국제 비즈니스를 위한 글로벌 다중 통화 결제 솔루션. 50개 이상의 법정 통화 및 디지털 자산 지원, 즉시 정산, 최저 수수료, 완전한 규정 준수.",
    site_name: "High Pay Fin",
    phone_link: " ",
    phone: " ",
    header_cta_text: "상담 신청",
    telegram_url: "https://t.me/highpayfin",
    email: "info@highpayfin.com",
    meta_title: "High Pay Fin - 글로벌 다중 통화 결제 인프라"
  },
  'home-hero.json': {
    ticker_titles: [
      { title: "전 세계 고객의 다중 통화 결제를 안전하게 수납" },
      { title: "모든 통화로 국경 없는 거래를\n원활하게 성사시키세요" },
      { title: "합법적이고 투명한\n글로벌 정산 인프라" }
    ],
    brand_suffix: "HighPayFin과 함께",
    description: "글로벌 기업이 전 세계 고객의 다중 통화 결제를 수납하고, 원하는 현지 통화나 스테이블코인으로 기업 계좌에 정산받을 수 있도록 지원합니다.",
    cta_text: "HighPayFin 시작하기",
    info_badge: "무료 연동 • 주요 통화 지원 • 글로벌 비즈니스 전용"
  },
  'partners.json': {
    national_bank_logo: "/assets/uploads/2026/02/bank-rb-full.png",
    national_bank_text: "아시아 및 글로벌 티어-1(Tier-1) 은행 결제망과 직결된 인허가 기반 다중 통화 결제 인프라.",
    partner_logos: [
      { name: "Vietcombank", image: "/assets/uploads/2026/02/bank-rb_second.svg", url: "#" },
      { name: "NAPAS", image: "/assets/uploads/2026/02/nspk.svg", url: "#" },
      { name: "Shinhan Bank", image: "/assets/uploads/2026/02/statusbank.svg", url: "#" },
      { name: "VietQR", image: "/assets/uploads/2026/02/mir.svg", url: "#" },
      { name: "KB Kookmin Bank", image: "/assets/uploads/2026/02/severgazbank.svg", url: "#" },
      { name: "Techcombank", image: "/assets/uploads/2026/02/messenger-pigeon.svg", url: "#" },
      { name: "Hana Bank", image: "/assets/uploads/2026/02/sbp.svg", url: "#" }
    ]
  },
  'dont-pay.json': {
    title: "해외 크로스보더 결제에 어려움을 겪고 계신가요?",
    description: "전 세계 고객들은 해외 상품과 서비스를 적극적으로 구매하지만, 대다수 기업은 합법적이고 자동화된 저비용 다중 통화 결제 인프라를 갖추지 못하고 있습니다.",
    cta_text: "문의 남기기",
    cards: [
      {
        type: "red",
        icon: "/assets/uploads/2026/05/dont-pay-red.svg",
        title: "과도한 환전 수수료 & 매출 손실",
        text: "국제 송금 수수료와 은행의 불리한 환율 스프레드로 인해 정산 금액의 5~8%가 수수료로 차감됩니다."
      },
      {
        type: "red",
        icon: "/assets/uploads/2026/05/dont-pay-red.svg",
        title: "느린 SWIFT 송금 & 잦은 결제 실패",
        text: "전통적인 국제 전신환은 수일간의 지연, 원인 모를 자금 동결, 높은 이탈률을 유발합니다."
      },
      {
        type: "green",
        icon: "/assets/uploads/2026/05/dont-pay-green.svg",
        title: "High Pay Fin —\n통합 글로벌 결제 솔루션",
        text: "50개 이상의 법정 통화 및 디지털 자산을 실시간 환전하여 원하는 통화로 즉시 정산합니다."
      }
    ]
  },
  'product.json': {
    title: "글로벌 비즈니스를 위한 통합 다중 통화 결제 인프라",
    client_cards: [
      { title: "글로벌 고객", subtitle: "" },
      { title: "다중 통화 수납 (VND/KRW/USD/...)", subtitle: "" },
      { title: "카드 & 현지 계좌이체", subtitle: "" },
      { title: "실시간 QR & 간편결제", subtitle: "" }
    ],
    provider_title: "HighPayFin - 결제 솔루션",
    provider_tags: "글로벌 결제 수납 • 다중 통화 외환 정산 • 규정 준수 & AML • 즉시 정산",
    business_title: "귀사의 글로벌 비즈니스",
    settlement_title: "정산 성공 완료"
  },
  'who-are-we.json': {
    title: "회사 소개",
    subtitle: "HighPayFin은 다중 통화 크로스보더 결제를 전문으로 하는 공인 글로벌 핀테크 인프라 기업입니다.\n\n우리는 전 세계 기업과 플랫폼이 50개 이상의 법정 통화와 디지털 자산을 합법적이고 안전하게 수납할 수 있는 금융 네트워크를 구축합니다.",
    cards: [
      {
        title: "인가받은 공인\n결제 사업자",
        text: "국제 금융 규제 프레임워크를 엄격히 준수하며 결제 라이선스를 보유하고 글로벌 은행 기준을 완벽하게 충족합니다.",
        icon: "/assets/uploads/2026/05/who-are-we-1_white.svg"
      },
      {
        title: "직접 연결\n다중 결제망",
        text: "각국 현지 청산망, 실시간 카드망, QR 결제 및 글로벌 은행 채널과 직결하여 불필요한 중간 수수료를 제거합니다.",
        icon: "/assets/uploads/2026/05/who-are-we-2_white.svg"
      },
      {
        title: "기관급 외환\n유동성 공급",
        text: "기관급 크로스보더 유동성과 자동화된 외환 자금 관리를 통해 최적의 실시간 환율과 고정 환율을 제공합니다.",
        icon: "/assets/uploads/2026/05/who-are-we-3_white.svg"
      }
    ]
  },
  'how-it-works.json': {
    title: "이용 절차",
    subtitle: "다중 통화 인보이스 발행부터 현지 정산까지 – 단 몇 분이면 완료됩니다",
    steps: [
      {
        step_label: "1단계",
        image_desktop: "/assets/uploads/2026/07/step-1_white.png",
        image_mobile: "/assets/uploads/2026/07/step-1_white_mobile.png",
        title: "기업의 다중 통화 인보이스 생성",
        description: "관리자 대시보드에서 수령을 원하는 금액(VND, KRW, THB, AED 등)을 입력하면 즉시 동적 결제 링크와 QR 코드가 생성됩니다."
      },
      {
        step_label: "2단계",
        image_desktop: "/assets/uploads/2026/07/step-2_white.png",
        image_mobile: "/assets/uploads/2026/07/step-2_white_mobile.png",
        title: "고객의 자국 통화 간편 결제",
        description: "고객은 거주 국가의 모바일 뱅킹 앱, 신용카드, QR 코드 또는 계좌이체를 통해 자국 통화로 편리하게 결제합니다."
      },
      {
        step_label: "3단계",
        image_desktop: "/assets/uploads/2026/07/step-3_white.png",
        image_mobile: "/assets/uploads/2026/07/step-3_white_mobile.png",
        title: "기업 계좌로 실시간 정산 수령",
        description: "결제 완료 즉시 자금이 입금되며, 귀사의 자금 규칙에 따라 원하는 통화(VND, KRW, USDT 등)로 정산됩니다."
      }
    ],
    notice_desktop: "30분간 환율이 고정됩니다: 고객은 화면에 표시된 정확한 금액만 결제하며 환율 변동 위험이 없습니다",
    notice_mobile: "30분간 환율이 고정되어 급격한 시장 변동으로부터 거래를 안전하게 보호합니다"
  },
  'advantages.json': {
    title_prefix: "HighPayFin과 함께",
    title_middle: "당신의",
    title_suffix: "든든한",
    highlight_text: "글로벌 비즈니스 성장 동력",
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
    title: "HighPayFin을 선택해야 하는 실질적인 편의성",
    items: [
      {
        title: "100% 디지털, 물리적 단말기 불필요",
        icon: "/assets/uploads/2026/05/practical-1.svg",
        points: [
          "대시보드에서 결제 링크와 QR 코드가 즉시 생성됩니다",
          "별도의 POS 단말기, 실물 기기 또는 복잡한 현장 설치가 전혀 필요 없습니다",
          "모든 PC 및 모바일 기기를 통해 150개 이상의 국가에서 원활하게 작동합니다"
        ]
      },
      {
        title: "투명하고 안전한 고정 환율",
        icon: "/assets/uploads/2026/05/practical-2.svg",
        points: [
          "모든 환전 비용이 결제 환율에 투명하게 포함되어 있습니다",
          "고객은 결제 전 자국 통화로 청구될 정확한 최종 금액을 확인합니다",
          "귀사는 어떠한 숨겨진 차감 없이 청구된 정산 대금의 100%를 수령합니다"
        ]
      },
      {
        title: "다중 통화 통합 대시보드",
        icon: "/assets/uploads/2026/05/practical-3.svg",
        points: [
          "통합 실시간 잔액, 거래 내역 및 실시간 분석 데이터를 제공합니다",
          "XLS, CSV 및 회계 소프트웨어용 재무 데이터를 원클릭으로 내보낼 수 있습니다",
          "기업 대표 및 재무 담당자를 위한 역할 기반 접근 권한 관리를 지원합니다"
        ]
      },
      {
        title: "당일 신속 정산 시스템",
        icon: "/assets/uploads/2026/05/practical-4.svg",
        points: [
          "고객 결제 완료 후 수 분 이내에 가맹점 계좌로 자금이 반영됩니다",
          "SWIFT의 며칠간 지연 없이 현지 은행망을 통해 즉시 결제 처리됩니다"
        ]
      },
      {
        title: "유연한 정산 통화 선택",
        icon: "/assets/uploads/2026/05/practical-5.svg",
        points: [
          "USD, EUR, GBP, SGD, AED, VND, THB 또는 USDT 등 원하는 자산으로 정산 가능",
          "여러 국가의 통화로 매출을 수납하고 원하는 자산으로 안전하게 정산받으세요"
        ]
      },
      {
        title: "기업 고객을 위한 맞춤형 조건",
        icon: "/assets/uploads/2026/05/practical-6.svg",
        points: [
          "대규모 거래량에 따른 맞춤형 우대 수수료율 및 전용 자금 채널을 제공합니다"
        ]
      }
    ]
  },
  'who-its-for.json': {
    tabs: [
      {
        id: "owners",
        tab_label: "경영진을 위한 솔루션",
        title: "글로벌 비즈니스의 완벽한 자금 통제",
        image_desktop: "/assets/uploads/2026/02/macbook-1.webp",
        image_mobile: "/assets/uploads/2026/02/macbook-1_mobile.webp",
        features: [
          {
            title: "통합 다중 통화 원장",
            text: "전 세계의 모든 거래, 결제 링크 및 매출 채권을 하나의 대시보드에서 통합 관리"
          },
          {
            title: "글로벌 매출 & 외환 실시간 분석",
            text: "국가별, 통화쌍별, 결제 수단별, 담당자별 실시간 다차원 필터링 지원"
          },
          {
            title: "자동화된 정산 출금 관리",
            text: "법인 계좌 또는 다중 통화 지갑으로 유연한 자동 정산 규칙을 설정"
          },
          {
            title: "감사 보고서 원클릭 내보내기",
            text: "국제 회계 및 감사 기준에 맞춘 XLS/CSV 명세서를 즉시 생성"
          },
          {
            title: "직원별 세부 권한 제어",
            text: "자금 통제권은 안전하게 보호하면서 영업팀에 인보이스 발행 권한을 안전하게 위임"
          },
          {
            title: "완벽한 결제자 규정 준수 검증",
            text: "완료된 모든 결제에 대해 결제자 신원 및 규정 준수 메타데이터를 완벽하게 보관"
          }
        ]
      },
      {
        id: "managers",
        tab_label: "실무진을 위한 솔루션",
        title: "계약 성사를 앞당기는 인보이스",
        image_desktop: "/assets/uploads/2026/02/macbook-2.webp",
        image_mobile: "/assets/uploads/2026/02/macbook-2_mobile.webp",
        features: [
          {
            title: "10초 만에 결제 링크 및 QR 생성",
            text: "별도의 기기 없이 고객의 현지 통화로 청구서를 몇 초 만에 생성"
          },
          {
            title: "실시간 결제 상태 트래킹",
            text: "대기 / 결제 완료 / 만료 상태를 실시간으로 확인하여 구매 의향 고객을 놓치지 않음"
          },
          {
            title: "즉각적인 정산 알림",
            text: "고객이 결제를 마치는 즉시 영업 담당자에게 실시간 알림 전송"
          },
          {
            title: "대규모 고객 유입에 최적화",
            text: "리테일, 호텔 관광, 전문 컨설팅, 렌터카 및 프리미엄 서비스에 이상적"
          }
        ]
      },
      {
        id: "clients",
        tab_label: "고객을 위한 솔루션",
        title: "익숙하고 편안한 현지 결제 경험",
        image_desktop: "/assets/uploads/2026/02/iphone-1.webp",
        image_mobile: "/assets/uploads/2026/02/iphone-1_mobile.webp",
        features: [
          {
            title: "친숙한 자국 통화로 결제",
            text: "고객은 평소 사용하는 뱅킹 앱이나 신용카드를 사용하여 자국 통화로 결제합니다."
          },
          {
            title: "숨겨진 수수료 없는 투명성",
            text: "고정 환율로 청구된 금액 그대로 결제되며 카드 명세서에 불필요한 추가 청구가 없습니다."
          },
          {
            title: "단 몇 초 만에 결제 완료",
            text: "QR 스캔 또는 링크 클릭 → 생체 인증/간편 뱅킹 인증 → 즉시 결제 완료."
          },
          {
            title: "실시간 전자 영수증 발급",
            text: "결제 완료 화면과 공식 전자 영수증이 화면에 즉시 표시됩니다."
          }
        ]
      }
    ]
  },
  'connect-steps.json': {
    title: "단 3단계로 간편한 연동",
    subtitle: "글로벌 크로스보더 기업을 위한 신속한 디지털 온보딩",
    steps: [
      {
        color: "violet",
        icon: "/assets/uploads/2026/05/connect-1.svg",
        title: "온보딩 신청서 제출 및 전자 계약 체결"
      },
      {
        color: "green",
        icon: "/assets/uploads/2026/05/connect-2.svg",
        title: "다중 통화 대시보드 계정 발급"
      },
      {
        color: "violet",
        icon: "/assets/uploads/2026/05/connect-3.svg",
        title: "전 세계 고객 대상 다중 통화 결제 수납 시작"
      }
    ]
  },
  'trust.json': {
    title: "고객이 신뢰하는 이유",
    heading: "HighPayFin은 글로벌 결제 분야 15년 이상의 전문성을 보유한 팀에 의해 설계되었습니다",
    paragraphs: [
      "HighPayFin의 배경에는 독자적인 결제 인프라를 보유한 국제 핀테크 팀과",
      "글로벌 은행 파트너십 네트워크",
      "그리고 15년 이상 축적된 크로스보더 결제 분야의 전문성이 자리 잡고 있습니다.",
      "우리는 국제 금융 규제 프레임워크 내에서 엄격하게 운영되며",
      "완벽하게 투명한 결제 경로를 구축하고",
      "각국 중앙은행과 금융 당국",
      "그리고 글로벌 확장 기업들의 다각적인 규정 준수 요구사항을 깊이 이해하고 있습니다.",
      "무엇보다 우리는 현대 비즈니스와 같은 언어로 소통합니다.",
      "우리는 마찰 없는 원활한 솔루션",
      "최고 수준의 시스템 가동률",
      "그리고 신뢰할 수 있는 유동성을 가장 소중한 가치로 여깁니다."
    ],
    card1_title: "보안 및 규정 준수",
    card1_text: "✓ 공인 라이선스 기반 합법 운영",
    card2_title: "합법적 자금 흐름",
    card2_text: "고객 ⭢ Tier-1 은행 ⭢ 기업 가맹점"
  },
  'faq.json': {
    title: "자주 묻는 질문",
    questions: [
      {
        question: "가맹점 계정 설정에 시간이 얼마나 걸리나요?",
        answer: "일반적으로 기업 서류를 제출한 후 설정 및 KYC 검증까지 24시간 이내에 완료됩니다.\n온라인 계약 체결, 정산 규칙 설정 후 익일부터 바로 글로벌 결제 수납이 가능합니다."
      },
      {
        question: "해외 고객은 어떻게 결제하나요?",
        answer: "고객은 현지 은행 계좌이체, 실시간 QR 코드, 직불/신용카드 또는 전자지갑 등 자국의 친숙한 결제 수단으로 결제합니다. 별도의 앱 설치나 번거로운 회원가입이 필요 없습니다."
      },
      {
        question: "어떤 통화로 정산금을 수령할 수 있나요?",
        answer: "KRW, AED, VND, THB 또는 USDT 등 기업 법인 계좌에 맞춰 원하는 통화로 정산받을 수 있습니다. 전 세계 고객들은 다양한 자국 통화로 결제할 수 있습니다."
      },
      {
        question: "숨겨진 수수료나 해외 거래 추가 수수료가 있나요?",
        answer: "아니요. 모든 환전 수수료는 결제 환율에 투명하게 포함되어 있습니다. 고객은 결제 전 최종 금액을 확인하며, 귀사는 청구된 금액의 100%를 수령합니다."
      },
      {
        question: "초기 연동 비용 및 유지 비용은 얼마인가요?",
        answer: "연동 과정은 100% 무료입니다 — 초기 설정비 0원, 월 관리비 0원, 최소 거래량 약정 없음. 성공한 거래 건에 대해서만 경쟁력 있는 거래 수수료가 적용됩니다."
      },
      {
        question: "결제 인프라는 안전하고 규정을 준수하나요?",
        answer: "네. 모든 거래는 엔드투엔드 암호화, 국제 최고 보안 표준인 PCI-DSS Level 1 인증, 자동화된 이상거래탐지/AML 시스템을 갖춘 공인 금융기관을 통해 처리됩니다.\n\nHigh Pay Fin은 라이선스를 보유한 제도권 금융 테두리 내에서 글로벌 규제를 철저히 준수합니다."
      },
      {
        question: "온보딩 신청 시 어떤 서류가 필요한가요?",
        answer: "표준 사업자등록증, 대표자 신분증, 사업장 소재지 증빙 서류, 정산 수령용 법인 계좌 정보가 필요합니다. 전담 매니저가 디지털 온보딩 포털을 통해 신속하게 안내해 드립니다."
      },
      {
        question: "실시간 거래 내역을 모니터링하고 재무 보고서를 다운로드할 수 있나요?",
        answer: "네. 대시보드에서 실시간 거래 스트리밍, 상태별 필터링, 다중 통화 잔액 확인이 가능하며 회계 및 세무를 위한 CSV 또는 엑셀 내보내기를 원클릭으로 지원합니다."
      },
      {
        question: "High Pay Fin은 어떤 산업군에 적합한가요?",
        answer: "국제 고객을 보유한 모든 글로벌 비즈니스에 최적화되어 있습니다: 이커머스 쇼핑몰, SaaS 소프트웨어, 호텔 및 관광 여행사, 해외 부동산, B2B 도소매 무역, 프리미엄 서비스 및 글로벌 에이전시."
      },
      {
        question: "외환(FX) 환율은 어떻게 결정되나요?",
        answer: "글로벌 유동성 공급자로부터 기관급 실시간 매매기준율을 소싱합니다. 결제 세션 동안 환율이 고정되어 시장 변동성 위험으로부터 기업과 고객을 완벽히 보호합니다."
      }
    ]
  },
  'contact.json': {
    form_title: "글로벌 다중 통화\n결제 수납 시작하기",
    form_subtitle: "24시간 이내 승인 —\n국경 없는 비즈니스 매출을 확장하세요",
    button_text: "문의 남기기",
    privacy_note: "본 양식을 제출하시면 당사의 개인정보 처리방침에 동의하는 것으로 간주됩니다."
  },
  'footer.json': {
    network_label: "글로벌 크로스보더 정산 네트워크",
    org_name: "High Pay Fin LLC",
    copyright: "© 2026. All rights reserved",
    phone_link: "tel:+375447788879",
    phone: "+375 (44) 7788879",
    telegram_url: "https://t.me/highpayfin",
    doc_links: [],
    email: "info@highpayfin.com",
    nav_links: [
      { title: "제품 소개", url: "/ko/#product" },
      { title: "작동 방식", url: "/ko/#whats-work" },
      { title: "핵심 장점", url: "/ko/#advantages" },
      { title: "적용 분야", url: "/ko/#for-whom" },
      { title: "FAQ", url: "/ko/#faq" }
    ]
  }
};

const allLangs = {
  vi: viData,
  zh: zhData,
  ko: koData
};

for (const [lang, files] of Object.entries(allLangs)) {
  const dir = path.join('src/data', lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const [filename, data] of Object.entries(files)) {
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated 100% matched: ${filePath}`);
  }
}

console.log('Successfully written full 10-question FAQ and updated WhoAreWe titles for all languages!');
