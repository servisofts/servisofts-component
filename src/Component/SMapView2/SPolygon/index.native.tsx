import React, { Component } from 'react';
import { Polygon } from 'react-native-maps';
import SPolygonAbstract from './abstract';


export default class SPolygon extends SPolygonAbstract {
    constructor(props) {
        super(props);

    }
    render() {
        return <Polygon
            {...this.props}
        />
    }
}