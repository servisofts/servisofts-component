import React, { Component } from 'react';
import { SView, SText, STheme, SNavigation, SPage } from 'servisofts-component'

export default class Introduccion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SPage title={"SComponent - Docs"}>
                <SText>Introduccion</SText>
                <SText>Que es Servisofts Component?</SText>
                <SText>
                    SComponent es una libreria de npm para "react-native-web"
                    la cual nos facilita el desarrollo
                    proporcionando diversos componentes
                    que son utilizados a la hora de desarrollar
                    aplicaciones.
                </SText>
                <SView onPress={() => {
                    SNavigation.navigate("docs/install")
                }}>
                    <SText>
                        Como usar?
                    </SText>
                </SView>

            </SPage >
        );
    }
}
