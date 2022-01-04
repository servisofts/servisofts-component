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
import { View } from 'react-native';
import SComponentContainer from '..';
import SIcon from '../../SIcon';
import SNavigation from '../../SNavigation';
import STheme from '../../STheme/index';
import SThread from '../../SThread';
import SView from '../../SView/index';
var DebugBar = /** @class */ (function (_super) {
    __extends(DebugBar, _super);
    function DebugBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            register: false,
            stateSocket: false
        };
        return _this;
    }
    DebugBar.prototype.register = function () {
        var _this = this;
        new SThread(100, "hiloeste", true).start(function () {
            if (SComponentContainer.SSocket) {
                if (SComponentContainer.SSocket.getSession() != null) {
                    SComponentContainer.SSocket.register("DebugBar", function (instance) {
                        _this.register();
                    });
                    if (_this.state.stateSocket != SComponentContainer.SSocket.getSession().isOpen()) {
                        _this.setState({
                            stateSocket: SComponentContainer.SSocket.getSession().isOpen()
                        });
                    }
                    if (!_this.state.register)
                        _this.setState({ register: true });
                    return;
                }
            }
            _this.register();
        });
    };
    DebugBar.prototype.render = function () {
        if (!this.props.debug)
            return React.createElement(View, null);
        this.register();
        return (React.createElement(React.Fragment, null,
            React.createElement(SView, { style: {
                    position: "absolute",
                    width: 25,
                    height: 25,
                    backgroundColor: STheme.color.card,
                    right: 10,
                    top: 0,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    padding: 4
                }, onPress: function () {
                    // STheme.change();
                } }, !this.state.stateSocket ?
                React.createElement(SIcon, { name: "WifiDisconnect", fill: STheme.color.primary + "99", stroke: STheme.color.primary }) :
                React.createElement(SIcon, { name: "Wifi", fill: STheme.color.primary })),
            React.createElement(SView, { style: {
                    position: "absolute",
                    width: 25,
                    height: 25,
                    backgroundColor: STheme.color.card,
                    right: 40,
                    top: 0,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    padding: 4
                }, onPress: function () {
                    STheme.change();
                } },
                React.createElement(SIcon, { name: STheme.getTheme() == "default" ? "Sun" : "Moon", fill: STheme.color.primary })),
            React.createElement(SView, { style: {
                    position: "absolute",
                    width: 25,
                    height: 25,
                    backgroundColor: STheme.color.card,
                    right: 70,
                    top: 0,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    padding: 3
                }, onPress: function () {
                    SNavigation.navigate("scomponent");
                } },
                React.createElement(SIcon, { name: "AlertOutline", fill: STheme.color.primary }))));
    };
    return DebugBar;
}(Component));
export default DebugBar;
