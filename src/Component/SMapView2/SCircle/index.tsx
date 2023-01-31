import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SCircleAbstract from './abstract';

export default class SCircle extends SCircleAbstract {
    circle;

    constructor(props) {
        super(props);

    }
    renderMap(child, { map, maps }, _toRemove) {
        if (maps) {
            // if (this.circle) {
            //     this.circle.setMap(null);
            // }
            this.circle = new maps.Circle({
                id: this.props.center.latitude + "," + this.props.center.longitude,
                map: map,
                strokeColor: this.props.strokeColor,
                strokeOpacity: this.props.strokeOpacity,
                strokeWeight: this.props.strokeWidth,
                fillColor: this.props.fillColor,
                fillOpacity: this.props.fillOpacity,
                center: {
                    lat: (!this.props.center.latitude ? 0 : this.props.center.latitude),
                    lng: (!this.props.center.longitude ? 0 : this.props.center.longitude)
                },
                radius: (!this.props.radius ? 100 : this.props.radius),
            })
            _toRemove.push(this.circle);
            this.circle.addListener('click', (evt) => {
                if (this.props.onPress) {
                    this.props.onPress(evt);
                }
            })
            //     var path = this.props.coordinates.map(c => { return { lat: c.latitude, lng: c.longitude } });
            //     var pln = new maps.Polyline({
            //         path: path,
            //         geodesic: true,
            //         fillColor: this.props.fillColor,
            //         strokeColor: this.props.strokeColor,
            //         strokeOpacity: 1.0,
            //         strokeWeight: this.props.strokeWidth,
            //     });
            //     pln.setMap(map);
            //     _toRemove.push(pln);
        }
        return null;
    }
    render() {
        return null;
    }
}