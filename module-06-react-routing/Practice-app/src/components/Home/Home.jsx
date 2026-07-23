import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Home Page</h1>

      <button onClick={() => navigate("/About")}> Go to About</button>
    </div>
  );
}

export default Home;
