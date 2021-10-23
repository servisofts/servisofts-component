import { Component } from 'react';
import { SAssets } from '../../Types';
import { IconNames } from '../../img/index';
declare type SIconType = {
    name?: IconNames;
    width?: number | string;
    height?: number | string;
    fill?: string;
    stroke?: string;
    opacity?: number | string;
    style?: any;
    bgr?: string;
};
export default class SIcon extends Component<SIconType> {
    static Assets: {};
    static loadAssets(assets: SAssets): void;
    getIconName(_name: any): any;
    getIconProps(name: any): any;
    render(): JSX.Element;
}
export {};
