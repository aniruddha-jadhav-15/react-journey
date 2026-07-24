## Lecture 09 — POST Requests

Send data to server to create new resource.

const createUser = async () => {
try {
const res = await axios.post('/api/users', {
name: 'Aniruddha',
email: 'test@gmail.com'
})
console.log(res.data)
} catch (err) {
setError(err.message)
}
}

💡 Key Takeaway
Pass data as second argument to axios.post()
