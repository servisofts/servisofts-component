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
import { View, Platform } from 'react-native';
import Indicator from './Indicator';
import Scroll from './Scroll';
var SScrollView2 = /** @class */ (function (_super) {
    __extends(SScrollView2, _super);
    function SScrollView2(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.setRef("this", _this);
        return _this;
    }
    SScrollView2.prototype.setRef = function (key, ref) {
        if (!this.state.ref) {
            this.state.ref = {};
        }
        this.state.ref[key] = ref;
    };
    SScrollView2.prototype.getRef = function (key) {
        return this.state.ref[key];
    };
    SScrollView2.prototype.setEnabled = function (en) {
        this.getRef("scrollh").setEnabled(en);
        this.getRef("scrollv").setEnabled(en);
        if (Platform.OS == "web") {
            // if (!en) {
            //     document.ontouchmove = preventDefault;
            // } else {
            //     document.ontouchmove = () => { }
            // }
        }
        else {
        }
    };
    SScrollView2.prototype.render = function () {
        var _this = this;
        return (React.createElement(View, { style: {
                width: "100%",
                flex: 1
            } },
            React.createElement(View, { style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    alignItems: "center"
                }, onLayout: function (evt) {
                } },
                React.createElement(View, { style: __assign({ maxWidth: "100%", height: "100%", minWidth: "100%" }, (this.props.disableHorizontal ? {
                        minWidth: "100%",
                        alignItems: "center"
                    } : {})) },
                    React.createElement(Scroll, { disableHorizontal: this.props.disableHorizontal, ref: function (ref) { _this.setRef("scrollh", ref); }, horizontal: true, contentContainerStyle: this.props.contentContainerStyle },
                        React.createElement(View, { style: __assign({ width: "100%" }, (this.props.disableHorizontal ? {
                                // minWidth: "100%",
                                minHeight: "100%",
                                alignItems: "center"
                            } : {})) },
                            React.createElement(Scroll, { disableHorizontal: this.props.disableHorizontal, ref: function (ref) { _this.setRef("scrollv", ref); }, contentContainerStyle: this.props.contentContainerStyle, onScroll: this.props.onScroll, onPageFinish: this.props.onPageFinish },
                                React.createElement(View, { style: {
                                        width: "100%",
                                        height: "100%",
                                        flex: 1
                                    } },
                                    React.createElement(View, { style: { width: "100%", height: this.props.header.style.height } }),
                                    this.props.children)),
                            React.createElement(View, { style: __assign({ position: "absolute", width: "100%", top: 0, left: 0 }, this.props.header.style) }, this.props.header.content))),
                    React.createElement(Indicator, { ref: function (ref) {
                            if (ref) {
                                ref.setScroll(_this.state.ref["scrollh"]);
                            }
                            _this.setRef("indicatorH", ref);
                        } }),
                    React.createElement(Indicator, { ref: function (ref) {
                            if (ref) {
                                ref.setScroll(_this.state.ref["scrollv"]);
                            }
                            _this.setRef("indicatorV", ref);
                        } })))));
    };
    SScrollView2.defaultProps = {
        disableHorizontal: false,
        header: { style: {}, content: React.createElement(View, null) },
        footer: null
    };
    return SScrollView2;
}(Component));
export default SScrollView2;
