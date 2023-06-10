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
import { View, KeyboardAvoidingView, Platform, ScrollView, RefreshControl } from 'react-native';
import SNavBar from '../SNavBar/index';
import SView from '../SView/index';
import SNavigation from '../SNavigation';
import SThread from '../SThread';
import SwipeToRefresh from '../SScrollView3/SwipeToRefresh';
var SPage = /** @class */ (function (_super) {
    __extends(SPage, _super);
    function SPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: false
        };
        return _this;
    }
    SPage.combinePages = function (name, pages) {
        var res = {};
        Object.keys(pages).map(function (key) {
            var nk = "";
            var delimiter = "/";
            if (name) {
                if (name == "/") {
                    nk = name + key;
                }
                else {
                    if (key) {
                        nk = name + delimiter + key;
                    }
                    else {
                        nk = name;
                    }
                }
            }
            else {
                nk = key;
            }
            res[nk] = pages[key];
        });
        return res;
    };
    SPage.setBackground = function (background) {
        SPage.backgroundComponent = background;
    };
    SPage.prototype.getNavBar = function () {
        if (this.props.navBar)
            return this.props.navBar;
        if (this.props.hidden)
            return React.createElement(View, null);
        if (SNavigation.navBar)
            return React.createElement(SNavigation.navBar, __assign({}, this.props));
        return React.createElement(SNavBar, __assign({}, this.props));
    };
    SPage.prototype.getRefresh = function () {
        var _this = this;
        if (!this.props.onRefresh)
            return null;
        return React.createElement(RefreshControl, { refreshing: this.state.loading, onRefresh: function () {
                _this.props.onRefresh();
                // this.setState({ loading: true });
                new SThread(100, "refresh", true).start(function () {
                    _this.setState({ loading: false });
                });
            } });
    };
    SPage.prototype.getChildren = function () {
        if (this.state.loading)
            return null;
        if (this.props.children)
            return this.props.children;
        return null;
    };
    SPage.prototype.getScroll = function () {
        if (this.props.disableScroll)
            return React.createElement(SView, { center: this.props.center, col: "xs-12", flex: true }, this.getChildren());
        if (Platform.OS != "web") {
            return React.createElement(ScrollView, { style: {
                    flex: 1,
                    width: "100%"
                }, contentContainerStyle: {
                    width: "100%",
                    minHeight: "100%"
                }, refreshControl: this.getRefresh() },
                React.createElement(SView, { style: {
                        width: '100%',
                        flex: 1
                    }, center: this.props.center }, this.getChildren()));
        }
        return React.createElement(SwipeToRefresh, { onRefresh: this.props.onRefresh },
            React.createElement(SView, { style: {
                    width: '100%',
                    flex: 1
                }, center: this.props.center }, this.getChildren()));
    };
    // getScroll() {
    //     if (this.props.disableScroll) return <SView center={this.props.center} col={"xs-12"} flex>
    //         {this.getChildren()}
    //     </SView>
    //     return <ScrollView style={{
    //         flex: 1,
    //         width: "100%",
    //     }} contentContainerStyle={{
    //         width: "100%",
    //         minHeight: "100%",
    //     }}
    //         refreshControl={this.getRefresh()}
    //     >
    //         <SView style={{
    //             width: '100%',
    //             flex: 1,
    //         }} center={this.props.center}>
    //             {this.getChildren()}
    //         </SView>
    //     </ScrollView>
    // }
    SPage.prototype.render_footer = function () {
        if (!this.props.footer)
            return null;
        return this.props.footer;
    };
    SPage.prototype.render_header = function () {
        if (!this.props.header)
            return null;
        return this.props.header;
    };
    SPage.prototype.render = function () {
        var _a;
        return (React.createElement(SView, { col: "xs-12", style: {
                flex: 1,
                height: '100%'
            } },
            SPage.backgroundComponent,
            React.createElement(SView, { style: {
                    flex: 1
                } },
                this.getNavBar(),
                this.render_header(),
                React.createElement(SView, { col: "xs-12", style: {
                        flex: 1,
                        height: "100%",
                        overflow: "hidden"
                    } },
                    React.createElement(KeyboardAvoidingView, { behavior: Platform.OS === "ios" ? "padding" : null, keyboardVerticalOffset: (_a = this.props.keyboardVerticalOffset) !== null && _a !== void 0 ? _a : 60, 
                        // behavior={"padding"}
                        enabled: Platform.OS === "ios", style: {
                            flex: 1
                        } }, this.getScroll())),
                this.render_footer())));
    };
    SPage.backgroundComponent = (React.createElement(View, { style: {
            position: "absolute",
            width: "120%",
            height: "120%"
        } }));
    return SPage;
}(Component));
export default SPage;
