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
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SIcon from '../SIcon';
var SMapView = /** @class */ (function (_super) {
    __extends(SMapView, _super);
    function SMapView(props) {
        var _this = _super.call(this, props) || this;
        _this.center = function () {
            _this.getposition(function (position) {
                _this.mapa.animateToRegion(_this.state.position, 1000);
            });
        };
        _this.getposition = function (callback) {
            Geolocation.getCurrentPosition(function (position) {
                var region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002
                };
                if (callback) {
                    callback(region);
                }
                // this.props.state.myUbicacionReducer.position = region;
                // if (!this.props.preventCenter) {
                //     this.mapa.animateToRegion(region, 1000)
                // }
                _this.setState({ position: region });
            }, function (error) {
                console.log(error.code, error.message);
            }, { enableHighAccuracy: false, timeout: 1500, maximumAge: 10000 });
            return React.createElement(View, null);
        };
        _this.state = {
            region: {
                latitude: -17.7799998333333332,
                longitude: -63.180598333333336,
                latitudeDelta: 0.035,
                longitudeDelta: 0.035
            },
            markersData: false
        };
        _this.mapa = false;
        return _this;
    }
    SMapView.prototype.componentDidMount = function () {
        this.getposition();
    };
    SMapView.prototype.animateToRegion = function (region, time) {
        this.mapa.animateToRegion(region, !time ? 1000 : time);
    };
    SMapView.prototype.fitToCoordinates = function (arr, props) {
        this.mapa.fitToCoordinates(arr, props);
    };
    SMapView.prototype.render = function () {
        var _this = this;
        var _a, _b;
        return (React.createElement(React.Fragment, null,
            React.createElement(MapView, __assign({ ref: function (ref) { return _this.mapa = ref; }, style: {
                    width: "100%",
                    height: "100%",
                    flex: 1
                }, initialRegion: this.state.region, showsUserLocation: (_a = this.props.showsUserLocation) !== null && _a !== void 0 ? _a : false, showsMyLocationButton: (_b = this.props.showsMyLocationButton) !== null && _b !== void 0 ? _b : false, provider: PROVIDER_GOOGLE }, this.props), this.props.children),
            React.createElement(TouchableOpacity, { style: {
                    position: "absolute",
                    bottom: 100,
                    right: 8,
                    padding: 4,
                    backgroundColor: "#ccc",
                    borderRadius: 10
                }, onPress: function () {
                    _this.getposition();
                } },
                React.createElement(SIcon, { name: "Marker", style: {
                        width: 35,
                        height: 35,
                        fill: "#2C4C7E"
                    } }))));
    };
    return SMapView;
}(Component));
export default SMapView;
