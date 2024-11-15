import NavbarComponent from "../../NavbarComponent";
import SideNavbarComponent from "../../SideNavbarComponent";
import "./index.css";
import "../../../../index.css";
import WeightLogging from "../../../WeightLogging";



const WeightHistory: React.FC = () => {
  return (
    <div className="dashboard-container">
      <NavbarComponent />
      <SideNavbarComponent />
      <div id="main-flex-container" className="content-container">

     
          <h1>Update Weight History</h1>
         
          <WeightLogging/>
          
         
          
        
       
      </div>
    </div>
  );
};

export default WeightHistory;
;
