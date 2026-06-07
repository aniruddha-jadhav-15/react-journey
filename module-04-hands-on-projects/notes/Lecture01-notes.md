# Lecture 01 — Project Overview, Planning & Developer Mindset

## 📌 What I Learned

- This module builds a Atlassian's Jira like Task Board app
- Requirements come as plain English documents
- Design team provides Figma design after requirements
- Developer breaks design into sections then components

## 🧠 Developer Mindset

- Read requirements carefully
- Analyze the design
- Break app into sections
- Break sections into components
- Then start coding

## 🧩 Component Breakdown

- App
  - Header
    - Title
    - InputField
    - TagList (DEV, QA, Product Owner)
    - Dropdown
    - AddButton
  - Main Board
    - Column (x4)
      - Card
        - TaskTitle
        - TagPills
        - DeleteIcon

## 📁 Folder Structure

- src/
  - components/
    - Header.jsx
    - Tag.jsx
    - Column.jsx
    - Card.jsx
  - App.jsx
  - App.css

## 💡 Key Takeaway

Always plan before coding.
Think in components, not in pages.
