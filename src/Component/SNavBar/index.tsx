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
    constructor(props) {
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
                        return <View />
                    }
                    var locstr = window.location.pathname;
                    if (locstr == "/") {
                        return <View />
                    }
                    // if (locstr.split("/").length <= 2) {
                    //     return <View />
                    // }
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

        return <SView col={"xs-12"} height style={{
            justifyContent: 'center',
        }}>
            <SView onPress={() => {
                // if (SNavigation.lastRoute) {
                // if (SNavigation.lastRoute.navigation.canGoBack()) {
                if (this.props.onBack) {
                    var prevent_default = this.props.onBack();
                    if (prevent_default) {
                        return;
                    }
                }
                SNavigation.goBack(this.props.backAlternative);

                // return;
                // }
                // }
                // if (Platform.OS == "web") {
                //     var locstr = window.location.pathname;
                //     var locations = locstr.split("/");
                //     locations = locations.slice(0, locations.length - 1);
                //     var navTo = "";
                //     locations.map((rout) => {
                //         if (navTo) {
                //             navTo += "/";
                //         }
                //         navTo += rout;
                //     });
                //     if (!navTo) {
                //         navTo = SNavigation.root;
                //     }
                //     SNavigation.replace(navTo);
                // }
            }} style={{
                maxWidth: 35,
            }} center height>
                <SIcon width={25} height={25} name={"Arrow"} fill={STheme.color.secondary} />
            </SView>
        </SView>
    }

    renderTitle(): any {
        if (this.props.titleLanguage) {
            return <SText language={this.props.titleLanguage} color={STheme.color.secondary} />
        }
        if (!this.props.title) return null;
        if (typeof this.props.title == "object") return this.props.title;
        return <SText color={STheme.color.secondary}>{this.props.title}</SText>
    }
    render() {

        return (
            <SView
                col={"xs-12"}
                row
                center
                style={{
                    height: 40,
                    backgroundColor: STheme.color.barColor,
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}>
                <SView col={"xs-2"} center height>
                    {this.getBack()}
                </SView>
                <SView col={"xs-8"} center flex>
                    {this.renderTitle()}
                </SView>
                <SView col={"xs-2"} center onPress={() => {
                    STheme.change();
                }}></SView>

            </SView>
        );

    }
}