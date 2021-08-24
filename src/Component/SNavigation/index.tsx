import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import STheme from '../STheme/index';
import SPage from '../SPage/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pages from '../../Pages/index';
export type SPageProps = {
    params?: [string],
    component: any,
    options?: {
        headerShown: boolean
    }
}
export declare type SPageListProps = {
    [name in string]?: SPageProps;
}
export type SNavigationProps = {
    props: {
        prefixes: [string],
        pages: { [name in string]: SPageProps }

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
    static root: any;
    static routes = [];
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
        SNavigation.lastRoute.navigation.goBack();
    }
    static getParam(key: string, valDef: any) {
        var route = SNavigation.lastRoute.route;
        var params = route.params;
        if (!params) {
            return valDef;
        }
        var param = params[key];
        if (!param) {
            return valDef;
        }
        return param;
    }

    constructor(props: any) {
        super(props);
        this.state = {
        };

    }


    getLinking() {
        const linking = {
            prefixes: this.props.props.prefixes,
            config: {
                screens: {}
            },
        };
        var pages = {
            ...this.props.props.pages,
            ...Pages,
        };
        SNavigation.root = "";
        Object.keys(pages).map((key) => {
            var url = key;
            if (!SNavigation.root) {
                SNavigation.root = url;
                url = "";
            }

            if (pages[key].params) {
                pages[key].params.map((parm) => {
                    url += "/:" + parm;
                })
            }

            linking.config.screens[key] = url;
        })
        return linking;
    }
    getPages(Stack) {
        var pages = {
            ...this.props.props.pages,
            ...Pages,
        };
        return Object.keys(pages).map((key) => {
            var Page = (props) => {
                try {
                    if (props) {
                        SNavigation.lastRoute = props;
                    }
                    var Page = pages[key].component;
                    return <Page {...props} />
                } catch (e) {
                    return <View />
                }

            }
            return <Stack.Screen key={key} name={key}
                component={Page}
                options={{
                    title: "Servisofts",
                    headerShown: false,
                    ...pages[key].options
                }} />
        })
    }
    render() {
        // var NavigationContainer = this.props.props.NavigationContainer;
        // var Stack = this.props.props.Stack;
        return (<NavigationContainer ref={(ref) => {
            SNavigation.navigation = ref;
        }} linking={this.getLinking()} theme={{
            dark: false,
            colors: {
                background: STheme.color.background
            }
        }}
            initialState={stateNavigator}
            onStateChange={(state) =>
                stateNavigator = state
                // AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            }
        >
            <Stack.Navigator>
                {this.getPages(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
        );

    }
}