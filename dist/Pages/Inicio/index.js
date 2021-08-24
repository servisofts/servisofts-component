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
import { SView, SText, SPage, SNavigation, } from '../../index';
var Inicio = /** @class */ (function (_super) {
    __extends(Inicio, _super);
    function Inicio(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Inicio.prototype.render = function () {
        return (React.createElement(SPage, { title: "Servisofts Component" },
            React.createElement(SView, { col: "xs-12", style: { padding: 8 } },
                React.createElement(SText, { center: true, col: "xs-12", fontSize: 24, bold: true, justify: true }, "Servisofts - Component"),
                React.createElement(SView, { style: { height: 16 } }),
                React.createElement(SText, { col: "xs-12", bold: true, fontSize: 18, justify: true }, "Sobre SComponent!"),
                React.createElement(SView, { style: { height: 8 } }),
                React.createElement(SText, { col: "xs-12", fontSize: 16, justify: true }, "Servisofts Component es una libreria en Android, IOS & Web para facilitar el desarrollo en React-Native-Web. "),
                React.createElement(SView, { style: { height: 16 } }),
                React.createElement(SText, { col: "xs-12", bold: true, fontSize: 18 }, "En que nos ayuda SComponent?"),
                React.createElement(SView, { style: { height: 8 } }),
                React.createElement(SText, { col: "xs-12", fontSize: 16, justify: true }, "SComponent tiene bastantes funcionalidades, comensando con un sistema de regillas ( xs - sm - md - lg - xl ) que nos permite crear diseños responsive al modo de bootstrap. "),
                React.createElement(SText, { col: "xs-12", fontSize: 16, justify: true }, "Tambien cuenta con la implementacion de temas ( default - dark ) "),
                React.createElement(SText, { col: "xs-12", fontSize: 16, justify: true }, "Facil implementacion de Navigation V5 "),
                React.createElement(SText, { col: "xs-12", fontSize: 16, justify: true }, "Paquetes de iconos y mas componentes que podemos ver en: "),
                React.createElement(SText, { col: "xs-12", fontSize: 16, bold: true, underLine: true, onPress: function () {
                        SNavigation.navigate("scomponent/SIcon");
                    } }, "Ver SIcon"),
                React.createElement(SView, { style: { height: 8 } }),
                React.createElement(SView, { style: { height: 8 } }))));
    };
    return Inicio;
}(Component));
export default Inicio;
