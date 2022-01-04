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
import SText from '../../SText';
import STheme from '../../STheme';
import SView from '../../SView';
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row(props) {
        var _this = _super.call(this, props) || this;
        _this.getItems = function () {
            return _this.props.header.map(function (item, index) {
                var data = _this.props.data;
                data = data[item.key];
                var ITEM;
                if (item.key == "index") {
                    data = _this.props.index + 1;
                }
                if (item.component) {
                    ITEM = item.component(data);
                }
                else {
                    if (typeof data == "object") {
                        data = JSON.stringify(data);
                    }
                    ITEM = React.createElement(SText, { fontSize: 12 }, data);
                }
                return React.createElement(React.Fragment, null,
                    React.createElement(SView, { width: _this.props.space, height: true, backgroundColor: _this.props.index % 2 == 0 ? STheme.color.primary + "22" : STheme.color.secondary + "22" }),
                    React.createElement(SView, { animated: true, height: true, style: {
                            width: _this.props.animHeader[item.key],
                            overflow: 'hidden'
                        } },
                        React.createElement(SView, __assign({ height: true }, item, { style: {
                                backgroundColor: _this.props.index % 2 == 0 ? STheme.color.primary + "22" : STheme.color.secondary + "22",
                                overflow: 'hidden',
                                padding: 2,
                                justifyContent: 'center',
                                width: "100%"
                            } }), ITEM)));
            });
        };
        _this.state = {
            data: _this.props.data
        };
        return _this;
    }
    Row.getDatoRecursive = function (obj, key, index) {
        if (key == "index")
            return index + 1;
        var path = key.split("/");
        var data = obj;
        path.map(function (dir) {
            dir = dir.replace(/-.*/, "");
            if (dir == "") {
                return;
            }
            if (!data)
                data = {};
            if (typeof data == "string") {
                try {
                    data = JSON.parse(data);
                }
                catch (e) {
                    data = {};
                }
            }
            data = data[dir];
        });
        if (data == null)
            data = "";
        return data;
    };
    Row.prototype.render = function () {
        return (React.createElement(SView, { row: true, height: this.props.height, animated: true, style: {
                width: this.props.animSize
            } }, this.getItems()));
    };
    return Row;
}(Component));
export default Row;
