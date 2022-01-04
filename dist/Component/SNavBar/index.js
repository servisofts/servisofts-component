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
import { View, Platform } from 'react-native';
import STheme from '../STheme/index';
import SView from '../SView/index';
import SText from '../SText/index';
import SNavigation from '../SNavigation/index';
import SIcon from '../SIcon/index';
// export type SNavBarProps = {
//     title?: string,
// } & SPageProps
var SNavBar = /** @class */ (function (_super) {
    __extends(SNavBar, _super);
    function SNavBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SNavBar.prototype.componentDidMount = function () {
        // if (Platform.OS == "web") {
        //     document.title = "Servisofts-"+this.props.title + "";
        // }
    };
    SNavBar.prototype.getBack = function () {
        if (this.props.preventBack) {
            return React.createElement(View, null);
        }
        if (Platform.OS == "web") {
            var prevent = false;
            if (SNavigation.lastRoute) {
                if (!SNavigation.lastRoute.navigation.canGoBack()) {
                    if (SNavigation.lastRoute.route.name == SNavigation.root) {
                        return React.createElement(View, null);
                    }
                    var locstr = window.location.pathname;
                    if (locstr == "/") {
                        return React.createElement(View, null);
                    }
                    // if (locstr.split("/").length <= 2) {
                    //     return <View />
                    // }
                }
            }
        }
        else {
            if (!SNavigation.lastRoute) {
                return React.createElement(View, null);
            }
            if (!SNavigation.lastRoute.navigation.canGoBack()) {
                return React.createElement(View, null);
            }
        }
        return React.createElement(SView, { col: "xs-12", height: true, style: {
                justifyContent: 'center'
            } },
            React.createElement(SView, { onPress: function () {
                    // if (SNavigation.lastRoute) {
                    // if (SNavigation.lastRoute.navigation.canGoBack()) {
                    SNavigation.goBack();
                    // return;
                    // }
                    // }
                    // if (Platform.OS == "web") {
                    //     var locstr = window.location.pathname;
                    //     var locations = locstr.split("/");
                    //     locations = locations.slice(0, locations.length - 1);
                    //     var navTo = "";
                    //     locations.map((rout) => {
                    //         if (navTo) {
                    //             navTo += "/";
                    //         }
                    //         navTo += rout;
                    //     });
                    //     if (!navTo) {
                    //         navTo = SNavigation.root;
                    //     }
                    //     SNavigation.replace(navTo);
                    // }
                }, style: {
                    maxWidth: 35
                }, center: true, height: true },
                React.createElement(SIcon, { width: 25, height: 25, name: "Arrow", fill: STheme.color.secondary })));
    };
    SNavBar.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-12", row: true, center: true, style: {
                height: 40,
                backgroundColor: STheme.color.barColor,
                justifyContent: "center",
                alignItems: "center"
            } },
            React.createElement(SView, { col: "xs-2", center: true, height: true }, this.getBack()),
            React.createElement(SView, { col: "xs-8", center: true, flex: true },
                React.createElement(SText, { color: STheme.color.secondary }, this.props.title)),
            React.createElement(SView, { col: "xs-2", center: true, onPress: function () {
                    STheme.change();
                } })));
    };
    return SNavBar;
}(Component));
export default SNavBar;
