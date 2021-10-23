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
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 28 28" }),
    React.createElement(Path, { d: "M19.212,21h0l-6-5.99V14.06l-.324-.336a7.815,7.815,0,1,1,.841-.841l.336.324h.949l5.991,6L19.212,21ZM7.8,2.4a5.4,5.4,0,1,0,5.4,5.4A5.409,5.409,0,0,0,7.8,2.4Z", transform: "translate(3 3)" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
