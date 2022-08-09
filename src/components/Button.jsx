import React from "react";

export default function Button({ handleStart, disabled }) {
  return (
    <button onClick={handleStart}>{disabled ? "Start" : "Restart"}</button>
  );
}
