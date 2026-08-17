---
name: Starforge
description: A warm, structured operating system for modern education centers.
colors:
  foundry-terracotta: "#b85535"
  foundry-terracotta-deep: "#a04524"
  saffron-signal: "#d89a2e"
  warm-parchment: "#fbf6ec"
  porcelain: "#fffcf5"
  quiet-sand: "#f4ebd8"
  deep-ink: "#1f1b16"
  body-ink: "#3a332a"
  muted-clay: "#786850"
  structural-line: "#e5d9be"
  success-leaf: "#4f7b3b"
typography:
  display:
    fontFamily: "Manrope Variable, Manrope, Aptos, Segoe UI, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, Manrope, Aptos, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 5rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Manrope Variable, Manrope, Aptos, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  editorial:
    fontFamily: "Newsreader Variable, Georgia, Times New Roman, serif"
    fontSize: "1em"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  xl: "28px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.foundry-terracotta}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.foundry-terracotta-deep}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
    height: "52px"
  card:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Starforge

## Overview

**Creative North Star: "The Working Courtyard"**

Starforge feels like a contemporary shared courtyard: warm, calm, and unmistakably regional, with every role opening onto one ordered center. The identity combines Central Asian material warmth with the precision of an operational product. It should feel human enough for education and rigorous enough for finance, permissions, and leadership decisions.

The system is editorial without becoming ornamental. Large modern sans-serif statements carry conviction; compact product interfaces provide proof. Geometry is structural, star-derived, and used at decisive scale rather than scattered as decoration.

**Key Characteristics:**

- Warm mineral surfaces with concentrated terracotta and saffron.
- A visible underlying order: grids, timelines, aligned rails, and quiet geometric seams.
- Bold Manrope typography with rare Newsreader italic accents.
- Product truth shown through crisp, information-rich interfaces.
- Motion that explains connection and sequence, never constant spectacle.

## Colors

The Saroy palette feels sunlit and architectural: warm parchment and porcelain hold most content, while foundry terracotta carries action and saffron marks intelligence or attention.

### Primary

- **Foundry Terracotta:** The principal action, active-state, and signature field color.
- **Deep Foundry Terracotta:** Hover and pressed emphasis for primary actions.

### Secondary

- **Saffron Signal:** A scarce highlight for AI, insight, or a moment requiring attention.
- **Success Leaf:** Confirmed positive states and healthy operational signals.

### Neutral

- **Warm Parchment:** The broad page canvas.
- **Porcelain:** High-priority surfaces and interface panels.
- **Quiet Sand:** Inputs, secondary surfaces, and soft section fields.
- **Deep Ink:** Headlines and essential labels.
- **Body Ink:** Long-form copy and secondary headings.
- **Muted Clay:** Supporting copy and metadata.
- **Structural Line:** Dividers and boundaries that communicate real structure.

**The Concentrated Heat Rule.** Terracotta and saffron occupy deliberate fields or decisive controls; they are not sprinkled across every card.

## Typography

**Display Font:** Manrope Variable (with Aptos and Segoe UI fallbacks)  
**Body Font:** Manrope Variable (with Aptos and Segoe UI fallbacks)  
**Editorial Accent:** Newsreader Variable italic (with Georgia fallback)

**Character:** Manrope makes the system feel contemporary, disciplined, and legible at operational densities. Newsreader appears only as a short human counterpoint; it never becomes the default marketing headline.

### Hierarchy

- **Display** (700, fluid 3.5–6rem, 0.9): First-viewport statements with tightly balanced wrapping.
- **Headline** (650, fluid 2.25–5rem, 0.98): Section theses and decisive transitions.
- **Title** (650, 1.125–1.5rem, 1.2): Cards, features, and product panes.
- **Body** (450, 1rem, 1.6): Explanatory copy, capped near 68 characters per line.
- **Label** (650, 0.72–0.82rem, tracked): Short navigation, timeline, and state labels.

**The One Italic Breath Rule.** Editorial italic may soften one phrase in a composition; multiple competing italic moments dilute its effect.

