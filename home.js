// home.js, Scheme B: the toolbar. Filter the projects by type, and switch
// between the icon field and the list.
(function () {
  var filters = document.querySelectorAll('[data-filter]');
  var views = document.querySelectorAll('[data-view]');
  var icons = document.querySelectorAll('#view-icons [data-type]');
  var rows = document.querySelectorAll('#view-list [data-type]');
  var status = document.querySelector('.toolbar__status');

  function press(buttons, chosen) {
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button === chosen));
    });
  }

  // In the icon field, projects outside the filter stay in place but step
  // back, so the groups read at a glance. In the list they are removed.
  function filter(button) {
    var type = button.dataset.filter;
    var shown = 0;
    press(filters, button);
    icons.forEach(function (icon) {
      var match = type === 'all' || icon.dataset.type === type;
      icon.classList.toggle('is-dim', !match);
      icon.inert = !match;
      if (match) shown += 1;
    });
    rows.forEach(function (row) {
      row.hidden = !(type === 'all' || row.dataset.type === type);
    });
    status.textContent = shown + ' of ' + icons.length + ' projects' +
      (type === 'all' ? '' : ': ' + button.textContent);
  }

  function view(button) {
    press(views, button);
    document.getElementById('view-icons').hidden = button.dataset.view !== 'icons';
    document.getElementById('view-list').hidden = button.dataset.view !== 'list';
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () { filter(button); });
  });

  views.forEach(function (button) {
    button.addEventListener('click', function () { view(button); });
  });
})();
