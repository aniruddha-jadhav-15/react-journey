// 02 - First Component Practice

// Component 1 - Header

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

// Component 2 - Footer

function Footer() {
  return (
    <footer>
      <p>© 2026 Aniruddha Jadhav</p>
    </footer>
  );
}

// Component 3 - Card

function Card() {
  return (
    <div>
      <h2>Card Title</h2>
      <p>Card description here</p>
    </div>
  );
}

// Main component to render all
function ComponentPractice() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
}

export default ComponentPractice;
