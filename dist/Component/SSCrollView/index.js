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
import { View, ScrollView, Platform } from 'react-native';
import SView from '../SView/index';
var SSCrollView = /** @class */ (function (_super) {
    __extends(SSCrollView, _super);
    function SSCrollView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SSCrollView.prototype.render = function () {
        return (React.createElement(View, { style: __assign({ position: "absolute", width: "100%", height: "100%" }, (Platform.OS == "web" ? {} : {
                flex: 1
            })) },
            React.createElement(ScrollView, { style: {
                    width: "100%",
                    height: "100%"
                }, contentContainerStyle: {
                    width: "100%"
                } },
                React.createElement(SView, { col: "xs-12" }, this.props.children))));
    };
    return SSCrollView;
}(Component));
export default SSCrollView;
