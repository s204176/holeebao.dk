# Steamer Lid Opening Animation - Detailed Plan

## Concept
The logo acts as a steamer basket that "opens" (splits horizontally) to reveal the brand name, with steam bursting through the gap. This tells the story of opening a fresh steamer to reveal hot baos inside.

## Logo Selection
Using: **001_WnY_CMYK@4x.png** (White on Yellow - already established as our primary logo)
- This logo works because it's a steamer basket icon
- White on golden background maintains brand consistency
- Can be split horizontally at the middle

## Animation Phases

### Phase 1: Setup (0s - 0.6s)
**State:**
- Logo appears in center, full size
- Slightly faded (opacity 0.7)
- Subtle steam particles at edges
- Golden background

**Animation:**
- Logo fades in from opacity 0 → 0.7
- Scale from 0.9 → 1.0
- Steam particles start appearing around logo edges

### Phase 2: Steam Building (0.6s - 1.0s)
**State:**
- Logo at full opacity
- Steam intensifying
- Slight pulsing glow effect behind logo

**Purpose:** Create anticipation before the "opening"

### Phase 3: Lid Opening (1.0s - 2.0s)
**State:**
- Logo splits horizontally at center point
- Top half slides UP and slightly scales down
- Bottom half slides DOWN and slightly scales down
- Heavy steam bursts through the center gap
- Gap between halves expands revealing golden glow
- "HO LEE BAO" text fades in at center

**Technical Details:**
```
Top Half:
- translateY: 0 → -40vh
- opacity: 1 → 0.6
- scale: 1 → 0.8

Bottom Half:
- translateY: 0 → 40vh
- opacity: 1 → 0.6
- scale: 1 → 0.8

Center Text:
- opacity: 0 → 1
- scale: 0.7 → 1.0
- delay: 1.2s (appears after gap opens)

Steam Burst:
- Increase particle count from 10 → 20
- Faster rise speed
- Higher opacity (0.3 → 0.6)
```

### Phase 4: Full Reveal (2.0s - 2.8s)
**State:**
- Logo halves at edges (faded)
- "HO LEE BAO" text prominent in center
- Steam flowing heavily
- "蒸包" subtitle fades in below

### Phase 5: Fade Out (2.8s - 3.2s)
**State:**
- Everything fades to 0 opacity
- Transition to main page

## Component Structure

```
LoadingScreen
├── Background (golden)
├── Logo Top Half (z-10)
│   └── Image with clip-path top 50%
├── Logo Bottom Half (z-10)
│   └── Image with clip-path bottom 50%
├── Center Text Container (z-20)
│   ├── "HO LEE BAO"
│   └── "蒸包"
├── Center Glow (z-5)
│   └── Golden radial gradient
└── Steam Particles (z-8)
    └── 20 particles with burst effect
```

## Technical Implementation

### Logo Splitting Technique
Use two copies of the same logo with CSS clip-path:

**Top Half:**
```css
clip-path: inset(0 0 50% 0);
/* Clips bottom 50% */
```

**Bottom Half:**
```css
clip-path: inset(50% 0 0 0);
/* Clips top 50% */
```

### Logo Positioning
```javascript
// Both start at same position
initial: {
  y: 0,
  opacity: 0.7,
  scale: 1
}

// Top half animation
animate: {
  y: [0, 0, '-40vh', '-40vh'],
  opacity: [0.7, 1, 0.6, 0],
  scale: [1, 1, 0.8, 0.8]
}

// Bottom half animation
animate: {
  y: [0, 0, '40vh', '40vh'],
  opacity: [0.7, 1, 0.6, 0],
  scale: [1, 1, 0.8, 0.8]
}

// Timing
transition: {
  times: [0, 0.3, 0.6, 1],
  duration: 3.2,
  ease: [0.16, 1, 0.3, 1]
}
```

### Text Reveal
```javascript
initial: {
  opacity: 0,
  scale: 0.7
}

animate: {
  opacity: [0, 1, 1, 0],
  scale: [0.7, 1, 1, 1]
}

transition: {
  times: [0, 0.35, 0.875, 1],
  duration: 3.2,
  delay: 1.2,
  ease: 'easeOut'
}
```

