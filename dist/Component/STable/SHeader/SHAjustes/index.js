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
import { SText, STheme, SView } from '../../../../index';
var SHAjustes = /** @class */ (function (_super) {
    __extends(SHAjustes, _super);
    function SHAjustes(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SHAjustes.prototype.render = function () {
        return (React.createElement(SView, { center: true, style: {
                width: 200,
                height: 300,
                backgroundColor: STheme.color.background,
                borderRadius: 8
            } },
            React.createElement(SText, null,
                " ",
                this.props.data.label,
                " "),
            React.createElement(SText, null,
                "Width: ",
                this.props.data.width,
                " ")));
    };
    return SHAjustes;
}(Component));
export default SHAjustes;
