import { Component } from 'react';
import { ViewProps, TouchableOpacityProps } from 'react-native';
import { SColType, SDirectionType } from '../../Types/index';
export declare type SViewProps = {
    col?: SColType;
    dir?: SDirectionType;
    row?: boolean;
    data?: any;
    style?: any;
    onPress?: Function;
    colSquare?: boolean;
    center?: boolean;
    animated?: boolean;
    backgroundColor?: string;
    flex?: Number | boolean;
    height?: any;
    width?: Number | boolean | string;
    withoutFeedback?: Boolean;
    card?: boolean;
    border?: Number | boolean;
} & ViewProps & TouchableOpacityProps;
export default class SView extends Component<SViewProps> {
    state: any;
    layout: any;
    constructor(props: SViewProps);
    getLayout(): any;
    getProp(prop: string): any;
    getData(): any;
    _ELEM: any;
    render(): JSX.Element;
}
