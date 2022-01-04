import { Component } from 'react';
import { TextStyle, TextProps } from 'react-native';
import { SViewProps } from '../SView/index';
import { FontsType } from '../../font/index';
export declare type STextProps = {
    style?: TextStyle | [TextStyle] | any;
    primary?: boolean;
    secondary?: boolean;
    fontSize?: number;
    bold?: boolean;
    color?: string;
    underLine?: boolean;
    justify?: boolean;
    capitalize?: boolean;
    font?: FontsType;
} & SViewProps & TextProps;
export default class SText extends Component<STextProps> {
    constructor(props: any);
    render(): JSX.Element;
}
