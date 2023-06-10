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
import { View, TouchableOpacity, TextInput } from 'react-native';
import { SText, SView } from '../../index';
import { Variant } from './variants';
import { Type } from './types';
import { CustomStyles } from './styles';
// export type SInputProps = IProps;
var SInput = /** @class */ (function (_super) {
    __extends(SInput, _super);
    function SInput(props) {
        var _this = _super.call(this, props) || this;
        _this.getStyle = function () {
            return _this.customStyle;
        };
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
    SInput.prototype.getOption = function (option) {
        return !this.props.props[option] ? 'default' : this.props.props[option];
    };
    SInput.prototype.buildStyle = function () {
        this.style = __assign(__assign({}, (this.props.props.style ? this.props.props.style : {})), this.props.style);
    };
    SInput.prototype.verify = function (noStateChange) {
        if (this.props.props) {
            if (!this.props.props.isRequired)
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
    SInput.prototype.setValue = function (val) {
        this.state.value = val;
        if (this.props.onChangeText) {
            this.props.onChangeText(val);
        }
        this.setState({ value: val });
    };
    SInput.prototype.notifyBlur = function () {
        if (this.props.onBlur) {
            this.props.onBlur(null);
        }
        // this.setState({ value: val });
    };
    SInput.prototype.getValue = function () {
        return this.state.value;
    };
    SInput.prototype.setData = function (val) {
        this.setState({ data: __assign(__assign({}, this.state.data), val) });
    };
    SInput.prototype.getData = function () {
        return this.state.data;
    };
    SInput.prototype.focus = function () {
        this._ref.focus();
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
    SInput.prototype.getLabel = function () {
        if (!this.props.props.label) {
            return React.createElement(View, null);
        }
        return React.createElement(SText, { style: __assign(__assign({}, this.customStyle.LabelStyle), this.type.style.LabelStyle) }, this.props.props.label);
    };
    SInput.prototype.isRender = function (type) {
        if (type.render) {
            return React.createElement(View, { style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center"
                } }, type.render(this));
        }
    };
    SInput.prototype.render = function () {
        var _this = this;
        this.buildStyle();
        this.variant = Variant(this.getOption("variant"));
        this.customStyle = CustomStyles(this.getOption("customStyle"));
        var size = { width: "100%" };
        var type = Type(this.getOption("type"), this);
        this.type = type;
        var Component = View;
        if (this.props.onPress || type.onPress) {
            Component = TouchableOpacity;
        }
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
        return (React.createElement(Component, { onLayout: function (evt) {
                _this.layout = evt.nativeEvent.layout;
                if (_this.props.onLayout)
                    _this.props.onLayout(evt);
            }, onPress: function () {
                if (_this.props.onPress)
                    _this.props.onPress({
                        layout: _this.layout
                    });
                if (type.onPress)
                    type.onPress({
                        layout: _this.layout
                    });
            }, style: [
                this.variant.View,
                this.customStyle.View,
                type.style.View,
                (this.state.error ? this.customStyle.error : {}),
                __assign(__assign({}, size), this.style)
            ] },
            this.getLabel(),
            React.createElement(SView, { col: "xs-12", row: true, style: { flex: 1, height: "100%" } },
                this.getIcon(),
                React.createElement(TextInput, __assign({ ref: function (ref) {
                        _this._ref = ref;
                    }, value: valueFilter }, type.props, this.props, { onChangeText: function (_text) {
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
                    }, style: [
                        this.customStyle.InputText,
                        type.style.InputText,
                        {
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            outline: "none"
                        }
                    ], placeholderTextColor: this.customStyle.placeholder.color })),
                this.isRender(this.type))));
    };
    SInput.defaultProps = {
        props: {},
        style: {},
        onStateChange: function () { }
    };
    return SInput;
}(Component));
export { SInput };
