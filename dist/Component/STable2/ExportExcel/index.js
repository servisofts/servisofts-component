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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { Component } from 'react';
import { SView, SIcon } from '../../../index';
import xlsx from 'xlsx-color';
import SaveFile from './SaveFile';
import SOrdenador from '../../SOrdenador';
var ExportExcel = /** @class */ (function (_super) {
    __extends(ExportExcel, _super);
    function ExportExcel(props) {
        var _this = _super.call(this, props) || this;
        _this.buildExcel = function () { return __awaiter(_this, void 0, void 0, function () {
            var header, data, xf, spreadsheet, sheets, _i, _a, sheet, worksheet;
            return __generator(this, function (_b) {
                header = this.buildHeader();
                data = this.buildData();
                xf = "./prueba.xlsx";
                spreadsheet = xlsx.utils.book_new();
                sheets = {
                    "Hoja 1": __spreadArray([
                        header
                    ], data, true)
                };
                for (_i = 0, _a = Object.keys(sheets); _i < _a.length; _i++) {
                    sheet = _a[_i];
                    worksheet = xlsx.utils.aoa_to_sheet(sheets[sheet]);
                    xlsx.utils.book_append_sheet(spreadsheet, worksheet, sheet);
                }
                spreadsheet.Sheets["Hoja 1"]["!cols"] = this.buildHeaderProps();
                this.buildHeaderStyle(spreadsheet.Sheets["Hoja 1"]);
                SaveFile.saveExel(spreadsheet, "Reporte");
                return [2 /*return*/];
            });
        }); };
        _this.state = {};
        return _this;
    }
    ExportExcel.prototype.toLetters = function (num) {
        var mod = num % 26, pow = num / 26 | 0, out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
        return pow ? this.toLetters(pow) + out : out;
    };
    ExportExcel.prototype.buildHeaderStyle = function (ws) {
        var _this = this;
        var fill = {
            patternType: "solid",
            fgColor: { rgb: "000000" }
        };
        var font = {
            color: {
                rgb: "FFFFFF"
            },
            bold: true
        };
        // var border = {
        //     bottom: {
        //         style: "thin",
        //         color: {
        //             theme: 5,
        //             tint: "1",
        //             rgb: "000000"
        //         }
        //     }
        // };
        var header = this.props.header;
        header.map(function (item, index) {
            var letter = _this.toLetters(index + 1);
            ws[letter + '1'].s = {
                fill: fill,
                font: font
            };
        });
    };
    ExportExcel.prototype.buildHeaderProps = function () {
        var header = this.props.header;
        var headerArray = [];
        header.map(function (item, index) {
            headerArray.push({
                wpx: item.width
            });
        });
        return headerArray;
    };
    ExportExcel.prototype.buildHeader = function () {
        var header = this.props.header;
        var headerArray = [];
        header.map(function (item, index) {
            headerArray.push(item.label);
        });
        return headerArray;
    };
    ExportExcel.prototype.buildData = function () {
        var header = this.props.header;
        var data = this.props.getDataProcesada();
        var dataArr = [];
        var orderArr = [];
        orderArr.push({ key: "Peso", order: "desc", peso: 4 });
        this.props.header.map(function (header, i) {
            if (header.order) {
                orderArr.push({ key: header.key, order: header.order, peso: header.orderPriority });
            }
        });
        new SOrdenador(orderArr).ordernarObject(data).map(function (key) {
            var item = data[key];
            var arrT = [];
            header.map(function (head) {
                var dataFinal = "";
                if (item.finded) {
                    dataFinal = item.finded[head.key];
                }
                else {
                    dataFinal = item[head.key] || "";
                }
                if (typeof dataFinal == "object") {
                    dataFinal = JSON.stringify(dataFinal);
                }
                arrT.push(dataFinal);
            });
            dataArr.push(arrT);
        });
        return dataArr;
    };
    ExportExcel.prototype.render = function () {
        var _this = this;
        return (React.createElement(SView, { style: {
                width: 30,
                height: 26
            }, onPress: function () {
                _this.buildExcel();
            } },
            React.createElement(SIcon, { name: 'Excel' })));
    };
    return ExportExcel;
}(Component));
export default ExportExcel;
