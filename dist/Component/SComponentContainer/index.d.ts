import { Component } from 'react';
import SGrid from '../SGrid/index';
import { SThemeProps } from '../STheme/index';
import { SAssets } from '../../Types';
export declare type SComponentContainerProps = {
    theme?: SThemeProps;
    debug?: boolean;
    socket?: any;
    assets?: SAssets;
};
export default class SComponentContainer extends Component<SComponentContainerProps> {
    private static Instance;
    private static GridListen;
    static SSocket: any;
    static registerGrid(key: string, grid: SGrid): void;
    static removeGrid(key: string): void;
    layout: any;
    state: any;
    constructor(props: any);
    onChangeSize(layout: any): void;
    getContenido(): JSX.Element;
    render(): JSX.Element;
}
