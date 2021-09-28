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
import { Animated } from 'react-native';
import SText from '../SText';
import STheme from '../STheme';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Header.prototype.render = function () {
        return React.createElement(React.Fragment, null,
            React.createElement(Animated.View, { style: {
                    top: 0,
                    left: this.props.animationPosition,
                    position: "absolute",
                    width: this.props.animationSize,
                    height: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: STheme.color.primary
                } },
                React.createElement(SText, null, this.props.data.label)));
    };
    return Header;
}(Component));
export default Header;
