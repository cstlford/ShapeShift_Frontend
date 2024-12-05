import React, { useState } from "react";
import PlanLoader from "../../../components/PlanLoader";
import Button from "../../../components/Button";
import AppLayout from "../../../layouts/AppLayout";

import dumbbell from "../../../assets/animations/dumbbell.json";

const SavedExercisePlansPage = () => {
  const [isLoading, setLoading] = useState(false);
  const messages = [
    "Generating your plan",
    "Almost there",
    "Just a few more seconds",
  ];
  return (
    <AppLayout>
      <Button style="blue" onClick={() => setLoading(!isLoading)}>
        Generate Plan
      </Button>
      <div>
        {isLoading && <PlanLoader path={dumbbell} messages={messages} />}
      </div>
    </AppLayout>
  );
};

export default SavedExercisePlansPage;
