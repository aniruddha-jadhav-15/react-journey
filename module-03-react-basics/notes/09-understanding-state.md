# 09 — Understanding State

## What is State?

State is data that can change,
and when it changes React automatically
updates the UI.

## Why State?

// ❌ Normal variable — UI never updates!
let count = 0;
count = count + 1; // changes but UI stays same!

// ✅ State — UI updates automatically!
const [count, setCount] = useState(0);
setCount(count + 1); // UI updates! ✅

## Simple Rule:

Normal variable → changes but UI stays same
State → changes and UI updates automatically!

## When to use State?

→ Counter values
→ Form inputs
→ Toggle show/hide
→ Loading states
→ Any data that changes on screen

## Key Points:

→ State is LOCAL to component
→ State change = component re-renders
→ Never modify state directly!
❌ count = count + 1
✅ setCount(count + 1)
