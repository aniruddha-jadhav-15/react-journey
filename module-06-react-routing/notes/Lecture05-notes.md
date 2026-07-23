## Lecture 05 — Route Parameters

### 📌 What I Learned

Dynamic routes show different data based on URL.
:paramName in path creates a dynamic segment.
useParams() hook reads that value inside component.

### ⚛️ Syntax

// Route setup
<Route path="/user/:id" element={<User />} />

// Inside User component
import { useParams } from 'react-router-dom'

const { id } = useParams()
// URL /user/5 → id = "5"

### 💡 Real World Use

Product pages, user profiles, blog posts
