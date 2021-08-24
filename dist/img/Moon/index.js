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
var Web = function (props) { return (React.createElement("svg", __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 102.05 101.62" }),
    React.createElement("path", { d: "M99.56,57.91a3.6,3.6,0,0,0-3,.65A38.3,38.3,0,0,1,85,65.35a36.5,36.5,0,0,1-13.18,2.34A38.31,38.31,0,0,1,33.41,29.33a40.38,40.38,0,0,1,2.08-12.66A35.17,35.17,0,0,1,41.76,5.45a3.33,3.33,0,0,0-.53-4.7,3.59,3.59,0,0,0-3-.65A52.68,52.68,0,0,0,10.57,18.63a51.66,51.66,0,0,0,4.57,67.85,51.22,51.22,0,0,0,36.53,15.14A51.67,51.67,0,0,0,101.91,62,3.16,3.16,0,0,0,99.56,57.91Z" }))); };
export default { Native: Native, Web: Web };
