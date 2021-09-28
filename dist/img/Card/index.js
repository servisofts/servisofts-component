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
import { Path, Rect } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 141.73 141.73" }),
    React.createElement(Rect, { fill: "#f6c90b", width: "141.73", height: "141.73", rx: "34.98" }),
    React.createElement(Path, { fill: "#010101", d: "M127.54,36a8.44,8.44,0,0,0-5.79-3L41.9,26.34a8.52,8.52,0,0,0-9.19,7.75L31.1,49.16H24.69a8.53,8.53,0,0,0-8.52,8.52v50a8.53,8.53,0,0,0,8.52,8.52h80.12a8.53,8.53,0,0,0,8.52-8.52v-8.1l2.84.23q.36,0,.72,0A8.53,8.53,0,0,0,125.37,92l4.16-49.8a8.45,8.45,0,0,0-2-6.21ZM24.69,53.59h80.12a4.09,4.09,0,0,1,4.09,4.09v4.56H20.6V57.68a4.1,4.1,0,0,1,4.09-4.09ZM20.6,66.66h88.3v9.19H20.6Zm84.21,45.09H24.69a4.09,4.09,0,0,1-4.09-4.09V80.28h88.3v27.38a4.09,4.09,0,0,1-4.09,4.09Zm20.31-69.91L121,91.65a4.1,4.1,0,0,1-4.42,3.73l-3.21-.27V57.68a8.53,8.53,0,0,0-8.52-8.52H35.56l1.56-14.62v0a4.09,4.09,0,0,1,4.41-3.73l79.85,6.66a4.11,4.11,0,0,1,3.74,4.42Z" }),
    React.createElement(Path, { fill: "#010101", d: "M99.63,86.87H78.32a2.21,2.21,0,0,0-2.21,2.21V103a2.21,2.21,0,0,0,2.21,2.21H99.63a2.21,2.21,0,0,0,2.22-2.21V89.08A2.21,2.21,0,0,0,99.63,86.87Zm-2.21,13.9H80.54V91.29H97.42Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
