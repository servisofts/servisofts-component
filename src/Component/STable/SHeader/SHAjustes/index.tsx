import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SText, STheme, SView } from '../../../../index';
type SHeaderProps = {
    data: any
}
export default class SHAjustes extends Component<SHeaderProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView
                center
                style={{
                    width: 200,
                    height: 300,
                    backgroundColor: STheme.color.background,
                    borderRadius: 8,
                }}>
                <SText > {this.props.data.label} </SText>
                <SText>Width: {this.props.data.width} </SText>
            </SView>
        );
    }
}
