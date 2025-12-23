# Enhanced Landing Page Plan - Holee Bao

**Goal:** Create a playful, memorable landing page that's fun but not gimmicky, showing off the brand personality

---

## 🎯 Design Direction: "Steam Punk Playfulness"

**Vibe:** Minimalist + Playful + Confident
- Think: **Airbnb meets Duolingo** (clean but fun)
- **NOT:** Generic restaurant site, corporate, serious
- **YES:** Interactive, delightful, makes you smile

---

## 📐 Layout Structure (Full Viewport Sections)

### **Section 1: Hero** (100vh)
**Purpose:** Make a statement, capture attention

**Elements:**
- Massive logo (3x bigger than current)
- HUGE steam effect (fills the screen)
- Animated text: "Holee Good Baos"
- Typewriter subtext: "Coming to Copenhagen Early 2026"
- Bouncing scroll indicator
- **NEW EFFECT:** Floating bao emoji (🥟) that follows cursor with spring physics

---

### **Section 2: The Promise** (100vh)
**Purpose:** What we're all about (1-2 sentences max)

**Elements:**
- Big bold quote in center:
  > "We make baos. Really good ones. That's it."
- Background: Animated gradient mesh (golden to cream)
- **NEW EFFECT:** Words "pop" in one by one with bounce animation

---

### **Section 3: Quick Tease** (100vh - horizontal scroll)
**Purpose:** Show menu highlights without overwhelming

**Elements:**
- Horizontal scrolling cards (4 items)
  - Mala Beef Bao
  - Vegan Bao
  - XLB (Weekend Special)
  - Black Sesame Ice
- Each card:
  - Big emoji (🥟🌱🥢🍦)
  - Item name
  - One-line teaser
- **NEW EFFECT:** Cards tilt on hover (3D effect)
- "View Full Menu" button below

---

### **Section 4: The Story** (100vh)
**Purpose:** Lee's Kitchen heritage, quick credibility

**Elements:**
- Split layout:
  - **Left:** "From Lee's Kitchen (est. 2021)"
  - **Right:** "Now... Holee Bao" with steam animation
- Timeline animation showing progression
- **NEW EFFECT:** Parallax scroll (left slower than right)

---

### **Section 5: Location Hero** (100vh)
**Purpose:** Where & When

**Elements:**
- Huge address text centered:
  > **Åboulevard 9**
  > **København V**
- "Opening Early 2026" with countdown (days until Jan 2026)
- Map outline animation (SVG animating in)
- **NEW EFFECT:** Pulsing location pin

---

### **Section 6: Instagram CTA** (100vh)
**Purpose:** Get followers NOW

**Elements:**
- Giant Instagram icon (animated gradient)
- "@holeebao.cph" in HUGE text
- "Follow for updates" subtext
- Recent Instagram feed preview (if API available)
- **NEW EFFECT:** Shaking/wiggle animation on button hover

---

## 🎨 New Playful Effects to Add

### 1. **Cursor Follower Bao**
- 🥟 emoji follows cursor with spring delay
- Rotates slightly as it moves
- Only on desktop (hide on mobile)

### 2. **Text Scramble Effect**
- Main headline letters scramble then settle into place
- Like a slot machine effect
- One-time on page load

### 3. **Floating Ingredients**
- Random food emoji float up from bottom
- 🥬 🌶️ 🧄 🥕 etc.
- Fade out as they rise
- Subtle, not overwhelming

### 4. **Steam Intensity**
- Steam particles increase when hovering over logo
- "Heat up" effect
- Particles get bigger/faster

### 5. **Scroll Progress Indicator**
- Thin golden line at top shows scroll progress
- Fills from left to right as you scroll down

### 6. **Section Transitions**
- Each section fades in with slide-up animation
- Stagger child elements
- Use Framer Motion's viewport detection

### 7. **Bouncing Arrow**
- Down arrow at bottom of each section
- Bounces to encourage scrolling
- Smooth scroll to next section on click

### 8. **Typewriter with Sound** (optional)
- Add subtle "click" sound effect on each letter
- Muted by default, toggle on/off
- Fun Easter egg

---

## 🎭 Interactive Moments

### **Easter Eggs:**
1. **Triple-click logo** → Confetti explosion (one-time)
2. **Konami code** → Secret "Chef's Special" message
3. **Shake phone (mobile)** → Steam intensifies
4. **Long press bao emoji** → It "steams" and grows

### **Microinteractions:**
1. All buttons have spring hover effect
2. Navigation underline slides with spring physics
3. Cards have magnetic hover (slight pull toward cursor)
4. Input focus has golden glow ripple

