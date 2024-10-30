import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const SideNavbarComponent = () => {
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const [exerciseOpen, setExerciseOpen] = useState(false);
  const [progressOpen, setProgressOpen] = useState(false);

  const toggleNutrition = () => setNutritionOpen(!nutritionOpen);
  const toggleExercise = () => setExerciseOpen(!exerciseOpen);
  const toggleProgress = () => setProgressOpen(!progressOpen);

  return (
    <aside className="sidenav-container">
      <ul className="sidenav-list">
        <li className="sidenav-header">
          <h2 onClick={toggleNutrition}>
            Nutrition <span className="arrow">{nutritionOpen ? "▼" : "▲"}</span>
          </h2>
        </li>
        <div
          className={`collapsible ${nutritionOpen ? "open" : ""}`}
          style={{ maxHeight: nutritionOpen ? "200px" : "0" }}
        >
          <div className="collapsible-content">
            <li className="sidenav-item">
              <NavLink to="/nutrition/plan">Make a Plan</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/nutrition/recipes">My Recipes</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/nutrition/logging">Food Logging</NavLink>
            </li>
          </div>
        </div>

        <li className="sidenav-header">
          <h2 onClick={toggleExercise}>
            Exercise <span className="arrow">{exerciseOpen ? "▼" : "▲"}</span>
          </h2>
        </li>
        <div
          className={`collapsible ${exerciseOpen ? "open" : ""}`}
          style={{ maxHeight: exerciseOpen ? "200px" : "0" }}
        >
          <div className="collapsible-content">
            <li className="sidenav-item">
              <NavLink to="/exercise/plan">Make a Plan</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/exercise/guide">Exercise How-To Guide</NavLink>
            </li>
            <li className="sidenav-item">
              <NavLink to="/exercise/logging">Exercise Logging</NavLink>
            </li>
          </div>
        </div>

        <li className="sidenav-header">
          <h2 onClick={toggleProgress}>
            Progress Tracking{" "}
            <span className="arrow">{progressOpen ? "▼" : "▲"}</span>
          </h2>
        </li>
        <div
          className={`collapsible ${progressOpen ? "open" : ""}`}
          style={{ maxHeight: progressOpen ? "200px" : "0" }}
        >
          <div className="collapsible-content">
            <li className="sidenav-item">
              <NavLink to="/progress/logging">Weight Logging</NavLink>
            </li>
          </div>
        </div>
        <li className="sidenav-item">
          <NavLink to="/chat-with-coach">Chat with Coach</NavLink>
        </li>
        
      </ul>
    </aside>
    
    
  );
};

export default SideNavbarComponent;
