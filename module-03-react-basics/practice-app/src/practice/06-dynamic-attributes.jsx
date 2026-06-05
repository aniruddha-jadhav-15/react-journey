// ============================================
// TOPIC: Dynamic Attributes
// ============================================
// PRACTICE TASKS:
// 1. Dynamic src for image ✅
// 2. Dynamic className ✅
// 3. Dynamic disabled for button ✅
// 4. Dynamic style ✅
// ============================================

import { useState } from "react";

function DynamicAttributes() {
  // Dynamic className variable
  const imgClassName = "img";

  // Dynamic style variable
  const imgStyle = { width: "200px", borderRadius: "10px" };

  // Dynamic disabled state
  const [isDisabled, setIsDisabled] = useState(false);

  // Button click handler
  const btnClick = () => {
    setIsDisabled(true);
  };

  return (
    <>
      {/* Dynamic src, className and style */}
      <img
        src="https://images.unsplash.com/photo-1778159265191-855bcf1ce7b2?q=80&w=687"
        className={imgClassName}
        style={imgStyle}
        alt="dynamic image"
      />

      {/* Dynamic disabled button */}
      <button disabled={isDisabled} onClick={btnClick}>
        Click to Disable
      </button>
    </>
  );
}

export default DynamicAttributes;
