import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Elearn",
    };
    console.log("This is a Message from Constructor");
  }
  changeData = () => {
    console.log("This is a Message from ChangeData");
  };

  static getDerivedStateFromProps() {
    console.log("This is a Message from getDerivedStateFromProps");

    return null;
  }
  componentDidMount(){
    console.log('this is a message from ComponentDidMount');
  }
  render() {
    console.log("This is a Message from Render Method");
    return (
      <div>
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  }
}
