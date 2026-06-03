# 11 — useState Hook

## What is useState?

useState is a React hook that lets you
add and manage state in functional components.

## Syntax:

const [value, setValue] = useState(initialValue);

// ^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^
// current function starting value
// value to update

## Example:

import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

return (

<div>
<h1>{count}</h1>
<button onClick={() => setCount(count + 1)}>
Increase
</button>
<button onClick={() => setCount(count - 1)}>
Decrease
</button>
<button onClick={() => setCount(0)}>
Reset
</button>
</div>
);
}

## Different State Types:

// Number
const [count, setCount] = useState(0);

// String
const [name, setName] = useState("");

// Boolean
const [isVisible, setIsVisible] = useState(false);

// Array
const [items, setItems] = useState([]);

// Object
const [user, setUser] = useState({});

## Key Rules:

1. Never mutate state directly
   ❌ count = count + 1
   ✅ setCount(count + 1)

2. State update is ASYNC
   → UI updates after function completes

3. Naming convention
   ✅ [value, setValue]
   ✅ [count, setCount]
   ✅ [name, setName]
