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
import { Animated, } from 'react-native';
import { SInput } from '../..';
import { SView } from '../../../..';
import SIcon from '../../../SIcon';
import SText from '../../../SText';
import STheme from '../../../STheme';
var ListaDireccion = /** @class */ (function (_super) {
    __extends(ListaDireccion, _super);
    function ListaDireccion(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            timeAnim: 350
        };
        _this.animSize = new Animated.Value(0);
        return _this;
    }
    ListaDireccion.prototype.fadeIn = function () {
        // this.setState({ isOpen: true });
        Animated.timing(this.animSize, {
            toValue: 1,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start();
    };
    ListaDireccion.prototype.fadeOut = function () {
        Animated.timing(this.animSize, {
            toValue: 0,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start(function () {
            // this.setState({ isOpen: false });
        });
    };
    ListaDireccion.prototype.getClose = function () {
        var _this = this;
        return React.createElement(SView, { style: {
                position: 'absolute',
                top: 0,
                right: 0,
                width: 40,
                height: 40,
                opacity: this.animSize
            }, center: true, animated: true, onPress: function () {
                _this.fadeOut();
            } },
            React.createElement(SIcon, { name: "Close", style: {
                    width: 25,
                    height: 25
                }, fill: STheme.color.primary }));
    };
    ListaDireccion.prototype.getInput = function () {
        var _this = this;
        return React.createElement(SView, { col: "xs-12", center: true, style: {
                padding: 4
            } },
            React.createElement(SInput, { col: "xs-11", style: {
                    height: 30,
                    backgroundColor: STheme.color.primary,
                    borderRadius: 4,
                    padding: 4
                }, defaultValue: this.props.direccion, placeholder: "Direccion...", onFocus: function () { return _this.fadeIn(); } }));
    };
    ListaDireccion.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-11 sm-10 md-8 lg-7 xl-6", height: true, backgroundColor: STheme.color.background + "dd", animated: true, style: {
                position: "absolute",
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                bottom: this.animSize.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["-84%", "0%"]
                })
            } },
            React.createElement(SView, { height: 16 }),
            React.createElement(SView, { col: "xs-12", center: true },
                React.createElement(SText, { fontSize: 12 }, "Busca tu direccion o selecciona en el mapa.")),
            React.createElement(SView, { height: 8 }),
            this.getInput(),
            this.getClose()));
    };
    return ListaDireccion;
}(Component));
export default ListaDireccion;
