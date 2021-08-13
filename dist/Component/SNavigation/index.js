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
import STheme from '../STheme/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
var Stack = createStackNavigator();
var stateNavigator;
var SNavigation = /** @class */ (function (_super) {
    __extends(SNavigation, _super);
    function SNavigation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SNavigation.navigate = function (route, params) {
        if (!SNavigation.lastRoute) {
            alert("no hay navegacion");
            return;
        }
        // if (Platform.OS === "web") {
        //     window.location.pathname = route
        // }
        SNavigation.lastRoute.navigation.navigate(route, params);
    };
    SNavigation.replace = function (route, params) {
        // if (Platform.OS === "web") {
        //     window.location.pathname = route
        // }
        SNavigation.lastRoute.navigation.replace(route, params);
    };
    SNavigation.goBack = function () {
        SNavigation.lastRoute.navigation.goBack();
    };
    SNavigation.getParam = function (key, valDef) {
        var route = SNavigation.lastRoute.route;
        var params = route.params;
        if (!params) {
            return valDef;
        }
        var param = params[key];
        if (!param) {
            return valDef;
        }
        return param;
    };
    SNavigation.prototype.getLinking = function () {
        var linking = {
            prefixes: this.props.props.prefixes,
            config: {
                screens: {}
            }
        };
        var pages = this.props.props.pages;
        SNavigation.root = "";
        Object.keys(pages).map(function (key) {
            var url = key;
            if (!SNavigation.root) {
                SNavigation.root = url;
                url = "";
            }
            if (pages[key].params) {
                pages[key].params.map(function (parm) {
                    url += "/:" + parm;
                });
            }
            linking.config.screens[key] = url;
        });
        return linking;
    };
    SNavigation.prototype.getPages = function (Stack) {
        var pages = this.props.props.pages;
        return Object.keys(pages).map(function (key) {
            var Page = function (props) {
                try {
                    if (props) {
                        SNavigation.lastRoute = props;
                    }
                    var Page = pages[key].component;
                    return React.createElement(Page, __assign({}, props));
                }
                catch (e) {
                    return React.createElement(View, null);
                }
            };
            return React.createElement(Stack.Screen, { key: key, name: key, component: Page, options: __assign({ title: "Servisofts", headerShown: false }, pages[key].options) });
        });
    };
    SNavigation.prototype.render = function () {
        // var NavigationContainer = this.props.props.NavigationContainer;
        // var Stack = this.props.props.Stack;
        return (React.createElement(NavigationContainer, { ref: function (ref) {
                SNavigation.navigation = ref;
            }, linking: this.getLinking(), theme: {
                dark: false,
                colors: {
                    background: STheme.color.background
                }
            }, initialState: stateNavigator, onStateChange: function (state) {
                return stateNavigator = state;
            } },
            React.createElement(Stack.Navigator, null, this.getPages(Stack))));
    };
    SNavigation.navigation = null;
    SNavigation.routes = [];
    return SNavigation;
}(Component));
export default SNavigation;