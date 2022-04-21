import React, { Component } from 'react';
import { SView } from "../../../index"
const SMarker = (props) => {
    return <div style={{
        cursor: "pointer",
        textAlign: "center",
    }}
        onClick={() => {
            if (!props.onPress) return;
            props.onPress();
        }}>
        <SView col={"xs-12"} height style={{
            alignItems: 'center',
            transform: [{ translateY: "-50%" }],
        }}>
            {props.contenido}
            {props.children}
        </SView>
    </div>
}
export default SMarker;