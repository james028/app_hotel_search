import React, { Component } from 'react'

export default class Flat extends Component {
  render() {
    return (
      <div>
        <div className="flat-background">x</div>
        <div className="flat-title">
            <div className="flat-price">{this.props.flat.price}</div>
            <div className="flat-name">{this.props.flat.name}</div>
        </div>
      </div>
    )
  }
}
