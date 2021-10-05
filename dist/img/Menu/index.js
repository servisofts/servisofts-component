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
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 24 24" }),
    React.createElement(Path, { d: "M16,16H12V12h4v4Zm-6,0H6V12h4v4ZM4,16H0V12H4v4Zm12-6H12V6h4v4Zm-6,0H6V6h4v4ZM4,10H0V6H4v4ZM16,4H12V0h4V4ZM10,4H6V0h4V4ZM4,4H0V0H4V4Z", transform: "translate(4 4)" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
