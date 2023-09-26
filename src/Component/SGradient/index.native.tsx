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
    gradientCoordinates(degrees) {
        const adjustedDegrees = (degrees + 360 - 90) % 360; // Ajustar los grados a nuestro sistema de coordenadas
        const radians = adjustedDegrees * (Math.PI / 180); // Convertir grados a radianes
        return {
            start: {
                x: 0.5 * (1 - Math.cos(radians)),
                y: 0.5 * (1 - Math.sin(radians)),
            },
            end: {
                x: 0.5 * (1 + Math.cos(radians)),
                y: 0.5 * (1 + Math.sin(radians)),
            },
        };
    }
    render() {
        if (!this.props.colors) return null;
        let prop = this.gradientCoordinates(this.props.deg ?? 0)

        return (
            <LinearGradient
                {...prop}
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