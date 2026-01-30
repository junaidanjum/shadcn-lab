#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const force = args.includes("--force");

const cwd = process.cwd();
const templateDir = path.join(__dirname, "../templates/playground");

// 1) Detect Next.js App Router (app/ or src/app)
const appDir = fs.existsSync(path.join(cwd, "src/app"))
  ? path.join(cwd, "src/app")
  : fs.existsSync(path.join(cwd, "app"))
    ? path.join(cwd, "app")
    : null;

if (!appDir) {
  console.error(
    "shadcn-lab: No app/ or src/app found. Are you in a Next.js App Router project?",
  );
  process.exit(1);
}

// 2) Detect shadcn components directory
function findComponentsDir() {
  if (fs.existsSync(path.join(cwd, "components/ui"))) {
    return path.join(cwd, "components/ui");
  }
  if (fs.existsSync(path.join(cwd, "src/components/ui"))) {
    return path.join(cwd, "src/components/ui");
  }
  return null;
}

// 3) Warn about missing shadcn components
const requiredComponents = ["button", "input", "label"];
const componentsDir = findComponentsDir();
const missing = [];

if (!componentsDir) {
  missing.push(...requiredComponents);
} else {
  for (const name of requiredComponents) {
    if (!fs.existsSync(path.join(componentsDir, `${name}.tsx`))) {
      missing.push(name);
    }
  }
}

if (missing.length > 0) {
  console.log("\nshadcn-lab: missing shadcn components\n");
  console.log("Run this first:\n");
  console.log(`  npx shadcn add ${missing.join(" ")}\n`);
}

// 4) Copy helpers
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 5) Handle existing playground
const targetPlaygroundDir = path.join(appDir, "playground");

if (fs.existsSync(targetPlaygroundDir)) {
  if (!force) {
    console.log(
      "shadcn-lab: /playground already exists.\n" +
        "Run again with --force to overwrite.",
    );
    process.exit(0);
  }

  fs.rmSync(targetPlaygroundDir, { recursive: true, force: true });
}

// 6) Copy playground
copyDir(path.join(templateDir, "app/playground"), targetPlaygroundDir);

console.log("shadcn-lab: playground added at /playground");
