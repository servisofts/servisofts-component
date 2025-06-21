import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ScrollView, TouchableOpacity, KeyboardAvoidingView, BackHandler } from 'react-native';
import STheme from '../../STheme';

export type SPopupComponent3Props = {
    style?: any,
    close?: () => void,
    children?: any,

}
export default class SPopupComponent3 extends Component<SPopupComponent3Props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton = () => {
        // console.log("Deberia cerrar");
        // this.props.close();
        return true;  // Esto previene que la aplicación cierre al presionar el botón atrás
    }
    render() {
        return this.props.children
    }
}
