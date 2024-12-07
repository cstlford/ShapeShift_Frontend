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
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerPadding: "40px",
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
