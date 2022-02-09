import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import STheme from '../STheme';
import SView from '../SView';

type typeProps = {
}

export default class SLoad extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SView col={"xs-12"} center >
                <ActivityIndicator color={STheme.color.text ? STheme.color.text : STheme.color.secondary} />
            </SView>
        );
    }
}