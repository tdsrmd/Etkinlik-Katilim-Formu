import React from "react";
import seedling from "../seedling.svg";

export default function Alert(props) {
  return (
    <div className={`alert alert-${props.status} text-center`} role="alert">
      {props.status === "success" ? <img src={seedling} alt="" /> : null}
      <p className="text-center mb-0">
        {props.content}
        <br />
        <b>{props.info}</b>
      </p>
    </div>
  );
}
