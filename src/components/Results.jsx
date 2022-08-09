import React from "react";

export default function Results({
  correctResults,
  wrongResults,
  countCorrect,
}) {
  return (
    <div className="results">
      <div className="title">
        <p>Correct answers: {countCorrect}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          <p>
            {correctResults.map((correctWord, idx) => (
              <div key={idx} className="row">
                <p>{correctWord}</p>
              </div>
            ))}
          </p>
        </div>
        <div className="wrongResults">
          <p>
            {wrongResults.map((wrongWord, idx) => (
              <div key={idx} className="row">
                <p>{wrongWord}</p>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
