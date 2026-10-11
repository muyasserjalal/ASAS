// Log-in page: sign up and log in with email and password (SPEC.md: The log-in gate).
(function () {
  var T = window.ASAS_T || function (k) { return k; };
  var form = document.getElementById('auth-form');
  var email = document.getElementById('email');
  var pw = document.getElementById('password');
  var btn = document.getElementById('submit');
  var msg = document.getElementById('msg');
  var ask = document.getElementById('switch-ask');
  var toggle = document.getElementById('switch-btn');
  var mode = 'login';
  var lastMsg = '';

  function say(key) { lastMsg = key; msg.textContent = key ? T(key) : ''; }
  function render() {
    var login = mode === 'login';
    btn.textContent = T(login ? 'btn.login' : 'btn.create');
    ask.textContent = T(login ? 'ask.new' : 'ask.have');
    toggle.textContent = T(login ? 'toggle.create' : 'toggle.login');
    pw.setAttribute('autocomplete', login ? 'current-password' : 'new-password');
    msg.textContent = lastMsg ? T(lastMsg) : '';
  }
  document.addEventListener('asas:lang', render);
  render();

  if (!window.supabase) { say('m.unreachable'); btn.disabled = true; return; }
  var sb = window.supabase.createClient(window.ASAS_SUPABASE_URL, window.ASAS_SUPABASE_KEY);

  // Already logged in: go to the home page.
  sb.auth.getSession().then(function (res) {
    if (res.data && res.data.session) window.location.replace('index.html');
  });

  toggle.addEventListener('click', function () { mode = mode === 'login' ? 'signup' : 'login'; lastMsg = ''; render(); });

  function explain(err) {
    var t = String((err && err.message) || '').toLowerCase();
    if (t.indexOf('invalid login') > -1) return 'm.wrong';
    if (t.indexOf('already') > -1 && t.indexOf('regist') > -1) return 'm.exists';
    if (t.indexOf('password') > -1 && (t.indexOf('at least') > -1 || t.indexOf('short') > -1 || t.indexOf('weak') > -1)) return 'm.short';
    if (t.indexOf('email') > -1 && t.indexOf('invalid') > -1) return 'm.invalid';
    if (t.indexOf('rate') > -1 || t.indexOf('too many') > -1) return 'm.rate';
    if (t.indexOf('fetch') > -1 || t.indexOf('network') > -1) return 'm.unreachable';
    return 'm.generic';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var address = email.value.trim();
    var password = pw.value;
    if (!address || !password) { say('m.enter'); return; }
    if (mode === 'signup' && password.length < 6) { say('m.short'); return; }

    btn.disabled = true;
    say(mode === 'login' ? 'm.loggingIn' : 'm.creating');
    var request = mode === 'login'
      ? sb.auth.signInWithPassword({ email: address, password: password })
      : sb.auth.signUp({ email: address, password: password });

    request.then(function (res) {
      if (res.error) { say(explain(res.error)); btn.disabled = false; return; }
      if (res.data && res.data.session) { window.location.replace('index.html'); return; }
      mode = 'login'; say('m.created'); render();
      btn.disabled = false;
    }).catch(function (err) { say(explain(err)); btn.disabled = false; });
  });
})();
