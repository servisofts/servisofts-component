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
import SView from '../SView';
import SGradient from '../SGradient';
import SHr from '../SHr';
import SText from '../SText';
import ColorBar from './ColorBar';
var STEPS = ["#FF0000",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#FF0000"];
var SColorPicker = /** @class */ (function (_super) {
    __extends(SColorPicker, _super);
    function SColorPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            color: "#ff0000",
            color_bar: "#ff0000",
            porcent_bar: 0.5
        };
        return _this;
    }
    SColorPicker.prototype.decimalToHex = function (decimal) {
        // Convierte el número decimal a hexadecimal
        var hex = parseInt(decimal).toString(16);
        // Agrega un 0 al principio si el resultado tiene una longitud de 1
        var paddedHex = hex.length === 1 ? "0" + hex : hex;
        // Retorna el valor hexadecimal
        return paddedHex;
    };
    SColorPicker.prototype.hexToRgb = function (hex) {
        // Elimina el carácter '#' si está presente
        hex = hex.replace("#", "");
        // Verifica si el valor hexadecimal es válido
        if (!/^[0-9A-F]{6}$/i.test(hex)) {
            throw new Error("El valor hexadecimal proporcionado no es válido.");
        }
        // Convierte el valor hexadecimal a valores RGB
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        // Retorna el valor RGB en formato de objeto
        return { r: r, g: g, b: b };
    };
    SColorPicker.prototype.renderBody = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        var size = 300;
        var grados = 45;
        return (React.createElement(SView, { col: "xs-12", center: true, row: true, height: 100 },
            React.createElement(SView, { col: "xs-3", height: true, backgroundColor: this.state.color, center: true },
                React.createElement(SText, { bold: true }, this.state.color)),
            React.createElement(SView, { backgroundColor: '#fff', col: "xs-9", height: true, style: {
                    overflow: "hidden"
                } },
                React.createElement(SView, { flex: true, col: "xs-12" },
                    React.createElement(SGradient, { colors: ["#000000", this.state.color_bar, "#ffffff"], deg: grados }),
                    React.createElement(SView, { style: {
                            position: "absolute",
                            borderRadius: 100,
                            width: 20,
                            height: 20,
                            borderWidth: 2,
                            borderColor: "#ffffff",
                            left: ((_c = (_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.pos_body) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : 0) - 10,
                            top: ((_f = (_e = (_d = this.state) === null || _d === void 0 ? void 0 : _d.pos_body) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : 0) - 10
                        } }),
                    React.createElement(SView, { col: "xs-12", height: true, activeOpacity: 1, onLayout: function (e) {
                            _this.layoutBody = e.nativeEvent.layout;
                        }, style: {
                            position: "absolute"
                        }, onPress: function (e) {
                            var w = _this.layoutBody.width;
                            var h = _this.layoutBody.height;
                            var ox = e.nativeEvent.offsetX;
                            var oy = e.nativeEvent.offsetY;
                            var of = ((ox / w) - (oy / h));
                            var v1 = _this.hexToRgb(_this.state.color_bar);
                            var color = _this.state.color_bar;
                            if (of > 0) {
                                // se hace blanco
                                var r = v1.r + ((255 - v1.r) * Math.abs(of));
                                var g = v1.g + ((255 - v1.g) * Math.abs(of));
                                var b = v1.b + ((255 - v1.b) * Math.abs(of));
                                color = "#" + _this.decimalToHex(r) + _this.decimalToHex(g) + _this.decimalToHex(b);
                            }
                            else {
                                var r = v1.r - (v1.r * Math.abs(of));
                                var g = v1.g - (v1.g * Math.abs(of));
                                var b = v1.b - (v1.b * Math.abs(of));
                                color = "#" + _this.decimalToHex(r) + _this.decimalToHex(g) + _this.decimalToHex(b);
                                // se hace negro
                            }
                            // console.log(w, h)
                            // console.log(ox, oy)
                            // console.log(ox / w, oy / h)
                            // console.log(of)
                            _this.setState({ pos_body: { x: ox, y: oy }, color: color });
                        } })))));
    };
    SColorPicker.prototype.render = function () {
        var _this = this;
        return React.createElement(SView, __assign({ col: "xs-12", padding: 4, card: true }, this.props),
            this.renderBody(),
            React.createElement(SHr, null),
            React.createElement(ColorBar, { onChange: function (e) {
                    _this.setState({ color_bar: e });
                } }));
    };
    return SColorPicker;
}(Component));
export default SColorPicker;
