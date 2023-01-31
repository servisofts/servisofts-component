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
import { SView } from "../../../index";
import SMarkerAbstract from './abstract';
var SMarker = /** @class */ (function (_super) {
    __extends(SMarker, _super);
    function SMarker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMarker.prototype.renderMap = function (child, _a, _toRemove) {
        var map = _a.map, maps = _a.maps;
        var Itm = function (props) { return React.createElement("div", null, props.children); };
        return React.createElement(Itm, { key: this.props.latitude + "-" + this.props.longitude, lat: this.props.latitude, lng: this.props.longitude }, child);
    };
    SMarker.prototype.render = function () {
        var _a;
        var transform = [{ translateY: "-100%" }];
        return React.createElement("div", { style: {
                cursor: "pointer",
                textAlign: "center"
            } },
            React.createElement(SView, { col: "xs-12", style: {
                    alignItems: 'center',
                    transform: transform
                } }, (_a = this.props.children) !== null && _a !== void 0 ? _a : this._default()));
    };
    return SMarker;
}(SMarkerAbstract));
export default SMarker;
