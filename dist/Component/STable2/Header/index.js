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
import { SView, SText, STheme } from '../../../index';
import SAPanResponder from '../../SAnimated/SAPanResponder';
import SIcon from '../../SIcon';
import SPopup from '../../SPopup';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.createPan();
        return _this;
    }
    Header.prototype.createPan = function () {
        var _this = this;
        this.pan = new SAPanResponder({
            onGrand: function (e, gs) {
                _this.initSize = _this.props.animWidth._value;
            },
            onMove: function (e, gs) {
                if (_this.initSize + gs.dx <= 50) {
                    _this.props.animWidth.setValue(50);
                    return;
                }
                _this.props.animWidth.setValue(_this.initSize + gs.dx);
            },
            onRelease: function () {
            }
        });
    };
    Header.prototype.render = function () {
        return (React.createElement(SView, { animated: true, height: true, center: true, style: {
                width: this.props.animWidth,
                backgroundColor: STheme.color.primary,
                borderRadius: 4,
                overflow: 'hidden'
            } },
            React.createElement(SView, { row: true, center: true },
                React.createElement(SText, { fontSize: 11, bold: true }, this.props.label),
                this.props.order ? React.createElement(SView, { width: 14, center: true, style: {
                        transform: [{ rotate: (this.props.order != "desc" ? "90deg" : "-90deg") }]
                    } },
                    React.createElement(SIcon, { name: "Arrow", fill: STheme.color.secondary, width: 10 })) : null),
            React.createElement(SView, __assign({}, this.pan.getPanHandlers(), { animated: true, style: {
                    position: "absolute",
                    right: 0,
                    width: 16,
                    zIndex: 99,
                    height: "100%",
                    cursor: "col-resize",
                    alignItems: "flex-end"
                } }),
                React.createElement(SView, { style: {
                        width: 2,
                        height: "100%",
                        backgroundColor: STheme.color.secondary + "66"
                    } })),
            React.createElement(SView, { style: {
                    position: "absolute",
                    width: 16,
                    height: 16,
                    top: 0,
                    left: 0
                }, center: true, onPress: function () {
                    SPopup.alert("ALFO");
                } },
                React.createElement(SIcon, { name: "Menu", fill: STheme.color.secondary + "66", width: 14 }))));
    };
    return Header;
}(Component));
export default Header;
