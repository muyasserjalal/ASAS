// Log-in page: sign up and log in with email and password (SPEC.md: The log-in gate).
(function () {
  var form = document.getElementById('auth-form');
  var email = document.getElementById('email');
  var pw = document.getElementById('password');
  var btn = document.getElementById('submit');
  var msg = document.getElementById('msg');
  var ask = document.getElementById('switch-ask');
  var toggle = document.getElementById('switch-btn');
  var mode = 'login';

  function say(text) { msg.textContent = text; }

  if (!window.supabase) {
    say('The log-in service could not be reached. Check your connection and try again.');
    btn.disabled = true;
    return;
  }
  var sb = window.supabase.createClient(window.ASAS_SUPABASE_URL, window.ASAS_SUPABASE_KEY);

  // Already logged in: go to the home page.
  sb.auth.getSession().then(function (res) {
    if (res.data && res.data.session) window.location.replace('index.html');
  });

  function setMode(m) {
    mode = m;
    var login = m === 'login';
    btn.textContent = login ? 'Log in' : 'Create account';
    ask.textContent = login ? 'New here?' : 'Have an account?';
    toggle.textContent = login ? 'Create an account' : 'Log in';
    pw.setAttribute('autocomplete', login ? 'current-password' : 'new-password');
    say('');
  }
  toggle.addEventListener('click', function () { setMode(mode === 'login' ? 'signup' : 'login'); });

  function explain(err) {
    var t = String((err && err.message) || '').toLowerCase();
    if (t.indexOf('invalid login') > -1) return 'That email and password do not match. Try again, or create an account.';
    if (t.indexOf('already') > -1 && t.indexOf('regist') > -1) return 'An account with this email already exists. Log in instead.';
    if (t.indexOf('password') > -1 && (t.indexOf('at least') > -1 || t.indexOf('short') > -1 || t.indexOf('weak') > -1)) return 'Use a password of at least 6 characters.';
    if (t.indexOf('email') > -1 && t.indexOf('invalid') > -1) return 'Enter a valid email address.';
    if (t.indexOf('rate') > -1 || t.indexOf('too many') > -1) return 'Too many tries. Wait a minute, then try again.';
    if (t.indexOf('fetch') > -1 || t.indexOf('network') > -1) return 'The log-in service could not be reached. Check your connection and try again.';
    return (err && err.message) || 'Something went wrong. Try again.';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var address = email.value.trim();
    var password = pw.value;
    if (!address || !password) { say('Enter your email and password.'); return; }
    if (mode === 'signup' && password.length < 6) { say('Use a password of at least 6 characters.'); return; }

    btn.disabled = true;
    say(mode === 'login' ? 'Logging in…' : 'Creating your account…');
    var request = mode === 'login'
      ? sb.auth.signInWithPassword({ email: address, password: password })
      : sb.auth.signUp({ email: address, password: password });

    request.then(function (res) {
      if (res.error) { say(explain(res.error)); btn.disabled = false; return; }
      if (res.data && res.data.session) { window.location.replace('index.html'); return; }
      say('Account created. Confirm your email, then log in.');
      setMode('login');
      btn.disabled = false;
    }).catch(function (err) { say(explain(err)); btn.disabled = false; });
  });
})();
