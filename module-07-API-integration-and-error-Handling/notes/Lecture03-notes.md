## Lecture 03 — Cleanup Function

Cleanup prevents memory leaks when component unmounts.
Return a cleanup function from useEffect.

useEffect(() => {
const timer = setInterval(() => {
console.log('running')
}, 1000)

return () => {
clearInterval(timer)
}
}, [])

💡 Key Takeaway
Use cleanup for timers, event listeners,
and API subscriptions to prevent memory leaks.
