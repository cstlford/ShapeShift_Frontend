import { NavLink } from "react-router-dom";
import "./index.css";
import logo from "../../../assets/logo.ico";

const NavbarComponent = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/dashboard">
          <img src={logo} alt="Logo" className="nav-logo"/>
        </NavLink>

        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/dashboard">
              <a className="nav-bell-icon">🔔</a>
            </NavLink>
          </li>
          <li className="nav-item">
            AltName
          </li>
          <li className="nav-item">
            AltPic
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
