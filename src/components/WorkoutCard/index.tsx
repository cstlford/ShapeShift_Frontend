import "./index.css";
import dumbbell from "../../assets/dumbbell.png";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  rest: number;
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
      <div className="workout-header">
        <h3 id="workout-title">{title}</h3>
        <img src={dumbbell} alt="dumbbell" id="dumbbell" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          {warmup.length > 0 && (
            <>
              <tr>
                <td colSpan={4} className="subheading">
                  Warmup
                </td>
              </tr>
              {warmup.map((activity, index) => (
                <tr key={`warmup-${index}`}>
                  <td>{activity}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </>
          )}
          {compoundLifts.length > 0 && (
            <>
              <tr>
                <td colSpan={4} className="subheading">
                  Compound Lifts
                </td>
              </tr>
              {compoundLifts.map((exercise, index) => (
                <tr key={`compound-${index}`}>
                  <td>{exercise.name}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.rest} sec</td>
                </tr>
              ))}
            </>
          )}
          {isolationLifts.length > 0 && (
            <>
              <tr>
                <td colSpan={4} className="subheading">
                  Isolation Lifts
                </td>
              </tr>
              {isolationLifts.map((exercise, index) => (
                <tr key={`isolation-${index}`}>
                  <td>{exercise.name}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.rest} sec</td>
                </tr>
              ))}
            </>
          )}
          {cooldown.length > 0 && (
            <>
              <tr>
                <td colSpan={4} className="subheading">
                  Cooldown
                </td>
              </tr>
              {cooldown.map((activity, index) => (
                <tr key={`cooldown-${index}`}>
                  <td>{activity}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutCard;
