## Purpose
Short guidance for AI coding agents to be productive in this repository (Vite + React template used for a learning exercise).

## Big picture
- **Stack:** React (JSX) + Vite. Entry: `index.html` -> `/src/main.jsx` -> `src/App.jsx`.
- **Bundler/Dev server:** `vite` with `@vitejs/plugin-react` (see `vite.config.js`). HMR is enabled by default.
- **Public assets:** Files in `public/` are served from the site root (example: `/vite.svg`). Project also uses `src/assets/` for imported images.

## Key scripts (from `package.json`)
- `npm run dev` — start Vite dev server (HMR).
- `npm run build` — produce production build into `dist`.
- `npm run preview` — serve the built `dist` locally.
- `npm run lint` — run ESLint across the repo (`eslint .`).

Run commands with the repository root as CWD. Example (PowerShell):
```
npm install
npm run dev
```

## Project-specific conventions and patterns
- Files use plain `.jsx` (not `.tsx`). Keep React components as default exports (see `src/App.jsx`).
- `createRoot(document.getElementById('root'))` + `StrictMode` is the mounting pattern; follow that for new entry points.
- Prefer functional components with React hooks (this project demonstrates `useState` in `src/App.jsx`).
- CSS is global (see `src/index.css` and `src/App.css`) — not using CSS modules by default.
- Asset imports: use relative imports from `src/` (e.g. `import logo from './assets/react.svg'`) or root-absolute paths to files in `public/` (e.g. `/vite.svg`).
- Keep `type: "module"` in `package.json`; code and Vite expect ESM imports.

## Linting & developer checks
- ESLint is configured; run `npm run lint` to find style and common issues. See `eslint.config.js` if you need to align rules.

## Debugging and common workflows
- Quick change + verify: edit `src/App.jsx` (or other `src` files) and save — Vite HMR should update the browser instantly.
- If HMR does not reflect changes, check the dev server console and `vite.config.js` plugin entries.
- To validate production output, run `npm run build` then `npm run preview` and inspect `localhost:4173` (default Vite preview port) or whatever port the preview prints.

## Integration points & constraints
- No backend or API integration present in this repo — it's a purely client-side demo. If adding API calls, pick a new service module under `src/` and keep network code separate from presentational components.
- External dependencies are declared in `package.json`; prefer adding dev-only tools as `devDependencies`.

## Files to inspect for context/examples
- `package.json` — scripts and dependency list
- `vite.config.js` — Vite plugin setup
- `index.html` — HTML entry and root mount
- `src/main.jsx` — bootstrapper (StrictMode + createRoot)
- `src/App.jsx` — primary example of conditional rendering and state

## Examples (explicit pointers)
- Conditional rendering: look at `src/App.jsx` around the `showtbn` state and the `&&` usage to toggle a button.
- Asset references: `viteLogo` is referenced as `/vite.svg` in `src/App.jsx`; if you move assets to `public/` use root-absolute paths.

## What not to change without context
- Avoid changing `index.html` path, `src/main.jsx` bootstrap pattern, or `type: "module"` in `package.json` unless you understand Vite/ESM implications.

## When you need more info
If guidance is ambiguous, ask for these specifics:
- Intended target environment (browsers and Node version).
- Whether this repository should be converted to TypeScript.
- Any intended API/backend to integrate with and its expected shape.

---
If anything here is unclear or you'd like more examples (tests, CI, or contribution guidelines), tell me which area to expand.
