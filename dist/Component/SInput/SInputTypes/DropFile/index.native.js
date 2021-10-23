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
import React, { Component } from 'react';
import { SView } from '../../../../index';
import ImagePicker from 'react-native-image-picker';
var DropFile = /** @class */ (function (_super) {
    __extends(DropFile, _super);
    function DropFile(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    DropFile.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-12", height: true, onPress: function () {
                // DocumentPicker.pick({
                //     type: ["image/*"]
                // }).then((uri) => {
                // });
                ImagePicker.showImagePicker({
                    title: 'Seleccionar una Foto',
                    takePhotoButtonTitle: "Tomar Foto...",
                    chooseFromLibraryButtonTitle: "Elegir de la Biblioteca...",
                    allowEditing: true,
                    mediaType: 'photo',
                    cancelButtonTitle: "Cancelar",
                    storageOptions: {
                        skipBackup: true,
                        // path: 'image',
                        privateDirectory: true
                    }
                }, function (response) {
                });
            } },
            React.createElement(SView, { height: true, col: "xs-12", style: {
                    borderRadius: 4
                }, center: true })));
    };
    return DropFile;
}(Component));
export default DropFile;
