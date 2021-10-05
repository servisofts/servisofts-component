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
import { View, TextInput } from 'react-native';
import { SText, SView } from '../../index';
import { Type } from './types';
import { CustomStyles } from './styles';
var SInput = /** @class */ (function (_super) {
    __extends(SInput, _super);
    function SInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangeText = function (_text) {
            var text = _text;
            if (_this.type) {
                if (_this.type.onChangeText) {
                    text = _this.type.onChangeText(text);
                }
                if (_this.type.filter) {
                    text = _this.type.filter(text);
                }
            }
            if (_this.props.onChangeText) {
                _this.props.onChangeText(text);
            }
            _this.state.value = text;
            _this.setState({ value: _this.state.value });
            _this.verify();
        };
        // props;
        // constructor(_props) {
        //     super(_props);
        //     this.props = {
        //         ..._props,
        //         ..._props.props
        //     };
        _this.state = {
            value: _this.props.defaultValue,
            error: false,
            data: {}
        };
        return _this;
    }
    SInput.TYPE = function (type) { return type; };
    ;
    SInput.prototype.getComponent = function () {
        var _this = this;
        return React.createElement(SInput, __assign({}, this.props, { onChangeText: function (vak) {
                _this.state.value = vak;
            } }));
    };
    SInput.prototype.getStyle = function () {
        return this.style;
    };
    SInput.prototype.getOption = function (option) {
        return !this.props[option] ? 'default' : this.props[option];
    };
    SInput.prototype.getData = function () {
        return this.state.data;
    };
    SInput.prototype.verify = function (noStateChange) {
        if (this.props) {
            if (!this.props.isRequired)
                return true;
        }
        var isValid = true;
        if (!this.getValue()) {
            isValid = false;
        }
        else {
            if (this.type) {
                if (this.type.verify) {
                    if (!this.type.verify(this.getValue())) {
                        isValid = false;
                    }
                }
            }
        }
        if (!isValid != this.state.error) {
            if (!noStateChange) {
                if (this.props.onStateChange)
                    this.props.onStateChange(isValid);
            }
            this.state.error = !isValid;
            this.setState({ error: this.state.error });
        }
        return isValid;
    };
    SInput.prototype.notifyBlur = function () {
        if (this.props.onBlur) {
            this.props.onBlur(null);
        }
    };
    SInput.prototype.setValue = function (value) {
        this.setState({ value: value });
        this.onChangeText(value);
    };
    SInput.prototype.getValue = function () {
        return this.state.value;
    };
    SInput.prototype.isRender = function (type) {
        if (type.render) {
            return React.createElement(View, { style: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                } }, type.render(this));
        }
    };
    SInput.prototype.getLabel = function () {
        if (!this.props.label)
            return null;
        return React.createElement(SText, { style: __assign({}, this.customStyle["LabelStyle"]) }, this.props.label);
    };
    SInput.prototype.getIcon = function () {
        if (!this.type)
            return React.createElement(View, null);
        var ITEM = false;
        if (this.props.props.icon) {
            ITEM = this.props.props.icon;
        }
        if (this.type.icon) {
            ITEM = this.type.icon;
        }
        if (!ITEM) {
            return React.createElement(View, null);
        }
        return React.createElement(SView, { center: true, style: {
                height: "100%"
            } }, ITEM);
    };
    SInput.prototype.render = function () {
        var _this = this;
        var customStyle = CustomStyles(this.props.customStyle);
        this.customStyle = customStyle;
        this.style = this.props.style;
        var type = Type(this.props.type, this);
        this.type = type;
        var isOnPress = this.props.onPress || type.onPress;
        var valueFilter = this.state.value;
        if (this.type) {
            if (this.type.filter) {
                valueFilter = this.type.filter(valueFilter);
            }
        }
        if (valueFilter) {
            if (valueFilter) {
                this.verify();
            }
        }
        return (React.createElement(SView, __assign({ col: "xs-12" }, (isOnPress ? {
            onPress: function () {
                if (_this.props.onPress)
                    _this.props.onPress({
                        layout: _this.layout
                    });
                if (type.onPress)
                    type.onPress({
                        layout: _this.layout
                    });
            }
        } : {}), this.props, { style: __assign(__assign(__assign(__assign(__assign({}, customStyle["View"]), type.style.View), (this.state.error ? customStyle.error : {})), this.style), (!this.props.label ? { marginTop: this.props.separation } : {})) }),
            this.getLabel(),
            React.createElement(SView, { col: "xs-12", row: true, style: { flex: 1, height: "100%" } },
                this.getIcon(),
                React.createElement(TextInput, __assign({ value: valueFilter }, this.props, type.props, { style: __assign(__assign({ flex: 1, height: "100%", outline: "none" }, customStyle["InputText"]), type.style.InputText), onChangeText: this.onChangeText }))),
            this.isRender(type)));
    };
    SInput.defaultProps = {
        props: {},
        style: {},
        onStateChange: function () { }
    };
    return SInput;
}(Component));
export { SInput };
