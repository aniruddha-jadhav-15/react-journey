import { useState } from "react";
import TemperatureDisplay from "../TemperatureDisplay/TemperatureDisplay";

function TemperatureContainer() {
  const [tempertur, setTempertur] = useState(0);
  const handelTemp = () => {
    setTempertur((prv) => prv + 5);
  };
  return (
    <div>
      <button onClick={handelTemp}>Incrse Tempature</button>
      <TemperatureDisplay tempertur={tempertur} />
    </div>
  );
}

export default TemperatureContainer;
