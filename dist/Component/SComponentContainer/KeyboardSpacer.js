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
/**
 * Created by andrewhurst on 10/5/15.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, LayoutAnimation, View, Dimensions, ViewPropTypes, Platform, StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        bottom: 0
    }
});
// From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
var defaultAnimation = {
    duration: 500,
    create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 200
    }
};
var KeyboardSpacer = /** @class */ (function (_super) {
    __extends(KeyboardSpacer, _super);
    function KeyboardSpacer(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            keyboardSpace: 0,
            isKeyboardOpened: false
        };
        _this._listeners = null;
        _this.updateKeyboardSpace = _this.updateKeyboardSpace.bind(_this);
        _this.resetKeyboardSpace = _this.resetKeyboardSpace.bind(_this);
        return _this;
    }
    KeyboardSpacer.prototype.componentDidMount = function () {
        var updateListener = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
        var resetListener = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
        this._listeners = [
            Keyboard.addListener(updateListener, this.updateKeyboardSpace),
            Keyboard.addListener(resetListener, this.resetKeyboardSpace)
        ];
    };
    KeyboardSpacer.prototype.componentWillUnmount = function () {
        this._listeners.forEach(function (listener) { return listener.remove(); });
    };
    KeyboardSpacer.prototype.updateKeyboardSpace = function (event) {
        console.log(event);
        if (!event.endCoordinates) {
            return;
        }
        var animationConfig = defaultAnimation;
        if (Platform.OS === 'ios') {
            animationConfig = LayoutAnimation.create(event.duration, LayoutAnimation.Types[event.easing], LayoutAnimation.Properties.opacity);
        }
        LayoutAnimation.configureNext(animationConfig);
        // get updated on rotation
        var screenHeight = Dimensions.get('window').height;
        // when external physical keyboard is connected
        // event.endCoordinates.height still equals virtual keyboard height
        // however only the keyboard toolbar is showing if there should be one
        var keyboardSpace = (screenHeight - event.endCoordinates.screenY) + this.props.topSpacing;
        this.setState({
            keyboardSpace: keyboardSpace,
            isKeyboardOpened: true
        }, this.props.onToggle(true, keyboardSpace));
    };
    KeyboardSpacer.prototype.resetKeyboardSpace = function (event) {
        var animationConfig = defaultAnimation;
        if (Platform.OS === 'ios') {
            animationConfig = LayoutAnimation.create(event.duration, LayoutAnimation.Types[event.easing], LayoutAnimation.Properties.opacity);
        }
        LayoutAnimation.configureNext(animationConfig);
        this.setState({
            keyboardSpace: 0,
            isKeyboardOpened: false
        }, this.props.onToggle(false, 0));
    };
    KeyboardSpacer.prototype.render = function () {
        return (React.createElement(View, { style: [styles.container, { height: this.state.keyboardSpace }, this.props.style] }));
    };
    KeyboardSpacer.propTypes = {
        topSpacing: PropTypes.number,
        onToggle: PropTypes.func,
        style: ViewPropTypes.style
    };
    KeyboardSpacer.defaultProps = {
        topSpacing: 0,
        onToggle: function () { return null; }
    };
    return KeyboardSpacer;
}(Component));
export default KeyboardSpacer;
