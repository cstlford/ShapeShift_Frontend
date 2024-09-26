import { NavLink } from "react-router-dom";
import "./index.css";

const SideNavbarComponent = () => {
  return (
    <aside className="sidenav-container">
      <ul className="sidenav-list">
        <li className="sidenav-item">
          <NavLink to="/dashboard">item1</NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/dashboard">item2</NavLink>
        </li>
        <li className="sidenav-item">
          <NavLink to="/dashboard">item3</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavbarComponent;
