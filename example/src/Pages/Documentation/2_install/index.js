import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SView, SText, STheme, SNavigation, SPage } from 'servisofts-component'
// import { Server } from 'servisofts-socket';


export default class Install extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SPage title={"How to install?"}>
                <SText>Install</SText>
            </SPage>
        );
    }
}
