## Lecture 12 — Axios Create and Base URLs

Avoid repeating base URL in every request.
Create one axios instance and reuse everywhere.

// api.js
import axios from 'axios'

const api = axios.create({
baseURL: 'https://api.example.com',
timeout: 5000
})

export default api

// In any component
import api from './api'
api.get('/users')
api.post('/users', data)

💡 Key Takeaway
Always create axios instance — industry standard.
Makes changing base URL easy in one place.
