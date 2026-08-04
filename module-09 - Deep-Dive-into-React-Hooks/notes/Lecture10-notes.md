## Lecture 10 — useMemo

Memoizes expensive calculations.
Only recalculates when dependencies change.

const result = useMemo(() => {
return expensiveCalculation(data)
}, [data])

💡 Key Takeaway
Only use useMemo for genuinely expensive
calculations — don't overuse it.
