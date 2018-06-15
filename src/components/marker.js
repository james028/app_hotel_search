import React, { Component } from 'react'
import './marker.css'

export default class Marker extends Component {
  render() {
    let classes = "marker-map";
    if(this.props.classSelected) {
      classes += " marker-place";
    }

    return (
      <div className={classes}>
        {this.props.text}$
      </div>
    )
  }
}
