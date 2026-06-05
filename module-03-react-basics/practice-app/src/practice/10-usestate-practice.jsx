// ============================================
// TOPIC: useState Practice — Toggle
// ============================================
// PRACTICE TASKS:
// 1. Button that shows/hides text ✅
// 2. Button text changes Show/Hide ✅
// ============================================

import { useState } from "react";

function Toggle() {
  // isVisible state — starts as true (visible)
  const [isVisible, setVisible] = useState(true);

  // Toggle handler — flips true↔false
  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      {/* Button text changes based on state */}
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>

      {/* Text shows only when isVisible is true */}
      {isVisible && <p>This text is visible!</p>}
    </>
  );
}

export default Toggle;
