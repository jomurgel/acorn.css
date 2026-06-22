<img src="https://user-images.githubusercontent.com/5230729/33617107-17ebf23c-d99c-11e7-8aa6-ec559bd23027.png" alt="project acorn" title="project acorn" width="40" />

# acorn.css

A lightweight, classless CSS baseline that styles semantic HTML out of the box. The stylesheet you *start* with — not the one you build everything with.

[![npm version](https://badge.fury.io/js/acorn.css.svg)](https://www.npmjs.com/package/acorn.css)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-~5%20KB%20gzipped-brightgreen)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- **Classless** — write semantic HTML, get a styled page. No class soup.
- **Complete** — styles the elements people forget until launch: blockquotes, tables, figures, footnotes, task lists, form controls.
- **Customizable** — everything themes through CSS custom properties.
- **Accessible** — WCAG AA color contrast and proper focus management out of the box.
- **Dark mode** — built in, manual or automatic.
- **Tiny** — around 5KB gzipped.

[**View Demo**](https://jomurgel.github.io/acorn.css/)

## What Acorn is (and isn't)

Acorn solves a specific, annoying problem: teams style exactly what's in the design, ship, and then scramble on launch day because nobody designed the `<blockquote>`, the `<table>`, or the footnotes that showed up in real content. Acorn makes every native HTML element look good and work from the first line, so you're already halfway there before you write a rule of your own.

**Acorn styles content, not layout.** It is opinionated about how content *looks and reads* — type, spacing, color, every native element. It is deliberately *not* a grid system, a utility framework, or a component library, and it ships **no presentational classes**. Bring your own layout; Acorn handles the rest.

Because it's classless, anything that emits clean semantic HTML — including Markdown and AI-generated content — gets styled automatically, no class wrangling required.

## Installation

### npm

```bash
npm install acorn.css
```

```javascript
import 'acorn.css';
```

```css
@import 'acorn.css';
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/acorn.css@latest/dist/acorn.min.css">
```

### Download

Grab the [latest release](https://github.com/jomurgel/acorn.css/releases) and drop the CSS file into your project.

## Usage

Write semantic HTML. That's it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="path/to/acorn.css">
</head>
<body>
  <main>
    <h1>Hello World</h1>
    <p>Write semantic HTML and get a styled page automatically.</p>
    <button>Click Me</button>
  </main>
</body>
</html>
```

### Customization

Override the custom properties. Acorn's defaults are a CMYK-leaning palette; change a handful of variables and it's yours.

```css
:root {
  --primary: #0b779f;     /* cyan  */
  --secondary: #f4bb1a;   /* gold  */
  --accent: #e62e6b;      /* magenta / pink */
  --text-base: 1rem;
  --container-default: 60rem;
  --border-radius: 0.25rem;
}
```

### Dark mode

Built in. Toggle it with an attribute:

```html
<html data-theme="dark"> <!-- or "light" -->
```

Or follow the system preference with a line of JavaScript:

```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
```

## Features

Everything below is styled with attributes, never presentational classes — so when you *do* reach for a class, it's yours and you know exactly what it does.

### Buttons

```html
<button>Primary</button>
<button data-variant="secondary">Secondary</button>
<button data-variant="tertiary">Tertiary</button>
<button data-variant="link">Link</button>
<button data-destructive>Delete</button>
```

### Containers (region width)

```html
<main>Default reading width (60rem)</main>
<div data-container="narrow">Narrower reading width (45rem)</div>
```

### Block alignment

Mirrors the WordPress/Gutenberg align model — `left`/`right` float with text wrap, `center` centers, `wide`/`full` break out past the reading measure.

```html
<img src="cat.jpg" data-align="left" alt="">
<img src="cat.jpg" data-align="center" alt="">
<figure data-align="wide">...</figure>
<figure data-align="full">...</figure>
```

### Text alignment

```html
<p data-text="center">Centered text.</p>
```

### Navigation

```html
<nav data-scroll="horizontal">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about" aria-current="page">About</a></li>
  </ul>
</nav>
```

### Footnotes

Markdown footnote output is styled automatically — inline references, the endnotes block, and back-links — across the common parsers (markdown-it, GitHub/remark, PHP Markdown Extra). Jump to a note and it highlights so you can find it.

### Task lists

Markdown task lists (`- [ ]` / `- [x]`) render with the bullet removed and the checkbox aligned.

## Browser support

All modern browsers (Chrome, Firefox, Safari, Edge) and their mobile variants. Uses native CSS nesting, `:has()`, and `color-mix()`.

## Development

```bash
npm install      # install dependencies
npm run dev      # start the local demo
npm run build    # build dist/
```

## License

MIT © [Jo Murgel](https://jomurgel.com)

## Contributing

Issues and pull requests welcome.

## Links

- [Demo](https://jomurgel.github.io/acorn.css/)
- [GitHub](https://github.com/jomurgel/acorn.css)
- [npm](https://www.npmjs.com/package/acorn.css)
- [Issues](https://github.com/jomurgel/acorn.css/issues)
