/**
 * VitalPlus - Product Landing Page JavaScript
 * Handles variant selection, quantity, buy now, gallery, sticky CTA.
 */
(function() {
  'use strict';

  // --- Variant Selector ---
  var variantButtons = document.querySelectorAll('[data-variant-selector] .variant-btn');
  var variantIdInput = document.querySelector('[data-variant-id]');
  var priceEl = document.querySelector('[data-price]');
  var comparePriceEl = document.querySelector('[data-compare-price]');
  var addToCartBtn = document.querySelector('[data-add-to-cart]');
  var stickyPrice = document.querySelector('[data-sticky-price]');

  if (variantButtons.length > 0) {
    variantButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        variantButtons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var variantId = btn.getAttribute('data-variant-id');
        if (variantIdInput) variantIdInput.value = variantId;

        var price = parseInt(btn.getAttribute('data-variant-price'));
        var comparePrice = parseInt(btn.getAttribute('data-variant-compare-price'));
        var available = btn.getAttribute('data-variant-available') === 'true';

        if (priceEl) priceEl.textContent = formatMoney(price);
        if (stickyPrice) stickyPrice.textContent = formatMoney(price);

        if (comparePriceEl) {
          if (comparePrice && comparePrice > price) {
            comparePriceEl.textContent = formatMoney(comparePrice);
            comparePriceEl.style.display = '';
          } else {
            comparePriceEl.style.display = 'none';
          }
        }

        // Update save badge
        var saveEl = document.querySelector('.lp-price-block__save');
        if (saveEl) {
          if (comparePrice && comparePrice > price) {
            saveEl.textContent = 'Ahorras ' + formatMoney(comparePrice - price);
            saveEl.style.display = '';
          } else {
            saveEl.style.display = 'none';
          }
        }

        if (addToCartBtn) {
          addToCartBtn.disabled = !available;
          if (!available) {
            addToCartBtn.innerHTML = 'Agotado';
          }
        }

        var url = new URL(window.location.href);
        url.searchParams.set('variant', variantId);
        window.history.replaceState({}, '', url.toString());
      });
    });
  }

  // --- Quantity Selector ---
  var quantityMinus = document.querySelector('[data-quantity-minus]');
  var quantityPlus = document.querySelector('[data-quantity-plus]');
  var quantityInput = document.querySelector('[data-quantity-input]');

  if (quantityMinus && quantityPlus && quantityInput) {
    quantityMinus.addEventListener('click', function() {
      var val = parseInt(quantityInput.value) || 1;
      if (val > 1) quantityInput.value = val - 1;
    });
    quantityPlus.addEventListener('click', function() {
      var val = parseInt(quantityInput.value) || 1;
      quantityInput.value = val + 1;
    });
  }

  // --- Buy Now (Add to Cart + Redirect to Checkout) ---
  var productForm = document.querySelector('[data-product-form]');
  if (productForm) {
    productForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var formData = new FormData(productForm);
      var data = {
        id: parseInt(formData.get('id')),
        quantity: parseInt(formData.get('quantity')) || 1
      };

      var btn = productForm.querySelector('[data-add-to-cart]');
      if (btn) { btn.disabled = true; btn.classList.add('loading'); }

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function(response) {
        if (!response.ok) throw new Error('Error');
        return response.json();
      })
      .then(function() {
        window.location.href = '/checkout';
      })
      .catch(function(error) {
        console.error('Error:', error);
        showToast('Error al procesar la compra');
        if (btn) { btn.disabled = false; btn.classList.remove('loading'); }
      });
    });
  }

  // --- Gallery Thumbnails ---
  var thumbs = document.querySelectorAll('[data-thumb-src]');
  var mainImage = document.getElementById('ProductImage');

  if (thumbs.length > 0 && mainImage) {
    thumbs.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        thumbs.forEach(function(t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        mainImage.src = thumb.getAttribute('data-thumb-src');
      });
    });
  }

  // --- Sticky CTA on Scroll ---
  var stickyCta = document.querySelector('[data-sticky-cta]');
  var heroSection = document.querySelector('.lp-hero');

  if (stickyCta && heroSection) {
    var stickyVisible = false;
    window.addEventListener('scroll', function() {
      var heroBottom = heroSection.getBoundingClientRect().bottom;
      var shouldShow = heroBottom < 0;
      if (shouldShow !== stickyVisible) {
        stickyVisible = shouldShow;
        stickyCta.classList.toggle('is-visible', stickyVisible);
      }
    }, { passive: true });
  }

  // --- Helpers ---
  function formatMoney(cents) {
    return (cents / 100).toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

  function showToast(message) {
    var container = document.getElementById('toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    toast.className = 'toast toast--visible';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function() {
      toast.classList.remove('toast--visible');
      setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
  }
})();
