# Lecture 03 — Building the Header Layout: JSX and Component Basics

## 📌 What I Learned

- How to create a separate component in React
- How to structure a form inside a component
- How to import and use a component in App.jsx

## 🧩 Component Structure

- Each component gets its own folder inside components/
- Each folder contains jsx file and css file
- This makes code easy to maintain and reuse

## 📁 Folder Structure

- src/
  - components/
    - TaskForm/
      - task-form.jsx
      - task-form.css

## ⚛️ How to Use a Component

- Create component function in its own file
- Export it using export default
- Import it in App.jsx
- Use it as a self closing tag like TaskForm />

## 🧱 TaskForm Structure

- header.app_header
  - form
    - input (task details)
    - div (tag buttons - DEV, QA, Product Owner)
    - select (status dropdown)
    - button (+ Add)

## 💡 Key Takeaways

- One component = One folder (industry standard)
- Each component has its own CSS file
- Components make code reusable and maintainable
- select tag uses className not custom attributes
