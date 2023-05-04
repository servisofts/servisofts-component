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
import PopupImport from './PopupImport';
var SExcel = /** @class */ (function (_super) {
    __extends(SExcel, _super);
    function SExcel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SExcel.prototype.onPress = function () {
        PopupImport.open(this.props, function () {
            PopupImport.close();
        });
    };
    SExcel.prototype.render = function () {
        return React.createElement(SView, { onPress: this.onPress.bind(this) }, this.props.children ? this.props.children : React.createElement(SText, null, 'Import'));
    };
    return SExcel;
}(Component));
export default SExcel;