## Layout

Use a fluid 12-column grid within a maximum 1440px canvas and an 8-point spacing rhythm. Large sections may own the full viewport width, but text and controls stay anchored to the shared grid. Product proof can overlap grid tracks when the overlap clarifies connected systems.

Desktop compositions should vary between dense operational passages and spacious editorial pauses. Below 900px, multi-pane product scenes collapse into a clear vertical relay; below 640px, navigation becomes a compact sheet and timelines become stacked chapters. Mobile must preserve the story order, not merely shrink the desktop canvas.

## Elevation & Depth

The system is layered rather than glossy. Structural dividers establish order; soft ambient shadows lift only priority panels, floating controls, and product devices.

### Shadow Vocabulary

- **Ambient Low** (`0 1px 2px rgba(54,30,14,.06)`): Quiet separation for small controls.
- **Working Panel** (`0 6px 18px rgba(54,30,14,.08), 0 2px 4px rgba(54,30,14,.04)`): Product panes and cards.
- **Hero Lift** (`0 24px 60px rgba(54,30,14,.16), 0 8px 18px rgba(54,30,14,.08)`): One dominant first-viewport object or CTA layer.

**The Structure Before Shadow Rule.** Use lines for meaningful boundaries and shadows only for true elevation.

## Shapes

Small controls use 8–14px corners, working panels use 22px corners, and large nested stages use 28px or calculated concentric radii. Primary CTAs are pill-shaped; product windows and cards retain quieter softened rectangles. Star-derived four-point spark geometry appears in marks, connectors, and occasional masks, never as an icon-tile collection.

## Components

### Buttons

- **Shape:** Generous pill with at least a 44px hit area; primary height is 52px.
- **Primary:** Foundry terracotta, porcelain label, and a directional arrow or spark when helpful.
- **Hover / Focus:** Color deepens and the content shifts optically; focus uses a high-contrast double ring. Press scales to exactly 0.96.
- **Secondary:** Porcelain or transparent surface with deep ink and a structural line.

### Chips

- **Style:** Compact pill, quiet sand field, deep ink or semantic state color, no unnecessary shadow.
- **State:** Selected chips use a filled field and icon/color cue; motion is not the only distinction.

### Cards / Containers

- **Corner Style:** Working panels use 22px corners; large stages use 28px with concentric inner panels.
- **Background:** Porcelain on parchment, or a committed terracotta field for a major conversion moment.
- **Shadow Strategy:** Flat by default, Working Panel shadow when floating or overlapping.
- **Border:** Only for structure, selection, or focus.
- **Internal Padding:** 20–32px on desktop; 16–24px on mobile.

### Inputs / Fields

- **Style:** Quiet sand fill, 14px corner, clear label, and structural border.
- **Focus:** Terracotta outline plus an outer parchment/ink contrast ring.
- **Error / Disabled:** Error is explicit in color and copy; disabled state retains readable contrast.

### Navigation

Navigation is compact and calm. Text is semibold, current state has both a color and shape cue, and mobile navigation uses one explicit menu button with a full-width contact action.

### Connected Timeline

The reusable narrative component aligns time, role, action, and product surface on one visible grid. Desktop reads horizontally or diagonally across connected cells; mobile becomes a vertical relay with the same sequence and clear continuation line.

## Do's and Don'ts

### Do:

- **Do** expose the grid when it explains how people, time, and modules connect.
- **Do** use one large memorable product demonstration before a broader feature inventory.
- **Do** preserve tabular numerals for prices, times, and changing operational values.
- **Do** use responsive re-composition and respect reduced-motion preferences.

### Don't:

- **Don't** turn the page into a uniform bento grid of interchangeable cards.
- **Don't** use generic neon gradients, glassmorphism, or floating icon tiles as substitutes for product proof.
- **Don't** fabricate customer counts, testimonials, savings, rankings, or plan entitlements.
- **Don't** use `transition: all`, tiny touch targets, or motion as the sole state cue.
