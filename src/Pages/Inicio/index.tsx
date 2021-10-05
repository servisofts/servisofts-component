import React, { Component } from 'react';
import { View } from 'react-native';
import { SView, SText, STheme, SPage, SNavigation, SIcon, SHr, } from '../../index';
export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getIcon({ name, page, icon }) {
        return <SView height={100} width={100} center onPress={() => {
            SNavigation.navigate(page)
        }}>
            <SView col={"xs-8"} colSquare>
                <SIcon name={icon} />
            </SView>
            <SText>{name}</SText>
        </SView>
    }
    getLista() {
        return <SView col={"xs-12"} row>
            {this.getIcon({ name: "Create SVG", page: "scomponent/SvgToReact", icon: "Cheque" })}
            {this.getIcon({ name: "Iconos", page: "scomponent/SIcon", icon: "Profanity" })}
            {this.getIcon({ name: "Formulario", page: "scomponent/Formulario", icon: "Alert" })}
            {this.getIcon({ name: "STable", page: "scomponent/STable", icon: "Excel" })}
        </SView>
    }
    render() {

        return (
            <SPage
                title="Servisofts Component"
            >
                <SView col={"xs-12"} style={{ padding: 8 }}>
                    <SText center col={"xs-12"} fontSize={24} bold justify>Servisofts - Component</SText>
                    <SText col={"xs-12"} bold fontSize={16} justify>Sobre SComponent!</SText>
                    <SText col={"xs-12"} justify>{"Servisofts Component es una libreria en Android, IOS & Web para facilitar el desarrollo en React-Native-Web. "}</SText>
                    <SHr />
                    {/* <SText col={"xs-12"} bold fontSize={16}>En que nos ayuda SComponent?</SText> */}
                    {/* <SText col={"xs-12"} justify>{"SComponent tiene bastantes funcionalidades, comensando con un sistema de regillas ( xs - sm - md - lg - xl ) que nos permite crear diseños responsive al modo de bootstrap. "}</SText> */}
                    {/* <SText col={"xs-12"} justify>{"Tambien cuenta con la implementacion de temas ( default - dark ) "}</SText> */}
                    {/* <SText col={"xs-12"} justify>{"Facil implementacion de Navigation V5 "}</SText> */}
                    {/* <SText col={"xs-12"} justify>{"Paquetes de iconos y mas componentes que podemos ver en: "}</SText> */}
                    {this.getLista()}

                </SView>
            </SPage>
        );
    }
}
