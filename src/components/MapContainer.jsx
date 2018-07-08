import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%',
  borderRadius: '4px'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 46.067726,
          lng: 20.049230
        }}
        zoom={16}>

        <Marker title={'Zilahy Lajos 1 | Magyarkanizsa'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBsIQw2I84i4NG_rGBasgbleHG9I3m1ngc"
})(MapContainer)