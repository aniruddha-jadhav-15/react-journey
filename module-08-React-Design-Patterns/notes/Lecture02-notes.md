## Custom Hooks Pattern

Extract reusable logic into a function starting with "use".
Any component can use the same hook without repeating code.

Common example: useFetch() — handles API call,
loading state, and error state in one place.

💡 Key Takeaway
If same logic is needed in multiple components,
make a custom hook.
