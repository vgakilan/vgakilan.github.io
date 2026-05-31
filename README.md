# vgakilan.github.io

Personal website for Akilan Govindaraj, hosted with GitHub Pages.

The site is a lightweight static website focused on writing and notes around insurance, technology, AI, enterprise systems, integrations, automation, and quality.

## Structure

```text
/
├── index.html              # Home
├── about/                  # About page
├── writing/                # Writing index
├── posts/                  # Individual posts
├── bytes/                  # Legacy redirect to /writing/
└── assets/                 # CSS, JavaScript, shared includes, and images
```

## Local Development

Run a local static server from the repository root:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/
```

The site uses shared header and footer includes loaded by `assets/js/includes.js`, so serving over HTTP is preferred over opening HTML files directly.

## Notes

- Keep the site simple: plain HTML, CSS, and JavaScript.
- Public navigation is `Home`, `Writing`, and `About`.
- Add new writing under `posts/` and link it from `writing/index.html`.
- Keep `/bytes/` as a compatibility redirect for older links.
