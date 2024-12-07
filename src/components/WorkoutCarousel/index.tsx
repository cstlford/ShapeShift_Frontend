import React from "react";
import Slider from "react-slick";
import "./index.css";
import WorkoutCard from "../WorkoutCard";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  rest: number;
};

type WorkoutData = {
  title: string;
  warmup?: string[];
  compoundLifts?: Exercise[];
  isolationLifts?: Exercise[];
  cooldown?: string[];
};

type WorkoutCarouselProps = {
  workouts: WorkoutData[];
};

const WorkoutCarousel: React.FC<WorkoutCarouselProps> = ({ workouts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60 px",
  };

  return (
    <div className="workout-slider">
      <Slider {...settings}>
        {workouts.map((workout, index) => (
          <div key={index}>
            <WorkoutCard
              title={workout.title}
              warmup={workout.warmup}
              compoundLifts={workout.compoundLifts}
              isolationLifts={workout.isolationLifts}
              cooldown={workout.cooldown}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkoutCarousel;
