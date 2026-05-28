// Ternary Operator:

// "Ternary operator is a shorthand
// for if-else statement.

// Syntax:
// condition ? valueIfTrue : valueIfFalse;

// Example:
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// Short Circuit:

// && — AND Short Circuit:

// &&  → returns first FALSY value
//       or last value if all truthy

// ||  → returns first TRUTHY value
//       or last value if all falsy

// Rule: if LEFT is falsy → stop, return LEFT
//       if LEFT is truthy → return RIGHT

// Example :

false && "Hello"; // false (stopped at left)
true && "Hello"; // "Hello" (returned right)
0 && "Hello"; // 0 (stopped at left)
1 && "Hello"; // "Hello" (returned right)

// || — OR Short Circuit:

// Rule: if LEFT is truthy → stop, return LEFT
//       if LEFT is falsy → return RIGHT

// Example :

"Hello" || "Default"; // "Hello" (stopped at left)
null || "Default"; // "Default" (returned right)
0 || "Default"; // "Default" (returned right)
