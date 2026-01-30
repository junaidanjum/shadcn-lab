# shadcn-lab

Dev-only, in-app UI playground for **shadcn/ui** components.
See what components you have — directly inside your app.

No Storybook. No config. Just a `/playground` page.

## Why

shadcn/ui is code-first.
Docs show components, but not **your** components, with **your** theme.

`shadcn-lab` adds a local playground so you can:

- visually browse components
- see variants and states
- build and tweak faster

## Install

```bash
pnpx shadcn-lab
```

## What it does

- Detects Next.js App Router (`app/` or `src/app`)
- Adds `/playground` route
- Uses real shadcn components
- Disabled automatically in production
- Warns if required components are missing

## Requirements

- Next.js (App Router)
- Tailwind CSS
- shadcn/ui installed

If components are missing, you’ll see:

```bash
npx shadcn add button input label
```

## Usage

Run dev server:

```bash
npm run dev
```

Open:

```
http://localhost:3000/playground
```

## Philosophy

- Zero magic
- No config mutation
- No auto-installs
- Easy to delete

This is a **developer utility**, not a framework.

## Roadmap

- More components
- Better grouping
- Optional sections
- Registry support

## Unofficial

This project is **not affiliated with shadcn/ui**.
It simply follows the same philosophy.
