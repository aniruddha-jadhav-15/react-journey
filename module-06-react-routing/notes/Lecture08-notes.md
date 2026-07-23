## Lecture 08 — Nested Routing

### 📌 What I Learned

Routes can be nested inside parent routes.
Parent needs Outlet as placeholder for child routes.
Child route paths have no leading slash.

### ⚛️ Syntax

// App.jsx
<Route path="/about" element={<About />}>
<Route path="team" element={<Team />} />
<Route path="founders" element={<Founders />} />
</Route>

// About.jsx
import { Outlet } from 'react-router-dom'

function About() {
return (
<div>
<h1>About</h1>
<Outlet /> {/_ child renders here _/}
</div>
)
}

### 💡 Real World Use

Dashboard layouts, settings pages, tabs
