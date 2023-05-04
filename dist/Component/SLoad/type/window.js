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
import { SHr, SLoad, SText, STheme, SView } from '../../..';
import SLoadContainer from '../SLoadContainer';
var window = /** @class */ (function (_super) {
    __extends(window, _super);
    function window(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    window.renderGlobal = function (ITEM) {
        var _a;
        SLoadContainer.add((_a = {}, _a[ITEM.props.key] = ITEM, _a));
    };
    window.prototype.render = function () {
        var _a;
        if (this.props.hidden) {
            SLoadContainer.remove(this.props.key);
            return null;
        }
        return (React.createElement(SView, { col: "xs-12", center: true, height: true, style: {
                position: "absolute",
                backgroundColor: (_a = this.props.color) !== null && _a !== void 0 ? _a : STheme.color.background + "CC"
            } },
            React.createElement(SLoad, null),
            React.createElement(SHr, null),
            React.createElement(SText, null, this.props.label),
            React.createElement(SHr, null),
            React.createElement(SHr, null),
            this.props.onCancel ? React.createElement(SText, { underLine: true, onPress: this.props.onCancel }, "Cancelar") : null));
    };
    return window;
}(Component));
export default window;
