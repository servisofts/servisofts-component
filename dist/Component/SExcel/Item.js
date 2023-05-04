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
import { SText, SView } from '../../index';
import excel from './func';
var SExcel = /** @class */ (function (_super) {
    __extends(SExcel, _super);
    function SExcel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SExcel.prototype.onPress = function () {
        if (!this.props.data) {
            console.error("SExcel No hay data");
            return null;
        }
        var sheet = excel.create(this.props);
        if (!this.props.onPress)
            return;
        this.props.onPress(sheet);
    };
    SExcel.prototype.render = function () {
        return React.createElement(SView, { onPress: this.onPress.bind(this) }, this.props.children ? this.props.children : React.createElement(SText, null, 'Export'));
    };
    return SExcel;
}(Component));
export default SExcel;
