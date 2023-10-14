import React, { Component } from "react";

export default class UpdateLifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Chandra",
    };
    console.log("Update from constructor ");
  }
  static getDerivedStateFromProps() {
    console.log("Update from getDerivedStateFromProps ");
    return null;
  }
  shouldComponentUpdate() {
    console.log("Update from shouldComponentUpdate by Forcefully");
    return true;
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    document.getElementById("oldData").innerHTML = preState.name;
    console.log("Old Name is " + preState.name);
    return null;
    
  }
  
  componentDidUpdate() {
    document.getElementById("newData").innerHTML = this.state.name;
    console.log("New Name is " + this.state.name);
  }
  changeData = () => {
    this.setState({
      name: "Bhargav",
    });
  };
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.changeData}>Click Here to Update</button>
        {console.log("Update from Render ")}
        <p>
          Old Data is : <span id="oldData"></span>
        </p>
        <p>
          New Data is : <span id="newData"></span>
        </p>
      </div>
    );
  }
}
