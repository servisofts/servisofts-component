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
import { SButtom } from '../../../SButtom';
import SPage from '../../../SPage';
import SText from '../../../SText';
import STheme from '../../../STheme';
import SView from '../../../SView';
import { SInput } from '../../../SInput';
import SDate from '../../../SDate';
var DateBetween = /** @class */ (function (_super) {
    __extends(DateBetween, _super);
    function DateBetween(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    DateBetween.prototype.componentWillUnmount = function () {
        if (this.props.onClose && !this.state.acept) {
            this.props.onClose();
        }
    };
    DateBetween.prototype.render = function () {
        var _this = this;
        return (React.createElement(SView, { col: "xs-11 md-6 xl-4", center: true, backgroundColor: STheme.color.background, withoutFeedback: true, style: {
                height: 360,
                borderRadius: 8,
                overflow: 'hidden'
            } },
            SPage.backgroundComponent,
            React.createElement(SView, { col: "xs-12", center: true, height: true },
                React.createElement(SView, { col: "xs-11", center: true, height: 40 },
                    React.createElement(SText, { fontSize: 16, center: true, bold: true },
                        " ",
                        this.props.title,
                        " ")),
                React.createElement(SView, { col: "xs-11", center: true, row: true },
                    React.createElement(SView, { col: "xs-12 md-5.5", center: true },
                        React.createElement(SInput, { ref: function (ref) { return _this.fecha_ini = ref; }, type: 'date', label: "Fecha inicio", customStyle: "calistenia", defaultValue: new SDate().toString("yyyy-MM-dd") })),
                    React.createElement(SView, { col: "xs-0 md-1" }),
                    React.createElement(SView, { col: "xs-12 md-5.5", center: true },
                        React.createElement(SInput, { ref: function (ref) { return _this.fecha_fin = ref; }, type: 'date', label: "Fecha fin", customStyle: "calistenia", defaultValue: new SDate().toString("yyyy-MM-dd") }))),
                React.createElement(SView, { col: "xs-10", center: true, height: 40 },
                    React.createElement(SText, { fontSize: 12, center: true },
                        " ",
                        this.props.message,
                        " ")),
                React.createElement(SView, { col: "xs-12", row: true, height: 70, center: true },
                    React.createElement(SView, { col: "xs-6", center: true },
                        React.createElement(SButtom, { props: { type: "danger" }, onPress: function () {
                                if (_this.props.onClose) {
                                    _this.props.onClose();
                                }
                                SPopup.close("dateBetween");
                            } }, "Cancelar")),
                    React.createElement(SView, { col: "xs-6", center: true },
                        React.createElement(SButtom, { props: { type: "outline" }, onPress: function () {
                                if (_this.props.onPress) {
                                    _this.state.acept = true;
                                    var fecha_inicio = _this.fecha_ini.getValue();
                                    var fecha_fin = _this.fecha_fin.getValue();
                                    _this.props.onPress({
                                        fecha_inicio: fecha_inicio,
                                        fecha_fin: fecha_fin
                                    });
                                }
                                SPopup.close("dateBetween");
                            } }, "Confirmar"))))));
    };
    DateBetween.defaultProps = {
        title: '',
        message: '',
        onPress: function (resp) { },
        onClose: function () { }
    };
    return DateBetween;
}(Component));
export default DateBetween;
