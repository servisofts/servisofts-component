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
import SBuscadorInput from './SBuscadorInput';
var SBuscador = /** @class */ (function (_super) {
    __extends(SBuscador, _super);
    function SBuscador(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SBuscador.buscarObj = function (data, buscador) {
        return data;
    };
    SBuscador.validate = function (data, buscador) {
        if (!buscador)
            return data;
        var val = buscador.toLowerCase();
        val = val.trim();
        var str = JSON.stringify(data).toLowerCase();
        var arr_busqueda = val.split(" ");
        var peso = 0;
        arr_busqueda.map(function (palabra_a_buscar) {
            var expreg = new RegExp(":.*?" + palabra_a_buscar + ".*?(,|})", "i");
            if (expreg.test(str)) {
                if (palabra_a_buscar + "".length < 2) {
                    return;
                }
                peso++;
                // return data;
            }
        });
        if (peso < arr_busqueda.length)
            return null;
        if (!peso)
            return null;
        data.peso = peso;
        return data;
    };
    // No tocar la version antigua
    SBuscador.validate_old = function (data, buscador) {
        if (!buscador)
            return data;
        var val = buscador.toLowerCase();
        var str = JSON.stringify(data).toLowerCase();
        var expreg = new RegExp(":.*?" + val + ".*?(,|})", "i");
        if (expreg.test(str)) {
            return data;
        }
        return null;
    };
    SBuscador.filter = function (_a) {
        var _this = this;
        var data = _a.data, txt = _a.txt;
        if (typeof data === 'object' && !Array.isArray(data)) {
            // Filtramos tipo objeto
            var objFinal = {};
            Object.keys(data).map(function (key) {
                if (!_this.validate(data[key], txt))
                    return;
                objFinal[key] = data[key];
            });
            return objFinal;
        }
        else if (Array.isArray(data)) {
            // Filtramos tipo array
            return data.filter(function (a) { return _this.validate(a, txt); });
        }
        return data;
    };
    SBuscador.prototype.render = function () {
        return (React.createElement(SBuscadorInput, __assign({}, this.props)));
    };
    return SBuscador;
}(Component));
export default SBuscador;
