import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SView, SText, STheme, SPage, SNavigation, SIcon, SStorage } from 'sc-1'

export default class InicioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SPage
                hidden
            >
                <SView col={"xs-12"} style={{ padding: 8, }}>
                    <SText center col={"xs-12"} fontSize={24} bold justify>Servisofts - Component</SText>
                    <SView style={{ height: 16 }}></SView>
                    <SText col={"xs-12"} bold fontSize={18} justify>Sobre SComponent!</SText>
                    <SView style={{ height: 8 }}></SView>
                    <SText col={"xs-12"} fontSize={16} justify>{"Servisofts Component es una libreria en Android, IOS & Web para facilitar el desarrollo en React-Native-Web. "}</SText>
                    <SView style={{ height: 16 }}></SView>
                    <SText col={"xs-12"} bold fontSize={18}>En que nos ayuda SComponent?</SText>
                    <SView style={{ height: 8 }}></SView>
                    <SText col={"xs-12"} fontSize={16} justify>{"SComponent tiene bastantes funcionalidades, comensando con un sistema de regillas ( xs - sm - md - lg - xl ) que nos permite crear diseños responsive al modo de bootstrap. "}</SText>
                    <SText col={"xs-12"} fontSize={16} justify>{"Tambien cuenta con la implementacion de temas ( default - dark ) "}</SText>
                    <SText col={"xs-12"} fontSize={16} justify>{"Facil implementacion de Navigation V5 "}</SText>
                    <SText col={"xs-12"} fontSize={16} justify>{"Paquetes de iconos y mas componentes que podemos ver en: "}</SText>
                    <SText
                        col={"xs-12"}
                        fontSize={16}
                        bold
                        underLine
                        onPress={() => {
                            SNavigation.navigate("docs")
                        }}>{"Ver documentacion"}</SText>
                    <SView style={{ height: 8 }}></SView>
                    <SText
                        col={"xs-12"}
                        fontSize={16}
                        bold
                        underLine
                        onPress={() => {
                            SNavigation.navigate("Componentes")
                        }}>{"Ver componentes"}</SText>
                </SView>
            </SPage>
        );
    }
}
