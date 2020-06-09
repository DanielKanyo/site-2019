import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import { googleApiKey } from '../constants/constants';

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
                    lat: 46.262503,
                    lng: 20.164387
                }}
                zoom={16}>

                <Marker title={'Tabán utca 38 | Szeged'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: googleApiKey
})(MapContainer)