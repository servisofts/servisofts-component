import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
        if (!this.props.colors) return null;
        return (
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 0, y: 0}}
                colors={this.props.colors}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
            </LinearGradient >
        );
    }
}
export default SGradient;