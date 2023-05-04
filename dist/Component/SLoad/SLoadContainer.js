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
import { Component } from 'react';
var SLoadContainer = /** @class */ (function (_super) {
    __extends(SLoadContainer, _super);
    function SLoadContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SLoadContainer.add = function (o) {
        if (!this.INSTANCE)
            return;
        this.INSTANCE.setState(__assign({}, o));
    };
    SLoadContainer.remove = function (key) {
        if (!this.INSTANCE)
            return;
        delete this.INSTANCE.state[key];
        this.INSTANCE.setState(__assign({}, this.INSTANCE.state));
    };
    SLoadContainer.prototype.render = function () {
        SLoadContainer.INSTANCE = this;
        return Object.values(this.state).map(function (o) { return o; });
    };
    return SLoadContainer;
}(Component));
export default SLoadContainer;
