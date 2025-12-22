# Astro MD Theme Monorepo

一个基于 Astro + Tailwind 的个人博客主题 Monorepo 项目。

## 📁 项目结构

```
.
├── packages/
│   └── theme/          # 主题核心包（组件、样式、配置）
├── apps/
│   ├── theme-demo/     # 主题演示站
│   └── my-blog/        # 你的个人博客
└── package.json        # 根工作区配置
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动所有应用：
```bash
pnpm dev
```

单独启动演示站：
```bash
pnpm dev:demo
```

单独启动个人博客：
```bash
pnpm dev:blog
```

### 构建

```bash
pnpm build
```

## 📝 使用说明

### 主题包 (`packages/theme`)

这是核心主题包，包含：
- Astro 组件（Layout、Post 等）
- Tailwind CSS 配置
- 共享样式和工具

**修改主题时**：直接编辑 `packages/theme` 中的文件，所有使用该主题的应用都会自动热更新。

### 个人博客 (`apps/my-blog`)

你的博客内容存放在 `apps/my-blog/src/content/blog/` 目录下。

**添加新文章**：
1. 在 `src/content/blog/` 目录下创建 `.md` 文件
2. 在文件头部添加 frontmatter：

```markdown
---
title: 文章标题
description: 文章描述
pubDate: 2024-01-01
---

文章内容...
```

### 主题演示站 (`apps/theme-demo`)

用于展示主题的默认效果，方便预览和测试。

## 🔧 开发工作流

1. **开发主题**：在 `packages/theme` 中修改组件和样式
2. **测试效果**：在 `apps/theme-demo` 中查看效果
3. **写博客**：在 `apps/my-blog` 中编写 Markdown 文章

所有修改都会实时反映，无需手动同步。

## 📦 发布主题

当你准备发布主题时，可以将 `packages/theme` 单独发布到 NPM，或者将 `apps/theme-demo` 作为模板提供给其他用户。

## 🎨 下一步

现在你可以：
1. 将你的 HTML Demo 移植到 `packages/theme` 中
2. 开始编写你的博客文章
3. 自定义主题样式和组件

---

[English Documentation](README.md)

