// // What is Promise?

// /*
// Promise is an object in JavaScript that
// represents the eventual completion or
// failure of an asynchronous operation.
// */

// // Real World Analogy:

// /*
// Like ordering food at restaurant:

// You order food        → making API request
// Waiter says "coming"  → Promise created
// You wait              → Pending state
// Food arrives          → Fulfilled (resolve)
// Kitchen closed        → Rejected (reject)
// */

// // 3 States:

// // 1. Pending   → initial state, waiting
// // 2. Fulfilled → operation completed successfully
// // 3. Rejected  → operation failed

// // Syntax :

// // Creating Promise
// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Data received!"); // fulfilled
//   } else {
//     reject("Error occurred!"); // rejected
//   }
// });

// // Consuming Promise
// myPromise
//   .then((data) => {
//     console.log(data); // "Data received!"
//   })
//   .catch((error) => {
//     console.log(error); // "Error occurred!"
//   })
//   .finally(() => {
//     console.log("Always runs!"); // cleanup
//   });

// // Why Promise?

// // Before Promise → Callback Hell
// const data = getData(function (data) {
//   getUser(data, function (user) {
//     getPosts(user, function (posts) {
//       // deeply nested nightmare!
//     });
//   });
// });

// // After Promise → Clean & Readable
// getData()
//   .then((data) => getUser(data))
//   .then((user) => getPosts(user))
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error));

const API_URL = "https://jsonplaceholder.typicode.com/users/1";
async function getUser() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}
