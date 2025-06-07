
# Using Semi-UI with Next.js 14 and Tailwind CSS

## Features

* ✅ [Next.js 14](https://github.com/vercel/next.js) (`app` directory)
* ✅ [Semi-UI](https://github.com/DouyinFE/semi-design)
* ✅ [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
* ✅ [React 18](https://react.dev/)

---

## ✅ 解决的问题

* ⚙️ 修复了 **Tailwind CSS 与 Semi-UI 样式优先级冲突**
  使用 `@layer` 和自定义加载顺序，确保两者样式兼容。

---

## ❓ 为什么这样做？

### 1. 为什么使用 React 18 而不是 React 19？

> 截至 Semi UI v2.80，**仍未支持 React 19**，因此选择稳定的 React 18。

---

### 2. 为什么使用 Next.js 14 而不是 Next.js 15？

> 在 App Router 模式下，Next.js 15 默认绑定 React 19。
> **由于 Semi 还不兼容 React 19，因此仍使用 Next.js 14。**

---

### 3. 为什么使用 Tailwind CSS v3 而不是 v4？

> Semi 目前尚未适配 Tailwind CSS v4，因此使用兼容的 **Tailwind v3** 版本。

---

### 4. 为什么使用 Webpack 而不是 Turbopack 或 Rspack？

* **Turbopack：** 无法构建 Semi 官方 Webpack 插件（`@douyinfe/semi-webpack-plugin`）
* **Rspack：** 目前仅支持 Next.js 15+，不兼容当前需求

