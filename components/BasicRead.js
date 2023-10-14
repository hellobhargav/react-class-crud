import React, { Component } from "react";
import Axios from "axios";

export default class BasicRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
    };
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        this.setState({
          comment: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Data Fetching</h1>

        <div class="table-responsive">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Email ID</th>
                <th scope="col">Content</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.comment.map((item)=>{
                return(
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                  </tr>
                )
              })  
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
