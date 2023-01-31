import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SPolylineAbstract from './abstract';

export default class SPolyline extends SPolylineAbstract {


    renderMap(child, { map, maps }, _toRemove) {
        if (maps) {
            var path = this.props.coordinates.map(c => { return { lat: c.latitude, lng: c.longitude } });
            var pln = new maps.Polyline({
                path: path,
                geodesic: true,
                fillColor: this.props.fillColor,
                strokeColor: this.props.strokeColor,
                strokeOpacity: 1.0,
                strokeWeight: this.props.strokeWidth,
            });
            pln.setMap(map);
            _toRemove.push(pln);
        }
        return null;
    }
    render() {
        return null;
    }
}