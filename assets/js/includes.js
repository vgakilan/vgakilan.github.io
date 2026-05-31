function loadInclude(id, file) {
  const container = document.getElementById(id);
  if (!container) return;

  fetch(`${file}?v=20260531`)
    .then(res => res.text())
    .then(html => { container.innerHTML = html; });
}

loadInclude("header", "/assets/includes/header.html");
loadInclude("footer", "/assets/includes/footer.html");
