# Known Issues

## Menu Page Scroll Position Issue

**Status:** Unresolved
**Priority:** High
**Date Reported:** 2026-01-19

### Description
When navigating from the homepage to the menu page via the "View Full Menu" button, the page does not scroll to the top. Instead, users land in the middle of the menu page (around the "Char Siu Bao" section).

### Attempted Fixes
1. Added `ScrollToTop` component using `useLocation()` and `useLayoutEffect`
2. Added `useEffect` scroll handlers in each page component on mount
3. Disabled browser scroll restoration via `history.scrollRestoration = 'manual'`
4. Added `onClick` handler to Link component with explicit `window.scrollTo(0, 0)`
5. Changed menu cards from `whileInView` to `animate` to prevent re-animation
6. Tried multiple scroll methods: `window.scrollTo()`, `document.documentElement.scrollTop = 0`, `document.body.scrollTop = 0`

### Likely Cause
The issue appears to be a timing/race condition between:
- React Router's navigation
- Framer Motion's AnimatePresence wrapper
- Browser's scroll restoration behavior
- The page content rendering

The scroll commands execute before the new page has fully mounted and rendered, causing the browser to restore to a previous scroll position or the component animations to offset the scroll.

### Potential Solutions
1. Use React Router v6's `ScrollRestoration` component (not attempted yet)
2. Add a delay in the scroll-to-top logic to ensure DOM is ready
3. Remove the AnimatePresence wrapper from AppRouter
4. Use hash-based routing with scroll anchors
5. Investigate if the motion.div wrapper in AppRouter is interfering

### Workaround
None available for users. Navigation works but scroll position is incorrect.
