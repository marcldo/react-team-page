import React from "react";
import Button from "../Button/index"
import "./style.css";

function Card(props) {
  return (
    <div className="card">

      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <h3>
          {props.name}
        </h3>
        <h6>
          {props.occupation}
        </h6>
        <hr></hr>
        <p>
          {props.desc}
        </p>
        <Button btnText={"+ Read More"}>Read More</Button>
      </div>

    </div>
  );
}

export default Card;

