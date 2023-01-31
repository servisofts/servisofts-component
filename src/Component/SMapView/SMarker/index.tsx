import React, { Component } from 'react';
import { SView } from "../../../index"
const SMarker = (props) => {
    var transform: any = [{ translateY: "-50%" }]
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
            transform: transform
        }}>
            {props.contenido}
            {props.children}
        </SView>
    </div>
}
export default SMarker;