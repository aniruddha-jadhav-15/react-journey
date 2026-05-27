// Difference between var, let, const?

// var   → function scoped, re-declare ✅, reassign ✅
// let   → block scoped, re-declare ❌, reassign ✅
// const → block scoped, re-declare ❌, reassign ❌

// Best practice:

// ❌ Never use var
// ✅ Use const by default
// ✅ Use let only when reassigning

// What is output?

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// outPut: [1,2,3,4]

// const means you can't REASSIGN
// the variable itself.

// BUT you CAN mutate the contents!

// arr = [1,2,3,4] ❌ (reassign — not allowed)
// arr.push(4)     ✅ (mutate — allowed)
