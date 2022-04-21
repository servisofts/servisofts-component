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
import { SText, SPage, SHr, SDate } from "../..";
var Doc_SDate = /** @class */ (function (_super) {
    __extends(Doc_SDate, _super);
    function Doc_SDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doc_SDate.prototype.getFunction = function (name, funct) {
        if (typeof funct === 'object') {
            funct = JSON.stringify(funct);
        }
        return React.createElement(React.Fragment, null,
            React.createElement(SHr, null),
            React.createElement(SHr, null),
            React.createElement(SText, { bold: true }, name),
            React.createElement(SHr, null),
            React.createElement(SText, null, funct));
    };
    Doc_SDate.prototype.render = function () {
        return (React.createElement(SPage, { title: "SDate" },
            React.createElement(SHr, null),
            React.createElement(SText, { fontSize: 18, bold: true }, "SDate"),
            this.getFunction("new SDate().toString()", new SDate().toString()),
            this.getFunction('new SDate().toString("yyyy-MM-dd hh:mm")', new SDate().toString("yyyy-MM-dd hh:mm")),
            this.getFunction('new SDate().toString("yyyy-MM-dd")', new SDate().toString("yyyy-MM-dd")),
            this.getFunction('new SDate().toString("yyyy-MM-dd")', new SDate().toString("hh:mm")),
            this.getFunction('new SDate().toString("dd de MONTH de yyyy")', new SDate().toString("dd de MONTH de yyyy")),
            this.getFunction('new SDate().toString("yyyy, MON dd")', new SDate().toString("yyyy, MON dd")),
            this.getFunction('new SDate().getDay()', new SDate().getDay()),
            this.getFunction('new SDate().getMonth()', new SDate().getMonth()),
            this.getFunction('new SDate().getMonthJson()', new SDate().getMonthJson()),
            this.getFunction('new SDate().getDayOfWeek()', new SDate().getDayOfWeek()),
            this.getFunction('new SDate().getDayOfWeekJson()', new SDate().getDayOfWeekJson()),
            this.getFunction('new SDate("2020-02-29", "yyyy-MM-dd").getDayOfWeekJson()', new SDate("2020-02-29", "yyyy-MM-dd").getDayOfWeekJson()),
            this.getFunction('new SDate("2022-04-03", "yyyy-MM-dd").getDayOfWeekJson()', new SDate("2022-04-03", "yyyy-MM-dd").getDayOfWeekJson()),
            this.getFunction('new SDate().getFirstDayOfWeek()', new SDate().getFirstDayOfWeek()),
            this.getFunction('new SDate().getWeek()', new SDate().getWeek())));
    };
    return Doc_SDate;
}(Component));
export default Doc_SDate;
