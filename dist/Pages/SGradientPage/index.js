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
import { SGradient, SPage, SView } from '../..';
var SGradientPage = /** @class */ (function (_super) {
    __extends(SGradientPage, _super);
    function SGradientPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SGradientPage.prototype.render = function () {
        return (React.createElement(SPage, { title: "SGradient" },
            React.createElement(SView, { col: "xs-12", center: true },
                React.createElement(SView, { col: "xs-11 md-8", center: true },
                    React.createElement(SView, { height: 16 }),
                    React.createElement(SView, { col: "xs-12", center: true, card: true, height: 100 },
                        React.createElement(SView, { width: 80, height: 80, style: {
                                borderRadius: 4,
                                overflow: 'hidden'
                            } },
                            React.createElement(SGradient, { colors: ["#f0f", "#f00", "#f00"] })))))));
    };
    return SGradientPage;
}(Component));
export default SGradientPage;
