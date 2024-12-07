import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

const WeightLogging: React.FC = () => {
  const [weight, setWeight] = useState<string>(""); // For weight input
  const [date, setDate] = useState<Date | null>(null); // For selected date
  const [error, setError] = useState<string | null>(null); // Error handling
  const [success, setSuccess] = useState<string | null>(null); // Success message

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleDateChange = (value: Date | Date[]) => {
    // Update state with selected date (only single date is allowed)
    if (!Array.isArray(value)) {
      setDate(value);
    }
  };

  const handleSubmit = async () => {
    if (!weight || !date) {
      setError("Weight and date must be provided.");
      return;
    }

    // Format the date as YYYY-MM-DD for the backend
    const formattedDate = date.toISOString().split("T")[0];

    const payload = {
      weight,
      date: formattedDate,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/submit-weight-history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include", // Include credentials (cookies or authorization tokens)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit weight history");
      }

      setSuccess("Weight history submitted successfully.");
      setError(null); // Clear any previous errors
      setWeight(""); // Reset weight input
      setDate(null); // Reset date selection
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting data.");
      setSuccess(null); // Clear any previous success messages
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Log Your Weight</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        maxDetail="month"
        className="calendar"
      />
      <div style={{ margin: "10px 0" }}>
        <input
          type="number"
          value={weight}
          onChange={handleWeightChange}
          placeholder="Enter your weight"
          style={{ padding: "10px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Submit
      </button>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      {success && (
        <div style={{ color: "green", marginTop: "10px" }}>{success}</div>
      )}
    </div>
  );
};

export default WeightLogging;
