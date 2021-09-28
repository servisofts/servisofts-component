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
import { Path } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 344.63 257.25" }),
    React.createElement(Path, { fill: "#8dbf3b", d: "M9.51,151.21l127.24,99c10.22,9.17,22.73,8.93,28.82,1.87,4.47-5.18,4.38-12.73,4.26-15.19,1.33-114.43,1.27-198.55-.12-217.65-.27-3.62-1.21-10.77-5.73-15C158.05-1.26,148.4-1,141.11,5.67L9.75,107.78C6.17,110.56.56,118,0,127.69-.53,138.16,5.64,146.75,9.51,151.21Z" }),
    React.createElement(Path, { fill: "#e73434", d: "M335.11,106,207.69,7c-10.23-9.16-22.76-8.92-28.86-1.86-4.47,5.17-4.39,12.72-4.26,15.19-1.34,114.43-1.27,198.55.12,217.65.26,3.62,1.2,10.76,5.74,15,5.93,5.52,15.59,5.27,22.89-1.42l131.55-102.1c3.58-2.79,9.2-10.21,9.72-19.92C345.16,119.08,339,110.5,335.11,106Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
