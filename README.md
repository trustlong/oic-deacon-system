# OIC Deacon Response System

A wiki and (future) operational system for the OIC church deacons to respond to the
tangible needs of congregation members — following the pattern of **Acts 6**.

Built with [Quartz](https://quartz.jzhao.xyz/) (v4), published from an Obsidian vault.

## Structure

- `content/` — the Obsidian vault / site content
  - `index.md`, `need-help.md`, `handbook/`, `bylaws/`, `benevolence/`, `building-fund/`
    — **published** (congregation-facing) atomic notes
  - `design/` — **internal** working design of the response system (never published)
  - `reference/` — source documents (never published)
- `quartz.config.ts` — site config

## Publishing model

Only notes with `publish: true` in frontmatter are built into the public site
(`ExplicitPublish` filter), and `design/` + `reference/` are excluded via
`ignorePatterns`. **Member data (membership CSV, service roster) is gitignored and
never committed.**

## Local development

```sh
npm install
npx quartz build --serve   # → http://localhost:8080
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. Enable it under **Settings → Pages → Source: GitHub Actions**.
