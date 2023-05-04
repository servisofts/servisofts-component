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
import { SView, SText, SPage, SNavigation, SIcon, SMath, } from '../../index';
var Inicio = /** @class */ (function (_super) {
    __extends(Inicio, _super);
    function Inicio(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Inicio.prototype.getIcon = function (_a) {
        var name = _a.name, page = _a.page, icon = _a.icon;
        return React.createElement(SView, { height: 100, width: 100, center: true, onPress: function () {
                SNavigation.navigate(page);
            } },
            React.createElement(SView, { col: "xs-8", colSquare: true },
                React.createElement(SIcon, { name: icon })),
            React.createElement(SText, null, name));
    };
    Inicio.prototype.getLista = function () {
        return React.createElement(SView, { col: "xs-12", row: true },
            this.getIcon({ name: "Documentacion", page: "scomponent/docs", icon: "Servisofts" }),
            this.getIcon({ name: "Create SVG", page: "scomponent/SvgToReact", icon: "Cheque" }),
            this.getIcon({ name: "Iconos", page: "scomponent/SIcon", icon: "Profanity" }),
            this.getIcon({ name: "Formulario", page: "scomponent/Formulario", icon: "Alert" }),
            this.getIcon({ name: "STable", page: "scomponent/STable", icon: "Excel" }),
            this.getIcon({ name: "NewTable", page: "scomponent/NewTable", icon: "Excel" }),
            this.getIcon({ name: "SGradient", page: "scomponent/SGradient", icon: "Box" }),
            this.getIcon({ name: "SView", page: "scomponent/SView", icon: "Box" }),
            this.getIcon({ name: "SDate", page: "scomponent/SDate", icon: "Calendar" }),
            this.getIcon({ name: "SLocation", page: "scomponent/SLocation", icon: "Marker" }),
            this.getIcon({ name: "SMath", page: "scomponent/SMath", icon: "Alert" }));
    };
    Inicio.prototype.render = function () {
        return (React.createElement(SPage, { title: "Servisofts Component" },
            React.createElement(SView, { col: "xs-12", style: { padding: 8 } },
                React.createElement(SText, null, SMath.formatMoney(232323.0323023)),
                this.getLista())));
    };
    return Inicio;
}(Component));
export default Inicio;
