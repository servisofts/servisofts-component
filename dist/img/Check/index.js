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
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 24 24" }),
    React.createElement(Path, { d: "M16,18H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V16A2,2,0,0,1,16,18ZM3.41,7.59h0L2,9l5,5,9-9L14.59,3.58,7,11.17,3.41,7.59Z", transform: "translate(3 3)" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
