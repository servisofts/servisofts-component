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
import { ActivityIndicator } from 'react-native';
import STheme from '../STheme';
import SView from '../SView';
var SLoad = /** @class */ (function (_super) {
    __extends(SLoad, _super);
    function SLoad(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SLoad.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-12", center: true },
            React.createElement(ActivityIndicator, { color: STheme.color.text ? STheme.color.text : STheme.color.secondary })));
    };
    return SLoad;
}(Component));
export default SLoad;
