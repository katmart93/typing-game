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
          <div>
            {correctResults.map((correctWord, idx) => (
              <div key={idx} className="row">
                <p>{correctWord}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="wrongResults">
          <div>
            {wrongResults.map((wrongWord, idx) => (
              <div key={idx} className="row">
                <p>{wrongWord}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
