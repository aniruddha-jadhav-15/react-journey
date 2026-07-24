## Lecture 08 — Async/Await

Cleaner and more readable than chained .then()
Always wrap in try/catch when using async/await.

const fetchData = async () => {
try {
setLoading(true)
const res = await axios.get('/api/users')
setData(res.data)
} catch (err) {
setError(err.message)
} finally {
setLoading(false)
}
}

useEffect(() => {
fetchData()
}, [])

💡 Key Takeaway
async/await is industry standard —
always use it over chained .then()
