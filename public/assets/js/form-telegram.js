(function () {
  'use strict';

  function initTelegramForm() {
    const config = window.__TELEGRAM_CONFIG__ || {};

    const forms = document.querySelectorAll('form.form');
    forms.forEach((form) => {
      if (form._telegramAttached) return;
      form._telegramAttached = true;

      form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
        const msgContainer = form.querySelector('.form__message');

        if (msgContainer) {
          msgContainer.innerHTML = '';
          msgContainer.style.display = 'none';
        }

        // Gather form data
        const formData = new FormData(form);
        const name = (formData.get('name') || '').trim();
        const email = (formData.get('email') || '').trim();
        let phone = (formData.get('phone') || '').trim();
        const company = (formData.get('company-name') || '').trim();
        const country = formData.get('country-registration') || '';
        const message = (formData.get('message') || '').trim();
        const subject = formData.get('subject') || 'Contact Form';
        const pageLang = document.documentElement.lang || 'en';
        const pageUrl = window.location.href;
        const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

        // Get full international phone if intl-tel-input is present
        const phoneInput = form.querySelector('input[name="phone"]');
        if (phoneInput && window.intlTelInputGlobals) {
          try {
            const iti = window.intlTelInputGlobals.getInstance(phoneInput);
            if (iti && iti.getNumber) {
              const fullPhone = iti.getNumber();
              if (fullPhone) phone = fullPhone;
            }
          } catch (err) {}
        }

        // Loading state
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.7';
          submitBtn.style.pointerEvents = 'none';
          const btnTextStatic = submitBtn.querySelector('.btn__text-static');
          const btnTextUp = submitBtn.querySelector('.btn__text-up');
          if (btnTextStatic) btnTextStatic.textContent = '...';
          if (btnTextUp) btnTextUp.textContent = '...';
        }

        // Construct Telegram Message
        const telegramText = 
`🚀 <b>YÊU CẦU TƯ VẤN MỚI TỪ WEBSITE</b> 🚀
━━━━━━━━━━━━━━━━━━━━━━
👤 <b>Họ tên:</b> <code>${name || 'Không có'}</code>
📧 <b>Email:</b> <code>${email || 'Không có'}</code>
📞 <b>Số điện thoại:</b> <code>${phone || 'Không có'}</code>
🏢 <b>Tên công ty:</b> <code>${company || 'Không có'}</code>
🌍 <b>Quốc gia ĐKKD:</b> ${country || 'Không có'}
💬 <b>Lời nhắn:</b> ${message || 'Không có'}
━━━━━━━━━━━━━━━━━━━━━━
📋 <b>Biểu mẫu:</b> ${subject}
🌐 <b>Ngôn ngữ:</b> ${pageLang.toUpperCase()}
📍 <b>Trang gửi:</b> ${pageUrl}
⏰ <b>Thời gian (VN):</b> ${now} (GMT+7)`;

        let sentSuccess = false;

        if (config.enable_telegram && config.telegram_bot_token && config.telegram_chat_id) {
          try {
            const apiUrl = `https://api.telegram.org/bot${config.telegram_bot_token.trim()}/sendMessage`;
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: config.telegram_chat_id.trim(),
                text: telegramText,
                parse_mode: 'HTML',
                disable_web_page_preview: true
              })
            });
            const data = await response.json();
            if (data.ok) {
              sentSuccess = true;
            } else {
              console.warn('Telegram API response error:', data);
            }
          } catch (err) {
            console.error('Failed to send Telegram notification:', err);
          }
        } else {
          // If token not configured yet, consider submitted locally
          console.info('Telegram Bot Token or Chat ID not configured in admin yet. Message payload:', telegramText);
          sentSuccess = true;
        }

        // Reset submit button
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.style.pointerEvents = 'auto';
          submitBtn.innerHTML = originalBtnText;
        }

        if (sentSuccess) {
          form.reset();

          // If modal is open, close it
          const openModal = form.closest('.modal');
          if (openModal && window.modalInstance) {
            window.modalInstance.close(openModal.id);
          }

          // Show nice alert or toast
          showSuccessNotification(config.success_message || 'Thank you! Your request has been submitted successfully.');
        } else {
          if (msgContainer) {
            msgContainer.innerHTML = `<div style="color: #ef4444; margin-top: 10px; font-size: 14px;">${config.error_message || 'An error occurred. Please try again later.'}</div>`;
            msgContainer.style.display = 'block';
          } else {
            alert(config.error_message || 'An error occurred. Please try again later.');
          }
        }
      });
    });
  }

  function showSuccessNotification(message) {
    let toast = document.getElementById('hpf-success-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'hpf-success-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #047857;
        color: #ffffff;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 99999;
        font-family: inherit;
        font-size: 15px;
        font-weight: 500;
        max-width: 400px;
        line-height: 1.5;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        gap: 12px;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg><span>${message}</span>`;
    toast.style.display = 'flex';
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 300);
    }, 4500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTelegramForm);
  } else {
    initTelegramForm();
  }
  window.addEventListener('load', initTelegramForm);
})();
