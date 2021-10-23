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
import React from 'react';
import Svg from "react-native-svg";
import { Rect } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 516.6 293.43" }),
    React.createElement(Rect, { width: "2.03", height: "2.03" }),
    React.createElement(Rect, { x: "3.69", width: "2.03", height: "2.03" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
