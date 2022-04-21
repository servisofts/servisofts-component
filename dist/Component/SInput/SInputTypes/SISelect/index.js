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
import { SText, SView, STheme, SThread, SSCrollView } from '../../../../index';
import SPage from '../../../SPage';
var SISelect = /** @class */ (function (_super) {
    __extends(SISelect, _super);
    function SISelect(props) {
        var _this = _super.call(this, props) || this;
        _this.onScrollEnd = function (key, evt) {
            var center = (evt.vertical.contentOffset.y + (evt.vertical.layoutMeasurement.height / 2));
            Object.keys(_this.refItens).map(function (keyD) {
                var obj = _this.refItens[keyD];
                if (!obj)
                    return;
                var layout = obj.getLayout();
                if (layout.y < center
                    && layout.y + layout.height > center) {
                    _this.selectIten(key, obj.getProp("data"));
                }
            });
        };
        _this.getListaKey = function (key) {
            var arr = _this.props.options;
            return arr.map(function (obj) {
                // if (obj.type == "day" && this.state.select.year && this.state.select.month) {
                //     var fecha = this.state.select.year + "-" + this.state.select.month + "-" + obj.val
                //     if (!SDate.isValid(fecha)) {
                //         return <View />
                //     }
                // }
                var Content;
                var keyObj;
                if (typeof obj != "object") {
                    keyObj = obj;
                    Content = React.createElement(SText, null, obj);
                }
                else {
                    keyObj = obj.key;
                    if (obj.content) {
                        Content = obj.content;
                        if (typeof obj.content != "object") {
                            Content = React.createElement(SText, null, obj.content);
                        }
                    }
                    if (obj.component) {
                        Content = obj.component;
                        if (typeof obj.component != "object") {
                            Content = React.createElement(SText, null, obj.component);
                        }
                    }
                }
                return (React.createElement(SView, { center: true, col: "xs-12", style: {
                        width: "100%",
                        height: 40
                    }, data: keyObj, ref: function (ref) { _this.refItens[keyObj] = ref; }, onPress: function () {
                        var layout = _this.refItens[keyObj].getLayout();
                        _this.scroll[key].scrollTo({ x: layout.x + 50, y: layout.y + 20 });
                    } }, Content));
            });
        };
        // componentDidMount() {
        // setTimeout(() => {
        //     this.scroll["year"].scrollToEnd();
        //     this.scroll["month"].scrollToEnd();
        //     this.scroll["day"].scrollToEnd();
        // }, 2000)
        // }
        _this.getLista = function (key) {
            return React.createElement(SView, { col: "xs-12", center: true, flex: true },
                React.createElement(SView, { style: {
                        position: "absolute",
                        width: "100%",
                        height: 40,
                        backgroundColor: STheme.color.card
                    } }),
                React.createElement(SSCrollView, { disableHorizontal: true, ref: function (ref) { _this.scroll[key] = ref; }, 
                    // reverse
                    contentContainerStyle: {
                        width: "100%"
                    }, onScrollEnd: function (evt) {
                        _this.onScrollEnd(key, evt);
                    } },
                    React.createElement(SView, { col: "xs-12", style: {
                            width: "100%"
                        } },
                        React.createElement(SView, { style: {
                                height: 80
                            } }),
                        _this.getListaKey(key),
                        React.createElement(SView, { style: {
                                height: 80
                            } }))));
        };
        if (_this.props.props.defaultValue) {
            _this.value = _this.props.props.defaultValue;
        }
        _this.state = {
            initial: _this.value,
            select: false
        };
        _this.scroll = {};
        _this.refItens = {};
        _this.inital();
        return _this;
    }
    SISelect.prototype.componentWillUnmount = function () {
        if (this.props.onClose)
            this.props.onClose();
    };
    SISelect.prototype.inital = function () {
        var _this = this;
        new SThread(10, "moveSelect", true).start(function () {
            var ready = true;
            if (!_this.state.select) {
                _this.selectIten("select", _this.state.initial);
                ready = false;
            }
            if (!ready) {
                _this.inital();
            }
        });
    };
    SISelect.prototype.selectIten = function (key, y) {
        if (this.refItens[y]) {
            if (!this.refItens[y]) {
                return;
            }
            if (!this.refItens[y].getLayout) {
                return;
            }
            var lay = this.refItens[y].getLayout();
            if (!lay) {
                return false;
            }
            this.scroll[key].scrollTo({ x: lay.x + 50, y: lay.y + 20 });
            this.state.select = y;
            if (this.props.onChange)
                this.props.onChange(this.state.select);
            this.setState({ select: this.state.select });
            // var sdate = new SDate(this.state.select.year + "-" + SDate.formatCero(this.state.select.month) + "-" + SDate.formatCero(this.state.select.day), "yyyy-MM-dd");
            // if (sdate.isValid()) {
            // }
            return true;
        }
        return false;
    };
    SISelect.prototype.getInfo = function () {
        return React.createElement(SView, { row: true, style: {
                flex: 1
            } }, JSON.stringify(this.state.select));
    };
    SISelect.prototype.render = function () {
        return React.createElement(SView, { col: "xs-11 md-6 xl-4", center: true, withoutFeedback: true, style: {
                height: 200,
                borderRadius: 8,
                backgroundColor: STheme.color.background,
                overflow: "hidden"
            } },
            SPage.backgroundComponent,
            React.createElement(SView, { row: true, style: {
                    width: "100%",
                    height: 200
                } }, this.getLista("select")));
    };
    SISelect.defaultProps = {
        props: {},
        style: {}
    };
    return SISelect;
}(Component));
export default SISelect;
