import React, { Component } from 'react';
import { Polyline } from 'react-native-maps';
import SPolylineAbstract from './abstract';


export default class SPolyline extends SPolylineAbstract {
    constructor(props) {
        super(props);

    }
    render() {
        return <Polyline
            {...this.props}
        />
    }
}