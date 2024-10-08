import NavbarComponent from "../../NavbarComponent";
import SideNavbarComponent from "../../SideNavbarComponent";
import "./index.css";
import "../../../index.css";

const ProgressLoggingComponent: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarComponent />
      <SideNavbarComponent />
      <div className="content-container">
        <div className="box box1">Progress 1</div>
        <div className="box-container">
          <div className="box box2">Progress 2</div>
          <div className="box box3">Progress 3</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressLoggingComponent;
