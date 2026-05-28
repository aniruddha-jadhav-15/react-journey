// Arrya Methods:

// .map()       → transform each element → new array
// .filter()    → filter by condition → new array
// .reduce()    → combine all → single value
// .find()      → first matching element
// .findIndex() → index of first matching element

const users = [
  { id: 1, name: "Aniruddha", age: 23 },
  { id: 2, name: "Rahul", age: 19 },
  { id: 3, name: "Priya", age: 25 },
];

// 1.Get names of all users

const names = users.map((user) => user.name);
console.log(names);

// 2.Get users above age 20

const usersAbovetwenty = users.filter((user) => user.age > 20);
console.log(usersAbovetwenty);

// 3. Get total age of all users

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);

// 4. Find user with id 2

const userIdTwo = users.find((user) => user.id === 2);
console.log(userIdTwo);

// Slice & Splice!

/*
slice 
      = COPY a portion
      = does NOT change original
      = returns new array
*/

// SLICE — cuts array WITHOUT changing original:

const fruits = ["apple", "mango", "banana", "orange"];

// slice(start, end) — end not included
const result = fruits.slice(1, 3);

console.log(result); // ["mango", "banana"]
console.log(fruits); // original unchanged

// SPLICE — cuts array AND changes original:

const fruits2 = ["apple", "mango", "banana", "orange"];

// splice(start, deleteCount)
fruits2.splice(1, 2);

console.log(fruits2); // ["apple", "orange"]  changed!

// Also used to INSERT:

const fruits3 = ["apple", "orange"];

// splice(start, deleteCount, ...itemsToAdd)
fruits3.splice(1, 0, "mango", "banana");

console.log(fruits3); // ["apple", "mango", "banana", "orange"]
