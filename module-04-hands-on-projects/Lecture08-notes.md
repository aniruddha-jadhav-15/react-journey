# Lecture 08 — Final Touches & Design Wrap-up

## 📌 What I Learned

- How to create a Card component
- How to reuse Tag component inside Card
- How to import and use images in React
- How to structure card layout using flexbox

## 🧱 Component Structure

- article.task_card
  - p.task_text (task title)
  - div.task_bottom_line
    - div.task_card_tag (Tag components)
    - div.task_delete (delete icon)

## ⚛️ Key Concepts

- Reusing components inside other components
  makes code clean and modular
- Images are imported at top of file
  and used as src value
- article tag is semantic choice for card

## 💡 Key Takeaways

- Always reuse existing components
  instead of repeating code
- Card data should come from props
  not hardcoded values
- alt text on images is important
  for accessibility
- One component can use multiple
  other components inside it
