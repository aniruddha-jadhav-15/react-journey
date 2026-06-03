# 15 — Mastering Props

## What are Props?

Props (Properties) are used to pass data
from Parent component to Child component.

## How to Pass Props:

// Parent — sends props
function App() {
return (
<UserCard
      name="Aniruddha"
      age={23}
      city="Pune"
    />
);
}

## How to Receive Props:

// Child — receives props
function UserCard({ name, age, city }) {
return (
<div>
<h2>{name}</h2>
<p>Age: {age}</p>
<p>City: {city}</p>
</div>
);
}

## Key Rules:

1. Props flow ONE WAY
   Parent → Child only!
2. Props are READ ONLY
   ❌ Never modify props!
   ✅ Only read and display

3. Can pass any data type
   String → name="Aniruddha"
   Number → age={23}
   Boolean → isActive={true}
   Array → items={[1,2,3]}
   Object → user={{name:"AJ"}}
   Function → onClick={handleClick}

## Default Props:

function Button({ text = "Click Me" }) {
return <button>{text}</button>;
}

## Props vs State:

Props → data from PARENT (read only)
State → data inside component (changeable)
