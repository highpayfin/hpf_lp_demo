class Modal {
  check(id) {
    if (!id) {
      console.log("modalId not found");
      return;
    }

    let modalEl = document.getElementById(id);
    if (!modalEl && id.includes("connect")) {
      modalEl = document.getElementById("connect-high-pay-fin") || document.getElementById("connect-doverka-pay");
    }
    if (!modalEl && id.includes("contact")) {
      modalEl = document.getElementById("contact-form");
    }
    if (!modalEl) {
      modalEl = document.getElementById(id) || document.querySelector(".modal");
    }

    if (modalEl) {
      return modalEl;
    } else {
      console.log("modalEl not found: " + id);
      return undefined;
    }
  }

  open(id) {
    const modalEl = this.check(id);
    if (!modalEl) return;

    const openModals = document.querySelectorAll(".modal.open");
    openModals.forEach((modal) => {
      this.close(modal.id);
    });

    modalEl.style.display = "block";
    requestAnimationFrame(() => {
      modalEl.classList.add("open");
    });
  }

  close(id) {
    const modalEl = this.check(id);
    if (!modalEl) return;
    modalEl.classList.remove("open");
    setTimeout(() => {
      modalEl.style.display = "none";
    }, 400);
  }

  listen() {
    document.addEventListener("click", (e) => {
      const openEl = e.target.closest("[modal]");
      if (openEl) {
        e.preventDefault();
        const modalId = openEl.getAttribute("modal");
        this.open(modalId);
        return;
      }

      const closeEl = e.target.closest(".modal__close");
      if (closeEl) {
        e.preventDefault();
        const modalEl = closeEl.closest(".modal");
        if (modalEl) this.close(modalEl.id);
        return;
      }

      const shadowEl = e.target.closest(".modal__shadow");
      if (shadowEl) {
        e.preventDefault();
        const modalEl = shadowEl.closest(".modal");
        if (modalEl) this.close(modalEl.id);
        return;
      }
    });

    // Support ESC key to close open modals
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const openModals = document.querySelectorAll(".modal.open");
        openModals.forEach((modal) => {
          this.close(modal.id);
        });
      }
    });
  }
}

// Auto-initialize Modal listener immediately
(function() {
  function startModal() {
    if (!window._modalListening) {
      window._modalListening = true;
      const modal = new Modal();
      modal.listen();
      window.modalInstance = modal;
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startModal);
  } else {
    startModal();
  }
  window.addEventListener('load', startModal);
})();
