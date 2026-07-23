import { useParams } from "react-router-dom";

function Founders() {
  const { Id } = useParams();
  return (
    <div>
      <h1>Founder {Id} </h1>
    </div>
  );
}

export default Founders;
