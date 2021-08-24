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
import { View } from 'react-native';
import { SInput, STheme, SView, SIcon, SThread } from '../../../index';
var SHeadBar = /** @class */ (function (_super) {
    __extends(SHeadBar, _super);
    function SHeadBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SHeadBar.prototype.getAdd = function () {
        var _this = this;
        if (!this.props.onAdd) {
            return React.createElement(View, null);
        }
        return React.createElement(SView, { style: {
                width: 24,
                height: 24,
                marginEnd: 8
            }, onPress: function () {
                // this.props.reload();
                _this.props.onAdd();
            } },
            React.createElement(SIcon, { name: "Icon2", fill: STheme.color.primary }));
    };
    SHeadBar.prototype.render = function () {
        var _this = this;
        return (React.createElement(SView, { row: true, style: {
                width: "100%",
                // backgroundColor:"#f0f",.
                height: 24,
                justifyContent: "center"
            } },
            React.createElement(SView, { col: "xs-12", style: {
                    height: "100%",
                    alignItems: "flex-start"
                } },
                React.createElement(SInput, { col: "xs-12", style: {
                        margin: 0,
                        height: 24
                    }, autoFocus: true, placeholder: "Buscar...", onChangeText: function (text) {
                        new SThread(300, "buscadorTabla", true).start(function () {
                            _this.props.buscar(text);
                        });
                    } }))));
    };
    return SHeadBar;
}(Component));
export default SHeadBar;
