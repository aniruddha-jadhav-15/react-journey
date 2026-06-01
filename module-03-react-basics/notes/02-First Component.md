# 02 — First Component

## What is a Component?

A component is a small reusable piece of UI.
Every React app is made of components.
Examples: Navbar, Footer, Card, Button

## Rules for Creating Component:

1. Function name must be PascalCase
   (Each word first letter Capital)

   ProfileCard, TodoList, NavBar
   profileCard, todolist

2. Must return JSX

3. Must export the component

## Syntax:

function ComponentName() {
return (

<div>
<h1>Hello!</h1>
</div>
);
}

export default ComponentName;
