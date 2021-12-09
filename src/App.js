import React, { Component } from "react";
import "./index.css";
import logo from "./assets/logo.svg";
import classes from "./App.module.css";
import InputComponent from "./component/InputComponent/InputComponent";
import DisplayComponent from "./component/DisplayComponent/DisplayComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: "",
      people: "",
      tip: "",
      customTip: "",
      tipPerPerson: 0,
      totalPerPerson: 0,
      disable: true,
    };
  }

  billHandler = (event) => {
    this.setState({ bill: event.target.value, disable: false }, this.myDisplay);
  };
  peopleHandler = (event) => {
    this.setState(
      { people: event.target.value, disable: false },
      this.myDisplay
    );
  };
  tipHandler = (event) => {
    const newTip = parseInt(event.target.value);
    this.setState({ tip: newTip, disable: false }, this.myDisplay);
  };
  customHandler = (event) => {
    const newTip = event.target.value;
    this.setState(
      { tip: newTip, customTip: newTip, disable: false },
      this.myDisplay
    );
  };

  tipPerPersonHandler = () => {
    let bill = this.state.bill;
    let person = this.state.people;
    let tip = this.state.tip;
    let tipPerPerson = (bill / person) * (tip / 100);
    this.setState({ tipPerPerson: tipPerPerson });
  };
  totalPerPersonHandler = () => {
    let bill = this.state.bill;
    let person = this.state.people;
    let tip = this.state.tip;
    let totalPerPerson = (tip / 100) * (bill / person) + bill / person;
    this.setState({ totalPerPerson: totalPerPerson });
  };
  resetHandler = () => {
    this.setState({
      bill: "",
      people: "",
      tip: "",
      customTip: "",
      disable: true,
      tipPerPerson: 0,
      totalPerPerson: 0,
    });
  };
  myDisplay = () => {
    if (
      this.state.people !== "" &&
      this.state.people > 0 &&
      this.state.tip !== isNaN
    ) {
      this.tipPerPersonHandler();
      this.totalPerPersonHandler();
    }
  };
  render() {
    return (
      <div className={classes.App}>
        <img className={classes.Logo} src={logo} alt="logo" />
        <div className={classes.Content}>
          <InputComponent
            tip={this.state.tip}
            bill={this.state.bill}
            people={this.state.people}
            billHandler={(event) => this.billHandler(event)}
            peopleHandler={(event) => this.peopleHandler(event)}
            tipHandler={this.tipPerPersonHandler}
            totalHandler={this.totalPerPersonHandler}
            clicked={this.tipHandler}
            customHandler={(event) => this.customHandler(event)}
            customTip={this.state.customTip}
          />
          <DisplayComponent
            tipPerson={this.state.tipPerPerson}
            totalPerson={this.state.totalPerPerson}
            disabled={this.state.disable}
            reset={this.resetHandler}
          />
        </div>
      </div>
    );
  }
}
