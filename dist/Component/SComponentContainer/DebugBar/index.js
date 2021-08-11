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
import { View } from 'react-native';
import SText from '../../SText/index';
import STheme from '../../STheme/index';
import SView from '../../SView/index';
var DebugBar = /** @class */ (function (_super) {
    __extends(DebugBar, _super);
    function DebugBar(props) {
        return _super.call(this, props) || this;
    }
    DebugBar.prototype.render = function () {
        if (!this.props.debug)
            return React.createElement(View, null);
        return (React.createElement(SView, { style: {
                width: "100%",
                height: 20,
                backgroundColor: STheme.color.barColor
            }, dir: "row" },
            React.createElement(SView, { col: "xs-4" }),
            React.createElement(SView, { col: "xs-4" }),
            React.createElement(SView, { col: "xs-4", onPress: function () {
                    STheme.change();
                } },
                React.createElement(SText, null, "Theme"))));
    };
    return DebugBar;
}(Component));
export default DebugBar;
