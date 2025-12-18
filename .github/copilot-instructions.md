# Copilot Instructions for Exclusive Store (Landing Page)

## Overview
- Stack: static multi‑page site (HTML + modular CSS + minimal JS). No build tooling; pages are served directly from the repo.
- Entry points: [index.html](../index.html), [login.html](../login.html), [cart.html](../cart.html), [create-acount.html](../create-acount.html).
- Styles are aggregated via [style/index.css](../style/index.css) using `@import` of partials. Keep import order to control cascade and media overrides.
- Design tokens live in [style/var.css](../style/var.css). BEM conventions and component mappings live in [style/bem-layout.css](../style/bem-layout.css). Responsive overrides are at the end in [style/mobile.css](../style/mobile.css).
- Semantics and accessibility patterns are documented in [GUIA-SEMANTICA.md](../GUIA-SEMANTICA.md).

## File/Folder Conventions
- Images/icons: [img/](../img/)
- Scripts: [script/script.js](../script/script.js) (currently empty; prefer vanilla ES modules if needed).
- CSS partials: [style/](../style/) split per section: `hero.css`, `hyper-products.css`, `category-section.css`, `best-seling-category.css`, `featured-section.css`, `policy-banner.css`, `footer.css`, `nav.css`, `top-header.css`, `login-page.css`, `cart.css`, `utilitys.css`.
- Global/base: [style/var.css](../style/var.css), [style/global.css](../style/global.css), utilities in [style/utilitys.css](../style/utilitys.css).

## CSS Architecture & Patterns
- Use BEM: `block`, `block__element`, `block--modifier`. See mappings in [style/bem-layout.css](../style/bem-layout.css).
- Dual-class mapping exists for legacy classes and BEM aliases, e.g. `.card-products__badge, .status-color-card`. Prefer BEM for new code; keep existing classes for backwards compatibility when editing existing markup.
- Import order in [style/index.css](../style/index.css) matters: tokens → layout/refactor → structure (nav/header/sections) → pages (login/cart) → responsive ([style/mobile.css](../style/mobile.css)). Insert new partials before `mobile.css`.
- Centralize colors/spacing/typography with CSS variables from [style/var.css](../style/var.css). Do not hardcode hex values in components.
- Responsive breakpoints: media rules at ~950px and ~600px are consolidated in [style/mobile.css](../style/mobile.css). Add new responsive rules there unless a component requires local tweaks.

## HTML Semantics & Accessibility
- Use semantic regions: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Follow examples in [GUIA-SEMANTICA.md](../GUIA-SEMANTICA.md) and existing sections of [index.html](../index.html).
- Include `aria-*` labels for interactive controls (e.g., wishlist/quick view buttons in product cards). Mirror patterns used in product cards in [index.html](../index.html#L82-L159).
- Forms: follow `.form__group`, `.form__label`, `.form__input` pattern defined in [style/bem-layout.css](../style/bem-layout.css) and examples in the guide.

## Adding a New Section (Example)
- HTML: add a semantic section and BEM classes in the target page, e.g. `section.testimonials` with `testimonials__card`, `testimonials__quote`.
- CSS: create `style/testimonials.css` and import it in [style/index.css](../style/index.css) right before `mobile.css`.
- Tokens/utilities: use variables from [style/var.css](../style/var.css) and utilities from [style/utilitys.css](../style/utilitys.css); avoid inline styles.
- Responsive: extend [style/mobile.css](../style/mobile.css) with `.testimonials { ... }` rules for 950px/600px breakpoints.

## JavaScript Guidance
- Current JS is minimal. If interactivity is required, add unobtrusive handlers in [script/script.js](../script/script.js), using `DOMContentLoaded` and event delegation.
- Keep a11y: preserve `aria-label`s, support keyboard activation, and avoid layout shifts.
- No frameworks assumed; prefer small, self-contained functions and progressive enhancement.

## Developer Workflow
- Local preview: open pages directly in the browser or use VS Code Live Server to auto-reload.
- No build/test pipeline; manual QA at 950px and 600px breakpoints and across main pages.
- Deployment is static (see GitHub Pages link in [readme.md](../readme.md)); ensure relative asset paths remain valid.

## Touchpoints to Reuse
- Product cards: see `.card-products` structure and stars/price pattern in [index.html](../index.html).
- Section headers with red bar and label: `.component-span` from [style/utilitys.css](../style/utilitys.css).
- Buttons: use variants from [style/bem-layout.css](../style/bem-layout.css) (`.btn--primary`, `.btn--secondary`, `.btn--outline`, `.btn--green`).

If anything above is unclear or you need more explicit examples (e.g., for `cart.html` or `login.html` forms), tell me what you’re building and I’ll extend these rules accordingly.