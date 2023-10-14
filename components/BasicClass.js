import React, { Component } from 'react'

export default class BasicClass extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name} address : {this.props.address}</h1>
      </div>
    )
  }
}
