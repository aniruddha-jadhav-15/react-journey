# 13 — Rendering Lists with Map

## What is List Rendering?

Displaying array data dynamically
in JSX using .map() method.

## Basic Example:

const fruits = ["Apple", "Mango", "Banana"];

function FruitList() {
return (
<ul>
{fruits.map((fruit, index) => (
<li key={index}>{fruit}</li>
))}
</ul>
);
}

## With Objects Array:

const users = [
{ id: 1, name: "Aniruddha", age: 23 },
{ id: 2, name: "Rahul", age: 25 },
];

function UserList() {
return (
<ul>
{users.map((user) => (
<li key={user.id}>
{user.name} — {user.age}
</li>
))}
</ul>
);
}

## Key prop:

→ Every list item MUST have key
→ Key must be UNIQUE
→ Helps React identify each element
→ Use id from data (best practice)
→ Avoid index as key if list can change

## Best Practice:

❌ key={index} → avoid
✅ key={user.id} → use unique id

## Used in React heavily:

→ Product listings
→ Todo lists
→ User lists
→ Any dynamic data!
