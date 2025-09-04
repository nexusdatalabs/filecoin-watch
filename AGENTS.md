# Repository Guidelines

## Architecture Overview

- Fully static site built with Astro + MDX. Content lives in `src/pages` and renders through the `src/layouts`.
- Data is read from scripts under `src/data/`.
- Only hydrate where needed (Astro islands).
- Performant site (only load the required data, render charts appropiately, ...). Ship only the fields/points each chart needs.
- As vanilla as possible.
- Follow a minimal, monospace/terminal like design aesthetic.

## Project Structure & Module Organization

- `src/pages/*.mdx`: Pages and content.
- `src/layouts/*.astro`: Shared layouts.
- `src/data/`: Checked-in datasets (e.g., `daily_metrics.csv`).
- `datasets/*.sh`: Data refresh scripts (offline step, see below).
- `public/`: Static assets served as-is.
- `dist/`: Build output (generated; do not edit).

## Build, Test, and Development Commands

- `npm install`: Install dependencies.
- `npm run dev`: Start local dev server at `http://localhost:4321`.
- `npm run build`: Build the site to `dist/`. Can be done with `--ignore-scripts` to use local data.
- `npm run preview`: Serve the built site locally.
- `npx astro check`: Type/diagnostics check for `.astro`, MDX, and TS.

## Coding Style & Naming Conventions

- Semantic and native HTML.
- Keep pages declarative; prefer small, pure helpers if adding TS utilities.
- Charts follow https://www.chartjs.org/docs/ best practices.

## Testing Guidelines

- Run `npx astro check` and `npm run build`.

## Commit & Pull Request Guidelines

- Commit with atomic, clear and descriptive messages preceded by a relevant emoji. E.g: `✨ Add style feature` or `🐛 Fix layout bug`
- PRs should include purpose, actions, and manual steps to verify (`dev`, `build`, `preview`). Link related issues.
