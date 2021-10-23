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
import { SView, SText, STheme } from '../../../index';
import { SInput } from '../../SInput';
import SOrdenador from '../../SOrdenador';
import SPopup from '../../SPopup';
var SData = /** @class */ (function (_super) {
    __extends(SData, _super);
    function SData(props) {
        var _this = _super.call(this, props) || this;
        _this.reloadAnimate = function () {
            console.log("Recargando animate");
            // this.setState({ headerLoad: false })
        };
        _this.getData = function (obj, key) {
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
        _this.state = {
            data: props.data,
            renderData: {},
            colorSelect: STheme.color.primary,
            select: {
                x: -1,
                y: -1
            }
        };
        _this._inputs = {};
        _this.animHeight = new Animated.Value(_this.props.defaultHeight);
        return _this;
        // this.initialiceData();
    }
    SData.prototype.getDataProcesada = function () {
        return this.dataProcesada;
    };
    // initialiceData() {
    //     var headerRender = this.props.header.map((header, i) => {
    //         if (header.render) {
    //             return header;
    //         }
    //         return null;
    //     })
    //     if (this.props.data) {
    //         headerRender.map((header) => {
    //             if (!header) return;
    //             Object.keys(this.state.data).map((key) => {
    //                 var obj = this.state.data[key];
    //                 var valor = this.getData(obj, header.key);
    //                 var data = null;
    //                 if (!this.state.renderData[key]) this.state.renderData[key] = {};
    //                 if (!this.state.renderData[key][header.key]) this.state.renderData[key][header.key] = {};
    //                 if (this.state.renderData[key][header.key].data != valor) {
    //                     data = header.render(valor);
    //                     this.state.renderData[key][header.key] = {
    //                         comp: data,
    //                         data: valor
    //                     };
    //                 } else {
    //                     data = this.state.renderData[key][header.key].comp;
    //                 }
    //                 if (typeof data != "object") {
    //                     this.state.data[key][header.key] = data;
    //                 }
    //             })
    //         });
    //     }
    // }
    SData.prototype.buscar = function (data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var val = this.props.buscador.value.trim() || "";
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
        lista_keys.map(function (key) {
            var obj = data[key];
            var str = JSON.stringify(obj);
            var isValid = false;
            var peso = 0;
            val = val.toLowerCase();
            if (str.indexOf(val) > -1) {
                peso = 100;
                isValid = true;
            }
            for (var i = 0; i < arrPalabras.length; i++) {
                var txtTest = arrPalabras[i];
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
    SData.prototype.getColorHover = function (_a) {
        var x = _a.x, y = _a.y, position = _a.position;
        // if ((this.state.select.x == x && this.state.select.y == y)) {
        //     return this.state.colorSelect + "66";
        // }
        // if ((this.state.select.x == x || this.state.select.y == y)) {
        //     return this.state.colorSelect + "22";
        // }
        if (position % 2 != 0) {
            return STheme.color.secondary + "11";
        }
        return "transparent";
    };
    SData.prototype.recursiveDataReplace = function (data, key, newValue) {
        var dataFinal = data;
        var arr = key.split("/");
        for (var i = 0; i < arr.length - 1; i++) {
            if (dataFinal) {
                dataFinal = dataFinal[arr[i]];
                // if (dataFinal) {
                // data = dataFinal;
                // }
            }
        }
        dataFinal[arr[arr.length - 1]] = newValue;
        return data;
    };
    SData.prototype.getDataEditable = function (_data, header, position, key) {
        var _this = this;
        var data = _data;
        if (!data) {
            data = "";
        }
        if (this.state.data[key]) {
            if (!this.state.data[key].finded) {
                // if (typeof this.state.data[key] == "object") {
                this.state.data[key].finded = {};
                // }
            }
            if (typeof data != "object") {
                if (this.state.data[key].finded) {
                    // if (this.state.data[key].finded[header.key]) {
                    this.state.data[key].finded[header.key] = data;
                    // }
                }
            }
        }
        if (header.editable) {
            // if (typeof data != "string") {
            //     return "Editable no string"
            // }
            return React.createElement(SInput, { ref: function (ref) { return _this._inputs[header.key + position] = ref; }, defaultValue: data, selectTextOnFocus: true, type: header.type, options: header.options, onBlur: function () {
                    var input = _this._inputs[header.key + position];
                    if (!input) {
                        return;
                    }
                    if (input.getValue() != data) {
                        SPopup.confirm({
                            title: "Esta seguro que desea editar el campo \"" + header.label + "\"?",
                            message: "El valor actual es \"" + data + "\" \nse remplazara por \"" + input.getValue() + "\"",
                            onClose: function () {
                                input.setValue(data);
                            },
                            onPress: function () {
                                if (_this.props.onEdit) {
                                    var dataTemp = __assign({}, _this.state.data[key]);
                                    if (dataTemp.finded)
                                        delete dataTemp.finded;
                                    var arr = header.key.split("/");
                                    if (arr.length > 1) {
                                        _this.recursiveDataReplace(dataTemp, header.key, input.getValue());
                                    }
                                    else {
                                        dataTemp[arr[0]] = input.getValue();
                                    }
                                    _this.props.onEdit(dataTemp, { key: header.key, value: input.getValue() });
                                }
                            }
                        });
                    }
                }, style: {} });
        }
        return (React.createElement(SText, { col: "xs-11" }, data));
    };
    SData.prototype.getRow = function (obj, key, position) {
        var _this = this;
        return this.props.header.map(function (header, i) {
            if (header.hidden)
                return React.createElement(View, null);
            var Anims = _this.props.animates;
            // if (!Anims) {
            //     return <View />
            // }
            // if (!Anims.widthHeaderAnim) {
            //     return <View />
            // }
            var DATA = _this.getData(obj, header.key);
            if (header.key == "index") {
                DATA = position;
            }
            // if (header.key == "key") {
            //     DATA = key;
            // }
            if (header.render) {
                if (!_this.state.renderData[key])
                    _this.state.renderData[key] = {};
                if (!_this.state.renderData[key][header.key])
                    _this.state.renderData[key][header.key] = {};
                if (_this.state.renderData[key][header.key].data != DATA) {
                    DATA = header.render(DATA, obj);
                }
                else {
                    DATA = _this.state.renderData[key][header.key].comp;
                }
            }
            DATA = _this.getDataEditable(DATA, header, position, key);
            return (React.createElement(SView, { animated: true, center: true, style: __assign({ position: "absolute", height: "100%", borderWidth: 1, borderColor: STheme.color.background + "22", backgroundColor: _this.getColorHover({ x: header.key, y: key, position: position }) }, (!Anims ? {} : __assign({}, (!Anims.widthHeaderAnim ? {} : {
                    left: (Anims.positionHeader[header.key] ? Anims.positionHeader[header.key].x : 0),
                    width: (Anims.widthHeaderAnim[header.key] ? Anims.widthHeaderAnim[header.key].x : header.width),
                    zIndex: (Anims.animSelect[header.key] ? Anims.animSelect[header.key] : 1)
                })))) },
                React.createElement(SView, { center: true, style: {
                        width: "100%",
                        height: "100%",
                        overflow: 'hidden'
                    } }, DATA)));
        });
    };
    SData.prototype.render = function () {
        var _this = this;
        // if (!this.props.animates) {
        //     return <View />
        // }
        var i = (this.props.page - 1) * this.props.limit;
        var orderArr = [];
        orderArr.push({ key: "Peso", order: "desc", peso: 4 });
        this.props.header.map(function (header, i) {
            if (header.order) {
                orderArr.push({ key: header.key, order: header.order, peso: header.orderPriority });
            }
        });
        this.dataProcesada = this.buscar(this.state.data);
        this.props.onLoadEnd(this.dataProcesada);
        return new SOrdenador(orderArr).ordernarObject(this.dataProcesada).slice(((this.props.page - 1) * this.props.limit), (this.props.page * this.props.limit)).map(function (key) {
            var obj = _this.state.data[key];
            i++;
            return (React.createElement(SView, { animated: true, row: true, style: {
                    width: "100%",
                    height: _this.animHeight
                } }, _this.getRow(obj, key, i)));
        });
    };
    SData.defaultProps = {
        defaultHeight: 30,
        ordenador: [],
        limit: 25,
        page: 1
    };
    return SData;
}(Component));
export default SData;
