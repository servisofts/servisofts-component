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
import SView from '../SView';
import SHr from '../SHr';
import SGradient from '../SGradient';
var STEPS = ["#FF0000",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#FF0000"];
var ColorBar = /** @class */ (function (_super) {
    __extends(ColorBar, _super);
    function ColorBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePress = function (e) {
            // let w = this.state?.layout?.width ?? 0;
            if (!_this.state.layout)
                return;
            var c = (STEPS.length - 1) * 255;
            var w = _this.state.layout.width;
            var ox = e.nativeEvent.offsetX - 0.001;
            var porcent = ox / w;
            var fp = c * porcent;
            var ps = 1;
            var resto = 0;
            if (fp > 0) {
                ps = Math.ceil(fp / 255);
                resto = Math.ceil(fp % 255);
            }
            var v1 = _this.hexToRgb(STEPS[ps - 1]);
            var v2 = _this.hexToRgb(STEPS[ps]);
            var vfinal = "#";
            if (v1.r - v2.r != 0) {
                if (v1.r > v2.r) {
                    vfinal += _this.decimalToHex((v1.r - resto));
                }
                else {
                    vfinal += _this.decimalToHex((v1.r + resto));
                }
            }
            else {
                vfinal += _this.decimalToHex(v1.r);
            }
            if (v1.g - v2.g != 0) {
                if (v1.g > v2.g) {
                    vfinal += _this.decimalToHex((v1.g - resto));
                }
                else {
                    vfinal += _this.decimalToHex((v1.g + resto));
                }
            }
            else {
                vfinal += _this.decimalToHex(v1.g);
            }
            if (v1.b - v2.b != 0) {
                if (v1.b > v2.b) {
                    vfinal += _this.decimalToHex((v1.b - resto));
                }
                else {
                    vfinal += _this.decimalToHex((v1.b + resto));
                }
            }
            else {
                vfinal += _this.decimalToHex(v1.b);
            }
            // console.log(vfinal)
            _this.setState({ color_bar: vfinal, porcent_bar: e.nativeEvent.offsetX / w });
            if (_this.props.onChange)
                _this.props.onChange(vfinal);
        };
        _this.state = {
            porcent_bar: _this.getProximity()
        };
        return _this;
    }
    ColorBar.prototype.getProximity = function () {
        if (!this.props.defaultValue)
            return 0;
        var rgb = this.hexToRgb(this.props.defaultValue);
        var val = 99999;
        var val_select = 0;
        for (var index = 0; index < STEPS.length; index++) {
            var step = STEPS[index];
            var s_rgb = this.hexToRgb(step);
            var r = Math.abs(rgb.r - s_rgb.r);
            var g = Math.abs(rgb.g - s_rgb.g);
            var b = Math.abs(rgb.b - s_rgb.b);
            var sum = r + g + b;
            if (sum < val) {
                val = sum;
                val_select = index;
            }
        }
        // let s_rgb = this.hexToRgb(step);
        // if (Math.abs(rgb.r - s_rgb.r) + Math.abs(rgb.b - s_rgb.b) + Math.abs(rgb.b - s_rgb.b) < val) {
        // val = sum;
        // val_select = index;
        // }
        var pos = ((val_select) / (STEPS.length - 1));
        return pos;
    };
    ColorBar.prototype.componentDidMount = function () {
        // this.setState({
        //     porcent_bar: this.getProximity()
        // })
    };
    ColorBar.prototype.render = function () {
        var _this = this;
        var _a, _b, _c;
        return (React.createElement(SView, { col: "xs-12", style: {
                justifyContent: "center"
            } },
            React.createElement(SHr, null),
            React.createElement(SView, { height: 10, backgroundColor: '#fff', col: "xs-12", borderRadius: 20, style: {
                    overflow: "hidden"
                } },
                React.createElement(SGradient, { colors: STEPS, deg: 90 })),
            React.createElement(SHr, null),
            React.createElement(SView, { style: {
                    position: "absolute",
                    borderRadius: 100,
                    width: 25,
                    height: 25,
                    borderWidth: 2,
                    borderColor: "#ffffff",
                    backgroundColor: this.state.color_bar,
                    left: ((_c = ((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.width) * (this.state.porcent_bar)) !== null && _c !== void 0 ? _c : 0) - 10
                } },
                React.createElement(SView, { style: {
                        borderRadius: 100,
                        width: "100%",
                        height: "100%",
                        borderWidth: 1,
                        borderColor: "#000"
                    } })),
            React.createElement(SView, { style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }, onLayout: function (e) {
                    var _a, _b, _c;
                    if (e.nativeEvent.layout.width <= 0 || e.nativeEvent.layout.height <= 0)
                        return;
                    _this.state.layout = e.nativeEvent.layout;
                    _this.handlePress({ nativeEvent: { offsetX: ((_c = ((_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.width) * (_this.state.porcent_bar)) !== null && _c !== void 0 ? _c : 0) } });
                    // this.setState({ ...this.state })
                }, activeOpacity: 1, onPress: this.handlePress.bind(this) })));
    };
    ColorBar.prototype.decimalToHex = function (decimal) {
        // Convierte el número decimal a hexadecimal
        var hex = parseInt(decimal).toString(16);
        // Agrega un 0 al principio si el resultado tiene una longitud de 1
        var paddedHex = hex.length === 1 ? "0" + hex : hex;
        // Retorna el valor hexadecimal
        return paddedHex;
    };
    ColorBar.prototype.hexToRgb = function (hex) {
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
    return ColorBar;
}(Component));
export default ColorBar;
