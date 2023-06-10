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
var BlackToWithe = /** @class */ (function (_super) {
    __extends(BlackToWithe, _super);
    function BlackToWithe(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePress = function (e) {
            if (!_this.state.layout || !_this.props.color)
                return;
            console.log(_this.state);
            var w = _this.state.layout.width;
            var h = _this.state.layout.height;
            var ox = e.nativeEvent.offsetX;
            var oy = e.nativeEvent.offsetY;
            var of = ((ox / w) - (oy / h));
            var v1 = _this.hexToRgb(_this.props.color);
            var color = _this.props.color;
            _this.lastColor = _this.props.color;
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
            _this.setState({ pos_body: { x: ox, y: oy }, px: e.nativeEvent.offsetX / w, py: e.nativeEvent.offsetY / h, color: color });
            if (_this.props.onChange)
                _this.props.onChange(color);
        };
        _this.lastColor = "";
        _this.state = __assign({}, _this.getProximity());
        return _this;
    }
    BlackToWithe.prototype.findMaxValue = function (arr) {
        var maxValue = -Infinity; // Start with negative infinity as the initial maximum value
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }
        return maxValue;
    };
    BlackToWithe.prototype.getProximity = function () {
        if (!this.props.defaultValue || !this.props.color)
            return { px: 0.500, py: 0.500 };
        // let rgb = this.hexToRgb(this.props.defaultValue);
        var v1 = this.hexToRgb(this.props.color);
        var v2 = this.hexToRgb(this.props.defaultValue);
        var d_r = Math.abs(v1.r - v2.r);
        var d_g = Math.abs(v1.g - v2.g);
        var d_b = Math.abs(v1.b - v2.b);
        var s = this.findMaxValue([d_r, d_g, d_b]);
        if (v1.r + v1.g + v1.b > v2.r + v2.g + v2.b) {
            s *= -1;
        }
        // let val = 99999;
        return { px: 0.5 + (0.5 * (s / 255)), py: 0.5 - (0.5 * (s / 255)) };
    };
    BlackToWithe.prototype.componentDidMount = function () {
    };
    BlackToWithe.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        // if (this.props.color) return <SLoad />
        if (this.props.color && !this.lastColor) {
            this.state = __assign(__assign({}, this.state), this.getProximity());
            this.handlePress({ nativeEvent: { offsetX: ((_c = ((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.width) * (this.state.px)) !== null && _c !== void 0 ? _c : 0), offsetY: ((_g = ((_f = (_e = (_d = this.state) === null || _d === void 0 ? void 0 : _d.layout) === null || _e === void 0 ? void 0 : _e.height) !== null && _f !== void 0 ? _f : 0) * (this.state.py)) !== null && _g !== void 0 ? _g : 0) } });
        }
        else {
            // this.handlePress({ nativeEvent: { offsetX: (this.state?.layout?.width * (this.state.px) ?? 0), offsetY: ((this.state?.layout?.height ?? 0) * (this.state.py) ?? 0) } })
            if (this.props.color != this.lastColor && this.state.layout) {
                this.handlePress({ nativeEvent: { offsetX: ((_k = ((_j = (_h = this.state) === null || _h === void 0 ? void 0 : _h.layout) === null || _j === void 0 ? void 0 : _j.width) * (this.state.px)) !== null && _k !== void 0 ? _k : 0), offsetY: ((_p = ((_o = (_m = (_l = this.state) === null || _l === void 0 ? void 0 : _l.layout) === null || _m === void 0 ? void 0 : _m.height) !== null && _o !== void 0 ? _o : 0) * (this.state.py)) !== null && _p !== void 0 ? _p : 0) } });
            }
        }
        return (React.createElement(SView, { height: true, col: "xs-12" },
            React.createElement(SGradient, { colors: ["#000000", this.props.color, "#ffffff"], deg: 45 }),
            React.createElement(SView, { style: {
                    position: "absolute",
                    borderRadius: 100,
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderColor: "#ffffff",
                    left: ((_s = (_r = (_q = this.state) === null || _q === void 0 ? void 0 : _q.pos_body) === null || _r === void 0 ? void 0 : _r.x) !== null && _s !== void 0 ? _s : 0) - 10,
                    top: ((_v = (_u = (_t = this.state) === null || _t === void 0 ? void 0 : _t.pos_body) === null || _u === void 0 ? void 0 : _u.y) !== null && _v !== void 0 ? _v : 0) - 10
                } },
                React.createElement(SView, { style: {
                        borderRadius: 100,
                        width: "100%",
                        height: "100%",
                        borderWidth: 1,
                        borderColor: "#000"
                    } })),
            React.createElement(SView, { col: "xs-12", height: true, activeOpacity: 1, onLayout: function (e) {
                    if (e.nativeEvent.layout.height <= 0)
                        return;
                    _this.setState({ layout: e.nativeEvent.layout });
                    // this.handlePress({ nativeEvent: { offsetX: (this.state?.layout?.width * (this.state.px) ?? 0), offsetY: (this.state?.layout?.height * (this.state.py) ?? 0) } })
                    // this.state.layot = e.nativeEvent.layout
                }, style: {
                    position: "absolute"
                }, onPress: this.handlePress.bind(this) })));
    };
    BlackToWithe.prototype.decimalToHex = function (decimal) {
        // Convierte el número decimal a hexadecimal
        var hex = parseInt(decimal).toString(16);
        // Agrega un 0 al principio si el resultado tiene una longitud de 1
        var paddedHex = hex.length === 1 ? "0" + hex : hex;
        // Retorna el valor hexadecimal
        return paddedHex;
    };
    BlackToWithe.prototype.hexToRgb = function (hex) {
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
    return BlackToWithe;
}(Component));
export default BlackToWithe;
