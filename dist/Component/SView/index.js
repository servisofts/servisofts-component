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
import { View, TouchableOpacity, Animated } from 'react-native';
import SGrid from '../SGrid/index';
var SView = /** @class */ (function (_super) {
    __extends(SView, _super);
    function SView(props) {
        var _this = _super.call(this, props) || this;
        var propsP;
        // if (!propsP) {
        propsP = {};
        // }
        _this.state = {
            params: {
                col: (props.col ? props.col : propsP.col),
                dir: (!props.dir ? (!propsP.dir ? "column" : propsP.dir) : props.dir),
                style: __assign({}, (!props.style ? {} : props.style))
            }
        };
        return _this;
    }
    SView.prototype.getData = function () {
        return this.props.data;
    };
    SView.prototype.render = function () {
        var Element = View;
        if (this.props.onPress) {
            Element = TouchableOpacity;
        }
        if (this.props.animated) {
            Element = Animated.createAnimatedComponent(Element);
        }
        return (React.createElement(SGrid, { colSquare: this.props.colSquare, col: this.state.params.col, style: this.state.params.style },
            React.createElement(Element, __assign({}, this.props, { style: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ width: "100%" }, (this.state.params.dir != "row" ? {} : {
                    flexDirection: "row",
                    flexWrap: 'wrap'
                })), (!this.props.backgroundColor ? {} : {
                    backgroundColor: this.props.backgroundColor
                })), (!this.props.row ? {} : {
                    flexDirection: "row",
                    flexWrap: 'wrap'
                })), (!this.props.colSquare ? {} : {
                    height: "100%"
                })), (!this.props.center ? {} : {
                    alignItems: 'center',
                    justifyContent: 'center'
                })), (!this.props.flex ? {} : {
                    flex: this.props.flex == true ? 1 : this.props.flex
                })), (!this.state.params.style ? {} : this.state.params.style)), this.props.style) }), this.props.children)));
    };
    return SView;
}(Component));
export default SView;
