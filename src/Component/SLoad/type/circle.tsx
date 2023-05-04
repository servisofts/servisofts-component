import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { STheme, SView } from '../../..';
import { SLoadPropsType } from '../type';

export default class circle extends Component<SLoadPropsType> {
    props: SLoadPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        if (this.props.hidden) return null;
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