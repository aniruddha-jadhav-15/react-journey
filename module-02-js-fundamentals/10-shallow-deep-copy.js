/*
Shallow Copy:
Creates a new object/array BUT nested 
elements share the same memory reference.
Changes in nested original = affects copy.

Example: const copy = { ...original }
         const copy = [...original]

Deep Copy:
Creates a completely new object/array.
ALL nested elements get new memory references.
Changes in original NEVER affect copy.

Example: JSON.parse(JSON.stringify(original))

Used in React:
Never mutate state directly!
Use spread for shallow, JSON for deep copy.
*/

// Example:

// OBJECT

// Shallow Copy — object
const user = {
  name: "Aniruddha",
  address: { city: "Pune" }, // nested object
};

const shallowCopy = { ...user };

shallowCopy.name = "AJ"; //  original not affected
shallowCopy.address.city = "Mumbai"; //  original affected!

console.log(user.name); // "Aniruddha"
console.log(user.address.city); // "Mumbai"  changed!

//Deep Copy — object

const user2 = {
  name: "Aniruddha",
  address: { city: "Pune" },
};

const deepCopy = JSON.parse(JSON.stringify(user2));

deepCopy.name = "AJ";
deepCopy.address.city = "Mumbai";

console.log(user2.name); // "Aniruddha"
console.log(user2.address.city); // "Pune"  not changed!

// ARRAYS

const original = [1, 2, [3, 4]];

// Shallow Copy — array
const shallowCopy = [...original];
shallowCopy[2].push(5);
console.log(original); // [1, 2, [3, 4, 5]] affected!

// Deep Copy — array
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy[2].push(5);
console.log(original); // [1, 2, [3, 4]]  not affected!
