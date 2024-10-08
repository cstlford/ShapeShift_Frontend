import NavbarComponent from "../../NavbarComponent";
import SideNavbarComponent from "../../SideNavbarComponent";
import "./index.css";
import "../../../index.css";

const ExcerciseLoggingComponent: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarComponent />
      <SideNavbarComponent />
      <div className="content-container">
        <div className="box box1">Exercise 1</div>
        <div className="box-container">
          <div className="box box2">Exercise 2</div>
          <div className="box box3">Exercise 3</div>
        </div>
      </div>
    </div>
  );
};

export default ExcerciseLoggingComponent;
