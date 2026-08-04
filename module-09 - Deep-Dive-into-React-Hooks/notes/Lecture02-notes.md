## Lecture 02 — useState Effectively

useState stores and updates component data.
Use functional update when new state depends on old state.

const [count, setCount] = useState(0)

// Wrong when depending on previous value ❌
setCount(count + 1)

// Correct ✅
setCount(prev => prev + 1)

💡 Key Takeaway
Always use functional update form when new
state depends on previous state value.
