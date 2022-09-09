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
import { Animated } from 'react-native';
import { SView, SText, STheme } from '../../index';
import SAPanResponder from '../SAnimated/SAPanResponder';
// } & SViewProps
var SRangeSlider = /** @class */ (function (_super) {
    __extends(SRangeSlider, _super);
    function SRangeSlider(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this.state = {
            height: 8,
            markerSize: 24,
            value: (_b = ((_a = _this.props.value) !== null && _a !== void 0 ? _a : _this.props.defaultValue)) !== null && _b !== void 0 ? _b : 0
        };
        _this.pos = new Animated.Value(_this.formatValue(_this.state.value));
        _this.createPan();
        return _this;
    }
    SRangeSlider.prototype.formatValue = function (val) {
        if (val > this.props.range[1])
            return 1;
        if (val < this.props.range[0])
            return 0;
        var a = this.props.range[1] - this.props.range[0];
        var b = val - this.props.range[0];
        return b / a;
    };
    SRangeSlider.prototype.getValue = function (fixed) {
        if (fixed === void 0) { fixed = 2; }
        var val = this.pos._value;
        var a = this.props.range[1] - this.props.range[0];
        var r = (val * a) + this.props.range[0];
        return r.toFixed(fixed);
    };
    SRangeSlider.prototype.createPan = function () {
        var _this = this;
        this.pan = new SAPanResponder({
            onGrand: function (e, gs) {
                _this.initSize = _this.pos._value;
            },
            onMove: function (e, gs) {
                if (_this.props.value)
                    return;
                var dx = (gs.dx / _this.state.layout.width);
                if (_this.initSize + dx < 0) {
                    _this.pos.setValue(0);
                    return;
                }
                if (_this.initSize + dx > 1) {
                    _this.pos.setValue(1);
                    return;
                }
                _this.pos.setValue(_this.initSize + dx);
                var value = _this.getValue();
                if (_this.props.onChange) {
                    _this.props.onChange(value);
                }
                if (_this.state.value != value) {
                    _this.setState({ value: value });
                }
            },
            onRelease: function () {
            }
        });
    };
    SRangeSlider.prototype.Marcador = function () {
        var _a;
        var layout = this.state.layout;
        if (!layout)
            return;
        var size = this.state.markerSize;
        return React.createElement(SView, __assign({ animated: true, style: {
                width: size,
                height: size,
                top: -((size / 2) - (this.state.height / 2)),
                borderRadius: 100,
                position: "absolute",
                backgroundColor: (_a = this.props.color) !== null && _a !== void 0 ? _a : STheme.color.primary,
                transform: [{
                        translateX: this.pos.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, layout.width - size]
                        })
                    }]
            } }, this.pan.getPanHandlers(), { center: true }),
            React.createElement(SText, { color: STheme.color.secondary, fontSize: 10, bold: true, center: true }, this.getValue(1)));
    };
    SRangeSlider.prototype.render = function () {
        var _this = this;
        var _a;
        return (React.createElement(SView, { col: "xs-12", height: this.state.markerSize, onLayout: function (evt) {
                _this.setState({
                    layout: evt.nativeEvent.layout
                });
            } },
            React.createElement(SView, { col: "xs-12", card: true, height: 8, style: {
                    backgroundColor: (_a = this.props.backgroundColor) !== null && _a !== void 0 ? _a : STheme.color.card,
                    borderRadius: 8
                } }),
            this.Marcador()));
    };
    return SRangeSlider;
}(Component));
export default SRangeSlider;
