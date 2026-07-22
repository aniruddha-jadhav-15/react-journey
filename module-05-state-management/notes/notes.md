# Module 5 — Adding Functionality & State Management

## Lecture 01 — Understanding Requirements and Application Behavior

### 📌 What I Learned

- Always understand full requirements before writing any code
- Break each functionality into small implementable steps

### 🎯 Functionalities to Build

- Task input — user enters task details
- Tag selection — select/deselect tags, highlighted on cards
- Status dropdown — card appears in correct column
- Delete functionality — remove card from UI
- Drag and drop — move cards between columns

---

# Lecture 02 — Handling Form Submissions Efficiently

## 📌 What I Learned

- How to handle form input using onChange event
- How to get dropdown value from select element
- How to use useState to store form values

## ⚛️ Key Concept — useState

- useState is a React hook for storing data
- When state updates — React automatically
  updates the UI
- Syntax: const [value, setValue] = useState("")
  - value = current data
  - setValue = function to update data
  - "" = initial value

## 🔄 How onChange Works with useState

- User types in input
- onChange event fires
- e.target.value gets the typed text
- setValue updates the state
- React re-renders UI with new value

## 💡 Key Takeaways

- Never store form values in normal variables
- Always use useState for form data in React
- onChange + useState = controlled input
- Same approach works for both input
  and select elements

---

## Lecture 03 — Pro Tip: Shortcut for Handling Complex Forms

### 📌 What I Learned

- One handler function can manage all form inputs
- Using e.target.name to identify which field to update
- Cleaner and more scalable than separate handlers

---

## Lecture 04 — Understanding & Using React Strict Mode

### 📌 What I Learned

- StrictMode renders components twice in development
- Helps detect deprecated APIs and side effects
- Only active in development, not in production

---

## Lecture 05 — Understanding and Implementing Tag Selection Logic

### 📌 What I Learned

- Tags stored as array in state
- Toggle pattern — if tag exists remove it, if not add it
- Used some() to check existence and filter() to remove

### 💡 Key Pattern

- some() — checks if any item matches, returns true/false
- filter() — creates new array without matching item

---

## Lecture 06 — Dynamically Displaying Selected Tags with Applied Colors

### 📌 What I Learned

- Selected tags highlighted visually using conditional styling
- Pass selected state down via props to Tag component
- className changes based on whether tag is selected

---

## Lecture 07 — Code Optimization: Removing Duplicates and Organizing Constants

### 📌 What I Learned

- Move hardcoded values to a constants file
- Keeps code clean and easy to update in one place
- Avoid duplicate values across components

---

## Lecture 08 — Selecting the Data Structure & Implementing Card Display Logic

### 📌 What I Learned

- Chose array of objects as data structure for tasks
- Each task has id, title, tags, status
- Cards rendered by filtering tasks by column status

---

## Lecture 09 — Implementing Delete Functionality

### 📌 What I Learned

- Delete filters out task by id from tasks array
- Pass delete handler down via props to Card component
- filter() returns new array without deleted item

---

## Lecture 10 — Making Task Data Persistent with Local Storage

### 📌 What I Learned

- localStorage stores data as strings
- JSON.stringify() to save, JSON.parse() to retrieve
- Data persists even after page refresh

---

## Lecture 11 — Persisting Data with useEffect: Storing in Local Storage

### 📌 What I Learned

- useEffect watches tasks state
- When tasks change, automatically saves to localStorage
- Dependency array controls when effect runs

---

## Lecture 12 — Implementing Drag-and-Drop Without Any Library

### 📌 What I Learned

- HTML drag events: onDragStart, onDragOver, onDrop
- No external library needed for basic drag and drop
- Store dragged item in state or ref during drag

---

## Lecture 13 — Drag-and-Drop Area Creation & Extending Functionality

### 📌 What I Learned

- Drop zones created with onDragOver and onDrop handlers
- Update task status when dropped in new column
- Drag and drop changes which column card belongs to
