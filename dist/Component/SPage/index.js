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
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import SNavBar from '../SNavBar/index';
import SView from '../SView/index';
import SNavigation from '../SNavigation';
var SPage = /** @class */ (function (_super) {
    __extends(SPage, _super);
    function SPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SPage.setBackground = function (background) {
        SPage.backgroundComponent = background;
    };
    SPage.prototype.getNavBar = function () {
        if (this.props.hidden)
            return React.createElement(View, null);
        if (SNavigation.navBar)
            return React.createElement(SNavigation.navBar, __assign({}, this.props));
        return React.createElement(SNavBar, __assign({}, this.props));
    };
    SPage.prototype.getScroll = function () {
        if (this.props.disableScroll)
            return React.createElement(SView, { center: this.props.center, col: "xs-12", flex: true }, this.props.children);
        return React.createElement(ScrollView, { style: {
                flex: 1,
                width: "100%"
            }, contentContainerStyle: {
                width: "100%"
            } },
            React.createElement(SView, { style: {
                    width: '100%',
                    flex: 1
                }, center: this.props.center }, this.props.children));
    };
    SPage.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-12", style: {
                flex: 1,
                height: '100%'
            } },
            React.createElement(KeyboardAvoidingView, { behavior: Platform.OS === "ios" ? "padding" : "height", style: {
                    flex: 1
                } },
                this.getNavBar(),
                React.createElement(SView, { col: "xs-12", style: {
                        flex: 1,
                        height: "100%",
                        overflow: "hidden"
                    } },
                    SPage.backgroundComponent,
                    this.getScroll()))));
    };
    SPage.backgroundComponent = (React.createElement(View, { style: {
            position: "absolute",
            width: "120%",
            height: "120%"
        } }));
    return SPage;
}(Component));
export default SPage;
