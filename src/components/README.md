# Components Organization

This folder contains all React components organized by purpose.

## Folder Structure

### `/effects`
Visual effects and animations
- `SteamEffect.tsx` - Rising steam particles (canvas-based)
- `Threads.tsx` - WebGL wavy threads background (OGL library)
- `FloatingBaos.tsx` - Floating circular shapes with animations
- `TiltWrapper.tsx` - 3D tilt effect wrapper for logo

### `/layout`
Page layout and structure components
- `Navigation.tsx` - Top navigation bar (desktop + mobile)
- `LoadingScreen.tsx` - Initial loading screen
- `ErrorBoundary.tsx` - Error handling wrapper

### `/ui`
Reusable UI components
- `ShinyText.tsx` - Animated shimmering text effect
- `Typewriter.tsx` - Typewriter animation for text

### `/unused`
Components from previous iterations (kept for reference)
- Old scroll effects
- Plasma effects
- Visitor counter
- Email signup
- etc.

## Import Paths

```tsx
// Effects
import SteamEffect from '../components/effects/SteamEffect'
import Threads from '../components/effects/Threads'

// Layout
import Navigation from '../components/layout/Navigation'
import LoadingScreen from '../components/layout/LoadingScreen'

// UI
import ShinyText from '../components/ui/ShinyText'
import Typewriter from '../components/ui/Typewriter'
```

## Adding New Components

When creating new components:

1. **Effect components** → `/effects` folder
2. **Layout/structure** → `/layout` folder
3. **Reusable UI** → `/ui` folder
4. **Page-specific** → Keep in `/pages` folder
