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
import React from "react";
import Svg from "react-native-svg";
import { Path } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 73.7 98.27" }),
    React.createElement(Path, { d: "M64.49,36.85H61.42V24.57a24.57,24.57,0,0,0-49.14,0V36.85H9.21A9.22,9.22,0,0,0,0,46.06v43a9.22,9.22,0,0,0,9.21,9.21H64.49a9.22,9.22,0,0,0,9.21-9.21v-43A9.22,9.22,0,0,0,64.49,36.85Zm-44-12.28a16.38,16.38,0,1,1,32.76,0V36.85H20.47Zm20.47,43.9V77.8a4.09,4.09,0,1,1-8.18,0V68.47a8.19,8.19,0,1,1,8.18,0Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
