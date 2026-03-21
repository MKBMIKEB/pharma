/**
 * VitalPlus - Cart Page JavaScript
 * Handles: AJAX quantity updates, remove items, clear cart,
 * cart note save, dynamic UI updates, loading states.
 */
(function () {
  'use strict';

  /* ── Helpers ── */
  function formatMoney(cents) {
    var amount = Math.round(cents / 100);
    return '$' + amount.toLocaleString('es-CO');
  }

  function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () { toast.remove(); }, 3000);
  }

  /* ── Loading States ── */
  function setItemLoading(lineIndex, loading) {
    var item = document.querySelector('[data-line="' + lineIndex + '"]');
    if (!item) return;
    var overlay = item.querySelector('[data-item-loading]');
    if (overlay) {
      overlay.style.display = loading ? 'flex' : 'none';
    }
  }

  /* ── Cart API ── */
  function updateLineItem(line, quantity) {
    setItemLoading(line, true);

    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ line: line, quantity: quantity })
    })
      .then(function (r) { return r.json(); })
      .then(function (cart) {
        if (quantity === 0) {
          // Item removed - animate out then reload for clean state
          var item = document.querySelector('[data-line="' + line + '"]');
          if (item) {
            item.style.transition = 'opacity 0.3s, transform 0.3s';
            item.style.opacity = '0';
            item.style.transform = 'translateX(-1rem)';
            setTimeout(function () { window.location.reload(); }, 350);
          } else {
            window.location.reload();
          }
        } else {
          // Update the UI dynamically
          updateCartUI(cart, line);
          setItemLoading(line, false);
        }
      })
      .catch(function (err) {
        console.error('Error updating cart:', err);
        setItemLoading(line, false);
        showToast('Error al actualizar el carrito');
      });
  }

  function clearCart() {
    fetch('/cart/clear.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function () {
        window.location.reload();
      })
      .catch(function (err) {
        console.error('Error clearing cart:', err);
        showToast('Error al vaciar el carrito');
      });
  }

  function saveCartNote() {
    var noteEl = document.querySelector('[data-cart-note]');
    if (!noteEl) return;

    fetch('/cart/update.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note: noteEl.value })
    })
      .then(function () {
        showToast('Nota guardada');
      })
      .catch(function (err) {
        console.error('Error saving note:', err);
      });
  }

  /* ── Dynamic UI Update ── */
  function updateCartUI(cart, changedLine) {
    // Update quantity input
    var item = document.querySelector('[data-line="' + changedLine + '"]');
    if (item) {
      var qtyInput = item.querySelector('[data-quantity-value]');
      var lineItem = cart.items[changedLine - 1];

      if (lineItem && qtyInput) {
        qtyInput.value = lineItem.quantity;

        // Update line price
        var priceEl = item.querySelector('[data-line-price]');
        if (priceEl) {
          priceEl.textContent = formatMoney(lineItem.final_line_price);
        }
      }
    }

    // Update subtotal and total
    var subtotalEl = document.querySelector('[data-cart-subtotal]');
    if (subtotalEl) subtotalEl.textContent = formatMoney(cart.total_price);

    var totalEl = document.querySelector('[data-cart-total]');
    if (totalEl) totalEl.textContent = formatMoney(cart.total_price);

    // Update header cart count
    var countEls = document.querySelectorAll('[data-cart-count]');
    countEls.forEach(function (el) {
      el.textContent = cart.item_count;
      el.style.display = cart.item_count > 0 ? 'flex' : 'none';
    });

    // Update free shipping bar
    updateShippingBar(cart.total_price);
  }

  function updateShippingBar(totalCents) {
    var bar = document.querySelector('.free-shipping-bar');
    if (!bar) return;

    var threshold = parseInt(bar.getAttribute('data-threshold'));
    if (!threshold) return;

    var remaining = threshold - totalCents;
    var progress = Math.min(100, Math.round((totalCents / threshold) * 100));
    var fill = bar.querySelector('.free-shipping-bar__fill');
    var msg = bar.querySelector('.free-shipping-bar__message');

    if (fill) fill.style.width = progress + '%';

    if (msg) {
      if (remaining > 0) {
        msg.textContent = '¡Te faltan ' + formatMoney(remaining) + ' para envío gratis!';
      } else {
        msg.textContent = '¡Tienes envío gratis!';
      }
    }
  }

  /* ── Event Delegation ── */
  document.addEventListener('click', function (e) {
    var minusBtn = e.target.closest('[data-cart-quantity-minus]');
    var plusBtn = e.target.closest('[data-cart-quantity-plus]');
    var removeBtn = e.target.closest('[data-cart-remove]');
    var clearBtn = e.target.closest('[data-cart-clear]');

    if (minusBtn) {
      e.preventDefault();
      var line = parseInt(minusBtn.getAttribute('data-cart-quantity-minus'));
      var input = minusBtn.closest('[data-line-quantity]').querySelector('[data-quantity-value]');
      var newQty = Math.max(0, parseInt(input.value) - 1);
      updateLineItem(line, newQty);
    }

    if (plusBtn) {
      e.preventDefault();
      var line = parseInt(plusBtn.getAttribute('data-cart-quantity-plus'));
      var input = plusBtn.closest('[data-line-quantity]').querySelector('[data-quantity-value]');
      var newQty = parseInt(input.value) + 1;
      updateLineItem(line, newQty);
    }

    if (removeBtn) {
      e.preventDefault();
      var line = parseInt(removeBtn.getAttribute('data-cart-remove'));
      updateLineItem(line, 0);
    }

    if (clearBtn) {
      e.preventDefault();
      clearCart();
    }
  });

  /* ── Cart Note Debounce ── */
  var noteTimer = null;
  var noteEl = document.querySelector('[data-cart-note]');
  if (noteEl) {
    noteEl.addEventListener('input', function () {
      clearTimeout(noteTimer);
      noteTimer = setTimeout(saveCartNote, 800);
    });
  }
})();
