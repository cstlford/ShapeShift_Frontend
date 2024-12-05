import { useEffect, useState } from "react";
import AppLayout from "../../../layouts/AppLayout";
import WorkoutCard from "../../../components/WorkoutCard";
import "./index.css";

interface ExercisePlan {
  id: number;
  workout: any;
}
type Exercise = {
  name: string;
  sets: number;
  reps: number;
  rest: number;
};

type WorkoutCardProps = {
  title: string;
  warmup?: string[];
  compoundLifts?: Exercise[];
  isolationLifts?: Exercise[];
  cooldown?: string[];
};

const SavedExercisePlansPage = () => {
  const [exercisePlans, setExercisePlans] = useState<ExercisePlan[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchExercisePlans = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/get-exercise-plans",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched exercise plans:", data.workout);
        setExercisePlans(data.workout);
      } catch (error) {
        console.error("Error fetching exercise plans:", error);
        setErrorMessage("Failed to fetch exercise plans. Please try again.");
      }
    };

    fetchExercisePlans();
  }, []);

  return (
    <AppLayout>
      <div className="exercise-page">
        <h1>Your Exercise Plans</h1>
        {exercisePlans.length > 0 ? (
          <div className="exercise-plan-container">
            {exercisePlans.map((plan, index) => (
              <div className="exercise-plan" key={plan.id}>
                <h3>Exercise Plan: {index + 1}</h3>
                <div className="workout-cards">
                  {plan.workout.map(
                    (workout: WorkoutCardProps, workoutIndex: number) => (
                      <WorkoutCard
                        key={workoutIndex}
                        title={workout.title}
                        warmup={workout.warmup}
                        compoundLifts={workout.compoundLifts}
                        isolationLifts={workout.isolationLifts}
                        cooldown={workout.cooldown}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 id="no-plans">**You have no saved plans yet**</h3>
        )}
      </div>
    </AppLayout>
  );
};

export default SavedExercisePlansPage;
