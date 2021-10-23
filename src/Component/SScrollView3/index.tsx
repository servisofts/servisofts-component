import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SView from '../SView';

type typeProps = {
}

class SScrollView3 extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SView col={"xs-12"} height>
                <ScrollView>
                    <ScrollView horizontal>
                        <SView col={"xs-12"}>
                            {this.props.children}
                        </SView>
                    </ScrollView>
                </ScrollView>
            </SView>
        );
    }
}
export default SScrollView3;