# My Blog

Personal blog application using Astro MD Theme.

## Content Structure

Blog posts are stored in `src/content/blog/` as Markdown files.

### Adding a New Post

1. Create a `.md` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: Post Title
description: Post description
pubDate: 2024-01-01
---

Post content...
```

## Development

```bash
pnpm dev
```

The blog will be available at `http://localhost:4321`

## Build

```bash
pnpm build
```

---

[中文文档](README.zh.md)

