# Holee Bao Website - Project Plan

**Project Status:** Planning Phase
**Started:** 2025-12-16
**Target Launch:** Early 2026

---

## Project Overview

Transitioning from "Coming Soon" landing page to full restaurant website for Holee Bao, a steamed bao restaurant in Copenhagen.

**Current Status:**
- ✅ Coming Soon landing page live
- ✅ Requirements gathered
- ✅ MVP website built (4 pages)
- ⏳ Testing and refinement needed

---

## ✅ Requirements Gathered

### 1. Menu & Food

**BAOS** - 1 for 39KR / 2 for 69KR (steam or pan fried)
- Mala Beef Bao
- Ducking Bao (duck)
- Vegan Bao
- Curry Bao (chicken and veg)

**BOWLS** - Choose noodles (2 types) or plain rice
Proteins:
- Hong Shao Pork
- Braised Beef
- Jingdu Chicken (tomato)
- Braised Mock Duck

**TO SHARE**
- Agurk Salad - 49KR
- Chili Oil Beef Lotus Mala - 69KR
- Silky Tofu w/ chili oil - 49KR
- Prawn Toast (4 pcs) - 69KR

**SPECIALS** (Weekend/Monthly)
- Char Siu Bao
- Custard Bao
- Chives & Pork Bao (weekend only)
- Bolo Bao with custard or black sesame
- XLB (pork/veg/chicken) 4 for 69KR (weekend only)

**DESSERT**
- Black Sesame Soft Ice - 60KR

**COFFEE**
- Americano (price TBD)

