# Filecoin Watch

Your explorer for Filecoin entities. Check different metrics for Clients, Providers, Allocators, ...

## 🏗️ Architecture

- Pages are markdown thanks to MDX.
- Scripts write data locally. Filter, transform in frontmatter. Slice the data server-side (Astro) to ship less data to the client.
- Interactive (hover to get values) chart.
- Collections based on rows in datasets (e.g. each use can have it's own page with custom charts, `/user/<id>`).
- Hydrate nothing by default; use Astro islands only where interactivity is required.
- Fully static website.
- Keep things as vanilla as possible.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
