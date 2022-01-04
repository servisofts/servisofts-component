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
import { Text } from 'react-native';
import STheme from '../STheme/index';
import SView from '../SView/index';
var SText = /** @class */ (function (_super) {
    __extends(SText, _super);
    function SText(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SText.prototype.render = function () {
        return (React.createElement(SView, __assign({}, this.props),
            React.createElement(Text, { style: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (this.props.font ? { fontFamily: this.props.font } : (STheme.color.font ? { fontFamily: STheme.color.font } : null))), { color: !STheme.color.text ? STheme.color.secondary : STheme.color.text }), (!this.props.center ? {} : {
                    textAlign: "center"
                })), (!this.props.primary ? {} : {
                    color: STheme.color.primary
                })), (!this.props.secondary ? {} : {
                    color: STheme.color.secondary
                })), (!this.props.color ? {} : {
                    color: this.props.color
                })), (!this.props.bold ? {} : {
                    fontWeight: "bold"
                })), (!this.props.fontSize ? {} : {
                    fontSize: this.props.fontSize
                })), (!this.props.underLine ? {} : {
                    textDecorationLine: "underline"
                })), (!this.props.capitalize ? {} : {
                    textTransform: "capitalize"
                })), (!this.props.justify ? {} : {
                    textAlign: "justify"
                })), this.props.style) }, this.props.children)));
    };
    return SText;
}(Component));
export default SText;
