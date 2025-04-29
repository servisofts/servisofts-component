import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, RefreshControl } from 'react-native';
import SNavBar from '../SNavBar/index';
import SView from '../SView/index';
import SScrollView2 from '../SScrollView2/index';
import SNavigation, { BackAlternative } from '../SNavigation';
import SLoad from '../SLoad';
import SThread from '../SThread';
import SwipeToRefresh from '../SScrollView3/SwipeToRefresh';
import { LanguageSource } from '../SLanguage';


export type SPageProps = {
    title?: String | Component,
    titleLanguage?: LanguageSource,
    hidden?: boolean,
    preventBack?: boolean,
    onBack?: Function,
    backAlternative?: BackAlternative,
    disableScroll?: boolean,
    center?: boolean,
    onRefresh?: Function,
    navBar?: any,
    header?: any,
    footer?: any,
    keyboardVerticalOffset?: any,
    children?: any,
    navBarContent?: any

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
    static combinePages(name: string, pages) {
        var res = {};
        Object.keys(pages).map((key) => {
            var nk = "";
            var delimiter = "/";
            if (name) {
                if (name == "/") {
                    nk = name + key;
                } else {
                    if (key) {
                        nk = name + delimiter + key;
                    } else {
                        nk = name;
                    }
                }
            } else {
                nk = key;
            }
            res[nk] = pages[key];
        })
        return res;
    }
    static setBackground(background) {
        SPage.backgroundComponent = background;
    }
    state;
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };

    }
    getNavBar() {
        if (this.props.navBar) return this.props.navBar
        if (this.props.hidden) return <View />
        if (SNavigation.navBar) return <SNavigation.navBar {...this.props} />
        return <SNavBar {...this.props} />
    }
    getRefresh() {
        if (!this.props.onRefresh) return null;
        return <RefreshControl refreshing={this.state.loading} onRefresh={() => {
            this.props.onRefresh();
            // this.setState({ loading: true });
            new SThread(100, "refresh", true).start(() => {
                this.setState({ loading: false });
            })

        }} />
    }
    getChildren() {
        if (this.state.loading) return null;
        if (this.props.children) return this.props.children;
        return null;
    }
    getScroll() {
        if (this.props.disableScroll) return <SView center={this.props.center} col={"xs-12"} flex>
            {this.getChildren()}
        </SView>

        if (Platform.OS != "web") {

            return <ScrollView style={{
                flex: 1,
                width: "100%",
            }}
                nestedScrollEnabled={true}
                // onScroll={e=>console.log(e)}
                contentContainerStyle={{
                    width: "100%",
                    minHeight: "100%",
                }}
                refreshControl={this.getRefresh()}
            >
                <SView style={{
                    width: '100%',
                    flex: 1,
                }} center={this.props.center}>
                    {this.getChildren()}
                </SView>
            </ScrollView>
        }
        return <SwipeToRefresh onRefresh={this.props.onRefresh}>
            <SView style={{
                width: '100%',
                flex: 1,
            }} center={this.props.center}>
                {this.getChildren()}
            </SView>
        </SwipeToRefresh >
    }
    // getScroll() {
    //     if (this.props.disableScroll) return <SView center={this.props.center} col={"xs-12"} flex>
    //         {this.getChildren()}
    //     </SView>
    //     return <ScrollView style={{
    //         flex: 1,
    //         width: "100%",
    //     }} contentContainerStyle={{
    //         width: "100%",
    //         minHeight: "100%",
    //     }}
    //         refreshControl={this.getRefresh()}
    //     >
    //         <SView style={{
    //             width: '100%',
    //             flex: 1,
    //         }} center={this.props.center}>
    //             {this.getChildren()}
    //         </SView>
    //     </ScrollView>
    // }

    render_footer() {
        if (!this.props.footer) return null
        return this.props.footer;
    }
    render_header() {
        if (!this.props.header) return null
        return this.props.header;
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
                {SPage.backgroundComponent}
                <SView style={{
                    flex: 1,
                }}>
                    {this.getNavBar()}
                    {this.render_header()}
                    <SView col={"xs-12"}
                        style={{
                            flex: 1,
                            height: "100%",
                            overflow: "hidden",
                        }}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : null}
                            keyboardVerticalOffset={this.props.keyboardVerticalOffset ?? 60}
                            // behavior={"padding"}
                            enabled={Platform.OS === "ios"}
                            style={{
                                flex: 1,
                            }}>

                            {this.getScroll()}
                        </KeyboardAvoidingView>

                    </SView>
                    {this.render_footer()}
                </SView >
            </SView >
        );

    }
}