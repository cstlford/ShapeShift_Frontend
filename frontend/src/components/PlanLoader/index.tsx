import React, { useState, useEffect } from "react";
import "./index.css";

type Props = {
  children: React.ReactNode[];
  title: string;
};

const PlanLoader: React.FC<Props> = ({ children, title }) => {
  const [visibleRows, setVisibleRows] = useState<number>(0);
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    // Increment visible rows every 2 seconds
    const rowTimer = setInterval(() => {
      setVisibleRows((prev) => {
        if (prev < children.length) {
          return prev + 1;
        } else {
          clearInterval(rowTimer);
          return prev;
        }
      });
    }, 2000);

    // Animate the dots
    const dotsTimer = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => {
      clearInterval(rowTimer);
      clearInterval(dotsTimer);
    };
  }, [children.length]);

  return (
    <div className="plan-loader">
      <h2>
        {title}
        {dots}
      </h2>
      <div className="plan-content">
        {children.slice(0, visibleRows).map((child, index) => (
          <div className="plan-item" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanLoader;
