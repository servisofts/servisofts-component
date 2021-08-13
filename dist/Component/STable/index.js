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
import SHeader from './SHeader';
import SData from './SData';
import SFooter from './SFooter';
import SHeadBar from './SHeadBar';
import { SView, SScrollView2, STheme } from '../../index';
var STable = /** @class */ (function (_super) {
    __extends(STable, _super);
    function STable(props) {
        var _this = _super.call(this, props) || this;
        var lista = _this.props.header.sort(function (a, b) {
            if (a.index > b.index) {
                return 1;
            }
            if (a.index < b.index) {
                return -1;
            }
            return 0;
        });
        _this.state = {
            header: lista,
            buscador: {
                value: ""
            },
            animates: {}
        };
        _this.contentSize = new Animated.ValueXY({ x: _this.props.headerProps.minWidth ? _this.props.headerProps.minWidth : 20, y: 0 });
        _this.headerPosition = new Animated.ValueXY({ x: 0, y: 0 });
        return _this;
    }
    STable.prototype.buscar = function (data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var lista_keys = Object.keys(data);
        var val = this.state.buscador.value.trim() || "";
        // var arrPalabras = val.replaceAll(" ", "|");
        var arrPalabras = val.split(" ");
        var arr2 = [];
        var objFinal = {};
        lista_keys.map(function (key) {
            var obj = data[key];
            var str = JSON.stringify(obj);
            var isValid = false;
            var peso = 0;
            for (var i = 0; i < arrPalabras.length; i++) {
                var txtTest = arrPalabras[i];
                var expreg = new RegExp(":.*?" + txtTest + ".*?(,|})", "i");
                var expreg2 = new RegExp("dato.:.*?" + txtTest + ".*?(,|})", "i");
                if (expreg.test(str) || expreg2.test(str)) {
                    isValid = true;
                    peso++;
                }
            }
            // if (!this.state.verEliminados) {
            //     if (obj.estado == 0) {
            //         isValid = false;
            //     }
            // }
            if (isValid) {
                arr2.push(key);
                if (!objFinal[key]) {
                    objFinal[key] = data[key];
                }
                objFinal[key]["Peso"] = peso;
            }
        });
        return objFinal;
    };
    STable.prototype.filterData = function () {
        var _this = this;
        var data = [];
        var i = 0;
        Object.keys(this.props.data).map(function (key) {
            var obj = _this.props.data[key];
            if (_this.props.filter) {
                if (!_this.props.filter(obj, i)) {
                    return;
                }
            }
            i++;
            data.push(obj);
        });
        return this.buscar(data);
    };
    STable.prototype.render = function () {
        var _this = this;
        if (this.state.reload) {
            this.state.reload = false;
            this.contentSize = new Animated.ValueXY({ x: this.props.headerProps.minWidth ? this.props.headerProps.minWidth : 8, y: 0 });
            this.headerPosition = new Animated.ValueXY({ x: 0, y: 0 });
            this.setState(__assign({}, this.state));
            return React.createElement(View, null);
        }
        return (React.createElement(View, { style: {
                width: "100%",
                height: "100%"
            } },
            React.createElement(SHeadBar, __assign({}, this.props.headerProps, { reload: function () {
                    _this.setState({ reload: true });
                }, onAdd: this.props.onAdd, buscar: function (text) {
                    _this.setState({
                        buscador: __assign(__assign({}, _this.state.buscador), { value: text })
                    });
                } })),
            React.createElement(SView, { style: {
                    width: "100%",
                    flex: 1
                } },
                React.createElement(SScrollView2, { ref: function (ref) { _this.scroll = ref; }, header: {
                        style: {
                            height: 30
                        },
                        content: (React.createElement(SHeader, __assign({ style: {
                                backgroundColor: STheme.color.barColor
                            }, minWidth: 20, initialPosition: 8, separation: 2 }, this.props.headerProps, { header: this.state.header, contentSize: this.contentSize, getScroll: function () { return _this.scroll; }, loadAnimated: function (animates, reset) {
                                _this.state.animates = animates;
                                if (!animates["widthHeaderAnim"] || reset) {
                                    _this.setState({ animates: _this.state.animates });
                                }
                            } })))
                    } },
                    React.createElement(SView, { animated: true, style: {
                            width: this.contentSize.x,
                            height: "100%",
                            flex: 1
                        } },
                        React.createElement(SData, __assign({}, this.props.dataProps, { actionTypes: this.props.actionTypes, onAction: this.props.onAction, onSelectRow: this.props.onSelectRow, ref: function (ref) { _this.refData = ref; }, data: this.filterData(), header: this.state.header, animates: this.state.animates })),
                        React.createElement(View, { style: {
                                width: "100%",
                                height: 20
                            } })))),
            React.createElement(SFooter, { data: this.filterData(), header: this.state.header, setHeader: function (header) {
                    _this.state.header = header;
                    // this.setState({ header: [...header]})
                }, style: {
                    backgroundColor: STheme.color.primary
                } })));
    };
    STable.defaultProps = {
        headerProps: {
            minWidth: 200,
            initialPosition: 50
        },
        dataProps: {}
    };
    return STable;
}(Component));
export default STable;
