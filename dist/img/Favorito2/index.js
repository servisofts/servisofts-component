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
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 27 27" }),
    React.createElement(Path, { d: "M11.219,20.194,9.592,18.741C3.814,13.6,0,10.212,0,6.053A6.053,6.053,0,0,1,6.17,0a6.772,6.772,0,0,1,5.048,2.3A6.772,6.772,0,0,1,16.267,0a6.053,6.053,0,0,1,6.17,6.053c0,4.16-3.814,7.549-9.592,12.7Z", transform: "translate(2.244 3.366)" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
