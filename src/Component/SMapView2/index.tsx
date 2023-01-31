import React from 'react'
import SMapViewAbstract from './abstract'
import GoogleMapReact from 'google-map-react';
import STheme from '../STheme';

type OptionsTypes = {
    styles?: any,
    zoomControl?: boolean,
    mapTypeControl?: boolean,
    scaleControl?: boolean,
    streetViewControl?: boolean,
    rotateControl?: boolean,
    fullscreenControl?: boolean
}

const toLatLng = (obj) => {
    return { lat: obj.latitude, lng: obj.longitude }
}

export default class SMapView extends SMapViewAbstract {
    fitToCoordinates(points: { latitude: number; longitude: number; }[], options: { edgePadding?: { top: number; right: number; bottom: number; left: number; }; animated?: boolean; }) {
        if (!points) return;
        if (points.length <= 0) return;
        var c = {
            lat: { suma: 0, media: 0, max: 0, min: 0, delta: 0 },
            lng: { suma: 0, media: 0, max: 0, min: 0, delta: 0 }
        }

        points.map(p => {
            if (!c.lat.max) c.lat.max = p.latitude;
            if (!c.lat.min) c.lat.min = p.latitude;
            if (c.lat.max < p.latitude) c.lat.max = p.latitude;
            if (c.lat.min > p.latitude) c.lat.min = p.latitude;
            if (!c.lng.max) c.lng.max = p.longitude;
            if (!c.lng.min) c.lng.min = p.longitude;
            if (c.lng.max < p.longitude) c.lng.max = p.longitude;
            if (c.lng.min > p.longitude) c.lng.min = p.longitude;
            c.lat.suma += p.latitude ?? 0;
            c.lng.suma += p.longitude ?? 0;
        })
        c.lat.media = c.lat.suma / points.length;
        c.lng.media = c.lng.suma / points.length;

        c.lat.delta = Math.abs(c.lat.max - c.lat.min) + 0.005;
        c.lng.delta = Math.abs(c.lng.max - c.lng.min) + 0.005;

        const a = 0.00005;
        if (options?.edgePadding) {
            var sd_lat = (options.edgePadding.bottom + options.edgePadding.top) * a;
            var sd_lng = (options.edgePadding.bottom + options.edgePadding.top) * a;
            c.lat.delta += sd_lat
            c.lng.delta += sd_lng
            // var ca = options.edgePadding.bottom < options.edgePadding.top ? options.edgePadding.top - options.edgePadding.bottom : options.edgePadding.top - options.edgePadding.bottom;
            // var cb = options.edgePadding.left < options.edgePadding.right ? 1 : -1;
            c.lat.media += (options.edgePadding.top - options.edgePadding.bottom) * a;
            c.lng.media += (options.edgePadding.right - options.edgePadding.left) * a;
            // c.lng.media += sd_lng * cb;
        }
        this.setRegion({
            latitude: c.lat.media,
            longitude: c.lng.media,
            latitudeDelta: c.lat.delta,
            longitudeDelta: c.lng.delta
        })
    }


    maps;

    animateToRegion(region: { latitudeDelta: number; longitudeDelta: number; } & { latitude: number; longitude: number; }, time: number) {
        this.setRegion(region);
    }

    getZoom = (region) => {
        var promedio = (region.longitudeDelta + region.latitudeDelta) / 4
        let zoom = Math.log(360 / promedio) / Math.LN2;
        return zoom;
    }

    _toRemove = [];

    _getChildrens() {
        var childs: any = this.props.children;
        if (!childs) return null;
        this._toRemove.map(i => i.setMap(null))
        this._toRemove = [];
        childs = [].concat.apply([], childs);
        return childs.map((child) => {
            if (!child) return null;
            if (!child.props) return null;
            var { _type_map } = child.props;
            if (!_type_map) return null;

            if (child.type) {
                var ClassType = child.type;
                var ins = new ClassType(child.props);
                if (ins.renderMap) {
                    return ins.renderMap(child, { map: this.mapa, maps: this.maps }, this._toRemove)
                }
            }
            return null;
        })

    }
    center() {
        console.log("TODO: center() SMapView2.index.tsx")
    }
    render() {
        var zoom = this.getZoom(this.state.region);
        var options: OptionsTypes = {
            styles: this.props.customMapStyle ?? STheme.color.mapStyle,
            fullscreenControl: false,
            mapTypeControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
        }
        return <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDYLp8tqYQvGbQLdL0BbsAGYaXWr8dxTUg" }
            }
            center={toLatLng(this.state.region)
            }
            zoom={zoom}
            options={options}
            onGoogleApiLoaded={({ map, maps }) => {
                this.mapa = map;
                this.maps = maps;
                this._getChildrens()
            }}
            onDragEnd={(evt) => {
                if (this.props.onRegionChangeComplete) {
                    var center = { latitude: evt.center.lat(), longitude: evt.center.lng() }
                    this.props.onRegionChangeComplete(center);
                }
            }}
            onZoomAnimationEnd={(evt) => {

                if (this.props.onRegionChangeComplete) {
                    if (!this.mapa) return;
                    if (!this.mapa.center) return;
                    var center = { latitude: this.mapa.center.lat(), longitude: this.mapa.center.lng() }
                    this.props.onRegionChangeComplete(center);
                }
            }}
            onClick={(evt) => {
                if (this.props.onPress) {
                    var latitude = evt.lat;
                    var longitude = evt.lng;
                    var latLng = { latitude: latitude, longitude: longitude };
                    this.props.onPress({
                        coordinate: latLng,
                        position: { x: evt.x, y: evt.y }
                    })
                }
            }}
        >
            {this._getChildrens()}
        </GoogleMapReact >
    }
}