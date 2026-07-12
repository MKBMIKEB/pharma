(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasHover = window.matchMedia('(hover: hover)').matches;
  var isNeonHome = document.body.classList.contains('template-index');

  /* ---------- Scroll reveal (todas las páginas) ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-revealed'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  if (!isNeonHome) return;

  /* ---------- Starfield de partículas en el hero neón ---------- */
  var canvas = document.querySelector('[data-hero-particles]');
  if (canvas && !prefersReducedMotion) {
    var ctx = canvas.getContext('2d');
    var particles = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function makeParticles() {
      var count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.3,
          vy: Math.random() * 0.15 + 0.03,
          alpha: Math.random() * 0.6 + 0.2,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        p.y -= p.vy;
        p.twinkle += 0.02;
        if (p.y < -5) p.y = canvas.height + 5;
        var a = p.alpha * (0.6 + 0.4 * Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(247,248,255,' + a.toFixed(2) + ')';
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    resize();
    makeParticles();
    draw();
    window.addEventListener('resize', function () {
      resize();
      makeParticles();
    });
  }

  /* ---------- Tilt sutil de la imagen de fondo del hero ---------- */
  var heroNeon = document.querySelector('.hero--neon');
  var heroBg = heroNeon ? heroNeon.querySelector('.hero__bg-image') : null;
  if (heroNeon && heroBg && !prefersReducedMotion && hasHover) {
    heroNeon.addEventListener('mousemove', function (e) {
      var rect = heroNeon.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      heroBg.style.transform = 'scale(1.06) translate(' + (px * -14) + 'px, ' + (py * -10) + 'px)';
    });
    heroNeon.addEventListener('mouseleave', function () {
      heroBg.style.transform = '';
    });
  }

  /* ---------- Botones magnéticos (CTAs principales de la home) ---------- */
  if (!prefersReducedMotion && hasHover) {
    var magneticEls = document.querySelectorAll('.hero__cta-primary, .vitaplus-feature .btn-primary, .final-cta .btn-accent');
    magneticEls.forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = 'translate(' + (x * 0.25).toFixed(1) + 'px, ' + (y * 0.35).toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }

  /* ---------- Escena 3D (Spline) en "Nuestras Categorías" — carga diferida ---------- */
  var splineCanvas = document.querySelector('[data-spline-scene]');
  var saveData = navigator.connection && navigator.connection.saveData;
  if (splineCanvas && !prefersReducedMotion && !saveData && 'IntersectionObserver' in window) {
    var splineObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        splineObserver.unobserve(entry.target);
        import('https://unpkg.com/@splinetool/runtime@latest/build/runtime.js')
          .then(function (mod) {
            var app = new mod.Application(splineCanvas);
            return app.load(splineCanvas.dataset.splineScene);
          })
          .then(function () {
            splineCanvas.classList.add('is-loaded');
          })
          .catch(function (err) {
            console.warn('No se pudo cargar la escena 3D de Spline:', err);
          });
      });
    }, { rootMargin: '200px 0px' });
    splineObserver.observe(splineCanvas);
  }
})();
