import { useState } from "react";
import AppLayout from "../../../layouts/AppLayout";
import "./index.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DashboardPage = () => {
  const today = new Date();
  const currentDayIndex = today.getDay();
  const [selectedDay, setSelectedDay] = useState(currentDayIndex);

  const handleDayClick = (index: number) => {
    setSelectedDay(index);
  };

  const getContentForDay = (dayIndex: number) => {
    switch (dayIndex) {
      case 0:
        return "Sunday - Coming Soon!";
      case 1:
        return "Monday - Coming Soon!";
      case 2:
        return "Tuesday - Coming Soon!";
      case 3:
        return "Wednesday - Coming Soon!";
      case 4:
        return "Thursday - Coming Soon!";
      case 5:
        return "Friday - Coming Soon!";
      case 6:
        return "Saturday - Coming Soon!";
      default:
        return "Today - Coming Soon!";
    }
  };

  const getDateForDay = (index: number) => {
    const date = new Date(today);
    date.setDate(today.getDate() - currentDayIndex + index);
    return date.getDate();
  };

  return (
    <AppLayout>
      <div className="dash-container">
        <div className="week-bar">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`day ${selectedDay === index ? "active" : ""}`}
              onClick={() => handleDayClick(index)}
            >
              <div>{day}</div>
              <div className="day-date">{getDateForDay(index)}</div>
            </div>
          ))}
        </div>
        <div className="box row1">{getContentForDay(selectedDay)}</div>
        <div className="row2">
          <div className="box">Coming Soon!</div>
          <div className="box">Coming Soon!</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
