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
import { View, Animated } from 'react-native';
import SLoad from '../SLoad';
import SScrollView2 from '../SScrollView2';
import SThread from '../SThread';
import SView from '../SView';
import Data from './Data';
import Header from './header';
var STable2 = /** @class */ (function (_super) {
    __extends(STable2, _super);
    function STable2(props) {
        var _this = _super.call(this, props) || this;
        _this._anim = {
            size: new Animated.Value(0),
            headerSize: {},
            headerPosition: {}
        };
        _this.header = function () {
            if (!_this.props.header) {
                return React.createElement(SLoad, null);
            }
            var positionInitial = 0;
            return _this.props.header.map(function (item, index) {
                if (!_this._anim.headerSize[item.key]) {
                    _this._anim.headerSize[item.key] = new Animated.Value(item.width || 30);
                    _this._anim.headerPosition[item.key] = new Animated.Value(positionInitial);
                    positionInitial += item.width + 1;
                }
                return React.createElement(Header, { index: index, data: item, animationSize: _this._anim.headerSize[item.key], animationPosition: _this._anim.headerPosition[item.key] });
            });
        };
        _this.data = function () {
            return Object.keys(_this.props.data).map(function (key, index) {
                var Render = _this.props.header.map(function (item, index2) {
                    // if (!this._anim.headerSize[item.key]) {
                    //     return;
                    // }
                    return React.createElement(Data, { index: index, header: item, data: _this.props.data[key], animationSize: _this._anim.headerSize[item.key], animationPosition: _this._anim.headerPosition[item.key] });
                });
                return React.createElement(View, { style: {
                        flexDirection: "row"
                    } },
                    Render,
                    React.createElement(View, { style: {
                            width: 100
                        } }));
            });
        };
        _this.buildAnimations = function () {
            if (!_this._anim.size) {
                var size = { x: 0, y: 0 };
                // this.props.header.map((item, index) => {
                //     size.x += item.width ? item.width : 100;
                // });
                _this._anim.size = new Animated.Value(0);
            }
        };
        _this.state = {
            isLoad: false
        };
        _this.buildAnimations();
        return _this;
    }
    STable2.prototype.componentDidMount = function () {
        this.buildAnimations();
    };
    STable2.prototype.render = function () {
        var _this = this;
        if (!this.state.isLoad) {
            new SThread(100, "load", false).start(function () {
                _this.setState({ isLoad: true });
            });
            return React.createElement(SLoad, null);
        }
        this.buildAnimations();
        return (React.createElement(View, { style: {
                width: "100%",
                height: "100%"
            } },
            React.createElement(SView, { col: "xs-12", height: true },
                React.createElement(SScrollView2, { header: {
                        style: {
                            height: 30
                        },
                        content: this.header()
                    } },
                    React.createElement(Animated.View, { style: {
                            backgroundColor: "#ffffff11"
                        } },
                        React.createElement(View, null, this.data()))))));
    };
    STable2.defaultProps = {};
    return STable2;
}(Component));
export default STable2;
