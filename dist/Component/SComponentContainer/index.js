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
import { View, SafeAreaView, StatusBar } from 'react-native';
import STheme from '../STheme/index';
import DebugBar from './DebugBar/index';
import SIcon from '../SIcon/index';
import SPopup from '../SPopup';
import SPage from '../SPage';
var SComponentContainer = /** @class */ (function (_super) {
    __extends(SComponentContainer, _super);
    function SComponentContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            layout: {},
            medida: "xs",
            theme: null,
            barStyle: "default"
        };
        SComponentContainer.Instance = _this;
        SComponentContainer.SSocket = props.socket;
        SIcon.loadAssets(_this.props.assets);
        if (_this.props.background) {
            SPage.setBackground(_this.props.background);
        }
        return _this;
    }
    SComponentContainer.registerGrid = function (key, grid) {
        if (!this.Instance)
            return;
        this.GridListen[key] = grid;
        grid.changeMedida(this.Instance.state.medida);
    };
    SComponentContainer.removeGrid = function (key) {
        if (!this.Instance)
            return;
        delete this.GridListen[key];
    };
    SComponentContainer.getInputsConfig = function () {
        if (!this.Instance) {
            return null;
        }
        return this.Instance.props.inputs;
    };
    SComponentContainer.prototype.onChangeSize = function (layout) {
        var _this = this;
        this.layout = layout;
        var curMedida = "";
        if (layout.width >= 1200) {
            curMedida = "xl";
        }
        else if (layout.width >= 992) {
            curMedida = "lg";
        }
        else if (layout.width >= 768) {
            curMedida = "md";
        }
        else if (layout.width >= 576) {
            curMedida = "sm";
        }
        else {
            curMedida = "xs";
        }
        if (this.state.medida != curMedida) {
            this.state.medida = curMedida;
            Object.keys(SComponentContainer.GridListen).map(function (key) {
                var item = SComponentContainer.GridListen[key];
                item.changeMedida(_this.state.medida);
            });
        }
    };
    SComponentContainer.prototype.getContenido = function () {
        var _this = this;
        if (!this.state.theme)
            return React.createElement(View, null);
        return (React.createElement(View, { style: {
                width: "100%",
                flex: 1,
                height: "100%",
                backgroundColor: this.state.theme.barColor
            } },
            React.createElement(SafeAreaView, { style: {
                    width: '100%',
                    flex: 1
                } },
                React.createElement(View, { style: {
                        width: "100%",
                        flex: 1
                    } },
                    React.createElement(StatusBar, { barStyle: this.state.theme.barStyle, animated: true, backgroundColor: this.state.theme.barColor }),
                    React.createElement(View, { style: {
                            width: "100%",
                            flex: 1
                        }, onLayout: function (evt) {
                            // this.setState({ layout: evt.nativeEvent.layout })
                            _this.onChangeSize(evt.nativeEvent.layout);
                        } }, this.props.children),
                    React.createElement(DebugBar, { debug: this.props.debug }),
                    React.createElement(SPopup, null)))));
    };
    SComponentContainer.prototype.render = function () {
        var _this = this;
        SComponentContainer.Instance = this;
        return (React.createElement(STheme, __assign({}, this.props.theme, { onLoad: function (color) {
                if (_this.state.theme != color) {
                    _this.setState({ theme: color });
                }
            } }), this.getContenido()));
    };
    SComponentContainer.Instance = null;
    SComponentContainer.GridListen = {};
    return SComponentContainer;
}(Component));
export default SComponentContainer;
