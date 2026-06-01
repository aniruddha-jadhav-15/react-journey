# 05 — React Fragments

## What is Fragment?

Fragment is a wrapper that groups multiple
JSX elements without adding extra HTML to DOM.

## Why use Fragment instead of div?

- div adds unnecessary element to DOM
- Fragment adds NOTHING to DOM
- Cleaner HTML structure

## Two ways to write:

// Full syntax
<React.Fragment>

  <h1>Title</h1>
  <p>Text</p>
</React.Fragment>

// Shorthand (most used)
<>

  <h1>Title</h1>
  <p>Text</p>
</>

## When to use:

- When returning multiple elements
- When you don't want extra div in DOM
- Table rows, list items etc.
