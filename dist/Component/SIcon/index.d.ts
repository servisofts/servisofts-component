import { Component } from 'react';
import * as Icon2 from '../../img/Icon2/index';
declare type IconNames = "Icon2" | "Arrow";
declare type SIconType = {
    name?: IconNames;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
};
export default class SIcon extends Component<SIconType> {
    getIconName(name: IconNames): typeof Icon2;
    render(): JSX.Element;
}
export {};
