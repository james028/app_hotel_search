import React, { Component } from 'react'
import './flat.css'

export default class Flat extends Component {

  searchPlaceOnMap = () => {
    this.props.selectedFlated(this.props.flat);
  }

  render() {
    const priceAndName = `${this.props.flat.price}${this.props.flat.priceCurrency} - ${this.props.flat.name}`;

    const stlBack = {
        width: '100%',
        height: '80%',
        backgroundImage: `url(${this.props.flat.imageUrl})`,
        backgroundSize: 'cover'
    }

    return (
      <div className="flat-one" onClick={this.searchPlaceOnMap}>
        <div className="flat-background" style={stlBack}></div>
        <div className="flat-title">
            {priceAndName}
        </div>
      </div>
    )
  }
}