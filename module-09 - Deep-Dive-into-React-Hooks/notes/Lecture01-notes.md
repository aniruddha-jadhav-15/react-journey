# Module 9 — Deep Dive into React Hooks

## Lecture 01 — React Lifecycle: Class vs Functional

Class components had lifecycle methods:
componentDidMount, componentDidUpdate, componentWillUnmount

Functional components replace all of these with useEffect.
mount → useEffect(() => {}, [])
update → useEffect(() => {}, [dependency])
unmount → useEffect(() => { return () => cleanup }, [])

💡 Key Takeaway
Functional components with hooks are the
modern standard — class components are legacy.
