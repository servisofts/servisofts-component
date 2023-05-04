import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SView from '../SView';
import { SScrollView3PropsType } from './types';



class SScrollView3 extends Component<SScrollView3PropsType> {
    props: SScrollView3PropsType
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SView col={"xs-12"} height>
                <ScrollView
                    horizontal
                    showsVerticalScrollIndicator={this.props.scroll}
                    showsHorizontalScrollIndicator={this.props.scroll}
                    {...this.props}
                >
                    <SView col={"xs-12"} >
                        {this.props.children}
                    </SView>
                    
                </ScrollView>
            </SView>
        );
    }
}
export default SScrollView3;