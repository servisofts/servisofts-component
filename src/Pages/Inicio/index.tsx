import React, { Component } from 'react';
import { View } from 'react-native';
import SGradient from '../../Component/SGradient';
import { SView, SText, STheme, SPage, SNavigation, SIcon, SHr, } from '../../index';
import Aperture from './Aperture';
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
            {this.getIcon({ name: "Documentacion", page: "scomponent/docs", icon: "Servisofts" })}
            {this.getIcon({ name: "Create SVG", page: "scomponent/SvgToReact", icon: "Cheque" })}
            {this.getIcon({ name: "Iconos", page: "scomponent/SIcon", icon: "Profanity" })}
            {this.getIcon({ name: "Formulario", page: "scomponent/Formulario", icon: "Alert" })}
            {this.getIcon({ name: "STable", page: "scomponent/STable", icon: "Excel" })}
            {this.getIcon({ name: "NewTable", page: "scomponent/NewTable", icon: "Excel" })}
            {this.getIcon({ name: "SGradient", page: "scomponent/SGradient", icon: "Box" })}
            {this.getIcon({ name: "SView", page: "scomponent/SView", icon: "Box" })}
            {this.getIcon({ name: "SDate", page: "scomponent/SDate", icon: "Calendar" })}
            {this.getIcon({ name: "SLocation", page: "scomponent/SLocation", icon: "Marker" })}
        </SView>
    }
    render() {

        return (
            <SPage
                title="Servisofts Component"
            >
                <SView col={"xs-12"} style={{ padding: 8 }}>
                    {/* <SText col={"xs-12"} justify>{"Servisofts Component is a library for Android, IOS & web for easing app development in react-native-web."}</SText> */}
                    {/* <SHr /> */}
                    {this.getLista()}

                </SView>
                {/* <Aperture /> */}
            </SPage>
        );
    }
}
