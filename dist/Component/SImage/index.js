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
import { Image, Platform } from 'react-native';
import SPopup from '../SPopup';
import STheme from '../STheme';
import SView from '../SView';
var SImage = /** @class */ (function (_super) {
    __extends(SImage, _super);
    function SImage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SImage.prototype.getImage = function (source, style) {
        // var key = source.uri;
        if (!style)
            style = {};
        return React.createElement(Image, { source: source, style: __assign(__assign({ resizeMode: "contain", width: "100%", height: "100%" }, this.props.style), style) });
        // if (!SImage.Instances[key]) {
        // SImage.Instances[key] = <Image source={source} style={{ ...this.props.style, ...style }} />;
        // }
        // return SImage.Instances[key]
    };
    SImage.prototype.render = function () {
        var _this = this;
        var source = this.props.source;
        if (source) {
            if (Platform.OS == "web") {
                source = { uri: source["default"] };
            }
        }
        if (!source && this.props.src) {
            if (typeof this.props.src == "string") {
                source = { uri: this.props.src };
            }
            else {
                source = this.props.src;
                if (Platform.OS == "web") {
                    source = { uri: source["default"] };
                }
            }
        }
        if (this.props.enablePreview) {
            return React.createElement(SView, { style: __assign({ width: "100%", height: "100%" }, this.props.style), onPress: function () {
                    SPopup.open({
                        key: "imgPreview",
                        content: React.createElement(SView, { col: "xs-11 md-8 lg-6 xl-4", colSquare: true, center: true, style: {
                                overflow: 'hidden',
                                maxHeight: "100%",
                                backgroundColor: STheme.color.background,
                                borderRadius: 8
                            } }, _this.getImage(source, { width: "100%", height: "100%" }))
                    });
                } }, this.getImage(source));
        }
        return this.getImage(source);
    };
    SImage.Instances = {};
    SImage.defaultProps = {
        style: {}
    };
    return SImage;
}(Component));
export default SImage;
