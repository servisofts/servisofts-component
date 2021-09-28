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
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 344.63 260.77" }),
    React.createElement(Path, { fill: "#df1e3c", d: "M202.38,246.26,335.19,52c12.3-15.59,12-34.69,2.5-44-6.94-6.82-17.06-6.69-20.37-6.5-153.52-2-266.38-1.94-292,.19-4.86.4-14.44,1.83-20.1,8.74-7.41,9-7.07,23.79,1.9,34.91l137,200.58c3.73,5.47,13.69,14,26.71,14.83C184.87,261.58,196.39,252.17,202.38,246.26Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
