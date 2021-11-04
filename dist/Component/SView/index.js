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
import { View, TouchableOpacity, Animated, Platform } from 'react-native';
import SGrid from '../SGrid/index';
import STheme from '../STheme';
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
    SView.prototype.getLayout = function () {
        return this.layout;
    };
    SView.prototype.getProp = function (prop) {
        return this.props[prop];
    };
    SView.prototype.getData = function () {
        return this.props.data;
    };
    SView.prototype.render = function () {
        var _this = this;
        var otherProps = __assign({}, this.props);
        delete otherProps.height;
        var Element = View;
        if (this.props.onPress) {
            Element = TouchableOpacity;
        }
        if (this.props.withoutFeedback) {
            Element = TouchableOpacity;
            otherProps.activeOpacity = 1;
            // if (this.props.animated) {
            // Component = Animated.createAnimatedComponent(Component);
            // }
        }
        if (this.props.animated) {
            if (!this._ELEM) {
                this._ELEM = Animated.createAnimatedComponent(Element);
            }
            Element = this._ELEM;
        }
        var style = __assign({}, this.props.style);
        if (style) {
            delete style["top"];
            delete style["left"];
            delete style["right"];
            delete style["bottom"];
            delete style["position"];
            delete style["margin"];
            delete style["marginBottom"];
            delete style["marginTop"];
            delete style["marginLeft"];
            delete style["marginStart"];
            delete style["marginRight"];
            delete style["marginEnd"];
            delete style["maxHeight"];
            delete style["maxWidth"];
        }
        return (React.createElement(SGrid, { colSquare: this.props.colSquare, height: this.props.height, flex: this.props.flex, col: this.state.params.col, style: (!this.props.style ? {} : this.props.style), onLayout: function (evt) {
                _this.layout = evt.nativeEvent.layout;
                if (_this.props.onLayout)
                    _this.props.onLayout(evt);
            } },
            React.createElement(Element, __assign({}, otherProps, { style: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ width: "100%" }, (this.state.params.dir != "row" ? {} : {
                    flexDirection: "row",
                    flexWrap: 'wrap'
                })), (!this.props.backgroundColor ? {} : {
                    backgroundColor: this.props.backgroundColor
                })), (!this.props.row ? {} : {
                    flexDirection: "row",
                    flexWrap: 'wrap'
                })), (!this.props.colSquare ? {} : { height: "100%" })), (Platform.OS != "web" ? (this.props.height ? { flex: 1 } : {}) : { height: "100%" })), (!this.props.center ? {} : {
                    alignItems: 'center',
                    justifyContent: 'center'
                })), (!this.props.flex ? {} : {
                    flex: this.props.flex == true ? 1 : this.props.flex
                })), (!this.props.width ? {} : {
                    width: this.props.width == true ? "100%" : this.props.width
                })), (!this.props.border ? {} : {
                    borderWidth: 1,
                    borderColor: this.props.border
                })), (this.props.card ? { borderRadius: 4, backgroundColor: STheme.color.card } : {})), style) }), this.props.children)));
    };
    return SView;
}(Component));
export default SView;
