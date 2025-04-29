import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ScrollView, TouchableOpacity, KeyboardAvoidingView, BackHandler } from 'react-native';
import STheme from '../../STheme';

export type SPopupComponent2Props = {
    style?: any,
    close?: () => void,
    children?: any,
    onClose?: () => void,

}
export default class SPopupComponent2 extends Component<SPopupComponent2Props> {
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
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
    handleBackButton = () => {
        console.log("Deberia cerrar");
        this.props.close();
        return true;  // Esto previene que la aplicación cierre al presionar el botón atrás
    }
    getButonClose() {
        return <TouchableOpacity style={{
            width: 30,
            height: 30,
            position: "absolute",
            top: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center"
        }} onPress={() => {
            this.props.close();
        }}>



        </TouchableOpacity>
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => {
                this.props.close();
            }} style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 999,
            }}>
                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column' }} behavior="padding" enabled >
                    <View style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        {this.props.children}
                    </View>
                </KeyboardAvoidingView>
            </TouchableOpacity >
        );
    }
}
