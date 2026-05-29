// DEBOUNCING:

/*
Wait for user to STOP typing
THEN execute function

Example: Search bar
- User types React
- Don't search on every keystroke
- Wait 500ms after last keystroke
- THEN search!

*/

// Syntax :
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  };
}

// THROTTLING:

/*
Execute function at FIXED intervals
No matter how many times triggered

Example: Scroll event
- User scrolls 100 times/second
- Don't run function 100 times!
- Run ONCE every 500ms only!
*/

// Syntax :

function throttle(fn, limit) {
  let lastRun = 0;
  return function () {
    if (Date.now() - lastRun >= limit) {
      lastRun = Date.now();
      fn();
    }
  };
}

// Simple difference:

// Debounce  → wait for STOP → then run
// Throttle  → run at FIXED intervals

// Real world:

// Debounce  → Search bar, form validation
// Throttle  → Scroll events, resize events
