import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
type PropsType = {
    coordinates: Array<{ latitude: number, longitude: number }>,
    strokeColor?: string,
    strokeWidth?: number,
    fillColor?: string,
}

export default class SPolyline extends Component {

    render() {
        return <GoogleMapReact
            {...this.props}
        />
    }
}