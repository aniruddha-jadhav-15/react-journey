// ============================================
// TOPIC: State Practice — Counter
// ============================================
// PRACTICE TASKS:
// 1. Increment button
// 2. Decrement button
// 3. Reset button
// ============================================

import { useState } from "react";

function Counter() {
  // Counter state — starts at 0
  const [count, setCount] = useState(0);

  // Increment handler
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement handler
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset handler
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter</h1>

      <div>
        {/* Increment button */}
        <button className="increment" onClick={increment}>
          Increment
        </button>

        {/* Current count */}
        <p>{count}</p>

        {/* Decrement button */}
        <button className="decrement" onClick={decrement}>
          Decrement
        </button>

        {/* Reset button */}
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
