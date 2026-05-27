// EXECUTION CONTEXT:
// "Execution Context is the environment
// where JavaScript code is evaluated
// and executed."

// **************************

// When JS runs code:

// 1. Creates Global Execution Context (GEC)

// 2. GEC has 2 phases:

//    Phase 1 — Memory Creation Phase:
//    - Variables → stored as undefined
//    - Functions → stored as full function code

//    Phase 2 — Execution Phase:
//    - Code runs line by line
//    - Variables get actual values

// 3. When function is called:
//    - New Functional Execution Context (FEC) created
//    - Same 2 phases happen inside
//    - After function finishes → FEC deleted

// 4. After all code runs → GEC deleted
