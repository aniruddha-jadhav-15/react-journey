# Lecture 06 — Implementing Reusable Tag Component Using Props

## 📌 What I Learned

- How to pass data to a component using props
- How to receive and use props inside a component

## ⚛️ How Props Work

- Props are passed like HTML attributes
- <Tag tagName="DEV" />
- Received as parameter in component function
- Destructured and used inside JSX

## 💡 Two Ways to Destructure Props

// Inside function body
function Tag(props) {
const { tagName } = props;
}

// Directly in parameter (industry standard)
function Tag({ tagName }) {
}

## 🎯 Key Takeaway

- Props make components truly reusable
- Same component different data = different output
- Always destructure props for cleaner code
