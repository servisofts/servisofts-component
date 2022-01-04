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
import { Text, TouchableOpacity } from 'react-native';
import { SLoad, STheme } from '../../index';
import DeleteBtn from './DeleteBtn';
var SButtom = /** @class */ (function (_super) {
    __extends(SButtom, _super);
    function SButtom(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SButtom.prototype.getOption = function (option) {
        var opt = __assign(__assign({ type: this.props.type, variant: this.props.variant }, this.props.options), this.props.props);
        return !opt[option] ? "default" : opt[option];
    };
    //---RENDER
    SButtom.prototype.getTypes = function () {
        return {
            "default": {
                touchable: __assign({ justifyContent: 'center', alignItems: 'center' }, this.props.style),
                text: __assign({ color: STheme.color.secondary }, this.props.styleText)
            },
            secondary: {
                touchable: __assign({ borderRadius: 4, backgroundColor: STheme.color.secondary, borderWidth: 1, borderColor: STheme.color.secondary, justifyContent: 'center', alignItems: 'center' }, this.props.style),
                text: __assign({ color: STheme.color.primary }, this.props.styleText)
            },
            outline: {
                touchable: {
                    backgroundColor: STheme.color.primary + "88",
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: STheme.color.secondary + "45",
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                text: __assign({ color: STheme.color.secondary }, this.props.styleText)
            },
            danger: {
                touchable: {
                    borderRadius: 4,
                    backgroundColor: STheme.color.danger,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                text: __assign({ color: STheme.color.secondary }, this.props.styleText)
            },
            success: {
                touchable: {
                    borderRadius: 4,
                    backgroundColor: STheme.color.success,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                text: __assign({ color: STheme.color.primary }, this.props.styleText)
            },
            bateonR: {
                touchable: {
                    backgroundColor: STheme.color.bateon + "",
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                text: __assign({ color: STheme.color.secondary }, this.props.styleText)
            },
            float: {
                touchable: __assign({ position: 'absolute', width: 50, height: 50, bottom: 38, right: 16 }, this.props.style),
                text: __assign({}, this.props.styleText)
            }
        };
    };
    SButtom.prototype.getVariant = function (theme) {
        return {
            "default": {
                touchable: {
                    width: 100,
                    height: 50
                },
                text: {
                    fontSize: 12
                }
            },
            "confirm": {
                touchable: {
                    width: 100,
                    height: 50
                },
                text: {
                    fontSize: 12
                }
            }
        };
    };
    SButtom.prototype.render = function () {
        var _this = this;
        // var theme = SThemeStyle();
        this.styleType = this.getTypes();
        this.variant = this.getVariant();
        //---RETURN
        var variant = this.variant[this.getOption("variant")];
        var style = this.styleType[this.getOption("type")];
        var Component = TouchableOpacity;
        if (this.props.props) {
            if (this.props.props.variant == "confirm") {
                Component = DeleteBtn;
            }
        }
        var CONTEN = this.props.children;
        if (typeof this.props.children == "string") {
            CONTEN = React.createElement(Text, { style: [variant.text, style.text] },
                " ",
                this.props.children);
        }
        if (this.props.loading) {
            CONTEN = React.createElement(SLoad, null);
        }
        return (React.createElement(Component, { style: __assign(__assign(__assign({}, variant.touchable), style.touchable), this.props.style), styleText: __assign(__assign({}, variant.text), style.text), onPress: function () {
                if (_this.props.loading)
                    return;
                // if (!this.props.onPressValidation()) return;
                if (_this.props.onPress)
                    _this.props.onPress();
            } }, CONTEN));
    };
    SButtom.defaultProps = {
        options: {},
        style: {},
        onPressValidation: function () { return true; }
    };
    return SButtom;
}(Component));
export { SButtom };
