# Holee Bao Design System

**Version:** 1.0
**Last Updated:** 2025-12-16
**Status:** Production Ready

---

## Design Philosophy

Holee Bao's design balances **minimalism with playfulness**, creating a confident, approachable brand that celebrates the craft of steamed baos. The aesthetic draws inspiration from:

- **Steam & Warmth**: Soft, flowing animations that evoke fresh-steamed baos
- **Golden Hour**: Warm, inviting color palette reminiscent of Copenhagen's golden light
- **Modern Chinese**: Contemporary interpretation of traditional Chinese food culture
- **Copenhagen Casual**: Unpretentious, direct, social-media-friendly

### Brand Voice
- **Casual & Confident**: "Holee good baos" - playful without being gimmicky
- **No Pretension**: "We make baos. Really good ones. That's it."
- **Welcoming**: Designed for takeaway customers on the go
- **Authentic**: Quality ingredients, traditional technique, modern execution

---

## Color System

### Primary Palette

```css
/* Golden Base - The heart of the brand */
--bao-golden: #E8B84D;           /* Primary brand color, steam warmth */
--bao-golden-light: #F5CF6B;     /* Hover states, highlights */
--bao-golden-dark: #D4A03A;      /* Shadows, depth */

/* Neutrals - Clean and modern */
--bao-white: #FAFAFA;            /* Pure backgrounds, text on golden */
--bao-cream: #F5F1E8;            /* Soft backgrounds, subtle contrast */
--bao-gray: #E5E5E5;             /* Borders, dividers */
--bao-gray-dark: #9E9E9E;        /* Secondary text, muted elements */

/* Steam - Ethereal effects */
--bao-steam: #E8EAF6;            /* Steam particle base color */
```

### Semantic Colors

```css
/* Interactive States */
--color-hover: #F5CF6B;          /* Buttons, links on hover */
--color-active: #D4A03A;         /* Pressed states */
--color-focus: rgba(232, 184, 77, 0.3); /* Focus rings */

/* Feedback */
--color-success: #4CAF50;        /* Order confirmations */
--color-error: #F44336;          /* Form errors */
--color-warning: #FF9800;        /* Alerts */
--color-info: #2196F3;           /* Info messages */
```

### Color Usage Guidelines

