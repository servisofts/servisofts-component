import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SThread from '../SThread/index';
import SStorage from '../SStorage';


export type SThemeColors = {
    barStyle: "dark-content" | "light-content",
    barColor: string,
    primary: string,
    secondary: string,
    background: string,
}
export type SThemeOptions = 'default' | 'dark'
export type SThemeThemes = { [index in SThemeOptions]: SThemeColors };
export type SThemeProps = {
    initialTheme: SThemeOptions,
    themes: SThemeThemes,
    onLoad: (color: SThemeColors) => any
}

export default class STheme extends Component<SThemeProps> {
    public static color: SThemeColors = {
        barStyle: "dark-content",
        barColor: "#000000",
        background: "#000000",
        primary: "#000000",
        secondary: "#000000"
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

    state: any = {};
    constructor(props: any) {
        super(props);
        STheme.instance = this;
        this.state = {
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

    repaint() {
        if (STheme.color != this.props.themes[this.state.select]) {
            STheme.color = this.props.themes[this.state.select];
            if (this.state.lastLoad) {
                new SThread(10, "stheme-change", true).start(() => {
                    this.setState({
                        lastLoad: new Date().getTime()
                    })

                })
                return <View />
            } else {
                this.state.lastLoad = new Date().getTime();
            }
        }
        new SThread(10, "report-onload-change", true).start(() => {
            if (this.props.onLoad) {
                this.props.onLoad(STheme.color);
            }
        })
        return this.props.children
    }
    render() {
        return this.repaint()
    }
}