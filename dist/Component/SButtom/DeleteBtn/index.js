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
import { View, Text, Animated, TouchableOpacity } from 'react-native';
var AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
var DeleteBtn = /** @class */ (function (_super) {
    __extends(DeleteBtn, _super);
    function DeleteBtn(props) {
        var _this = _super.call(this, props) || this;
        _this.time = !props.time ? 3 : props.time;
        _this.state = {
            count: _this.time,
            text: props.title ? props.title : "ELIMINAR",
            anim: new Animated.Value(_this.time)
        };
        return _this;
    }
    DeleteBtn.prototype.animEliminado = function () {
        var _this = this;
        this.onAnimEliminado = true;
        if (this.onAnimCancel) {
            return;
        }
        Animated.timing(this.state.anim, {
            duration: 200,
            toValue: this.time * 2,
            useNativeDriver: false
        }).start(function () {
            if (_this.onAnimCancel) {
                _this.animCancel();
                return;
            }
            _this.onAnimated = false;
            if (_this.props.onPress) {
                _this.props.onPress();
            }
            // new SSound()
        });
    };
    DeleteBtn.prototype.animCancel = function () {
        var _this = this;
        this.onAnimCancel = true;
        // Animated.timing(this.state.anim,).stop();
        Animated.timing(this.state.anim, {
            duration: 200,
            toValue: this.time,
            useNativeDriver: false
        }).start(function () {
            if (_this.props.onCancel) {
                _this.props.onCancel();
            }
            _this.onAnimated = false;
            _this.onAnimCancel = false;
            _this.setState(__assign({}, _this.state));
        });
    };
    DeleteBtn.prototype.fadeIn = function () {
        var _this = this;
        this.onAnimated = true;
        Animated.timing(this.state.anim, {
            duration: 1000,
            toValue: this.state.anim._value - 1,
            useNativeDriver: false
        }).start(function () {
            if (_this.onAnimCancel) {
                // this.onAnimated(false);
                return;
            }
            if (_this.state.anim._value > 0) {
                _this.fadeIn();
            }
            else {
                _this.onAnimated = false;
                _this.animEliminado();
            }
            _this.setState(__assign({}, _this.state));
        });
    };
    DeleteBtn.prototype.render = function () {
        // var style = this.props.style
        // console.log(this.props)
        // if (!style) {
        //     style = {}
        // }
        // if (!style.backgroundColor) {
        //     style.backgroundColor = "#f0f0f0"
        // }
        var _this = this;
        return (React.createElement(AnimatedTouchable, { style: __assign(__assign({}, this.props.style), { 
                // backgroundColor: this.state.anim.interpolate({
                //     inputRange: [0, this.time],
                //     outputRange: [style.backgroundColor + "99", style.backgroundColor + "ff"]
                // }),
                transform: [
                    {
                        scale: this.state.anim.interpolate({
                            inputRange: [0, this.time],
                            outputRange: [2, 1]
                        })
                    }
                ] }), onPress: function () {
                if (_this.onAnimated) {
                    _this.animCancel();
                    return;
                }
                _this.setState(__assign({}, _this.state));
                _this.fadeIn();
            } },
            React.createElement(View, { style: __assign(__assign({}, this.props.style), { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }) },
                !this.onAnimated ? this.props.children : (React.createElement(Text, { style: __assign(__assign({}, this.props.styleText), { textAlign: "center", letterSpacing: -0.5, fontSize: 10 }) },
                    this.state.anim._value.toFixed(0),
                    " ")),
                !this.onAnimated ? React.createElement(View, null) : React.createElement(Text, { style: __assign(__assign({}, this.props.styleText), { textAlign: "center", fontSize: 6 }) }, " cancelar "))));
    };
    return DeleteBtn;
}(Component));
export default DeleteBtn;
