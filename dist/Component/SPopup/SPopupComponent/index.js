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
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import STheme from '../../STheme';
var SPopupComponent = /** @class */ (function (_super) {
    __extends(SPopupComponent, _super);
    function SPopupComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SPopupComponent.prototype.getButonClose = function () {
        var _this = this;
        return React.createElement(TouchableOpacity, { style: {
                width: 30,
                height: 30,
                position: "absolute",
                top: 0,
                right: 0,
                justifyContent: "center",
                alignItems: "center"
            }, onPress: function () {
                _this.props.close();
            } });
    };
    SPopupComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement(TouchableWithoutFeedback, { onPress: function () {
                _this.props.close();
            } },
            React.createElement(View, { style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backgroundColor: STheme.color.card,
                    justifyContent: "center",
                    alignItems: "center"
                } },
                React.createElement(View, { style: {
                        width: "100%",
                        // height:"100%",
                        maxWidth: "94%",
                        maxHeight: "90%",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden"
                    } },
                    React.createElement(TouchableWithoutFeedback, { accessibilityViewIsModal: true, onPress: function () {
                        } }, this.props.children),
                    this.getButonClose()))));
    };
    return SPopupComponent;
}(Component));
export default SPopupComponent;
