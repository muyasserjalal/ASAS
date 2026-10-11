// English and Arabic (DESIGN.md: Languages; SPEC.md: Languages).
// English lives in the HTML. Arabic lives here. Elements with data-i18n="key" switch language.
(function () {
  var KEY = 'asas-lang';
  var root = document.documentElement;
  var lang = 'en';
  try { if (window.localStorage.getItem(KEY) === 'ar') lang = 'ar'; } catch (e) {}

  function setDir(l) { root.setAttribute('lang', l); root.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr'); }
  setDir(lang);
  if (lang === 'ar') root.classList.add('lang-pending'); // hide until the Arabic is in place

  var AR = {
  "footer.where": "ميامي · جدة",
  "title.index": "أساس للعمارة",
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "الخدمات",
  "nav.studio": "الاستوديو",
  "skip": "تخطَّ إلى المحتوى",
  "logout": "تسجيل الخروج",
  "found.cap": "<span lang=\"en\">Foundation</span>",
  "home.h1": "العمارة لا تكون أقوى من أساسها.",
  "mission": "«نؤمن بأن العمارة لا تكون أقوى من أساسها. تصمّم أساس انطلاقًا من المبادئ الأولى: إنشاء صادق، ومكان حقيقي، والناس الذين سيعيشون مع النتيجة.»",
  "home.line": "عمارة بين ميامي وجدة.",
  "lbl.index": "الفهرس",
  "idx.about": "معنى أساس، وما تقوم عليه الممارسة.",
  "idx.services": "ما نصمّمه، وكيف ينتقل المشروع من الرسم الأول إلى جولة التسليم الأخيرة.",
  "idx.studio": "مدينتان: ميامي وجدة.",
  "lbl.detail": "تفصيل",
  "title.about": "من نحن — أساس للعمارة",
  "lbl.name": "الاسم",
  "about.h1": "اسم «أساس» يعني الأساس.",
  "about.p1": "كل مبنى يبدأ من أساسه، ومن هنا تبدأ هذه الممارسة. لا يُرى الأساس بعد اكتمال البناء، لكنه العنصر الذي يعتمد عليه كل قرار بعده. وهذا هو الدور الذي تؤديه أساس لعملائها: القاعدة الهادئة المتينة لعمل يبقى بعد أن تزول الموضة ويتغيّر المُلّاك.",
  "about.p2": "والاسم شخصي أيضًا: طريقة لحمل كلمة عربية، ونهج يبدأ من المبادئ الأولى، إلى ممارسة تُبنى بين ميامي وجدة.",
  "lbl.mission": "الرسالة",
  "lbl.built": "الأسس",
  "b1": "اسأل لمن يخدم المشروع قبل أن تسأل كيف يبدو.",
  "b1.src": "مرجع: <span lang=\"en\">MASS Design Group</span>",
  "b2": "اعرف بدقة لمن تبني.",
  "b2.src": "مرجع: <span lang=\"en\">IKEA</span>",
  "b3": "اربط الطموح بمكان حقيقي. وبالنسبة لأساس، هذا المكان هو محور ميامي وجدة.",
  "b3.src": "مرجع: نيوم",
  "lbl.practice": "المكتب",
  "practice.lead": "أساس ممارسة قائمة على الخبرة.",
  "practice.p": "تعتمد على حُكم المعماري المؤسس وسمعته، لا على حجم العمل أو تخصص ضيّق. وتبقى صغيرة عن قصد، ولا تضم معماريين جددًا إلا بقدر ما تسمح به السمعة والتوصيات.",
  "mentor.h": "الإرشاد",
  "mentor.p": "يحصل كل عضو مستقبلي في الفريق على مسار منظّم نحو الترخيص المهني: تتبّع ساعات <span lang=\"en\">AXP</span>، وتعويض رسوم الاختبار، ووقت للدراسة ضمن أسبوع العمل.",
  "ph1.h": "التصميم المبدئي",
  "ph1.p": "نؤكد أهدافك وقائمة الغرف والميزانية. ندرس الموقع واشتراطات التنظيم والأشجار والشمس والرياح، ثم نُعدّ خيارين أو ثلاثة خيارات تصميمية ونطوّر الخيار الذي تختاره.",
  "ph2.h": "تطوير التصميم",
  "ph2.p": "نطوّر التصميم المعتمد إلى مبنى متكامل: مقاسات الغرف، والأنظمة الإنشائية والميكانيكية مع المهندسين، والمواد الخارجية والنوافذ والأبواب.",
  "ph3.h": "المخططات التنفيذية",
  "ph3.p": "نُعدّ المخططات والمواصفات الكاملة التي يحتاجها المقاول للتسعير والتنفيذ، وننسّقها مع المهندسين، ونقدّمها للحصول على الترخيص.",
  "ph4.h": "الإشراف على التنفيذ",
  "ph4.p": "نمثّلك أثناء البناء: زيارات منتظمة للموقع، ومراجعة المخططات التفصيلية والعيّنات، والرد على أسئلة المقاول، وقائمة الملاحظات النهائية، وجولة التسليم الأخيرة.",
  "ex1.h": "طرح المناقصة واختيار المقاول",
  "ex1.p": "نرسل المخططات إلى مقاولين مؤهلين، ونقارن العروض، ونساعدك على الاختيار.",
  "ex2.h": "التصميم الداخلي",
  "ex2.p": "التشطيبات، والنجارة، والإضاءة، والتجهيزات، وتوزيع الأثاث.",
  "ex3.h": "تنسيق المواقع",
  "ex3.p": "النباتات، والأرضيات، وسطح المسبح، وإضاءة الموقع، بالتعاون مع مصمم تنسيق مواقع مرخّص.",
  "st1.h": "تواصل مباشر مع المعماري",
  "st1.p": "لا وسطاء. تعمل مع المعماري المؤسس في كل قرار.",
  "st2.h": "التصميم من المبادئ الأولى",
  "st2.p": "كل قرار في المواد والفراغ مبرَّر بطريقة عيشك الفعلية في المكان، لا بالموضة.",
  "st3.h": "فهم للثقافتين",
  "st3.p": "بممارستها بين الولايات المتحدة والسعودية، تنقل أساس بين لغتي التصميم وتوقعات كلٍّ منهما.",
  "st4.h": "دقة المكاتب الكبيرة وقرب المكاتب الصغيرة",
  "st4.p": "يُختبر كل مشروع عبر شبكة استشارية في القانون والمال والتصميم، لا برأي شخص واحد فقط.",
  "title.services": "الخدمات — أساس للعمارة",
  "svc.h1": "ما نصمّمه",
  "svc.lead": "منازل خاصة وتجديدات كبرى، ومشاريع تجارية، ومبانٍ عامة، في جنوب فلوريدا وجدة.",
  "lbl.run": "مراحل المشروع",
  "lbl.add": "خدمات إضافية",
  "lbl.why": "لماذا أساس",
  "title.studio": "الاستوديو — أساس للعمارة",
  "studio.h1": "تعمل أساس بين مدينتين.",
  "lbl.offices": "المكاتب",
  "city.miami": "ميامي",
  "city.jeddah": "جدة",
  "city.jeddah.p": "جدة، المملكة العربية السعودية",
  "lbl.contact": "التواصل",
  "lbl.principal": "المؤسس",
  "person.name": "مُيسّر جلال",
  "person.role": "المعماري المؤسس",
  "person.bio": "درس في كلية العمارة بجامعة ميامي، وتدرّب في استوديوهات في الولايات المتحدة والسعودية.",
  "title.login": "تسجيل الدخول — أساس للعمارة",
  "found": "أساس · <span lang=\"en\">Foundation</span>",
  "f.email": "البريد الإلكتروني",
  "f.password": "كلمة المرور"
};
  var MSG = {
  "en": {
    "btn.login": "Log in",
    "btn.create": "Create account",
    "ask.new": "New here?",
    "ask.have": "Have an account?",
    "toggle.create": "Create an account",
    "toggle.login": "Log in",
    "m.enter": "Enter your email and password.",
    "m.short": "Use a password of at least 6 characters.",
    "m.wrong": "That email and password do not match. Try again, or create an account.",
    "m.exists": "An account with this email already exists. Log in instead.",
    "m.invalid": "Enter a valid email address.",
    "m.rate": "Too many tries. Wait a minute, then try again.",
    "m.unreachable": "The log-in service could not be reached. Check your connection and try again.",
    "m.generic": "Something went wrong. Try again.",
    "m.created": "Account created. Confirm your email, then log in.",
    "m.loggingIn": "Logging in…",
    "m.creating": "Creating your account…",
    "logout.busy": "Logging out",
    "lang.label": "Switch to English",
    "lang.label.ar": "التبديل إلى العربية"
  },
  "ar": {
    "btn.login": "تسجيل الدخول",
    "btn.create": "إنشاء حساب",
    "ask.new": "جديد هنا؟",
    "ask.have": "لديك حساب؟",
    "toggle.create": "أنشئ حسابًا",
    "toggle.login": "سجّل الدخول",
    "m.enter": "أدخل بريدك الإلكتروني وكلمة المرور.",
    "m.short": "استخدم كلمة مرور من 6 أحرف على الأقل.",
    "m.wrong": "البريد الإلكتروني وكلمة المرور غير متطابقين. حاول مرة أخرى، أو أنشئ حسابًا.",
    "m.exists": "يوجد حساب بهذا البريد الإلكتروني. سجّل الدخول بدلًا من ذلك.",
    "m.invalid": "أدخل بريدًا إلكترونيًا صحيحًا.",
    "m.rate": "محاولات كثيرة. انتظر دقيقة ثم حاول مرة أخرى.",
    "m.unreachable": "تعذّر الوصول إلى خدمة تسجيل الدخول. تحقّق من اتصالك وحاول مرة أخرى.",
    "m.generic": "حدث خطأ. حاول مرة أخرى.",
    "m.created": "تم إنشاء الحساب. أكّد بريدك الإلكتروني ثم سجّل الدخول.",
    "m.loggingIn": "جارٍ تسجيل الدخول…",
    "m.creating": "جارٍ إنشاء حسابك…",
    "logout.busy": "جارٍ تسجيل الخروج"
  }
};
  var EN = {};

  window.ASAS_LANG = function () { return lang; };
  window.ASAS_T = function (key) { return (MSG[lang] && MSG[lang][key]) || MSG.en[key] || key; };

  function apply() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], key = el.getAttribute('data-i18n');
      if (!(key in EN)) EN[key] = el.innerHTML;
      el.innerHTML = (lang === 'ar' && AR[key] != null) ? AR[key] : EN[key];
    }
    var btns = document.querySelectorAll('[data-lang-toggle]');
    for (var j = 0; j < btns.length; j++) {
      btns[j].textContent = lang === 'ar' ? 'English' : 'العربية';
      btns[j].setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
      btns[j].setAttribute('aria-label', lang === 'ar' ? MSG.en['lang.label'] : MSG.en['lang.label.ar']);
    }
    root.classList.remove('lang-pending');
    var ev; try { ev = new CustomEvent('asas:lang', { detail: lang }); } catch (e) { ev = document.createEvent('Event'); ev.initEvent('asas:lang', true, true); }
    document.dispatchEvent(ev);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-lang-toggle]') : null;
    if (!b) return;
    lang = lang === 'ar' ? 'en' : 'ar';
    try { window.localStorage.setItem(KEY, lang); } catch (err) {}
    setDir(lang);
    apply();
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
