import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import SelectForm from "../../../components/SelectForm";
import WorkoutCarousel from "../../../components/WorkoutCarousel";
import AppLayout from "../../../layouts/AppLayout";
import Loading from "../../../components/LoadingPage";
import "./index.css";
import { useState } from "react";

const ExerciseGenerationPage = () => {
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [timePerWorkout, setTimePerWorkout] = useState("");
  const [equipment, setEquipment] = useState("");
  const [customEquipment, setCustomEquipment] = useState("");
  const [workout, setWorkout] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const timeOptions = [
    { name: "One", id: 1 },
    { name: "Two", id: 2 },
    { name: "Three", id: 3 },
    { name: "Four", id: 4 },
    { name: "Five", id: 5 },
    { name: "Six", id: 6 },
    { name: "Seven", id: 7 },
  ];

  const equipmentOptions = [
    { name: "Standard Gym", id: 1 },
    { name: "No Equipment", id: 2 },
    { name: "Other", id: 3 },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      daysPerWeek: parseInt(daysPerWeek, 10),
      timePerWorkout: parseInt(timePerWorkout, 10),
      equipment: parseInt(equipment),
      customEquipment: customEquipment,
    };

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/generate-exercise-plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const workoutData = await response.json();
      setWorkout(workoutData);
    } catch (error) {
      console.error("Error fetching exercise plan:", error);
    } finally {
      setLoading(false);
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
              value={timePerWorkout}
              onChange={(e) => setTimePerWorkout(e.target.value)}
              placeholder="ex: 45"
              label="How many minutes can you train per day?"
            />
            <SelectForm
              value={equipment}
              label="What equipment do you have access to?"
              options={equipmentOptions}
              onChange={(e) => setEquipment(e.target.value)}
            />
            {equipment === "3" && (
              <InputForm
                type="text"
                value={customEquipment}
                onChange={(e) => setCustomEquipment(e.target.value)}
                placeholder="ex: resistance bands, pull-up bar"
                label="Please specify your available equipment"
              />
            )}
            <Button style="orange" type="submit">
              Generate Exercise Plan
            </Button>
          </form>
        </div>
        {isLoading && <Loading />}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {workout.length > 0 && (
          <div className="workout-carousel">
            <h2>Your Workout Routine</h2>
            <WorkoutCarousel workouts={workout} />
            <Button style="orange">Save Plan</Button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default ExerciseGenerationPage;
