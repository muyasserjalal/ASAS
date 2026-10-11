// Log-in gate: every page except login.html sends signed-out visitors to login.html.
(function () {
  var root = document.documentElement;
  root.classList.add('gate'); // hides the page until the session is checked

  function toLogin() { window.location.replace('login.html'); }

  // Fast check: no saved session at all means go straight to log-in.
  var ref = 'kumcrrcbjqiaohgafxow';
  try {
    if (!window.localStorage.getItem('sb-' + ref + '-auth-token')) { toLogin(); return; }
  } catch (e) { /* storage blocked: fall through to the full check */ }

  if (!window.supabase) { toLogin(); return; }
  var sb = window.supabase.createClient(window.ASAS_SUPABASE_URL, window.ASAS_SUPABASE_KEY);

  function check() {
    sb.auth.getSession().then(function (res) {
      if (res.data && res.data.session) { root.classList.remove('gate'); }
      else { toLogin(); }
    }).catch(toLogin);
  }
  check();

  // Coming back with the browser's Back button after logging out: check again.
  window.addEventListener('pageshow', function (e) { if (e.persisted) check(); });

  sb.auth.onAuthStateChange(function (event) { if (event === 'SIGNED_OUT') toLogin(); });

  // Log out button on every page.
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-logout]') : null;
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = 'Logging out';
    sb.auth.signOut().then(toLogin, toLogin);
  });
})();
