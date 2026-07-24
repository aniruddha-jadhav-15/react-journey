## Lecture 06 — Loaders and Error Handling UX

Always show loading and error states.
Never leave user staring at blank screen.

const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

if (loading) return <p>Loading...</p>
if (error) return <p>Something went wrong!</p>
return <div>{data}</div>

💡 Key Takeaway
Good UX means user always knows what is
happening — loading, error, or success.
