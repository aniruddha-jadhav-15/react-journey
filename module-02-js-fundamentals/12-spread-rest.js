// Spread and Rest operator

// "Both spread and rest use the same
// syntax — three dots (...)

// But they do opposite things:

/*
SPREAD — expands/unpacks elements:
Used to copy arrays, merge objects,
or pass array elements as arguments.
*/

// Example:
const arr2 = [...arr1, 4, 5];
const updated = { ...user, age: 23 };

/*
REST — collects/gathers elements:
Used in function parameters to collect
multiple arguments into single array.
Also used in destructuring to collect
remaining elements
*/

// Example:
function sum(...numbers) {}
const { name, ...rest } = user;

// Key difference:
// Spread = 1 thing into MANY
// Rest   = MANY things into 1
