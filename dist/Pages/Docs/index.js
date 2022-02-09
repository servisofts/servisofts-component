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
import { SPage, SText } from '../../index';
var TEXT = {
    title: {
        en: "Servisofts Component",
        es: "Servisofts Component"
    },
    body: {
        en: "Servisofts Component is a library for Android, IOS & web for easing app development in react-native-web.",
        es: "Servisofts Component es una libreria para Android, IOS & web para facilitar el desarrollo de aplicaciones en react-native-web."
    }
};
var Docs = /** @class */ (function (_super) {
    __extends(Docs, _super);
    function Docs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            len: "es"
        };
        return _this;
    }
    Docs.prototype.render = function () {
        return (React.createElement(SPage, { title: 'Documentacion' },
            React.createElement(SText, null, TEXT.title[this.state.len]),
            React.createElement(SText, null, TEXT.body[this.state.len])));
    };
    return Docs;
}(Component));
export default Docs;
