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
import { SText, STheme, SView } from '../../../index';
import SIcon from '../../SIcon';
import Opciones from './Opciones';
var SFooter = /** @class */ (function (_super) {
    __extends(SFooter, _super);
    function SFooter(props) {
        var _this = _super.call(this, props) || this;
        _this.getPageItens = function () {
            var _a = _this.props, limit = _a.limit, data = _a.data;
            if (limit) {
                return Math.ceil(Object.keys(data).length / limit);
            }
            return 1;
        };
        _this.state = {};
        return _this;
    }
    SFooter.prototype.getPagination = function () {
        var _this = this;
        var cantPages = this.getPageItens();
        var ITEMS = [];
        if (this.props.page > 1) {
            ITEMS.push(React.createElement(SView, { style: {
                    width: 20,
                    height: 20,
                    borderRadius: 100
                }, center: true, onPress: function () {
                    _this.props.setPage(_this.props.page - 1);
                } },
                React.createElement(SText, null, "<")));
        }
        var _loop_1 = function (index) {
            ITEMS.push(React.createElement(SView, { style: {
                    width: 22,
                    height: 22,
                    borderRadius: 40,
                    backgroundColor: (index == this_1.props.page ? STheme.color.secondary + "66" : "transparent")
                }, center: true, onPress: function () {
                    _this.props.setPage(index);
                } },
                React.createElement(SText, { fontSize: 12, center: true, flex: true }, index)));
        };
        var this_1 = this;
        for (var index = 1; index <= cantPages; index++) {
            _loop_1(index);
        }
        if (this.props.page < cantPages) {
            ITEMS.push(React.createElement(SView, { style: {
                    width: 20,
                    height: 20,
                    borderRadius: 100
                }, center: true, onPress: function () {
                    _this.props.setPage(_this.props.page + 1);
                } },
                React.createElement(SText, null, ">")));
        }
        return React.createElement(SView, { col: "xs-12", center: true, height: true, row: true }, ITEMS);
    };
    SFooter.prototype.render = function () {
        var _this = this;
        return (React.createElement(View, { style: __assign({ width: "100%", height: 24, backgroundColor: STheme.color.background, borderTopEndRadius: 8, borderTopStartRadius: 8 }, this.props.style) },
            React.createElement(SView, { row: true, style: {
                    width: "100%", height: "100%"
                } },
                React.createElement(SView, { col: "xs-4", style: {
                        height: "100%",
                        paddingLeft: 8,
                        justifyContent: "center"
                        // alignItems: "center",
                    } },
                    React.createElement(SText, { style: {} },
                        "Total: ",
                        Object.keys(this.props.data).length)),
                React.createElement(SView, { row: true, col: "xs-4", height: true, center: true }, this.getPagination()),
                React.createElement(SView, { row: true, center: true, col: "xs-4", style: {
                        justifyContent: "flex-end"
                    } },
                    React.createElement(SView, { style: {
                            width: 30,
                            height: 24,
                            padding: 3
                        }, onPress: function () {
                            _this.props.reload();
                        } },
                        React.createElement(SIcon, { name: "Reload", fill: STheme.color.secondary })),
                    React.createElement(Opciones, __assign({}, this.props))))));
    };
    return SFooter;
}(Component));
export default SFooter;
