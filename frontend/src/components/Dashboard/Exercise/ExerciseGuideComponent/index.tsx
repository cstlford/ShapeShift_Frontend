import NavbarComponent from "../../NavbarComponent";
import SideNavbarComponent from "../../SideNavbarComponent";
import "./index.css";
import "../../../../index.css"

const ExcerciseGuideComponent: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarComponent />
      <SideNavbarComponent />
      <div className="content-container">
        <div className="box box1">Coming Soon!</div>
        <div className="box-container">
          <div className="box box2">Coming Soon!</div>
          <div className="box box3">Coming Soon!</div>
        </div>
      </div>
    </div>
  );
};

export default ExcerciseGuideComponent;
