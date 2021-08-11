import { Component } from 'react';
import { ViewStyle } from 'react-native';
import { SColType, SDirectionType } from '../../Types/index';
export declare type SViewProps = {
    col?: SColType;
    dir?: SDirectionType;
    row?: boolean;
    props?: SViewProps;
    style?: ViewStyle;
    onPress?: Function;
    colSquare?: boolean;
    center?: boolean;
    backgroundColor?: string;
    flex?: Number | boolean;
};
export default class SView extends Component<SViewProps> {
    state: any;
    constructor(props: SViewProps);
    render(): JSX.Element;
}
