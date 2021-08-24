import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    SInput,
    STheme, SView, SIcon, SThread
} from '../../../index';

type SHeadBarProps = {
    reload: () => void,
    onAdd: any,
    buscar: any,
}
export default class SHeadBar extends Component<SHeadBarProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getAdd() {
        if (!this.props.onAdd) {
            return <View />;
        }
        return <SView style={{
            width: 24,
            height: 24,
            marginEnd: 8,
        }} onPress={() => {
            // this.props.reload();
            this.props.onAdd();
        }}>
            <SIcon name={"Icon2"} fill={STheme.color.primary} />

        </SView>
    }
    render() {
        return (
            <SView
                row
                style={{
                    width: "100%",
                    // backgroundColor:"#f0f",.
                    height: 24,
                    justifyContent: "center",
                }}>

                <SView col={"xs-12"} style={{
                    height: "100%",
                    alignItems: "flex-start",
                    // paddingStart: 8,
                }}>
                    <SInput
                        col={"xs-12"}
                        style={{
                            margin: 0,
                            height: 24,
                            // backgroundColor: "#f0f",
                        }}
                        autoFocus={true}
                        placeholder={"Buscar..."}
                        onChangeText={(text) => {
                            new SThread(300, "buscadorTabla", true).start(() => {
                                this.props.buscar(text);
                            })
                        }}
                    />
                </SView>
                {/* <SView center row col={"xs-3 md-4"} style={{
                    height: 24,
                    justifyContent: "flex-end",
                    paddingRight: 4,
                }}>
                    {this.getAdd()}
                </SView> */}
            </SView>
        );
    }
}
