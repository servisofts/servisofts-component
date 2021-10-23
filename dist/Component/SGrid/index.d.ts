import { Component } from 'react';
import { ViewStyle } from 'react-native';
import { SColType } from '../../Types/index';
export declare type SGridProps = {
    col: SColType;
    style: ViewStyle;
    colSquare?: boolean;
    flex?: Number | boolean;
    height?: any;
    onLayout?: (event: any) => void;
};
export default class SGrid extends Component<SGridProps> {
    key: string;
    animSize: any;
    medida: any;
    layout: any;
    constructor(props: any);
    getMax: (col: any) => any;
    setSize(): void;
    changeMedida(medida: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
