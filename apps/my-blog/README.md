# My Blog

Personal blog application using Astro MD Theme.

## 📝 Content Management

### Blog Posts Structure

Blog posts are stored in `src/content/blog/` as Markdown files. Each post should follow this structure:

### Adding a New Post

1. Create a new `.md` file in `src/content/blog/` directory
2. Add frontmatter at the top of the file:

```markdown
---
title: Post Title
excerpt: A brief description of your post
pubDate: 2024-01-15
category: Category Name
readingTime: 5 mins
coverImage: https://example.com/image.jpg
coverImageAlt: Image description
---

Your post content here...
```

### Frontmatter Fields

- **`title`** (required): The title of your blog post
- **`excerpt`** (optional): A short description shown in post listings
- **`pubDate`** (required): Publication date in `YYYY-MM-DD` format
- **`category`** (optional): Category name (e.g., "Tech", "Photography", "Writing")
- **`readingTime`** (optional): Estimated reading time (e.g., "5 mins")
- **`coverImage`** (optional): URL to the cover image
- **`coverImageAlt`** (optional): Alt text for the cover image

### Example Post

```markdown
---
title: Getting Started with Astro
excerpt: Learn how to build fast static sites with Astro
pubDate: 2024-01-15
category: Tech
readingTime: 10 mins
coverImage: https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop
coverImageAlt: Astro logo
---

# Getting Started with Astro

This is my first blog post about Astro...
```

## 🔄 Updating the Theme

Since this blog uses `@chenenpei/astro-md-theme` as a workspace dependency, theme updates are automatically available:

1. **Pull latest changes** from the repository
2. **Update theme package** (if published separately):
   ```bash
   pnpm update @chenenpei/astro-md-theme
   ```
3. **Restart dev server** to see changes:
   ```bash
   pnpm dev:blog
   ```

### Manual Theme Updates

If you're working in the monorepo and want to test theme changes:

1. Make changes in `packages/theme/`
2. The changes will automatically hot-reload in your blog (thanks to workspace setup)
3. No manual sync needed!

## 🚀 Development

### Start Development Server

From the root directory:
```bash
pnpm dev:blog
```

Or from this directory:
```bash
pnpm dev
```

The blog will be available at `http://localhost:4321`

### Build for Production

From the root directory:
```bash
pnpm --filter my-blog build
```

Or from this directory:
```bash
pnpm build
```

The built site will be in the `dist/` directory.

## 🚢 Deployment

You can deploy this blog to any static hosting service:

### Netlify

1. Build command: `pnpm --filter my-blog build`
2. Publish directory: `apps/my-blog/dist`

### Vercel

1. Build command: `pnpm --filter my-blog build`
2. Output directory: `apps/my-blog/dist`

### GitHub Pages

1. Build the site: `pnpm --filter my-blog build`
2. Deploy the `dist/` directory to GitHub Pages

## 📚 Content Collections

This blog uses Astro's Content Collections. The schema is defined in `src/content/config.ts`. Make sure your posts match the expected schema.

## 🎨 Customization

To customize the blog appearance:

1. **Override CSS variables** in your own CSS file
2. **Modify page templates** if needed
3. **Update site metadata** in page components (title, description, etc.)

## 📖 Reference

- **Theme Documentation**: See `packages/theme/README.md`
- **Demo Site**: [https://astro-md-theme-demo.netlify.app/](https://astro-md-theme-demo.netlify.app/)

---

[中文文档](README.zh.md)
