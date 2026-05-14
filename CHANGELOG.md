# Changelog

## 0.2.0

**Breaking change.** Migrated from a custom CLI to a shadcn registry.

- Install command changed:
  - Old: `pnpx shadcn-lab`
  - New: `npx shadcn@latest add https://shadcn-lab.vercel.app/r/playground.json`
- Playground now lands as a single `app/playground/page.tsx` file (previously 18 files under `app/playground/`)
- Removed the `shadcn-lab` CLI binary (`bin/index.js`)
- Missing shadcn components are installed automatically by the shadcn CLI

## 0.1.8

- Added Dialog component
- Added Select component
- Added Switch component
- Added Tooltip component
- Added Checkbox component

## 0.1.7

- Added Tabs component
- Added Card component

## 0.1.6

- Added Breadcrumb component

## 0.1.5

- Added Badge component

## 0.1.4

- Added Avatar component

## 0.1.3

- Added Alert Dialog component

## 0.1.2

- Added Alert component

## 0.1.1

- Added Accordion component

## 0.1.0

- Initial release
- Added Button and Input components
