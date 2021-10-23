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
import { SIcon, SPage, SView } from '../..';
var SViewPage = /** @class */ (function (_super) {
    __extends(SViewPage, _super);
    function SViewPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SViewPage.prototype.render = function () {
        return (React.createElement(SPage, { title: "SView" },
            React.createElement(SView, { col: "xs-12", height: 50, row: true },
                React.createElement(SView, { col: "xs-12 sm-10 md-8 lg-6 xl-4", height: true, backgroundColor: "#00f" }),
                React.createElement(SView, { width: 50, height: true, backgroundColor: "#0ff" },
                    React.createElement(SIcon, { name: "Girl" })))));
    };
    return SViewPage;
}(Component));
export default SViewPage;
