import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SPage, SView, SText, STheme, SInfo, SScrollView2 } from 'servisofts-component'

export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getComponent(obj, i) {
        return <SView key={"com" + i} col={"xs-6 sm-4 md-3 xl-2"} colSquare center>
            <SView col={"xs-11"} colSquare backgroundColor={STheme.color.primary} center
                style={{ borderRadius: 4, padding: 4, overflow: "hidden" }}>
                <SText fontSize={14} bold center >{obj.name}</SText>
                <SText fontSize={10} center>{obj.detail}</SText>
            </SView>
        </SView>
    }
    render() {
        return (
            <SPage title={"Components"} disableScroll>
                <SScrollView2 disableHorizontal>
                    <SView row col={"xs-12"} >
                        {SInfo.Componentes.map((item, i) => {
                            return this.getComponent(item, i)
                        })}
                    </SView>
                </SScrollView2>
            </SPage>
        )
    }
}
