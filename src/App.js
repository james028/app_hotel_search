import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat'

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
    return (
      <div className="flat-row">
        <div className="flat-col">
        {flat.map((e,i) => {
          return <Flat flat={e}/>
        })}
        </div>
        <div className="flat-map">s</div>
      </div>
    );
  }
}

export default App;
