// motion.js: scroll and hover movement, and the phone menu.
// Plain JavaScript, no libraries. See DESIGN.md, "Movement".
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bar = document.querySelector('.bar');
  var media = document.querySelectorAll('.lead__media');
  var ticking = false;

  // Hairline under the bar once scrolled, and full-bleed images
  // moving slightly slower than the scroll (never more than 40px).
  function update() {
    ticking = false;
    bar.classList.toggle('is-scrolled', window.scrollY > 0);
    if (reduce) return;
    var vh = window.innerHeight;
    media.forEach(function (el) {
      var rect = el.parentElement.getBoundingClientRect();
      var progress = (vh - rect.top) / (vh + rect.height);
      progress = Math.min(1, Math.max(0, progress));
      el.style.transform = 'translateY(' + (progress * 40).toFixed(1) + 'px)';
    });
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  // Images fade in and rise into place the first time they enter the screen.
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  // Phone menu overlay.
  var openButton = document.querySelector('.bar__menu');
  var overlay = document.getElementById('menu');
  var closeButton = overlay.querySelector('.overlay__close');

  function setMenu(open) {
    overlay.classList.toggle('is-open', open);
    openButton.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    (open ? closeButton : openButton).focus();
  }

  openButton.addEventListener('click', function () { setMenu(true); });
  closeButton.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) setMenu(false);
  });
})();
