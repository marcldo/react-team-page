import React from "react";
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
        {/* <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>desc:</strong> {props.desc}
          </li>
        </ul> */}
      </div>
      {/* <span className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default Card;

