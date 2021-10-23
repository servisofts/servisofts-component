import React from 'react';
var SMarker = function (props) {
    return React.createElement("div", { style: {
            cursor: "pointer",
            textAlign: "center"
        }, onClick: function () {
            props.onPress();
        } },
        props.contenido,
        props.children);
};
export default SMarker;
