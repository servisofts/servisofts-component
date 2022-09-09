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
    React.createElement(Rect, { width: "141.73", height: "141.73", rx: "34.98", fill: "#53b15b" }),
    React.createElement(Path, { d: "M105.54,32.52a11.7,11.7,0,0,0-16.55,0l-4.14,4.16L40.76,80.75l-.1.1s0,0,0,0l-.17.21s0,0,0,.05l-.12.19s0,0,0,.07a1.34,1.34,0,0,0-.07.18s0,0,0,0l-9.78,29.42a2.31,2.31,0,0,0,.56,2.39,2.41,2.41,0,0,0,1.66.68,3.09,3.09,0,0,0,.75-.12l29.4-9.81.05,0,.21-.09,0,0,.24-.14c.07,0,.14-.12.21-.16s0,0,0-.05a.41.41,0,0,0,.1-.09l48.23-48.24a11.69,11.69,0,0,0,0-16.54ZM62,98.7,45.72,82.41,86.49,41.64l16.29,16.29Zm-18.58-12L57.66,101l-21.37,7.12Zm65.15-34.63-2.48,2.5L89.81,38.32l2.51-2.5a7,7,0,0,1,9.92,0l6.37,6.36A7,7,0,0,1,108.58,52.11Z", fill: "#fff" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
