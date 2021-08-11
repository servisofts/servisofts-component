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
import SComponentContainer from '../SComponentContainer/index';
import { SUuid } from '../SUuid/index';
var SGrid = /** @class */ (function (_super) {
    __extends(SGrid, _super);
    function SGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.getMax = function (col) {
            if (!col)
                return 0;
            var options = ["xs", "sm", "md", "lg", "xl"];
            var index = options.indexOf(_this.medida);
            for (var i = index; i >= 0; i--) {
                var mtmp = options[i];
                if (col[mtmp]) {
                    return col[mtmp];
                }
            }
            return 0;
        };
        _this.state = {};
        _this.animSize = new Animated.ValueXY({ x: 100, y: 0 });
        _this.key = SUuid();
        return _this;
    }
    SGrid.prototype.setSize = function () {
        var col;
        if (typeof this.props.col == "string") {
            col = {};
            var text = this.props.col;
            text = text.trim();
            text.split(" ").map(function (row) {
                var cols = /((xs|sm|md|lg|xl)-(([0-9]{1,2}.[0-9])|([0-9]{1,2})))/.exec(row);
                if (cols[2] && cols[3]) {
                    col[cols[2]] = cols[3];
                }
            });
        }
        else {
            col = this.props.col;
        }
        var max = this.getMax(col);
        this.animSize.setValue({ x: (max * 100) / 12, y: this.animSize.y._value });
    };
    SGrid.prototype.changeMedida = function (medida) {
        this.medida = medida;
        this.setSize();
    };
    SGrid.prototype.componentDidMount = function () {
        SComponentContainer.registerGrid(this.key, this);
    };
    SGrid.prototype.componentWillUnmount = function () {
        SComponentContainer.removeGrid(this.key);
    };
    SGrid.prototype.render = function () {
        var _this = this;
        return (React.createElement(Animated.View, { style: __assign(__assign(__assign(__assign(__assign({}, (!this.props.style.flex ? {} : {
                flex: this.props.style.flex
            })), (!this.props.style.height ? {} : {
                height: this.props.style.height
            })), (!this.props.col ? {} : {
                width: this.animSize.x.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"]
                })
            })), (!this.props.colSquare ? {} : {
                height: this.animSize.y
            })), (!this.props.style.width ? {} : {
                width: this.props.style.width
            })), onLayout: function (evt) {
                _this.layout = evt.nativeEvent.layout;
                _this.animSize.setValue({ x: _this.animSize.x._value, y: _this.layout.width });
            } }, this.props.children));
    };
    return SGrid;
}(Component));
export default SGrid;
