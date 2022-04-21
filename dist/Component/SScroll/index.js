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
import { ScrollView } from 'react-native';
var SScroll = /** @class */ (function (_super) {
    __extends(SScroll, _super);
    function SScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SScroll.prototype.render = function () {
        return (React.createElement(ScrollView, __assign({ showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, contentContainerStyle: {
                alignItems: this.props.center ? "center" : "flex-start",
                justifyContent: this.props.center ? "center" : "flex-start",
                flexGrow: 1
            } }, this.props), this.props.children));
    };
    return SScroll;
}(Component));
export default SScroll;
