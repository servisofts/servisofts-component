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
import { Switch } from 'react-native';
import React from 'react';
import SInput2TypeAbstract from '../SInput2TypeAbstract';
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
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
    index.prototype.render = function () {
        console.log(this._ref);
        return React.createElement(Switch
        // trackColor={{ false: "#767577", true: "#DAA520" }}
        // thumbColor={this.state.value ? "#DAA520" : "#f4f3f4"}
        // onValueChange={this.handleChange.bind(this)}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        // value={this.state.value}
        , null);
    };
    return index;
}(SInput2TypeAbstract));
export default index;
