import Axios from "axios";
import React, { Component } from "react";

export default class CustUpdate extends Component {
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
  componentDidMount() {
    Axios.get("http://localhost:4000/employee/2")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          id: res.data.id,
          name: res.data.name,
          designation: res.data.designation,
          mail: res.data.mail,
          salary: res.data.salary,
        });
        /*
       { id, name, designation, mail, salary } = res.data
       {
          id: res.data.id,
          name: res.data.name,
          designation: res.data.designation,
          mail: res.data.mail,
          salary: res.data.salary,
        } */
      })
      .catch((err) => {
        console.log(err);
      });
  }
  updateData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { id, name, designation, mail, salary } = this.state;
    return (
      <div className="col-12 col-md-6 mx-auto ">
        <h1 className="text-center">Update Employee Data</h1>
        <div className=" p-5 bg-dark">
          <form className="text-white">
            <div class="  mb-3">
              <input
                type="number"
                class="form-control"
                name="id"
                id="id"
                disabled
                placeholder=""
                value={id}
              />
              <label for="id">Employee Id</label>
            </div>
            <div class="  mb-3">
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder=""
                value={name}
                onChange={this.updateData}
              />
              <label for="name">Employee Name</label>
            </div>
            <div class="  mb-3">
              <input
                type="text"
                class="form-control"
                name="designation"
                id="designation"
                placeholder=""
                value={designation}
                onChange={this.updateData}
              />
              <label for="designation">Employee Designation</label>
            </div>
            <div class="  mb-3">
              <input
                type="email"
                class="form-control"
                name="mail"
                id="mail"
                placeholder=""
                value={mail}
                onChange={this.updateData}
              />
              <label for="mail">Employee Mail Id</label>
            </div>
            <div class="  mb-3">
              <input
                type="number"
                class="form-control"
                name="salary"
                id="salary"
                placeholder=""
                value={salary}
                onChange={this.updateData}
              />
              <label for="mail">Employee Salary</label>
            </div>
            <input type="submit" value="Update Employee" />
          </form>
        </div>
      </div>
    );
  }
}
