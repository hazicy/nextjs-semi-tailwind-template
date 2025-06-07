[👉 Click here to view the English README](./README.md)

# 在 Next.js 14 中使用 Semi-UI 和 Tailwind CSS

## 功能特性

* ✅ [Next.js 14](https://github.com/vercel/next.js)（使用 `app` 目录）
* ✅ [Semi-UI](https://github.com/DouyinFE/semi-design)
* ✅ [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
* ✅ [React 18](https://react.dev/)

---

## ✅ 解决的问题

* ⚙️ 修复 **Tailwind CSS 与 Semi-UI 样式优先级冲突**
  通过使用 `@layer` 和自定义加载顺序，确保样式兼容。

---

## ❓ 为什么这样选择？

### 1. 为什么使用 React 18 而不是 React 19？

> 截至 Semi UI v2.80，**尚未支持 React 19**，因此选择稳定的 React 18。

---

### 2. 为什么使用 Next.js 14 而不是 Next.js 15？

> 在 App Router 模式下，Next.js 15 默认使用 React 19。
> **由于 Semi 还不兼容 React 19，因此选择 Next.js 14。**

---

### 3. 为什么使用 Tailwind CSS v3 而不是 v4？

> Semi 尚未适配 Tailwind CSS v4，当前使用兼容的 **Tailwind v3**。

---

### 4. 为什么使用 Webpack 而不是 Turbopack 或 Rspack？

* **Turbopack：** 无法构建 Semi 官方 Webpack 插件（`@douyinfe/semi-webpack-plugin`）
* **Rspack：** 仅支持 Next.js 15+，与当前版本不兼容
