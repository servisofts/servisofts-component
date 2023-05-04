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
import { View, Animated } from 'react-native';
import SComponentContainer from '../SComponentContainer/index';
import { SUuid } from '../SUuid/index';
var SGrid = /** @class */ (function (_super) {
    __extends(SGrid, _super);
    function SGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.medida = "xs";
        _this.getMax = function (col) {
            if (!col)
                return 0;
            var options = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];
            var index = options.indexOf(_this.medida);
            for (var i = index; i >= 0; i--) {
                var mtmp = options[i];
                if (col[mtmp]) {
                    return col[mtmp];
                }
                else {
                    if (_this.medida == "xxs") {
                        return col["xs"];
                    }
                }
            }
            return 0;
        };
        _this.state = {
            x: 100,
            y: 0
        };
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
                var cols = /((xxs|xs|sm|md|lg|xl|xxl)-(([0-9]{1,2}.[0-9])|([0-9]{1,2})))/.exec(row);
                if (cols[2] && cols[3]) {
                    col[cols[2]] = cols[3];
                }
            });
            var max = this.getMax(col);
            // Animated.timing(this.animSize, {
            //     toValue: { x: (max * 100) / 12, y: this.animSize.y._value },
            //     useNativeDriver: true,
            //     duration: 1,
            // }).start();
            this.setValue({ x: (max * 100) / 12, y: this.state.y });
            // console.log("animado")
            // this.setState()
            // this.animSize.setValue({ x: (max * 100) / 12, y: this.animSize.y._value });
        }
        else {
            col = this.props.col;
        }
    };
    // shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): any {
    //     return nextState.x !== this.state.x
    // }
    SGrid.prototype.componentDidMount = function () {
        SComponentContainer.registerGrid(this.key, this);
    };
    SGrid.prototype.componentWillUnmount = function () {
        SComponentContainer.removeGrid(this.key);
    };
    SGrid.prototype.changeMedida = function (medida) {
        this.medida = medida;
        this.setSize();
    };
    SGrid.prototype.setValue = function (_a) {
        var x = _a.x, y = _a.y;
        if (x) {
            if (this.state.x !== x) {
                this.setState({ x: x });
            }
        }
        if (y) {
            if (this.state.y !== y) {
                this.setState({ y: y });
            }
        }
        // this.animSize.setValue({ x, y });
    };
    SGrid.prototype.getValue = function () {
        return this.state;
    };
    SGrid.prototype.render = function () {
        var _this = this;
        var size = this.getValue();
        return (React.createElement(View
        // key={SUuid()}
        , { 
            // key={SUuid()}
            style: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (!this.props.style.position ? {} : { position: this.props.style.position })), (!this.props.style.flex ? {} : { flex: this.props.style.flex })), (!this.props.flex ? {} : { flex: this.props.flex == true ? 1 : parseInt(this.props.flex + "") })), (!this.props.style.height ? {} : { height: this.props.style.height })), (!this.props.style.maxHeight ? {} : { maxHeight: this.props.style.maxHeight })), (!this.props.style.maxWidth ? {} : { maxWidth: this.props.style.maxWidth })), (!this.props.style.width ? {} : { width: this.props.style.width })), (!this.props.colSquare ? {} : (!this.props.col ? { width: size.x } : { height: size.y }))), (!this.props.height ? {} : { height: this.props.height == true ? "100%" : this.props.height })), (!this.props.style.zIndex ? {} : { zIndex: this.props.style.zIndex })), (this.props.style.margin == null ? {} : { margin: this.props.style.margin })), (this.props.style.marginBottom == null ? {} : { marginBottom: this.props.style.marginBottom })), (this.props.style.marginTop == null ? {} : { marginTop: this.props.style.marginTop })), (this.props.style.marginLeft == null ? {} : { marginLeft: this.props.style.marginLeft })), (this.props.style.marginRight == null ? {} : { marginRight: this.props.style.marginRight })), (this.props.style.marginStart == null ? {} : { marginStart: this.props.style.marginStart })), (this.props.style.marginEnd == null ? {} : { marginEnd: this.props.style.marginEnd })), (this.props.style.top == null ? {} : { top: this.props.style.top })), (this.props.style.bottom == null ? {} : { bottom: this.props.style.bottom })), (this.props.style.left == null ? {} : { left: this.props.style.left })), (this.props.style.right == null ? {} : { right: this.props.style.right })), (this.props.margin == null ? {} : { padding: this.props.margin })), (!this.props.col ? {} : {
                width: size.x + "%"
            })), onLayout: function (evt) {
                _this.layout = evt.nativeEvent.layout;
                if (_this.props.colSquare) {
                    var size_1 = _this.getValue();
                    if (_this.props.col) {
                        _this.setValue({ x: size_1.x, y: _this.layout.width });
                    }
                    else if (_this.layout.height != size_1.x) {
                        _this.setValue({ x: _this.layout.height, y: _this.layout.height });
                    }
                }
                if (_this.props.onLayout)
                    _this.props.onLayout(evt);
            } }, this.props.children));
    };
    return SGrid;
}(Component));
export default SGrid;
