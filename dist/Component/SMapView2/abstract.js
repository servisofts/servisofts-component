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
import { Component } from 'react';
import SMarker from "./SMarker";
import SPolyline from './SPolyline';
import SCircle from './SCircle';
var SMapViewAbstract = /** @class */ (function (_super) {
    __extends(SMapViewAbstract, _super);
    function SMapViewAbstract(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            region: {
                latitude: 17,
                longitude: 17,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }
        };
        if (_this.props.initialRegion) {
            _this.state.region = _this.props.initialRegion;
        }
        return _this;
    }
    SMapViewAbstract.prototype.setRegion = function (region) {
        this.state.region = region;
        this.setState(__assign({}, this.state));
    };
    SMapViewAbstract.SMarker = SMarker;
    SMapViewAbstract.SPolyline = SPolyline;
    SMapViewAbstract.SCircle = SCircle;
    return SMapViewAbstract;
}(Component));
export default SMapViewAbstract;
