import React, { Component } from 'react';
import { Polyline } from 'react-native-maps';

type PropsType = {
    coordinates: Array<{ latitude: number, longitude: number }>,
    strokeColor?: string,
    strokeWidth?: number,
    fillColor?: string,
}
export default class SPolyline extends Component<PropsType> {
    constructor(props) {
        super(props);

    }
    render() {
        return <Polyline
            {...this.props}
        />
    }
}