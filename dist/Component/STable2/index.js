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
import { SText, SLoad, SOrdenador, SScrollView2, STheme, SThread, SView } from '../../index';
import SIcon from '../SIcon';
import { SInput } from '../SInput';
import SPagination from '../SPagination';
import ExportExcel from './ExportExcel';
import Header from './Header';
import Row from './Row';
var STable2 = /** @class */ (function (_super) {
    __extends(STable2, _super);
    function STable2(props) {
        var _this = _super.call(this, props) || this;
        _this.procesarData = function () {
            var dtStr = JSON.stringify(_this.props.data);
            if (_this.state.lastData == dtStr && _this.state.buscador == _this._buscador && _this.state.HFilter == _this._HFilter)
                return;
            _this._buscador = _this.state.buscador;
            _this._HFilter = _this.state.HFilter;
            _this.state.lastData = dtStr;
            _this.state.data = {};
            _this.state.totales = {};
            // this.setState({ isLoad: false });
            Object.keys(_this.props.data).map(function (key, index) {
                if (_this.props.filter) {
                    if (!_this.props.filter(_this.props.data[key], index)) {
                        return;
                    }
                }
                _this.state.data[key] = {};
                var isValid = true;
                _this.props.header.map(function (item) {
                    if (!isValid)
                        return;
                    _this.state.data[key][item.key] = Row.getDatoRecursive(_this.props.data[key], item.key, index);
                    if (item.render) {
                        _this.state.data[key][item.key] = item.render(_this.state.data[key][item.key]);
                    }
                    if (_this.state.HFilter[item.key]) {
                        var filtro = _this.state.HFilter[item.key];
                        var expreg = new RegExp(filtro, "i");
                        var data = _this.state.data[key][item.key];
                        if (typeof data != "string") {
                            data = JSON.stringify(data);
                        }
                        if (!expreg.test(data)) {
                            isValid = false;
                            delete _this.state.data[key];
                        }
                    }
                    if (item.sumar) {
                        if (!_this.state.totales[item.key]) {
                            _this.state.totales[item.key] = 0;
                        }
                        _this.state.totales[item.key] += parseFloat(_this.state.data[key][item.key]);
                    }
                });
            });
            _this.state.data = _this.buscar(_this.state.data);
            new SThread(100, "as", false).start(function () {
                _this.setState({ isLoad: true });
            });
        };
        _this._animHeader = {};
        _this.getHeader = function () {
            return _this.props.header.map(function (item, index) {
                _this._animHeader[item.key] = new Animated.Value(item.width);
                _this._animSize = Animated.add(_this._animSize, _this._animHeader[item.key]);
                _this._animSize = Animated.add(_this._animSize, new Animated.Value(_this.state.space));
                return React.createElement(Header, __assign({}, item, { total: _this.state.totales[item.key], filter_h: _this.state.HFilter[item.key], key_header: item.key, animWidth: _this._animHeader[item.key], space: _this.state.space, changeHF: function (filter) {
                        _this.state.HFilter[item.key] = filter;
                        _this.setState({ HFilter: __assign({}, _this.state.HFilter) });
                    } }));
            });
        };
        _this.getData = function () {
            if (!_this.state.isLoad) {
                return React.createElement(SLoad, null);
            }
            var orderArr = [];
            orderArr.push({ key: "Peso", order: "desc", peso: 4 });
            _this.props.header.map(function (header, i) {
                if (header.order) {
                    orderArr.push({ key: header.key, order: header.order, peso: header.orderPriority || 2 });
                }
            });
            return new SOrdenador(orderArr).ordernarObject(_this.state.data).slice(((_this.state.page - 1) * _this.state.limit), (_this.state.page * _this.state.limit)).map(function (itemData, i) {
                var data = _this.state.data[itemData];
                return React.createElement(Row, { index: ((_this.state.page - 1) * _this.state.limit) + i, height: 50, space: _this.state.space, data: data, header: _this.props.header, animHeader: _this._animHeader, animSize: _this._animSize });
            });
        };
        _this.Footer = function () {
            // if (!this.state.isLoad) {
            //     return <SLoad />
            // }
            var cantidad = _this.props.data ? Object.keys(_this.state.data).length : 0;
            return React.createElement(SView, { col: "xs-12", height: 30, center: true, backgroundColor: STheme.color.primary, style: {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16
                }, row: true },
                React.createElement(SView, { col: "xs-4" },
                    React.createElement(SText, null,
                        "# ",
                        cantidad)),
                React.createElement(SView, { col: "xs-4" },
                    React.createElement(SPagination, { data: _this.state.data, limit: _this.state.limit, page: _this.state.page, onChange: function (page) {
                            _this.setState({ page: page });
                        } })),
                React.createElement(SView, { col: "xs-4", center: true, style: {
                        alignItems: "flex-end",
                        paddingRight: 8
                    } },
                    React.createElement(ExportExcel, { header: _this.props.header, getDataProcesada: function () {
                            return _this.state.data;
                        } })));
        };
        _this.state = {
            limit: _this.props.limit || 20,
            space: 4,
            height: 40,
            page: 1,
            isLoad: false,
            data: {},
            buscador: "",
            HFilter: {},
            totales: {}
        };
        return _this;
    }
    STable2.prototype.componentDidMount = function () {
    };
    STable2.prototype.buscar = function (data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var val = this.state.buscador.trim() || "";
        if (!val) {
            return data;
        }
        var lista_keys = Object.keys(data);
        var arrPalabras = val.split(" ");
        var arr2 = [];
        var objFinal = {};
        var stric = 0;
        lista_keys.map(function (key, i) {
            var obj = data[key];
            var str = JSON.stringify(obj);
            var isValid = false;
            var peso = 0;
            val = val.toLowerCase();
            str = str.toLowerCase();
            var indexOf = str.indexOf(val);
            if (indexOf > -1) {
                peso += 100 / indexOf;
                isValid = true;
            }
            var expreg3 = new RegExp(":.?" + val + ".?(,|})", "i");
            if (expreg3.test(str)) {
                peso = peso + 50;
                isValid = true;
            }
            for (var i_1 = 0; i_1 < arrPalabras.length; i_1++) {
                var txtTest = arrPalabras[i_1];
                var expreg = new RegExp(":.*?" + txtTest + ".*?(,|})", "i");
                var expreg2 = new RegExp("dato.:.*?" + txtTest + ".*?(,|}|\")?", "i");
                if (expreg.test(str) || expreg2.test(str)) {
                    isValid = true;
                    peso += 1;
                }
            }
            if (peso < arrPalabras.length) {
                isValid = false;
            }
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
    STable2.prototype.filtro_de_cabeceras = function (data) {
        return true;
    };
    STable2.prototype.render = function () {
        var _this = this;
        this._animSize = new Animated.Value(0);
        this._animSize.addListener(function (_a) {
            var value = _a.value;
            _this.size = value;
        });
        // if (this.sizeW) {
        //     this._animSize.setValue(this.sizeW);
        // }
        var anims = this._animSize;
        this.procesarData();
        return (React.createElement(View, { style: {
                width: "100%",
                height: "100%"
            } },
            React.createElement(SView, { col: "xs-12", height: 30, center: true },
                React.createElement(SInput, { placeholder: "Buscar", col: "xs-11.9", height: 24, style: {
                        backgroundColor: STheme.color.primary + "BB",
                        borderRadius: 4,
                        paddingLeft: 8,
                        height: 24
                    }, icon: React.createElement(SIcon, { name: "Search", width: 16, fill: STheme.color.secondary }), onChangeText: function (txt) {
                        new SThread(400, "tbl_buscar", true).start(function () {
                            _this.setState({ buscador: txt });
                        });
                    } })),
            React.createElement(SView, { col: "xs-12", flex: true, center: true, onLayout: function (e) {
                    _this.sizeW = e.nativeEvent.layout.width;
                    // anims.setValue(this.sizeW);
                } },
                React.createElement(SScrollView2, { ref: function (ref) { return _this.scroll = ref; }, header: {
                        style: { height: 40 },
                        content: React.createElement(SView, { col: "xs-12", row: true, height: true }, this.getHeader())
                    } },
                    React.createElement(SView, { animated: true, style: {
                            width: this._animSize
                        } },
                        this.getData(),
                        React.createElement(SView, { height: 200 })))),
            this.Footer()));
    };
    STable2.defaultProps = {};
    return STable2;
}(Component));
export default STable2;
