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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import { SView } from '../../index';
import SHr from '../SHr';
import SOrdenador from '../SOrdenador';
var SList = /** @class */ (function (_super) {
    __extends(SList, _super);
    function SList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SList.prototype.getData = function () {
        var _this = this;
        var _a;
        return new SOrdenador((_a = this.props.order) !== null && _a !== void 0 ? _a : [{ key: "fecha_on", order: "desc", peso: 1 }]).ordernarObject(this.props.data).map(function (key, index) {
            var _a;
            var Item = _this.props.render(_this.props.data[key]);
            if (!Item)
                return null;
            return React.createElement(React.Fragment, null,
                Item,
                React.createElement(SHr, { height: (_a = _this.props.space) !== null && _a !== void 0 ? _a : 8 }));
        });
    };
    SList.prototype.render = function () {
        return (React.createElement(SView, __assign({ col: "xs-12" }, this.props), this.getData()));
    };
    return SList;
}(Component));
export default SList;
