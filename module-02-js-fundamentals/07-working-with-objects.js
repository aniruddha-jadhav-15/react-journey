// What is an Object in JavaScript?

// "Object is a non-primitive data structure
// that stores data in key-value pairs.

// Keys are always strings,
// values can be any data type —
// string, number, array, or even
// another object.

// Example:
const user = {
  name: "Aniruddha",
  age: 23,
  skills: ["HTML", "CSS", "JS"],
};

// We can access values using:
// - Dot notation: user.name
// - Bracket notation: user["name"]

// We can add, update, delete properties
// and loop using for...in loop or
// Object.keys(), Object.values(),
// Object.entries() methods."

const obj = {
  name: "Aniruddha",
  age: 23,
  city: "Pune",
};

// Add
obj.country = "India"; // ✅

// Update
obj.name = "AJ"; // ✅

// Delete
delete obj.city; // ✅ (you forgot this!)

// Get all keys
Object.keys(obj); // ["name", "age"]

// Get all values
Object.values(obj); // ["Aniruddha", 23]

// Get key-value pairs
Object.entries(obj); // [["name", "Aniruddha"], ["age", 23]]

// Loop
for (let key in obj) {
  console.log(key, obj[key]); // ✅
}
