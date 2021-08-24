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
import { View } from 'react-native';
import { SPopupOpen, SText, STheme, SView, SIcon } from '../../../../index';
var Opciones = /** @class */ (function (_super) {
    __extends(Opciones, _super);
    function Opciones(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Opciones.prototype.getListaHeaders = function () {
        var _this = this;
        return this.props.header.map(function (obj, i) {
            return React.createElement(SView, { row: true, col: "xs-6 md-4", style: {
                    height: 30,
                    alignItems: "center"
                }, onPress: function () {
                    _this.props.header[i] = __assign(__assign({}, obj), { hidden: !obj.hidden });
                    _this.props.setHeader(_this.props.header);
                } },
                React.createElement(View, { style: {
                        width: 20,
                        height: 20,
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: STheme.color.secondary,
                        backgroundColor: (obj.hidden ? "transparent" : STheme.color.secondary)
                    } }),
                React.createElement(SView, { col: "xs-8", style: {
                        height: "100%",
                        marginStart: 8,
                        justifyContent: "center"
                    } },
                    React.createElement(SText, null, obj.label)));
        });
    };
    Opciones.prototype.getOpcionesPopup = function () {
        return React.createElement(SView, { center: true, style: {
                width: 500,
                maxWidth: "100%",
                maxHeight: "100%",
                height: 500,
                backgroundColor: STheme.color.background,
                borderRadius: 8
            } },
            React.createElement(SView, { row: true, center: true, col: "xs-11" }, this.getListaHeaders()));
    };
    Opciones.prototype.render = function () {
        var _this = this;
        return (React.createElement(SView, { style: {
                width: 30,
                height: 24,
                padding: 2
            }, onPress: function () {
                SPopupOpen({
                    key: "2asda",
                    content: (_this.getOpcionesPopup())
                });
            } },
            React.createElement(SIcon, { name: 'Engranaje', fill: STheme.color.secondary })));
    };
    return Opciones;
}(Component));
export default Opciones;
