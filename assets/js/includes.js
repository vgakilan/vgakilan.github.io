function loadInclude(id, file) {
  const container = document.getElementById(id);
  if (!container) return;

  fetch(`${file}?v=20260531`)
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;
      document.dispatchEvent(new CustomEvent("site:include-loaded", {
        detail: { id, file }
      }));
    });
}

loadInclude("header", "/assets/includes/header.html");
loadInclude("footer", "/assets/includes/footer.html");
