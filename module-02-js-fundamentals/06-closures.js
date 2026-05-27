// LEXICAL SCOPE:

// Lexical = WHERE code is written
// Scope = WHERE variable is accessible

// Lexical Scope means:
// Inner function can access variables
// of outer function because of
// WHERE it was WRITTEN (not called!)

//  example:
function outer() {
  let name = "Aniruddha"; // outer variable

  function inner() {
    console.log(name); //  can access!
  }

  inner();
}

// Closure :

// "Inner function remembering outer
// function's variables even after
// outer function has finished"

// example:

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
