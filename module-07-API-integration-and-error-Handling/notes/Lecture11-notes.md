## Lecture 11 — PATCH Requests

Update only specific fields of a resource.

const updateUser = async (id) => {
try {
const res = await axios.patch(`/api/users/${id}`, {
name: 'Updated Name'
})
console.log(res.data)
} catch (err) {
setError(err.message)
}
}

💡 Key Takeaway
PATCH updates specific fields only.
PUT replaces the entire resource.
