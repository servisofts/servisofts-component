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
import { Platform, } from 'react-native';
import { SText, STheme, SView, SImage, SIcon } from '../../../../index';
// import DocumentPicker from 'react-native-document-picker';
// import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
var DropFile = /** @class */ (function (_super) {
    __extends(DropFile, _super);
    function DropFile(props) {
        var _this = _super.call(this, props) || this;
        _this.getImages = function () {
            if (_this.state.images.length <= 0) {
                return React.createElement(SText, { center: true }, "");
            }
            return React.createElement(SView, { row: true, center: true, col: "xs-12" }, _this.state.images.map(function (image, index) {
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
                        React.createElement(SView, { style: { position: "absolute", top: 0, right: 0, width: 25, height: 25 }, onPress: function () {
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
                    console.error("Value error", e);
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
        return _this;
    }
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
        return (React.createElement(SView, { col: "xs-12", flex: true, onPress: function () {
                // DocumentPicker.pick({
                //     type: ["image/*"]
                // }).then((uri) => {
                // });
                // ImagePicker.showImagePicker({
                //     title: 'Seleccionar una Foto',
                //     takePhotoButtonTitle: "Tomar Foto...",
                //     chooseFromLibraryButtonTitle: "Elegir de la Biblioteca...",
                //     allowEditing: true,
                //     mediaType: 'photo',
                //     cancelButtonTitle: "Cancelar",
                //     storageOptions: {
                //         skipBackup: true,
                //         // path: 'image',
                //         privateDirectory: true
                //     },
                // }, (response) => {
                // });
                launchImageLibrary({}, function (response) {
                    console.log(response);
                    if (response.assets) {
                        if (response.assets[0]) {
                            var file = response.assets[0];
                            _this.state.images.push({
                                file: __assign(__assign({}, file), { name: file.fileName }),
                                uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', '')
                            });
                            if (_this.props.onChange) {
                                _this.props.onChange(_this.state.images);
                            }
                            _this.setState(__assign({}, _this.state));
                        }
                    }
                });
            } },
            React.createElement(SView, { height: true, col: "xs-12", style: {
                    borderRadius: 4
                }, center: true }, this.getImages())));
    };
    return DropFile;
}(Component));
export default DropFile;
