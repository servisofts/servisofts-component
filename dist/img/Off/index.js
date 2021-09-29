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
import { Path, Rect } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 141.73 141.73" }),
    React.createElement(Rect, { fill: "#c31c37", width: "141.73", height: "141.73", rx: "34.98" }),
    React.createElement(Path, { fill: "#fff", d: "M90.23,27.43a4.51,4.51,0,0,0-3.61,8.26,40.58,40.58,0,1,1-32.46,0,4.51,4.51,0,1,0-3.62-8.26,49.62,49.62,0,1,0,39.69,0Z" }),
    React.createElement(Path, { fill: "#fff", d: "M70.39,63.88a4.5,4.5,0,0,0,4.51-4.5V18.79a4.51,4.51,0,0,0-9,0V59.37A4.5,4.5,0,0,0,70.39,63.88Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
