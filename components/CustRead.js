import React, { Component } from "react";
import Axios from "axios";

export default class CustRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:4000/employee")
      .then((res) => {
        this.setState({
          employee: res.data,
        });
        //  console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="col-12 col-md-6 mx-auto">
        <h1>
          Employee Data from{" "}
          <span className="text-danger"> Itech Solutions</span>
        </h1>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Designation</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employee.map((emp) => {
                return (
                  <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.designation}</td>
                    <td><button>Update</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
