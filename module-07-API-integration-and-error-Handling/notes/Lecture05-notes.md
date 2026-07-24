## Lecture 05 — Fetching Data: Fetch and Axios

Two ways to make API calls in React.

// Fetch — built in browser API
fetch('https://api.example.com/users')
.then(res => res.json())
.then(data => setData(data))

// Axios — needs install, auto parses JSON
npm install axios

axios.get('https://api.example.com/users')
.then(res => setData(res.data))

💡 Key Takeaway
Axios is preferred in real projects —
cleaner syntax, auto JSON parsing,
and better error handling than fetch.
