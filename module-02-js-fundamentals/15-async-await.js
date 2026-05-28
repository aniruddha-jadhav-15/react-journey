// ASYNC / AWAIT IN JAVASCRIPT
/*
  What is Async/Await : 


  → Async/Await is a cleaner, more readable 
    way to write Promise-based code.
  → It makes asynchronous code look and 
    behave like synchronous code.

  Two Keywords:

  → async  : marks a function as asynchronous
             always returns a Promise
  → await  : pauses execution until 
             Promise resolves
             only works inside async function

  Syntax:
  async function functionName() {
    try {
      const result = await somePromise();
    } catch (error) {
      console.log(error);
    }
  }

  Promise vs Async/Await:
  
  Promise way:
  fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

  Async/Await way (cleaner!):
  async function getData() {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  }


  Rules:
  1. async goes before function keyword
  2. await only inside async function
  3. Always use try/catch for error handling
  4. await pauses ONLY current function
     not entire program

  Used in React:
  → API calls inside useEffect hook
  → Form submissions
  → Any async operation

  Interview Answer:
  Async/Await is syntactic sugar over 
  Promises. It makes async code cleaner 
  and more readable. async marks function 
  as asynchronous, await pauses execution 
  until Promise resolves. I use it in React 
  for all API calls inside useEffect.

*/

// PRACTICAL EXAMPLES

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

// Basic async/await

async function getUser() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const { name, email } = data;
    console.log("Name:", name);
    console.log("Email:", email);
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
}

getUser();
