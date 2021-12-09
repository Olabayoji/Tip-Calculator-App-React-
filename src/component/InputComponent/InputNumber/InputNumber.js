import React from "react";
import classes from "./InputNumber.module.css";
export default function InputNumber(props) {
  let dollar = require("../../../assets/icon-dollar.svg").default;
  let person = require("../../../assets/icon-person.svg").default;
  let src = "";
  if (props.icon === "dollarSign") {
    src = dollar;
  } else if (props.icon === "person") {
    src = person;
  }

  return (
    <div className={classes.InputNumber}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={props.invalid ? classes.error : null}
        onChange={props.changeHandler}
        type="number"
        placeholder={props.placeholder}
        id={props.id}
        min={props.min}
        value={props.value}
      />
      <img src={src} alt="" />
    </div>
  );
}
