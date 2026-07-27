import { useState } from "react";
function useToggle() {
  const [toggle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle((prev) => !prev);
  };

  return { toggle, handleToogle };
}

export default useToggle;
