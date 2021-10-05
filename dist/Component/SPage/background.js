import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
var BackgroundImage = function (props) {
    return React.createElement(View, { style: {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            backgroundColor: "#999fff"
        } },
        React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%" },
            React.createElement(Defs, null,
                React.createElement(LinearGradient, { id: "negro_amarillo2", x1: "50%", x2: "50%", y2: "100%", gradientUnits: "objectBoundingBox" },
                    React.createElement(Stop, { offset: "0", "stop-color": "#1c1c1c" }),
                    React.createElement(Stop, { offset: "1", "stop-color": "#4a2a00" }))),
            React.createElement(Rect, { width: "100%", height: "100%", fill: "url(#negro_amarillo2)" })));
};
export default BackgroundImage;
