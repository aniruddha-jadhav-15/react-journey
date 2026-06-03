# 12 — Handling User Input

## What is User Input?

Any data user types or selects
in form elements like input, textarea, select.

## Controlled Input:

Input value controlled by React state.

import { useState } from "react";

function InputForm() {
const [name, setName] = useState("");

function handleChange(e) {
setName(e.target.value);
}

return (
<div>
<input
        type="text"
        value={name}
        onChange={handleChange}
      />
<p>You typed: {name}</p>
</div>
);
}

## Key Concepts:

e.target.value → what user typed
onChange → fires on every keystroke
value={name} → controlled by state

## Multiple Inputs:

function Form() {
const [form, setForm] = useState({
name: "",
email: ""
});

function handleChange(e) {
setForm({
...form,
[e.target.name]: e.target.value
});
}

return (
<>
<input
        name="name"
        value={form.name}
        onChange={handleChange}
      />
<input
        name="email"
        value={form.email}
        onChange={handleChange}
      />
</>
);
}

## Key Rule:

Always use controlled inputs in React!
State controls the input value always!
