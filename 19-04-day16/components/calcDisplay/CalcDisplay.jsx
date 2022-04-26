import React from "react";

import "./CalcDisplay.css";

export default function CalcDisplay(props) {
  return (
    <div className="CalcDisplay">
      <div className="CalcDisplay-history"></div>
      <div className="CalcDisplay-input">{props.display}</div>
    </div>
  );
}
