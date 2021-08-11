import React, { Component } from 'react';
import { View, Text, TextStyle, ScrollView, Platform } from 'react-native';
import STheme from '../STheme/index';
import SView, { SViewProps } from '../SView/index';


export type SSCrollViewProps = {
}

export default class SSCrollView extends Component<SSCrollViewProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (<View style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            ...(Platform.OS == "web" ? {
                
            } : {
                flex: 1,
            })

        }}>
            <ScrollView style={{
                width: "100%",
                height: "100%",
                // backgroundColor:"$"
            }} contentContainerStyle={{
                width: "100%",
            }}>
                <SView col={"xs-12"}>
                    {this.props.children}
                </SView>
            </ScrollView>
        </View>
        );

    }
}