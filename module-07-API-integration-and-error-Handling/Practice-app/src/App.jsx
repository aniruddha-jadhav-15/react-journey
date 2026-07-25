import { Axios } from "axios";
import "./App.css";
import UserData from "./UserData";
import Fetch from "./components/Fetch";

function App() {
  return (
    <>
      <UserData />
      <Fetch />
      <Axios />
    </>
  );
}

export default App;
