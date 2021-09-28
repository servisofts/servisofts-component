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
import SIcon from '../../../SIcon';
import SPage from '../../../SPage';
import SText from '../../../SText';
import STheme from '../../../STheme';
import SView from '../../../SView';
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Alert.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-11 md-6 xl-4", center: true, backgroundColor: STheme.color.background, withoutFeedback: true, style: {
                height: 260,
                borderRadius: 8,
                overflow: 'hidden'
            } },
            SPage.backgroundComponent,
            React.createElement(SView, { col: "xs-12", center: true },
                React.createElement(SView, { col: "xs-12", height: 90 },
                    React.createElement(SIcon, { name: "AlertOutline", fill: STheme.color.danger })),
                React.createElement(SView, { col: "xs-10", center: true, height: 40 },
                    React.createElement(SText, { fontSize: 12, center: true },
                        " ",
                        this.props.title,
                        " ")))));
    };
    return Alert;
}(Component));
export default Alert;
