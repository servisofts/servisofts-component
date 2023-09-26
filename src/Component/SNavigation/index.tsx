import React, { Component, useEffect, useState } from 'react';
import { View, Text, Platform, Linking, KeyboardAvoidingView } from 'react-native';
import STheme from '../STheme/index';
import SPage from '../SPage/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pages from '../../Pages/index';
import SLoad from '../SLoad';
import SThread from '../SThread';
import { SUuid } from '../SUuid';
import SView from '../SView';
import SHr from '../SHr';
import SLinking, { SLinkingPropsType } from './SLinking';
export type SPageProps = {
    params?: [string],
    component: any,
    page?: any,
    header?: any,
    options?: {
        headerShown: boolean
    }
}
export declare type SPageListProps = {
    [name in string]?: SPageProps | object;
}
export type SNavigationProps = {
    linking?: SLinkingPropsType,
    props: {
        prefixes?: [string],
        pages: { [name in string]: SPageProps },
        title?: string,
        navBar?: any,
        validator?: any
    }
}

type navigationFuncion = {
    "addListener": Function,
    "canGoBack": Function,
    "dangerouslyGetParent": Function,
    "dangerouslyGetState": Function,
    "dispatch": Function,
    "getCurrentOptions": Function,
    "getCurrentRoute": Function,
    "getRootState": Function,
    "goBack": Function,
    "navigate": Function,
    "removeListener": Function,
    "reset": Function,
    "resetRoot": Function,
    "setParams": Function
}

const Stack = createStackNavigator();
var stateNavigator;
export default class SNavigation extends Component<SNavigationProps> {
    static navigation: any = null;
    static lastRoute: any;
    static navBar: any = null;
    static root: any;
    static routes = [];
    static reset(route: string, params?: object) {
        if (!SNavigation.lastRoute) {
            alert("no hay navegacion");
            return;
        }
        // if (Platform.OS === "web") {
        //     window.history.pushState([], "", route);
        // }
        SNavigation.lastRoute.navigation.reset({
            index: 0,
            routes: [{ name: route, params: params }]
        });
    }
    static openURL(route: string) {
        Linking.openURL(route);
    }
    static navigate(route: string, params?: object) {
        if (!SNavigation.lastRoute) {
            alert("no hay navegacion");
            return;
        }
        // if (Platform.OS === "web") {
        //     window.location.pathname = route
        // }
        SNavigation.lastRoute.navigation.navigate(route, params);
    }
    static replace(route: string, params?: object) {
        // if (Platform.OS === "web") {
        //     window.location.pathname = route
        // }
        SNavigation.lastRoute.navigation.replace(route, params);
    }
    static goBack() {
        if (SNavigation.lastRoute) {
            if (!SNavigation.lastRoute.navigation.canGoBack()) {
                if (SNavigation.lastRoute.route.name == SNavigation.root) {
                    SNavigation.lastRoute.navigation.replace(SNavigation.root);
                }
                if (Platform.OS == "web") {
                    var locstr = window.location.pathname;
                    locstr = locstr.substring(1, locstr.lastIndexOf("/"));

                    if (locstr == "/") {
                        SNavigation.lastRoute.navigation.replace(SNavigation.root);
                    }

                    // SNavigation.lastRoute.navigation.replace(locstr);
                    try {
                        SNavigation.lastRoute.navigation.replace("/" + locstr, SNavigation.getAllParams())
                    } catch (e) {
                        window.location.pathname = locstr;
                    }
                    return;
                } else {
                    SNavigation.lastRoute.navigation.replace(SNavigation.root);
                    return;
                }
                // if (locstr.split("/").length <= 2) {
                //     return <View />
                // }
            }
            SNavigation.lastRoute.navigation.goBack();
        }

    }
    static getAllParams() {
        var route = SNavigation.lastRoute?.route;
        var params = route?.params;
        if (!params) {
            return {};
        }
        return params;
    }
    static getParam(key: string, valDef?: any) {
        var route = SNavigation.lastRoute?.route;
        var params = route?.params;
        if (!params) {
            return valDef;
        }
        var param = params[key];
        if (!param) {
            return valDef;
        }
        return param;
    }
    static isBack() {
        if (Platform.OS == "web") {
            var prevent = false;
            if (SNavigation.lastRoute) {
                if (!SNavigation.lastRoute.navigation.canGoBack()) {
                    if (SNavigation.lastRoute.route.name == SNavigation.root) {
                        return false;
                    }
                    var locstr = window.location.pathname;
                    if (locstr == "/") {
                        return false;
                    }

                }
            }
        } else {
            if (!SNavigation.lastRoute) {
                return false;
            }
            if (!SNavigation.lastRoute.navigation.canGoBack()) {
                return false;
            }
        }
        return true;
    }


    constructor(props: any) {
        super(props);
        this.state = {
        };
        SNavigation.navBar = props.props.navBar;

    }

    getPages(pages, Stack) {
        const Validator = this.props?.props?.validator;
        let currentPage = "";
        return Object.keys(pages).map((key) => {
            if (!SNavigation.root) {
                SNavigation.root = key;
            }
            var Page = (props) => {
                try {
                    if (props) {
                        SNavigation.lastRoute = props;
                    }
                    var Page = pages[key].component;
                    if (!Page) {
                        Page = pages[key];
                    }
                    return <>
                        {!Validator ? null : <Validator />}
                        {Page.TOPBAR}
                        <Page {...props} />
                    </>
                } catch (e) {
                    console.error(e);
                    return null;
                }
            }
            return <Stack.Screen key={key} name={key}
                component={Page}
                options={{
                    title: this.props.props?.title ? this.props.props?.title : "Servisofts",
                    headerShown: false,
                    ...pages[key].options
                }} />
        })
    }


    render() {
        let colors = {
            primary: STheme.color.primary,
            background: STheme.color.background,
            card: STheme.color.card,
            text: STheme.color.text,
            border: "",
            notification: STheme.color.primary
        };

        const pages = {
            ...this.props.props.pages,
            ...Pages,
        }
        return (<NavigationContainer ref={(ref) => {
            SNavigation.navigation = ref;
        }}
            linking={SLinking(this.props.linking ?? {}, pages)}
            theme={{ dark: false, colors: colors }}
            onStateChange={(state) =>
                stateNavigator = state
                // AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            }
        ><Stack.Navigator>
                {this.getPages(pages, Stack)}
            </Stack.Navigator>
        </NavigationContainer >
        );

    }
}