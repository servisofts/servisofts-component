import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import STheme from '../STheme';
import SView from '../SView';

type typeProps = {
    color?: string,
}

export default class SLoad extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        var color = STheme.color.text ? STheme.color.text : STheme.color.secondary;
        return (
            <SView col={"xs-12"} center >
                <ActivityIndicator
                    color={this.props.color ?? color}
                    {...this.props}
                />
            </SView>
        );
    }
}