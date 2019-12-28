import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button type="button">
      {props.btnText}
    </button>
  );
}

export default Button;