import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SPage, SView, SText, STheme, SInfo } from 'sc-1'

export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getComponent(obj) {
        return <SView col={"xs-6 sm-4 md-3 xl-2"} colSquare center>
            <SView col={"xs-11"} colSquare backgroundColor={STheme.color.primary} center
                style={{ borderRadius: 4, padding: 4, overflow: "hidden" }}>
                <SText fontSize={14} bold center col={"xs-1"}>{obj.name}</SText>
                <SText fontSize={10} center>{obj.detail}</SText>
            </SView>
        </SView>
    }
    render() {
        return (
            <SPage title={"Components"}>
                <SView row col={"xs-12"} >
                    {SInfo.Componentes.map((item) => {
                        return this.getComponent(item)
                    })}
                </SView>
            </SPage>
        )
    }
}
