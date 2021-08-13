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
import { SText, STheme, SView } from '../../../index';
var SelectAlert = /** @class */ (function (_super) {
    __extends(SelectAlert, _super);
    function SelectAlert(props) {
        var _this = _super.call(this, props) || this;
        _this.getActions = function () {
            if (!_this.props.actionTypes) {
                return [];
            }
            if (_this.props.actionTypes.length <= 0) {
                return [];
            }
            return _this.props.actionTypes.map(function (obj) {
                return _this.state.actions[obj];
            });
        };
        _this.state = {
            actions: {
                edit: { label: "Editar", icon: "editar", onPress: function () { _this.props.onAction("edit"); } },
                "delete": { label: "Eliminar", icon: "eliminar", onPress: function () { _this.props.onAction("delete"); } }
            }
        };
        return _this;
    }
    SelectAlert.prototype.render = function () {
        return (React.createElement(SView, { center: true, style: {
                width: 500,
                maxWidth: "100%",
                maxHeight: "100%",
                height: 400,
                backgroundColor: STheme.color.background,
                borderRadius: 8
            } },
            React.createElement(SText, null, "Acciones"),
            React.createElement(SView, { row: true, center: true, col: "xs-11" })));
    };
    return SelectAlert;
}(Component));
export default SelectAlert;
