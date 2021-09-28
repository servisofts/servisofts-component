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
import { Animated, View } from 'react-native';
import SText from '../SText';
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data(props) {
        var _this = _super.call(this, props) || this;
        _this.getData = function (obj, key) {
            var path = key.split("/");
            var data = obj;
            path.map(function (dir) {
                dir = dir.replace(/-.*/, "");
                if (dir == "") {
                    return;
                }
                if (!data)
                    data = {};
                if (typeof data == "string") {
                    try {
                        data = JSON.parse(data);
                    }
                    catch (e) { }
                }
                data = data[dir];
            });
            return data;
        };
        _this.state = {};
        return _this;
    }
    Data.prototype.getContent = function () {
        if (this.props.header.key == "index") {
            return React.createElement(SText, null, this.props.index + 1);
        }
        var data = this.getData(this.props.data, this.props.header.key);
        if (this.props.header.render) {
            data = this.props.header.render(data, this.props.data);
        }
        if (typeof data != "object") {
            return React.createElement(SText, null, data);
        }
        return data;
    };
    Data.prototype.render = function () {
        return React.createElement(React.Fragment, null,
            React.createElement(Animated.View, { style: {
                    width: this.props.animationSize,
                    height: 40
                } }),
            React.createElement(Animated.View, { style: {
                    top: 0,
                    left: this.props.animationPosition,
                    position: "absolute",
                    width: this.props.animationSize,
                    height: "100%"
                } },
                React.createElement(View, { style: {
                        width: "100%",
                        height: "100%",
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: (this.props.index % 2 == 0) ? "#ffffff11" : "#00000011",
                        overflow: "hidden"
                    } }, this.getContent())));
    };
    return Data;
}(Component));
export default Data;
