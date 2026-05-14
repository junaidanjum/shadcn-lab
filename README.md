# shadcn-lab

In-app playground to preview **shadcn/ui** components in your project.
See what components you have — directly inside your app.

No Storybook. No config. **Just one file.**

[![npm version](https://img.shields.io/npm/v/shadcn-lab)](https://www.npmjs.com/package/shadcn-lab)

## Why

shadcn/ui is code-first.
Docs show components, but not **your** components, with **your** theme.

`shadcn-lab` adds a local playground so you can:

- visually browse components
- see variants and states
- build and tweak faster

## Install

`shadcn-lab` ships as a [shadcn registry](https://ui.shadcn.com/docs/registry). Use the official `shadcn` CLI:

```bash
npx shadcn@latest add https://shadcn-lab.vercel.app/r/playground.json
```

That's it. One file lands at `app/playground/page.tsx` (or `src/app/playground/page.tsx` if you use `src/`). Missing shadcn components are installed automatically.

## What it does

- Adds a single `app/playground/page.tsx` file
- Uses your real shadcn components
- Disabled automatically in production
- Pulls in any missing components via the shadcn CLI

## Requirements

- Next.js (App Router)
- Tailwind CSS
- shadcn/ui set up (`components.json` present)

## Usage

Run dev server:

```bash
npm run dev
```

Open `/playground`:

```
http://localhost:3000/playground
```

## Example

<img width="2000" height="1527" alt="image" src="https://github.com/user-attachments/assets/6b815882-ded6-4f98-834a-99d68342146e" />

## Philosophy

- Zero magic
- One file
- No config mutation
- No auto-installs (the shadcn CLI handles deps explicitly)
- Easy to delete (`rm app/playground/page.tsx`)

This is a **developer utility**, not a framework.

## Current support

`shadcn-lab` currently includes a playground for:

- Button
- Input
- Accordion
- Alert
- Alert Dialog
- Avatar
- Badge
- Breadcrumb
- Card
- Tabs
- Dialog
- Select
- Switch
- Tooltip
- Checkbox

More components are coming soon.

## Contributing

This project is intentionally small and opinionated.

If you want to contribute:

- Add new section components to `templates/playground/app/playground/page.tsx`
- Run `npm run build:registry` to regenerate `apps/preview/public/r/playground.json`
- Keep changes minimal and easy to remove

No complex setup or tooling is expected.

Small, focused PRs are welcome.

## Roadmap

- More components
- Better grouping
- Optional sections
- Per-component registry entries

## Development notes

The `apps/preview` directory is a local Next.js app used to preview and maintain the playground template. It also hosts the registry endpoint at `/r/playground.json`. It is for development only and is not published to npm.

To regenerate the registry after editing the template:

```bash
npm run build:registry
```

## Unofficial

This project is **not affiliated with shadcn/ui**.
It simply follows the same philosophy.
