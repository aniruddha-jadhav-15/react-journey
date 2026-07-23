## Lecture 03 — Handling Invalid Routes

### 📌 What I Learned

When user visits a URL that doesn't exist,
we show a 404 Not Found page.
path="\*" catches any unmatched URL.
Always add this as the LAST route — order matters!

### ⚛️ Syntax

<Route path="\*" element={<NotFound />} />
