## Lecture 04 — useRef

Two main uses:

1. Access DOM element directly
2. Store value without causing re-render

const inputRef = useRef(null)
inputRef.current.focus() // access DOM

const countRef = useRef(0)
countRef.current++ // no re-render triggered

💡 Key Takeaway
useRef value persists between renders
but changing it does NOT trigger re-render.
