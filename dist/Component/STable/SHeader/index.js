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
import SAPanResponder from '../../SAnimated/SAPanResponder';
import SIcon from '../../SIcon';
import { SPopupOpen, SText, STheme, SView } from '../../../index';
import SHAjustes from './SHAjustes';
var SHeader = /** @class */ (function (_super) {
    __extends(SHeader, _super);
    function SHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: _this.props.header,
            widthHeaderAnim: {},
            positionHeader: {},
            animSelect: {},
            panHeader: {},
            panMoveHeader: {},
            load: false
        };
        return _this;
    }
    SHeader.prototype.setScrollEnabled = function (val) {
        if (this.props.getScroll) {
            this.props.getScroll().setEnabled(val);
        }
    };
    SHeader.prototype.scrollTo = function (_a) {
        var x = _a.x, y = _a.y;
        if (this.props.getScroll) {
            this.props.getScroll().getRef("scrollh").moveScroll({ x: x, y: y });
        }
    };
    SHeader.prototype.createPanMove = function (key) {
        var _this = this;
        return new SAPanResponder({
            onGrand: function (e, gs) {
                _this.move = 0;
                var anim = _this.state.positionHeader[key];
                _this.startPosition = {
                    x: anim.x._value,
                    y: anim.y._value
                };
                _this.lastMoved = {
                    x: anim.x._value,
                    y: 0
                };
                anim.flattenOffset();
                // this.animPosition.setOffset({
                //     x: this.animPosition.x._value,
                //     y: this.animPosition.y._value
                // });
                _this.state.animSelect[key].setValue(10);
                _this.setScrollEnabled(false);
                // this.scroll.setEnabled(false)
            },
            onMove: function (e, gs) {
                var anim = _this.state.positionHeader[key];
                var animWidthP = _this.state.widthHeaderAnim[key];
                anim.setValue({ x: _this.startPosition.x + gs.dx, y: 0 });
                var arrKeys = Object.keys(_this.state.positionHeader);
                arrKeys.map(function (keyHeader) {
                    if (key != keyHeader) {
                        var animPosHeader = _this.state.positionHeader[keyHeader];
                        var animWidth = _this.state.widthHeaderAnim[keyHeader];
                        var center = animPosHeader.x._value + (animWidth.x._value / 2);
                        if (center > anim.x._value && center < anim.x._value + animWidthP.x._value) {
                            var direction = 1;
                            if (center - anim.x._value < (anim.x._value + animWidthP.x._value) - center) {
                                direction = -1;
                                console.log(-1);
                            }
                            var temp = animPosHeader.x._value;
                            animPosHeader.setValue({ x: temp - ((animWidthP.x._value + _this.props.separation) * direction), y: 0 });
                            if (direction == -1) {
                                _this.lastMoved = {
                                    x: temp,
                                    y: 0
                                };
                            }
                            else {
                                _this.lastMoved = {
                                    x: (temp - (animWidthP.x._value * direction)) + (animWidth.x._value * direction),
                                    y: 0
                                };
                            }
                            // animPosHeader.setValue({ x: animPosHeader.x._value + gs.dx - this.lastdx, y: 0 })
                        }
                        return;
                    }
                    return;
                });
                // this.props.onMove(gs);
            },
            onRelease: function () {
                var anim = _this.state.positionHeader[key];
                if (_this.move) {
                    Animated.timing(anim, {
                        toValue: {
                            x: _this.startPosition.x + (_this.move * -1),
                            y: 0
                        },
                        duration: 100,
                        useNativeDriver: false
                    }).start();
                    // this.props.reload();
                }
                else {
                    Animated.timing(anim, {
                        toValue: _this.lastMoved,
                        duration: 100,
                        useNativeDriver: false
                    }).start();
                }
                _this.state.animSelect[key].setValue(1);
                _this.setScrollEnabled(true);
            }
        });
    };
    SHeader.prototype.createPan = function (key) {
        var _this = this;
        return new SAPanResponder({
            onGrand: function (e, gs) {
                var anim = _this.state.widthHeaderAnim[key];
                _this.startWidth = anim.x._value;
                _this.startContentSize = _this.props.contentSize.x._value;
                _this.lastdx = 0;
                // this.anim.flattenOffset();
                // // this.anim.setOffset({
                // //     x: this.anim.x._value,
                // //     y: this.anim.y._value
                // // });
                _this.setScrollEnabled(false);
                // this.scroll.setEnabled(false)
            },
            onMove: function (e, gs) {
                if (_this.startWidth + gs.dx <= 50) {
                    return;
                }
                var anim = _this.state.widthHeaderAnim[key];
                var animPos = _this.state.positionHeader[key];
                anim.setValue({ x: _this.startWidth + gs.dx, y: 0 });
                // console.log(gs.dx)
                // this.props.contentSize.setValue({ x: this.startContentSize + (anim.x._value - this.startWidth), y: this.props.contentSize.y._value });
                // this.scrollTo({ x: 1000, y: 0 })
                var arrKeys = Object.keys(_this.state.positionHeader);
                arrKeys.map(function (keyHeader) {
                    if (key != keyHeader) {
                        var animPosHeader = _this.state.positionHeader[keyHeader];
                        if (animPos.x._value < animPosHeader.x._value) {
                            animPosHeader.setValue({ x: animPosHeader.x._value + gs.dx - _this.lastdx, y: 0 });
                        }
                        return;
                    }
                    return;
                });
                _this.lastdx = gs.dx;
            },
            onRelease: function () {
                if (_this.props.contentSize) {
                    var anim = _this.state.widthHeaderAnim[key];
                    _this.props.contentSize.setValue({ x: _this.props.contentSize.x._value + (anim.x._value - _this.startWidth), y: _this.props.contentSize.y._value });
                }
                // this.state.obj.width = this.anim.x._value;
                // this.props.reload();
                // this.props.changeSize(this.layout.width + 1 - this.anim.x._value)
                // // this.anim.extractOffset();
                // this.scroll.setEnabled(true)
                _this.setScrollEnabled(true);
            }
        });
    };
    SHeader.prototype.getOrder = function (header, i) {
        var _this = this;
        if (header.key == "index") {
            return React.createElement(View, null);
        }
        if (!header.order) {
            return React.createElement(View, null);
        }
        return React.createElement(SView, { style: {
                width: 16,
                height: 14
            }, center: true },
            React.createElement(SView, { style: {
                    width: 10,
                    height: 10,
                    transform: [
                        { rotate: header.order == "desc" ? "-90deg" : "90deg" },
                    ]
                }, onPress: function () {
                    if (_this.state.data[i].order == "asc") {
                        _this.state.data[i].order = "desc";
                    }
                    else if (_this.state.data[i].order == "desc") {
                        delete _this.state.data[i].order;
                    }
                    else {
                        _this.state.data[i].order = "asc";
                    }
                    if (_this.props.changeHeader) {
                        _this.props.changeHeader(_this.state.data);
                    }
                    _this.setState(__assign({}, _this.state));
                } },
                React.createElement(SIcon, { name: "Arrow", fill: STheme.color.secondary })));
    };
    SHeader.prototype.getHeaders = function () {
        var _this = this;
        var position = this.props.initialPosition;
        var total = 0;
        return this.state.data.map(function (obj, i) {
            if (obj.hidden) {
                return React.createElement(View, null);
            }
            if (!_this.state.widthHeaderAnim[obj.key]) {
                _this.state.widthHeaderAnim[obj.key] = new Animated.ValueXY({ x: obj.width, y: 0 });
                // total += (obj.width + this.props.separation);
                total += obj.width + _this.props.separation;
                if (_this.props.contentSize) {
                    if (_this.props.contentSize.x._value - total <= _this.props.minWidth) {
                        _this.props.contentSize.setValue({ x: _this.props.contentSize.x._value + obj.width + _this.props.separation, y: _this.props.contentSize.y._value });
                    }
                }
            }
            if (!_this.state.positionHeader[obj.key]) {
                _this.state.positionHeader[obj.key] = new Animated.ValueXY({ x: position, y: 0 });
            }
            if (!_this.state.panHeader[obj.key]) {
                _this.state.panHeader[obj.key] = _this.createPan(obj.key);
            }
            if (!_this.state.panMoveHeader[obj.key]) {
                _this.state.panMoveHeader[obj.key] = _this.createPanMove(obj.key);
            }
            if (!_this.state.animSelect[obj.key]) {
                _this.state.animSelect[obj.key] = new Animated.Value(4 - i);
            }
            position += _this.state.widthHeaderAnim[obj.key].x._value + _this.props.separation;
            if (!_this.state.load) {
                _this.props.loadAnimated({
                    widthHeaderAnim: _this.state.widthHeaderAnim,
                    positionHeader: _this.state.positionHeader,
                    animSelect: _this.state.animSelect
                }, true);
                _this.state.load = true;
            }
            return React.createElement(SView, { animated: true, style: __assign({ position: "absolute", left: _this.state.positionHeader[obj.key].x, top: 0, width: _this.state.widthHeaderAnim[obj.key].x, height: "100%", 
                    // overflow: "hidden",
                    zIndex: _this.state.animSelect[obj.key] }, _this.props.style) },
                React.createElement(SView, { row: true, col: "xs-12", style: {
                        height: "100%",
                        overflow: "hidden"
                    } },
                    React.createElement(SView, __assign({}, _this.state.panMoveHeader[obj.key].getPanHandlers(), { animated: true, center: true, row: true, style: {
                            flex: 1,
                            height: "100%",
                            cursor: "move",
                            flexWrap: "nowrap",
                            alignItems: "flex-end",
                            paddingBottom: 1
                        } }),
                        React.createElement(SView, { style: { padding: 2 }, center: true }, obj.icon),
                        React.createElement(SText, { style: __assign({ textAlign: "center", fontWeight: "700", fontSize: 12 }, _this.props.styleText) }, obj.label),
                        _this.getOrder(obj, i)),
                    React.createElement(SView, __assign({}, _this.state.panHeader[obj.key].getPanHandlers(), { animated: true, style: {
                            position: "absolute",
                            right: 0,
                            width: 16,
                            zIndex: 99,
                            height: "100%",
                            cursor: "col-resize",
                            alignItems: "flex-end"
                        } }),
                        React.createElement(SView, { style: {
                                width: 2,
                                height: "100%",
                                backgroundColor: STheme.color.secondary + "66"
                            } })),
                    React.createElement(SView, { style: {
                            left: 2,
                            top: 2,
                            width: 16,
                            position: "absolute",
                            height: 16
                        }, onPress: function () {
                            SPopupOpen({
                                key: "SHeaderAjuste",
                                content: React.createElement(SHAjustes, { data: __assign(__assign({}, obj), { width: _this.state.widthHeaderAnim[obj.key].x._value }), changeFiltro: function (data) {
                                        if (_this.props.changeHeader) {
                                            _this.state.data[i].filtro = data;
                                            _this.props.changeHeader(_this.state.data);
                                        }
                                    }, changeOrder: function (order) {
                                        if (order == "no") {
                                            _this.state.data[i].order = false;
                                        }
                                        else {
                                            _this.state.data[i].order = order;
                                        }
                                        if (_this.props.changeHeader) {
                                            _this.props.changeHeader(_this.state.data);
                                        }
                                        // this.setState({ ...this.state });
                                    } })
                            });
                        } },
                        React.createElement(SIcon, __assign({ name: "Engranaje", width: 10, height: 10 }, (obj.filtro ? {
                            fill: STheme.color.secondary,
                            stroke: STheme.color.secondary
                        } : {
                            stroke: STheme.color.secondary
                        }))))));
        });
    };
    SHeader.prototype.render = function () {
        return (React.createElement(SView, { animated: true, style: {
                // top: 0,
                // left: 0,
                position: "absolute",
                width: "100%",
                height: "100%"
            } }, this.getHeaders()));
    };
    SHeader.defaultProps = {
        minWidth: 200,
        initialPosition: 0,
        separation: 4
    };
    return SHeader;
}(Component));
export default SHeader;
