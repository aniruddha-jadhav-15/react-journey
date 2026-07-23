## Lecture 02 — BrowserRouter, Routes & Route

### 📌 What I Learned

Three core pieces work together:

- BrowserRouter watches the URL
- Routes holds all routing rules
- Route maps one URL to one component

### ⚛️ Setup in main.jsx

Wrap entire app with BrowserRouter so routing
works throughout the whole application.

### ⚛️ Setup in App.jsx

Routes wraps all Route components.
Each Route has a path and an element to render.

---

### ⚛️ Syntax

// main.jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App />
</BrowserRouter>
)

// App.jsx
import { Routes, Route } from 'react-router-dom'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
