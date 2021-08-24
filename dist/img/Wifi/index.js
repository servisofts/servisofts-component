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
import Icon from "./icon.svg";
var Native = Icon;
var Web = function (props) { return (React.createElement("svg", __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 121.89 91.73" }),
    React.createElement("circle", { cx: "61.23", cy: "77.49", r: "14.24" }),
    React.createElement("path", { d: "M95.27,43.18c-.22-.22-.44-.41-.66-.61L94,42a2,2,0,0,0-.35-.3,46.45,46.45,0,0,0-64.17,1.51l-2.06,2.06-2.85,2.85A8.94,8.94,0,0,0,37.18,60.74l4.92-4.92a28.7,28.7,0,0,1,40.52,0l3.55,3.44A8.87,8.87,0,0,0,101.28,53a8.65,8.65,0,0,0-2.58-6.24Z" }),
    React.createElement("path", { d: "M119.52,25.58l-3-3s0,0,0,0l-2.33-2.34a8.43,8.43,0,0,0-1.33-1.07A77.53,77.53,0,0,0,8.15,21.59c-.14.13-.3.21-.44.35L2.37,27.29A8.15,8.15,0,0,0,13.9,38.82l5.34-5.34.1-.11a61.2,61.2,0,0,1,84.45-.47L108,37.11a8.15,8.15,0,0,0,11.52-11.53Z" }))); };
export default { Native: Native, Web: Web };
