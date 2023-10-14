import React, { Component } from 'react'

export default class BasicState extends Component {
  constructor(props) {
    super(props)
  
    //State Creation
   this.state = {
    name:'Rajesh',
    address:'Hyderabad'
   }

  }
  changeData = ()=>{
    this.setState({
      name:'Suresh',
      address:'Chennai'
    })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name} and Address : {this.state.address}</h1>
        <button onClick={this.changeData}>Update</button>
      </div>
    )
  }
}
