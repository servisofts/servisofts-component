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
import { Path, Rect } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 141.73 141.73" }),
    React.createElement(Rect, { fill: "#53b15b", width: "141.73", height: "141.73", rx: "34.98" }),
    React.createElement(Path, { fill: "#1d1d1b", d: "M107.85,62l-37-12.26L33.89,62,21.26,82l11.62,3.85v21.32l38,12.59,38-12.59V85.87L120.47,82ZM96.7,64.39,70.87,73,45,64.39l25.84-8.56ZM30.13,78.84l6.91-11,29.39,9.74-6.9,11Zm8.57,9L62,95.53,68,86.09v26.6L38.7,103Zm35.07,24.89V86.09l5.94,9.44L103,87.8V103Zm8.44-24.11-6.91-11,29.39-9.74,6.91,11Z" }),
    React.createElement(Path, { fill: "#1d1d1b", d: "M68,20.56h5.81V40H68Z" }),
    React.createElement(Path, { fill: "#1d1d1b", d: "M40.62,29.45l5-2.91,9.71,16.81-5,2.91Z" }),
    React.createElement(Path, { fill: "#1d1d1b", d: "M86.37,43.35l9.71-16.81,5,2.91-9.7,16.81Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
