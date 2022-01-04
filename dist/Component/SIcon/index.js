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
import { Platform, View } from 'react-native';
import LocalImg, { IconsVariant } from '../../img/index';
import SView from '../SView';
var SIcon = /** @class */ (function (_super) {
    __extends(SIcon, _super);
    function SIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SIcon.loadAssets = function (assets) {
        if (assets.svg) {
            this.Assets = assets.svg;
        }
    };
    SIcon.prototype.getIconName = function (_name) {
        var name = _name.split("_")[0];
        var icon = LocalImg[name];
        if (icon) {
            return icon;
        }
        if (!SIcon.Assets)
            return null;
        return SIcon.Assets[name];
    };
    SIcon.prototype.getIconProps = function (name) {
        var variant = IconsVariant[name];
        if (!variant)
            return {};
        return variant;
    };
    SIcon.prototype.render = function () {
        var Select = this.getIconName(this.props.name);
        if (!Select)
            return null;
        var Icon = null;
        if (Platform.OS == 'web') {
            Icon = Select.Web;
        }
        else {
            Icon = Select.Native;
        }
        if (!Icon) {
            return React.createElement(View, null);
        }
        var ICON = (React.createElement(Icon, __assign({ width: "100%", height: "100%", fill: "#000" }, this.getIconProps(this.props.name), this.props)));
        if (this.props.bgr) {
            ICON = (React.createElement(SView, __assign({ col: "xs-12", center: true }, this.props),
                React.createElement(SIcon, { name: "Box", fill: this.props.bgr, width: "100%", height: "100%" }),
                React.createElement(SView, { col: "xs-11", height: "90%", style: {
                        position: "absolute"
                    }, center: true },
                    React.createElement(Icon, __assign({ fill: "#000" }, this.getIconProps(this.props.name), this.props, { width: "100%", height: "100%" })))));
        }
        return ICON;
    };
    SIcon.Assets = {};
    return SIcon;
}(Component));
export default SIcon;
