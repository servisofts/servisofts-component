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
var Web = function (props) { return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 86 86" }),
    React.createElement(Path, { d: "M75.54 3.52C74.4535 2.433 73.1635 1.57072 71.7436 0.98241C70.3238 0.394103 68.8019 0.091301 67.265 0.091301C65.7281 0.091301 64.2062 0.394103 62.7864 0.98241C61.3665 1.57072 60.0765 2.433 58.99 3.52L54.85 7.68L10.76 51.75L10.66 51.85L10.49 52.06C10.49 52.06 10.49 52.06 10.49 52.11L10.37 52.3C10.37 52.3 10.37 52.3 10.37 52.37C10.3424 52.4282 10.319 52.4884 10.3 52.55L0.520001 81.97C0.379308 82.3807 0.357217 82.8228 0.456265 83.2455C0.555313 83.6683 0.771488 84.0545 1.08 84.36C1.52522 84.7918 2.11978 85.0354 2.74 85.04C2.99399 85.031 3.24589 84.9907 3.49 84.92L32.89 75.11H32.94L33.15 75.02L33.39 74.88C33.46 74.88 33.53 74.76 33.6 74.72C33.67 74.68 33.6 74.72 33.6 74.67C33.6381 74.6457 33.6719 74.6153 33.7 74.58L81.93 26.34C83.0167 25.2543 83.8788 23.9652 84.4669 22.5461C85.0551 21.1271 85.3579 19.6061 85.3579 18.07C85.3579 16.5339 85.0551 15.0129 84.4669 13.5939C83.8788 12.1749 83.0167 10.8857 81.93 9.8L75.54 3.52ZM32 69.7L15.72 53.41L56.49 12.64L72.78 28.93L32 69.7ZM13.42 57.7L27.66 72L6.29 79.12L13.42 57.7ZM78.57 23.07L76.09 25.57L59.81 9.32L62.32 6.82C62.9704 6.16691 63.7433 5.6487 64.5945 5.2951C65.4457 4.9415 66.3583 4.75947 67.28 4.75947C68.2017 4.75947 69.1143 4.9415 69.9655 5.2951C70.8167 5.6487 71.5896 6.16691 72.24 6.82L78.61 13.18C79.2626 13.8325 79.7798 14.6077 80.1317 15.4609C80.4836 16.314 80.6634 17.2284 80.6606 18.1512C80.6578 19.0741 80.4725 19.9874 80.1155 20.8384C79.7584 21.6894 79.2366 22.4614 78.58 23.11L78.57 23.07Z" }))); };
var Native = Web;
export default { Native: Native, Web: Web };