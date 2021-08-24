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
var Web = function (props) { return (React.createElement("svg", __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.73 141.73" }),
    React.createElement("rect", { width: "141.73", height: "141.73", rx: "34.98" }))); };
export default { Native: Native, Web: Web };
