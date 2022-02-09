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
import { TouchableWithoutFeedback } from 'react-native';
// import Svg from '../../Svg';
import SPopupComponent from './SPopupComponent';
import Confirm from './SPopupVariants/Confirm/index';
import Alert from './SPopupVariants/Alert/index';
import DateBetween from './SPopupVariants/DateBetween/index';
var INSTANCE;
export var SPopupOpen = function (_a) {
    var key = _a.key, content = _a.content, style = _a.style;
    INSTANCE.open({ key: key, content: content, style: style });
};
export var SPopupClose = function (key) {
    INSTANCE.close(key);
};
var SPopup = /** @class */ (function (_super) {
    __extends(SPopup, _super);
    function SPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: {},
            style: {}
        };
        INSTANCE = _this;
        return _this;
    }
    SPopup.confirm = function (props) {
        // alert(obj)
        INSTANCE.open({ key: "confirm", content: React.createElement(Confirm, __assign({}, props)), style: {} });
    };
    SPopup.alert = function (text) {
        // alert(obj)
        INSTANCE.open({ key: "alert", content: React.createElement(Alert, { title: text }), style: {} });
    };
    SPopup.dateBetween = function (text, onPress) {
        // alert(obj)
        INSTANCE.open({ key: "dateBetween", content: React.createElement(DateBetween, { title: text, onPress: onPress }), style: {} });
    };
    SPopup.open = function (obj) {
        var key = obj.key;
        if (!obj.key)
            key = 'default';
        INSTANCE.open({ key: key, content: obj.content, style: obj.style });
    };
    SPopup.close = function (key) {
        if (!key) {
            INSTANCE.closeAll();
        }
        INSTANCE.close(key);
    };
    SPopup.prototype.componentDidMount = function () {
        INSTANCE = this;
    };
    SPopup.prototype.open = function (_a) {
        var key = _a.key, content = _a.content, style = _a.style;
        // console.log(key);
        this.state.data[key] = content;
        if (style) {
            this.state.style[key] = style;
        }
        else {
            this.state.style[key] = {};
        }
        this.setState(__assign({}, this.state));
    };
    SPopup.prototype.closeAll = function () {
        this.setState({ data: {} });
    };
    SPopup.prototype.close = function (key) {
        delete this.state.data[key];
        this.setState(__assign({}, this.state));
    };
    SPopup.prototype.getPopups = function () {
        var _this = this;
        return Object.keys(this.state.data).map(function (key) {
            var obj = _this.state.data[key];
            var style = _this.state.style[key];
            return React.createElement(SPopupComponent, { style: __assign({}, style), close: function () { _this.close(key); } },
                React.createElement(TouchableWithoutFeedback, null, obj));
        });
    };
    SPopup.prototype.render = function () {
        INSTANCE = this;
        return (React.createElement(React.Fragment, null, this.getPopups()));
    };
    return SPopup;
}(Component));
export default SPopup;
