## Lecture 06 — useSearchParams

### 📌 What I Learned

Query strings add extra info to URL after ?
Example: /products?sort=asc&category=shoes

useSearchParams works exactly like useState
but stores values in the URL instead of memory.
This means users can share filtered/sorted URLs.
This means users can share filtered/sorted URLs.

### ⚛️ Syntax

import { useSearchParams } from 'react-router-dom'

const [searchParams, setSearchParams] = useSearchParams()

// Read value
const sort = searchParams.get('sort')

// Update URL
setSearchParams({ sort: 'asc' })

// URL becomes: /products?sort=asc
