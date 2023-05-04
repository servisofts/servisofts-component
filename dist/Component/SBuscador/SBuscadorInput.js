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
import { SIcon, SInput, SText, STheme, SThread, SView } from '../..';
var SBuscadorInput = /** @class */ (function (_super) {
    __extends(SBuscadorInput, _super);
    function SBuscadorInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SBuscadorInput.prototype.proccessData = function () {
        this.data = [];
        if (!this.props.data)
            return;
        // if()
    };
    SBuscadorInput.prototype.render = function () {
        var _this = this;
        this.proccessData();
        // if (!this.props.buscador) return null;
        var cant = 0;
        return React.createElement(SView, { col: "xs-12" },
            React.createElement(SInput, { icon: React.createElement(SView, { center: true, col: "xs-12", height: true },
                    React.createElement(SIcon, { name: "Search", fill: STheme.color.gray, width: 22 })), iconR: React.createElement(SView, { center: true, style: {
                        padding: 4
                    }, height: true },
                    React.createElement(SText, { fontSize: 12, color: STheme.color.gray }, "(" + (cant !== null && cant !== void 0 ? cant : 0) + ")")), placeholder: "Buscar...", ref: function (r) { return _this._buscador = r; }, onChangeText: function (val) {
                    new SThread(500, "SBuscadorInput", true).start(function () {
                        if (!_this.props.onChange)
                            return;
                        _this.props.onChange(val);
                    });
                } }));
    };
    return SBuscadorInput;
}(Component));
export default SBuscadorInput;
