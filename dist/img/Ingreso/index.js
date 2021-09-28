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
    React.createElement(Path, { fill: "#8cc534", d: "M142.25,14.51,9.44,208.8c-12.3,15.6-12,34.7-2.5,44,6.94,6.82,17.06,6.69,20.37,6.5,153.52,2,266.38,1.94,292-.18,4.86-.41,14.44-1.84,20.1-8.75,7.4-9.05,7.07-23.78-1.9-34.91l-137-200.58C196.79,9.42,186.83.85,173.81.06,159.76-.8,148.24,8.61,142.25,14.51Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
