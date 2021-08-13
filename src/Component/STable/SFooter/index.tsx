import React, { Component } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { SText, STheme, SView } from '../../../index';
import Opciones from './Opciones';

type SType = {
    data: Object,
    header: [Object],
    style: ViewStyle,
    setHeader: (data: Object) => void,
}

export default class SFooter extends Component<SType> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                width: "100%",
                height: 24,
                backgroundColor: STheme.color.background,
                borderTopEndRadius: 8,
                borderTopStartRadius: 8,
                ...this.props.style
            }}>
                <SView row style={{
                    width: "100%", height: "100%"
                }}>
                    <SView col={"xs-3"} style={{
                        height: "100%",
                        paddingLeft: 8,
                        justifyContent: "center"
                        // alignItems: "center",
                    }}>
                        <SText style={{
                        }}>Total: {Object.keys(this.props.data).length}</SText>
                    </SView>
                    <SView row center col={"xs-6"}>

                    </SView>
                    <SView row col={"xs-3"} style={{
                        justifyContent: "flex-end",
                        paddingEnd: 8,
                    }}>
                        <Opciones {...this.props} />
                    </SView>
                </SView>
            </View>
        );
    }
}
