import React, { Component } from 'react';
import { Marker } from 'react-native-maps';
import SMarkerDragableAbstract from './abstract';
export default class SMarkerDragable extends SMarkerDragableAbstract {
    setCoordinate({ latitude, longitude }: { latitude: any; longitude: any; }) {
        this.setState({ latitude: latitude, longitude: longitude })
    }
    render() {

        return (
            <Marker
                coordinate={{
                    latitude: this.state.latitude ?? this.props.latitude,
                    longitude: this.state.longitude ?? this.props.longitude,
                }}
                tracksViewChanges={false}
                {...this.props as any}
            >
                {this.props.children ?? this._default()}
            </Marker>
        );
    }
}
