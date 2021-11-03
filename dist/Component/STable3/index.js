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
import { SText, SLoad, SOrdenador, SScrollView2, STheme, SThread, SView } from '../../index';
import SGradient from '../SGradient';
import { SInput } from '../SInput';
import SPagination from '../SPagination';
import ExportExcel from './ExportExcel';
var STable2 = /** @class */ (function (_super) {
    __extends(STable2, _super);
    function STable2(props) {
        var _this = _super.call(this, props) || this;
        _this._anim = {
            size: new Animated.Value(0),
            headerSize: {},
            headerPosition: {}
        };
        _this.buildData = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Object.keys(this.props.data).map(function (key, index) {
                    var obj = _this.props.data[key];
                    if (_this.props.filter) {
                        if (!_this.props.filter(obj, index)) {
                            return null;
                        }
                    }
                    _this.state.data[key] = {};
                    _this.props.header.map(function (item, indexh) {
                        var datoRec = _this.getDatoRecursive(obj, item.key);
                        if (item.render) {
                            var dateRender = item.render(datoRec);
                            if (dateRender) {
                                if (typeof dateRender == "object") {
                                    if (dateRender.type) {
                                        return;
                                    }
                                }
                                _this.state.data[key][item.key] = dateRender;
                            }
                        }
                        else {
                            _this.state.data[key][item.key] = datoRec;
                        }
                    });
                });
                new SThread(100, "as", false).start(function () {
                    _this.setState({
                        isLoad: true
                    });
                });
                return [2 /*return*/];
            });
        }); };
        _this.header = function () {
            if (!_this.state.isLoad) {
                return React.createElement(SLoad, null);
            }
            var size = 0;
            return React.createElement(SView, { height: true, row: true, animated: true, style: {
                    width: _this._anim.size
                } },
                React.createElement(SView, { style: { position: "absolute" }, col: "xs-12", height: true },
                    React.createElement(SGradient, { colors: [
                            STheme.color.secondary + "00",
                            STheme.color.background + "99",
                            STheme.color.primary + "ff",
                        ] })),
                _this.props.header.map(function (item, indexH) {
                    size += item.width + (_this.state.space * 2);
                    _this._anim.size.setValue(size);
                    return React.createElement(SView, { key: indexH, width: item.width + (_this.state.space * 2), height: true, style: {
                            padding: _this.state.space
                        }, center: true },
                        React.createElement(SView, { backgroundColor: STheme.color.primary + "ff", col: "xs-12", height: true, center: true },
                            React.createElement(SText, { bold: true, fontSize: 12 }, item.label)));
                }));
        };
        _this.data = function () {
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
            _this.dataProcesada = _this.buscar(_this.state.data);
            // console.log(orderArr);
            return new SOrdenador(orderArr).ordernarObject(_this.dataProcesada).slice(((_this.state.page - 1) * _this.state.limit), (_this.state.page * _this.state.limit)).map(function (key, index) {
                var obj = _this.state.data[key];
                return React.createElement(View, { style: {
                        flexDirection: "row"
                    } }, _this.props.header.map(function (item, indexH) {
                    var itm = obj[item.key];
                    if (item.key == "index") {
                        itm = ((_this.state.page - 1) * _this.state.limit) + index + 1;
                    }
                    // if (item.render) {
                    //     itm = item.render(itm);
                    // } else {
                    if (item.component) {
                        if (!itm) {
                            itm = "";
                        }
                        else {
                            itm = item.component(itm);
                        }
                    }
                    else {
                        if (typeof itm == "object") {
                            itm = JSON.stringify(itm);
                        }
                        itm = React.createElement(SText, null, itm);
                    }
                    // }
                    return (React.createElement(SView, { key: indexH + "" + index, width: item.width + (_this.state.space * 2), height: _this.state.height, style: {
                            padding: _this.state.space
                        } },
                        React.createElement(SView, __assign({ backgroundColor: index % 2 == 0 ? STheme.color.primary + "11" : STheme.color.secondary + "11", col: "xs-12", height: true, style: {
                                justifyContent: 'center',
                                overflow: 'hidden'
                            } }, item), _this.props.debug ? React.createElement(SText, null, JSON.stringify(obj[item.key])) : itm)));
                }));
            });
        };
        _this.Footer = function () {
            if (!_this.state.isLoad) {
                return React.createElement(SLoad, null);
            }
            var cantidad = _this.dataProcesada ? Object.keys(_this.dataProcesada).length : 0;
            return React.createElement(SView, { col: "xs-12", height: 30, center: true, backgroundColor: "#000", style: {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16
                }, row: true },
                React.createElement(SView, { col: "xs-4" },
                    React.createElement(SText, null,
                        "# ",
                        cantidad)),
                React.createElement(SView, { col: "xs-4" },
                    React.createElement(SPagination, { data: _this.dataProcesada, limit: _this.state.limit, page: _this.state.page, onChange: function (page) {
                            _this.setState({ page: page });
                        } })),
                React.createElement(SView, { col: "xs-4", center: true },
                    React.createElement(ExportExcel, { header: _this.props.header, getDataProcesada: function () {
                            return _this.dataProcesada;
                        } })));
        };
        _this.state = {
            limit: _this.props.limit || 20,
            space: 1,
            height: 40,
            page: 1,
            isLoad: false,
            data: {},
            buscador: ""
        };
        console.log("CONSTRUCTOR table");
        var data = _this.props.data;
        return _this;
    }
    STable2.prototype.componentDidMount = function () {
        console.log("COMPONENT table");
        this.buildData();
    };
    STable2.prototype.getDatoRecursive = function (obj, key) {
        var path = key.split("/");
        var data = obj;
        path.map(function (dir) {
            dir = dir.replace(/-.*/, "");
            if (dir == "") {
                return;
            }
            if (!data)
                data = {};
            if (typeof data == "string") {
                try {
                    data = JSON.parse(data);
                }
                catch (e) {
                    data = {};
                }
            }
            data = data[dir];
        });
        if (!data)
            data = "";
        return data;
    };
    STable2.prototype.buscar = function (data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var val = this.state.buscador.trim() || "";
        if (!val) {
            return data;
        }
        // if (val.length < 3) {
        //     return data;
        // }
        var lista_keys = Object.keys(data);
        // var arrPalabras = val.replaceAll(" ", "|");
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
            // var indexIn = str.length - val.length;
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
                // stric += txtTest.length;
                // if (txtTest.length < 3) {
                //     continue;
                // }
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
    STable2.prototype.render = function () {
        var _this = this;
        console.log("Render table");
        return (React.createElement(View, { style: {
                width: "100%",
                height: "100%"
            } },
            React.createElement(SView, { col: "xs-12", height: 30, center: true },
                React.createElement(SInput, { placeholder: "Buscar", height: true, onChangeText: function (val) {
                        new SThread(300, "buscadorTabla", true).start(function () {
                            _this.setState({
                                buscador: val
                            });
                        });
                    } })),
            React.createElement(SView, { col: "xs-12", flex: true, center: true },
                React.createElement(SScrollView2, { header: {
                        style: {
                            height: 30 + (this.state.space * 2)
                        },
                        content: this.header()
                    } }, this.data())),
            this.Footer()));
    };
    STable2.defaultProps = {};
    return STable2;
}(Component));
export default STable2;
