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
import { Text } from 'react-native';
import STheme from '../STheme/index';
import SView from '../SView/index';
var SText = /** @class */ (function (_super) {
    __extends(SText, _super);
    function SText(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SText.prototype.render = function () {
        var _a, _b, _c, _d, _e;
        var fontSize = (_e = ((_b = (_a = this === null || this === void 0 ? void 0 : this.props) === null || _a === void 0 ? void 0 : _a.fontSize) !== null && _b !== void 0 ? _b : (_d = (_c = this.props) === null || _c === void 0 ? void 0 : _c.style) === null || _d === void 0 ? void 0 : _d.fontSize)) !== null && _e !== void 0 ? _e : 14; // Tamaño de fuente base en píxeles
        // const screenWidth = Dimensions.get('window').width;
        // const baseWidth = 375; // El ancho base en el que se basa el diseño de la aplicación
        // const normalize = (size) => {
        //   const newSize = (size * screenWidth) / baseWidth;
        //   return newSize;
        // };
        // const adjustedFontSize = normalize(fontSize);
        return (React.createElement(SView, __assign({}, this.props),
            React.createElement(Text, { style: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (this.props.font ? { fontFamily: this.props.font } : (STheme.color.font ? { fontFamily: STheme.color.font } : null))), { fontSize: fontSize, color: !STheme.color.text ? STheme.color.secondary : STheme.color.text }), (!this.props.center ? {} : {
                    textAlign: "center"
                })), (!this.props.primary ? {} : {
                    color: STheme.color.primary
                })), (!this.props.secondary ? {} : {
                    color: STheme.color.secondary
                })), (!this.props.color ? {} : {
                    color: this.props.color
                })), (!this.props.bold ? {} : {
                    fontWeight: "bold"
                })), (!this.props.underLine ? {} : {
                    textDecorationLine: "underline"
                })), (!this.props.capitalize ? {} : {
                    textTransform: "capitalize"
                })), (!this.props.justify ? {} : {
                    textAlign: "justify"
                })), this.props.style), allowFontScaling: false }, this.props.children)));
    };
    return SText;
}(Component));
export default SText;
