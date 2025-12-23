# Loading Animation Plan

## Inspiration
Based on Jade Copenhagen's loading animation (https://jadecph.dk/da) - a circular reveal effect that "opens" like unwrapping a gift.

## Design Concept
A minimalist opening animation with HO LEE BAO branding:
- Golden/yellow background (brand color: #E8B84D)
- Circular element in center that splits vertically
- Two halves slide apart (left and right)
- Logo/brand text revealed in center
- Steam effect rises during the animation
- Smooth fade out to main page

## Animation Breakdown

### Timeline (2.5 seconds total)
```
0.0s - 0.3s : Circle fades in with vertical line divider
0.3s - 0.5s : Brief pause (anticipation)
0.5s - 1.5s : Circle halves slide apart horizontally
0.8s - 1.8s : Logo/text fades in and scales up
1.2s - 2.0s : Steam particles rise from center
2.0s - 2.5s : Entire screen fades out
2.5s        : Component unmounts, show main page
```

### Visual Elements
1. **Background**: Solid golden yellow (#E8B84D)
2. **Circle Halves**: White outlined circles, split down the middle
3. **Vertical Line**: Thin white line through center
4. **Logo/Text**: "HO LEE BAO" in Vrau Loux font or our logo
5. **Steam Effect**: Subtle rising particles

## Technical Implementation

### Approach
Using **Framer Motion** (already installed) with CSS transforms for smooth animations.

### Component Structure
```
LoadingScreen (full viewport overlay)
├── Background (golden yellow, z-index: 0)
├── Left Half Circle (z-index: 2)
│   └── CSS: border-radius, clip-path, translateX animation
├── Right Half Circle (z-index: 2)
│   └── CSS: border-radius, clip-path, translateX animation
├── Center Vertical Line (z-index: 1)
│   └── Thin white line, fades out with halves
├── Logo/Text Container (z-index: 3)
│   └── Opacity + scale animation
└── Steam Effect (z-index: 1)
    └── Canvas particles rising upward
```

### Animation Properties

**Circle Halves:**
```javascript
// Left Half
initial: { x: 0, opacity: 0 }
animate: { x: 0, opacity: 1 }        // Fade in
then: { x: '-100vw', opacity: 0 }    // Slide left & fade out

// Right Half
initial: { x: 0, opacity: 0 }
animate: { x: 0, opacity: 1 }        // Fade in
then: { x: '100vw', opacity: 0 }     // Slide right & fade out

// Easing: easeInOut
// Duration: 1.0s for slide
```

**Logo/Text:**
```javascript
initial: { opacity: 0, scale: 0.8 }
animate: { opacity: 1, scale: 1 }
transition: { delay: 0.8s, duration: 0.6s }
```

**Steam Effect:**
```javascript
// Start at delay: 1.2s
// Rising particles with random X movement
// Fade out as they rise
```

### CSS Approach for Half Circles

**Option 1 - Clip Path (Recommended):**
```css
.left-half {
  width: 400px;
  height: 400px;
  border: 2px solid white;
  border-radius: 50%;
  clip-path: inset(0 50% 0 0);
}

.right-half {
  width: 400px;
  height: 400px;
  border: 2px solid white;
  border-radius: 50%;
  clip-path: inset(0 0 0 50%);
}
```

**Option 2 - Overflow Hidden:**
```css
.circle-container {
  width: 400px;
  height: 400px;
  overflow: hidden;
}

.half-circle {
  width: 200px;
  height: 400px;
  border: 2px solid white;
  border-radius: 200px 0 0 200px; /* Left half */
}
```

## File Changes

### Files to Modify
- `src/components/layout/LoadingScreen.tsx` - Complete rewrite

### Files to Reference
- `src/components/effects/SteamEffect.tsx` - Steam particle logic
- `src/styles/index.css` - Brand colors

## Success Criteria
- [ ] Animation runs smoothly at 60fps
- [ ] Total duration: 2.5 seconds
- [ ] Circle opens with smooth easing
- [ ] Logo/text clearly visible in center
- [ ] Steam effect adds polish without distraction
- [ ] Seamless transition to main page
- [ ] Works on mobile and desktop
- [ ] No layout shift or flicker

## Implementation Steps
1. Create new git branch: `feature/loading-animation`
2. Document plan in this MD file
3. Build LoadingScreen component with animation
4. Test with Playwright in continuous loop
5. Adjust timing and easing based on feel
6. Mobile responsiveness check
7. Commit and push to branch
8. Review with user before merging

## Alternative Ideas (if initial approach doesn't work)
- Use SVG path animation instead of clip-path
- Simplify to single circle that scales up and fades out
- Use canvas for entire animation with more control
- Implement GSAP for more complex timeline control

## Design Notes
- Keep it minimal - less is more
- Should feel premium and polished
- Not too slow (boring) or too fast (jarring)
- Steam adds the "HO LEE BAO" character
- Golden color maintains brand consistency throughout
