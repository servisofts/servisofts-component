import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import SNavBar from '../SNavBar/index';
import SView from '../SView/index';
import SScrollView2 from '../SScrollView2/index';
import SNavigation from '../SNavigation';


export type SPageProps = {
    onBack?: Function,
    title?: String | Component,
    hidden?: boolean,
    preventBack?: boolean,
    disableScroll?: boolean,
    center?: boolean,

}

export default class SPage extends Component<SPageProps> {
    static backgroundComponent = (
        <View style={{
            position: "absolute",
            width: "120%",
            height: "120%",
            // backgroundColor: "#f0ff0f",
            // transform: [{ translateX: -50 }, { translateY: -50 }],
        }}>
            {/* <SIcon name={"Background"} width={"100%"} opacity={"0.3"} stroke={STheme.color.primary} /> */}
        </View>
    );
    static setBackground(background) {
        SPage.backgroundComponent = background;
    }
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    getNavBar() {
        if (this.props.hidden) return <View />
        if (SNavigation.navBar) return <SNavigation.navBar {...this.props} />
        return <SNavBar {...this.props} />
    }
    getScroll() {
        if (this.props.disableScroll) return <SView center={this.props.center} col={"xs-12"} flex>
            {this.props.children}
        </SView>
        return <ScrollView style={{
            flex: 1,
            width: "100%",
        }} contentContainerStyle={{
            width: "100%",
        }}>
            <SView style={{
                width: '100%',
                flex: 1,
            }} center={this.props.center}>
                {this.props.children}
            </SView>
        </ScrollView>
    }
    render() {
        return (
            <SView
                col={"xs-12"}
                style={{
                    flex: 1,
                    height: '100%',
                }}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{
                        flex: 1,
                    }}>
                    {this.getNavBar()}
                    <SView col={"xs-12"}
                        style={{
                            flex: 1,
                            height: "100%",
                            overflow: "hidden",
                        }}>
                        {SPage.backgroundComponent}
                        {this.getScroll()}

                    </SView>
                </KeyboardAvoidingView>
            </SView>
        );

    }
}