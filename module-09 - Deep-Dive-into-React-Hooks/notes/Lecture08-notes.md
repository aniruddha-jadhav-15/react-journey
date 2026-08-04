## Lecture 08 — Custom Hooks for Context

Wrap useContext in a custom hook for cleaner usage.

function useTheme() {
return useContext(ThemeContext)
}

// Usage
const theme = useTheme()

💡 Key Takeaway
Custom context hooks make code cleaner
and hide implementation details.
