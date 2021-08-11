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
import React, { Component } from 'react';
import { View } from 'react-native';
import SThread from '../SThread/index';
import SStorage from '../SStorage';
var STheme = /** @class */ (function (_super) {
    __extends(STheme, _super);
    function STheme(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        STheme.instance = _this;
        _this.state = {
            select: !_this.props.initialTheme ? "default" : _this.props.initialTheme
        };
        // this.repaint();
        SStorage.getItem("themeState", function (data) {
            if (data) {
                _this.select(data);
            }
            else {
                SStorage.setItem("themeState", _this.state.select);
            }
        });
        return _this;
    }
    STheme.select = function (theme) {
        if (!this.instance) {
            return "error";
        }
        return this.instance.select(theme);
    };
    ;
    STheme.change = function () {
        if (!this.instance) {
            return "error";
        }
        return this.instance.change();
    };
    ;
    STheme.prototype.select = function (theme) {
        if (!this.props.themes[theme]) {
            return "Theme not found ";
        }
        this.state.select = theme;
        SStorage.setItem("themeState", theme);
        this.setState({ select: theme });
    };
    STheme.prototype.change = function () {
        this.state.select = this.state.select != "default" ? "default" : "dark";
        SStorage.setItem("themeState", this.state.select);
        this.setState({
            lastLoad: new Date().getTime()
        });
    };
    STheme.prototype.repaint = function () {
        var _this = this;
        if (STheme.color != this.props.themes[this.state.select]) {
            STheme.color = this.props.themes[this.state.select];
            if (this.state.lastLoad) {
                new SThread(10, "stheme-change", true).start(function () {
                    _this.setState({
                        lastLoad: new Date().getTime()
                    });
                });
                return React.createElement(View, null);
            }
            else {
                this.state.lastLoad = new Date().getTime();
            }
        }
        new SThread(10, "report-onload-change", true).start(function () {
            if (_this.props.onLoad) {
                _this.props.onLoad(STheme.color);
            }
        });
        return this.props.children;
    };
    STheme.prototype.render = function () {
        return this.repaint();
    };
    STheme.color = {
        barStyle: "dark-content",
        barColor: "#000000",
        background: "#000000",
        primary: "#000000",
        secondary: "#000000"
    };
    return STheme;
}(Component));
export default STheme;
