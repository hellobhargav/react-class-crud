import React, { Component } from "react";
import Axios from "axios";

export default class CustPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      designation: "",
      mail: "",
      salary: "",
    };
  }
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    const { id, name, designation, mail, salary } = this.state; //destractre
    e.preventDefault();
    Axios.post("http://localhost:4000/employee", {
      id,
      name,
      designation,
      mail,
      salary,
    })
      .then(() => {
        alert("Employee Added Successfully");
        this.setState({
          id: "",
          name: "",
          designation: "",
          mail: "",
          salary: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { id, name, designation, mail, salary } = this.state; //destractre
    return (
      <div className="col-12 col-md-6 mx-auto">
        <h1 className="text-center">New Employee Data</h1>
        <div className=" p-5 bg-dark">
          <form onSubmit={this.submitHandler}>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                name="id"
                id="id"
                placeholder=""
                value={id}
                onChange={this.changeData}
              />
              <label for="id">Employee Id</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder=""
                value={name}
                onChange={this.changeData}
              />
              <label for="name">Employee Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                name="designation"
                id="designation"
                placeholder=""
                value={designation}
                onChange={this.changeData}
              />
              <label for="designation">Employee Designation</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                name="mail"
                id="mail"
                placeholder=""
                value={mail}
                onChange={this.changeData}
              />
              <label for="mail">Employee Mail Id</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                name="salary"
                id="salary"
                placeholder=""
                value={salary}
                onChange={this.changeData}
              />
              <label for="mail">Employee Salary</label>
            </div>
            <input type="submit" value="Add Employee" />
          </form>
        </div>
      </div>
    );
  }
}
