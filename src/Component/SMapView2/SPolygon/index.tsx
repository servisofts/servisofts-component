import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import SPolygonAbstract from './abstract';

export default class SPolygon extends SPolygonAbstract {


    renderMap(child, { map, maps }, _toRemove) {
        if (maps) {
            var path = this.props.coordinates.map(c => { return { lat: c.latitude, lng: c.longitude } });
            var pln = new maps.Polygon({
                path: path,
                geodesic: true,
                fillColor: this.props.fillColor,
                fillOpacity: this.props.fillOpacity,
                strokeColor: this.props.strokeColor,
                strokeOpacity: 1.0,
                strokeWeight: this.props.strokeWidth,
            });
            pln.setMap(map);
            _toRemove.push(pln);

            if (this.props.onPress) {

                pln.addListener('click', (evt) => {
                    this.props.onPress(evt);
                })
            }
        }
        return null;
    }
    render() {
        return null;
    }
}