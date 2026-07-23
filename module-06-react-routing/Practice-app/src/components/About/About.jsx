import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>This is About Page</h1>

      <Outlet />

      <ul>
        <li>
          <Link to="/About/Founder1">Founder-1 </Link>
        </li>
        <li>
          <Link to="/About/Founder2">Founder-2 </Link>
        </li>
        <li>
          <Link to="/About/Team">Team</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
