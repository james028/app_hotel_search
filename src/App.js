import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker'

class App extends Component {
  constructor() {
    super();
    this.state = {
      flat: [],
      selectFlat: null
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        flat: data
      }))
  }

  handleClick = (e) => {
    this.setState({
      selectFlat: e
    });
  }


  render() {
    let center = {
      lat: 48.864716,
      lng: 2.349014
    };
    const zoom = 13;

    if(this.state.selectFlat) {
      center = {
        lat: this.state.selectFlat.lat,
        lng: this.state.selectFlat.lng
      };
    }

    return (
      <div className="flat-row">
        <div className="flat-col">
          {this.state.flat.map((e,i) => {
            return <Flat 
            flat={e} 
            key={i}
            selectedFlated={this.handleClick}
            />
          })}
        </div>
        <div className="flat-map">
        <div className="maps-google">
            <GoogleMapReact
              center={center}
              defaultZoom={zoom}
            >
              {this.state.flat.map((k,l) => {
                  return <Marker 
                    key={l}
                    lat={k.lat}
                    lng={k.lng}
                    text={k.price}
                    classSelected={k === this.state.selectFlat}
                  />
              })}
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
