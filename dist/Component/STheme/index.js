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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import SThread from '../SThread/index';
import SStorage from '../SStorage';
import MapStyle from './MapStyle';
var STheme = /** @class */ (function (_super) {
    __extends(STheme, _super);
    function STheme(props) {
        var _this = _super.call(this, props) || this;
        STheme.instance = _this;
        _this.state = {
            isFadeOut: true,
            select: !_this.props.initialTheme ? "default" : _this.props.initialTheme
        };
        // this.repaint();
        _this.animFadeOut = new Animated.Value(0);
        return _this;
    }
    STheme.select = function (theme) {
        if (!this.instance) {
            return "error";
        }
        return this.instance.select(theme);
    };
    ;
    STheme.change = function () {
        if (!this.instance) {
            return "error";
        }
        return this.instance.change();
    };
    ;
    STheme.getTheme = function () {
        if (!this.instance) {
            return "error";
        }
        return this.instance.state.select;
    };
    ;
    STheme.prototype.componentDidMount = function () {
        this.getItemTheme();
    };
    STheme.prototype.getItemTheme = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                SStorage.getItem("themeState", function (data) {
                    if (data) {
                        _this.select(data);
                    }
                    else {
                        SStorage.setItem("themeState", _this.state.select);
                        _this.select(_this.state.select);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    STheme.prototype.select = function (theme) {
        var _this = this;
        if (!this.props.themes[theme]) {
            return "Theme not found ";
        }
        this.state.select = theme;
        if (STheme.colorSelect != this.props.themes[this.state.select]) {
            // if (this.props.onLoad) {
            //     this.props.onLoad(null);
            // }
            STheme.colorSelect = this.props.themes[this.state.select];
            STheme.color = __assign(__assign(__assign({}, STheme.color), { mapStyle: MapStyle[this.state.select] }), this.props.themes[this.state.select]);
        }
        new SThread(100, "algo", false).start(function () {
            SStorage.setItem("themeState", theme);
            if (_this.props.onLoad) {
                _this.props.onLoad(STheme.color);
            }
        });
    };
    STheme.prototype.change = function () {
        this.state.select = this.state.select != "default" ? "default" : "dark";
        SStorage.setItem("themeState", this.state.select);
        this.select(this.state.select);
    };
    STheme.prototype.render = function () {
        if (!this.props.data)
            return React.createElement(View, null);
        return this.props.children;
    };
    STheme.color = {
        barStyle: "dark-content",
        barColor: "#000000",
        background: "#222222",
        primary: "#000000",
        card: "#22222266",
        secondary: "#ffffff",
        success: "#71AF4A",
        warning: "#EF8C38",
        danger: "#DF2732",
        bateon: "#95070C",
        error: "#ff0000",
        accent: "#00CC00",
        info: "#405394",
        black: "#000000",
        white: "#ffffff",
        gray: "#888888",
        lightGray: "#aaaaaa",
        darkGray: "#444444",
        lightBlack: "#666666",
        mapStyle: MapStyle["default"]
    };
    return STheme;
}(Component));
export default STheme;
