// home.js: the home page toolbar. Filter the projects by type.
(function () {
  var filters = document.querySelectorAll('[data-filter]');
  var icons = document.querySelectorAll('.field [data-type]');
  var status = document.querySelector('.toolbar__status');

  // Projects outside the filter stay in place but step back, so the groups
  // read at a glance.
  function filter(button) {
    var type = button.dataset.filter;
    var shown = 0;
    filters.forEach(function (other) {
      other.setAttribute('aria-pressed', String(other === button));
    });
    icons.forEach(function (icon) {
      var match = type === 'all' || icon.dataset.type === type;
      icon.classList.toggle('is-dim', !match);
      icon.inert = !match;
      if (match) shown += 1;
    });
    status.textContent = shown + ' of ' + icons.length + ' projects' +
      (type === 'all' ? '' : ': ' + button.textContent);
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () { filter(button); });
  });
})();
