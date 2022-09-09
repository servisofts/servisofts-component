import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GoogleMapReact from 'google-map-react';
import MapStyle from './mapStyle'
import STheme from '../STheme';

type PropsType = {
    initialRegion: { latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number },
    onRegionChangeComplete?: (region: any) => void,
    onPress?: (event: any) => void,
    preventCenter?: boolean,
    options?: {
        zoomControl?: boolean,
        mapTypeControl?: boolean,
        scaleControl?: boolean,
        streetViewControl?: boolean,
        rotateControl?: boolean,
        fullscreenControl?: boolean
    }
}
class SMapView extends Component<PropsType> {
    mapa;
    state;
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: props.initialRegion.latitude,
                longitude: props.initialRegion.longitude,
                latitudeDelta: 0.07,
                longitudeDelta: 0.07,
            },
        };
        this.mapa = false;
    }

    getZoom = (region) => {
        var promedio = (region.longitudeDelta + region.latitudeDelta)
        let zoom = Math.round(promedio * 100)
        return zoom
    }

    getposition = () => {
        var _map = this.mapa;
        // navigator.geolocation.getCurrentPosition(function (position) {
        //     console.log("Latitude is :", position.coords.latitude);
        //     // _map.setCenter({
        //     //     lat: position.coords.latitude,
        //     //     lng: position.coords.longitude
        //     // })
        //     // _map.setZoom(18)
        // }, (error) => {
        //     console.log("error al optener ubicacion")
        // }, {
        //     enableHighAccuracy: false,
        //     timeout: 5000,
        //     maximumAge: 1500
        // });
    }


    componentDidMount() {
        this.getposition();
    }

    center() {
        var _map = this.mapa;
        var props = this.props;
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            _map.setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
            _map.setZoom(18)
            var center = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            if (props.onRegionChangeComplete) props.onRegionChangeComplete(center);
        }, (error) => {
            console.log(error)
        }, {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 1500
        });
    }
    setMarker() {

    }

   
    animateToRegion(region, time) {
        // this.mapa.animateToRegion(region, !time ? 1000 : time);
        this.state.region = { ...this.state.region, ...region };
        this.setState({ ...this.state });

    }

    renderChildrens(){
        
    }
    render() {
        return (
            <>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDYLp8tqYQvGbQLdL0BbsAGYaXWr8dxTUg" }}
                    defaultCenter={{
                        lat: this.state.region.latitude,
                        lng: this.state.region.longitude
                    }}
                    center={{
                        lat: this.state.region.latitude,
                        lng: this.state.region.longitude
                    }}
                    options={{
                        styles: STheme.color.mapStyle,
                        ...(this.props.options ?? {})
                    }}
                    defaultZoom={this.getZoom(this.state.region)}
                    onGoogleApiLoaded={({ map, maps }) => {
                        this.mapa = map
                    }}
                    onClick={(evt) => {
                        if (this.props.onPress) {
                            var latitude = evt.lat;
                            var longitude = evt.lng;
                            var latLng = { latitude: latitude, longitude: longitude };
                            this.props.onPress(latLng);
                        }
                    }}
                    onZoomAnimationEnd={(evt) => {
                        var center = {
                            latitude: this.mapa.center.lat(),
                            longitude: this.mapa.center.lng(),
                        }
                        if (this.props.onRegionChangeComplete) this.props.onRegionChangeComplete(center);
                    }}
                    onDragEnd={(evt) => {
                        var center = {
                            latitude: evt.center.lat(),
                            longitude: evt.center.lng(),
                        }
                        if (this.props.onRegionChangeComplete) this.props.onRegionChangeComplete(center);
                    }}
                >
                    {this.props.children}
                </GoogleMapReact>
            </>
        );
    }
}

export default SMapView;
