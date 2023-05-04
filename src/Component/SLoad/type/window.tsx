import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { SHr, SLoad, SText, STheme, SView } from '../../..';
import SLoadContainer from '../SLoadContainer';
import { SLoadPropsType } from '../type';

export default class window extends Component<SLoadPropsType> {
    props: SLoadPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    static renderGlobal(ITEM) {
        SLoadContainer.add({ [ITEM.props.key]: ITEM })
    }
    render() {
        if (this.props.hidden) {
            SLoadContainer.remove(this.props.key);
            return null;
        }
        return (
            <SView col={"xs-12"} center
                height style={{
                    position: "absolute",
                    backgroundColor: this.props.color ?? STheme.color.background + "CC"
                }}>
                <SLoad />
                <SHr />
                <SText>{this.props.label}</SText>
                <SHr />
                <SHr />
                {this.props.onCancel ? <SText underLine onPress={this.props.onCancel}>Cancelar</SText> : null}
            </SView>
        );
    }
}