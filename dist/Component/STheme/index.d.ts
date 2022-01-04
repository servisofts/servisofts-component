import { Component } from 'react';
import { FontsType } from '../../font/index';
export declare type SThemeColors = {
    barStyle: "dark-content" | "light-content";
    barColor: string;
    primary: string;
    text?: string;
    card?: string;
    secondary: string;
    success?: string;
    warning?: string;
    danger?: string;
    bateon?: string;
    error?: string;
    info?: string;
    background?: string;
    black?: string;
    white?: string;
    gray?: string;
    lightGray?: string;
    darkGray?: string;
    lightBlack?: string;
    mapStyle?: any[];
    font?: FontsType;
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
    static getTheme(): any;
    state: any;
    animFadeOut: any;
    constructor(props: any);
    select(theme: SThemeOptions): string;
    change(): void;
    componentDidMount(): void;
    onAnim: any;
    animar(): void;
    fadeOut(): JSX.Element;
    repaint(): JSX.Element;
    render(): JSX.Element;
}
