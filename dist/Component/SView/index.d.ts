import { Component } from 'react';
import { ViewProps } from 'react-native';
import { SColType, SDirectionType } from '../../Types/index';
export declare type SViewProps = {
    col?: SColType;
    dir?: SDirectionType;
    row?: boolean;
    style?: any;
    onPress?: Function;
    colSquare?: boolean;
    center?: boolean;
    animated?: boolean;
    backgroundColor?: string;
    flex?: Number | boolean;
} & ViewProps & any;
export default class SView extends Component<SViewProps> {
    state: any;
    constructor(props: SViewProps);
    getData(): any;
    render(): JSX.Element;
}
