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
import SThread from '../SThread/index';
import SStorage from '../SStorage';
import MapStyle from './MapStyle';
var STheme = /** @class */ (function (_super) {
    __extends(STheme, _super);
    function STheme(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        STheme.instance = _this;
        _this.state = {
            isFadeOut: true,
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
        _this.animFadeOut = new Animated.Value(0);
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
    STheme.getTheme = function () {
        if (!this.instance) {
            return "error";
        }
        return this.instance.state.select;
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
    STheme.prototype.componentDidMount = function () {
        this.animar();
    };
    STheme.prototype.animar = function () {
        var _this = this;
        if (this.onAnim)
            return;
        this.setState({ fadeOut: true });
        this.animFadeOut.setValue(0);
        this.onAnim = true;
        Animated.timing(this.animFadeOut, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false
        }).start(function (end) {
            _this.onAnim = false;
            _this.state.isFadeOut = false;
            _this.setState({ isFadeOut: false });
        });
    };
    STheme.prototype.fadeOut = function () {
        if (!this.state.isFadeOut)
            return;
        return React.createElement(Animated.View, { style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                // backgroundColor: "#f0f",
                backgroundColor: this.animFadeOut.interpolate({
                    inputRange: [0, 0.8],
                    outputRange: [STheme.color.primary, STheme.color.background]
                }),
                opacity: this.animFadeOut.interpolate({
                    inputRange: [0, 0.8, 1],
                    outputRange: [1, 0.9, 0]
                })
            } });
    };
    STheme.prototype.repaint = function () {
        var _this = this;
        if (STheme.colorSelect != this.props.themes[this.state.select]) {
            STheme.colorSelect = this.props.themes[this.state.select];
            STheme.color = __assign(__assign(__assign({}, STheme.color), { mapStyle: MapStyle[this.state.select] }), this.props.themes[this.state.select]);
            if (this.state.lastLoad) {
                new SThread(10, "stheme-change", true).start(function () {
                    _this.setState({
                        lastLoad: new Date().getTime()
                    });
                });
                this.animar();
                this.state.isFadeOut = true;
                return (React.createElement(React.Fragment, null, this.fadeOut()));
            }
            else {
                this.state.lastLoad = new Date().getTime();
            }
        }
        if (this.props.onLoad) {
            this.props.onLoad(STheme.color);
        }
        // new SThread(10, "report-onload-change", false).start(() => {
        // })
        return React.createElement(React.Fragment, null,
            this.props.children,
            this.fadeOut());
    };
    STheme.prototype.render = function () {
        return this.repaint();
    };
    STheme.color = {
        barStyle: "dark-content",
        barColor: "#000000",
        background: "#222222",
        primary: "#000000",
        card: "#22222266",
        secondary: "#ffffff",
        success: "#71AF4A",
        warning: "#EF8C38",
        danger: "#DF2732",
        bateon: "#95070C",
        error: "#ff0000",
        info: "#405394",
        black: "#000000",
        white: "#ffffff",
        gray: "#888888",
        lightGray: "#aaaaaa",
        darkGray: "#444444",
        lightBlack: "#666666",
        mapStyle: MapStyle["default"]
    };
    return STheme;
}(Component));
export default STheme;
