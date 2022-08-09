//components
import Button from "./Button";

export default function Typeracer({
  newWord,
  inputValue,
  setInputValue,
  disabled,
  time,
  animation,
  handleInput,
}) {
  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div
        className="time"
        style={{ animation: animation !== null ? animation : "" }}
      >
        <p>{time}</p>
      </div>
      <div className="wordValues">
        <input
          type="text"
          disabled={disabled}
          onKeyDown={(e) => handleInput(e)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start typing..."}
        />
        <Button />
      </div>
    </div>
  );
}
