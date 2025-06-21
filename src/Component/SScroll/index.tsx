import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SView from '../SView';
type _SScrollProps = {
    horizontal?: boolean,
    center?: boolean,
    children?: any,
}
export default class SScroll extends Component<_SScrollProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: this.props.center ? "center" : "flex-start",
                    justifyContent: this.props.center ? "center" : "flex-start",
                    flexGrow:1,
                }}
                {...this.props}
            >
                {this.props.children}
            </ScrollView>
        );
    }
}