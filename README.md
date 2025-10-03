<img src="https://user-images.githubusercontent.com/5230729/33617107-17ebf23c-d99c-11e7-8aa6-ec559bd23027.png" alt="project acorn" title="project acorn" width="40" />

# acorn.css

A lightweight, semantic HTML framework. Just ~18KB of thoughtful CSS (3.8KB gzipped).

- 🪶 **Lightweight**: ~18KB uncompressed, 3.8KB gzipped
- 🎯 **Semantic**: Style HTML elements directly without classes
- 🎨 **Customizable**: Simple CSS custom properties for everything
- ♿ **Accessible**: WCAG compliant with proper focus management
- 📱 **Responsive**: Mobile-first with sensible defaults
- 🌓 **Dark Mode**: Built-in support with manual or automatic switching

[**View Demo**](https://jomurgel.github.io/acorn.css/)

## Installation

### Via npm

```bash
npm install acorn.css
```

**Import in JavaScript/TypeScript:**
```javascript
// Import everything
import 'acorn.css';

// Or import specific build
import 'acorn.css/dist/acorn.css';
import 'acorn.css/dist/acorn.min.css';
```

**Import in CSS:**
```css
@import 'acorn.css';
```

### Via CDN

**Uncompressed:**
```html
<link rel="stylesheet" href="https://unpkg.com/acorn.css@latest/dist/acorn.css">
```

**Minified:**
```html
<link rel="stylesheet" href="https://unpkg.com/acorn.css@latest/dist/acorn.min.css">
```

### Download

Download the [latest release](https://github.com/jomurgel/acorn.css/releases) and include the CSS file in your project.

## Usage

### Basic HTML

Simply write semantic HTML and acorn.css will style it beautifully:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="path/to/acorn.css">
</head>
<body>
  <main>
    <h1>Hello World</h1>
    <p>Write semantic HTML and get beautiful designs automatically.</p>
    <button>Click Me</button>
  </main>
</body>
</html>
```

### Customization

Override CSS variables to customize the framework:

```css
:root {
  --primary: #41aaea;
  --space-2: 1rem;
  --text-base: 1rem;
  --container-default: 60rem;
  --border-radius: 0.25rem;
}
```

### Dark Mode

**Manual Toggle:**
```html
<html data-theme="light"> <!-- or "dark" -->
```

**Automatic (with JavaScript):**
```javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDark.matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
```

**CSS Only:**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --primary: #6ec3f8;
    --white: #151513;
    --black: #f5f5f5;
  }
}
```

## Features

### Buttons

```html
<button>Primary</button>
<button data-variant="secondary">Secondary</button>
<button data-variant="tertiary">Tertiary</button>
<button data-variant="link">Link</button>
<button data-destructive>Delete</button>
```

### Containers

```html
<main>Default container (60rem)</main>
<div data-container="narrow">Reading width (45rem)</div>
<div data-container="wide">Wide layout (80rem)</div>
<div data-container="full">Full viewport width</div>
```

### Navigation

```html
<nav data-scroll="horizontal">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact" aria-current="page">Contact</a></li>
  </ul>
</nav>
```

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge) and their mobile variants.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Build CSS only
npm run build:css
```

## License

MIT © [Jo Murgel](https://jomurgel.com)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Links

- [Demo](https://jomurgel.github.io/acorn.css/)
- [GitHub](https://github.com/jomurgel/acorn.css)
- [npm](https://www.npmjs.com/package/acorn.css)
- [Issues](https://github.com/jomurgel/acorn.css/issues)