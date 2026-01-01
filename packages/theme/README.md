# @chenenpei/astro-md-theme

Core theme package for Astro MD Theme - A minimalist blog theme built with Astro and Tailwind CSS.

## 📦 Installation

In your Astro project, install this package:

```bash
pnpm add @chenenpei/astro-md-theme
```

Or if you're using npm or yarn:

```bash
npm install @chenenpei/astro-md-theme
# or
yarn add @chenenpei/astro-md-theme
```

## 🚀 Quick Start

### 1. Install Dependencies

You'll also need to install the required peer dependencies:

```bash
pnpm add astro tailwindcss @astrojs/tailwind @tailwindcss/typography
```

For math formula support (optional but recommended):

```bash
pnpm add remark-math rehype-katex
```

For definition list support (optional):

```bash
pnpm add remark-definition-list
```

### 2. Configure Astro

Update your `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDefinitionList from 'remark-definition-list';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // Important: disable base styles
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkDefinitionList],
    rehypePlugins: [rehypeKatex],
  },
});
```

### 3. Import Global Styles

In your root layout or main page, import the theme's global styles:

```astro
---
import '@chenenpei/astro-md-theme/styles/global.css';
---
```

### 4. Use Theme Components

Import and use the theme components in your pages:

**Home Page Example:**

```astro
---
import HomePage from '@chenenpei/astro-md-theme/templates/HomePage.astro';
import { getCollection } from 'astro:content';

const blogPosts = await getCollection('blog');
const posts = blogPosts
  .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
  .slice(0, 3)
  .map((post) => ({
    title: post.data.title,
    slug: post.slug,
    excerpt: post.data.excerpt,
    date: post.data.pubDate,
    category: post.data.category,
    coverImage: post.data.coverImage,
  }));
---

<HomePage
  siteTitle="My Space."
  siteDescription="A minimalist blog theme"
  authorName="Your Name"
  authorBio="Your bio here."
  posts={posts}
/>
```

**Post Detail Page Example:**

```astro
---
import PostDetailPage from '@chenenpei/astro-md-theme/templates/PostDetailPage.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  
  return Promise.all(blogPosts.map(async (post) => {
    const { Content } = await post.render();
    return {
      params: { slug: post.slug },
      props: { 
        post: {
          slug: post.slug,
          title: post.data.title,
          date: post.data.pubDate,
          category: post.data.category,
          readingTime: post.data.readingTime,
          coverImage: post.data.coverImage,
          coverImageAlt: post.data.coverImageAlt,
        },
        content: Content
      },
    };
  }));
}

const { post, content: Content } = Astro.props;
---

<PostDetailPage
  siteTitle="My Space."
  title={post.title}
  date={post.date}
  category={post.category}
  readingTime={post.readingTime}
  coverImage={post.coverImage}
  coverImageAlt={post.coverImageAlt}
  slug={post.slug}
>
  <Content />
</PostDetailPage>
```

### 5. Add KaTeX CSS (for Math Support)

In your root layout (`src/layouts/Layout.astro` or similar), add the KaTeX CSS:

```astro
<head>
  <!-- ... other head content ... -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
</head>
```

## 📚 Available Components

### Templates

- `HomePage.astro` - Homepage template with post listing
- `PostDetailPage.astro` - Individual post page template
- `ArchivePage.astro` - Archive page template
- `AboutPage.astro` - About page template

### Components

- `Layout.astro` - Root layout component
- `Header.astro` - Site header component
- `Post.astro` - Post component
- `PostCard.astro` - Post card component for listings
- `IntroCard.astro` - Introduction card component
- `PaperSheet.astro` - Paper-style container for content

## 🎨 Features

- ✨ Modern, minimalist design
- 📱 Fully responsive layout
- 🌓 Dark mode support (automatic theme switching)
- 📝 Rich Markdown support:
  - Code blocks with syntax highlighting
  - Tables with proper styling
  - Math formulas (LaTeX) with KaTeX
  - Footnotes
  - Definition lists
- 🎯 TypeScript support
- ⚡ Fast static site generation
- 🎨 Customizable with CSS variables

## 📖 Example

See the live demo at: **[https://astro-md-theme-demo.netlify.app/](https://astro-md-theme-demo.netlify.app/)**

The demo showcases all features and can serve as a reference implementation.

## 🔧 Customization

The theme uses CSS variables for easy customization. You can override them in your own CSS:

```css
:root {
  --header-bg: #121212;
  --header-text: #FFFFFF;
  --page-bg: #F4F4F4;
  --card-bg: #FFFFFF;
  --text-main: #121212;
  --text-sec: #666666;
  --accent: #0056b3;
  --border: #e0e0e0;
}
```

## 📝 Content Collections

The theme expects your blog posts to follow this frontmatter structure:

```markdown
---
title: Post Title
excerpt: Post description
pubDate: 2024-01-15
category: Category Name
readingTime: 5 mins
coverImage: https://example.com/image.jpg
coverImageAlt: Image description
---

Your post content here...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

---

[中文文档](README.zh.md)
