import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Marker } from 'react-native-maps';
export default class SMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Marker
                coordinate={{
                    latitude: this.props.lat,
                    longitude: this.props.lng,
                }}
                tracksViewChanges={false}
                {...this.props}
            >
                 {this.props.children}
                {/* <Image
                    source={require('../../../img/marker.png')}
                    style={{ width: 25, height: 32, resizeMode: "cover" }}

                /> */}
            </Marker>
        );
    }
}
