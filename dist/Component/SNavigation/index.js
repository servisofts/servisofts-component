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
import React, { Component, useEffect, useState } from 'react';
import { Platform, Linking } from 'react-native';
import STheme from '../STheme/index';
import SPage from '../SPage/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pages from '../../Pages/index';
import SThread from '../SThread';
import SView from '../SView';
var Stack = createStackNavigator();
var stateNavigator;
var SNavigation = /** @class */ (function (_super) {
    __extends(SNavigation, _super);
    function SNavigation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        SNavigation.navBar = props.props.navBar;
        return _this;
    }
    SNavigation.reset = function (route, params) {
        if (!SNavigation.lastRoute) {
            alert("no hay navegacion");
            return;
        }
        // if (Platform.OS === "web") {
        //     window.history.pushState([], "", route);
        // }
        SNavigation.lastRoute.navigation.reset({
            index: 0,
            routes: [{ name: route, params: params }]
        });
    };
    SNavigation.openURL = function (route) {
        Linking.openURL(route);
    };
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
        if (SNavigation.lastRoute) {
            if (!SNavigation.lastRoute.navigation.canGoBack()) {
                if (SNavigation.lastRoute.route.name == SNavigation.root) {
                    SNavigation.lastRoute.navigation.replace(SNavigation.root);
                }
                if (Platform.OS == "web") {
                    var locstr = window.location.pathname;
                    locstr = locstr.substring(1, locstr.lastIndexOf("/"));
                    if (locstr == "/") {
                        SNavigation.lastRoute.navigation.replace(SNavigation.root);
                    }
                    // SNavigation.lastRoute.navigation.replace(locstr);
                    try {
                        SNavigation.lastRoute.navigation.replace("/" + locstr, SNavigation.getAllParams());
                    }
                    catch (e) {
                        window.location.pathname = locstr;
                    }
                    return;
                }
                else {
                    SNavigation.lastRoute.navigation.replace(SNavigation.root);
                    return;
                }
                // if (locstr.split("/").length <= 2) {
                //     return <View />
                // }
            }
            SNavigation.lastRoute.navigation.goBack();
        }
    };
    SNavigation.getAllParams = function () {
        var _a;
        var route = (_a = SNavigation.lastRoute) === null || _a === void 0 ? void 0 : _a.route;
        var params = route === null || route === void 0 ? void 0 : route.params;
        if (!params) {
            return {};
        }
        return params;
    };
    SNavigation.getParam = function (key, valDef) {
        var _a;
        var route = (_a = SNavigation.lastRoute) === null || _a === void 0 ? void 0 : _a.route;
        var params = route === null || route === void 0 ? void 0 : route.params;
        if (!params) {
            return valDef;
        }
        var param = params[key];
        if (!param) {
            return valDef;
        }
        return param;
    };
    SNavigation.isBack = function () {
        if (Platform.OS == "web") {
            var prevent = false;
            if (SNavigation.lastRoute) {
                if (!SNavigation.lastRoute.navigation.canGoBack()) {
                    if (SNavigation.lastRoute.route.name == SNavigation.root) {
                        return false;
                    }
                    var locstr = window.location.pathname;
                    if (locstr == "/") {
                        return false;
                    }
                }
            }
        }
        else {
            if (!SNavigation.lastRoute) {
                return false;
            }
            if (!SNavigation.lastRoute.navigation.canGoBack()) {
                return false;
            }
        }
        return true;
    };
    SNavigation.prototype.getLinking = function () {
        var linking = {
            prefixes: this.props.props.prefixes,
            config: {
                screens: {}
            }
        };
        var pages = __assign(__assign({}, this.props.props.pages), Pages);
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
        var _this = this;
        var pages = __assign(__assign({}, this.props.props.pages), Pages);
        var Validator = this.props.props.validator;
        return Object.keys(pages).map(function (key) {
            var _a, _b;
            var Page = function (props) {
                var _a = useState({ loading: false }), state = _a[0], setState = _a[1];
                useEffect(function () {
                    // if (state.loading) return;
                    new SThread(10, "load-page", false).start(function () {
                        setState({ loading: true });
                    });
                }, []);
                try {
                    if (props) {
                        SNavigation.lastRoute = props;
                    }
                    var Page = pages[key].component;
                    if (!Page) {
                        Page = pages[key];
                    }
                    if (!state.loading)
                        return React.createElement(SView, { col: "xs-12", height: true },
                            SPage.backgroundComponent,
                            Page.TOPBAR);
                    return React.createElement(React.Fragment, null,
                        !Validator ? null : React.createElement(Validator, null),
                        Page.TOPBAR,
                        React.createElement(Page, __assign({}, props)));
                }
                catch (e) {
                    console.error(e);
                    return null;
                }
            };
            return React.createElement(Stack.Screen, { key: key, name: key, component: Page, options: __assign({ title: ((_a = _this.props.props) === null || _a === void 0 ? void 0 : _a.title) ? (_b = _this.props.props) === null || _b === void 0 ? void 0 : _b.title : "Servisofts", headerShown: false }, pages[key].options) });
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
            }, 
            // initialState={stateNavigator}
            onStateChange: function (state) {
                return stateNavigator = state;
            } },
            React.createElement(Stack.Navigator, null, this.getPages(Stack))));
    };
    SNavigation.navigation = null;
    SNavigation.navBar = null;
    SNavigation.routes = [];
    return SNavigation;
}(Component));
export default SNavigation;
