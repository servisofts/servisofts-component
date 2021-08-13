import React, { Component } from 'react';
export declare type SThemeColors = {
    barStyle: "dark-content" | "light-content";
    barColor: string;
    primary: string;
    secondary: string;
    success?: string;
    warning?: string;
    danger?: string;
    error?: string;
    info?: string;
    background: string;
};
export declare type SThemeOptions = 'default' | 'dark';
export declare type SThemeThemes = {
    [index in SThemeOptions]: SThemeColors;
};
export declare type SThemeProps = {
    initialTheme: SThemeOptions;
    themes: SThemeThemes;
    onLoad: (color: SThemeColors) => any;
};
export default class STheme extends Component<SThemeProps> {
    static colorSelect: SThemeColors;
    static color: SThemeColors;
    static instance: STheme;
    static select(theme: SThemeOptions): string;
    static change(): void | "error";
    state: any;
    constructor(props: any);
    select(theme: SThemeOptions): string;
    change(): void;
    repaint(): React.ReactNode;
    render(): React.ReactNode;
}