## Lecture 03 — useEffect vs useLayoutEffect

useEffect — runs after browser paints the screen.
useLayoutEffect — runs before browser paints.

useEffect → use for API calls, subscriptions (most cases)
useLayoutEffect → use when you need to measure DOM
or prevent visual flicker

💡 Key Takeaway
Always prefer useEffect. Only use useLayoutEffect
when you see visual flickering issues.
