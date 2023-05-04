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
import { SView } from '../../..';
var skeleton = /** @class */ (function (_super) {
    __extends(skeleton, _super);
    function skeleton(props) {
        var _this = _super.call(this, props) || this;
        _this.animation = new Animated.Value(0);
        _this.state = {};
        return _this;
    }
    skeleton.prototype.componentDidMount = function () {
        var _this = this;
        Animated.loop(Animated.timing(this.animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        }), {}).start(function () {
            _this.animation.setValue(0);
        });
    };
    skeleton.prototype.render = function () {
        if (this.props.hidden)
            return null;
        var style_parent = this.props.style;
        var style = __assign(__assign({}, style_parent), { backgroundColor: this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: ["#AAAAAA22", "#44444422"]
            }) });
        return (React.createElement(SView, __assign({ animated: true }, this.props, { style: style })));
    };
    return skeleton;
}(Component));
export default skeleton;
