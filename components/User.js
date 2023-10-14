import React, { Component } from 'react'

export default class User extends Component {
    componentWillUnmount(){
        alert('Are You Sure')
    }
  render() {
    return (
      <div>
        <h1>Welcome User</h1>
      </div>
    )
  }
}
