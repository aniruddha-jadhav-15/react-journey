# Lecture 02 — Design Breakdown: Header + Main with Styling

## 📌 What I Learned

- How to analyze a design and break it into sections
- How to create semantic HTML structure in React
- How to style sections using CSS

## 🧱 Semantic HTML

- Semantic tags like header, main, section
  tell the browser what each part of the
  page represents
- It improves SEO and makes code readable
- Using divs everywhere is bad practice

## 🎨 Structure Breakdown

- Whole app wrapped in div.app
- Top section is header.app_header
- Bottom section is main.app_main
- Inside main we have 4 section.task_column
  one for each status column

## ⚛️ JSX Important

- In JSX we use className instead of class
- Because class is a reserved keyword
  in JavaScript

## 💡 Key Takeaway

- Always break design into sections first
- Use semantic tags not just divs
- Style each section separately
