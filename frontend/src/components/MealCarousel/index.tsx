import React from "react";
import Slider from "react-slick";
import MealCard from "../MealCard";
import "./index.css";

interface Meal {
  title: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  ingredients: string[];
  directions: string;
}

interface CarouselProps {
  mealData: Meal[][];
}

const MealCarousel: React.FC<CarouselProps> = ({ mealData }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3, // Show 1 card at a time for most screen sizes
    slidesToScroll: 1,
    centerPadding: "40px", // Default padding for larger screens
  };
  const getIncrementedDate = (startDate: Date, daysToAdd: number) => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  };

  const today = new Date();

  return (
    <div className="slider">
      <Slider {...settings}>
        {mealData.map((meals, index) => (
          <div key={index}>
            <MealCard meals={meals} date={getIncrementedDate(today, index)} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MealCarousel;
