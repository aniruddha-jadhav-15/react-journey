// ============================================
// TOPIC: Handling Events
// ============================================
// PRACTICE TASKS:
// 1. Button that console.log on click ✅
// 2. Button that changes text on click ✅
// 3. Input that shows typed value ✅
// ============================================

import { useState } from "react";

function HandlingEvents() {
  // State for button text change
  const [value, setValue] = useState("Hello");

  // State for input value
  const [inptValue, setInptValue] = useState("");

  // Input change handler
  const userInpt = (e) => {
    setInptValue(e.target.value);
  };

  return (
    <>
      {/* Task 1: console.log on click */}
      <button onClick={() => console.log("click")}>Click</button>

      {/* Task 2: changes text on click */}
      <button onClick={() => setValue("Welcome")}>{value}</button>

      {/* Task 3: shows typed value */}
      <input type="text" onChange={userInpt} />
      <p>{inptValue}</p>
    </>
  );
}

export default HandlingEvents;
