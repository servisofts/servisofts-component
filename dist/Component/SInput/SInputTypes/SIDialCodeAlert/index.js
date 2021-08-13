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
import { View, FlatList, TouchableOpacity } from 'react-native';
import { SText, SView, STheme } from '../../../../index';
import Countries from './Countries';
import { SPopupClose, SPopupOpen } from '../../../SPopup';
var SIDialCodeAlert = /** @class */ (function (_super) {
    __extends(SIDialCodeAlert, _super);
    function SIDialCodeAlert(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: Countries
        };
        return _this;
    }
    SIDialCodeAlert.getDialCode = function (dialcode) {
        return Countries.filter(function (obj) { return obj.dialCode == dialcode; })[0] || Countries.filter(function (obj) { return obj.code == dialcode; })[0];
    };
    SIDialCodeAlert.getOpenButtom = function (dialcode, style, onChange) {
        var notifiChange = false;
        if (!dialcode) {
            dialcode = "+591";
            notifiChange = true;
        }
        var defaultCountry = Countries.filter(function (obj) { return obj.dialCode == dialcode; })[0] || Countries.filter(function (obj) { return obj.code == dialcode; })[0];
        if (onChange && notifiChange)
            onChange(defaultCountry);
        // if (!defaultCountry) {
        //     return <View />;
        // }
        return React.createElement(SView, { props: {
                variant: "center"
            }, style: {
                width: 60,
                height: "100%"
            }, onPress: function () {
                SPopupOpen({
                    key: "phonePicker",
                    content: React.createElement(SIDialCodeAlert, { props: {
                            defaultValue: "+591"
                        }, onChange: function (val) {
                            if (onChange)
                                onChange(val);
                            SPopupClose("phonePicker");
                        } })
                });
            } },
            React.createElement(SView, { props: {
                    direction: "row",
                    variant: "center"
                }, style: {
                    width: "100%"
                } },
                React.createElement(SText, { style: style }, defaultCountry.flag),
                React.createElement(View, { style: {
                        width: 4
                    } }),
                React.createElement(SText, { style: style }, defaultCountry.dialCode)));
    };
    SIDialCodeAlert.prototype.getLista = function () {
        var _this = this;
        return React.createElement(View, { style: {
                width: "100%",
                height: "100%",
                alignItems: "center"
            } },
            React.createElement(View, { style: {
                    width: "100%",
                    marginTop: 4,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                } }),
            React.createElement(FlatList, { style: {
                    width: "100%",
                    height: "100%"
                }, data: this.state.data, keyExtractor: function (item, index) { return index.toString(); }, renderItem: function (_a) {
                    var item = _a.item;
                    return (React.createElement(View, { style: {
                            alignItems: "center"
                        } },
                        React.createElement(TouchableOpacity, { style: {
                                width: "90%",
                                height: 35
                            }, onPress: function () {
                                if (_this.props.onChange)
                                    _this.props.onChange(item);
                            } },
                            React.createElement(View, { style: {
                                    flexDirection: "row",
                                    flex: 1,
                                    marginTop: 4,
                                    justifyContent: "space-between",
                                    padding: 4,
                                    borderRadius: 4
                                } },
                                React.createElement(SText, { style: {
                                        width: 50,
                                        fontSize: 16
                                    } }, item.flag),
                                React.createElement(SText, { style: {
                                        flex: 8
                                    }, props: { type: "primary" } }, item.en),
                                React.createElement(SText, { style: {
                                        flex: 2
                                    }, props: { type: "primary" } }, item.dialCode)),
                            React.createElement(SView, { style: {
                                    backgroundColor: STheme.color.background + "33",
                                    height: 1
                                } }))));
                } }));
    };
    SIDialCodeAlert.prototype.render = function () {
        return React.createElement(SView, { props: {
                col: "xs-11 md-8 xl-6",
                variant: "center",
                withoutFeedback: true
            }, style: {
                // width: "100%",
                height: "100%",
                borderRadius: 8
            } }, this.getLista());
    };
    SIDialCodeAlert.defaultProps = {
        props: {},
        style: {}
    };
    return SIDialCodeAlert;
}(Component));
export default SIDialCodeAlert;
