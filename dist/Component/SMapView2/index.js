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
import React from 'react';
import SMapViewAbstract from './abstract';
import GoogleMapReact from 'google-map-react';
import STheme from '../STheme';
var toLatLng = function (obj) {
    return { lat: obj.latitude, lng: obj.longitude };
};
var SMapView = /** @class */ (function (_super) {
    __extends(SMapView, _super);
    function SMapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getZoom = function (region) {
            var promedio = (region.longitudeDelta + region.latitudeDelta) / 4;
            var zoom = Math.log(360 / promedio) / Math.LN2;
            return zoom;
        };
        _this._toRemove = [];
        return _this;
    }
    SMapView.prototype.fitToCoordinates = function (points, options) {
        if (!points)
            return;
        if (points.length <= 0)
            return;
        var c = {
            lat: { suma: 0, media: 0, max: 0, min: 0, delta: 0 },
            lng: { suma: 0, media: 0, max: 0, min: 0, delta: 0 }
        };
        points.map(function (p) {
            var _a, _b;
            if (!c.lat.max)
                c.lat.max = p.latitude;
            if (!c.lat.min)
                c.lat.min = p.latitude;
            if (c.lat.max < p.latitude)
                c.lat.max = p.latitude;
            if (c.lat.min > p.latitude)
                c.lat.min = p.latitude;
            if (!c.lng.max)
                c.lng.max = p.longitude;
            if (!c.lng.min)
                c.lng.min = p.longitude;
            if (c.lng.max < p.longitude)
                c.lng.max = p.longitude;
            if (c.lng.min > p.longitude)
                c.lng.min = p.longitude;
            c.lat.suma += (_a = p.latitude) !== null && _a !== void 0 ? _a : 0;
            c.lng.suma += (_b = p.longitude) !== null && _b !== void 0 ? _b : 0;
        });
        c.lat.media = c.lat.suma / points.length;
        c.lng.media = c.lng.suma / points.length;
        c.lat.delta = Math.abs(c.lat.max - c.lat.min) + 0.005;
        c.lng.delta = Math.abs(c.lng.max - c.lng.min) + 0.005;
        var a = 0.00005;
        if (options === null || options === void 0 ? void 0 : options.edgePadding) {
            var sd_lat = (options.edgePadding.bottom + options.edgePadding.top) * a;
            var sd_lng = (options.edgePadding.bottom + options.edgePadding.top) * a;
            c.lat.delta += sd_lat;
            c.lng.delta += sd_lng;
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
        });
    };
    SMapView.prototype.animateToRegion = function (region, time) {
        this.setRegion(region);
    };
    SMapView.prototype._getChildrens = function () {
        var _this = this;
        var childs = this.props.children;
        if (!childs)
            return null;
        this._toRemove.map(function (i) { return i.setMap(null); });
        this._toRemove = [];
        childs = [].concat.apply([], childs);
        return childs.map(function (child) {
            if (!child)
                return null;
            if (!child.props)
                return null;
            var _type_map = child.props._type_map;
            if (!_type_map)
                return null;
            if (child.type) {
                var ClassType = child.type;
                var ins = new ClassType(child.props);
                if (ins.renderMap) {
                    return ins.renderMap(child, { map: _this.mapa, maps: _this.maps }, _this._toRemove);
                }
            }
            return null;
        });
    };
    SMapView.prototype.center = function () {
        console.log("TODO: center() SMapView2.index.tsx");
    };
    SMapView.prototype.render = function () {
        var _this = this;
        var _a;
        var zoom = this.getZoom(this.state.region);
        var options = {
            styles: (_a = this.props.customMapStyle) !== null && _a !== void 0 ? _a : STheme.color.mapStyle,
            fullscreenControl: false,
            mapTypeControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false
        };
        return React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: "AIzaSyDYLp8tqYQvGbQLdL0BbsAGYaXWr8dxTUg" }, center: toLatLng(this.state.region), zoom: zoom, options: options, onGoogleApiLoaded: function (_a) {
                var map = _a.map, maps = _a.maps;
                _this.mapa = map;
                _this.maps = maps;
                _this._getChildrens();
            }, onDragEnd: function (evt) {
                if (_this.props.onRegionChangeComplete) {
                    var center = { latitude: evt.center.lat(), longitude: evt.center.lng() };
                    _this.props.onRegionChangeComplete(center);
                }
            }, onZoomAnimationEnd: function (evt) {
                if (_this.props.onRegionChangeComplete) {
                    if (!_this.mapa)
                        return;
                    if (!_this.mapa.center)
                        return;
                    var center = { latitude: _this.mapa.center.lat(), longitude: _this.mapa.center.lng() };
                    _this.props.onRegionChangeComplete(center);
                }
            }, onClick: function (evt) {
                if (_this.props.onPress) {
                    var latitude = evt.lat;
                    var longitude = evt.lng;
                    var latLng = { latitude: latitude, longitude: longitude };
                    _this.props.onPress({
                        coordinate: latLng,
                        position: { x: evt.x, y: evt.y }
                    });
                }
            } }, this._getChildrens());
    };
    return SMapView;
}(SMapViewAbstract));
export default SMapView;
