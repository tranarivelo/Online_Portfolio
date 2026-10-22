// Langue, traductions et éléments partagés par toutes les pages.
(function () {
  const LANGS = ["fr", "en"];
  const STORAGE_KEY = "lang";
  const listeners = [];

  function readStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* stockage indisponible : la langue ne sera simplement pas mémorisée */
    }
  }

  function initialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    const stored = readStoredLang();
    if (LANGS.includes(stored)) return stored;
    return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  let lang = initialLang();

  // Clé d'interface → texte dans la langue courante.
  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || key;
  }

  // Champ de données bilingue { fr, en } → valeur dans la langue courante.
  function tr(value) {
    if (value == null) return "";
    if (typeof value === "string" || Array.isArray(value)) return value;
    return value[lang] ?? value.fr ?? "";
  }

  function applyTranslations(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      // Format : "attribut:clé; attribut:clé"
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
  }

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    storeLang(lang);
    render();
  }

  function render() {
    document.documentElement.lang = lang;
    applyTranslations();
    document.querySelectorAll(".lang-switch [data-lang]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === lang);
    });
    listeners.forEach((fn) => fn(lang));
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }

  window.Site = {
    get lang() {
      return lang;
    },
    t,
    tr,
    escapeHtml,
    onLangChange(fn) {
      listeners.push(fn);
    },
    start() {
      render();
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.querySelector(".lang-switch");
    if (switcher) {
      switcher.addEventListener("click", () => setLang(lang === "fr" ? "en" : "fr"));
    }

    const year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();

    // Ombre discrète sous l'en-tête une fois la page défilée.
    const header = document.querySelector(".site-header");
    if (header) {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  });
})();
