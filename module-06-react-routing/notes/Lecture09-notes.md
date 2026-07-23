## Lecture 09 — Programmatic Navigation

### 📌 What I Learned

useNavigate navigates programmatically on any action.
Used for CTA buttons, after form submit, after login.

### ⚛️ Syntax

import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

navigate('/home') // go to route
navigate(-1) // go back
navigate('/login', { replace: true }) // replace history
