import { NavLink } from "react-router-dom";
import "./index.css";
import logo from "../../../assets/logo.ico";
import { useGlobalState } from "../../../contexts/GlobalStateContext";
import ProfileIcon from "../../ProfileIcon";
import NotificationBell from "../../NotificationBell";

const NavbarComponent = () => {
  const { state } = useGlobalState();
  const userName = state.user ? state.user.name : "";
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/dashboard">
          <img src={logo} alt="Logo" className="nav-logo" />
        </NavLink>

        <ul className="nav-list">
          <li className="nav-item">
            <NotificationBell />
          </li>
          <li className="nav-item">{userName}</li>
          <li className="nav-item">
            <ProfileIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
