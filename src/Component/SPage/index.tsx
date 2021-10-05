import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, } from 'react-native';
import SNavBar from '../SNavBar/index';
import SSCrollView from '../SSCrollView/index';
import STheme from '../STheme/index';
import SView from '../SView/index';
import SScrollView2 from '../SScrollView2/index';
import SImage from '../SImage';
import SIcon from '../SIcon';
import SNavigation from '../SNavigation';


export type SPageProps = {
    onBack?: Function,
    title?: String | Component,
    hidden?: boolean,
    preventBack?: boolean,
    disableScroll?: boolean

}

export default class SPage extends Component<SPageProps> {
    static backgroundComponent = (
        <View style={{
            position: "absolute",
            width: "120%",
            height: "120%",
            // backgroundColor: "#f0ff0f",
            transform: [{ translateX: -50 }, { translateY: -50 }],
        }}>
            <SIcon name={"Background"} width={"100%"} opacity={"0.3"} stroke={STheme.color.primary} />
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
        if (this.props.disableScroll) return this.props.children
        return <SScrollView2 disableHorizontal
            style={{
                // minHeight: '100%',
            }}
            contentContainerStyle={{
                minHeight: "100%",

            }}>

            <SView style={{
                width: '100%',
                height: '100%',
                flex: 1,
                // backgroundColor: "#f0f",
            }}>
                {this.props.children}
            </SView>

        </SScrollView2>
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