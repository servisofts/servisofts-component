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
import { SText, STheme, SView } from '../../../index';
import Number from './Number';
var Aperture = /** @class */ (function (_super) {
    __extends(Aperture, _super);
    function Aperture(props) {
        var _this = _super.call(this, props) || this;
        _this.getNumber = function (number) {
            return React.createElement(Number, null);
        };
        _this.state = {};
        return _this;
    }
    Aperture.prototype.render = function () {
        return (React.createElement(SView, { style: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: STheme.color.primary
            }, center: true },
            React.createElement(SText, { fontSize: 20, bold: true }, "Servisofts"),
            React.createElement(SText, { fontSize: 20, bold: true }, "Component"),
            this.getNumber(1)));
    };
    return Aperture;
}(Component));
export default Aperture;
