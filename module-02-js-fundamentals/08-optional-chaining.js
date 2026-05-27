// 1. Optional Chaining ?.

// Problem without ?.
const user = null;
console.log(user.name); //  ERROR!

// Solution with ?.
console.log(user?.name); //  undefined (no error!)

// Simple rule:
// ?. means "if exists, get value
//          if not, return undefined"

// 2. Nullish Coalescing ??

const name = null;
console.log(name ?? "Default Name"); // "Default Name"

const age = 0;
console.log(age ?? 18); // 0 (not 18!)

// Simple rule:
// ?? means "use right side value
//          ONLY if left is null/undefined"

// 3. Logical OR ||

const name2 = null; // ✅ different name
console.log(name2 || "Default");

const age2 = 0; // ✅ different name
console.log(age2 || 18);

// Simple rule:
// || means "use right side value
//          if left is FALSY
//          (null, undefined, 0, "", false)

// Difference between ?? and ||:

const age = 0;

age ?? 18; // 0   (0 is not null/undefined)
age || 18; // 18  (0 is falsy!)
