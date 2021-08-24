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
            <SView flex center backgroundColor={STheme.color.background}>
                <ActivityIndicator color={STheme.color.secondary} />
            </SView>
        );
    }
}