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
import { SHr, SSection, SText, SView, SInput, SBuscador, SIcon, STheme, SThread } from '../../index';
import SOrdenador from '../SOrdenador';
import { FlatList } from 'react-native';
var SList = /** @class */ (function (_super) {
    __extends(SList, _super);
    function SList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            page: 1,
            buscar: ""
        };
        _this._rend = props.render;
        return _this;
    }
    SList.prototype.getMoreItems = function (inverse) {
        var _this = this;
        if (!this.props.inverse != !inverse)
            return null;
        if (!this.props.limit)
            return null;
        if (this.state.cant <= (this.state.page * this.props.limit)) {
            return null;
        }
        var props = {};
        if (this.props.horizontal) {
            props = {
                width: 100,
                height: true
            };
        }
        else {
            props = {
                col: "xs-12"
            };
        }
        return React.createElement(SView, __assign({}, props, { center: true, style: {
                padding: 8
            }, onPress: function () {
                _this.state.page += 1;
                _this.setState(__assign({}, _this.state));
            } }),
            React.createElement(SText, { style: { // textDecoration: "underline"
                }, underLine: true }, "Ver m\u00E1s"));
    };
    SList.prototype.getData = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var space = (_a = this.props.space) !== null && _a !== void 0 ? _a : 8;
        if (this.props.space === 0) {
            space = null;
        }
        var data = this.props.data;
        if (!data)
            return null;
        if (!data[0]) {
            data = Object.values(data);
        }
        if (this.state.buscar) {
            data = data.filter(function (itm) {
                return SBuscador.validate(itm, _this.state.buscar);
            });
        }
        if (this.props.filter) {
            data = data.filter(this.props.filter);
        }
        var separation_style = {
            width: space / 2,
            height: space / 2
        };
        var init_separation_style = __assign({}, this.props.horizontal ? { width: (_b = this.props.initSpace) !== null && _b !== void 0 ? _b : 0 } : { height: (_c = this.props.initSpace) !== null && _c !== void 0 ? _c : 0 });
        var cant = Object.keys(data).length;
        if (this.state.cant != cant) {
            this.setState({
                cant: cant
            });
        }
        var arr;
        if (this.props.order) {
            arr = new SOrdenador(this.props.order).ordernarObject(data);
        }
        else {
            arr = Object.keys(data);
        }
        if (this.props.limit) {
            arr = arr.slice(0, ((_d = this.props.limit) !== null && _d !== void 0 ? _d : 1) * this.state.page);
        }
        if (this.props.inverse) {
            arr = arr.slice(0).reverse();
        }
        // let style: any = this.props.style;
        var e_style = {};
        var e_contentstyle = {};
        if (this.props.flex) {
            e_style["width"] = "100%";
            e_style["flex"] = 1;
            e_contentstyle["width"] = "100%";
            e_contentstyle["flex"] = 1;
        }
        if (this.props.center) {
            e_contentstyle["alignItems"] = "center";
            e_contentstyle["justifyContent"] = "center";
        }
        return React.createElement(FlatList, { data: arr, horizontal: this.props.horizontal, style: __assign({}, e_style), contentContainerStyle: __assign(__assign({}, e_contentstyle), ((_e = this.props.contentContainerStyle) !== null && _e !== void 0 ? _e : {})), scrollEnabled: this.props.scrollEnabled, renderItem: function (_a) {
                var item = _a.item, index = _a.index;
                if (!_this._rend) {
                    _this._rend = function (o) { return React.createElement(SText, null, JSON.stringify(o)); };
                }
                var Item = _this._rend(data[item], item, index);
                if (!Item)
                    return null;
                return React.createElement(SSection, { key: item + 'item_list' },
                    space ? (index == 0 ? React.createElement(SView, __assign({}, init_separation_style)) : React.createElement(SView, __assign({}, separation_style))) : null,
                    Item,
                    space ? React.createElement(SView, __assign({}, separation_style)) : null);
            } });
        return arr.map(function (key, index) {
            if (!_this._rend) {
                _this._rend = function (o) { return React.createElement(SText, null, JSON.stringify(o)); };
            }
            var Item = _this._rend(data[key], key, index);
            if (!Item)
                return null;
            return React.createElement(SSection, { key: key + 'item_list' },
                space ? (index == 0 ? React.createElement(SView, __assign({}, init_separation_style)) : React.createElement(SView, __assign({}, separation_style))) : null,
                Item,
                space ? React.createElement(SView, __assign({}, separation_style)) : null);
        });
    };
    SList.prototype.getBuscardo = function () {
        var _this = this;
        var _a;
        if (!this.props.buscador)
            return null;
        return React.createElement(SView, { col: "xs-12" },
            React.createElement(SInput, { icon: React.createElement(SView, { center: true, col: "xs-12", height: true },
                    React.createElement(SIcon, { name: "Search", fill: STheme.color.gray, width: 22 })), iconR: React.createElement(SView, { center: true, style: {
                        padding: 4
                    }, height: true },
                    React.createElement(SText, { fontSize: 12, color: STheme.color.gray }, "(" + ((_a = this.state.cant) !== null && _a !== void 0 ? _a : 0) + ")")), placeholder: "Buscar...", ref: function (r) { return _this._buscador = r; }, onChangeText: function (val) {
                    new SThread(500, "buscador_list", true).start(function () {
                        _this.setState({ buscar: val });
                    });
                } }),
            React.createElement(SHr, null));
    };
    SList.prototype.render = function () {
        return (React.createElement(SView, __assign({ col: "xs-12" }, this.props, { row: this.props.horizontal, flex: true }),
            this.getMoreItems(true),
            this.getBuscardo(),
            this.getData(),
            this.getMoreItems(false),
            this.props.flexEnd ? React.createElement(SView, { flex: true }) : null));
    };
    SList.defaultProps = {
        scrollEnabled: true
    };
    return SList;
}(Component));
export default SList;
