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
import Svg, { Path, Circle } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 144.57 144.57" }),
    React.createElement(Path, { d: "M139.4,67.12H56.06a20.56,20.56,0,0,0-39.84,0H5.16a5.17,5.17,0,0,0,0,10.33H16.22a20.56,20.56,0,0,0,39.84,0H139.4a5.17,5.17,0,1,0,0-10.33ZM36.14,82.61A10.33,10.33,0,1,1,46.47,72.28,10.32,10.32,0,0,1,36.14,82.61Z" }),
    React.createElement(Path, { d: "M139.4,15.49H123.18a20.56,20.56,0,0,0-39.84,0H5.16a5.17,5.17,0,0,0,0,10.33H83.34a20.56,20.56,0,0,0,39.84,0H139.4a5.17,5.17,0,1,0,0-10.33ZM103.26,31a10.33,10.33,0,1,1,10.33-10.33A10.32,10.32,0,0,1,103.26,31Z" }),
    React.createElement(Path, { d: "M98,143.93a20.58,20.58,0,0,0,14.85-14.85H139.4a5.17,5.17,0,1,0,0-10.33H112.85a20.55,20.55,0,0,0-39.83,0H5.16a5.17,5.17,0,0,0,0,10.33H73a20.55,20.55,0,0,0,25,14.85" }),
    React.createElement(Circle, { cx: "92.94", cy: "123.91", r: "10.33" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
