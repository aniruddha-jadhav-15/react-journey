// Call Stack:

// ***********************

// Call Stack is a data structure that
// tracks function execution.
// - Works on LIFO principle
// - GEC pushed first
// - Functions pushed when called
// - Popped when function completes

// ***********************

// Event Loop:

// Event Loop continuously checks:
// - Is Call Stack empty?
// - If YES → push callback from queue
// - If NO → wait

// This is how JS handles async operations!

// ***********************

// Concurrency:

// JS is single-threaded BUT handles
// multiple operations using:
// - Call Stack (sync code)
// - Web APIs (async operations)
// - Callback Queue (waiting callbacks)
// - Event Loop (coordinator)

// Que : What happens when you call setTimeout(fn, 0)?

// 1. JS sends to Web API
// 2. Web API waits 0ms
// 3. Moves to Callback Queue
// 4. Event Loop checks Call Stack
// 5. If empty → pushes to Call Stack
// 6. Executes → pops

// BUT — even setTimeout(0)
// never runs immediately!
// It always waits for Call Stack
// to be completely empty first!

// Que : Can you tell me WHY output is 1, 3, 2? 👇

console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");

// Here's why:

// JavaScript is single-threaded, so it
// executes code line by line.

// First, console.log("1") runs → prints 1.

// Then setTimeout is sent to Web API.
// JS doesn't wait — moves to next line.

// console.log("3") runs → prints 3.

// Now Call Stack is empty.

// Event Loop checks Callback Queue,
// finds setTimeout callback,
// pushes it to Call Stack.

// console.log("2") runs → prints 2.

// That's why output is 1, 3, 2 —
// not 1, 2, 3!"
