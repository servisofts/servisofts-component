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
import { SIcon, SImage, SText, STheme, SView } from '../../../../index';
var delay = function (ms) { return new Promise(function (res) { return setTimeout(res, ms); }); };
var DropFile = /** @class */ (function (_super) {
    __extends(DropFile, _super);
    function DropFile(props) {
        var _this = _super.call(this, props) || this;
        _this.esperar = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, delay(300)];
                    case 1:
                        _a.sent();
                        if (this.isLoad) {
                            return [2 /*return*/];
                        }
                        this.isLoad = true;
                        document.querySelectorAll(".drop-zone__inputa" + ("_key_" + this.idInstance)).forEach(function (inputElement) {
                            var dropZoneElement = inputElement.closest(".dropZonea");
                            // dropZoneElement.addEventListener("click", (e) => {
                            //     e.preventDefault();
                            //     inputElement.click();
                            // });
                            inputElement.addEventListener("change", function (e) {
                                var _loop_1 = function (i) {
                                    var file = inputElement.files[i];
                                    ext = file.name.split('.').pop();
                                    // if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                                    fr = new FileReader();
                                    fr.onload = function (e) {
                                        _this.state.images.push({
                                            file: file,
                                            uri: e.target.result
                                        });
                                        if (_this.props.onChange) {
                                            _this.props.onChange(_this.state.images);
                                        }
                                        _this.setState(__assign({}, _this.state));
                                    };
                                    fr.readAsDataURL(file);
                                };
                                var ext, fr;
                                for (var i = 0; i < inputElement.files.length; i++) {
                                    _loop_1(i);
                                }
                            });
                            dropZoneElement.addEventListener("dragover", function (e) {
                                e.preventDefault();
                            });
                            ["dragleave", "dragend"].forEach(function (type) {
                                dropZoneElement.addEventListener(type, function (e) {
                                });
                            });
                            dropZoneElement.addEventListener("drop", function (e) {
                                e.preventDefault();
                                var Load = 0;
                                if (e.dataTransfer.files.length) {
                                    console.log(e);
                                    inputElement.files = e.dataTransfer.files;
                                }
                                var _loop_2 = function (i) {
                                    var file = inputElement.files[i];
                                    ext = file.name.split('.').pop();
                                    ext = ext.toLowerCase();
                                    // if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                                    fr = new FileReader();
                                    fr.onload = function (e) {
                                        _this.state.images.push({
                                            file: file,
                                            uri: e.target.result
                                        });
                                        if (_this.props.onChange) {
                                            _this.props.onChange(_this.state.images);
                                        }
                                        _this.setState(__assign({}, _this.state));
                                    };
                                    fr.readAsDataURL(file);
                                };
                                var ext, fr;
                                for (var i = 0; i < inputElement.files.length; i++) {
                                    _loop_2(i);
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.getImages = function () {
            if (_this.state.images.length <= 0) {
                return React.createElement(SText, { center: true }, "");
            }
            return React.createElement(SView, { row: true, center: true }, _this.state.images.map(function (image, index) {
                var _a, _b, _c, _d;
                return React.createElement(SView, { key: index, width: 100, height: 100, style: {
                        padding: 4,
                        overflow: 'hidden'
                    } },
                    React.createElement(SView, { key: index, width: true, height: true, center: true, style: {
                            // borderWidth: 1,
                            // borderColor: STheme.color.primary,
                            // backgroundColor: STheme.color.card,
                            borderRadius: 4
                        } },
                        React.createElement(SView, { col: "xs-8", colSquare: true, card: true },
                            React.createElement(SView, { col: "xs-12", height: true, style: {
                                    position: "absolute"
                                }, center: true },
                                React.createElement(SText, { color: STheme.color.gray, fontSize: 18, bold: true }, _this.getExtension((_b = (_a = image === null || image === void 0 ? void 0 : image.file) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : image.name))),
                            React.createElement(SView, { col: "xs-12", flex: true },
                                React.createElement(SImage, { src: image.uri }))),
                        React.createElement(SText, { fontSize: 8, center: true }, _this.getName((_d = (_c = image === null || image === void 0 ? void 0 : image.file) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : image.name)),
                        React.createElement(SView, { style: {
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: 25,
                                height: 25
                            }, onPress: function () {
                                _this.state.images.splice(index, 1);
                                if (_this.props.onChange) {
                                    _this.props.onChange(_this.state.images);
                                }
                                _this.setState(__assign({}, _this.state));
                            } },
                            React.createElement(SIcon, { name: "Delete" }))));
            }));
        };
        _this.state = {
            images: []
        };
        var value = props.defaultValue || "";
        if (value) {
            if (typeof value == "string") {
                try {
                    value = JSON.parse(value);
                }
                catch (e) {
                    // console.error("Value error", e)
                }
            }
            if (Array.isArray(value)) {
                if (props.filePath) {
                    value.map(function (itm) {
                        _this.state.images.push({
                            uri: props.filePath + "/" + props.name + "/" + itm,
                            name: itm
                        });
                    });
                    console.log(_this.state.images);
                    // console.log(props.filePath + "/" + props.name + "/" + value)
                }
            }
        }
        _this.onUpload = _this.props.onUpload;
        _this.idInstance = new Date().getTime();
        return _this;
    }
    DropFile.prototype.componentDidMount = function () {
        this.esperar();
    };
    DropFile.prototype.getFiles = function () {
        if (this.state.images.length <= 0) {
            return null;
        }
        return this.state.images.map(function (image, index) {
            return image.file;
        });
    };
    DropFile.prototype.getName = function (name) {
        if (!name)
            return;
        var arr = name.split('.');
        if (arr.length > 1) {
            var ext = arr.pop();
        }
        var name = arr.join('.');
        if (name.length > 15) {
            name = name.substr(0, 15) + '...';
        }
        return name;
    };
    DropFile.prototype.getExtension = function (name) {
        if (!name)
            return;
        var arr = name.split('.');
        if (arr.length > 1) {
            return arr.pop();
        }
        return "File";
    };
    DropFile.prototype.render = function () {
        var _this = this;
        return (React.createElement(SView, { col: "xs-12", height: true, style: {
                // backgroundColor:"#F0f",
                padding: 4
            } },
            React.createElement(SView, { height: true, col: "xs-12", style: {
                    borderRadius: 4
                }, center: true, onPress: function () {
                    document.getElementById("dropFileainp" + ("_key_" + _this.idInstance)).click();
                } },
                React.createElement("div", { id: "dropFilea" + ("_key_" + this.idInstance), style: {
                        // display:"flex",
                        width: "100%",
                        height: "100%"
                    }, className: "dropZonea", onClick: function () {
                        if (_this.props.onPress)
                            _this.props.onPress();
                    } },
                    React.createElement("input", { id: "dropFileainp" + ("_key_" + this.idInstance), type: 'file', name: 'file', className: 'drop-zone__inputa' + ("_key_" + this.idInstance), multiple: true, accept: "*/*", style: {
                            display: "none"
                        } }),
                    this.getImages()))));
    };
    return DropFile;
}(Component));
export default DropFile;
