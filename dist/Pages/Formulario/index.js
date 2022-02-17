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
import { SForm, SHr, SInput, SPage, SText, STheme, SView } from '../..';
var Formulario = /** @class */ (function (_super) {
    __extends(Formulario, _super);
    function Formulario(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            customStyle: "default"
        };
        return _this;
    }
    Formulario.prototype.getControls = function () {
        var _this = this;
        return React.createElement(SView, { col: "xs-12", backgroundColor: STheme.color.primary + "22", center: true, height: 100, row: true },
            React.createElement(SView, { col: "xs-11 md-6 xl-4" },
                React.createElement(SText, null, "Click para ver los diferentes: CustomStyle"),
                React.createElement(SInput, { customStyle: this.state.customStyle, type: "select", defaultValue: this.state.customStyle, options: ["calistenia", "bateon", "default", "primary", "secondary"], onChangeText: function (text) {
                        _this.setState({ customStyle: text });
                    } })));
    };
    Formulario.prototype.getForm = function () {
        return React.createElement(SForm, { col: "xs-11.5", row: true, style: {
                justifyContent: "space-around"
            }, inputProps: {
                customStyle: this.state.customStyle,
                col: "xs-11 md-3.5"
            }, inputs: {
                "default": { type: "default", label: "default", isRequired: true },
                "foto": { type: "image", label: "image", isRequired: true, height: 200 },
                "date": { type: "date", label: "date", isRequired: true },
                "email": { label: "email", type: "email", isRequired: true },
                "fecha": { label: "fecha", type: "fecha", isRequired: true },
                "money": { label: "money", type: "money", isRequired: true },
                "number": { label: "number", type: "number", isRequired: true },
                "password": { label: "password", type: "password", isRequired: true },
                "phone": { label: "phone", type: "phone", isRequired: true },
                "select": {
                    label: "select", type: "select", isRequired: true,
                    options: [
                        {
                            key: "key1",
                            content: (React.createElement(SText, { color: "#f0f" }, "Contenido"))
                        },
                        {
                            key: "key2",
                            content: (React.createElement(SText, { color: "#0ff" }, "Contenido"))
                        },
                    ]
                },
                "telefono": { label: "telefono", type: "telefono", isRequired: true },
                "telefono2": { label: "telefono2", type: "telefono", isRequired: true },
                "direccion": { label: "direccion", type: "direccion", isRequired: true },
                "file": { label: "file", type: "file", isRequired: true },
                "textArea": { label: "textArea", type: "textArea", isRequired: true },
                "customStyle": {
                    label: "customStyle", col: "xs-3", isRequired: true,
                    multiline: true,
                    value: "{ \n    label: \"customStyle\", col: \"xs-4\", isRequired: true,\n    multiline: true,\n    value:''\n    style: {\n        height: 100,\n        backgroundColor: STheme.color.primary,\n    }\n}",
                    style: {
                        height: 200,
                        backgroundColor: STheme.color.primary + "bb"
                    }
                }
            }, onSubmitName: "onSubmit", onSubmit: function (values) {
                alert(JSON.stringify(values));
            } });
    };
    Formulario.prototype.render = function () {
        return (React.createElement(SPage, { title: "Formulario" },
            React.createElement(SView, { col: "xs-12", center: true },
                this.getControls(),
                React.createElement(SHr, null),
                this.getForm())));
    };
    return Formulario;
}(Component));
export default Formulario;
