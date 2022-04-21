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
import { View } from 'react-native';
// import { SButtom, typeConfig } from '../SButtom';
import { SInput } from '../SInput/index';
import SView from '../SView/index';
// import { Col, TypeCol } from '../SView/cols';
import { SButtom } from '../SButtom/index';
import Submit from './submit';
import Upload from './Upload';
var SForm = /** @class */ (function (_super) {
    __extends(SForm, _super);
    function SForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            files: {}
        };
        _this._ref = {};
        return _this;
    }
    SForm.prototype.verify = function () {
        var _this = this;
        var isValid = true;
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            if (!input.verify()) {
                isValid = false;
            }
        });
        return isValid;
    };
    SForm.prototype.clear = function () {
        var _this = this;
        var isValid = true;
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            input.setValue("");
        });
        return this;
    };
    SForm.prototype.setValues = function (obj) {
        var _this = this;
        Object.keys(obj).map(function (key) {
            var input = _this._ref[key];
            input.setValue(obj[key]);
        });
    };
    SForm.prototype.getValues = function () {
        var _this = this;
        var obj = {};
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            obj[key] = input.getValue();
        });
        return obj;
    };
    SForm.prototype.focus = function (key) {
        if (this._ref[key]) {
            this._ref[key].focus();
        }
    };
    SForm.prototype.getFiles = function () {
        var _this = this;
        if (!this.state.files)
            this.state.files = {};
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            if (input.getType() == "file") {
                _this.state.files[key] = input.getValue();
                return;
            }
            if (input.getType() == "image") {
                _this.state.files[key] = input.getValue();
                return;
            }
        });
        return this.state.files;
    };
    SForm.prototype.uploadFiles = function (url) {
        var files = this.getFiles();
        Object.keys(files).map(function (key) {
            var obj = files[key];
            if (obj) {
                if (typeof obj != "string") {
                    Upload.send(obj, url);
                }
            }
        });
    };
    SForm.prototype.submitFiles = function (data, key, url) {
        this.getFiles();
        if (!this.state.files[key]) {
            return;
        }
        if (typeof this.state.files[key] === 'string') {
            return;
        }
        console.log(this.state.files[key]);
        Submit.http(data, url, this.state.files[key], function (res) {
        });
    };
    SForm.prototype.submit = function () {
        var _this = this;
        var data = {};
        var isValid = true;
        Object.keys(this._ref).map(function (key) {
            var input = _this._ref[key];
            if (!input.verify()) {
                isValid = false;
            }
            if (input.getType() == "file") {
                _this.state.files[key] = input.getValue();
                return;
            }
            if (input.getType() == "image") {
                _this.state.files[key] = input.getValue();
                return;
            }
            data[key] = input.getValue();
        });
        if (isValid) {
            if (this.props.onSubmit) {
                this.props.onSubmit(data);
            }
            return data;
        }
        return null;
    };
    SForm.prototype.getButtom = function () {
        var _this = this;
        // if (!this.props.onSubmit) return <View />
        if (!this.props.onSubmitName)
            return React.createElement(View, null);
        return React.createElement(SButtom, { props: __assign({ type: "danger" }, this.props.onSubmitProps), onPress: function () {
                _this.submit();
            } }, this.props.onSubmitName);
    };
    SForm.prototype.getInputs = function () {
        var _this = this;
        if (!this.props.inputs) {
            return React.createElement(View, null);
        }
        var readyFocus = false;
        return Object.keys(this.props.inputs).map(function (key) {
            var inputProps = _this.props.inputs[key];
            var focus = false;
            if (inputProps.type != "file"
                && inputProps.type != "image"
                && !readyFocus) {
                focus = true;
                readyFocus = true;
            }
            return React.createElement(SInput
            // autoFocus={focus}
            , __assign({ 
                // autoFocus={focus}
                ref: function (ref) { _this._ref[key] = ref; }, placeholder: inputProps.label }, _this.props.inputProps, inputProps, { defaultValue: inputProps.defaultValue }));
        });
    };
    SForm.prototype.render = function () {
        return (React.createElement(SView, __assign({ col: "xs-12" }, this.props, this.props.props),
            this.getInputs(),
            React.createElement(SView, { col: "xs-12", style: {
                    height: 14
                } }),
            React.createElement(SView, { col: "xs-12", center: true }, this.getButtom())));
    };
    SForm.defaultProps = {
        props: {}
    };
    return SForm;
}(Component));
export default SForm;
