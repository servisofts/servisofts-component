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
import { SPage } from '../..';
import STable from '../../Component/STable';
var STablePage = /** @class */ (function (_super) {
    __extends(STablePage, _super);
    function STablePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    STablePage.prototype.render = function () {
        return (React.createElement(SPage, { title: "STable", disableScroll: true },
            React.createElement(STable, { header: [
                    { key: "index", label: "#", width: 35 },
                ], data: {
                    "1": {},
                    "2": {},
                    "3": {},
                    "4": {},
                    "5": {},
                    "6": {},
                    "7": {},
                    "8": {},
                    "9": {},
                    "10": {},
                    "11": {},
                    "12": {},
                    "13": {},
                    "14": {},
                    "15": {},
                    "16": {},
                    "17": {},
                    "18": {}
                } })));
    };
    return STablePage;
}(Component));
export default STablePage;
