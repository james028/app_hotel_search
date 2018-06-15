import React, { Component } from 'react'
import './flat.css'

export default class Flat extends Component {
  render() {
    const priceAndName = `${this.props.flat.price}${this.props.flat.priceCurrency} - ${this.props.flat.name}`;

    const stlBack = {
        width: '100%',
        height: '85%',
        backgroundImage: `url(${this.props.flat.imageUrl})`,
        backgroundSize: 'cover'
    }

    return (
      <div className="flat-one">
        <div style={stlBack}></div>
        <div className="flat-title">
            {priceAndName}
        </div>
      </div>
    )
  }
}