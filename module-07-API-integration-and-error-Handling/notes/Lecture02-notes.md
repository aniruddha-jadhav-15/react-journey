## Lecture 02 — useEffect and Dependency Array

useEffect runs side effects after component renders.
Dependency array controls exactly when it runs.

// Runs once on mount only
useEffect(() => {
fetchData()
}, [])

// Runs when userId changes
useEffect(() => {
fetchData()
}, [userId])

// Runs after every render
useEffect(() => {
fetchData()
})

💡 Key Takeaway
Always add variables used inside useEffect
to the dependency array to avoid stale data.
