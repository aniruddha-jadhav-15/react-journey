## Lecture 07 — Context API

Share data across components without prop drilling.

const ThemeContext = createContext()

// Provider wraps components that need data
<ThemeContext.Provider value="dark">
<App />
</ThemeContext.Provider>

// Any child can access
const theme = useContext(ThemeContext)

💡 Key Takeaway
Context solves prop drilling — passing props
through many levels of components.
