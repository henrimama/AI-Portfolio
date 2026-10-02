// home.js: the home page. Projects open in place, and the toolbar filters
// them by type. See DESIGN.md, "Home page".
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var smooth = reduce ? 'auto' : 'smooth';
  var openProject = null;

  // ---------- Projects open in place ----------

  var projects = Array.prototype.map.call(document.querySelectorAll('.field .icon'), function (card) {
    var link = card.querySelector('.icon__link');
    var viewer = card.querySelector('.viewer');
    var strip = viewer.querySelector('.viewer__slides');
    var ticking = false;

    var project = { card: card, open: open, close: close, step: step };

    link.setAttribute('role', 'button');
    link.setAttribute('aria-expanded', 'false');
    link.setAttribute('aria-controls', viewer.id);

    // Images are only fetched when they are on show or within one screen
    // of it, so opening a project does not download every image at once.
    function update() {
      ticking = false;
      var view = strip.getBoundingClientRect();
      strip.querySelectorAll('img[data-src]').forEach(function (img) {
        var box = img.parentElement.getBoundingClientRect();
        if (box.left > view.right + view.width || box.right < view.left - view.width) return;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    strip.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // The arrow keys glide the strip along by most of a screen.
    function step(direction) {
      strip.scrollBy({ left: direction * strip.clientWidth * 0.8, behavior: smooth });
    }

    // With a mouse, the strip can be dragged. Touch screens swipe it natively.
    var drag = null;

    strip.addEventListener('pointerdown', function (event) {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      drag = { x: event.clientX, left: strip.scrollLeft, moved: false };
    });

    window.addEventListener('pointermove', function (event) {
      if (!drag) return;
      var distance = event.clientX - drag.x;
      if (Math.abs(distance) > 4) {
        drag.moved = true;
        strip.classList.add('is-dragging');
      }
      if (drag.moved) strip.scrollLeft = drag.left - distance;
    });

    window.addEventListener('pointerup', function () {
      drag = null;
      strip.classList.remove('is-dragging');
    });

    function open() {
      if (openProject && openProject !== project) openProject.close();
      openProject = project;
      card.classList.add('is-open');
      viewer.inert = false;
      link.setAttribute('aria-expanded', 'true');
      update();
      // Once the viewer has grown, bring all of it into view.
      setTimeout(function () {
        if (openProject !== project) return;
        update();
        viewer.scrollIntoView({ block: 'nearest', behavior: smooth });
      }, reduce ? 0 : 420);
    }

    function close(returnFocus) {
      if (openProject === project) openProject = null;
      card.classList.remove('is-open');
      viewer.inert = true;
      link.setAttribute('aria-expanded', 'false');
      if (returnFocus) link.focus();
    }

    function toggle() {
      if (card.classList.contains('is-open')) close();
      else open();
    }

    link.addEventListener('click', function (event) {
      // Ctrl, Cmd or Shift click still opens the full project page.
      if (event.metaKey || event.ctrlKey || event.shiftKey) return;
      event.preventDefault();
      toggle();
    });

    link.addEventListener('keydown', function (event) {
      if (event.key !== ' ') return;
      event.preventDefault();
      toggle();
    });

    return project;
  });

  document.addEventListener('keydown', function (event) {
    if (!openProject) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); openProject.step(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); openProject.step(1); }
    if (event.key === 'Escape') openProject.close(true);
  });

  // ---------- Toolbar: filter by type ----------

  var filters = document.querySelectorAll('[data-filter]');
  var status = document.querySelector('.toolbar__status');

  // Projects outside the filter fade and cannot be clicked. styles.css also
  // moves them below the chosen ones, so the chosen projects come to the top.
  function filter(button) {
    var type = button.dataset.filter;
    var shown = 0;
    filters.forEach(function (other) {
      other.setAttribute('aria-pressed', String(other === button));
    });
    projects.forEach(function (project) {
      var match = type === 'all' || project.card.dataset.type === type;
      if (!match) project.close();
      project.card.classList.toggle('is-dim', !match);
      project.card.inert = !match;
      if (match) shown += 1;
    });
    status.textContent = shown + ' of ' + projects.length + ' projects' +
      (type === 'all' ? '' : ': ' + button.textContent);
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () { filter(button); });
  });
})();
