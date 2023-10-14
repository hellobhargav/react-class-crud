import React, { Component } from "react";

export default class Validations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
    };
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changeMail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  changeMobile = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };

  //Validating Form

  submitHandler = (event) => {
    event.preventDefault();
    let username = this.state.name;
    if (username === "") {
      document.getElementById("nameNote").innerHTML = "Please Enter Name";
    } else {
      console.log("Welcome " + username);
    }
  };
  render() {
    // let [name, email, mobile] = this.state;
    return (
      <div className="container" id="contact">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-5">
            <h1 className="text-center">Reach Us</h1>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.changeName}
                placeholder="Enter Your Name"
              />
              <p id="nameNote"></p>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.changeMail}
                placeholder="Email ID"
              />

              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={this.state.mobile}
                onChange={this.changeMobile}
                placeholder="Mobile Number"
              />

              <select>
                <option value="" hidden>
                  Select your Course
                </option>
                <option value="uiux">UI UX Designing </option>
                <option value="ui">UI Development </option>
                <option value="mern">MERN Full Stack </option>
                <option value="react">React JS</option>
              </select>

              <textarea name="" id="" rows="3"></textarea>

              <input type="submit" className="btn btn-danger" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
