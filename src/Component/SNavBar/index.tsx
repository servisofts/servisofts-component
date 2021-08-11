import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import STheme from '../STheme/index';
import SView from '../SView/index';
import SText from '../SText/index';
import SNavigation from '../SNavigation/index';
import { SPageProps } from '../SPage/index';
import SIcon from '../SIcon/index';


// export type SNavBarProps = {
//     title?: string,
// } & SPageProps

export default class SNavBar extends Component<SPageProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
        // if (Platform.OS == "web") {
        //     document.title = "Servisofts-"+this.props.title + "";
        // }
    }
    getBack() {
        if (this.props.preventBack) {
            return <View />
        }
        if (Platform.OS == "web") {
            var prevent = false;
            if (SNavigation.lastRoute) {
                if (!SNavigation.lastRoute.navigation.canGoBack()) {
                    if (SNavigation.lastRoute.route.name == SNavigation.root) {
                        return <View/>
                    }
                    var locstr = window.location.pathname;
                    if (locstr == "/") {
                        return <View />
                    }
                }
            }


        } else {
            if (!SNavigation.lastRoute) {
                return <View />
            }
            if (!SNavigation.lastRoute.navigation.canGoBack()) {
                return <View />
            }
        }

        return <SView onPress={() => {

            if (SNavigation.lastRoute) {
                if (SNavigation.lastRoute.navigation.canGoBack()) {
                    SNavigation.goBack();
                    return;
                }
            }
            if (Platform.OS == "web") {
                var locstr = window.location.pathname;
                var locations = locstr.split("/");
                locations = locations.slice(0, locations.length - 1);
                var navTo = "";
                locations.map((rout) => {
                    if (navTo) {
                        navTo += "/";
                    }
                    navTo += rout;
                });
                if (!navTo) {
                    navTo = SNavigation.root;
                }
                SNavigation.replace(navTo);
            }
        }} col={"xs-12"}>
            <SView style={{
                maxWidth: 35,
                height: 25,
            }} center>
                <SIcon width={25} height={25} name={"Arrow"} fill={STheme.color.secondary} />
            </SView>
        </SView>
    }
    render() {
        return (
            <SView
                col={"xs-12"}
                dir={"row"}
                style={{
                    height: 40,
                    backgroundColor: STheme.color.barColor,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <SView col={"xs-2"} center flex>
                    {this.getBack()}
                </SView>
                <SView col={"xs-8"} center flex>
                    <SText>{this.props.title}</SText>
                </SView>
                <SView col={"xs-2"} center flex onPress={() => {
                    STheme.change();
                }}>

                </SView>

            </SView>
        );

    }
}