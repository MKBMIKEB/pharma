/* ============================================
   VitalPlus - Global Theme JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ---------- Toast Notifications ---------- */
  function showToast(message, type) {
    type = type || 'success';
    var container = document.getElementById('toast-container');
    if (!container) return;

    var toast = document.createElement('div');
    toast.className = 'toast toast--' + type;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('toast--visible');
    });

    setTimeout(function () {
      toast.classList.remove('toast--visible');
      setTimeout(function () { toast.remove(); }, 300);
    }, 3000);
  }

  /* ---------- Update Header Cart Count ---------- */
  function updateCartCount(count) {
    var badges = document.querySelectorAll('[data-cart-count]');
    badges.forEach(function (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? '' : 'none';
    });
  }

  /* ---------- AJAX Add to Cart ---------- */
  function initAddToCart() {
    document.addEventListener('submit', function (e) {
      var form = e.target.closest('.product-card__add-form');
      if (!form) return;
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      if (btn.disabled) return;
      btn.disabled = true;
      btn.classList.add('loading');

      var formData = new FormData(form);
      var body = {};
      formData.forEach(function (value, key) { body[key] = value; });

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ items: [{ id: Number(body.id), quantity: Number(body.quantity || 1) }] })
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then(function () {
          return fetch('/cart.js', { headers: { 'Accept': 'application/json' } });
        })
        .then(function (res) { return res.json(); })
        .then(function (cart) {
          updateCartCount(cart.item_count);
          showToast(form.getAttribute('data-toast-message') || 'Producto agregado al carrito');
        })
        .catch(function () {
          showToast('Error al agregar el producto', 'error');
        })
        .finally(function () {
          btn.disabled = false;
          btn.classList.remove('loading');
        });
    });
  }

  /* ---------- Mobile Menu Toggle ---------- */
  function initMobileMenu() {
    var toggle = document.querySelector('[data-mobile-menu-toggle]');
    var menu = document.querySelector('[data-mobile-menu]');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open');

      var menuIcon = toggle.querySelector('.menu-icon');
      var closeIcon = toggle.querySelector('.close-icon');
      if (menuIcon) menuIcon.style.display = expanded ? '' : 'none';
      if (closeIcon) closeIcon.style.display = expanded ? 'none' : '';

      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.click();
      }
    });
  }

  /* ---------- Password Toggle ---------- */
  function initPasswordToggle() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-toggle-password]');
      if (!btn) return;

      var targetId = btn.getAttribute('data-toggle-password');
      var input = document.getElementById(targetId);
      if (!input) return;

      var isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      var eyeIcon = btn.querySelector('.icon-eye');
      var eyeOffIcon = btn.querySelector('.icon-eye-off');
      if (eyeIcon && eyeOffIcon) {
        eyeIcon.style.display = isPassword ? 'none' : '';
        eyeOffIcon.style.display = isPassword ? '' : 'none';
      }
    });
  }

  /* ---------- Recover Password Form Toggle (Login Page) ---------- */
  function initRecoverForm() {
    var recoverBtn = document.querySelector('[data-recover-toggle]');
    var loginForm = document.getElementById('login-form');
    var recoverForm = document.getElementById('recover-form');
    if (!recoverBtn || !loginForm || !recoverForm) return;

    function toggleForms() {
      var showRecover = loginForm.style.display !== 'none';
      loginForm.style.display = showRecover ? 'none' : '';
      recoverForm.style.display = showRecover ? '' : 'none';
    }

    recoverBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleForms();
    });

    var cancelBtn = document.querySelector('[data-recover-cancel]');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleForms();
      });
    }

    if (window.location.hash === '#recover') {
      toggleForms();
    }
  }

  /* ---------- Smooth Scroll to Anchors ---------- */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /* ---------- Header Scroll Shadow ---------- */
  function initHeaderScroll() {
    var header = document.querySelector('[data-header]');
    if (!header) return;

    var scrolled = false;
    window.addEventListener('scroll', function () {
      var isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        scrolled = isScrolled;
        header.classList.toggle('header--scrolled', scrolled);
      }
    }, { passive: true });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initAddToCart();
    initMobileMenu();
    initPasswordToggle();
    initRecoverForm();
    initSmoothScroll();
    initHeaderScroll();
  });
})();
