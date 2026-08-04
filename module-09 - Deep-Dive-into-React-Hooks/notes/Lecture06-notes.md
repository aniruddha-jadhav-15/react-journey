## Lecture 06 — useImperativeHandle

Expose specific methods from child to parent.
Used with forwardRef.

const Input = forwardRef((props, ref) => {
useImperativeHandle(ref, () => ({
focus: () => inputRef.current.focus(),
clear: () => inputRef.current.value = ''
}))
return <input ref={inputRef} />
})

💡 Key Takeaway
useImperativeHandle controls what parent
can access from child ref.
