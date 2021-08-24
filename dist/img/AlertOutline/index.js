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
import Svg, { Path } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 113.39 103.65" }),
    React.createElement(Path, { d: "M56.69,72.84a5.83,5.83,0,1,0,0,11.65,5.83,5.83,0,0,0,0-11.65Z" }),
    React.createElement(Path, { d: "M110.63,93.49a19.89,19.89,0,0,0,0-20.14L74.17,10.14a20.1,20.1,0,0,0-34.91,0L2.71,73.4a20.19,20.19,0,0,0,17.48,30.25H93.1A20.1,20.1,0,0,0,110.63,93.49Zm-7.93-4.57a11,11,0,0,1-9.62,5.57H20.17A10.88,10.88,0,0,1,10.66,89a11,11,0,0,1,0-11.12L47.18,14.66a11,11,0,0,1,19.07,0l36.52,63.26A10.87,10.87,0,0,1,102.7,88.92Z" }),
    React.createElement(Path, { d: "M55.25,31.93a6.33,6.33,0,0,0-4.5,6.37c.14,1.84.25,3.7.39,5.54.4,7,.8,13.89,1.19,20.91a4.27,4.27,0,0,0,4.36,4.1,4.36,4.36,0,0,0,4.36-4.24c0-1.44,0-2.77.14-4.24.26-4.5.54-9,.79-13.5.14-2.91.4-5.82.54-8.74A7.11,7.11,0,0,0,62,35.22,5.84,5.84,0,0,0,55.25,31.93Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
