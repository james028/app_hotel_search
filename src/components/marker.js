import React, { Component } from 'react'
import './marker.css'

export default class Marker extends Component {
  render() {
    return (
      <div className="marker-map">
        {this.props.text}$
      </div>
    )
  }
}
