# 08 — Handling Events

## What are Events?

Actions that happen when user interacts
with the webpage.

## Common Events:

onClick → user clicks element
onChange → user types in input
onSubmit → user submits form
onMouseOver → user hovers element
onDoubleClick → user double clicks

## HTML vs React Events:

// HTML (old way)
<button onclick="handleClick()">Click</button>

// React (new way) — camelCase!
<button onClick={handleClick}>Click</button>

## Syntax:

function App() {
function handleClick() {
console.log("clicked!");
}

return (
<button onClick={handleClick}>
Click Me
</button>
);
}

## Important Rules:

1. Events are camelCase (onClick not onclick)
2. Pass function REFERENCE not function CALL
   ✅ onClick={handleClick}
   ❌ onClick={handleClick()}
3. Event handler defined inside component

## Event Object:

function handleClick(e) {
console.log(e.target); // clicked element
console.log(e.target.value); // input value
}
