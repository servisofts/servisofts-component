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
import { Path, } from "react-native-svg";
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 29 27" }),
    React.createElement(Path, { d: "M0.627418 26.8214L27.6399 14.3982C28.7867 13.8248 28.7867 13.3151 27.6399 12.7418C27.6248 12.7342 9.37675 4.41714 0.5 0L2.79352 12.2958L16.2998 12.7418C16.8732 12.7418 17.4465 14.1433 16.2998 14.4619C14.8422 14.8668 6.93458 14.4619 2.79352 14.4619L0.627418 26.8214Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };
