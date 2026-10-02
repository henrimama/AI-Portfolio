// auth.js: session check, redirects, log in, sign up and log out.
// Uses Supabase Auth, loaded from its CDN script tag. See SPEC.md, "The log-in gate".
(function () {
  var root = document.documentElement;
  var onLoginPage = root.hasAttribute('data-login');
  var config = window.SUPABASE_CONFIG || {};
  var hasKeys = Boolean(config.url && config.anonKey);
  var client = hasKeys && window.supabase
    ? window.supabase.createClient(config.url, config.anonKey)
    : null;

  function show() { root.classList.remove('gate'); }

  function go(page) { window.location.replace(page); }

  if (onLoginPage) {
    // A visitor who is already signed in goes straight to the home page.
    if (client) {
      client.auth.getSession().then(function (result) {
        if (result.data.session) go('index.html');
      });
    }
    setUpForm();
  } else if (!hasKeys) {
    // Setup mode: no Supabase keys yet, so there is nothing to check against.
    console.warn('Log-in gate is off: add the Supabase URL and anon key to supabase-config.js.');
    show();
  } else if (!client) {
    go('login.html');
  } else {
    client.auth.getSession().then(function (result) {
      if (result.data.session) show();
      else go('login.html');
    }).catch(function () { go('login.html'); });
  }

  // Log out, from the menu on every gated page.
  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-logout]');
    if (!link) return;
    event.preventDefault();
    function done() { window.location.href = 'login.html'; }
    if (client) client.auth.signOut().then(done, done);
    else done();
  });

  function setUpForm() {
    var form = document.getElementById('auth-form');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var submit = form.querySelector('.form__submit');
    var toggle = form.querySelector('.form__switch');
    var message = document.querySelector('.form__message');
    var error = document.querySelector('.form__error');
    var signingUp = false;

    function say(element, text) {
      message.hidden = true;
      error.hidden = true;
      if (!text) return;
      element.textContent = text;
      element.hidden = false;
    }

    function setMode(signUp) {
      signingUp = signUp;
      submit.textContent = signUp ? 'Sign up' : 'Log in';
      toggle.textContent = signUp ? 'Have an account? Log in' : 'No account? Sign up';
      password.setAttribute('autocomplete', signUp ? 'new-password' : 'current-password');
    }

    if (!hasKeys) {
      say(error, 'Log-in is not set up yet. Add the Supabase project URL and anon key to supabase-config.js.');
    } else if (!client) {
      say(error, 'Log-in could not load. Check your connection and try again.');
    }

    toggle.addEventListener('click', function () {
      setMode(!signingUp);
      say(error, '');
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!client) return;
      var details = { email: email.value.trim(), password: password.value };
      if (!details.email || !details.password) {
        say(error, 'Enter your email and password.');
        return;
      }
      submit.disabled = true;
      var request = signingUp
        ? client.auth.signUp(details)
        : client.auth.signInWithPassword(details);
      request.then(function (result) {
        submit.disabled = false;
        if (result.error) {
          say(error, result.error.message);
        } else if (result.data.session) {
          window.location.href = 'index.html';
        } else {
          // Sign-up with email confirmation switched on in Supabase.
          setMode(false);
          say(message, 'Check your email to confirm your account, then log in.');
        }
      }).catch(function () {
        submit.disabled = false;
        say(error, 'Something went wrong. Try again.');
      });
    });
  }
})();
