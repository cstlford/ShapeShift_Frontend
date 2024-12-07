import { useState, useEffect } from "react";
import Player from "lottie-react";
import "./index.css";

type LoadingProps = {
  messages: string[];
  interval?: number;
  path: any;
};

const PlanLoader: React.FC<LoadingProps> = ({
  messages,
  interval = 4000,
  path,
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % messages.length
        );
        setIsFadingOut(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [messages.length, interval]);

  return (
    <>
      <div style={{ width: "auto", height: "100px", margin: "0" }}>
        <Player
          autoplay
          loop
          animationData={path}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="loader-container">
        <h3 className={isFadingOut ? "fade-out" : "fade-in"}>
          {messages[currentMessageIndex]}
        </h3>
      </div>
    </>
  );
};

export default PlanLoader;
