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
import { ScrollView, Platform } from 'react-native';
var preventDefault = function (e) { return e.preventDefault(); };
var Scroll = /** @class */ (function (_super) {
    __extends(Scroll, _super);
    function Scroll(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            direction: (_this.props.horizontal ? "Horizontal" : "Vertical")
        };
        _this.enabled = true;
        return _this;
    }
    Scroll.prototype.componentWillUnmount = function () {
        this.setEnabled(true);
    };
    Scroll.prototype.getProps = function () {
        return this.props;
    };
    Scroll.prototype.getLayout = function () {
        return this.layout;
    };
    Scroll.prototype.getContentSize = function () {
        return this.contentSize;
    };
    Scroll.prototype.getState = function () {
        return this.state;
    };
    Scroll.prototype.setIndicator = function (ref) {
        this.indicator = ref;
    };
    Scroll.prototype.isHorizontal = function () {
        return this.props.horizontal;
    };
    Scroll.prototype.noscroll = function () {
        window.scrollTo(0, 0);
    };
    Scroll.prototype.setEnabled = function (bool) {
        if (Platform.OS == "web") {
            if (!bool) {
                document.ontouchmove = preventDefault;
                // alert("Sadasd")
                window.addEventListener("scroll", this.noscroll);
            }
            else {
                window.removeEventListener("scroll", this.noscroll);
                document.ontouchmove = function () { };
            }
        }
        this.enabled = bool;
        this.scrollRef.setNativeProps({ scrollEnabled: bool });
    };
    Scroll.prototype.moveScroll = function (_a) {
        var x = _a.x, y = _a.y;
        this.scrollRef.scrollTo({ x: x, y: y, animated: false });
    };
    Scroll.prototype.render = function () {
        var _this = this;
        return (React.createElement(ScrollView, { horizontal: this.props.horizontal, ref: function (ref) { _this.scrollRef = ref; }, disableScrollViewPanResponder: true, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, nestedScrollEnabled: true, bounces: false, scrollEventThrottle: 16, onContentSizeChange: function (w, h) {
                _this.contentSize = { width: w, height: h };
                if (_this.indicator) {
                    _this.indicator.repaint(_this);
                }
                // console.log(this.state.direction, "onContentSizeChange", { width: w, height: h })
            }, onLayout: function (evt) {
                _this.layout = evt.nativeEvent.layout;
                if (_this.indicator) {
                    _this.indicator.repaint(_this);
                }
            }, onScroll: function (evt) {
                _this.scrolldata = evt.nativeEvent;
                if (_this.props.onScroll)
                    _this.props.onScroll(evt);
                if (_this.props.onPageFinish) {
                    var evn = evt.nativeEvent;
                    var posy = evn.contentOffset.y + evn.layoutMeasurement.height;
                    var heigth = evn.contentSize.height;
                    if (heigth - posy <= 0) {
                        _this.props.onPageFinish();
                    }
                }
                if (!_this.enabled) {
                    return;
                }
                if (_this.indicator) {
                    _this.indicator.onScroll(evt.nativeEvent);
                }
                if (_this.indicator) {
                    _this.indicator.onScroll(evt.nativeEvent);
                }
            }, style: __assign({}, (this.props.disableHorizontal ? {
                width: "100%",
                height: "100%"
            } : {})), contentContainerStyle: [__assign({}, (this.props.disableHorizontal ? {
                    maxWidth: "100%",
                    minWidth: "100%",
                    minHeight: "100%"
                } : {})), this.props.contentContainerStyle] }, this.props.children));
    };
    return Scroll;
}(Component));
export default Scroll;
