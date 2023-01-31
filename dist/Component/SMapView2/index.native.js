var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import SMapViewAbstract from './abstract';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import STheme from '../STheme';
import Geolocation from '@react-native-community/geolocation';
var SMapView = /** @class */ (function (_super) {
    __extends(SMapView, _super);
    function SMapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.analiceRecurcibe = function (evt, inp, arr) {
            if (arr === void 0) { arr = []; }
            var cords = evt.nativeEvent.coordinate;
            if (!Array.isArray(inp)) {
                //end
                if (!inp)
                    return null;
                if (inp.props) {
                    if (inp.props["_type_map"]) {
                        if (inp.props["_type_map"] == "circle") {
                            var center = inp.props.center;
                            var distancia = _this.getDistanciaMetros(cords.latitude, cords.longitude, center.latitude, center.longitude);
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
            inp.map(function (obj) {
                return _this.analiceRecurcibe(evt, obj, arr);
            });
        };
        return _this;
    }
    SMapView.prototype.fitToCoordinates = function (points, options) {
        return this.mapa.fitToCoordinates(points, options);
    };
    SMapView.prototype.animateToRegion = function (region, time) {
        this.mapa.animateToRegion(region, time !== null && time !== void 0 ? time : 300);
    };
    SMapView.prototype.getDistanciaMetros = function (lat1, lon1, lat2, lon2) {
        var rad = function (x) { return x * Math.PI / 180; };
        var R = 6378.137; //Radio de la tierra en km 
        var dLat = rad(lat2 - lat1);
        var dLong = rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) *
            Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //aquí obtienes la distancia en metros por la conversion 1Km =1000m
        var d = R * c * 1000;
        return d;
    };
    SMapView.prototype.center = function () {
        var _this = this;
        Geolocation.getCurrentPosition(function (pos) {
            var crd = pos.coords;
            _this.mapa.animateToRegion({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            });
        })["catch"](function (err) {
            console.log(err);
        });
        // console.log("TODO: center() SMapView2.index.native.tsx")
    };
    SMapView.prototype.render = function () {
        var _this = this;
        var _a;
        return React.createElement(MapView, __assign({ ref: function (ref) { return _this.mapa = ref; }, style: {
                width: "100%",
                height: "100%",
                flex: 1
            }, moveOnMarkerPress: false, showsUserLocation: false, showsMyLocationButton: false, initialRegion: this.state.region, provider: PROVIDER_GOOGLE }, this.props, { onMarkerPress: function (evt) {
                if (_this.props.children) {
                    var resp = [];
                    _this.analiceRecurcibe(evt, _this.props.children, resp);
                }
                // console.log(evt);
                if (_this.props.onPress) {
                    _this.props.onPress(evt.nativeEvent);
                }
            }, onPress: function (evt) {
                if (_this.props.children) {
                    var resp = [];
                    _this.analiceRecurcibe(evt, _this.props.children, resp);
                }
                // console.log(evt);
                if (_this.props.onPress) {
                    _this.props.onPress(evt.nativeEvent);
                }
            }, customMapStyle: (_a = this.props.customMapStyle) !== null && _a !== void 0 ? _a : STheme.color.mapStyle, onRegionChangeComplete: this.props.onRegionChangeComplete }), this.props.children);
    };
    return SMapView;
}(SMapViewAbstract));
export default SMapView;
