import React, { Component } from "react";

export default class ConditionalRend extends Component {
  constructor() {
    super();
    this.state = {
      trainer: "Chandra",
    };
  }
  render() {
    let Msg;
    const myStyle = {
      width:50
    }
    switch (this.state.trainer) {
      case "Bhargav":
        Msg = <h1 style={myStyle}>Welcome to UI Development Class</h1>;
        break;
      case "Anand":
        Msg = <h1>Welcome to UI / UX Designing Class</h1>;
        break;
      case "Sudheer":
        Msg = <h1>Welcome to Python Class</h1>;
        break;
      default:
        Msg = <h1>Welcome to Elearn Infotech</h1>;
    }
    return Msg;
  }
}