---

## 📱 Mobile Optimizations

**Changes for < 768px:**
- Remove cursor follower bao
- Simplify steam effect (fewer particles)
- Disable threads effect (performance)
- Stack horizontal scrolling cards vertically
- Reduce animation complexity
- Larger touch targets (min 48px)

---

## 🚀 Implementation Priority

### **Phase 1: Structure** (Now)
1. ✅ Remove mouse sparkles
2. Create full-height sections
3. Add scroll snap behavior
4. Implement section transitions

### **Phase 2: Core Effects** (Next)
5. Cursor follower bao (desktop only)
6. Enhanced steam effect with hover intensity
7. Text scramble on hero
8. Scroll progress indicator

### **Phase 3: Polish** (Later)
9. Floating ingredients
10. Easter eggs
11. Sound effects (optional)
12. Parallax sections

### **Phase 4: Content** (Final)
13. Write punchy copy for each section
14. Get food emoji or simple illustrations
15. Instagram feed integration
16. Final mobile testing

---

## 🎨 Typography Upgrade (Do This First)

**Install Google Fonts:**
```bash
npm install @fontsource/syne @fontsource/dm-sans
```

**Fonts:**
- **Display:** Syne (Bold, Black) - for headlines
- **Body:** DM Sans (Regular, Medium) - for text

**Usage:**
- Hero: Syne Black, 8rem → 12rem
- Sections: Syne Bold, 4rem → 6rem
- Body: DM Sans Regular, 1.25rem → 1.5rem

---

## 📊 Performance Targets

- **First Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Total Blocking Time:** < 300ms
- **Mobile PageSpeed:** > 90
- **Desktop PageSpeed:** > 95

**Optimizations:**
- Lazy load sections below fold
- Use CSS transforms (GPU accelerated)
- Reduce WebGL complexity on mobile
- Preload critical fonts
- Code split by route

---

## 🎬 Animation Timeline

**Page Load Sequence:**
1. Loading screen (2.5s)
2. Hero fades in (0.5s)
3. Logo scales up (0.8s)
4. Text scramble settles (1.5s)
5. Steam starts rising (ongoing)
6. Scroll indicator bounces (ongoing)

**Scroll Sequence:**
- Section enters viewport → Fade up + slide
- Delay: 100ms between child elements
- Ease: easeOut
- Duration: 600ms

---

## 💡 Copy Suggestions

**Hero:**
> # Holee Good Baos
> Fresh steamed baos arriving Early 2026

**Section 2:**
> ## We make baos.
> ## Really good ones.
> ## That's it.

**Section 3:**
> Sneak Peek at the Menu

**Section 4:**
> From the team behind Lee's Kitchen
> Now something new is steaming...

**Section 5:**
> ## Find Us Here
> Åboulevard 9, København V
> Opening Early 2026

**Section 6:**
> ## Follow the Journey
> @holeebao.cph on Instagram
> [Giant Follow Button]

---

## 🔧 Technical Stack Additions

**New Dependencies:**
```json
{
  "@fontsource/syne": "^5.0.0",
  "@fontsource/dm-sans": "^5.0.0",
  "react-spring": "^9.7.0",  // For cursor follower physics
  "react-intersection-observer": "^9.5.0"  // For scroll detection
}
```

**Component Structure:**
```
src/
├── pages/
│   └── LandingPage.tsx (NEW - replaces HomePage)
├── components/
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── PromiseSection.tsx
│   │   ├── MenuTeaseSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── LocationSection.tsx
│   │   └── InstagramSection.tsx
│   ├── effects/
│   │   ├── CursorFollower.tsx (NEW)
│   │   ├── TextScramble.tsx (NEW)
│   │   ├── FloatingIngredients.tsx (NEW)
│   │   └── ScrollProgress.tsx (NEW)
```

---

## ✅ Success Criteria

**The landing page is ready when:**
1. ✅ All 6 sections implemented
2. ✅ Smooth scroll between sections
3. ✅ All animations working smoothly (60fps)
4. ✅ Mobile responsive and performant
5. ✅ Typography upgraded to Syne + DM Sans
6. ✅ At least 3 playful effects implemented
7. ✅ Instagram CTA prominent and working
8. ✅ No horizontal scroll issues
9. ✅ Loads in < 3s on mobile
10. ✅ Makes you smile when you see it

---

**Next Step:** Implement Phase 1 - Create the 6 full-height sections with scroll snap! 🥟
