# Astro MD Theme Monorepo

A personal blog theme Monorepo project based on Astro + Tailwind.

## 📁 Project Structure

This is a pnpm workspace monorepo containing:

```
.
├── packages/
│   └── theme/          # Core theme package (components, styles, config)
├── apps/
│   ├── theme-demo/     # Theme demo site (showcasing the theme)
│   └── my-blog/        # Your personal blog instance
├── package.json        # Root workspace configuration
└── pnpm-workspace.yaml # Workspace configuration
```

- **`packages/theme`**: The reusable theme package containing all components, styles, and configurations
- **`apps/theme-demo`**: Demo site showcasing the theme features (deployed at [https://astro-md-theme-demo.netlify.app/](https://astro-md-theme-demo.netlify.app/))
- **`apps/my-blog`**: Your personal blog instance using the theme

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 9+

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

Build all apps:
```bash
pnpm build
```

## 📝 Usage

### Theme Package (`packages/theme`)

This is the core theme package, containing:
- Astro components (Layout, Post, Header, etc.)
- Tailwind CSS configuration
- Global styles and utilities
- Page templates (HomePage, PostDetailPage, etc.)

**When modifying the theme**: Edit files in `packages/theme` directly, and all apps using this theme will hot-reload automatically thanks to the workspace setup.

### Personal Blog (`apps/my-blog`)

Your blog content is stored in `apps/my-blog/src/content/blog/` as Markdown files.

**Adding a new post**:
1. Create a `.md` file in `src/content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: Post Title
excerpt: Post description
pubDate: 2024-01-01
category: Category Name
readingTime: 5 mins
coverImage: https://example.com/image.jpg
coverImageAlt: Image description
---

Post content...
```

### Theme Demo Site (`apps/theme-demo`)

Used to showcase the default theme appearance for preview and testing. 

**Live Demo**: [https://astro-md-theme-demo.netlify.app/](https://astro-md-theme-demo.netlify.app/)

## 🔧 Development Workflow

1. **Develop theme**: Modify components and styles in `packages/theme`
2. **Test effects**: View results in `apps/theme-demo` (runs on `http://localhost:4321`)
3. **Write blog**: Write Markdown articles in `apps/my-blog`

All changes will be reflected in real-time without manual synchronization thanks to the workspace setup.

## 🚢 Deployment

### Deploying the Demo Site

The demo site (`apps/theme-demo`) is configured for Netlify deployment. See the `netlify.toml` configuration file for build settings.

**Live Demo**: [https://astro-md-theme-demo.netlify.app/](https://astro-md-theme-demo.netlify.app/)

### Deploying Your Blog

You can deploy `apps/my-blog` to any static hosting service (Netlify, Vercel, GitHub Pages, etc.):

1. Build the blog: `pnpm --filter my-blog build`
2. Deploy the `apps/my-blog/dist` directory

## 🔄 Maintenance

### Updating Dependencies

To update all dependencies:
```bash
pnpm update
```

To update a specific package:
```bash
pnpm update <package-name> --filter <app-name>
```

### Updating the Theme

Since `apps/my-blog` uses the theme as a workspace dependency, theme updates are automatically available. Just pull the latest changes and restart the dev server.

## 📦 Publishing Theme

When you're ready to publish the theme, you can:

1. **Publish to NPM**: Publish `packages/theme` separately to NPM as `@chenenpei/astro-md-theme`
2. **Provide as template**: Use `apps/theme-demo` as a starter template for other users

## 🎨 Features

- ✨ Modern, minimalist design
- 📱 Fully responsive
- 🌓 Dark mode support
- 📝 Rich Markdown support (tables, code blocks, math formulas, footnotes, definition lists)
- 🎯 Type-safe with TypeScript
- ⚡ Fast static site generation with Astro
- 🎨 Customizable with Tailwind CSS

---

[中文文档](README.zh.md)
