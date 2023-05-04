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
import { SHr, SPopup, SText, STheme, SView, SInput, SLoad } from '../../index';
import func from './func';
var KEY_POPUP_IMPORT = "";
var PopupImport = /** @class */ (function (_super) {
    __extends(PopupImport, _super);
    function PopupImport(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: false
        };
        return _this;
    }
    PopupImport.open = function (props, callback) {
        SPopup.open({
            key: KEY_POPUP_IMPORT,
            content: React.createElement(PopupImport, __assign({}, props, { callback: callback }))
        });
    };
    PopupImport.close = function () {
        SPopup.close(KEY_POPUP_IMPORT);
    };
    PopupImport.prototype.onChangeValue = function (files) {
        var _this = this;
        this.setState({ loading: "Decodificando excel..." });
        console.log("Cambio el valor...");
        var file = files[0].file;
        var data = func.create(__assign(__assign({}, this.props), { file: file, callback: function () {
                if (_this.props.callback)
                    _this.props.callback();
                _this.setState({ loading: false });
            } }));
        // this.setState({ loading: false })
        // PopupImport.close();
    };
    PopupImport.prototype.onPress = function () {
    };
    PopupImport.prototype.render = function () {
        if (this.state.loading)
            return React.createElement(SLoad, { type: 'window' });
        return React.createElement(SView, { width: 362, 
            // height={286}
            center: true, style: { borderRadius: 8, overflow: 'hidden' }, withoutFeedback: true, backgroundColor: STheme.color.background },
            React.createElement(SHr, { height: 30 }),
            React.createElement(SView, { col: "xs-12" },
                React.createElement(SText, { fontSize: 14, color: STheme.color.lightGray, center: true }, "Por favor, sube el archivo en formato Excel para que se pueda sincronizar con el sistema")),
            React.createElement(SHr, { height: 30 }),
            React.createElement(SView, { col: "xs-11", center: true },
                React.createElement(SInput, { type: "file", onChangeText: this.onChangeValue.bind(this) })),
            React.createElement(SView, { flex: true }),
            React.createElement(SView, { width: 140, height: 44, center: true, backgroundColor: STheme.color.primary, style: { borderRadius: 8 }, onPress: function () {
                    PopupImport.close();
                } },
                React.createElement(SText, { fontSize: 14, color: STheme.color.text, bold: true }, "SALIR")),
            React.createElement(SHr, { height: 30 }));
    };
    return PopupImport;
}(Component));
export default PopupImport;
