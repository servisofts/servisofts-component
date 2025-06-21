import React, { Component, useEffect } from 'react';
import { View, Text, Platform, Linking, KeyboardAvoidingView } from 'react-native';
import STheme from '../STheme/index';
import SPage from '../SPage/index';
import { NavigationContainer, NavigationContainerRef, Route, StackActions } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import Pages from '../../Pages/index';
import SLoad from '../SLoad';
import SThread from '../SThread';
import { SUuid } from '../SUuid';
import SView from '../SView';
import SHr from '../SHr';
import SLinking, { SLinkingPropsType, openURL } from './SLinking';
import SNotificationContainer from '../SNotification/SNotificationContainer';
import SNavigationStack from './SNavigationStack';

export type SPageProps = {
    params?: [string],
    component: any,
    page?: any,
    header?: any,
    options?: {
        headerShown: boolean
    }
}
export type BackAlternative = (opt: { url: string, params: any }) => void
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
    static navigation: NavigationContainerRef = null;
    static lastRoute: any;
    static navBar: any = null;
    static root: any;
    static routes = [];
    static pagesAvailable = [];
    static INSTANCE: SNavigation;


    static Listeners = [];
    static addOnChangeListener(cb: (state: Route<any>) => any) {
        if (SNavigation.Listeners.find((item) => item == cb)) {
            return;
        }
        SNavigation.Listeners.push(cb);
    }

    static removeOnChangeListener(cb: (state: Route<any>) => any) {
        SNavigation.Listeners = SNavigation.Listeners.filter((item) => item != cb);
    }

    static disatchOnChangeListener(state: Route<any>) {
        SNavigation.Listeners.forEach((item) => {
            try {
                item(state);
            } catch (e) {
                console.error(e);
            }
        })
    }
    static reset(route: string, params?: object) {
        if (!SNavigation.lastRoute) {
            // alert("no hay navegacion");
            return;
        }
        // if (Platform.OS === "web") {
        //     window.history.pushState([], "", route);
        // }
        // SNavigation.navigation.dispatch(CommonActions.reset({
        //     index: 0,
        //     routes: [{ name: route, params: params }]
        // }))
        // SNavigation.navigation.dispatch(
        //     StackActions.reset({
        //         index: 0,
        //         actions: [NavigationActions.navigate({ routeName: 'Home' })],
        //     })
        // );
        // SNavigation.navigation.
        // SNavigation.lastRoute.navigation.popToTop();
        SNavigation.navigation.reset({
            routes: [{ name: route, params: params }]
        })

        // SNavigation.navigation.dispatch(CommonActions.reset({
        //     index: 0,
        //     routes: [{ name: route, params: params }]
        // }))
        // SNavigation.lastRoute.navigation.reset({
        //     index: 0,
        //     routes: [{ name: route, params: params }]
        // });
    }
    static openDeepLink(route: string, replace?: boolean) {
        if (!SNavigation.INSTANCE) return;
        SNavigation.INSTANCE.openDeepLink(route, replace);
    }
    static openURL(route: string) {
        Linking.openURL(route);
    }
    static navigate(route: string, params?: object) {
        if (!SNavigation.navigation) {
            // alert("no hay navegacion");
            console.log("SNavigation", "No hay navegacion")
            return;
        }
        // if (Platform.OS === "web") {
        //     window.location.pathname = route
        // }
        SNavigation.navigation.navigate(route, params);
    }
    static replace(route: string, params?: object) {
        // if (Platform.OS === "web") {
        //     window.location.pathname = route
        // }
        if (!SNavigation.navigation) {
            // alert("no hay navegacion");
            return;
        }

        // Si estás en una plataforma web, puedes actualizar la URL de la siguiente manera
        if (Platform.OS === "web") {
            // window.location.pathname = route;
            const replaceAction = StackActions.replace(route, params);
            SNavigation.navigation.dispatch(replaceAction);
            // SNavigation.navigation.navigate(route, params);
        } else {
            // Reemplaza la ruta actual utilizando la referencia de navegación estática
            // @ts-ignore
            const replaceAction = StackActions.replace(route, params);
            SNavigation.navigation.dispatch(replaceAction);
            // SNavigation.navigation.replace(route, params);
        }
        // SNavigation.navigation.replace(route, params);
    }
    static goBack(alternative?: BackAlternative) {
        try {
            console.log("GoBack")

            if (SNavigation.navigation) {
                if (!SNavigation.navigation.canGoBack()) {
                    if (alternative) {
                        alternative({
                            params: SNavigation.navigation.getCurrentRoute().params,
                            url: SNavigation.navigation.getCurrentRoute().name
                        })
                        return;
                    }
                    // if (SNavigation.lastRoute.route.name == SNavigation.root) {
                    //     SNavigation.replace(SNavigation.root);
                    // }

                    if (Platform.OS == "web") {
                        console.log("GOBACK", "Intentando go back")
                        var locstr = window.location.pathname
                        // console.log("history", window.history.state)
                        locstr = locstr.substring(1, locstr.lastIndexOf("/"));
                        if (locstr == "/") {
                            SNavigation.replace(SNavigation.root);
                        }

                        // SNavigation.lastRoute.navigation.replace(locstr);
                        if (SNavigation.pagesAvailable.includes("/" + locstr)) {
                            SNavigation.replace("/" + locstr, SNavigation.navigation.getCurrentRoute().params)
                        } else if (SNavigation.pagesAvailable.includes(locstr)) {
                            SNavigation.replace(locstr, SNavigation.navigation.getCurrentRoute().params)
                        } else {
                            SNavigation.replace(SNavigation.root);
                        }
                        // try {
                        //     console.log("history", "/" + locstr, SNavigation.getAllParams())
                        //     SNavigation.lastRoute.navigation.replace("/" + locstr, SNavigation.getAllParams())
                        // } catch (e) {
                        //     console.log("history", "error", e)
                        //     window.location.pathname = locstr;
                        // }
                        return;
                    } else {
                        // SNavigation.navigation.resetRoot();
                        SNavigation.replace(SNavigation.root);
                        return;
                    }
                    // if (locstr.split("/").length <= 2) {
                    //     return <View />
                    // }
                    SNavigation.navigation.resetRoot();
                } else {
                    SNavigation.navigation.goBack()
                }

            } else {
                console.log("Se perdio la navegacion regresando")
                SNavigation.reset("/");
            }
        } catch (error) {
            console.error(error)
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
        SNavigation.INSTANCE = this;
    }

    openDeepLink(url, replace?: boolean) {
        openURL(url, this.props.linking.prefixes, replace);
    }
    handleDeepLink = (event) => {

        // let data = Linking.parse(event.url);
        console.log("ENTRO EN EL HANDLE DEEPLINK", event)
        if (event.url) {
            openURL(event.url, this.props.linking.prefixes, false);
            // Navega a la pantalla de detalles con los parámetros del enlace
            // navigation.navigate('Details', { pk: data.queryParams.pk });
        }
    }
    deleteListener;
    componentDidMount(): void {
        this.deleteListener = Linking.addEventListener('url', this.handleDeepLink);
        // this.initialURL();


    }


    async initialURL() {
        const url = await Linking.getInitialURL();
        console.log("ENTRO AL LINKING GET INITIAL URL", url)
        if (url != null) {
            new SThread(1000, "deeplink", false).start(() => {
                this.openDeepLink(url);
            })
        }
        if (this.props.linking.getInitialURL) this.props.linking.getInitialURL();
    }
    componentWillUnmount(): void {
        if (this.deleteListener) {
            console.log(this.deleteListener)
            this.deleteListener.remove();
            this.deleteListener = null;
        }

    }
    static lastPageInstaced = null;
    getPages(pages, Stack) {
        const Validator = this.props?.props?.validator;
        let currentPage = "";
        return Object.keys(pages).map((key) => {
            if (!SNavigation.root) {
                SNavigation.root = key;
            }
            var _Page = pages[key].component;
            if (!_Page) {
                _Page = pages[key];
            }


            var Page = (props) => {

                const [_key, _setKey] = React.useState(SUuid());
                SNavigation.lastPageInstaced = {
                    ...props, key: _key,
                    class: _Page,
                    forceUpdate: () => {
                        _setKey(SUuid());
                    }
                };
                
                if (!SNavigation.navigation) {
                    SNavigation.navigation = props.navigation;
                }
                // useEffect(() => {
                //     console.log(JSON.stringify(props.route))
                // }, [])
                SNavigation.lastRoute = props;
                try {

                    return <>
                        {!Validator ? null : <Validator />}
                        {_Page.TOPBAR}
                        <_Page {...props} />
                        {_Page.FOOTER}
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
        SNavigation.pagesAvailable = Object.keys(pages);
        // console.log("Entro al RENDER DE SNavigation", this.props)
        return (<NavigationContainer ref={(ref) => {
            if (!ref) {
                // console.log("SNavigation", "Se retorno por que estaba vacio")
                return;
            }
            // console.log("SNavigation", "Se seteo la navegacion")
            SNavigation.navigation = ref;
        }}
            linking={SLinking(this.props.linking ?? {}, pages)}
            // onReady={() => {
            //     if (this?.props?.linking?.getInitialURL) {
            //         this.props.linking.getInitialURL();
            //     }
            // }}
            onReady={() => {
                // console.log("SNavigation", "onReady", SNavigation.navigation.getCurrentRoute())
                SNavigation.disatchOnChangeListener(SNavigation.navigation.getCurrentRoute());
            }}
            theme={{ dark: false, colors: colors }}
            onStateChange={(state) => {
                stateNavigator = state
                const currentRoute = state.routes[state.index];
                SNavigation.disatchOnChangeListener(currentRoute);
                // console.log("SNavigation", "onStateChange", state)
                // AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            }}


        ><Stack.Navigator>
                {this.getPages(pages, Stack)}
            </Stack.Navigator>
        </NavigationContainer >
        );

    }
}