### 2. Business Model
- ✅ **Primarily Takeaway** with dine-in option (like Lee's Kitchen)
- ✅ **Walk-in only** - no reservations (keeps it moving)
- ✅ **No online ordering for now** (MVP)
- ✅ **Hours:** 11:00-18:00 (Tuesday-Sunday)
- ✅ **Opening:** Early 2026

### 3. Brand & Story
- ✅ **Location:** Åboulevard 7, st tv, 1635 København V
- ✅ **Team:** Same crew behind Lee's Kitchen (est. 2021)
- ✅ **Philosophy:** Modern Chinese food without the fuss, quality ingredients, no-nonsense execution
- ✅ **What's Unique:**
  - Hyper-focused menu (baos + sides)
  - Fresh steamed to order (not sitting in warmers)
  - Modern fillings + traditional technique
  - Walk-in only (keeps it real)
- ✅ **Brand Voice:** Casual/playful, confident, no pretension, Copenhagen casual, social media friendly
  - Example: "Holee good baos"
  - "We make baos. Really good ones. That's it."

### 4. Website Goals
- ✅ **Primary Goal:** Instagram follow
- ✅ **MVP Focus:** Keep it simple
- ✅ **v2 Features:** Online ordering (future)

### 5. Design Direction
- ✅ **Keep golden/steamy aesthetic**
- ✅ **Tone:** Minimalist but playful
- ✅ **Vibe:** Fun without being gimmicky, confident, straight-talk

---

## Site Structure (MVP)

```
/                    → Homepage (hero, quick menu preview, Instagram CTA)
/menu               → Full menu (Baos, Bowls, To Share, Specials, Dessert)
/about              → Story (Lee's Kitchen heritage, team, philosophy)
/location           → Address, map, hours (11-18, Tue-Sun)
```

**V2 Features (Future):**
- Online ordering system
- Newsletter signup
- Menu item detail pages with photos

---

## Agent Assignment Plan

### **Agent 1: Architect**
- Research restaurant website best practices
- Design information architecture
- Plan routing and navigation
- Define data models (menu structure, etc.)

### **Agent 2: Design System**
- Create component library
- Design tokens (colors, typography, spacing)
- Animation system
- Reusable UI patterns

### **Agent 3: Pages - Homepage/Menu**
- Homepage redesign
- Menu page implementation
- Food photography layout

### **Agent 4: Pages - About/Location**
- About page
- Location/contact page
- Embedded maps

### **Agent 5: Documentation & QA**
- Maintain project docs
- Testing checklist
- Performance optimization
- Mobile responsiveness checks

---

## Technical Stack (Current)

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion
- **Effects:** OGL (WebGL), canvas-confetti
- **Routing:** Need to add (React Router?)
- **Backend:** TBD (if ordering/reservations needed)

---

## ✅ What We've Built So Far

### Core Infrastructure
- ✅ React Router setup (multi-page navigation)
- ✅ Menu data structure (TypeScript interfaces)
- ✅ Design system document ([DESIGN_SYSTEM.md](DESIGN_SYSTEM.md))
- ✅ Component library (Navigation, Steam, Threads, Effects)

### Pages Completed
1. **Homepage** ([src/pages/HomePage.tsx](src/pages/HomePage.tsx))
   - Hero with logo + steam effect
   - Primary CTAs (View Menu, Follow Instagram)
   - Quick info grid (Hours, Takeaway, Walk-in)

2. **Menu Page** ([src/pages/MenuPage.tsx](src/pages/MenuPage.tsx))
   - All menu sections (Baos, Bowls, To Share, Specials, Dessert, Drinks)
   - Pricing displayed
   - Tags (Vegan, Vegetarian, Weekend, Cooking method)
   - Responsive 2-column grid

3. **About Page** ([src/pages/AboutPage.tsx](src/pages/AboutPage.tsx))
   - Story section
   - "What Makes Us Different" (4 features)
   - Philosophy quote
   - Walk-in only callout

4. **Location Page** ([src/pages/LocationPage.tsx](src/pages/LocationPage.tsx))
   - Address with Google Maps link
   - Opening hours table
   - Service info (Takeaway, Dine-in, Walk-in, Payment)
   - Map placeholder

### Visual Effects
- ✅ Threads WebGL background (OGL library)
- ✅ Steam particles (canvas-based)
- ✅ Floating Baos (Framer Motion)
- ✅ Mouse Sparkles (disabled confetti)
- ✅ Scroll animations (Framer Motion)
- ✅ Loading screen (2.5s golden screen)

---

## 🚧 What Needs To Be Done Next

### Phase 1: Polish & Testing (This Week)
1. **Typography Upgrade**
   - [ ] Install Google Fonts (Syne or Bebas Neue for display)
   - [ ] Update Tailwind config with new fonts
   - [ ] Replace generic system fonts across all pages

2. **Mobile Optimization**
   - [ ] Test all pages on mobile viewport (375px-768px)
   - [ ] Fix any overflow issues
   - [ ] Optimize touch targets (min 44px)
   - [ ] Test hamburger menu navigation

3. **Performance**
   - [ ] Optimize WebGL effects for mobile
   - [ ] Lazy load components
   - [ ] Check bundle size
   - [ ] Test loading speed

4. **Content & Images**
   - [ ] Add menu item photos (if available)
   - [ ] Optimize logo image
   - [ ] Add favicon
   - [ ] Update meta tags (SEO)

### Phase 2: Launch Prep (Next Week)
5. **Analytics & Tracking**
   - [ ] Add Google Analytics
   - [ ] Track Instagram clicks
   - [ ] Monitor page views

6. **SEO**
   - [ ] Meta descriptions for all pages
   - [ ] Open Graph tags for social sharing
   - [ ] Structured data (restaurant schema)
   - [ ] Sitemap generation

7. **Deployment**
   - [ ] Choose hosting (Vercel/Netlify recommended)
   - [ ] Set up custom domain
   - [ ] SSL certificate
   - [ ] Deploy preview build
   - [ ] Final testing on live URL

### Phase 3: V2 Features (Later)
8. **Advanced Features**
   - [ ] Online ordering system
   - [ ] Newsletter signup
   - [ ] Menu item detail pages
   - [ ] Photo gallery
   - [ ] CMS integration (Sanity/Contentful)

---

## 📊 Current Project Status

**Timeline:**
- ✅ **Day 1** (2025-12-16): Requirements → MVP built
- 🔄 **Day 2-3**: Polish, testing, typography
- 🔄 **Day 4-5**: SEO, deployment prep
- 🎯 **Day 6**: Launch!

**Branch:** `feature/full-website-mvp`

**Files Modified:**
- Created: 7 new files (HomePage, MenuPage, AboutPage, LocationPage, AppRouter, Navigation, menuData)
- Modified: 3 files (main.tsx, App.tsx, FloatingBaos.tsx)
- Documentation: PROJECT_PLAN.md, DESIGN_SYSTEM.md

**Tech Stack:**
- React 18 + TypeScript
- Vite (build tool)
- React Router (navigation)
- Tailwind CSS (styling)
- Framer Motion (animations)
- OGL (WebGL effects)

---

## 🎯 Next Steps (Priority Order)

1. **Test the website locally** - Make sure everything works
2. **Choose typography** - Distinctive display font
3. **Mobile optimization** - Test on real devices
4. **Deploy preview** - Get it online for testing
5. **Gather feedback** - Show to stakeholders
6. **Final polish** - Fix any issues
7. **Launch** - Go live!

---

---

*Last updated: 2025-12-16*
