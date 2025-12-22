# @astro-md-theme/core

Core theme package for Astro MD Theme.

This package contains:
- Astro components (Layout, Post, etc.)
- Tailwind CSS configuration
- Shared styles and utilities

## Usage

In your Astro app, install this package:

```bash
pnpm add @astro-md-theme/core
```

Then import components:

```astro
---
import Layout from '@astro-md-theme/core/Layout.astro';
import Post from '@astro-md-theme/core/Post.astro';
---

<Layout title="My Blog">
  <Post title="Hello World" date="2024-01-01">
    Content here...
  </Post>
</Layout>
```

---

[中文文档](README.zh.md)
