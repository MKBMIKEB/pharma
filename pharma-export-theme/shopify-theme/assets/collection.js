/**
 * VitalPlus - Collection Page JavaScript
 * Handles: view toggle (grid/list), mobile filter drawer, filter interactions.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'vitalplus_collection_view';

  /* ── View Toggle (Grid / List) ── */
  function initViewToggle() {
    var toggleContainer = document.querySelector('[data-view-toggle]');
    var grid = document.querySelector('[data-collection-grid]');
    if (!toggleContainer || !grid) return;

    var buttons = toggleContainer.querySelectorAll('[data-view]');
    var saved = localStorage.getItem(STORAGE_KEY) || 'grid';

    function setView(view) {
      buttons.forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-view') === view);
      });
      grid.classList.toggle('collection-grid--list', view === 'list');
      localStorage.setItem(STORAGE_KEY, view);
    }

    // Apply saved preference
    setView(saved);

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setView(btn.getAttribute('data-view'));
      });
    });
  }

  /* ── Mobile Filter Drawer ── */
  function initFilterDrawer() {
    var toggleBtn = document.querySelector('[data-filter-toggle]');
    var closeBtn = document.querySelector('[data-filter-close]');
    var panel = document.querySelector('[data-collection-filters-panel]');
    var overlay = document.querySelector('[data-filter-overlay]');

    if (!panel) return;

    function openDrawer() {
      panel.classList.add('is-open');
      if (overlay) overlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    }

    function closeDrawer() {
      panel.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-visible');
      document.body.style.overflow = '';
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* ── Filter Form Auto-submit (for checkboxes) ── */
  function initFilterForm() {
    var filterForm = document.querySelector('[data-collection-filters]');
    if (!filterForm) return;

    filterForm.querySelectorAll('select').forEach(function (select) {
      select.addEventListener('change', function () {
        filterForm.submit();
      });
    });
  }

  /* ── Init ── */
  function init() {
    initViewToggle();
    initFilterDrawer();
    initFilterForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
