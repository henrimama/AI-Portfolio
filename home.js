// home.js: the home page. The ending of the intro screen, projects that open
// in place, and the toolbar that filters them by type. See DESIGN.md.

// ---------- Intro screen: the ending ----------
// index.html adds the "intro" class right after log-in and styles.css fades
// the text in. Here "Henri Maman" travels into the header as the black
// screen fades away. See DESIGN.md, "Intro screen".
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('intro')) return;

  var screen = document.querySelector('.intro-screen');
  var block = screen.querySelector('.intro-screen__text');
  var name = block.querySelector('.display');
  var sub = block.querySelector('.intro-screen__sub');
  var target = document.querySelector('.bar .bar__name');

  // The box around the letters themselves, whatever box they sit in.
  function letters(element) {
    var range = document.createRange();
    range.selectNodeContents(element);
    return range.getBoundingClientRect();
  }

  function finish() {
    root.classList.remove('intro');
  }

  function end() {
    var box = name.getBoundingClientRect();
    var from = letters(name);
    var to = letters(target);
    var scale = to.height / from.height;
    // Where the letters start inside the name's box, which shrinks with it.
    var insetX = (from.left - box.left) * scale;
    var insetY = (from.top - box.top) * scale;
    var moveX = to.left - box.left - insetX;
    var moveY = to.top - box.top - insetY;

    // Large and small type are not spaced in exact proportion, so work out
    // the letter spacing that makes the shrunken name exactly as wide as
    // the header's.
    var spacingFrom = getComputedStyle(name).letterSpacing;
    name.style.letterSpacing = '0px';
    var plainWidth = letters(name).width;
    name.style.letterSpacing = '';
    var spacingTo = ((to.width / scale - plainWidth) / name.textContent.length) + 'px';

    // Lift the name out of the centred block, exactly where it already is.
    block.style.paddingTop = box.height + 'px';
    name.style.position = 'fixed';
    name.style.left = box.left + 'px';
    name.style.top = box.top + 'px';
    name.style.width = box.width + 'px';
    name.style.margin = '0';
    name.style.textAlign = 'left';
    name.style.whiteSpace = 'nowrap';
    name.style.transformOrigin = '0 0';

    var timing = { duration: 1000, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'forwards' };

    sub.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'ease-out', fill: 'forwards' });

    // Paper on the black screen, Ink on the white page, switching quickly
    // at the midpoint of the fade so it is never grey on grey.
    name.animate([
      { transform: 'none', letterSpacing: spacingFrom, color: '#FFFFFF', offset: 0 },
      { color: '#FFFFFF', offset: 0.47 },
      { color: '#0A0A0A', offset: 0.53 },
      { transform: 'translate(' + moveX + 'px, ' + moveY + 'px) scale(' + scale + ')',
        letterSpacing: spacingTo, color: '#0A0A0A', offset: 1 }
    ], timing);

    var fade = screen.animate([
      { backgroundColor: 'rgba(10, 10, 10, 1)' },
      { backgroundColor: 'rgba(10, 10, 10, 0)' }
    ], timing);

    fade.onfinish = finish;
  }

  // Hold until 1.5 seconds after the page began to load, then play the ending.
  setTimeout(function () {
    try { end(); } catch (error) { finish(); }
  }, Math.max(0, 1500 - performance.now()));
})();

(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var smooth = reduce ? 'auto' : 'smooth';
  var openProject = null;

  // ---------- Projects open in place ----------

  var projects = Array.prototype.map.call(document.querySelectorAll('.field .icon'), function (card) {
    var link = card.querySelector('.icon__link');
    // A project with no images yet has no viewer: clicking it only pins its
    // name and description open.
    var viewer = card.querySelector('.viewer');
    var strip = viewer ? viewer.querySelector('.viewer__slides') : null;
    var ticking = false;

    var project = { card: card, open: open, close: close, step: step };

    link.setAttribute('role', 'button');
    link.setAttribute('aria-expanded', 'false');
    if (viewer) link.setAttribute('aria-controls', viewer.id);

    // Images are only fetched when they are on show or within one screen
    // of it, so opening a project does not download every image at once.
    function update() {
      ticking = false;
      if (!strip) return;
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

    if (strip) strip.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // The arrow keys glide the strip along by most of a screen.
    function step(direction) {
      if (!strip) return;
      strip.scrollBy({ left: direction * strip.clientWidth * 0.8, behavior: smooth });
    }

    // With a mouse, the strip can be dragged. Touch screens swipe it natively.
    var drag = null;

    if (strip) strip.addEventListener('pointerdown', function (event) {
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
      if (strip) strip.classList.remove('is-dragging');
    });

    function open() {
      if (openProject && openProject !== project) openProject.close();
      openProject = project;
      card.classList.add('is-open');
      if (viewer) viewer.inert = false;
      link.setAttribute('aria-expanded', 'true');
      update();
      // Once the viewer has grown, bring all of it into view.
      setTimeout(function () {
        if (openProject !== project) return;
        update();
        (viewer || card).scrollIntoView({ block: 'nearest', behavior: smooth });
      }, reduce ? 0 : 420);
    }

    function close(returnFocus) {
      if (openProject === project) openProject = null;
      card.classList.remove('is-open');
      if (viewer) viewer.inert = true;
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
