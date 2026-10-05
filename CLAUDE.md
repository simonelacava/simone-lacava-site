# Simone Lacava personal site

Astro static site, converted from a Claude Design export (one-page `index.html`
with inline styles). Source of truth is now the component tree below, not that
original export.

## Stack
- Astro 7 (static output, zero client JS unless you add an island)
- Plain CSS: global tokens in `src/styles/tokens.css`, per-component scoped
  `<style>` blocks in each `.astro` file
- Fonts self-hosted via `@fontsource/*`, imported in `src/layouts/Layout.astro`
- Repeating content (skills, fields, track record, kit, timeline) lives in
  typed data files under `src/data/`, rendered by one card/entry component
  per collection under `src/components/`

## Design rules to keep
- Fonts: Big Shoulders Display (headlines), Hanken Grotesk (body), IBM Plex Mono (labels).
- Colours: tokens in `src/styles/tokens.css` — paper, ink, muted, one accent (`--color-accent`). No extra accent colours.
- Copy style: plain short sentences. No em dashes, no semicolons, no "X, not Y" slogans.
- Must work at phone width with no horizontal scroll (verified).

## Adding content
- New field / track-record / skill / kit entry → add an object to the matching
  file in `src/data/`, not new markup.
- New page → add `src/pages/<name>.astro`; reuse `Layout.astro` and the
  section components.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Deployment
Static output (`npm run build` → `dist/`). Intended for Cloudflare Pages via
its GitHub-connected auto-build (domain: simonelacava.com) — no CI file is
committed here; configure the Pages → GitHub connection in the Cloudflare
dashboard after pushing this repo.

## Environment note
This machine needed the Microsoft Visual C++ Redistributable (x64) installed
for Astro 7's native markdown/build tooling to load — already installed as
part of this setup. If `astro build` ever fails with "Cannot find native
binding" again, that's the thing to check first.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
