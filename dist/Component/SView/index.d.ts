import { Component } from 'react';
import { ViewProps } from 'react-native';
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
    height?: Number | boolean | string;
    withoutFeedback?: Boolean;
} & ViewProps;
export default class SView extends Component<SViewProps> {
    state: any;
    layout: any;
    constructor(props: SViewProps);
    getLayout(): any;
    getProp(prop: string): any;
    getData(): any;
    render(): JSX.Element;
}
