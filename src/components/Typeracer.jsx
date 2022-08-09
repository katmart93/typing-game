//components
import Button from "./Button";

export default function Typeracer() {
  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>New Word</p>
      </div>
      <div className="time">
        <p>Time</p>
      </div>
      <div className="wordValues">
        <input type="text" />
        <Button />
      </div>
    </div>
  );
}
