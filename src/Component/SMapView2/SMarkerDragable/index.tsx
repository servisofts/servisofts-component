import React, { Component } from 'react';
// import { SUuid, SView } from "../../../index"
import ReactDOM from 'react-dom';
import SMarkerDragableAbstract from './abstract';


export default class SMarkerDragable extends SMarkerDragableAbstract {
    constructor(props) {
        super(props);
    }
    setCoordinate({ latitude, longitude }: { latitude: any; longitude: any; }) {
        // @ts-ignore
        const overlay = this.props.overlay;

        if (overlay) {
            overlay.setPosition({
                lat: latitude,
                lng: longitude,
            })
        }
    }
    marker;

    renderMap(child, { map, maps, key }, _toRemove) {
        if (!maps) return;

        const position = {
            lat: this.state.latitude ?? this.props.latitude,
            lng: this.state.longitude ?? this.props.longitude,
        };

        this.marker = new maps.Marker({
            position,
            map,
            draggable: true, // si quieres que sea arrastrable
            icon: !this.props.icon ? null : {
                ...this.props.icon,
                path: maps.SymbolPath[this.props.icon.path],
            }
        });

        // this.marker = marker;
        // overlay.addListener('click', child.props.onPress);
        if (child?.props?.onPress) {
            this.marker.addListener('click', child.props.onPress);
        }

        // Listeners para arrastre, si quieres obtener posición en onDragEnd
        this.marker.addListener('dragend', (e) => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();
            // this.setState({ latitude: lat, longitude: lng });
            if (this.props.onDragEnd) {
                this.props.onDragEnd({ latitude: lat, longitude: lng });
            }
        });



        // this.marker.setMap(map);
        _toRemove.push(this.marker);

        return null
    }
    render() {

        return <div
            // key={SUuid()}
            style={{
                // position: "fixed",
                cursor: "pointer",
                textAlign: "center",
                width: this.props.width,
                height: this.props.height,
                // background: "#00f",
                // zIndex: 9999999,
                transform: 'translate(-50%, -100%)'
            }}
            onClick={this.props.onPress}
        >
            {this.props.children ?? this._default()}
        </div>
    }
}
