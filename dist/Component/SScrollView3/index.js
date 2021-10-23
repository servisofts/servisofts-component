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
import { ScrollView } from 'react-native';
import SView from '../SView';
var SScrollView3 = /** @class */ (function (_super) {
    __extends(SScrollView3, _super);
    function SScrollView3(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SScrollView3.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-12", height: true },
            React.createElement(ScrollView, null,
                React.createElement(ScrollView, { horizontal: true },
                    React.createElement(SView, { col: "xs-12" }, this.props.children)))));
    };
    return SScrollView3;
}(Component));
export default SScrollView3;
