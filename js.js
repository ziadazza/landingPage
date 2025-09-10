
    document.addEventListener("DOMContentLoaded", function () {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
    });

    // Mobile Menu Functions
    const mobileMenuToggler = document.getElementById('mobileMenuToggler');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    function openMobileMenu() {
      mobileMenu.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('show');
      document.body.style.overflow = 'auto';
    }

    // Event listeners
    mobileMenuToggler.addEventListener('click', function (e) {
      e.preventDefault();
      openMobileMenu();
    });

    mobileMenuClose.addEventListener('click', closeMobileMenu);

    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });

    // Tooltips initialization
    document.addEventListener("DOMContentLoaded", function () {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
    });

