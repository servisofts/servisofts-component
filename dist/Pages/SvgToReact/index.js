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
import { SView, SPage, SInput, SButtom, } from '../../index';
var test = "";
var SvgToReact = /** @class */ (function (_super) {
    __extends(SvgToReact, _super);
    function SvgToReact(props) {
        var _this = _super.call(this, props) || this;
        _this.getClases = function (variant) {
            var clases = {};
            var myRegexp = /(.*?){(.*?)}/g;
            var match = myRegexp.exec(variant);
            while (match != null) {
                var clase = match[1].replace(/\s/g, '');
                var value = match[2].replace(/\s/g, '');
                value = value.replace(/:(.*?);/g, '="$&"');
                value = value.replace(/:/g, '');
                value = value.replace(/;/g, '');
                clases[clase] = value;
                match = myRegexp.exec(variant);
            }
            return clases;
        };
        _this.transformarTexto = function (texto) {
            // texto = texto.replace(/\s/g, '');
            var myString = texto.replace(/\n/g, '');
            var result = myString;
            var defs = result.match(/<defs>(.*?)<\/defs>/g);
            try {
                var styles = /<style>(.*?)<\/style>/g.exec(result)[1];
                var clases = _this.getClases(styles);
                Object.keys(clases).map(function (key) {
                    var value = clases[key];
                    result = result.replace(new RegExp("class=" + key + "\"", 'g'), "" + value);
                });
            }
            catch (e) {
            }
            result = result.replace(/<defs>(.*?)<\/defs>/g, '');
            var title = result.match(/<title>(.*?)<\/title>/g);
            result = result.replace(/<title>(.*?)<\/title>/g, '');
            result = result.replace(/<g.*?>/g, "");
            result = result.replace(/<\/g.*?>/g, "");
            result = result.replace(/>/g, '>\n');
            result = result.replace(/svg/g, 'Svg');
            result = result.replace(/path/g, 'Path');
            result = result.replace(/circle/g, 'Circle');
            result = result.replace(/rect/g, 'Rect');
            result = result.replace(/xmlns=".*?"/g, '{...props}');
            var finalPage = "\nimport React from 'react'\nimport Svg from \"react-native-svg\";\nimport { Path, Rect, Line, Circle } from \"react-native-svg\";\n\nconst Web = (props) => (\n    " + result + "\n)\nconst Native = Web;\nexport default { Native, Web }";
            finalPage += "\n";
            _this.setState({ result: finalPage });
        };
        _this.state = {
            result: ""
        };
        return _this;
    }
    SvgToReact.prototype.render = function () {
        var _this = this;
        return (React.createElement(SPage, { title: "SvgToReact" },
            React.createElement(SView, { col: "xs-12", center: true },
                React.createElement(SView, { col: "xs-10 md-8 xl-6" },
                    React.createElement(SInput, { ref: function (input) { _this.input = input; }, props: {
                            label: "Ingresa el svg",
                            customStyle: "calistenia"
                        }, defaultValue: test, style: {
                            height: 200,
                            backgroundColor: "#99999966"
                        }, multiline: true })),
                React.createElement(SView, { col: "xs-10 md-8 xl-6", center: true, height: 60 },
                    React.createElement(SButtom, { props: {
                            type: "danger"
                        }, onPress: function () {
                            _this.transformarTexto(_this.input.getValue());
                        } }, "GENERAR")),
                React.createElement(SView, { col: "xs-10 md-8 xl-6" },
                    React.createElement(SInput, { props: {
                            label: "Resultado",
                            customStyle: "calistenia"
                        }, value: this.state.result, style: {
                            height: 400,
                            backgroundColor: "#99999966"
                        }, multiline: true })))));
    };
    return SvgToReact;
}(Component));
export default SvgToReact;
