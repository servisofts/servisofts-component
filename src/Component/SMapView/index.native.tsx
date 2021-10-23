import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapStyle from './mapStyle'
import SIcon from '../SIcon';

export default class SMapView extends Component {
    mapa;
    state;
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: -17.7799998333333332,
                longitude: -63.180598333333336,
                latitudeDelta: 0.035,
                longitudeDelta: 0.035,
            },
            markersData: false,

        };
        this.mapa = false;
    }
    getposition = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                var region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002
                }
                // this.props.state.myUbicacionReducer.position = region;
                this.mapa.animateToRegion(region, 1000)
                this.setState({ position: region })

            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: false, timeout: 1500, maximumAge: 10000 }
        );
        return <View />
    }

    componentDidMount() {
        this.getposition()
    }

    animateToRegion(region, time) {
        this.mapa.animateToRegion(region, !time ? 1000 : time);
    }
    fitToCoordinates(arr, props) {
        this.mapa.fitToCoordinates(arr, props);
    }
    render() {
        return (
            <>
                <MapView
                    ref={(ref) => this.mapa = ref}
                    style={{
                        width: "100%",
                        height: "100%",
                        flex: 1,
                    }}
                    initialRegion={this.state.region}
                    // customMapStyle={MapStyle}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    provider={PROVIDER_GOOGLE}
                    {...this.props}
                >
                    {this.props.children}
                </MapView>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        bottom: 100,
                        right: 8,
                        padding: 4,
                        backgroundColor: "#ccc",
                        borderRadius: 10,
                    }}
                    onPress={() => {
                        this.getposition();
                    }}>
                    <SIcon name="Marker"
                        style={{
                            width: 35,
                            height: 35,
                            fill: "#2C4C7E"
                        }} />
                </TouchableOpacity>
            </>
        );
    }
}

