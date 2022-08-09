import React from "react";

export default function Results() {
  return (
    <div className="results">
      <div className="title">
        <p>Correct answers: 7</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          <p>Correct Results</p>
        </div>
        <div className="wrongResults">
          <p>Wrong</p>
        </div>
      </div>
    </div>
  );
}
