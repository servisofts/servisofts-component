import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SView, SText, STheme, SPage } from 'servisofts-component'
// import { Server } from 'servisofts-socket';


export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SPage
                title={"Docs - Grid"}
            >
                <SView col={"xs-12"} row center>
                    <SView col={{
                        xs: 12,
                        sm: 10,
                        md: 8,
                        lg: 7,
                        xl: 6
                    }} style={{
                        borderWidth: 1,
                        height: 50,
                    }}>
                        <SText >Hola</SText>
                    </SView>
                </SView>
            </SPage>
        );
    }
}
