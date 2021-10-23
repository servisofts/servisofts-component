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
var SGradient = /** @class */ (function (_super) {
    __extends(SGradient, _super);
    function SGradient(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SGradient.prototype.render = function () {
        if (!this.props.colors)
            return null;
        var colors = this.props.colors;
        var color = "";
        for (var i = 0; i < colors.length; i++) {
            color += colors[i];
            if (i < colors.length - 1) {
                color += ",";
            }
        }
        var deg = this.props.deg;
        if (!deg)
            deg = 0;
        return (React.createElement("div", { style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: "linear-gradient(" + deg + "deg," + color + ")"
            } }));
    };
    return SGradient;
}(Component));
export default SGradient;
