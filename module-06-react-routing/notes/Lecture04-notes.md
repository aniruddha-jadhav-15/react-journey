## Lecture 04 — Single Page Application (SPA)

### 📌 What I Learned

SPA means one HTML file loads once.
React Router swaps components without reload.
Link component from react-router-dom prevents
full page reload — this is why we never use
regular anchor tags in React apps.

### ⚛️ Syntax

import { Link } from 'react-router-dom'

// Wrong ❌
<a href="/about">About</a>

// Correct ✅

<Link to="/about">About</Link>
