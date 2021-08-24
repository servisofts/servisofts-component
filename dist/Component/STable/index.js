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
import SThread from '../SThread';
import SLoad from '../SLoad';
import SIcon from '../SIcon';
import SPopup from '../SPopup';
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
        _this.initDelete(lista);
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
    STable.prototype.initDelete = function (lista) {
        var _this = this;
        if (!this.props.onDelete) {
            return null;
        }
        lista.push({
            key: "key", label: "Eliminar", width: 100, render: function (key) {
                return React.createElement(SView, { style: {
                        width: "100%",
                        height: "100%"
                    }, center: true, onPress: function () {
                        SPopup.confirm({
                            title: "Eliminar",
                            message: "Esta seguro de eliminar?",
                            onClose: function () {
                                // input.setValue(data);
                            },
                            onPress: function () {
                                // this.props.data[key];
                                _this.props.onDelete(key);
                            }
                        });
                    } },
                    React.createElement(SIcon, { name: "Delete", width: 25, height: 25 }));
            }
        });
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
        return data;
    };
    STable.prototype.render = function () {
        var _this = this;
        if (this.state.reload) {
            this.state.reload = false;
            this.contentSize = new Animated.ValueXY({ x: this.props.headerProps.minWidth ? this.props.headerProps.minWidth : 8, y: 0 });
            this.headerPosition = new Animated.ValueXY({ x: 0, y: 0 });
            new SThread(300, "reloadTable", true).start(function () {
                _this.setState(__assign({}, _this.state));
            });
            return React.createElement(SLoad, null);
        }
        return (React.createElement(View, { style: {
                width: "100%",
                height: "100%"
            } },
            React.createElement(SHeadBar, __assign({}, this.props.headerProps, { reload: function () {
                    _this.setState({ reload: true });
                }, onAdd: this.props.onAdd, buscar: function (text) {
                    _this.state.buscador = __assign(__assign({}, _this.state.buscador), { value: text });
                    _this.setState({
                        buscador: __assign({}, _this.state.buscador)
                    });
                } })),
            React.createElement(SView, { style: {
                    width: "100%",
                    flex: 1
                } },
                React.createElement(SScrollView2, { ref: function (ref) { _this.scroll = ref; }, contentContainerStyle: {
                        minWidth: "100%"
                    }, header: {
                        style: {
                            height: 25
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
                        React.createElement(SData, __assign({}, this.props.dataProps, { actionTypes: this.props.actionTypes, onAction: this.props.onAction, onSelectRow: this.props.onSelectRow, ref: function (ref) { _this.refData = ref; }, buscador: this.state.buscador, data: this.filterData(), header: this.state.header, animates: this.state.animates, onEdit: this.props.onEdit })),
                        React.createElement(View, { style: {
                                width: "100%",
                                height: 20
                            } })))),
            React.createElement(SFooter, { data: this.filterData(), header: this.state.header, setHeader: function (header) {
                    _this.state.header = header;
                    // this.setState({ header: [...header]})
                }, reload: function () {
                    _this.setState({ reload: true });
                }, style: {
                    backgroundColor: STheme.color.primary
                } })));
    };
    STable.defaultProps = {
        headerProps: {
            minWidth: 500,
            initialPosition: 8
        },
        dataProps: {}
    };
    return STable;
}(Component));
export default STable;
