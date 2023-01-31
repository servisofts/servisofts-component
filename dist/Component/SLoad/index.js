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
import { ActivityIndicator } from 'react-native';
import STheme from '../STheme';
import SView from '../SView';
var SLoad = /** @class */ (function (_super) {
    __extends(SLoad, _super);
    function SLoad(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SLoad.prototype.render = function () {
        var _a;
        var color = STheme.color.text ? STheme.color.text : STheme.color.secondary;
        return (React.createElement(SView, { col: "xs-12", center: true },
            React.createElement(ActivityIndicator, __assign({ color: (_a = this.props.color) !== null && _a !== void 0 ? _a : color }, this.props))));
    };
    return SLoad;
}(Component));
export default SLoad;
