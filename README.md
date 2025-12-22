# Astro MD Theme Monorepo

A personal blog theme Monorepo project based on Astro + Tailwind.

## 📁 Project Structure

```
.
├── packages/
│   └── theme/          # Core theme package (components, styles, config)
├── apps/
│   ├── theme-demo/     # Theme demo site
│   └── my-blog/        # Your personal blog
└── package.json        # Root workspace configuration
```

## 🚀 Quick Start

### Install Dependencies

```bash
pnpm install
```

### Development Mode

Start all apps:
```bash
pnpm dev
```

Start demo site only:
```bash
pnpm dev:demo
```

Start personal blog only:
```bash
pnpm dev:blog
```

### Build

```bash
pnpm build
```

## 📝 Usage

### Theme Package (`packages/theme`)

This is the core theme package, containing:
- Astro components (Layout, Post, etc.)
- Tailwind CSS configuration
- Shared styles and utilities

**When modifying the theme**: Edit files in `packages/theme` directly, and all apps using this theme will hot-reload automatically.

### Personal Blog (`apps/my-blog`)

Your blog content is stored in `apps/my-blog/src/content/blog/`.

**Adding a new post**:
1. Create a `.md` file in `src/content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: Post Title
description: Post description
pubDate: 2024-01-01
---

Post content...
```

### Theme Demo Site (`apps/theme-demo`)

Used to showcase the default theme appearance for preview and testing.

## 🔧 Development Workflow

1. **Develop theme**: Modify components and styles in `packages/theme`
2. **Test effects**: View results in `apps/theme-demo`
3. **Write blog**: Write Markdown articles in `apps/my-blog`

All changes will be reflected in real-time without manual synchronization.

## 📦 Publishing Theme

When you're ready to publish the theme, you can either:
- Publish `packages/theme` separately to NPM
- Provide `apps/theme-demo` as a template for other users

## 🎨 Next Steps

Now you can:
1. Port your HTML Demo to `packages/theme`
2. Start writing your blog posts
3. Customize theme styles and components

---

[中文文档](README.zh.md)
