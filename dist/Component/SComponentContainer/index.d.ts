import { Component } from 'react';
import SGrid from '../SGrid/index';
import { SThemeProps } from '../STheme/index';
import { SAssets } from '../../Types';
import { SInputsCofig } from "../../Types/index";
export declare type SComponentContainerProps = {
    theme?: SThemeProps;
    background?: any;
    debug?: boolean;
    socket?: any;
    assets?: SAssets;
    inputs?: SInputsCofig;
};
export default class SComponentContainer extends Component<SComponentContainerProps> {
    private static Instance;
    private static GridListen;
    static SSocket: any;
    static registerGrid(key: string, grid: SGrid): void;
    static removeGrid(key: string): void;
    static getInputsConfig(): SInputsCofig;
    layout: any;
    state: any;
    constructor(props: any);
    onChangeSize(layout: any): void;
    getContenido(): JSX.Element;
    render(): JSX.Element;
}
