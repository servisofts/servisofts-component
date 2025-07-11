import React from 'react'
import SMapViewAbstract from './abstract'
import GoogleMapReact from 'google-map-react';
import STheme from '../STheme';
import SView from '../SView';


type OptionsTypes = {
    styles?: any,
    zoomControl?: boolean,
    mapTypeControl?: boolean,
    scaleControl?: boolean,
    streetViewControl?: boolean,
    rotateControl?: boolean,
    fullscreenControl?: boolean,
    disableDefaultUI?: boolean,

}

const toLatLng = (obj) => {
    return { lat: obj.latitude, lng: obj.longitude }
}

export default class SMapView extends SMapViewAbstract {

    static fitToCoordinatesCalculate = (points: { latitude: number; longitude: number; }[], options: { edgePadding?: { top: number; right: number; bottom: number; left: number; } }) => {
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
        return {
            latitude: c.lat.media,
            longitude: c.lng.media,
            latitudeDelta: c.lat.delta,
            longitudeDelta: c.lng.delta
        }
        console.log("Intentando centrar")
    }
    fitToCoordinates(points: { latitude: number; longitude: number; }[], options: { edgePadding?: { top: number; right: number; bottom: number; left: number; }; animated?: boolean; }) {
        const c = SMapView.fitToCoordinatesCalculate(points, options);
        this.setRegion(c)
        console.log("Intentando centrar")
    }

    state;
    maps;

    animateToRegion(region: { latitudeDelta: number; longitudeDelta: number; } & { latitude: number; longitude: number; }, time: number) {
        this.setRegion(region);
    }

    getZoom = (region) => {
        const zoom = Math.log2(360 / region.longitudeDelta);
        return zoom;
        // var promedio = (region.longitudeDelta + region.latitudeDelta) / 4
        // let zoom = Math.log(360 / promedio) / Math.LN2;
        // return zoom;
    }


    zoomToDelta(zoom, mapWidthPixels, latitude) {
        const earthCircumference = 40075017; // Circunferencia de la tierra en metros en el ecuador
        const initialResolution = earthCircumference; // Resolución (m por pixel) a zoom level 0
        const resolutionAtZoom = initialResolution / (Math.pow(2, zoom));
        const equatorLatitudeDelta = mapWidthPixels * resolutionAtZoom / earthCircumference;

        // Ajuste por la latitud (el área visible del mapa se "estira" más cerca de los polos en una proyección mercator)
        const latitudeDelta = equatorLatitudeDelta * Math.cos((latitude * Math.PI) / 180);

        // Como una aproximación, puedes usar el mismo valor para longitudeDelta.
        const longitudeDelta = latitudeDelta;

        return {
            latitudeDelta,
            longitudeDelta
        };
    }

    _toRemove = [];

    _getChildrens() {
        var childs: any = this.props.children;
        if (!childs) return null;
        if (!Array.isArray(childs)) {
            childs = [childs]
        }
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
                    return ins.renderMap(child, { map: this.mapa, maps: this.maps, key: child?.props?.key }, this._toRemove)
                }
                return child;
            }
            return null;
        })

    }
    getUserLocation(): Promise<{ latitude: number; longitude: number; }> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                },
                (error) => {
                    console.log(error.code, error.message);
                    reject(error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        });
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
            if (props.onRegionChangeComplete) props.onRegionChangeComplete({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        }, (error) => {
            console.log(error)
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 1500
        });
    }
    render() {
        var zoom = this.getZoom(this.state.region);
        var options: OptionsTypes = {
            disableDefaultUI: true, // 👈🏼
            styles: this.props.customMapStyle ?? STheme.color.mapStyle,
            fullscreenControl: false,
            mapTypeControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
        }
        return <SView col={"xs-12"} flex onLayout={(evt) => {
            this.setState({ layout: evt.nativeEvent.layout })
        }}>
            <GoogleMapReact
                bootstrapURLKeys={SMapView.bootstrapURLKeys}
                center={toLatLng(this.state.region)
                }
                zoom={zoom}
                options={()=>options}
                
                onGoogleApiLoaded={({ map, maps }) => {
                    this.mapa = map;
                    this.maps = maps;
                    this._getChildrens()
                }}
                onDragEnd={(evt) => {
                    if (this.props.onRegionChangeComplete) {
                        var center = {
                            latitude: evt.center.lat(), longitude: evt.center.lng(),
                            ...this.zoomToDelta(evt.zoom, this.state?.layout?.width, this.mapa.center.lat())
                        }
                        // this.setRegion(center);
                        this.props.onRegionChangeComplete(center);
                    }
                }}
                onZoomAnimationEnd={(evt) => {
                    if (this.props.onRegionChangeComplete) {
                        if (!this.mapa) return;
                        if (!this.mapa.center) return;
                        var center = {
                            latitude: this.mapa.center.lat(), longitude: this.mapa.center.lng(),
                            ...this.zoomToDelta(evt, this.state?.layout?.width, this.mapa.center.lat())
                        }

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
                heatmapLibrary={!!this.props.headmap}
                heatmap={this.props.headmap}>{this._getChildrens()}</GoogleMapReact >
        </SView >
    }
}