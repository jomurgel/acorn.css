# Changelog

All notable changes to acorn.css are documented here. This project follows
[Semantic Versioning](https://semver.org/).

## [3.0.0] — 2026-06-22

A major release. Acorn is now positioned as what it always was: a classless CSS
**baseline** that styles semantic HTML out of the box — not a framework or design
system. The source is now plain CSS, the default palette is CMYK, and there's
first-class support for the things real content contains (footnotes, task lists).

### Breaking

- **Block alignment moved to `data-align`.** `data-container="wide"` and
  `data-container="full"` are removed. Use `data-align="wide"` / `data-align="full"`
  instead. `data-container` now only controls reading width (`narrow` / default).
- **Default palette changed** to a CMYK identity (cyan `--primary`, gold
  `--secondary`, magenta/pink `--accent`). Override the custom properties to restore
  your own colors.
- **Buttons use `--button-radius`** (25px) instead of `--border-radius`. Nav links,
  the file-upload button, and the skip link follow the same token.
- **Source is now vanilla CSS** (`src/acorn.css`), built with esbuild. `sass` and
  `autoprefixer` are no longer dependencies. The published `dist/acorn.css` and
  `dist/acorn.min.css` are unchanged in name and usage.

### Added

- **Footnotes.** Markdown footnote output is styled — inline references, the
  endnotes block, and back-links — across markdown-it, GitHub/remark, and PHP
  Markdown Extra, plus semantic fallbacks. Jumping to a note highlights it.
- **Fluid typography.** Display sizes (`--text-lg` through `--text-3xl`) scale with
  the viewport via `clamp()`; body text stays fixed for readability. Zoom-safe.
- **Print styles.** A theme-proof `@media print` block: black-on-white, stripped
  chrome, spelled-out external URLs and abbreviations, footnotes as endnotes, sane
  pagination.
- **Task lists.** Markdown `- [ ]` / `- [x]` render with the bullet removed and the
  checkbox aligned.
- `abbr[title]` (dotted underline, help cursor) and `dfn` (italic) styling.
- New custom properties: `--button-radius`, `--secondary-dark`, and `--footnote-ref`.

### Changed

- **Unified alignment model.** Three attributes with three clear jobs: `data-text`
  (text alignment), `data-align` (block placement/span — left/right/center/wide/full,
  mirroring the WordPress/Gutenberg model), `data-container` (region reading width).
- All default colors verified for WCAG AA contrast in both light and dark themes.
- Documentation and README repositioned around "the stylesheet you start with"; the
  demo was rebuilt to match.

### Notes

- The spacing scale is intentionally coarse (rule of two). Fine-grained spacing is
  layout tuning and belongs in the consuming site's CSS — Acorn styles content, not
  layout.
- Requires a modern browser (native CSS nesting, `:has()`, `color-mix()`).
