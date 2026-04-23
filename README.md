# Design System: High-End Editorial Artisanal Experience

## 1. Overview & Creative North Star

### Creative North Star: "The Tactile Gallery"
This design system moves away from traditional e-commerce templates to create a "Tactile Gallery" experience. The goal is to make the digital interface feel as intentional, soft, and high-quality as a handmade crochet piece. We achieve this by rejecting rigid grids in favor of **intentional asymmetry**, layered organic shapes (watercolor and circular frames), and an editorial typography scale that prioritizes breathing room over information density.

To break the "standard" look:
- **Overlapping Elements:** Product images (contained in circular frames) should frequently overlap background watercolor bleeds or adjacent text blocks to create a sense of physical depth.
- **Negative Space as Luxury:** Utilize generous margins (referencing the `spacing-24` and `spacing-16` tokens) to frame content like a museum curator would.
- **Artisanal Imperfection:** Use subtle rotation on secondary images or decorative elements to mimic the "made by hand" ethos of the brand.

---

## 2. Colors & Surface Philosophy

The palette is a sophisticated blend of soft pastels anchored by a deep navy. Use these tokens to create a "no-line" editorial layout.

### The "No-Line" Rule
**Strictly prohibit 1px solid borders for sectioning.** To define boundaries, use tonal shifts in background colors.
- Place a `surface-container-low` section (softer beige) against the main `background` (#fff8f0) to denote a change in content.
- Use `surface-variant` for sidebars or highlighted callouts to create a soft separation without hard edges.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers:
1.  **Base Layer:** `surface` (#fff8f0) - The primary canvas.
2.  **Mid-Level:** `surface-container` - For secondary information clusters.
3.  **Top-Level:** `surface-container-highest` - For the most important interactive elements (e.g., product cards, cart summaries).

### The Glass & Gradient Rule
- **Glassmorphism:** For floating navigation bars or quick-view modals, use semi-transparent versions of `surface` with a 20px `backdrop-blur`.
- **Signature Gradients:** For primary CTAs and hero backgrounds, use a subtle linear gradient from `primary` (#745090) to `primary-container` (#e1b6ff) at a 45-degree angle. This provides a "soul" and depth that mimics dyed yarn.

---

## 3. Typography

The type system balances the high-fashion elegance of **Newsreader** (used as a proxy for the elegance of Tenor Sans) with the approachable utility of **Manrope**.

- **Display (Newsreader):** Use for hero headers and brand moments. The high-contrast serifs convey "Artisanal Luxury."
- **Headline & Title (Newsreader):** Set in `headline-lg` and `headline-md` for product names and category headers.
- **Body & Labels (Manrope):** Use for descriptions and UI microcopy. The clean sans-serif ensures legibility against watercolor backgrounds.

**Editorial Tip:** Use `display-lg` for single, impactful words or phrases (e.g., "Handmade") and overlap them slightly with a circular product image for a high-end magazine feel.

---

## 4. Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and soft, ambient lighting rather than structural lines.

- **The Layering Principle:** A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural "lift" without needing a shadow.
- **Ambient Shadows:** For "floating" items (like a checkout button or mobile menu), use the following: `shadow: 0 12px 32px -4px rgba(54, 50, 39, 0.06)`. The shadow color must be a tint of `on-surface` (#363227) to remain natural.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**.
- **Circular Frames:** In alignment with the logo reference, use `roundedness-full` for product thumbnails. Surround these with a subtle, multi-colored "watercolor ring" gradient using the brand's primary pastels.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `roundedness-full`, `on-primary` text. No border.
- **Secondary:** `surface-container-highest` background with `primary` text. Use for "Add to Cart."
- **Tertiary:** Text-only with a 2px underline in `secondary` (#386859). Use for "Read More."

### Input Fields
- **Styling:** Use `surface-container-low` for the field background.
- **States:** On focus, transition the background to `surface-container-highest` and add a soft 2px `secondary` glow. Forbid hard black borders.

### Cards & Lists
- **The Anti-Divider Rule:** Forbid the use of divider lines in lists or cards. Separate items using `spacing-4` (vertical white space) or by alternating background colors between `surface` and `surface-container-low`.
- **Product Cards:** Must feature a `roundedness-lg` (2rem) or `full` for images. Content should be center-aligned to maintain the "circular" theme of the logo.

### Custom Component: The "Watercolor Accent"
Small, semi-transparent SVG blobs using `on-secondary-container` or `primary-fixed-dim` placed behind images to soften the grid and add an artisanal, "painted" feel.

---

## 6. Do's and Don'ts

### Do
- **Do** use `spacing-20` (7rem) between major sections to let the design breathe.
- **Do** use circular cropping for lifestyle imagery to echo the logo's geometry.
- **Do** use `primary` (#745090) for all interactive icons to maintain brand recognition.
- **Do** experiment with slightly offset text—e.g., a title that starts 20px further left than the body text below it—to break the "template" feel.

### Don't
- **Don't** use 100% black (#000000). Use `on-surface` (#363227) for text to keep the palette "cozy."
- **Don't** use sharp corners. Every element should have at least `roundedness-sm`.
- **Don't** use box shadows on every card. Reserve shadows for elements that physically float or require immediate user interaction.
- **Don't** use more than one "Display" font size on a single screen; keep the hierarchy focused.