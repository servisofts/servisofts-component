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
import { View } from 'react-native';
import { SText, SView, STheme, SThread, SSCrollView } from '../../../../index';
import SDate from '../../../SDate';
var SIFechaAlert = /** @class */ (function (_super) {
    __extends(SIFechaAlert, _super);
    function SIFechaAlert(props) {
        var _this = _super.call(this, props) || this;
        _this.onScrollEnd = function (key, evt) {
            var center = (evt.vertical.contentOffset.y + (evt.vertical.layoutMeasurement.height / 2));
            Object.keys(_this.refItens[key]).map(function (keyD) {
                var obj = _this.refItens[key][keyD];
                if (!obj)
                    return;
                var layout = obj.getLayout();
                if (layout.y < center
                    && layout.y + layout.height > center) {
                    _this.selectIten(key, obj.getProp("data").val);
                }
            });
        };
        _this.getListaKey = function (key) {
            var arr = [];
            switch (key) {
                case "year":
                    for (var i = (!_this.props.props.minYear ? 1888 : _this.props.props.minYear); i <= (!_this.props.props.maxYear ? (new SDate(new Date()).toJson().year) : _this.props.props.maxYear); i++) {
                        arr.push({
                            type: key,
                            val: i,
                            data: i + ""
                        });
                    }
                    break;
                case "month":
                    for (var i = 1; i <= 12; i++) {
                        arr.push({
                            type: key,
                            val: i,
                            data: SDate.getMonth(i).text
                        });
                    }
                    break;
                case "day":
                    for (var i = 1; i <= 31; i++) {
                        arr.push({
                            type: key,
                            val: i,
                            data: i + ""
                        });
                    }
                    break;
            }
            return arr.map(function (obj) {
                if (obj.type == "day" && _this.state.select.year && _this.state.select.month) {
                    var fecha = _this.state.select.year + "-" + _this.state.select.month + "-" + obj.val;
                    if (!SDate.isValid(fecha)) {
                        return React.createElement(View, null);
                    }
                }
                return (React.createElement(SView, { center: true, style: {
                        width: "100%",
                        height: 40
                    }, data: obj, ref: function (ref) { _this.refItens[obj.type][obj.val + ""] = ref; }, onPress: function (evt) {
                        _this.scroll[key].scrollTo({ x: evt.layout.x + 50, y: evt.layout.y + 20 });
                    } },
                    React.createElement(SText
                    // options={{
                    //     variant: "h3",
                    //     type: "primary"
                    // }}
                    , null, obj.data)));
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
            return React.createElement(SView, { props: {
                    col: "xs-4",
                    height: "100%",
                    variant: "center"
                } },
                React.createElement(SView, { style: {
                        position: "absolute",
                        width: "100%",
                        height: 40,
                        backgroundColor: STheme.color.primary + "44"
                    } }),
                React.createElement(SSCrollView, { disableHorizontal: true, ref: function (ref) { _this.scroll[key] = ref; }, 
                    // reverse
                    onScrollEnd: function (evt) {
                        _this.onScrollEnd(key, evt);
                    } },
                    React.createElement(SView, { style: {
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
        _this.sdate = new SDate(new Date());
        if (_this.props.props.defaultValue) {
            _this.sdate = _this.props.props.defaultValue;
        }
        _this.state = {
            initial: {
                year: _this.sdate.get("year"),
                month: _this.sdate.get("month"),
                day: _this.sdate.get("day")
            },
            select: {
                year: 0,
                month: 0,
                day: 0
            }
        };
        _this.scroll = {};
        _this.refItens = {
            year: {},
            month: {},
            day: {}
        };
        _this.inital();
        return _this;
    }
    SIFechaAlert.prototype.inital = function () {
        var _this = this;
        new SThread(100, "moveDate", true).start(function () {
            var ready = true;
            if (!_this.state.select["year"]) {
                _this.selectIten("year", _this.state.initial["year"]);
                ready = false;
            }
            if (!_this.state.select["month"]) {
                _this.selectIten("month", _this.state.initial["month"]);
                ready = false;
            }
            if (!_this.state.select["day"]) {
                _this.selectIten("day", _this.state.initial["day"]);
                ready = false;
            }
            if (!ready) {
                _this.inital();
            }
        });
    };
    SIFechaAlert.prototype.selectIten = function (key, y) {
        if (this.refItens[key][y]) {
            var lay = this.refItens[key][y].getLayout();
            if (!lay) {
                return false;
            }
            this.scroll[key].scrollTo({ x: lay.x + 50, y: lay.y + 20 });
            this.state.select[key] = y;
            this.setState({ select: __assign({}, this.state.select) });
            var sdate = new SDate(this.state.select.year + "-" + SDate.formatCero(this.state.select.month) + "-" + SDate.formatCero(this.state.select.day), "yyyy-MM-dd");
            if (sdate.isValid()) {
                if (this.props.onChange)
                    this.props.onChange(sdate);
            }
            return true;
        }
        return false;
    };
    SIFechaAlert.prototype.getInfo = function () {
        return React.createElement(SView, { props: {
                direction: "row"
            }, style: {
                flex: 1
            } }, JSON.stringify(this.state.select));
    };
    SIFechaAlert.prototype.render = function () {
        return React.createElement(SView, { props: {
                col: "xs-6",
                variant: "center",
                withoutFeedback: true
            }, style: {
                height: 200,
                borderRadius: 8
            } },
            React.createElement(SView, { props: {
                    direction: "row"
                }, style: {
                    width: "100%",
                    height: 200
                } },
                this.getLista("day"),
                this.getLista("month"),
                this.getLista("year")));
    };
    SIFechaAlert.defaultProps = {
        props: {},
        style: {}
    };
    return SIFechaAlert;
}(Component));
export default SIFechaAlert;