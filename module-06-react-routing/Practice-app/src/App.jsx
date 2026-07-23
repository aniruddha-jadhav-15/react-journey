import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Founders from "./components/About/Founders";
import NotFound from "./components/NotFound";
import Services from "./components/Services/Services";
import Team from "./components/About/Team";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}>
          <Route path="Team" element={<Team />} />
        </Route>
        <Route path="/Services" element={<Services />} />
        <Route path="/About/:Id" element={<Founders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
