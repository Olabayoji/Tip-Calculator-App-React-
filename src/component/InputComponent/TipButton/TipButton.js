import React, { Fragment } from "react";
import classes from "./TipButton.module.css";
export default function TipButton(props) {
  return (
    <Fragment>
      <input
        className={classes.Input}
        type="radio"
        name="tip"
        value={props.value}
        id={props.label}
        onChange={props.clicked}
        checked={props.value === props.tip}
      />
      <label className={classes.Label} htmlFor={props.label}>
        {props.label}
      </label>
    </Fragment>
  );
}
