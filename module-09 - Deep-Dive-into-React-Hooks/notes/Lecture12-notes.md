## Lecture 12 — useId

Generates unique IDs for accessibility.
Useful for linking labels to inputs.

const id = useId()

<label htmlFor={id}>Name</label>
<input id={id} type="text" />

💡 Key Takeaway
useId ensures unique IDs even when
component renders multiple times.
