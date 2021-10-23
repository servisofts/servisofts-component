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
    React.createElement(Path, { d: "M11,15a11.731,11.731,0,0,1-6.726-2.1A11.837,11.837,0,0,1,0,7.5a11.818,11.818,0,0,1,22,0,11.836,11.836,0,0,1-4.273,5.4A11.731,11.731,0,0,1,11,15ZM11,2.5a5,5,0,1,0,5,5A5.005,5.005,0,0,0,11,2.5Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,11,10.5Z", transform: "translate(1 4.5)" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
