# 03 — JSX & Babel

## What is JSX?

JSX stands for JavaScript XML.
It allows us to write HTML-like syntax
inside JavaScript files.
Makes code more readable and intuitive.

## What is Babel?

Babel is a JavaScript transpiler.
It converts JSX code into regular
JavaScript that browsers can understand.
Browsers cannot read JSX directly!

## How They Work Together:

You write JSX
→ Babel converts to React.createElement()
→ Browser understands regular JS
→ UI renders on screen

## Example:

// JSX (what you write)

<h1>Hello World</h1>

// After Babel (what browser sees)
React.createElement("h1", null, "Hello World")

## Key Points:

- JSX is NOT HTML — it's JS with HTML syntax
- Every JSX must have ONE parent element
- Use className instead of class
- Use camelCase for attributes
