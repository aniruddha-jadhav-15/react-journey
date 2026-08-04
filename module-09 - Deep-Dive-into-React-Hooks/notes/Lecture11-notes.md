## Lecture 11 — useCallback

Memoizes functions to prevent recreation on every render.
Useful when passing functions to child components.

const handleClick = useCallback(() => {
doSomething(id)
}, [id])

💡 Key Takeaway
Use useCallback when passing functions
as props to prevent unnecessary re-renders.
