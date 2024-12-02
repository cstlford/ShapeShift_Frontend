import "./index.css";
import dumbbell from "../../assets/dumbbell.png";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
};

type WorkoutCardProps = {
  title: string;
  warmup?: string[];
  compoundLifts?: Exercise[];
  isolationLifts?: Exercise[];
  cooldown?: string[];
};

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  warmup = [],
  compoundLifts = [],
  isolationLifts = [],
  cooldown = [],
}) => {
  return (
    <div className="workout-card">
      <div className="workout-card-header">
        <h3>{title}</h3>
        <img id="dumbbell" src={dumbbell} alt="" />
      </div>
      <div className="workout-card-body">
        {warmup.length > 0 && (
          <div className="section">
            <h3>Warmup:</h3>
            <ul>
              {warmup.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
        {compoundLifts.length > 0 && (
          <div className="section">
            <h3>Compound Lifts:</h3>
            <ul>
              {compoundLifts.map((lift, index) => (
                <li key={index}>
                  {lift.name}: {lift.sets} x {lift.reps}
                </li>
              ))}
            </ul>
          </div>
        )}
        {isolationLifts.length > 0 && (
          <div className="section">
            <h3>Isolation Lifts:</h3>
            <ul>
              {isolationLifts.map((lift, index) => (
                <li key={index}>
                  {lift.name}: {lift.sets} x {lift.reps}
                </li>
              ))}
            </ul>
          </div>
        )}
        {cooldown.length > 0 && (
          <div className="section">
            <h3>Cooldown:</h3>
            <ul>
              {cooldown.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;
