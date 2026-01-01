---
title: Markdown Format Showcase
excerpt: This article demonstrates various Markdown formats for testing how the theme renders different content
pubDate: 2025-01-15
category: Demo
readingTime: 10 mins
coverImage: https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop
coverImageAlt: Markdown showcase
langs: ['en']
---

# Markdown Format Showcase

This article demonstrates various Markdown formats for testing how the theme renders different content. This article will include as many Markdown elements as possible.

## Heading Levels

This is an H2 heading, below are examples of different heading levels:

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

## Text Formatting

This is a paragraph of regular text, containing **bold text**, *italic text*, ***bold italic text***, ~~strikethrough text~~, and `inline code`.

You can also use `code snippets` within sentences, such as `const example = 'hello'`.

## Lists

### Unordered List

- First item
- Second item
- Third item
  - Nested item 1
  - Nested item 2
    - Deeper nesting
- Fourth item

### Ordered List

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
4. Fourth step

### Task List

- [x] Completed task
- [x] Another completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Blockquotes

> This is a blockquote. Blockquotes can contain multiple paragraphs.
>
> This is the second paragraph in the blockquote.

### Nested Blockquotes

> This is the outer blockquote
>
> > This is the inner blockquote
> >
> > Can continue nesting

## Code Blocks

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
    """Generate Fibonacci sequence"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Usage example
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

### Code Block Without Language Identifier

```
This is a code block without syntax highlighting
Can be used to display plain text or configuration files
```

## Tables

| Feature | Support | Description |
|--------|:-------:|------------|
| Bold | ✅ | `**text**` |
| Italic | ✅ | `*text*` |
| Code | ✅ | `` `code` `` |
| Link | ✅ | `[text](url)` |
| Image | ✅ | `![alt](url)` |

### Alignment

| Left Align | Center | Right Align |
|:----------|:------:|-----------:|
| Content 1 | Content 2 | Content 3 |
| Longer content | Medium | Short |

## Links

This is an [inline link](https://astro.build) to the Astro website.

This is a [link with title](https://github.com "GitHub").

This is a [relative path link](../archive) to the archive page.

## Images

![Example Image](https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop "This is an example image")

### Image with Link

[![Astro Logo](https://astro.build/assets/press/astro-logo-dark.svg)](https://astro.build)

## Horizontal Rules

---

Above is a horizontal rule.

---

## Mixed Content Example

Below is a paragraph containing various formats:

> This is a blockquote containing **bold**, *italic*, and `code`. It can also contain [links](https://example.com).
>
> - List item 1 in blockquote
> - List item 2 in blockquote
>   1. Nested ordered list
>   2. Another nested item

### Code and Text Mixed

In JavaScript, we can write:

```javascript
const theme = {
  name: 'Astro MD Theme',
  version: '1.0.0',
  features: ['Markdown', 'Dark Mode', 'Responsive']
};
```

Then use `theme.name` to access the theme name.

## Escaped Characters

If you need to display Markdown syntax characters themselves, you can escape them with backslashes:

\*This is not italic\*

\*\*This is not bold\*\*

\`This is not code\`

## Math Formulas (if supported)

If the theme supports math formulas, you can write:

Inline formula: $E = mc^2$

Block formula:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## HTML Tags

Markdown also supports using HTML directly:

<div style="background: #f0f0f0; padding: 1rem; border-radius: 4px; margin: 1rem 0;">
  <p>This is an example block using HTML.</p>
  <p>Can contain <strong>bold</strong> and <em>italic</em>.</p>
</div>

## Footnotes

This is a sentence with a footnote[^1].

This is another footnote[^note].

[^1]: This is the content of the first footnote.

[^note]: This is the content of a named footnote, which can contain **formatting** and [links](https://example.com).

## Definition Lists (if supported)

Term 1
: This is the definition of term 1.

Term 2
: This is the definition of term 2.
: Can have multiple definitions.

## Summary

This article demonstrates various Markdown formats, including:

- ✅ Headings (H1-H6)
- ✅ Text formatting (bold, italic, strikethrough, inline code)
- ✅ Lists (ordered, unordered, nested, task lists)
- ✅ Blockquotes (including nested blockquotes)
- ✅ Code blocks (multiple languages)
- ✅ Tables
- ✅ Links
- ✅ Images
- ✅ Horizontal rules
- ✅ HTML tags
- ✅ Footnotes

Hope these examples help you understand how the theme renders different Markdown content!
