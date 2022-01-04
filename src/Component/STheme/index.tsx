import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Animated } from 'react-native';
import SThread from '../SThread/index';
import SStorage from '../SStorage';
import SLoad from '../SLoad';
import MapStyle from './MapStyle';
import SIcon from '../SIcon';
import { FontsType } from '../../font/index';
export type SThemeColors = {
    barStyle: "dark-content" | "light-content",
    barColor: string,
    primary: string,
    text?: string,
    card?: string,
    secondary: string,
    success?: string,
    warning?: string,
    danger?: string,
    bateon?: string,
    error?: string,
    info?: string,
    background?: string,
    black?: string,
    white?: string,
    gray?: string,
    lightGray?: string,
    darkGray?: string,
    lightBlack?: string,
    mapStyle?: any[],
    font?: FontsType,

}
export type SThemeOptions = 'default' | 'dark'
export type SThemeThemes = { [index in SThemeOptions]: SThemeColors };
export type SThemeProps = {
    initialTheme: SThemeOptions,
    themes: SThemeThemes,
    onLoad: (color: SThemeColors) => any
}

export default class STheme extends Component<SThemeProps> {
    public static colorSelect: SThemeColors;

    public static color: SThemeColors = {
        barStyle: "dark-content",
        barColor: "#000000",
        background: "#222222",
        primary: "#000000",
        card: "#22222266",
        secondary: "#ffffff",
        success: "#71AF4A",
        warning: "#EF8C38",
        danger: "#DF2732",
        bateon: "#95070C",
        error: "#ff0000",
        info: "#405394",
        black: "#000000",
        white: "#ffffff",
        gray: "#888888",
        lightGray: "#aaaaaa",
        darkGray: "#444444",
        lightBlack: "#666666",
        mapStyle: MapStyle.default,
    };
    public static instance: STheme;
    public static select(theme: SThemeOptions) {
        if (!this.instance) {
            return "error";
        }
        return this.instance.select(theme);
    };
    public static change() {
        if (!this.instance) {
            return "error";
        }
        return this.instance.change();
    };
    public static getTheme() {
        if (!this.instance) {
            return "error";
        }
        return this.instance.state.select;
    };

    state: any = {};
    animFadeOut;
    constructor(props: any) {
        super(props);
        STheme.instance = this;
        this.state = {
            isFadeOut: true,
            select: !this.props.initialTheme ? "default" : this.props.initialTheme,
        };
        // this.repaint();
        SStorage.getItem("themeState", (data) => {
            if (data) {
                this.select(data);
            } else {
                SStorage.setItem("themeState", this.state.select);
            }
        })
        this.animFadeOut = new Animated.Value(0);
    }
    select(theme: SThemeOptions) {
        if (!this.props.themes[theme]) {
            return "Theme not found "
        }
        this.state.select = theme;
        SStorage.setItem("themeState", theme);
        this.setState({ select: theme })
    }
    change() {
        this.state.select = this.state.select != "default" ? "default" : "dark";
        SStorage.setItem("themeState", this.state.select);
        this.setState({
            lastLoad: new Date().getTime()
        })
    }
    componentDidMount() {
        this.animar();
    }
    onAnim
    animar() {
        if (this.onAnim) return;
        this.setState({ fadeOut: true });
        this.animFadeOut.setValue(0);
        this.onAnim = true;
        Animated.timing(this.animFadeOut, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
        }).start((end) => {
            this.onAnim = false;
            this.state.isFadeOut = false;
            this.setState({ isFadeOut: false })
        });
    }
    fadeOut() {
        if (!this.state.isFadeOut) return;
        return <Animated.View style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "#f0f",
            backgroundColor: this.animFadeOut.interpolate({
                inputRange: [0, 0.8],
                outputRange: [STheme.color.primary, STheme.color.background]
            }),
            opacity: this.animFadeOut.interpolate({
                inputRange: [0, 0.8, 1],
                outputRange: [1, 0.9, 0]
            }),
        }}>

        </Animated.View>
    }
    repaint() {
        if (STheme.colorSelect != this.props.themes[this.state.select]) {
            STheme.colorSelect = this.props.themes[this.state.select];
            STheme.color = {
                ...STheme.color,
                mapStyle: MapStyle[this.state.select],
                ...this.props.themes[this.state.select]
            };
            if (this.state.lastLoad) {
                new SThread(10, "stheme-change", true).start(() => {
                    this.setState({
                        lastLoad: new Date().getTime()
                    })

                })
                this.animar();
                this.state.isFadeOut = true;

                return (<>
                    {this.fadeOut()}</>)
            } else {
                this.state.lastLoad = new Date().getTime();
            }
        }
        if (this.props.onLoad) {
            this.props.onLoad(STheme.color);
        }
        // new SThread(10, "report-onload-change", false).start(() => {

        // })
        return <>
            {this.props.children}
            {this.fadeOut()}
        </>
    }
    render() {
        return this.repaint()
    }
}