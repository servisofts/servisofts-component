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
import React, { Component } from 'react';
import { SMapView, SPage, SView } from '../../../..';
import SIcon from '../../../SIcon';
import SNavigation from '../../../SNavigation';
import ListaDireccion from './ListaDireccion';
var Direccion = /** @class */ (function (_super) {
    __extends(Direccion, _super);
    function Direccion(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.direccion = SNavigation.getParam('direccion', "");
        _this.latitude = SNavigation.getParam('lat', -17.779167);
        _this.longitude = SNavigation.getParam('lng', -63.1775);
        return _this;
    }
    Direccion.prototype.getIcon = function () {
        return React.createElement(SView, { style: {
                position: 'absolute',
                width: 30,
                height: 30,
                transform: [{ translateY: -10 }]
            } },
            React.createElement(SIcon, { name: "Marker" }));
    };
    Direccion.prototype.render = function () {
        return (React.createElement(SPage, { title: "Direccion", disableScroll: true },
            React.createElement(SView, { col: "xs-12", center: true, flex: true },
                React.createElement(SView, { col: "xs-12", height: true, center: true },
                    React.createElement(SMapView, { initialRegion: {
                            latitude: this.latitude,
                            longitude: this.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }, onRegionChangeComplete: function (region) {
                            console.log(region);
                        } }),
                    this.getIcon()),
                React.createElement(ListaDireccion, { direccion: this.direccion }))));
    };
    return Direccion;
}(Component));
export default Direccion;
