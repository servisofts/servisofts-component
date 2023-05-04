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
import { SHr, SList, SMath, SPage, SText, SView } from '../';
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    index.prototype.render = function () {
        var dataTest = [
            10,
            100,
            10000,
            21312.2133,
            234234,
            0,
            0.009,
            -100.323,
            "100",
            "1020203.320320"
        ];
        return (React.createElement(SPage, { title: 'SMath', center: true },
            React.createElement(SView, { col: "xs-11 sm-10 md-8 lg-6 xl-4" },
                React.createElement(SHr, { height: 50 }),
                React.createElement(SText, null, 'SMath.formatMoney(n)'),
                React.createElement(SList, { center: true, space: 16, data: dataTest, render: function (n) { return React.createElement(SText, { fontSize: 18, col: "xs-12", style: { textAlign: "end" } }, SMath.formatMoney(n)); } }),
                React.createElement(SHr, { height: 50 }),
                React.createElement(SText, null, 'SMath.formatMoney(n,0)'),
                React.createElement(SList, { center: true, space: 16, data: dataTest, render: function (n) { return React.createElement(SText, { fontSize: 18, col: "xs-12", style: { textAlign: "end" } }, SMath.formatMoney(n, 0)); } }),
                React.createElement(SHr, { height: 50 }),
                React.createElement(SText, null, 'SMath.formatMoney( n , 2 , "." )'),
                React.createElement(SList, { center: true, space: 16, data: dataTest, render: function (n) { return React.createElement(SText, { fontSize: 18, col: "xs-12", style: { textAlign: "end" } }, SMath.formatMoney(n, 2, ".")); } }),
                React.createElement(SHr, { height: 50 }),
                React.createElement(SText, null, 'SMath.formatMoney( n , 0 , "." )'),
                React.createElement(SList, { center: true, space: 16, data: dataTest, render: function (n) { return React.createElement(SText, { fontSize: 18, col: "xs-12", style: { textAlign: "end" } }, SMath.formatMoney(n, 0, ".")); } }))));
    };
    return index;
}(Component));
export default index;
