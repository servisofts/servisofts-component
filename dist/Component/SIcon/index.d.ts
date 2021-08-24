import { Component } from 'react';
import { SAssets } from '../../Types';
import { IconNames } from '../../img/index';
declare type SIconType = {
    name?: IconNames;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
};
export default class SIcon extends Component<SIconType> {
    static Assets: {};
    static loadAssets(assets: SAssets): void;
    getIconName(_name: any): any;
    getIconProps(name: any): any;
    render(): JSX.Element;
}
export {};
