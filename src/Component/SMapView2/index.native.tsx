import React from 'react'
import SMapViewAbstract from './abstract'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import STheme from '../STheme';
import Geolocation from '@react-native-community/geolocation';
import SView from '../SView';

export default class SMapView extends SMapViewAbstract {
    fitToCoordinates(points: { latitude: number; longitude: number; }[], options: { edgePadding?: { top: number; right: number; bottom: number; left: number; }; animated?: boolean; }) {
        return this.mapa.fitToCoordinates(points, options);
    }


    animateToRegion(region: { latitudeDelta: number; longitudeDelta: number; } & { latitude: number; longitude: number; }, time: number) {
        this.mapa.animateToRegion(region, time ?? 300);
    }


    getDistanciaMetros(lat1, lon1, lat2, lon2) {
        const rad = (x) => { return x * Math.PI / 180; }
        var R = 6378.137; //Radio de la tierra en km 
        var dLat = rad(lat2 - lat1);
        var dLong = rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) *
            Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //aquí obtienes la distancia en metros por la conversion 1Km =1000m
        var d = R * c * 1000;
        return d;
    }
    analiceRecurcibe = (evt, inp, arr = []) => {
        const cords = evt.nativeEvent.coordinate;
        if (!Array.isArray(inp)) {
            //end
            if (!inp) return null;
            if (inp.props) {
                if (inp.props["_type_map"]) {
                    if (inp.props["_type_map"] == "circle") {
                        const center = inp.props.center;
                        var distancia = this.getDistanciaMetros(cords.latitude, cords.longitude, center.latitude, center.longitude);
                        if (distancia <= inp.props.radius) {
                            if (inp.props.onPress) {
                                inp.props.onPress(evt);
                            }
                        }

                    }
                }
            }
            arr.push(inp);
            return arr;
        }
        inp.map((obj) => {
            return this.analiceRecurcibe(evt, obj, arr);
        })
    }
    center() {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            this.mapa.animateToRegion({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002,
            })
        }).catch((err) => {
            console.log(err);
        });
        // console.log("TODO: center() SMapView2.index.native.tsx")
    }
    render() {
        return <SView col={"xs-12"} flex >
            <MapView
                ref={(ref) => this.mapa = ref}
                style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                }}
                moveOnMarkerPress={false}
                showsUserLocation={false}
                showsMyLocationButton={false}
                initialRegion={this.state.region}
                provider={PROVIDER_GOOGLE}
                {...this.props}

                onMarkerPress={(evt) => {
                    if (this.props.children) {
                        var resp = [];
                        this.analiceRecurcibe(evt, this.props.children, resp);

                    }
                    // console.log(evt);

                    if (this.props.onPress) {
                        this.props.onPress(evt.nativeEvent)
                    }
                }}
                onPress={(evt) => {
                    if (this.props.children) {
                        var resp = [];
                        this.analiceRecurcibe(evt, this.props.children, resp);

                    }
                    // console.log(evt);



                    if (this.props.onPress) {
                        this.props.onPress(evt.nativeEvent)
                    }
                }}

                customMapStyle={this.props.customMapStyle ?? STheme.color.mapStyle}
                onRegionChangeComplete={this.props.onRegionChangeComplete}
            >
                {this.props.children}
            </MapView>
        </SView>
    }
}