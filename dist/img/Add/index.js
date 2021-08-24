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
    React.createElement("g", { id: "Capa_2", "data-name": "Capa 2" },
        React.createElement("g", { id: "Capa_1-2", "data-name": "Capa 1" },
            React.createElement("rect", { width: "141.73", height: "141.73", rx: "34.98", fill: "#c31d38" }),
            React.createElement("line", { x1: "72.47", y1: "27.67", x2: "72.47", y2: "114.07", fill: "none", stroke: "#fff", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "15.1" }),
            React.createElement("line", { x1: "29.27", y1: "70.87", x2: "115.67", y2: "70.87", fill: "none", stroke: "#fff", "stroke-linecap": "round", "stroke-miterlimit": "10", "stroke-width": "15.1" }))))); };
export default { Native: Native, Web: Web };
