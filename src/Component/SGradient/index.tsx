import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type typeProps = {
    colors: Array<string>,
    deg?: number,
}

class SGradient extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        if(!this.props.colors) return null;
        var colors = this.props.colors;
        var color = "";
        for (var i = 0; i < colors.length; i++) {
            color += colors[i];
            if (i < colors.length - 1) {
                color += ",";
            }
        }
        var deg = this.props.deg
        if(!deg) deg = 0;
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(${deg}deg,${color})`,
            }}>

            </div>
        );
    }
}
export default SGradient;