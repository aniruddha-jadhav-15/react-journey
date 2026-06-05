// ============================================
// TOPIC: Naming Conventions
// ============================================
// PRACTICE TASKS:
// 1. PascalCase — Component name
// 2. camelCase — Variable/function name
// 3. kebab-case — CSS className
// ============================================

// Nav — PascalCase component name ✅
function Nav() {
  // listItems — camelCase variable name ✅
  const listItems = ["Home", "About", "Contact"];

  return (
    <nav>
      <ul>
        {listItems.map((list) => {
          // nav-lists — kebab-case className ✅
          return (
            <li key={list} className="nav-lists">
              {list}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
