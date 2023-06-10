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
import { TextInput } from 'react-native';
import React from 'react';
import SInput2TypeAbstract from '../SInput2TypeAbstract';
var text = /** @class */ (function (_super) {
    __extends(text, _super);
    function text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    text.prototype.render = function () {
        var _a;
        return React.createElement(TextInput, __assign({ ref: this.handleRef.bind(this, "input") }, this.props, { style: [{
                    padding: 0,
                    margin: 0,
                    width: "100%"
                }, (_a = this === null || this === void 0 ? void 0 : this.props) === null || _a === void 0 ? void 0 : _a.style] }));
    };
    return text;
}(SInput2TypeAbstract));
export default text;
