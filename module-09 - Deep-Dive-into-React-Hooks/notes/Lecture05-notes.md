## Lecture 05 — forwardRef

Pass ref from parent component to child component.
Child must be wrapped with forwardRef to accept it.

const Input = forwardRef((props, ref) => {
return <input ref={ref} {...props} />
})

// Parent
const inputRef = useRef(null)
<Input ref={inputRef} />
inputRef.current.focus()

💡 Key Takeaway
forwardRef lets parent control child DOM element.
