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
        return "Content for Sunday";
      case 1:
        return "Content for Monday";
      case 2:
        return "Content for Tuesday";
      case 3:
        return "Content for Wednesday";
      case 4:
        return "Content for Thursday";
      case 5:
        return "Content for Friday";
      case 6:
        return "Content for Saturday";
      default:
        return "Content for Today";
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
          <div className="box">Content 2</div>
          <div className="box">Content 3</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
