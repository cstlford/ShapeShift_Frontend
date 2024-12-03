import React, { useState } from "react";
import PlanLoader from "../../../components/PlanLoader";
import Button from "../../../components/Button";
import AppLayout from "../../../layouts/AppLayout";

const SavedExercisePlansPage = () => {
  const [isLoading, setLoading] = useState(false);
  const rows = [
    {
      top: "Calories",
      bottom: `1200 kcal`,
    },
    {
      top: "Protein",
      bottom: `100 g`,
    },
    {
      top: "Fat",
      bottom: `100 g`,
    },
    {
      top: "Carbs",
      bottom: `100 g`,
    },
  ];

  return (
    <AppLayout>
      <Button style="blue" onClick={() => setLoading(!isLoading)}>
        Generate Plan
      </Button>
      <div>
        {isLoading && (
          <PlanLoader title="Generating meal plan">
            {rows.map((row, index) => (
              <div className="plan-item" key={index}>
                <div className="plan-item-top">{row.top}</div>
                <div className="plan-item-bottom">{row.bottom}</div>
              </div>
            ))}
          </PlanLoader>
        )}
      </div>
    </AppLayout>
  );
};

export default SavedExercisePlansPage;
