import React from "react";

//style
import "./CalcButton.css";

export default function CalcButton(props) {
  return (
    <div className="CalcButton" onClick={() => props.handleClick(props.value)}>
      {props.value}
    </div>
  );
}
