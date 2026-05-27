// What is Hoisting?

// "Hoisting is JavaScript's behavior of
// allocating memory for variables and
// functions during Memory Creation Phase,
// before code executes.

// (In Memory Creation Phase!)

// How does var hoist
// var → hoisted as undefined

// How does function hoist?
// function → hoisted with full definition

// What about let and const?
// let/const → hoisted but in TDZ
//            (Temporal Dead Zone)
//            gives ReferenceError if
//            accessed before declaration

// What is the output?

console.log(a);
console.log(b);

var a = 10;
let b = 20;

// OutPut:
// 1 undefine
// 2 reference error : can not acces befor inisalization
