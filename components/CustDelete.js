import React, { Component } from "react";
import Axios from "axios";

export default class CustDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],
      id: "",
      name: "",
      designation: "",
      mail: "",
      salary: "",
    };
  }
  componentDidMount() {
    Axios.get(" http://localhost:4000/employee")

      .then((res) => {
        // console.log(res);
        this.setState({
          employee: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteData(userid) {
    Axios.delete(`http://localhost:4000/employee/${userid}`)
      //Axios.delete("http://localhost:4000/employee/" + userid)
      .then(() => {
        alert("Data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(userid);
  }
  //Update the Data
  editData(userid) {
    Axios.get("http://localhost:4000/employee/" + userid)
      .then((res) => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          designation: res.data.designation,
          mail: res.data.mail,
          salary: res.data.salary,
        });
        // console.log(res);
      })
      .catch();
  }
  //Updating State Value from Form

  updateData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateSubmitHandler = (e) => {
    const { id, name, designation, mail, salary } = this.state;
    e.preventDefault();
    Axios.put("http://localhost:4000/employee/" + id, {
      id,
      name,
      designation,
      mail,
      salary,
    })
      .then(() => {
        alert("Record Updated");
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
    return (
      <div className="container p-5">
        <h1>Employee Data</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Emp Id</th>
                <th scope="col">Emp Name</th>
                <th scope="col">Emp Designation</th>
                <th>Emp Mail Id</th>
                <th>Emp Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employee.map((emp) => {
                return (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.mail}</td>
                    <td>{emp.salary}</td>
                    <td>
                      <button
                        className="btn btn-primary  me-3"
                        onClick={() => {
                          this.editData(emp.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.deleteData(emp.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/*Updating From Here */}
        <div className="col-12 col-md-6 mx-auto ">
          <h1 className="text-center">Update Employee Data</h1>
          <div className=" p-5 bg-dark">
            <form className="text-white" onSubmit={this.updateSubmitHandler}>
              <div className="  mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="id"
                  id="id"
                  disabled
                  placeholder=""
                  value={this.state.id}
                />
                <label htmlFor="id">Employee Id</label>
              </div>
              <div className="  mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder=""
                  value={this.state.name}
                  onChange={this.updateData}
                />
                <label htmlFor="name">Employee Name</label>
              </div>
              <div className="  mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  id="designation"
                  placeholder=""
                  value={this.state.designation}
                  onChange={this.updateData}
                />
                <label htmlFor="designation">Employee Designation</label>
              </div>
              <div className="  mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="mail"
                  id="mail"
                  placeholder=""
                  value={this.state.mail}
                  onChange={this.updateData}
                />
                <label htmlFor="mail">Employee Mail Id</label>
              </div>
              <div className="  mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  id="salary"
                  placeholder=""
                  value={this.state.salary}
                  onChange={this.updateData}
                />
                <label htmlFor="mail">Employee Salary</label>
              </div>
              <input type="submit" value="Update Employee" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
