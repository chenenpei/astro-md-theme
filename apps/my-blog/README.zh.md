# My Blog

使用 Astro MD Theme 的个人博客应用。

## 内容结构

博客文章以 Markdown 文件形式存放在 `src/content/blog/` 目录下。

### 添加新文章

1. 在 `src/content/blog/` 目录下创建 `.md` 文件
2. 添加 frontmatter：

```markdown
---
title: 文章标题
description: 文章描述
pubDate: 2024-01-01
---

文章内容...
```

## 开发

```bash
pnpm dev
```

博客将在 `http://localhost:4321` 可用

## 构建

```bash
pnpm build
```

---

[English Documentation](README.md)

