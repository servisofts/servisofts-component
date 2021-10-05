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
import { SText, STheme, SView } from '../../../../index';
import { SInput } from '../../../SInput';
import SThread from '../../../SThread';
var SHAjustes = /** @class */ (function (_super) {
    __extends(SHAjustes, _super);
    function SHAjustes(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SHAjustes.prototype.getOrder = function () {
        var _this = this;
        return React.createElement(SView, { col: "xs-12", row: true, center: true },
            React.createElement(SText, null, "Order: "),
            React.createElement(SInput, { type: "select", options: ["no", "asc", "desc"], customStyle: "calistenia", style: {
                    flex: 1,
                    height: 30,
                    // backgroundColor: STheme.color.primary + "44",
                    borderRadius: 4
                }, defaultValue: this.data.order ? this.data.order : "no", onChangeText: function (val) {
                    new SThread(300, "buscadorTablaProps", true).start(function () {
                        if (_this.props.changeOrder)
                            _this.props.changeOrder(val);
                    });
                } }));
    };
    SHAjustes.prototype.getFiltros = function () {
        var _this = this;
        return React.createElement(SView, { flex: true, row: true },
            React.createElement(SInput, { customStyle: "calistenia", style: {
                    flex: 1,
                    height: 30,
                    // backgroundColor: STheme.color.primary + "44",
                    borderRadius: 4
                }, defaultValue: this.data.filtro, onChangeText: function (val) {
                    new SThread(300, "buscadorTablaProps", true).start(function () {
                        if (_this.props.changeFiltro)
                            _this.props.changeFiltro(val);
                    });
                } }));
    };
    SHAjustes.prototype.render = function () {
        this.data = this.props.data;
        return (React.createElement(SView, { withoutFeedback: true, style: {
                width: 300,
                height: 300,
                backgroundColor: STheme.color.background,
                borderRadius: 8,
                padding: 4
            } },
            React.createElement(SView, { col: "xs-12", center: true, height: 30 },
                React.createElement(SText, null,
                    " ",
                    this.data.label,
                    " ")),
            this.getOrder(),
            React.createElement(SView, { col: "xs-12", style: {
                    marginTop: 8
                }, row: true, center: true },
                React.createElement(SText, null, "Filtro : "),
                this.getFiltros())));
    };
    return SHAjustes;
}(Component));
export default SHAjustes;
