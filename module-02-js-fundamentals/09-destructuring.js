//  Destructuring :

/*
Destructuring is a ES6 feature that allows 
us to extract values from arrays and objects 
into separate variables in a clean, 
readable way.

For objects:
const { name, age } = user;
Instead of:
const name = user.name;
const age = user.age;

For arrays:
const [first, second] = colors;
Instead of:
const first = colors[0];
const second = colors[1];

*/

// Example:

// Object
const user = { name: "Aniruddha", age: 23 };
const { name, age } = user;

// Array
const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

// Default values:

const { name, salary = 50000 } = user;
// if salary doesn't exist → use 50000

// Rename while destructuring:

const { name: fullName } = user;
console.log(fullName); // "Aniruddha
