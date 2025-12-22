---
title: Markdown 格式展示
excerpt: 这是一篇展示各种 Markdown 格式的文章，用于测试主题对不同内容的渲染效果
pubDate: 2024-01-15
category: Demo
readingTime: 10 mins
coverImage: https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop
coverImageAlt: Markdown showcase
---

# Markdown 格式展示

这是一篇展示各种 Markdown 格式的文章，用于测试主题对不同内容的渲染效果。本文将包含尽可能丰富的 Markdown 元素。

## 标题层级

这是 H2 标题，下面是不同层级的标题示例：

### H3 标题

#### H4 标题

##### H5 标题

###### H6 标题

## 文本格式

这是一段普通文本，包含 **粗体文本**、*斜体文本*、***粗斜体文本***、~~删除线文本~~ 和 `行内代码`。

还可以使用 `代码片段` 在句子中，比如 `const example = 'hello'`。

## 列表

### 无序列表

- 第一项
- 第二项
- 第三项
  - 嵌套项 1
  - 嵌套项 2
    - 更深层嵌套
- 第四项

### 有序列表

1. 第一步
2. 第二步
3. 第三步
   1. 子步骤 A
   2. 子步骤 B
4. 第四步

### 任务列表

- [x] 已完成的任务
- [x] 另一个已完成的任务
- [ ] 未完成的任务
- [ ] 另一个未完成的任务

## 引用

> 这是一段引用文本。引用可以包含多个段落。
>
> 这是引用中的第二段。

### 嵌套引用

> 这是外层引用
>
> > 这是内层引用
> >
> > 可以继续嵌套

## 代码块

### JavaScript

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to ${name}'s blog`;
}

const message = greet('World');
console.log(message);
```

### Python

```python
def fibonacci(n):
    """生成斐波那契数列"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# 使用示例
for num in fibonacci(10):
    print(num)
```

### CSS

```css
.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
  font-family: var(--font-serif);
}

.article-content :global(p) {
  margin-bottom: 1.2em;
}
```

### 无语言标识的代码块

```
这是没有语法高亮的代码块
可以用于显示纯文本或配置文件
```

## 表格

| 功能 | 支持 | 说明 |
|------|:----:|------|
| 粗体 | ✅ | `**文本**` |
| 斜体 | ✅ | `*文本*` |
| 代码 | ✅ | `` `代码` `` |
| 链接 | ✅ | `[文本](url)` |
| 图片 | ✅ | `![alt](url)` |

### 对齐方式

| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| 内容 1 | 内容 2 | 内容 3 |
| 更长的内容 | 中等 | 短 |

## 链接

这是一个[内联链接](https://astro.build)到 Astro 官网。

这是一个[带标题的链接](https://github.com "GitHub")。

这是[相对路径链接](../archive)到归档页面。

## 图片

![示例图片](https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop "这是一张示例图片")

### 带链接的图片

[![Astro Logo](https://astro.build/assets/press/astro-logo-dark.svg)](https://astro.build)

## 水平分割线

---

上面是一条水平分割线。

---

## 混合内容示例

下面是一个包含多种格式的段落：

> 这是一段引用，包含 **粗体**、*斜体* 和 `代码`。还可以包含[链接](https://example.com)。
>
> - 引用中的列表项 1
> - 引用中的列表项 2
>   1. 嵌套的有序列表
>   2. 另一个嵌套项

### 代码与文本混合

在 JavaScript 中，我们可以这样写：

```javascript
const theme = {
  name: 'Astro MD Theme',
  version: '1.0.0',
  features: ['Markdown', 'Dark Mode', 'Responsive']
};
```

然后使用 `theme.name` 来访问主题名称。

## 转义字符

如果需要显示 Markdown 语法字符本身，可以使用反斜杠转义：

\*这不是斜体\*

\*\*这不是粗体\*\*

\`这不是代码\`

## 数学公式（如果支持）

如果主题支持数学公式，可以这样写：

行内公式：$E = mc^2$

块级公式：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## HTML 标签

Markdown 也支持直接使用 HTML：

<div style="background: #f0f0f0; padding: 1rem; border-radius: 4px; margin: 1rem 0;">
  <p>这是一个使用 HTML 的示例块。</p>
  <p>可以包含 <strong>粗体</strong> 和 <em>斜体</em>。</p>
</div>

## 脚注

这是一个带脚注的句子[^1]。

这是另一个脚注[^note]。

[^1]: 这是第一个脚注的内容。

[^note]: 这是命名脚注的内容，可以包含**格式**和[链接](https://example.com)。

## 定义列表（如果支持）

术语 1
: 这是术语 1 的定义。

术语 2
: 这是术语 2 的定义。
: 可以有多个定义。

## 总结

这篇文章展示了 Markdown 的各种格式，包括：

- ✅ 标题（H1-H6）
- ✅ 文本格式（粗体、斜体、删除线、行内代码）
- ✅ 列表（有序、无序、嵌套、任务列表）
- ✅ 引用（包括嵌套引用）
- ✅ 代码块（多种语言）
- ✅ 表格
- ✅ 链接
- ✅ 图片
- ✅ 水平分割线
- ✅ HTML 标签
- ✅ 脚注

希望这些示例能帮助你了解主题对不同 Markdown 内容的渲染效果！
