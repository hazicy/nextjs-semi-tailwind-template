[👉 点击这里查看中文 README](./README.zh-CN.md)

# Using Semi-UI with Next.js 14 and Tailwind CSS

## Features

✅ Built with:

* [Next.js 14](https://github.com/vercel/next.js) (App Router)
* [Semi-UI](https://github.com/DouyinFE/semi-design)
* [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
* [React 18](https://react.dev/)

---

## ✅ What Problem Does This Solve?

### ⚙️ Resolves Style Conflicts Between Tailwind CSS and Semi-UI

Tailwind's utility classes and Semi-UI components can clash in style priority.
This project configures custom `@layer` rules and import order to ensure consistent styling between the two frameworks.

---

## ❓ Why This Setup?

### 1. Why React 18 instead of React 19?

> As of Semi-UI v2.80, **React 19 is not supported**.
> React 18 is the latest stable version that works with Semi-UI.

---

### 2. Why Next.js 14 instead of Next.js 15?

> Next.js 15 App Router uses React 19 by default.
> **Due to Semi-UI's incompatibility with React 19**, Next.js 14 is used for stability.

---

### 3. Why Tailwind CSS v3 instead of v4?

> Tailwind CSS v4 introduces changes that **Semi-UI has not yet adapted to**.
> Tailwind v3 is fully compatible and stable in this setup.

---

### 4. Why Webpack instead of Turbopack or Rspack?

* **Turbopack**: Cannot build the official Semi Webpack plugin (`@douyinfe/semi-webpack-plugin`)
* **Rspack**: Only works with Next.js 15+, which isn’t viable due to React 19 dependency