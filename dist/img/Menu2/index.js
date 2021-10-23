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
import { Path } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 28 28" }),
    React.createElement(Path, { d: "M21,14H0V11.667H21V14Zm0-5.833H0V5.834H21V8.166Zm0-5.834H0V0H21V2.332Z", fill: "#fff" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
