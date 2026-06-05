import { useState } from "react";

function Likes() {
  const [count, setCount] = useState(0);

  function increaseLikes() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseLikes}>❤️</button>
    </>
  );
}

export default Likes;
