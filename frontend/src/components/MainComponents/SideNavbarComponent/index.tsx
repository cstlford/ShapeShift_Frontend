import { NavLink } from "react-router-dom";
import "./index.css";

const SideNavbarComponent = () => {
  return (
    <aside className="sidenav-container">
      <div className="sidenav-header">
        <h1>Dashboard</h1>
      </div>
      <ul className="sidenav-list">
        <h2>Nutrition</h2>
        <li className="sidenav-item">
          <NavLink to="/dashboard">Make a Plan</NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/dashboard">My Recipes</NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/dashboard">Food Logging</NavLink>
        </li>

        <h2>Exercise</h2>
        <li className="sidenav-item">
          <NavLink to="/dashboard">Make a Plan</NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/dashboard">Exercise How-To Guide</NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/dashboard">Exercise Logging</NavLink>
        </li>

        <h2>Progress Tracking</h2>
        <li className="sidenav-item">
          <NavLink to="/dashboard">Weight Logging</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavbarComponent;
