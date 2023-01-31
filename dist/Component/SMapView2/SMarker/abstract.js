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
import SIcon from '../../SIcon';
import SView from '../../SView';
var SMarkerAbstract = /** @class */ (function (_super) {
    __extends(SMarkerAbstract, _super);
    function SMarkerAbstract(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SMarkerAbstract.prototype._default = function () {
        return React.createElement(SView, { width: this.props.width, height: this.props.width },
            React.createElement(SIcon, { name: "Marker", width: this.props.width, height: this.props.width, fill: this.props.fill }));
    };
    SMarkerAbstract.defaultProps = {
        latitude: 0,
        longitude: 0,
        _type_map: "marker",
        width: 25,
        fill: "#ff0000"
    };
    return SMarkerAbstract;
}(Component));
export default SMarkerAbstract;
