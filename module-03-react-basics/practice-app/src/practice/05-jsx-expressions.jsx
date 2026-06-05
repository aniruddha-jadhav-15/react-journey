// ============================================
// TOPIC: JSX Expressions
// ============================================
// PRACTICE TASKS:
// 1. Display variable value
// 2. Display age
// 3. Calculate birth year
// 4. Ternary operator
// 5. Math expression
// ============================================

function JsxExpressions() {
  const name = "Aniruddha";
  const age = 22;
  const isAdult = age > 18;

  return (
    <>
      {/* Display name */}
      <h1>{name}</h1>

      {/* Display age */}
      <p>Age: {age}</p>

      {/* Calculate birth year */}
      <p>Birth Year: {2026 - age}</p>

      {/* Ternary operator */}
      <p>Status: {isAdult ? "Adult!" : "Minor!"}</p>

      {/* Math expression */}
      <p>Math Result: {10 * 5}</p>
    </>
  );
}

export default JsxExpressions;
