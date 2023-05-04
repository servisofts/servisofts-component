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
import { View } from 'react-native';
// import { SButtom, typeConfig } from '../SButtom';
import { SInput } from '../SInput/index';
import SView from '../SView/index';
// import { Col, TypeCol } from '../SView/cols';
import { SButtom } from '../SButtom/index';
import Submit from './submit';
import Upload from './Upload';
import SText from '../SText';
import STheme from '../STheme';
import SHr from '../SHr';
var SForm = /** @class */ (function (_super) {
    __extends(SForm, _super);
    function SForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            files: {}
        };
        _this._ref = {};
        return _this;
    }
    SForm.prototype.verify = function () {
        var _this = this;
        var isValid = true;
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            if (!input.verify()) {
                isValid = false;
            }
        });
        return isValid;
    };
    SForm.prototype.clear = function () {
        var _this = this;
        var isValid = true;
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            input.setValue("");
        });
        return this;
    };
    SForm.prototype.setValues = function (obj) {
        var _this = this;
        Object.keys(obj).map(function (key) {
            var input = _this._ref[key];
            input.setValue(obj[key]);
        });
    };
    SForm.prototype.getValues = function () {
        var _this = this;
        var obj = {};
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            obj[key] = input.getValue();
        });
        return obj;
    };
    SForm.prototype.focus = function (key) {
        if (this._ref[key]) {
            this._ref[key].focus();
        }
    };
    SForm.prototype.getFiles = function () {
        var _this = this;
        if (!this.state.files)
            this.state.files = {};
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            if (!input)
                return null;
            if (input.getType() == "file") {
                _this.state.files[key] = input.getValue();
                return;
            }
            if (input.getType() == "image") {
                _this.state.files[key] = input.getValue();
                return;
            }
        });
        return this.state.files;
    };
    SForm.prototype.uploadFiles = function (url, key) {
        console.log("ENRTO uploadFiles");
        var files = this.getFiles();
        Object.keys(files).map(function (key2) {
            if (key) {
                if (key != key2)
                    return;
            }
            var obj = files[key2];
            if (obj) {
                if (typeof obj != "string") {
                    Upload.sendPromise(obj[0], url);
                }
            }
        });
    };
    SForm.prototype.uploadFiles2 = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var files, arr_ref_keys, i, key, input, files, array, index, obj, name, resp;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    files = this.getFiles();
                                    arr_ref_keys = Object.keys(this._ref);
                                    i = 0;
                                    _b.label = 1;
                                case 1:
                                    if (!(i < arr_ref_keys.length)) return [3 /*break*/, 6];
                                    key = arr_ref_keys[i];
                                    input = this._ref[key];
                                    if (!input)
                                        return [3 /*break*/, 5];
                                    if (!(input.getType() == "file" || input.getType() == "image" || input.getType() == "files")) return [3 /*break*/, 5];
                                    files = input.getValue();
                                    if (!files)
                                        return [3 /*break*/, 5];
                                    this.state.files[key] = files;
                                    array = Object.values(files);
                                    index = 0;
                                    _b.label = 2;
                                case 2:
                                    if (!(index < array.length)) return [3 /*break*/, 5];
                                    obj = array[index];
                                    if (!obj) return [3 /*break*/, 4];
                                    if (!(typeof obj != "string")) return [3 /*break*/, 4];
                                    console.log(obj);
                                    if (!obj.file) return [3 /*break*/, 4];
                                    name = (_a = obj === null || obj === void 0 ? void 0 : obj.file) === null || _a === void 0 ? void 0 : _a.name;
                                    return [4 /*yield*/, Upload.sendPromise(obj, url + "/" + key + "/" + name)];
                                case 3:
                                    resp = _b.sent();
                                    console.log(resp);
                                    _b.label = 4;
                                case 4:
                                    index++;
                                    return [3 /*break*/, 2];
                                case 5:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 6:
                                    resolve("exito");
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    SForm.prototype.uploadFile = function (file, url) {
        console.log("ENRTO uploadFile");
        if (file) {
            if (typeof file != "string") {
                Upload.sendPromise(file[0], url);
            }
        }
    };
    SForm.prototype.submitFiles = function (data, key, url) {
        console.log("ENRTO submitFiles");
        this.getFiles();
        if (!this.state.files[key]) {
            return;
        }
        if (typeof this.state.files[key] === 'string') {
            return;
        }
        console.log(this.state.files[key]);
        Submit.http(data, url, this.state.files[key], function (res) {
        });
    };
    SForm.prototype.submit = function () {
        var _this = this;
        var data = {};
        var isValid = true;
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            if (!input.verify()) {
                isValid = false;
            }
            if (input.getType() == "files") {
                var files = input.getValue();
                if (!files)
                    return;
                try {
                    if (typeof files == "string") {
                        files = JSON.parse(files);
                    }
                }
                catch (e) {
                    return;
                }
                if (!files)
                    return;
                if (files.length > 0) {
                    _this.state.files[key] = files;
                    data[key] = files.map(function (obj) {
                        var _a;
                        if (!obj) {
                            return null;
                        }
                        if (typeof obj == "string") {
                            return obj;
                        }
                        if (obj.file) {
                            return (_a = obj === null || obj === void 0 ? void 0 : obj.file) === null || _a === void 0 ? void 0 : _a.name;
                        }
                        else {
                            return obj.name;
                        }
                    });
                }
                else {
                    data[key] = [];
                }
                return;
            }
            if (input.getType() == "file") {
                var files = input.getValue();
                if (!files)
                    return;
                if (typeof files == "string") {
                    data[key] = files;
                }
                else {
                    if (!files)
                        return;
                    if (files.length > 0) {
                        var file = files[0];
                        if (file.file) {
                            _this.state.files[key] = file;
                            data[key] = file.file.name;
                        }
                        else {
                            data[key] = file.name;
                        }
                    }
                }
                return;
            }
            if (input.getType() == "image") {
                var files = input.getValue();
                if (!files)
                    return;
                if (typeof files == "string") {
                    data[key] = files;
                }
                else {
                    if (!files)
                        return;
                    if (files.length > 0) {
                        var file = files[0];
                        if (file.file) {
                            _this.state.files[key] = file;
                            data[key] = file.file.name;
                        }
                        else {
                            data[key] = file.name;
                        }
                    }
                }
                return;
            }
            data[key] = input.getValue();
        });
        if (isValid) {
            if (this.props.onSubmit) {
                this.props.onSubmit(data, this);
            }
            return data;
        }
        return false;
    };
    SForm.prototype.getButtom = function () {
        var _this = this;
        // if (!this.props.onSubmit) return <View />
        if (!this.props.onSubmitName)
            return React.createElement(View, null);
        return React.createElement(SButtom, { loading: this.props.loading, props: __assign({ type: "danger" }, this.props.onSubmitProps), onPress: function () {
                _this.submit();
            } }, this.props.onSubmitName);
    };
    SForm.prototype.getInputs = function () {
        var _this = this;
        if (!this.props.inputs) {
            return React.createElement(View, null);
        }
        var readyFocus = false;
        return Object.keys(this.props.inputs).map(function (key) {
            var inputProps = _this.props.inputs[key];
            var focus = false;
            if (inputProps.type != "file"
                && inputProps.type != "image"
                && !readyFocus) {
                focus = true;
                readyFocus = true;
            }
            return React.createElement(SInput, __assign({ key: "imput_" + key, 
                // autoFocus={focus}
                name: key, placeholder: inputProps.label }, _this.props.inputProps, inputProps, { defaultValue: inputProps.defaultValue, ref: function (ref) {
                    _this._ref[key] = ref;
                } }));
        });
    };
    SForm.prototype.render_error = function () {
        if (!this.props.error)
            return null;
        return React.createElement(SView, { col: "xs-12", center: true },
            React.createElement(SHr, null),
            React.createElement(SText, { col: "xs-12", center: true, color: STheme.color.danger }, this.props.error));
    };
    SForm.prototype.render = function () {
        return (React.createElement(SView, __assign({ col: "xs-12" }, this.props, this.props.props),
            this.getInputs(),
            this.render_error(),
            React.createElement(SView, { col: "xs-12", style: {
                    height: 14
                } }),
            React.createElement(SView, { col: "xs-12", center: true }, this.getButtom())));
    };
    SForm.defaultProps = {
        props: {}
    };
    return SForm;
}(Component));
export default SForm;
