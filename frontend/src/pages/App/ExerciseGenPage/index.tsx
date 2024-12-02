import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import SelectForm from "../../../components/SelectForm";
import WorkoutCard from "../../../components/WorkoutCard";
import AppLayout from "../../../layouts/AppLayout";
import "./index.css";
import { useState } from "react";

const ExerciseGenerationPage = () => {
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [timePerDay, setTimePerDay] = useState("");

  const pushWorkoutData = {
    title: "Push Workout",
    warmup: ["5 minutes treadmill", "Dynamic stretches"],
    compoundLifts: [
      { name: "Bench Press", sets: 3, reps: 8 },
      { name: "Overhead Press", sets: 2, reps: 8 },
    ],
    isolationLifts: [
      { name: "Tricep Extension", sets: 3, reps: 8 },
      { name: "Lateral Raises", sets: 2, reps: 8 },
    ],
    cooldown: ["Stretch chest", "Stretch shoulders"],
  };

  const timeOptions = [
    { name: "One", id: 1 },
    { name: "Two", id: 2 },
    { name: "Three", id: 3 },
    { name: "Four", id: 4 },
    { name: "Five", id: 5 },
    { name: "Six", id: 6 },
    { name: "Seven", id: 7 },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      daysPerWeek: parseInt(daysPerWeek, 10),
      timePerDay: parseInt(timePerDay, 10),
    };

    console.log("payload", payload);
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/generate-exercise-plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error fetching exercise plan:", error);
    }
  };

  return (
    <AppLayout>
      <div className="exercise-page">
        <h1>Create Your Personal Exercise Plan</h1>
        <div className="exercise-forms">
          <form onSubmit={handleSubmit} className="exercise-forms">
            <SelectForm
              value={daysPerWeek}
              label="How many days per week can you train?"
              options={timeOptions}
              onChange={(e) => setDaysPerWeek(e.target.value)}
            />
            <InputForm
              type="number"
              value={timePerDay}
              onChange={(e) => setTimePerDay(e.target.value)}
              placeholder="ex: 45"
              label="How many minutes can you train per day?"
            />
            <Button style="orange" type="submit">
              Generate Exercise Plan
            </Button>
          </form>
        </div>
        <div>
          <WorkoutCard
            title={pushWorkoutData.title}
            warmup={pushWorkoutData.warmup}
            compoundLifts={pushWorkoutData.compoundLifts}
            isolationLifts={pushWorkoutData.isolationLifts}
            cooldown={pushWorkoutData.cooldown}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default ExerciseGenerationPage;
