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
import SText from '../SText';
import STheme from '../STheme';
import SView from '../SView';
var SPagination = /** @class */ (function (_super) {
    __extends(SPagination, _super);
    function SPagination(props) {
        var _this = _super.call(this, props) || this;
        _this.getPageItens = function () {
            var limit = _this.props.limit;
            var data = _this.props.data;
            if (limit) {
                return Math.ceil(Object.keys(data).length / limit);
            }
            return 1;
        };
        _this.state = {};
        return _this;
    }
    SPagination.prototype.getPagination = function () {
        var _this = this;
        var cantPages = this.getPageItens();
        var ITEMS = [];
        if (this.props.page > 1) {
            ITEMS.push(React.createElement(SView, { style: {
                    width: 20,
                    height: 20,
                    borderRadius: 100
                }, center: true, onPress: function () {
                    _this.props.onChange(_this.props.page - 1);
                } },
                React.createElement(SText, null, "<")));
        }
        var cant = cantPages > 7 ? 7 : cantPages;
        var vals = {};
        var _loop_1 = function (index) {
            val = index;
            if (cantPages > this_1.props.page + 3) {
                if (index == cant) {
                    val = cantPages + "";
                }
                if (index == 2 && this_1.props.page > 4) {
                    val = "...";
                }
                if (index == 6) {
                    val = "...";
                }
                if (index == 3 && this_1.props.page > 4) {
                    val = this_1.props.page - 1;
                }
                if (index == 4 && this_1.props.page > 4) {
                    val = this_1.props.page;
                }
                if (index == 5 && this_1.props.page > 4) {
                    val = this_1.props.page + 1;
                }
            }
            else {
                if (index == 2 && this_1.props.page > 4) {
                    val = "...";
                }
                if (index > 2 && this_1.props.page > 4) {
                    val = cantPages + (index - 7);
                }
                if (index == cant) {
                    val = cantPages + "";
                }
            }
            vals[index] = val;
            ITEMS.push(React.createElement(SView, { style: {
                    width: 22,
                    height: 22,
                    borderRadius: 40,
                    backgroundColor: (val == this_1.props.page ? STheme.color.secondary + "66" : "transparent")
                }, center: true, onPress: function () {
                    if (vals[index] == "...")
                        return null;
                    _this.props.onChange(vals[index]);
                } },
                React.createElement(SText, { fontSize: 12, center: true, flex: true }, val)));
        };
        var this_1 = this, val;
        for (var index = 1; index <= cant; index++) {
            _loop_1(index);
        }
        if (this.props.page < cantPages) {
            ITEMS.push(React.createElement(SView, { style: {
                    width: 20,
                    height: 20,
                    borderRadius: 100
                }, center: true, onPress: function () {
                    _this.props.onChange(_this.props.page + 1);
                } },
                React.createElement(SText, null, ">")));
        }
        return React.createElement(SView, { col: "xs-12", center: true, height: true, row: true }, ITEMS);
    };
    SPagination.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-12", height: true, center: true, row: true }, this.getPagination()));
    };
    return SPagination;
}(Component));
export default SPagination;
