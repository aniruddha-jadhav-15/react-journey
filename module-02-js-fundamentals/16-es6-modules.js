/*
  ES6 MODULES
  
  ES6 Modules allow us to split JavaScript code
  into multiple reusable files.
  
  Each file is its own module with its own scope.
  Variables and functions are NOT global by default.
  We use export to share and import to use them.
  
  Benefits:
  → Clean and organized code
  → Reusable across files
  → Easy to maintain
  → Used in every React project!
*/

//  NAMED EXPORT

// Multiple exports per file
// Import with SAME name + curly braces

export const name = "Aniruddha";
export const age = 23;
export function greet() {}

// Import
import { name, age, greet } from "./file.js";

// DEFAULT

// Only ONE per file
// Import with ANY name, no curly braces

export default function App() {}

// Import — can use any name!
import App from "./App.jsx";
import MyApp from "./App.jsx"; // also works!

//  KEY DIFFERENCE

// Named  → { curly braces } → same name
// Default → no curly braces → any name

//  USED IN REACT
// Components = default export

// export default function Button() { }

// Hooks, utilities = named export
export const useCounter = () => {};
export const formatDate = () => {};
