import React from 'react';
import { SView } from "../../../index";
var SMarker = function (props) {
    return React.createElement("div", { style: {
            cursor: "pointer",
            textAlign: "center"
        }, onClick: function () {
            if (!props.onPress)
                return;
            props.onPress();
        } },
        React.createElement(SView, { col: "xs-12", height: true, style: {
                alignItems: 'center',
                transform: [{ translateY: "-50%" }]
            } },
            props.contenido,
            props.children));
};
export default SMarker;