### Steam Burst Effect
Two particle sets:

**Ambient Steam (0-1.0s):**
- 10 particles
- Slow rise
- Low opacity (0.2)
- Positioned around logo edges

**Burst Steam (1.0-3.2s):**
- 15 particles
- Fast rise from center
- Higher opacity (0.5)
- Triggered when lid opens

```javascript
// Burst particles
{[...Array(15)].map((_, i) => (
  <motion.div
    initial={{
      y: '50%',
      x: `${48}%`,
      opacity: 0
    }}
    animate={{
      y: ['-10%', '-120%'],
      x: `${45 + (Math.random() - 0.5) * 40}%`,
      opacity: [0, 0.6, 0.6, 0],
      scale: [0.5, 1.2, 1.5, 1.8]
    }}
    transition={{
      times: [0, 0.25, 0.75, 1],
      duration: 1.8,
      delay: 1.0 + (i * 0.08),
      ease: 'easeOut'
    }}
  />
))}
```

### Center Glow Effect
```javascript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{
    opacity: [0, 0, 0.8, 0.8, 0],
    scale: [0.8, 0.8, 1.5, 1.5, 1.5]
  }}
  transition={{
    times: [0, 0.31, 0.47, 0.87, 1],
    duration: 3.2,
    ease: 'easeOut'
  }}
  className="absolute inset-0 flex items-center justify-center"
>
  <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-yellow-300/60 via-yellow-200/30 to-transparent blur-3xl" />
</motion.div>
```

## Timing Breakdown (Total: 3.2s)

| Time | Event |
|------|-------|
| 0.0s | Logo fades in |
| 0.6s | Logo fully visible, steam building |
| 1.0s | Lid starts opening (split animation begins) |
| 1.2s | Gap visible, text starts fading in |
| 1.5s | Steam burst at peak |
| 2.0s | Logo halves at edges, text fully visible |
| 2.2s | Subtitle "蒸包" fades in |
| 2.8s | Everything starts fading out |
| 3.2s | Complete, transition to main page |

## Mobile Responsiveness

### Logo Size
- Desktop: 500px × 500px
- Tablet: 400px × 400px
- Mobile: 300px × 300px

### Text Size
- Desktop: text-8xl (HO LEE BAO)
- Tablet: text-7xl
- Mobile: text-6xl

### Steam Particles
- Desktop: 25 total (10 ambient + 15 burst)
- Mobile: 18 total (8 ambient + 10 burst)

## Testing Checklist

- [ ] Logo loads correctly
- [ ] Logo splits cleanly at horizontal center
- [ ] No gap or artifacts at split line initially
- [ ] Top half moves smoothly upward
- [ ] Bottom half moves smoothly downward
- [ ] Steam bursts from center at right moment
- [ ] Text appears in center gap with good timing
- [ ] Golden glow intensifies when opening
- [ ] Everything fades out smoothly
- [ ] Transition to main page is seamless
- [ ] Works on mobile (320px width)
- [ ] Works on tablet (768px width)
- [ ] Works on desktop (1920px width)
- [ ] Performance is smooth (60fps)
- [ ] No flickering or layout shift

## Implementation Steps

1. ✅ Create this detailed plan
2. Set up logo with proper sizing
3. Implement logo splitting with clip-path
4. Test split positioning (ensure perfect alignment)
5. Add opening animation to both halves
6. Test with Playwright - verify split looks good
7. Add center text with reveal animation
8. Test text timing with Playwright
9. Implement ambient steam particles
10. Test ambient steam
11. Add burst steam effect
12. Test full animation sequence
13. Add golden glow effect
14. Fine-tune all timing values
15. Test on multiple breakpoints
16. Polish and optimize
17. Final review with Playwright

## Success Criteria

✅ Animation tells clear "steamer opening" story
✅ Logo split is clean and smooth
✅ Steam burst creates "wow" moment
✅ Text reveal feels satisfying
✅ Timing creates anticipation and payoff
✅ Runs smoothly on all devices
✅ Transitions seamlessly to main page
✅ User feels excited about the brand
