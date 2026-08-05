---
name: Celestial Heritage Travel
colors:
  surface: '#faf9fe'
  surface-dim: '#dad9de'
  surface-bright: '#faf9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf2'
  surface-container-high: '#e9e7ec'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#43474f'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#415e91'
  primary: '#002451'
  on-primary: '#ffffff'
  primary-container: '#1a3a6b'
  on-primary-container: '#89a5dd'
  inverse-primary: '#abc7ff'
  secondary: '#7b5900'
  on-secondary: '#ffffff'
  secondary-container: '#fcca66'
  on-secondary-container: '#755400'
  tertiary: '#002a2a'
  on-tertiary: '#ffffff'
  tertiary-container: '#004242'
  on-tertiary-container: '#62b1b1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#284678'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#f0bf5c'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#a1f0f0'
  tertiary-fixed-dim: '#85d4d3'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f50'
  background: '#faf9fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  section-title:
    fontFamily: DM Serif Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  price-display:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.0'
  data-small:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section-gap: 96px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is crafted for a premium travel agency that bridges two distinct worlds: the serene, majestic landscapes of Kashmir and the sacred, spiritual journey of Hajj and Umrah. The brand personality is **Trustworthy, Sophisticated, and Soulful**. It balances the reliability of a high-end service provider with the emotional resonance of heritage and pilgrimage.

The visual style is **Corporate / Modern with Editorial Elegance**. It draws inspiration from premium travel periodicals, utilizing high-contrast typography, generous whitespace, and a sophisticated color palette. The interface must feel expansive and light, much like the sky and mountains it represents, while maintaining the structured precision required for logistics-heavy travel planning.

**Key Principles:**
- **Clarity of Purpose:** Distinct visual cues for leisure (Kashmir) vs. spiritual (Pilgrimage) services.
- **Editorial Polish:** Use of serif typography to convey authority and history.
- **Service Excellence:** A "concierge" feel through refined iconography and clean layouts.

## Colors

The palette is designed to evoke specific regional and emotional connections. 

- **Kashmir Blue (#1A3A6B):** Used for primary navigation, headers, and core brand elements. It represents the deep sky and high-altitude lakes.
- **Warm Gold (#C89B3C):** Reserved for Hajj/Umrah sections, badges, and premium membership indicators. It signifies the spiritual sanctity and high-value nature of the pilgrimage services.
- **Valley Teal (#2A7F7F):** Used for icons, secondary buttons, and decorative accents related to nature and leisure tours.
- **Kashmir Crimson (#DC2626):** High-visibility color for limited-time offers, urgent notifications, or "sold out" states.
- **Neutral Foundation:** The background uses an off-white (#F8F7F2) to reduce eye strain and provide a more "parchment" or "premium paper" feel compared to pure white.

## Typography

This system employs a multi-font strategy to balance editorial beauty with functional clarity:

- **Serif Hierarchy:** `Playfair Display` is the primary voice for high-level marketing and hero sections. `DM Serif Display` is used for content-heavy section titles to maintain the premium feel without overpowering the UI.
- **Functional UI:** `Plus Jakarta Sans` provides a modern, friendly, and highly legible base for all body copy, form fields, and utility text.
- **Precision Data:** `Space Grotesk` is utilized exclusively for numbers, dates, and pricing. Its technical, geometric nature ensures that travel costs and flight times are instantly readable and feel authoritative.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **Vertical Rhythm:** A 4px baseline grid governs all spacing. Section gaps are intentionally large (96px+) to create an "airy" and luxurious feel, preventing the information-dense travel data from feeling cluttered.
- **Margins:** Standard desktop margins are 48px, while mobile margins are 16px.
- **Component Padding:** Internal card padding is strictly 24px (lg) to ensure content has room to breathe.
- **Search Widget:** This is the centerpiece of the homepage. It should span 10 columns on desktop, centered, and break the vertical flow by overlapping the hero image by 40-60 pixels.

## Elevation & Depth

Visual hierarchy in this design system is achieved through **Tonal Layers** and **Ambient Shadows**.

- **Surfaces:** The primary surface is Off-White. Interactive cards use pure White (#FFFFFF) to pop against the background.
- **Shadows:** Use extremely soft, diffused shadows for cards. 
    * *Default:* `0px 4px 20px rgba(26, 58, 107, 0.05)` (A subtle blue-tinted shadow).
    * *Hover:* `0px 12px 32px rgba(26, 58, 107, 0.12)` accompanied by a -4px Y-axis lift.
- **Overlays:** For modals or mobile menus, use a 40% opacity Kashmir Blue backdrop blur (12px) to maintain brand presence even when content is obscured.

## Shapes

The design system uses a **Rounded** shape language to balance professional structure with approachability.

- **Cards & Widgets:** Use a 16px (`rounded-xl`) radius to soften the large surface areas.
- **Buttons:** Use an 8px (`rounded-md`) radius. This sharper corner compared to cards gives buttons a more "action-oriented" and firm appearance.
- **Input Fields:** Match the 8px button radius for consistency in form rows.
- **Badges/Chips:** Use full pill-shaping (999px) for status indicators like "Best Seller" or "Verified."

## Components

### Buttons
- **Primary:** Kashmir Blue fill with white text. 8px radius.
- **Sacred/Gold:** Warm Gold fill with white text (specifically for Hajj/Umrah CTA).
- **Ghost:** Valley Teal border and text for secondary actions like "View Gallery."

### Search Widget
- A high-elevation white card.
- **Tabs:** Use underline-style tabs for "Kashmir Tours," "Hajj," "Umrah," and "Flights." The active tab uses a 3px bottom border in Primary Blue or Gold depending on the service category.

### Cards
- **Destination Cards:** Image-centric with a subtle gradient overlay at the bottom for white text legibility.
- **Pricing:** Always rendered in Space Grotesk.
- **Badges:** Top-left alignment for discounts or service types.

### Input Fields
- Subtle 1px Slate (#6B7280) border.
- On focus: Border changes to Kashmir Blue with a 2px outer glow in 10% opacity blue.

### Chips & Tags
- Used for tour features (e.g., "5-Star Hotel," "Guided Tour"). 
- Backgrounds should be 10% opacity versions of the brand colors (Teal or Blue) with full-saturation text.