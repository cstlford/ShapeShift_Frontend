import NavbarComponent from "../NavbarComponent";
import SideNavbarComponent from "../SideNavbarComponent";
import "./index.css";
import "../../../index.css";

const DashboardComponent: React.FC = () => {
  return (
    <div>
      <NavbarComponent />
      <SideNavbarComponent />
    </div>
  );
};

export default DashboardComponent;
