import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import App from '../App';
import './Maps.css';

export class Maps extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div className="map-div">
        <h2>Event Locations</h2>
        <Map
          google={this.props.google}
          zoom={7}
          initialCenter={{
            /* lat: 53.206451,
        lng: 6.54478, */
            lat: 52.0809856,
            lng: 5.127684,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Bachata, 20/11/21'}
            position={{ lat: 52.370216, lng: 4.895168 }}
            icon={
              'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            }
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Dance Party, 25/12/21'}
            position={{ lat: 51.9244424, lng: 4.47775 }}
            icon={<i class="fas fa-map-pin"></i>}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Show Your Moves, 23/10/21'}
            position={{ lat: 50.8512438, lng: 5.6909768 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            position={{ lat: 53.206451, lng: 6.54478 }}
            name={'Kids Outing, 12/12/21'}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Zumba, 23/01/22'}
            position={{ lat: 51.9994572, lng: 4.3627245 }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

Maps = GoogleApiWrapper({
  apiKey: '',
})(Maps);
