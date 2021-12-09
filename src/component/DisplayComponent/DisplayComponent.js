import React from "react";
import classes from "./DisplayComponent.module.css";

export default function DisplayComponent(props) {
  const tipPerPerson = props.tipPerson.toFixed(2);
  const totalPerPerson = props.totalPerson.toFixed(2);

  return (
    <div className={classes.Display}>
      <div className={classes.DisplayComponent}>
        <label htmlFor="each">
          Tip Amount <span> / person</span>
        </label>
        <input
          type="text"
          value={`$` + tipPerPerson}
          id="each"
          className={classes.Amount}
          disabled
        />
        <label htmlFor="each">
          Total <span> / person</span>
        </label>
        <input
          type="text"
          value={`$` + totalPerPerson}
          id="each"
          className={classes.Amount}
          disabled
        />
      </div>

      <input
        onClick={props.reset}
        className={classes.Reset}
        type="reset"
        disabled={props.disabled}
      />
    </div>
  );
}
