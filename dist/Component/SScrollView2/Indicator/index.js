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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import SAPanResponder from '../../SAnimated/SAPanResponder';
import STheme from '../../STheme';
var Indicator = /** @class */ (function (_super) {
    __extends(Indicator, _super);
    function Indicator(props) {
        var _this = _super.call(this, props) || this;
        _this.setScroll = function (scroll) {
            if (!_this.state.scroll) {
                _this.state.scroll = scroll;
                _this.setState({ scroll: scroll });
                return;
            }
            _this.state.scroll = scroll;
        };
        _this.setSize = function (_a) {
            var width = _a.width, height = _a.height;
            Animated.timing(_this.state.animSize, {
                toValue: { x: width, y: height },
                duration: 10
            }).start();
            return;
        };
        _this.setScrollPosition = function (_a) {
            var x = _a.x, y = _a.y;
            _this.state.animPos.setValue({ x: x, y: y });
        };
        _this.moveScrollAsync = function (scroll, moveTo) { return __awaiter(_this, void 0, void 0, function () {
            var sizeScroll, layout, moveToRes;
            return __generator(this, function (_a) {
                sizeScroll = scroll.getContentSize();
                layout = scroll.getLayout();
                moveToRes = {
                    x: moveTo.x * (sizeScroll.width / layout.width),
                    y: moveTo.y * (sizeScroll.height / layout.height)
                };
                // console.log(moveToRes)
                if (scroll.isHorizontal()) {
                    scroll.moveScroll({
                        x: moveToRes.x,
                        y: 0
                    });
                }
                else {
                    scroll.moveScroll({
                        x: 0,
                        y: moveToRes.y
                    });
                }
                return [2 /*return*/];
            });
        }); };
        _this.state = {
            size: 12,
            scroll: false,
            direction: (_this.props.horizontal ? "Horizontal" : "Vertical"),
            animPos: new Animated.ValueXY({ x: 0, y: 0 }),
            animSize: new Animated.ValueXY({ x: 0, y: 0 })
        };
        _this.panMove = _this.createPanMove();
        return _this;
    }
    Indicator.prototype.repaint = function (scroll) {
        if (scroll) {
            this.state.scroll = scroll;
        }
        this.setState({ repaint: new Date().getTime() });
    };
    Indicator.prototype.onScroll = function (_a) {
        var contentOffset = _a.contentOffset, contentSize = _a.contentSize, layoutMeasurement = _a.layoutMeasurement;
        if (this.onMove)
            return;
        if (this.state.scroll) {
            var propsScrll = this.state.scroll.getProps();
            var layoutScroll = this.state.scroll.getLayout();
            if (!layoutScroll) {
                return;
            }
            var centerScroll = {
                x: (contentOffset.x - layoutMeasurement.width) / contentSize.width,
                y: (contentOffset.y - layoutMeasurement.height) / contentSize.height
            };
            var position = {
                x: (layoutScroll.width * centerScroll.x) + this.state.animSize.x._value,
                y: (layoutScroll.height * centerScroll.y) + this.state.animSize.y._value
            };
            if (propsScrll.horizontal) {
                this.setScrollPosition({ x: position.x, y: 0 });
            }
            else {
                this.setScrollPosition({ x: 0, y: position.y });
            }
        }
    };
    Indicator.prototype.render = function () {
        if (!this.state.scroll) {
            return React.createElement(View, null);
        }
        this.state.scroll.setIndicator(this);
        this.scroll = this.state.scroll;
        var layoutScroll = this.state.scroll.getLayout();
        var sizeScroll = this.state.scroll.getContentSize();
        if (layoutScroll && sizeScroll) {
            if (this.scroll.isHorizontal()) {
                var percent = layoutScroll.width / sizeScroll.width;
                if (percent >= 1) {
                    this.setSize({ width: 0, height: 0 });
                }
                else {
                    this.setSize({ width: layoutScroll.width * percent, height: this.state.size });
                }
            }
            else {
                // console.log(sizeScroll.height)
                var percent = layoutScroll.height / sizeScroll.height;
                if (percent >= 1) {
                    this.setSize({ width: 0, height: 0 });
                }
                else {
                    this.setSize({ width: this.state.size, height: layoutScroll.height * percent });
                }
            }
        }
        else {
            // console.log("no repinto")
        }
        return React.createElement(View, { style: __assign({ position: "absolute" }, (this.scroll.isHorizontal() ? {
                width: "100%",
                height: this.state.size,
                bottom: 0,
                left: 0
            } : {
                width: this.state.size,
                height: "100%",
                top: 0,
                right: 0
            })), onLayout: function (evt) {
                // console.log(evt.nativeEvent.layout);
            } },
            React.createElement(Animated.View, __assign({}, this.panMove.getPanHandlers(), { style: {
                    width: this.state.animSize.x,
                    height: this.state.animSize.y,
                    left: this.state.animPos.x,
                    top: this.state.animPos.y,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 4,
                    cursor: "pointer"
                } }),
                React.createElement(View, { style: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                        backgroundColor: STheme.color.card
                    } })));
    };
    Indicator.prototype.createPanMove = function () {
        var _this = this;
        return new SAPanResponder({
            onGrand: function (e, gs) {
                _this.onMove = true;
                var anim = _this.state.animPos;
                _this.startPosition = {
                    x: anim.x._value,
                    y: anim.y._value
                };
                anim.flattenOffset();
            },
            onMove: function (e, gs) {
                var scroll = _this.state.scroll;
                if (scroll) {
                    var moveTo = { x: 0, y: 0 };
                    var layout = scroll.getLayout();
                    if (scroll.getProps().horizontal) {
                        if (_this.startPosition.x + gs.dx > 0) {
                            moveTo = { x: _this.startPosition.x + gs.dx, y: 0 };
                        }
                        if (_this.startPosition.x + gs.dx + _this.state.animSize.x._value >= layout.width) {
                            moveTo = {
                                x: layout.width - _this.state.animSize.x._value,
                                y: 0
                            };
                        }
                    }
                    else {
                        if (_this.startPosition.y + gs.dy > 0) {
                            moveTo = { x: 0, y: _this.startPosition.y + gs.dy };
                        }
                        if (_this.startPosition.y + gs.dy + _this.state.animSize.y._value >= layout.height) {
                            moveTo = {
                                x: 0,
                                y: layout.height - _this.state.animSize.y._value
                            };
                            // moveTo = this.lastPos;
                        }
                    }
                    _this.state.animPos.setValue(moveTo);
                    _this.moveScrollAsync(scroll, moveTo);
                }
            },
            onRelease: function () {
                _this.onMove = false;
            }
        });
    };
    return Indicator;
}(Component));
export default Indicator;
