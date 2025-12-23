# Steamer Basket Loading Animation - Detailed Implementation Plan

## Design Concept
A bamboo steamer basket that closes and then opens to reveal the HO LEE BAO logo, mimicking the action of opening a fresh steamer to reveal hot baos inside.

## Visual Breakdown

### Elements
1. **Background**: Golden yellow (#E8B84D) - brand color
2. **Logo**: Our white-on-yellow logo or "HO LEE BAO" text in center
3. **Bamboo Slats**: Horizontal wooden texture bars that slide in/out
4. **Steam Particles**: Rising vapor effect when steamer opens
5. **Glow Effect**: Golden radial glow around logo when revealed

### Bamboo Slat Design
- **Count**: 6-8 horizontal slats
- **Appearance**:
  - Semi-transparent bars with subtle wood texture
  - Color: Darker brown/tan (#8B6F47) with slight gradient
  - Height: 40-60px each
  - Full viewport width
  - Slight spacing between slats (10-15px gaps to peek through)
- **Position**: Stacked vertically to cover entire viewport height

## Animation Timeline (3.0 seconds total)

### Phase 1: Initial State (0.0s - 0.3s)
**State**:
- Logo visible in center, small scale (0.7), low opacity (0.3)
- Slats positioned off-screen (top and bottom)
- No steam

**What happens**:
- Logo fades in softly
- User sees faded logo in center

### Phase 2: Closing Steamer (0.3s - 1.2s)
**Duration**: 0.9s
**Animation**:
- Top slats (3-4 bars) slide DOWN from above viewport
- Bottom slats (3-4 bars) slide UP from below viewport
- They meet in the middle, covering the logo
- Easing: ease-in (starts slow, speeds up - like gravity)

**Technical**:
```javascript
// Top slats
initial: { y: '-100vh' }
animate: { y: '0vh' }
transition: { duration: 0.9, delay: 0.3, ease: [0.42, 0, 1, 1] }

// Bottom slats
initial: { y: '100vh' }
animate: { y: '0vh' }
transition: { duration: 0.9, delay: 0.3, ease: [0.42, 0, 1, 1] }
```

**Stagger**: Each slat has slight delay (0.05s) for natural bamboo stacking effect

### Phase 3: Pause - Steam Building (1.2s - 1.5s)
**Duration**: 0.3s
**State**:
- Slats fully closed (covering screen)
- Logo hidden behind slats
- Brief pause creates anticipation

**What happens**:
- Subtle steam starts appearing from gaps between slats
- No movement - just anticipation

### Phase 4: Opening Steamer (1.5s - 2.3s)
**Duration**: 0.8s
**Animation**:
- Top slats slide UP (back off screen)
- Bottom slats slide DOWN (back off screen)
- Logo scales up to 1.0 and opacity to 1.0
- Steam particles rise more vigorously
- Golden glow appears around logo
- Easing: ease-out (starts fast, slows down - gentle reveal)

**Technical**:
```javascript
// Top slats exit
animate: { y: '-100vh', opacity: 0 }
transition: { duration: 0.8, delay: 1.5, ease: [0, 0, 0.58, 1] }

// Bottom slats exit
animate: { y: '100vh', opacity: 0 }
transition: { duration: 0.8, delay: 1.5, ease: [0, 0, 0.58, 1] }

// Logo reveal
animate: { scale: 1, opacity: 1 }
transition: { duration: 0.6, delay: 1.6, ease: 'easeOut' }

// Glow effect
animate: { opacity: 1, scale: 1.2 }
transition: { duration: 0.8, delay: 1.6 }
```

**Stagger**: Reverse stagger - outer slats move first, creating unwrapping effect

### Phase 5: Full Reveal + Steam (2.3s - 2.8s)
**Duration**: 0.5s
**State**:
- Slats completely off-screen
- Logo at full size and brightness
- Heavy steam rising
- Golden glow pulsing subtly

**What happens**:
- Logo very subtle float animation
- Steam particles active
- User sees the revealed brand

### Phase 6: Fade Out (2.8s - 3.5s)
**Duration**: 0.7s
**Animation**:
- Entire screen (background + logo + steam) fades to 0 opacity
- Easing: ease-out

**Technical**:
```javascript
exit: { opacity: 0 }
transition: { duration: 0.7, delay: 2.8 }
```

**Result**: Main page (hero section) is revealed underneath

## Component Structure

```
LoadingScreen
├── Background (z-index: 0)
│   └── Golden yellow fill
│
├── Logo Container (z-index: 2)
│   ├── Golden Glow Effect (behind logo)
│   └── Logo Image/Text
│       └── Scale + opacity animations
│
├── Top Slats Group (z-index: 3)
│   ├── Slat 1 (top-most)
│   ├── Slat 2
│   ├── Slat 3
│   └── Slat 4 (bottom of top group)
│
├── Bottom Slats Group (z-index: 3)
│   ├── Slat 5 (top of bottom group)
│   ├── Slat 6
│   ├── Slat 7
│   └── Slat 8 (bottom-most)
│
└── Steam Particles (z-index: 1)
    └── 12-15 particles with random movement
```

## Technical Implementation Details

### Slat Component
Each slat is a `motion.div` with:
- Fixed positioning
- Full width (100vw)
- Height: 60px
- Background: Linear gradient for wood texture effect
- Box shadow for depth
- Slight border for bamboo segments

**CSS**:
```css
.bamboo-slat {
  width: 100vw;
  height: 60px;
  background: linear-gradient(
    180deg,
    #9b7653 0%,
    #8b6f47 50%,
    #7a5f3a 100%
  );
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 -2px 4px rgba(255, 255, 255, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
```

### Slat Positioning
**Top Group** (4 slats):
- Start above viewport: `transform: translateY(-100vh - 60px * index)`
- Stack position when closed: `translateY((index * 70px) - 50vh)`
- Indices: 0, 1, 2, 3 (top to bottom)

**Bottom Group** (4 slats):
- Start below viewport: `transform: translateY(100vh + 60px * index)`
- Stack position when closed: `translateY((index * 70px) + 50vh)`
- Indices: 0, 1, 2, 3 (top to bottom)

### Stagger Calculations
**Closing** (top-to-bottom reveal):
```javascript
const topSlats = [0, 1, 2, 3];
topSlats.map((index) => ({
  delay: 0.3 + (index * 0.05)
}));

const bottomSlats = [0, 1, 2, 3];
bottomSlats.map((index) => ({
  delay: 0.3 + ((3 - index) * 0.05) // Reverse stagger
}));
```

**Opening** (outer-to-inner unwrap):
```javascript
const topSlats = [0, 1, 2, 3];
topSlats.map((index) => ({
  delay: 1.5 + (index * 0.05) // Top slat moves first
}));

const bottomSlats = [0, 1, 2, 3];
bottomSlats.map((index) => ({
  delay: 1.5 + ((3 - index) * 0.05) // Bottom slat moves first
}));
```

### Logo Implementation
```javascript
<motion.div
  initial={{ scale: 0.7, opacity: 0.3 }}
  animate={{
    scale: [0.7, 0.7, 1],
    opacity: [0.3, 0.3, 1]
  }}
  transition={{
    times: [0, 0.5, 1],
    duration: 2.3,
    ease: 'easeOut'
  }}
  className="absolute inset-0 flex items-center justify-center z-10"
>
  <img src="/images/logos/001_WnY_CMYK@4x.png" alt="HO LEE BAO" />
  {/* OR */}
  <h1 className="font-display text-white text-8xl">HO LEE BAO</h1>
</motion.div>
```

### Golden Glow Effect
```javascript
<motion.div
  initial={{ opacity: 0, scale: 1 }}
  animate={{
    opacity: [0, 0, 0.6, 0.6],
    scale: [1, 1, 1.3, 1.3]
  }}
  transition={{
    times: [0, 0.53, 0.77, 1],
    duration: 3.0,
    ease: 'easeOut'
  }}
  className="absolute inset-0 flex items-center justify-center"
>
  <div className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-yellow-400/40 via-yellow-300/20 to-transparent blur-3xl" />
</motion.div>
```

### Steam Particles
```javascript
{[...Array(15)].map((_, i) => (
  <motion.div
    key={i}
    initial={{
      y: '60%',
      x: `${45 + Math.random() * 10}%`,
      opacity: 0,
      scale: 0.3
    }}
    animate={{
      y: ['-20%', '-100%'],
      x: `${45 + Math.random() * 10 + (Math.random() - 0.5) * 30}%`,
      opacity: [0, 0, 0.4, 0],
      scale: [0.3, 0.8, 1.2],
    }}
    transition={{
      times: [0, 0.5, 0.7, 1],
      duration: 2.5 + Math.random() * 1,
      repeat: Infinity,
      delay: 1.2 + (i * 0.1),
      ease: 'easeOut',
    }}
    className="absolute w-4 h-4 rounded-full bg-white/30 blur-md"
  />
))}
```

## Mobile Responsiveness

### Adjustments for Small Screens
- Logo scales down: `text-6xl` on mobile vs `text-8xl` on desktop
- Slat height: 40px on mobile vs 60px on desktop
- Fewer slats: 6 total (3 top + 3 bottom) instead of 8
- Steam particles: 10 instead of 15
- Glow effect: smaller radius (300px vs 500px)

**Tailwind Classes**:
```javascript
className="text-6xl sm:text-7xl md:text-8xl"
className="h-[40px] sm:h-[50px] md:h-[60px]"
```

## Testing Checklist

### Visual Testing (via Playwright)
- [ ] Slats slide smoothly from top/bottom
- [ ] No gap or overlap when slats meet in middle
- [ ] Slats cover entire viewport (no light bleeding)
- [ ] Logo hidden when steamer closed
- [ ] Logo scales and glows smoothly when revealed
- [ ] Steam particles rise naturally from gaps
- [ ] Bamboo texture visible and aesthetically pleasing
- [ ] Entire screen fades out smoothly at end
- [ ] No flickering or layout shift

### Timing Testing
- [ ] Total duration: ~3.0 seconds
- [ ] Closing phase: feels deliberate (not too fast)
- [ ] Pause phase: creates anticipation (not too long)
- [ ] Opening phase: satisfying reveal
- [ ] Steam starts at right moment (when opening begins)
- [ ] Fade out happens after full reveal appreciation

### Performance Testing
- [ ] Animation runs at 60fps
- [ ] No jank or stuttering
- [ ] Steam particles don't cause lag
- [ ] Mobile performance acceptable

### Cross-Device Testing
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Wide monitors (2560x1440)

## Implementation Steps

1. **Create slat array data structure**
   ```javascript
   const topSlats = Array(4).fill(null).map((_, i) => ({
     index: i,
     initialY: -100 - (i * 10),
     closedY: -50 + (i * 7)
   }));
   ```

2. **Build slat component with proper styling**
   - Test one slat first
   - Verify wood texture looks good
   - Check positioning math

3. **Implement closing animation**
   - Top slats only first
   - Add bottom slats
   - Tune stagger timing
   - Test with Playwright

4. **Add logo in center**
   - Verify it's behind slats when closed
   - Check scale/opacity timing

5. **Implement opening animation**
   - Reverse direction
   - Add logo reveal timing
   - Add glow effect
   - Test coordination

6. **Add steam particles**
   - Start simple (5 particles)
   - Tune randomness
   - Add more particles
   - Optimize performance

7. **Add fade out**
   - Time with main page load
   - Ensure smooth transition

8. **Mobile responsive pass**
   - Test all breakpoints
   - Adjust as needed

9. **Polish and fine-tuning**
   - Easing adjustments
   - Timing tweaks
   - Visual refinements

## Alternative Approaches (if issues arise)

### If slat positioning is buggy:
- Use `clip-path` instead of transform
- Use SVG masks for cleaner edges
- Simplify to fewer slats (4 total instead of 8)

### If performance is poor:
- Use CSS animations instead of Framer Motion
- Reduce steam particle count
- Remove blur effects
- Simplify gradients

### If timing feels off:
- Reduce pause duration (0.3s → 0.2s)
- Speed up closing (0.9s → 0.7s)
- Speed up opening (0.8s → 0.6s)
- Total can be 2.5s instead of 3.0s

## Success Criteria
✅ Animation feels premium and polished
✅ Clearly communicates "steamer opening" concept
✅ Logo reveal is satisfying
✅ Steam adds character without distraction
✅ Bamboo texture looks natural
✅ Timing creates anticipation and payoff
✅ Smooth 60fps performance
✅ Works on all device sizes
✅ Transitions seamlessly to main page
✅ User feels excited about the brand
