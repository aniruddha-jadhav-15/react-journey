# 10 — Introduction to React Hooks

## What are Hooks?

Hooks are special functions in React
that start with "use" keyword.
They let you use React features
inside functional components.

## Why Hooks?

Before hooks → needed Class components
After hooks → functional components do everything!

## Most Common Hooks:

useState → manage component data/state
useEffect → side effects (API calls, timers)
useContext → access global state
useRef → access DOM elements
useMemo → performance optimization
useCallback → memoize functions

## Rules of Hooks:

1. Only call hooks at TOP of component
   ❌ Inside if/else
   ❌ Inside loops
   ✅ Top level only!

2. Only call hooks inside React components
   ❌ Regular JS functions
   ✅ React functional components only!

## Example:

import { useState, useEffect } from "react";

function App() {
const [count, setCount] = useState(0); // hook

useEffect(() => {
document.title = `Count: ${count}`;
}, [count]); // hook
}
