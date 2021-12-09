import React from "react";
import InputNumber from "./InputNumber/InputNumber";
import classes from "./InputComponent.module.css";
import TipButton from "./TipButton/TipButton";

export default function InputComponent(props) {
  let errorMessage = null;
  if (props.people < 1 && props.people !== "") {
    errorMessage = <p className={classes.Error}>Can't be zero </p>;
  }

  return (
    <div className={classes.InputComponent}>
      <InputNumber
        label="Bill"
        id="bill"
        icon="dollarSign"
        placeholder={0}
        min={0}
        value={props.bill}
        changeHandler={props.billHandler}
      />
      <div className={classes.TipContainer}>
        <TipButton
          tip={props.tip}
          clicked={props.clicked}
          label="5%"
          value={5}
        />
        <TipButton
          tip={props.tip}
          clicked={props.clicked}
          label="10%"
          value={10}
        />
        <TipButton
          tip={props.tip}
          clicked={props.clicked}
          label="15%"
          value={15}
        />
        <TipButton
          tip={props.tip}
          clicked={props.clicked}
          label="25%"
          value={25}
        />
        <TipButton
          tip={props.tip}
          clicked={props.clicked}
          label="50%"
          value={50}
        />
        <InputNumber
          placeholder="Custom"
          min={1}
          changeHandler={props.customHandler}
          value={props.customTip}
        />
      </div>
      {errorMessage}
      <InputNumber
        label="Number of People"
        id="people"
        icon="person"
        placeholder={0}
        min={0}
        value={props.people}
        changeHandler={props.peopleHandler}
        invalid={errorMessage}
      />
    </div>
  );
}
