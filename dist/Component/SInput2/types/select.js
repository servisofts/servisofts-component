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
import { Picker } from 'react-native';
import React from 'react';
import SInput2TypeAbstract from '../SInput2TypeAbstract';
var select = /** @class */ (function (_super) {
    __extends(select, _super);
    function select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleFocus = function (e) {
            if (_this._ref.input) {
                _this._ref.input.blur();
            }
        };
        _this.handlePress = function (e) {
            console.log(e.nativeEvent);
            console.log(_this._ref.input.value);
        };
        return _this;
    }
    select.prototype.render = function () {
        console.log(this._ref);
        return React.createElement(Picker
        // mode='dropdown'
        // selectedValue={selectedValue}
        , { 
            // mode='dropdown'
            // selectedValue={selectedValue}
            style: [{
                    padding: 0,
                    margin: 0,
                    width: "100%"
                }, this.props.style] },
            React.createElement(Picker.Item, { label: "Java", value: "java" }),
            React.createElement(Picker.Item, { label: "JavaScript", value: "js" }));
    };
    return select;
}(SInput2TypeAbstract));
export default select;
