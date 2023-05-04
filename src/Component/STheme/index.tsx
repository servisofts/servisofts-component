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
    accent?: string,
    error?: string,
    info?: string,
    background?: string,
    black?: string,
    white?: string,
    gray?: string,
    lightGray?: string,
    darkGray?: string,
    blue?: string,
    link?: string,
    lightBlack?: string,
    mapStyle?: any[],
    font?: FontsType,


}
export type SThemeOptions = 'default' | 'dark'
export type SThemeThemes = { [index in SThemeOptions]: SThemeColors };
export type SThemeProps = {
    initialTheme: SThemeOptions,
    themes: SThemeThemes,
    noAnimated?: boolean,
    data?: any,
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
        accent: "#00CC00",
        info: "#405394",
        black: "#000000",
        white: "#ffffff",
        gray: "#888888",
        lightGray: "#aaaaaa",
        darkGray: "#444444",
        lightBlack: "#666666",
        blue: "#0000FF",
        link: "#6666ff",
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

    state: any;
    animFadeOut;
    constructor(props: any) {
        super(props);
        STheme.instance = this;
        this.state = {
            isFadeOut: true,
            select: !this.props.initialTheme ? "default" : this.props.initialTheme,
        };
        // this.repaint();
        this.animFadeOut = new Animated.Value(0);
    }
    componentDidMount() {
        this.getItemTheme();

    }
    async getItemTheme() {
        SStorage.getItem("themeState", (data) => {
            if (data) {
                this.select(data);
            } else {
                SStorage.setItem("themeState", this.state.select);
                this.select(this.state.select);
            }
        })
    }
    select(theme: SThemeOptions) {
        if (!this.props.themes[theme]) {
            return "Theme not found "
        }
        this.state.select = theme;
        if (STheme.colorSelect != this.props.themes[this.state.select]) {
            // if (this.props.onLoad) {
            //     this.props.onLoad(null);
            // }
            STheme.colorSelect = this.props.themes[this.state.select];
            STheme.color = {
                ...STheme.color,
                mapStyle: MapStyle[this.state.select],
                ...this.props.themes[this.state.select]
            };
        }
        new SThread(100, "algo", false).start(() => {
            SStorage.setItem("themeState", theme);
            if (this.props.onLoad) {
                this.props.onLoad(STheme.color);
            }
        })

    }
    change() {
        this.state.select = this.state.select != "default" ? "default" : "dark";
        SStorage.setItem("themeState", this.state.select);
        this.select(this.state.select);
    }

    render() {
        if (!this.props.data) return <View />
        return this.props.children
    }
}