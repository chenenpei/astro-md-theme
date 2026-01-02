# @chenenpei/astro-md-theme

Astro MD Theme 的核心主题包 - 一个使用 Astro 和 Tailwind CSS 构建的简约博客主题。

## 📦 安装

在你的 Astro 项目中，安装此包：

```bash
pnpm add @chenenpei/astro-md-theme
```

或者使用 npm 或 yarn：

```bash
npm install @chenenpei/astro-md-theme
# 或
yarn add @chenenpei/astro-md-theme
```

## 🚀 快速开始

### 1. 安装依赖

你还需要安装必需的 peer dependencies：

```bash
pnpm add astro tailwindcss @astrojs/tailwind @tailwindcss/typography
```

数学公式支持（可选但推荐）：

```bash
pnpm add remark-math rehype-katex
```

定义列表支持（可选）：

```bash
pnpm add remark-definition-list
```

### 2. 配置 Astro

更新你的 `astro.config.mjs`：

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDefinitionList from 'remark-definition-list';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // 重要：禁用基础样式
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkDefinitionList],
    rehypePlugins: [rehypeKatex],
  },
});
```

### 3. 导入全局样式

在你的根布局或主页面中，导入主题的全局样式：

```astro
---
import '@chenenpei/astro-md-theme/styles/global.css';
---
```

### 4. 使用主题组件

在你的页面中导入并使用主题组件：

**首页示例：**

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
  siteTitle="我的空间"
  siteDescription="一个简约的博客主题"
  authorName="你的名字"
  authorBio="你的简介"
  posts={posts}
/>
```

**文章详情页示例：**

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
  siteTitle="我的空间"
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

### 5. 添加 KaTeX CSS（用于数学公式支持）

在你的根布局（`src/layouts/Layout.astro` 或类似文件）中，添加 KaTeX CSS：

```astro
<head>
  <!-- ... 其他 head 内容 ... -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
</head>
```

## 📚 可用组件

### 模板

- `HomePage.astro` - 带文章列表的首页模板
- `PostDetailPage.astro` - 单篇文章页面模板
- `ArchivePage.astro` - 归档页面模板
- `AboutPage.astro` - 关于页面模板

### 组件

- `Layout.astro` - 根布局组件
- `Header.astro` - 网站头部组件
- `Footer.astro` - 网站页脚组件
- `PostCard.astro` - 文章列表卡片组件
- `IntroCard.astro` - 介绍卡片组件
- `PaperSheet.astro` - 纸张风格的内容容器
- `ScrollTopFab.astro` - 滚动到顶部浮动按钮组件

## 🎨 特性

- ✨ 现代、简约的设计
- 📱 完全响应式布局
- 🌓 暗色模式支持（自动主题切换）
- 📝 丰富的 Markdown 支持：
  - 带语法高亮的代码块
  - 样式正确的表格
  - 数学公式（LaTeX）支持（使用 KaTeX）
  - 脚注
  - 定义列表
- 👆 滚动到顶部 FAB（浮动操作按钮）
- 🦶 统一的页脚设计
- 📡 RSS 订阅支持
- 🎯 TypeScript 支持
- ⚡ 快速的静态站点生成
- 🎨 可通过 CSS 变量自定义

## 📖 示例

查看在线演示：[https://astro-md-theme-demo.netlify.app/](https://astro-md-theme-demo.netlify.app/)

演示展示了所有功能，可以作为参考实现。

## 🔧 自定义

主题使用 CSS 变量以便于自定义。你可以在自己的 CSS 中覆盖它们：

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

## 📡 RSS 支持

主题提供了 RSS 生成工具函数，方便你为博客添加 RSS 订阅功能。

### 安装依赖

```bash
pnpm add @astrojs/rss
```

### 使用方法

#### 1. 安装依赖

```bash
pnpm add @astrojs/rss markdown-it sanitize-html
```

#### 2. 创建 RSS 端点

在你的项目中创建 `src/pages/rss.xml.js`：

```javascript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt({
  html: true,     // 允许 HTML 标签
  linkify: true,  // 自动转换 URL 为链接
  typographer: true,  // 启用一些语言中立的替换和引号美化
});

export async function GET(context) {
  const posts = await getCollection('blog');

  const rssItems = posts.map((post) => {
    // 渲染 Markdown 为 HTML
    const htmlContent = parser.render(post.body);

    // 清理 HTML，保留安全的标签
    const sanitizedContent = sanitizeHtml(htmlContent, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ['src', 'alt', 'title', 'width', 'height'],
      },
    });

    return {
      title: post.data.title,
      link: `/blog/${post.slug}/`,
      description: post.data.excerpt || post.data.description || post.data.title,
      pubDate: post.data.pubDate,
      content: sanitizedContent, // 完整的 HTML 内容
    };
  });

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site || SITE.url,
    items: rssItems,
  });
}
```

### 完整内容支持

通过使用 `markdown-it` 渲染 `post.body`，可以在 RSS 中包含完整文章内容。

**注意事项**：
- 使用 `getCollection()` 时，需要手动渲染 Markdown 为 HTML
- MDX (`.mdx`) 文件无法用 `markdown-it` 渲染，建议仅包含摘要
- 确保文章中的图片使用绝对路径（如 CDN、图床）或放在 `public/` 目录
- `sanitize-html` 会清理危险的 HTML 标签，确保 RSS 内容安全

### RSS 自动发现

主题的 Layout 组件支持 RSS 自动发现功能。在调用 Layout 时传入 `rssPath` 参数：

```astro
---
import Layout from '@chenenpei/astro-md-theme/Layout.astro';
import { SITE } from '../config';
---

<Layout title={SITE.title} description={SITE.description} rssPath="/rss.xml">
  <slot />
</Layout>
```

这会在 `<head>` 中添加：
```html
<link rel="alternate" type="application/rss+xml" title="Your Site" href="/rss.xml" />
```

### 可选工具函数

主题还提供了可选的工具函数（按需使用）：

```javascript
import { generateRSSFeed, blogToRSSItems } from '@chenenpei/astro-md-theme/utils/rss';

// 简化 RSS 生成
const rssItems = blogToRSSItems(posts, {
  limit: 20,        // 限制文章数量
  locale: 'zh',     // 过滤特定语言
  basePath: '/blog' // 自定义路径前缀
});

return generateRSSFeed({
  title: SITE.title,
  description: SITE.description,
  site: context.site,
  items: rssItems,
});
```

## 📝 内容集合

主题期望你的博客文章遵循以下 frontmatter 结构：

```markdown
---
title: 文章标题
excerpt: 文章描述
pubDate: 2024-01-15
category: 分类名称
readingTime: 5 mins
coverImage: https://example.com/image.jpg
coverImageAlt: 图片描述
---

你的文章内容...
```

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

## 📄 许可证

MIT

---

[English Documentation](README.md)
