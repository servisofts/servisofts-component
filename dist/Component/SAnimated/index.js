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
import { View, StyleSheet } from 'react-native';
import STheme from '../STheme';
var SAnimated = /** @class */ (function (_super) {
    __extends(SAnimated, _super);
    function SAnimated(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SAnimated.prototype.getOption = function (option) {
        return !this.props.options[option] ? 'default' : this.props.options[option];
    };
    //---RENDER
    SAnimated.prototype.getTypes = function () {
        return {
            "default": StyleSheet.create({
                view: __assign({ borderRadius: 4, backgroundColor: STheme.color.primary, borderWidth: 1, borderColor: STheme.color.primary, justifyContent: 'center', alignItems: 'center' }, this.props.style)
            })
        };
    };
    SAnimated.prototype.getVariant = function () {
        return {
            'default': StyleSheet.create({
                view: {
                    flex: 1,
                    width: '100%',
                    height: '100%'
                }
            })
        };
    };
    //---RENDER
    SAnimated.prototype.render = function () {
        // var theme = SThemeStyle();
        this.styleType = this.getTypes();
        this.variant = this.getVariant();
        //---RETURN
        var variant = this.variant[this.getOption('variant')];
        var style = this.styleType[this.getOption('type')];
        return (React.createElement(View, { style: [variant.view, style.view] }, this.props.children));
    };
    return SAnimated;
}(Component));
export { SAnimated };
