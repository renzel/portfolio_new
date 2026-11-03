# rensel.dev

Trond Rensel's portfolio. It's plain HTML, CSS and a little JavaScript, with no framework, so the page's content is in the HTML for search engines, link previews and AI assistants.

## Layout

- `public/` is the site itself. `public/index.html` is the home page, and `public/privacy/` is the privacy notice for sales emails, which must keep its URL.
- `scripts/build.mjs` copies `public/` to `build/`, which is the folder the host serves.

## Commands

```bash
npm run dev
```

Serves `public/` locally.

```bash
npm run build
```

Writes the site to `build/`. It needs no `npm install`.

```bash
npm run format
```

Formats the code with Prettier, which needs `npm install` first.
