(function () {
  const storageKey = "theme";
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function systemTheme() {
    return media.matches ? "dark" : "light";
  }

  function activeTheme() {
    return storedTheme() || systemTheme();
  }

  function applyTheme(theme, persist) {
    root.dataset.theme = theme;

    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Storage can be unavailable in restricted browser modes.
      }
    }

    updateToggle();
  }

  function updateToggle() {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;

    const theme = activeTheme();
    const nextTheme = theme === "dark" ? "light" : "dark";
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    button.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    button.title = `Switch to ${nextTheme} theme`;
  }

  function initToggle() {
    const button = document.querySelector(".theme-toggle");
    if (!button || button.dataset.themeReady === "true") return;

    button.dataset.themeReady = "true";
    button.addEventListener("click", function () {
      const nextTheme = activeTheme() === "dark" ? "light" : "dark";
      applyTheme(nextTheme, true);
    });
    updateToggle();
  }

  const savedTheme = storedTheme();
  if (savedTheme) {
    root.dataset.theme = savedTheme;
  }

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", function () {
      if (!storedTheme()) {
        delete root.dataset.theme;
        updateToggle();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initToggle);
  document.addEventListener("site:include-loaded", initToggle);
})();
