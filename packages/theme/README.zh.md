# @astro-md-theme/core

Astro MD Theme 的核心主题包。

此包包含：
- Astro 组件（Layout、Post 等）
- Tailwind CSS 配置
- 共享样式和工具

## 使用方法

在你的 Astro 应用中，安装此包：

```bash
pnpm add @astro-md-theme/core
```

然后导入组件：

```astro
---
import Layout from '@astro-md-theme/core/Layout.astro';
import Post from '@astro-md-theme/core/Post.astro';
---

<Layout title="我的博客">
  <Post title="你好世界" date="2024-01-01">
    内容在这里...
  </Post>
</Layout>
```

---

[English Documentation](README.md)

