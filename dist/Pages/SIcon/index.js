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
import SIcon from '../../Component/SIcon';
import LocalImg, { IconsVariant } from "../../img/index";
import { SView, SText, SPage, } from '../../index';
var SIconPage = /** @class */ (function (_super) {
    __extends(SIconPage, _super);
    function SIconPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SIconPage.prototype.getIcon = function (name) {
        return React.createElement(SView, { col: "xs-4 sm-3 md-2 lg-1.5", colSquare: true, center: true },
            React.createElement(SView, { col: "xs-8", colSquare: true, center: true },
                React.createElement(SIcon, { name: name })),
            React.createElement(SText, { fontSize: 10, center: true }, name));
    };
    SIconPage.prototype.getIcons = function () {
        var _this = this;
        var obj = __assign(__assign({}, LocalImg), IconsVariant);
        return Object.keys(obj).map(function (name) { return _this.getIcon(name); });
    };
    SIconPage.prototype.render = function () {
        return (React.createElement(SPage, { title: "SIcon" },
            React.createElement(SView, { col: "xs-12", row: true }, this.getIcons())));
    };
    return SIconPage;
}(Component));
export default SIconPage;
