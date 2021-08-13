import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SPopupOpen, SText, STheme, SView, SIcon } from '../../../../index';
type OpcionesProps = {
    header: any,
    setHeader: any,

}
export default class Opciones extends Component<OpcionesProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getListaHeaders() {
        return this.props.header.map((obj, i) => {
            return <SView
                row
                col={"xs-6 md-4"}
                style={{
                    height: 30,
                    alignItems: "center",
                }} onPress={() => {
                    this.props.header[i] = {
                        ...obj,
                        hidden: !obj.hidden,
                    }
                    this.props.setHeader(this.props.header)
                }}>
                <View style={{
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: STheme.color.secondary,
                    backgroundColor: (obj.hidden ? "transparent" : STheme.color.secondary)
                }}>

                </View>
                <SView col={"xs-8"} style={{
                    height: "100%",
                    marginStart: 8,
                    justifyContent: "center"
                }}>
                    <SText>{obj.label}</SText>
                </SView>
            </SView>
        })
    }
    getOpcionesPopup() {
        return <SView center
            style={{
                width: 500,
                maxWidth: "100%",
                maxHeight: "100%",
                height: 500,
                backgroundColor: STheme.color.background,
                borderRadius: 8,
            }}>
            <SView row center col={"xs-11"}>
                {this.getListaHeaders()}
            </SView>
        </SView>
    }

    render() {
        return (
            <SView
                style={{
                    width: 24,
                    height: 24,
                    padding: 2,
                }}
                onPress={() => {
                    SPopupOpen({
                        key: "2asda",
                        content: (this.getOpcionesPopup())
                    })
                }}>
                <SIcon name={'engranaje'}
                    fill={"#fff"}
                />
            </SView>
        );
    }
}
