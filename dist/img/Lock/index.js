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
            React.createElement("rect", { width: "141.73", height: "141.73", rx: "34.98", fill: "#53b15b" }),
            React.createElement("path", { d: "M98.5,54.88H95.43V42.6a24.57,24.57,0,1,0-49.13,0V54.88H43.23A9.22,9.22,0,0,0,34,64.09v43a9.22,9.22,0,0,0,9.21,9.22H98.5a9.23,9.23,0,0,0,9.22-9.22v-43A9.23,9.23,0,0,0,98.5,54.88Zm-44-12.28a16.38,16.38,0,1,1,32.75,0V54.88H54.49ZM75,86.5v9.32a4.1,4.1,0,1,1-8.19,0V86.5a8.2,8.2,0,1,1,8.19,0Z", fill: "#fff" }))))); };
export default { Native: Native, Web: Web };
