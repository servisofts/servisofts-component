import React, { Component } from 'react';
import { Marker } from 'react-native-maps';
import SMarkerAbstract from './abstract';
export default class SMarker extends SMarkerAbstract {
    render() {
        return (
            <Marker
                coordinate={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                }}
                tracksViewChanges={false}
                {...this.props}
            >
                {this.props.children??this._default()}
            </Marker>
        );
    }
}
