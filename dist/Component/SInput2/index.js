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
import InputTypes from "./types/index";
var SInput2 = /** @class */ (function (_super) {
    __extends(SInput2, _super);
    function SInput2(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.state = {
            layout: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            },
            value: (_a = _this.props.value) !== null && _a !== void 0 ? _a : _this.props.defaultValue
        };
        return _this;
    }
    SInput2.prototype.getValue = function () {
        return this.state.value;
    };
    SInput2.prototype.handleChange = function (val) {
        console.log(val);
        this.setState({ value: val });
    };
    SInput2.prototype.render = function () {
        var ELM = InputTypes[this.props.type];
        if (!ELM)
            ELM = InputTypes["text"];
        return React.createElement(ELM, __assign({}, this.props));
    };
    return SInput2;
}(Component));
export default SInput2;
/*
 
        let styleObject: any = this.props.style;
        if (Array.isArray(this.props.style)) {
            styleObject = this.props.style.reduce((result: any, currentObject: any) => {
                return { ...result, ...currentObject };
            }, {});
        }
        return <TextInput {...this.props} style={[{
            padding: 0,
            margin: 0,
            width: "100%",
        }, this?.props?.style]}
            value={this.state.value}
            onChangeText={(val) => {
                this.setState({ value: val })
            }}
            onFocus={() => {
                console.log("focus")
            }}
        />
        return <Switch

            // trackColor={{ false: "#767577", true: "#DAA520" }}
            // thumbColor={this.state.value ? "#DAA520" : "#f4f3f4"}
            onValueChange={this.handleChange.bind(this)}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            value={this.state.value}
        />
        return <Picker
            // mode='dropdown'
            // selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
        return <TextInput {...this.props} style={[{
            padding: 0,
            margin: 0,
            width: "100%",
        }, this?.props?.style]}
            value={this.state.value}
            onChangeText={(val) => {
                this.setState({ value: val })
            }}
            onFocus={() => {
                console.log("focus")
            }}
        />
 */ 
