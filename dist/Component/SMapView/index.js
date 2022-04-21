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
import GoogleMapReact from 'google-map-react';
import STheme from '../STheme';
var SMapView = /** @class */ (function (_super) {
    __extends(SMapView, _super);
    function SMapView(props) {
        var _this = _super.call(this, props) || this;
        _this.getZoom = function (region) {
            var promedio = (region.longitudeDelta + region.latitudeDelta);
            var zoom = Math.round(promedio * 100);
            return zoom;
        };
        _this.getposition = function () {
            var _map = _this.mapa;
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
        };
        _this.state = {
            region: {
                latitude: props.initialRegion.latitude,
                longitude: props.initialRegion.longitude,
                latitudeDelta: 0.07,
                longitudeDelta: 0.07
            }
        };
        _this.mapa = false;
        return _this;
    }
    SMapView.prototype.componentDidMount = function () {
        console.log("hoola mundo");
        this.getposition();
    };
    SMapView.prototype.center = function () {
        var _map = this.mapa;
        var props = this.props;
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            _map.setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            _map.setZoom(18);
            var center = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            if (props.onRegionChangeComplete)
                props.onRegionChangeComplete(center);
        }, function (error) {
            console.log(error);
        }, {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 1500
        });
    };
    SMapView.prototype.setMarker = function () {
    };
    SMapView.prototype.animateToRegion = function (region, time) {
        // this.mapa.animateToRegion(region, !time ? 1000 : time);
        this.state.region = __assign(__assign({}, this.state.region), region);
        this.setState(__assign({}, this.state));
    };
    SMapView.prototype.render = function () {
        var _this = this;
        console.log("holaaaa");
        return (React.createElement(React.Fragment, null,
            React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: "AIzaSyDYLp8tqYQvGbQLdL0BbsAGYaXWr8dxTUg" }, defaultCenter: {
                    lat: this.state.region.latitude,
                    lng: this.state.region.longitude
                }, center: {
                    lat: this.state.region.latitude,
                    lng: this.state.region.longitude
                }, options: {
                    styles: STheme.color.mapStyle
                }, defaultZoom: this.getZoom(this.state.region), onGoogleApiLoaded: function (_a) {
                    var map = _a.map, maps = _a.maps;
                    _this.mapa = map;
                }, onClick: function (evt) {
                    if (_this.props.onPress) {
                        var latitude = evt.lat;
                        var longitude = evt.lng;
                        var latLng = { latitude: latitude, longitude: longitude };
                        _this.props.onPress(latLng);
                    }
                }, onZoomAnimationEnd: function (evt) {
                    var center = {
                        latitude: _this.mapa.center.lat(),
                        longitude: _this.mapa.center.lng()
                    };
                    if (_this.props.onRegionChangeComplete)
                        _this.props.onRegionChangeComplete(center);
                }, onDragEnd: function (evt) {
                    var center = {
                        latitude: evt.center.lat(),
                        longitude: evt.center.lng()
                    };
                    if (_this.props.onRegionChangeComplete)
                        _this.props.onRegionChangeComplete(center);
                } }, this.props.children)));
    };
    return SMapView;
}(Component));
export default SMapView;
