## Lecture 09 — useReducer

Alternative to useState for complex state logic.
Like Redux but built into React.

const [state, dispatch] = useReducer(reducer, initialState)

function reducer(state, action) {
switch(action.type) {
case 'INCREMENT':
return { count: state.count + 1 }
case 'DECREMENT':
return { count: state.count - 1 }
default:
return state
}
}

dispatch({ type: 'INCREMENT' })

💡 Key Takeaway
Use useReducer when state logic is complex
or multiple sub-values are related.
