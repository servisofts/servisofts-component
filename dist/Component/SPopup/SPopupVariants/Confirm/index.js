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
import SPopup from '../..';
import SHr from '../../../SHr';
import SPage from '../../../SPage';
import SText from '../../../SText';
import STheme from '../../../STheme';
import SView from '../../../SView';
var Confirm = /** @class */ (function (_super) {
    __extends(Confirm, _super);
    function Confirm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Confirm.prototype.componentWillUnmount = function () {
        if (this.props.onClose && !this.state.acept) {
            this.props.onClose();
        }
    };
    Confirm.prototype.handleAccept = function () {
        if (this.props.onPress) {
            this.state.acept = true;
            this.props.onPress();
        }
        SPopup.close("confirm");
    };
    Confirm.prototype.handleCancel = function () {
        if (this.props.onClose) {
            this.props.onClose();
        }
        SPopup.close("confirm");
    };
    Confirm.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-11 sm-10 md-7 sm-5 xl-3", center: true, backgroundColor: STheme.color.background, withoutFeedback: true, style: {
                maxHeight: 360,
                minHeight: 100,
                padding: 8,
                // borderWidth:2,
                // borderColor:STheme.color.text+"33",
                borderRadius: 16,
                overflow: 'hidden'
            } },
            SPage.backgroundComponent,
            React.createElement(SView, { col: "xs-12", center: true },
                React.createElement(SHr, null),
                React.createElement(SView, { col: "xs-11", center: true },
                    React.createElement(SText, { fontSize: 18, center: true, bold: true }, this.props.title)),
                React.createElement(SHr, { h: 16 }),
                React.createElement(SView, { col: "xs-12", row: true, center: true },
                    React.createElement(SView, { col: "xs-6", center: true },
                        React.createElement(SView, { onPress: this.handleCancel.bind(this), style: {
                                padding: 10,
                                paddingLeft: 18,
                                paddingRight: 18,
                                borderRadius: 8,
                                borderWidth: 1,
                                borderColor: STheme.color.primary,
                                backgroundColor: STheme.color.secondary
                            } },
                            React.createElement(SText, { color: STheme.color.primary }, "Cancelar"))),
                    React.createElement(SView, { col: "xs-6", center: true },
                        React.createElement(SView, { onPress: this.handleAccept.bind(this), style: {
                                borderWidth: 1,
                                borderColor: STheme.color.secondary,
                                padding: 10,
                                paddingLeft: 18,
                                paddingRight: 18,
                                borderRadius: 8,
                                backgroundColor: STheme.color.primary
                            } },
                            React.createElement(SText, { color: STheme.color.secondary }, "Confirmar")))),
                React.createElement(SHr, { h: 16 }),
                React.createElement(SView, { col: "xs-10", center: true },
                    React.createElement(SText, { fontSize: 12, center: true, color: STheme.color.gray }, this.props.message)),
                React.createElement(SHr, null))));
    };
    Confirm.defaultProps = {
        title: '',
        message: '',
        onPress: function () { },
        onClose: function () { }
    };
    return Confirm;
}(Component));
export default Confirm;
