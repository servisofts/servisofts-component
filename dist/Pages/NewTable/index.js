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
import STable2 from '../../Component/STable2';
var DataTest = {
    "1": { "key": "1", "name": "A", "value": "123" },
    "2": { "key": "2", "name": "B", "value": "456" },
    "3": { "key": "3", "name": "C", "value": "789" },
    "4": { "key": "4", "name": "D", "value": "101112" },
    "5": { "key": "5", "name": "E", "value": "131415" },
    "6": { "key": "6", "name": "F", "value": "161718" },
    "7": { "key": "7", "name": "G", "value": "192021" }
};
var NewTable = /** @class */ (function (_super) {
    __extends(NewTable, _super);
    function NewTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    NewTable.prototype.render = function () {
        return (React.createElement(SPage, { title: "STable", disableScroll: true },
            React.createElement(STable2, { header: [
                    { key: "index", label: "#", width: 35 },
                    { key: "name", label: "Nombre", width: 100 },
                    { key: "value", label: "value", width: 100 }
                ], data: DataTest })));
    };
    return NewTable;
}(Component));
export default NewTable;
