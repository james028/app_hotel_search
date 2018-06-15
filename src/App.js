import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker'

class App extends Component {
  constructor() {
    super();
    this.state = {
      flat: []
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

  render() {
    const { flat } = this.state;
    const center = {
      lat: 48.864716,
      lng: 2.349014
    };
    const zoom = 11;

    return (
      <div className="flat-row">
        <div className="flat-col">
          {flat.map((e,i) => {
            return <Flat flat={e} key={i}/>
          })}
        </div>
        <div className="flat-map">
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              defaultCenter={center}
              defaultZoom={zoom}
            >
              <Marker
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
