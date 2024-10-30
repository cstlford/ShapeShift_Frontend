import NavbarComponent from "../../NavbarComponent";
import SideNavbarComponent from "../../SideNavbarComponent";
import "./index.css";
import "../../../../index.css"
import GraphForWeight from "../../../GraphForWeight";





const ProgressLoggingComponent: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarComponent />
      <SideNavbarComponent />
      <div className="content-container">
        <div className="box box1">
        <GraphForWeight/>

        </div>
        <div className="box-container">
        
        </div>
      </div>
    </div>
  );
};

export default ProgressLoggingComponent;