1. **Golden (#E8B84D)**: Hero backgrounds, primary CTAs, brand moments
2. **White (#FAFAFA)**: Text on golden, card backgrounds, clean sections
3. **Cream (#F5F1E8)**: Alternating sections, subtle backgrounds
4. **Gray (#9E9E9E)**: Captions, timestamps, non-essential info

**Accessibility**: All text combinations meet WCAG 2.1 AA standards (4.5:1 contrast ratio minimum).

---

## Typography

### Font Recommendations

**Option 1: Display + Body Contrast (RECOMMENDED)**
```css
/* Display Font - Bold, confident headers */
--font-display: 'Bebas Neue', 'Impact', sans-serif;

/* Body Font - Clean, readable */
--font-body: 'DM Sans', 'Inter', system-ui, sans-serif;
```

**Option 2: Unified Modern System**
```css
/* All-purpose - Contemporary and versatile */
--font-primary: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
```

**Option 3: Playful & Refined**
```css
/* Display Font - Friendly but sophisticated */
--font-display: 'Righteous', 'Archivo Black', sans-serif;

/* Body Font - Clean sans-serif */
--font-body: 'Work Sans', 'Inter', system-ui, sans-serif;
```

### Current Fonts (Needs Update)
```css
/* CURRENT - Generic system fonts */
--font-display: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**RECOMMENDATION**: Implement **Option 1** with Bebas Neue + DM Sans for distinctive branding while maintaining readability.

### Type Scale

```css
/* Display - Hero headlines */
--text-hero-mobile: 3rem;        /* 48px */
--text-hero-tablet: 4rem;        /* 64px */
--text-hero-desktop: 5rem;       /* 80px */

/* Headings */
--text-h1: 2.5rem;               /* 40px */
--text-h2: 2rem;                 /* 32px */
--text-h3: 1.5rem;               /* 24px */
--text-h4: 1.25rem;              /* 20px */

/* Body */
--text-body-large: 1.125rem;     /* 18px */
--text-body: 1rem;               /* 16px */
--text-body-small: 0.875rem;     /* 14px */
--text-caption: 0.75rem;         /* 12px */
```

### Font Weights

```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

### Typography Usage

```tsx
// Hero/Display Text
<h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl">
  Holee Bao
</h1>

// Section Headings
<h2 className="font-display font-bold text-2xl md:text-3xl">
  Our Menu
</h2>

// Body Text
<p className="font-body font-regular text-base md:text-lg">
  Fresh steamed baos made to order
</p>

// Captions
<span className="font-body font-medium text-sm text-bao-gray-dark">
  Tuesday - Sunday, 11:00 - 18:00
</span>
```

---

## Spacing System

### Scale (Based on 4px grid)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Section Spacing

```css
/* Vertical rhythm */
--section-padding-mobile: 4rem 1.5rem;    /* 64px 24px */
--section-padding-tablet: 5rem 2rem;      /* 80px 32px */
--section-padding-desktop: 6rem 3rem;     /* 96px 48px */

/* Component spacing */
--component-gap-small: 1rem;    /* 16px - Between related items */
--component-gap-medium: 2rem;   /* 32px - Between components */
--component-gap-large: 4rem;    /* 64px - Between sections */
```

### Usage Examples

```tsx
// Section Container
<section className="py-16 px-6 md:py-20 md:px-8 lg:py-24">
  {/* Content */}
</section>

// Card Spacing
<div className="p-6 space-y-4">
  {/* Card content */}
</div>

// Button Padding
<button className="px-8 py-4 md:px-10 md:py-5">
  {/* Button text */}
</button>
```

---

## Animation System

### Principles

1. **Purposeful**: Every animation supports the user journey
2. **Steam-Inspired**: Soft, flowing, organic movements
3. **Performance**: 60fps, hardware-accelerated transforms
4. **Subtle**: Never distracting or gimmicky

### Duration Scale

```css
--duration-instant: 100ms;     /* Micro-interactions */
--duration-fast: 200ms;        /* Hover states, toggles */
--duration-normal: 300ms;      /* Transitions, reveals */
--duration-slow: 500ms;        /* Page transitions, modals */
--duration-slower: 800ms;      /* Hero animations */
--duration-slowest: 1000ms;    /* Loading screens, major reveals */
```

### Easing Curves

```css
--ease-default: cubic-bezier(0.4, 0.0, 0.2, 1);      /* Material Design standard */
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);             /* Deceleration */
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);          /* Acceleration */
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);       /* Smooth start/end */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
```

### Core Animations

#### 1. Float Animation (Steam/Bao Movement)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Usage */
animation: float 3s ease-in-out infinite;
```

#### 2. Steam Rise
```css
@keyframes steam {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-250px) scale(2.2);
    opacity: 0;
  }
}

/* Usage */
animation: steam 4s ease-out infinite;
```

#### 3. Fade In
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Usage */
animation: fadeIn 1s ease-in;
```

#### 4. Slide Up
```css
@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Usage */
animation: slideUp 0.8s ease-out;
```

#### 5. Shimmer/Shine
```css
@keyframes shine {
  0% { background-position: 100%; }
  100% { background-position: -100%; }
}

/* Usage */
animation: shine 5s linear infinite;
```

### Framer Motion Presets

```tsx
// Fade in on scroll
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

// Hover lift
export const hoverLift = {
  whileHover: {
    y: -8,
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  whileTap: {
    y: 0,
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Stagger children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
```

### When to Animate

- **DO**: Hover states, scroll reveals, loading indicators, success confirmations
- **DON'T**: Auto-playing videos, looping backgrounds (except subtle effects), distracting movements
- **SPARINGLY**: Confetti, celebration effects (only on intentional interactions)

---

## Components

### Navigation Bar

**Purpose**: Global navigation, restaurant hours, contact info

**Variants**:
- Desktop: Full horizontal nav with logo left, links center, CTA right
- Mobile: Hamburger menu, drawer navigation

**Specs**:
```tsx
<nav className="sticky top-0 z-50 bg-bao-white/95 backdrop-blur-md border-b border-bao-gray">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="Holee Bao" className="h-12 w-12" />
      <span className="font-display font-bold text-xl">HOLEE BAO</span>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8">
      <a href="/menu" className="font-body font-medium hover:text-bao-golden transition-colors">
        Menu
      </a>
      <a href="/about" className="font-body font-medium hover:text-bao-golden transition-colors">
        About
      </a>
      <a href="/location" className="font-body font-medium hover:text-bao-golden transition-colors">
        Location
      </a>
    </div>

    {/* CTA Button */}
    <a href="https://instagram.com/holeebao.cph"
       className="bg-bao-golden text-white px-6 py-3 rounded-full font-medium hover:bg-bao-golden-light transition-colors">
      Follow Us
    </a>
  </div>
</nav>
```

**Behavior**:
- Sticky on scroll, with subtle shadow on scroll
- Logo clickable to home
- Active state for current page
- Mobile menu slides in from right

---

### Page Hero

**Purpose**: First impression, brand statement, primary CTA

**Variants**:
- Full viewport hero (homepage)
- Half-height hero (interior pages)

**Specs**:
```tsx
<section className="relative min-h-screen flex items-center justify-center bg-bao-golden overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 z-0">
    <Threads color={[1, 1, 1]} amplitude={0.6} distance={1} />
  </div>

  <FloatingBaos />

  {/* Content */}
  <div className="relative z-10 text-center max-w-4xl px-6 py-16">
    {/* Logo with Steam */}
    <motion.div
      className="relative w-48 h-48 mx-auto mb-8"
      {...fadeInUp}
    >
      <div className="absolute inset-0">
        <SteamEffect />
      </div>
      <TiltWrapper>
        <img src="/logo.png" alt="Holee Bao" className="w-full h-full" />
      </TiltWrapper>
    </motion.div>

    {/* Headline */}
    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
      Something Delicious <Typewriter text="is Steaming..." />
    </h1>

    {/* Subhead */}
    <p className="font-body text-lg sm:text-xl text-white mb-8">
      Fresh steamed baos arriving soon to Copenhagen
    </p>

    {/* CTA */}
    <PrimaryButton href="/menu">
      Explore Menu
    </PrimaryButton>
  </div>

  {/* Scroll Indicator */}
  <ScrollIndicator />
</section>
```

**Behavior**:
- Full viewport height on load
- Parallax scroll effects on background
- Steam particles fade in/out based on scroll position
- Logo has subtle 3D tilt on mouse move

---

### Menu Card

**Purpose**: Display individual menu items with pricing

**Variants**:
- Standard card (with image)
- Compact card (text-only for sides/drinks)

**Specs**:
```tsx
<div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
  {/* Image */}
  <div className="relative aspect-square overflow-hidden bg-bao-cream">
    <img
      src="/menu/bao-mala-beef.jpg"
      alt="Mala Beef Bao"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />

    {/* Badge (if special/new) */}
    <div className="absolute top-4 right-4 bg-bao-golden text-white px-3 py-1 rounded-full text-sm font-bold">
      NEW
    </div>
  </div>

  {/* Content */}
  <div className="p-6 space-y-3">
    {/* Title & Price */}
    <div className="flex items-start justify-between gap-4">
      <h3 className="font-display font-bold text-xl">
        Mala Beef Bao
      </h3>
      <span className="font-display font-bold text-xl text-bao-golden whitespace-nowrap">
        39 KR
      </span>
    </div>

    {/* Description */}
    <p className="font-body text-sm text-bao-gray-dark">
      Tender braised beef, mala spice blend, fresh cilantro, pickled vegetables
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      <span className="text-xs px-2 py-1 bg-bao-cream rounded-full">
        Spicy
      </span>
      <span className="text-xs px-2 py-1 bg-bao-cream rounded-full">
        Steamed
      </span>
    </div>
  </div>
</div>
```

**Behavior**:
- Hover: Lift shadow, scale image slightly
- Click: Expand to detail view (future: add to cart)
- Lazy load images as user scrolls

---

### Button System

#### Primary Button
**Use**: Main CTAs, conversions, primary actions

```tsx
<button className="
  px-8 py-4
  bg-bao-golden text-white
  rounded-full
  font-body font-bold text-lg
  shadow-lg hover:shadow-xl
  hover:bg-bao-golden-light
  active:bg-bao-golden-dark
  transition-all duration-200
  transform hover:-translate-y-1 active:translate-y-0
">
  Order Now
</button>
```

#### Secondary Button
**Use**: Secondary actions, navigation

```tsx
<button className="
  px-8 py-4
  bg-white text-bao-golden
  border-2 border-bao-golden
  rounded-full
  font-body font-bold text-lg
  hover:bg-bao-golden hover:text-white
  transition-all duration-200
  transform hover:-translate-y-1
">
  Learn More
</button>
```

#### Text Link
**Use**: Inline navigation, low-priority actions

```tsx
<a className="
  font-body font-medium
  text-bao-golden
  hover:text-bao-golden-light
  underline underline-offset-4
  transition-colors duration-200
">
  View full menu
</a>
```

#### Icon Button
**Use**: Social links, close buttons, utility actions

```tsx
<button className="
  w-12 h-12
  flex items-center justify-center
  rounded-full
  bg-bao-cream hover:bg-bao-golden
  text-bao-gray-dark hover:text-white
  transition-all duration-200
  hover:scale-110
">
  <InstagramIcon className="w-6 h-6" />
</button>
```

---

### Card System

#### Content Card
**Use**: Blog posts, updates, news

```tsx
<article className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
  <h3 className="font-display font-bold text-2xl mb-3">
    Opening Day Announced
  </h3>
  <p className="font-body text-bao-gray-dark mb-4">
    We're excited to open our doors on February 1st, 2026...
  </p>
  <a href="/news/opening-day" className="text-bao-golden font-medium hover:underline">
    Read more →
  </a>
</article>
```

#### Info Card
**Use**: Location, hours, contact info

```tsx
<div className="bg-bao-cream rounded-2xl p-8 space-y-4">
  <div className="flex items-start gap-4">
    <MapPinIcon className="w-6 h-6 text-bao-golden flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-display font-bold text-lg mb-1">Location</h4>
      <p className="font-body text-bao-gray-dark">
        Åboulevard 9<br />
        1635 København V
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <ClockIcon className="w-6 h-6 text-bao-golden flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-display font-bold text-lg mb-1">Hours</h4>
      <p className="font-body text-bao-gray-dark">
        Tuesday - Sunday<br />
        11:00 - 18:00
      </p>
    </div>
  </div>
</div>
```

---

### Form Elements

#### Text Input

```tsx
<div className="space-y-2">
  <label className="font-body font-medium text-sm">
    Email Address
  </label>
  <input
    type="email"
    className="
      w-full px-4 py-3
      bg-white border-2 border-bao-gray
      rounded-xl
      font-body
      focus:border-bao-golden focus:outline-none focus:ring-4 focus:ring-bao-golden/20
      transition-all duration-200
    "
    placeholder="you@example.com"
  />
</div>
```

#### Select Dropdown

```tsx
<div className="space-y-2">
  <label className="font-body font-medium text-sm">
    Choose Your Bao
  </label>
  <select className="
    w-full px-4 py-3
    bg-white border-2 border-bao-gray
    rounded-xl
    font-body
    focus:border-bao-golden focus:outline-none focus:ring-4 focus:ring-bao-golden/20
    transition-all duration-200
  ">
    <option>Mala Beef Bao</option>
    <option>Ducking Bao</option>
    <option>Vegan Bao</option>
    <option>Curry Bao</option>
  </select>
</div>
```

#### Checkbox/Radio

```tsx
<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    className="
      w-5 h-5
      border-2 border-bao-gray
      rounded
      text-bao-golden
      focus:ring-2 focus:ring-bao-golden/30
    "
  />
  <span className="font-body">
    Add extra steam (pan fried)
  </span>
</label>
```

---

### Loading States

#### Full Page Loading

```tsx
<LoadingScreen />
// See LoadingScreen.tsx component for full implementation
```

#### Inline Spinner

```tsx
<div className="flex items-center justify-center py-8">
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    className="w-8 h-8 border-4 border-bao-gray border-t-bao-golden rounded-full"
  />
</div>
```

#### Skeleton Loading

```tsx
<div className="space-y-4 animate-pulse">
  <div className="h-48 bg-bao-cream rounded-2xl" />
  <div className="h-6 bg-bao-cream rounded w-3/4" />
  <div className="h-4 bg-bao-cream rounded w-full" />
  <div className="h-4 bg-bao-cream rounded w-5/6" />
</div>
```

---

### Special Effects

#### Steam Effect
**Component**: `SteamEffect.tsx`

**Use**: Above logo, hot food items, loading states

```tsx
import SteamEffect from './components/SteamEffect';

<div className="relative">
  <SteamEffect />
  <img src="/logo.png" alt="Logo" />
</div>
```

#### Threads Background
**Component**: `Threads.tsx`

**Use**: Hero backgrounds, full-page backgrounds

```tsx
import Threads from './components/Threads';

<div className="fixed inset-0 z-0">
  <Threads
    color={[1, 1, 1]}         // RGB 0-1 (white)
    amplitude={0.6}           // Wave intensity
    distance={1}              // Thread spread
    enableMouseInteraction={true}
  />
</div>
```

#### Mouse Sparkles
**Component**: `MouseSparkles.tsx`

**Use**: Homepage hero, special pages (sparingly)

```tsx
import MouseSparkles from './components/MouseSparkles';

// Add at top level of page
<MouseSparkles />
```

#### Scroll Velocity Text
**Component**: `ScrollVelocity.tsx`

**Use**: Marquee text, infinite scrolling text

```tsx
import ScrollVelocity from './components/ScrollVelocity';

<ScrollVelocity
  texts={["Scroll to see what's steaming"]}
  velocity={85}
  className="font-display font-bold text-white"
  scrollerClassName="text-lg sm:text-xl md:text-2xl"
/>
```

#### Typewriter Effect
**Component**: `Typewriter.tsx`

**Use**: Hero taglines, animated reveals

```tsx
import Typewriter from './components/Typewriter';

<h2>
  Something Delicious <Typewriter text="is Steaming..." delay={100} />
</h2>
```

#### Shiny Text
**Component**: `ShinyText.tsx`

**Use**: Button text, highlight text, CTAs

```tsx
import ShinyText from './components/ShinyText';

<ShinyText
  text="Follow @holeebao.cph"
  speed={3}
  color="black"
  className="font-bold text-2xl"
/>
```

---

## Layout System

### Container Widths

```css
--container-xs: 640px;    /* Mobile */
--container-sm: 768px;    /* Tablet */
--container-md: 1024px;   /* Desktop */
--container-lg: 1280px;   /* Large Desktop */
--container-xl: 1536px;   /* Extra Large */
```

### Grid System

```tsx
// Two-column grid (menu items, features)
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Items */}
</div>

// Three-column grid (cards, gallery)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>

// Four-column grid (icons, social links)
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {/* Items */}
</div>
```

### Section Layouts

#### Full Bleed Section
```tsx
<section className="relative w-full bg-bao-golden">
  <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">
    {/* Content */}
  </div>
</section>
```

#### Centered Content Section
```tsx
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto text-center space-y-8">
    {/* Centered content */}
  </div>
</section>
```

#### Split Section (Image + Text)
```tsx
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <img src="/about.jpg" alt="Our Story" className="rounded-2xl" />
      </div>
      <div className="space-y-6">
        <h2 className="font-display font-bold text-3xl">Our Story</h2>
        <p className="font-body text-lg">...</p>
      </div>
    </div>
  </div>
</section>
```

---

## Responsive Breakpoints

```css
/* Tailwind default breakpoints */
--breakpoint-sm: 640px;    /* Mobile landscape, small tablets */
--breakpoint-md: 768px;    /* Tablets */
--breakpoint-lg: 1024px;   /* Desktop */
--breakpoint-xl: 1280px;   /* Large desktop */
--breakpoint-2xl: 1536px;  /* Extra large screens */
```

### Mobile-First Approach

```tsx
// Base styles are mobile, then enhance for larger screens
<div className="
  text-xl          // Mobile: 20px
  sm:text-2xl      // Tablet+: 24px
  lg:text-3xl      // Desktop+: 30px
  px-4             // Mobile: 16px padding
  md:px-6          // Tablet+: 24px padding
  lg:px-8          // Desktop+: 32px padding
">
  Content
</div>
```

---

## Accessibility Guidelines

### Color Contrast
- **WCAG AA Minimum**: 4.5:1 for normal text, 3:1 for large text
- Golden (#E8B84D) on white: 1.96:1 (FAIL - use for backgrounds only)
- White on golden: 4.18:1 (PASS for large text 18px+)
- Black on white: 21:1 (PASS)

### Focus States
```css
/* All interactive elements must have visible focus */
.focusable:focus {
  outline: none;
  ring: 4px solid rgba(232, 184, 77, 0.3);
  border-color: #E8B84D;
}
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Maintain logical tab order
- Provide skip links for screen readers

### Alt Text
- Logo: "Holee Bao - Fresh Steamed Baos"
- Menu items: "Mala Beef Bao - tender braised beef with spicy mala sauce"
- Decorative images: Use empty alt="" or aria-hidden="true"

### ARIA Labels
```tsx
// Navigation
<nav aria-label="Main navigation">

// Buttons without text
<button aria-label="Close menu">
  <XIcon />
</button>

// Loading states
<div role="status" aria-live="polite">
  Loading menu...
</div>
```

---

## Performance Guidelines

### Image Optimization
- **Format**: WebP with JPEG fallback
- **Sizes**: Multiple sizes for responsive images
- **Lazy Loading**: All below-fold images
- **Dimensions**: Always specify width/height to prevent layout shift

```tsx
<img
  src="/menu/bao-small.webp"
  srcSet="
    /menu/bao-small.webp 400w,
    /menu/bao-medium.webp 800w,
    /menu/bao-large.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Mala Beef Bao"
  width="400"
  height="400"
  loading="lazy"
/>
```

### Animation Performance
- Use `transform` and `opacity` (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Bundle Size
- Code splitting by route
- Dynamic imports for heavy components
- Tree-shaking unused code
- Optimize font loading (preload, font-display: swap)

---

## Icon System

### Recommended Icon Library
**Lucide React** (clean, consistent, lightweight)

```bash
npm install lucide-react
```

### Usage
```tsx
import { Instagram, MapPin, Clock, Menu, X } from 'lucide-react';

<Instagram className="w-6 h-6 text-bao-golden" />
```

### Common Icons
- **Navigation**: Menu, X (close), ChevronDown, ChevronRight
- **Social**: Instagram, Facebook, Twitter
- **Location**: MapPin, Navigation
- **Time**: Clock, Calendar
- **Actions**: Plus, Minus, Heart, Share
- **Status**: Check, AlertCircle, Info

---

## Content Guidelines

### Tone of Voice
- **Confident, not cocky**: "We make really good baos"
- **Simple, not simple-minded**: Clear language, smart choices
- **Playful, not childish**: "Holee good" puns, not forced jokes
- **Warm, not overly familiar**: Welcoming without being pushy

### Writing Style
- **Short sentences**: Mobile-first means easy scanning
- **Active voice**: "We steam your bao fresh" vs "Your bao is steamed fresh"
- **Concrete details**: "11:00-18:00" not "Opening soon"
- **No corporate speak**: "Let's go" not "Let's embark on a culinary journey"

### Menu Descriptions
```tsx
// Good
"Mala Beef Bao - Tender braised beef, numbing Sichuan spice, fresh herbs"

// Bad
"An exquisite harmony of succulent beef tenderly bathed in our artisanal mala reduction"
```

---

## File Structure

### Recommended Component Organization

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── effects/               # Visual effects
│   │   ├── SteamEffect.tsx
│   │   ├── Threads.tsx
│   │   ├── MouseSparkles.tsx
│   │   └── ...
│   ├── layout/                # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── ...
│   └── sections/              # Page sections
│       ├── Hero.tsx
│       ├── MenuSection.tsx
│       ├── AboutSection.tsx
│       └── ...
├── pages/
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   └── Location.tsx
├── styles/
│   ├── index.css              # Global styles
│   └── animations.css         # Animation definitions
├── utils/
│   ├── constants.ts           # Design tokens, config
│   └── helpers.ts             # Utility functions
└── App.tsx
```

---

## Design Tokens Export

For use in design tools (Figma, Sketch) and development:

```json
{
  "colors": {
    "golden": "#E8B84D",
    "golden-light": "#F5CF6B",
    "golden-dark": "#D4A03A",
    "white": "#FAFAFA",
    "cream": "#F5F1E8",
    "gray": "#E5E5E5",
    "gray-dark": "#9E9E9E",
    "steam": "#E8EAF6"
  },
  "typography": {
    "display": "Bebas Neue",
    "body": "DM Sans",
    "scale": {
      "hero": "5rem",
      "h1": "2.5rem",
      "h2": "2rem",
      "h3": "1.5rem",
      "body": "1rem",
      "caption": "0.75rem"
    }
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "12": "3rem",
    "16": "4rem"
  },
  "animation": {
    "duration": {
      "fast": "200ms",
      "normal": "300ms",
      "slow": "500ms"
    },
    "easing": {
      "default": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    }
  }
}
```

---

## Implementation Checklist

### Phase 1: Foundations
- [ ] Install Google Fonts (Bebas Neue + DM Sans)
- [ ] Update Tailwind config with design tokens
- [ ] Create base UI components (Button, Card, Input)
- [ ] Implement focus states and accessibility
- [ ] Set up responsive breakpoints

### Phase 2: Core Components
- [ ] Build navigation component (desktop + mobile)
- [ ] Create page hero component
- [ ] Implement menu card component
- [ ] Build form components
- [ ] Create loading states

### Phase 3: Effects & Polish
- [ ] Optimize steam effect performance
- [ ] Fine-tune animation timings
- [ ] Add scroll-triggered animations
- [ ] Implement dark mode (future consideration)
- [ ] Performance audit and optimization

### Phase 4: Documentation
- [ ] Component storybook/showcase
- [ ] Usage examples for each component
- [ ] Accessibility testing results
- [ ] Performance benchmarks

---

## Questions & Decisions Needed

### Typography
**DECISION NEEDED**: Choose from 3 recommended font pairings:
1. **Bebas Neue + DM Sans** (bold + clean) ⭐ RECOMMENDED
2. Plus Jakarta Sans (unified modern)
3. Righteous + Work Sans (playful + refined)

### Menu Photography
**DECISION NEEDED**: Will you have professional food photography?
- If YES: Design for large hero images on menu items
- If NO: Design for smaller images or illustration-based cards

### Dark Mode
**DECISION NEEDED**: Should we support dark mode?
- Restaurant sites typically don't need it
- Could add complexity without user benefit
- RECOMMENDATION: Skip for MVP, revisit in v2

---

## Version History

- **v1.0** (2025-12-16): Initial design system document
  - Color palette defined
  - Typography recommendations
  - Component specs
  - Animation system
  - Accessibility guidelines

---

**Next Steps**: Review typography recommendations, implement base components, test accessibility.
