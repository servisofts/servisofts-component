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
import { View, Animated } from 'react-native';
import { SView, SText, STheme, SPopupOpen, SPopupClose } from '../../../index';
// import { SPopupClose, SPopupOpen } from '../../SPopup';
import SelectAlert from '../SelectAlert';
var SData = /** @class */ (function (_super) {
    __extends(SData, _super);
    function SData(props) {
        var _this = _super.call(this, props) || this;
        _this.reloadAnimate = function () {
            console.log("Recargando animate");
            // this.setState({ headerLoad: false })
        };
        _this.getData = function (obj, key) {
            var path = key.split("/");
            var data = obj;
            path.map(function (dir) {
                dir = dir.replace(/-.*/, "");
                if (!data)
                    data = {};
                if (typeof data == "string") {
                    try {
                        data = JSON.parse(data);
                    }
                    catch (e) { }
                }
                data = data[dir];
            });
            return data;
        };
        _this.state = {
            colorSelect: STheme.color.primary,
            select: {
                x: -1,
                y: -1
            }
        };
        _this.animHeight = new Animated.Value(_this.props.defaultHeight);
        return _this;
    }
    SData.prototype.getColorHover = function (_a) {
        var x = _a.x, y = _a.y, position = _a.position;
        if ((this.state.select.x == x && this.state.select.y == y)) {
            return this.state.colorSelect + "66";
        }
        if ((this.state.select.x == x || this.state.select.y == y)) {
            return this.state.colorSelect + "22";
        }
        if (position % 2 == 0) {
            return STheme.color.secondary + "11";
        }
        return "transparent";
    };
    SData.prototype.getRow = function (obj, key, position) {
        var _this = this;
        return this.props.header.map(function (header, i) {
            if (header.hidden)
                return React.createElement(View, null);
            var Anims = _this.props.animates;
            if (!Anims) {
                return React.createElement(View, null);
            }
            if (!Anims.widthHeaderAnim) {
                return React.createElement(View, null);
            }
            var DATA = _this.getData(obj, header.key);
            if (header.key == "index") {
                DATA = position;
            }
            if (header.render) {
                DATA = header.render(_this.getData(obj, header.key));
            }
            if (typeof DATA == "string") {
                DATA = React.createElement(SText, null, DATA);
            }
            return (React.createElement(SView, { animated: true, center: true, style: {
                    position: "absolute",
                    left: 0,
                    height: "100%",
                    borderWidth: 1,
                    borderColor: STheme.color.background + "22",
                    backgroundColor: _this.getColorHover({ x: header.key, y: key, position: position }),
                    width: (Anims.widthHeaderAnim[header.key] ? Anims.widthHeaderAnim[header.key].x : header.width),
                    zIndex: (Anims.animSelect[header.key] ? Anims.animSelect[header.key] : 1),
                    transform: [
                        { translateX: (Anims.positionHeader[header.key] ? Anims.positionHeader[header.key].x : 0) }
                    ]
                } },
                React.createElement(SView, { center: true, style: {
                        width: "100%",
                        height: "100%"
                    }, onPress: function () {
                        // Anims.animHover[header.key].setValue(1);
                        if (_this.props.onSelectRow) {
                            _this.props.onSelectRow(obj, header);
                        }
                        if (_this.props.onAction) {
                            SPopupOpen({
                                "key": "SelectTableAlert",
                                content: React.createElement(SelectAlert, { data: obj, actionTypes: _this.props.actionTypes, onAction: function (type) {
                                        SPopupClose("SelectTableAlert");
                                        if (_this.props.onAction) {
                                            _this.props.onAction(type, obj);
                                        }
                                    } })
                            });
                        }
                        _this.setState({
                            select: {
                                x: header.key,
                                y: key
                            }
                        });
                    } }, DATA)));
        });
    };
    SData.prototype.render = function () {
        var _this = this;
        if (!this.props.animates) {
            return React.createElement(View, null);
        }
        var i = 0;
        return Object.keys(this.props.data).map(function (key) {
            var obj = _this.props.data[key];
            i++;
            return (React.createElement(SView, { animated: true, row: true, style: {
                    width: "100%",
                    height: _this.animHeight
                } }, _this.getRow(obj, key, i)));
        });
    };
    SData.defaultProps = {
        defaultHeight: 30
    };
    return SData;
}(Component));
export default SData;
