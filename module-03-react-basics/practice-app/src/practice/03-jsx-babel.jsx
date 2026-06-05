// ============================================
// TOPIC: JSX Rules & Babel
// ============================================

// Write a component that demonstrates JSX rules:

// PRACTICE TASKS:
// 1. Use className instead of class
// 2. Use htmlFor instead of for
// 3. Self closing tags <img /> <input />
// 4. Single parent element rule
// 5. JS expression inside {}
// ============================================

function JsxRules() {
  return (
    <>
      <h1 className="logo">AJ</h1>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />

      <img
        src="https://images.unsplash.com/photo-1780254865273-908136e98d5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={200}
      />

      <div>
        <h2>Hello</h2>
        <p>Well-come</p>
      </div>

      <p>{2 + 2}</p>
    </>
  );
}

export default JsxRules;
