import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Multiselect } from "multiselect-react-dropdown";
import "./index.css";
import "../../index.css";

const FitnessGoalsForm: React.FC = () => {
  const navigate = useNavigate();

  const [other, setOther] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    enduranceAndCardio: [],
    flexibilityAndMobility: [],
    overallHealth: [],
    weightManagement: [],
    strengthAndMuscle: [],
  });

  const handleMultiSelectChange = (category: string, selectedList: any) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: selectedList,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/preferences');
  };

  const options = {
    enduranceAndCardio: [
      { name: "Improve endurance", id: 1 },
      { name: "Enhance stamina for sports or activities", id: 2 },
      { name: "Train for a specific event", id: 3 },
    ],
    flexibilityAndMobility: [
      { name: "Increase flexibility", id: 1 },
      { name: "Improve joint mobility", id: 2 },
      { name: "Enhance balance and coordination", id: 3 },
    ],
    overallHealth: [
      { name: "Improve overall health and wellness", id: 1 },
      { name: "Boost enery levels", id: 2 },
      { name: "Reduce stress", id: 3 },
      { name: "Improve sleep quality", id: 4 },
    ],
    weightManagement: [
      { name: "Gain weight", id: 1 },
      { name: "Lose weight", id: 2 },
      { name: "Maintain weight", id: 3 },
    ],
    strengthAndMuscle: [
      { name: "Build muscle mass", id: 1 },
      { name: "Increase strength", id: 2 },
      { name: "Tone and define", id: 3 },
    ],
  };

  return (
    <div className="fg-form-container">
      <form className="fg-form" onSubmit={handleSubmit}>
        <h2>
          What do you want to <span className="highlight">achieve</span>?
        </h2>

        <div className="fg-form-group">
          <div>
            <label>Endurance & Cardio</label>
            <Multiselect
              options={options.enduranceAndCardio}
              displayValue="name"
              onSelect={(selectedList) =>
                handleMultiSelectChange("enduranceAndCardio", selectedList)
              }
              onRemove={(selectedList) =>
                handleMultiSelectChange("enduranceAndCardio", selectedList)
              }
              className="fg-multiselect"
            />
          </div>

          <div>
            <label>Flexibility & Mobility</label>
            <Multiselect
              options={options.flexibilityAndMobility}
              displayValue="name"
              onSelect={(selectedList) =>
                handleMultiSelectChange("flexibilityAndMobility", selectedList)
              }
              onRemove={(selectedList) =>
                handleMultiSelectChange("flexibilityAndMobility", selectedList)
              }
              className="fg-multiselect"
            />
          </div>

          <div>
            <label>Overall Health</label>
            <Multiselect
              options={options.overallHealth}
              displayValue="name"
              onSelect={(selectedList) =>
                handleMultiSelectChange("overallHealth", selectedList)
              }
              onRemove={(selectedList) =>
                handleMultiSelectChange("overallHealth", selectedList)
              }
              className="fg-multiselect"
            />
          </div>
        </div>

        <div className="fg-form-group">
          <div>
            <label>Weight Management</label>
            <Multiselect
              options={options.weightManagement}
              displayValue="name"
              onSelect={(selectedList) =>
                handleMultiSelectChange("weightManagement", selectedList)
              }
              onRemove={(selectedList) =>
                handleMultiSelectChange("weightManagement", selectedList)
              }
              className="fg-multiselect"
            />
          </div>

          <div>
            <label>Strength & Muscle</label>
            <Multiselect
              options={options.strengthAndMuscle}
              displayValue="name"
              onSelect={(selectedList) =>
                handleMultiSelectChange("strengthAndMuscle", selectedList)
              }
              onRemove={(selectedList) =>
                handleMultiSelectChange("strengthAndMuscle", selectedList)
              }
              className="fg-multiselect"
            />
          </div>

          <div>
            <label>Other, please specify</label>
            <textarea
              placeholder="E.g., Prepare for a hiking trip, rehab an injury, etc."
              value={other}
              onChange={(e) => setOther(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="fg-submit-btn">
          Next: Your Preferences
        </button>
      </form>
    </div>
  );
};

export default FitnessGoalsForm;
