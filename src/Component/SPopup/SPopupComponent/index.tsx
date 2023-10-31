import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ScrollView, TouchableOpacity, KeyboardAvoidingView, BackHandler } from 'react-native';
import STheme from '../../STheme';

export type SPopupComponentProps = {
    style?: any,
    close?: () => void,

}
export default class SPopupComponent extends Component<SPopupComponentProps> {
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
            {/* <Svg resource={require("../img/cerrar.svg")} style={{
                    width: 15,
                    height: 15,
                    color: "#000",
                    //top: -10
                }} /> */}


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
            }}>
                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column' }} behavior="padding" enabled >
                    <View style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        backgroundColor: STheme.color.card,
                        justifyContent: "center",
                        alignItems: "center",
                        // ...this.props.style
                    }}>
                        {/* <View style={{
                        position:"absolute",
                        width:"100%",
                        height:"100%",
                    }}>

                    </View> */}
                        <View style={{
                            width: "100%",
                            // height:"100%",
                            maxWidth: "94%",
                            maxHeight: "90%",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}>
                            {this.props.children}
                            {this.getButonClose()}
                        </View>
                    </View>
                </KeyboardAvoidingView>

            </TouchableOpacity >
        );
    }
}
