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
import SHr from '../SHr';
import SText from '../SText';
import ColorBar from './ColorBar';
import BlackToWithe from './BlackToWithe';
var SColorPicker = /** @class */ (function (_super) {
    __extends(SColorPicker, _super);
    function SColorPicker(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.state = {
            color: (_a = _this.props.defaultValue) !== null && _a !== void 0 ? _a : "#ff0000"
        };
        return _this;
    }
    SColorPicker.prototype.render = function () {
        var _this = this;
        return React.createElement(SView, __assign({ col: "xs-12", padding: 4, height: true }, this.props),
            React.createElement(SView, { flex: true, col: "xs-12" },
                React.createElement(SView, { col: "xs-12", center: true, row: true, height: true },
                    React.createElement(SView, { col: "xs-3", height: true, backgroundColor: this.state.color, center: true },
                        React.createElement(SText, { bold: true }, this.state.color)),
                    React.createElement(SView, { backgroundColor: '#fff', col: "xs-9", height: true, style: {
                        // overflow: "hidden"
                        } },
                        React.createElement(BlackToWithe, { defaultValue: this.props.defaultValue, color: this.state.color_bar, onChange: function (e) {
                                _this.setState({ color: e });
                                if (_this.props.onChange)
                                    _this.props.onChange(e);
                            } })))),
            React.createElement(SHr, null),
            React.createElement(ColorBar, { defaultValue: this.props.defaultValue, onChange: function (e) {
                    _this.setState({ color_bar: e });
                } }));
    };
    return SColorPicker;
}(Component));
export default SColorPicker;
