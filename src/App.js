import React, { Component } from 'react';
import SeasonInfo from './SeasonInfo';

class App extends Component {
  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        this.setState({
          latitude: position.coords.latitude,
        });
      },

      (err) => {
        console.log(err.message);
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div>Your latitude is: {this.state.latitude}</div>
        <SeasonInfo />
      </div>
    );
  }
}

export default App;
