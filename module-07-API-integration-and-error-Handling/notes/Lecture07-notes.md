## Lecture 07 — Mastering Error Handling

Always handle errors in API calls.
Use .catch() or try/catch to catch errors.

axios.get('/api/users')
.then(res => setData(res.data))
.catch(err => setError(err.message))
.finally(() => setLoading(false))

💡 Key Takeaway
finally() runs whether request succeeds
or fails — perfect for turning off loader.
