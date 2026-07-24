## Lecture 10 — DELETE Requests

Remove a resource from server using its id.

const deleteUser = async (id) => {
try {
await axios.delete(`/api/users/${id}`)
setUsers(prev => prev.filter(u => u.id !== id))
} catch (err) {
setError(err.message)
}
}

💡 Key Takeaway
After deleting from server, also remove
from local state to update UI immediately.
